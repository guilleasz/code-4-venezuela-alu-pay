import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContacts } from '../redux/actions/contacts'
import { fetchCards } from '../redux/actions/cards'
import { transfer } from '../redux/actions/transfer'
import Header from '../components/Header'
import s from './PaymentsDashboard.module.scss'
import styles from '../pages/Dashboard.module.css'
import editIcon from '../components/icons/pencil.svg'
import ModalComponent from './ModalComponent'
import ConfirmTransaction from './ConfirmTransaction'
import okIcon from '../components/icons/ok.svg'
import cancelIcon from '../components/icons/cancel.svg'

const dictionary = {
  students: 'estudiantes',
  professors: 'profesores'
}

const values = {
  students: 35,
  professors: 150
}

class PaymentsDashboard extends React.Component {

  state = {
    value: values[this.props.match.params.type],
    editValue: false,
    openModal: false,
    oldValue: values[this.props.match.params.type],
    isEditing: false
  }

  componentDidMount() {
    this.props.fetchContacts()
    this.props.fetchCards()
  }

  startTransfer = (cardId) => {
    const { transfer, contacts } = this.props
    const { value } = this.state 
    const body = {
      amount: value,
      currency: 'USD',
    }

    return transfer(contacts, body, cardId)
  }

  openModal = () => {
    this.setState({
      openModal: true
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false
    })
  }

  editValue = () => {
    this.setState({
      isEditing: true
    })
  }

  handleValueChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  confirmValue = () => {
    this.setState({
      isEditing: false,
      oldValue: this.state.value
    })
  }

  cancelValue = () => {
    this.setState({
      isEditing: false,
      value: this.state.oldValue
    })
  }

  render() {
    const { match, contacts } = this.props
    const { value, isEditing, openModal } = this.state
    const entity = dictionary[match.params.type]
    return (
      <>
       <Header />
        <div className={s.container}>
          <h1 className={s.title}>REALIZAR TRANSFERENCIAS</h1>
          <div className={s.subHeader}>
            <h2 className={s.entity}>{entity.toUpperCase()}</h2>
            <Link className={s.editList} to={`/list/${match.params.type}`}>Editar lista de contactos <img src={editIcon} alt="Edit Icon"/></Link>
          </div>
          <div className={s.row}>
            <div className={s.controller}>
              <div className={s.label}>
                Cantidad de {entity}
              </div>
              <div className={s.value}>{contacts.length}</div>
            </div>
            <div className={s.controller}>
              <div className={s.label}>
                Monto de la beca
              </div>
              <div className={s.value}>
                USD $
                {!isEditing ?
                  <span className={s.editValue}>{value} <img onClick={this.editValue} src={editIcon} alt="Edit Icon"/></span>
                :
                  <span>
                    <input className={s.editValueInput} value={value} onChange={this.handleValueChange} />
                    <img src={okIcon} onClick={this.confirmValue} alt="Accept Value" />
                    <img src={cancelIcon} onClick={this.cancelValue} alt="Cancel Value" />
                  </span>
                }
              </div>
  
            </div>
            <div className={s.controller}>
              <div className={s.label}>
                Total de dinero a transferir
              </div>
              <div className={s.value}>${contacts.length * value} USD</div>
            </div>
            <div className={s.controller}>
              <button
                disabled={isEditing}
                onClick={this.openModal}
                className={s.transfer}
              >
                Transferir
              </button> 
            </div>
          </div>
        </div>
        <ModalComponent
          open={openModal}
          component={ConfirmTransaction}
          transfer={this.startTransfer}
          amount={value}
          numberOfTransf={contacts.length}
          close={this.closeModal}
        />
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts[ownProps.match.params.type]
})

const mapDispatchToProps = {
  fetchContacts,
  fetchCards,
  transfer,
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsDashboard)
