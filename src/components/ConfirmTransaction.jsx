import React, { Component } from 'react';
import { connect } from "react-redux";

import s from './ConfirmTransaction.module.css';
import { fetchCards } from '../redux/actions/cards';

class ConfirmTransaction extends Component {

  componentDidMount() {
    this.props.fetchCards();
  }

  render() {
    const { numberOfStudents, amount } = this.props
    return (
      <div className={s.container}>
        <div className={s.header}>REALIZAR TRANSFERENCIA</div>
        <div className={s.amount}>
          USD $ {parseFloat(numberOfStudents * amount).toLocaleString('es')}
        </div>

        <div className={s.about}>
          <div className={s.info}>
            <p>Cantd de becas</p><span>{numberOfStudents}</span>
          </div>
          <div className={s.info}>
            <p>Valor de las becas</p><span>USD ${amount}</span>
          </div>
        </div>

        <div className={s.cardSelection}>
          <div>Elegir Tarjeta</div>
          <div className={s.dropdown}></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCards: () => dispatch(fetchCards()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmTransaction)