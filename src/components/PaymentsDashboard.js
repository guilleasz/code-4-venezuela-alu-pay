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
    editValue: false
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
    transfer(contacts, body, cardId)
  }

  render() {
    const { match, contacts } = this.props
    const { value, editValue } = this.state
    const entity = dictionary[match.params.type]
    return (
      <>
       <Header />
         <div className={styles.dashboardContainer}>
             <div className={styles.dashboardAmountContainer}>
                 <div className={styles.dashboardAmount}>
                     <span>SALDO TOTAL</span>
                   <span>USD $15.00 </span>
                 </div>
                 <div className={styles.dashboardAmount}>
                     <span>SALDO DISPONIBLE</span>
                   <span>USD $10.00 </span>
                 </div>
                 <div className={styles.dashboardAmount}>
                     <span>SALDO PENDIENTE</span>
                        <span>USD $5.00 </span>
                 </div> 
            </div>
          </div>
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
                {!editValue ?
                  <span className={s.editValue}>{value} <img src={editIcon} alt="Edit Icon"/></span>
                :
                  <input className={s.editValueInput} value={value} />
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
              <button className={s.transfer}>Transferir</button> 
            </div>
          </div>
        </div>
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
