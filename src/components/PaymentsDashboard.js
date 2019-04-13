import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import s from './PaymentsDashboard.scss'
import { fetchContacts } from '../redux/actions/contacts'
import { fetchCards } from '../redux/actions/cards'

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
    value: values[this.props.match.params.type]
  }

  componentDidMount() {
    this.props.fetchContacts()
    this.props.fetchCards()
  }

  render() {
    const { match, entities } = this.props
    const { value } = this.state
    const entity = dictionary[match.params.type]
    return (
      <div>
        <h1 className={s.title}>{entity.toUpperCase()}</h1>
        <Link className={s.editList} to={`/list/${match.params.type}`}>Editar lista</Link>
        <div className={s.row}>
          <div className={s.controller}>
            <div className={s.label}>
              Cantidad de {entity}
            </div>
            <div className={s.value}>{entities}</div>
          </div>
          <div className={s.controller}>
            <div className={s.label}>
              Monto de Pago
            </div>
            <div className={s.value}>${value} USD</div>
            <div className={s.editValue}>Cambiar</div>
          </div>
          <div className={s.controller}>
            <div className={s.label}>
              Total
            </div>
            <div className={s.value}>${entities * value} USD</div>
          </div>
          <div className={s.controller}>
            <button>Realizar Pago</button> 
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  entities: state.contacts[ownProps.match.params.type].length
})

const mapDispatchToProps = () => ({
  fetchContacts,
  fetchCards,
})

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsDashboard)
