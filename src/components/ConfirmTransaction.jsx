import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  ValidationForm,
  TextInput,
  SelectGroup
} from "react-bootstrap4-form-validation";

import s from './ConfirmTransaction.module.css';
import { fetchCards } from '../redux/actions/cards';

class ConfirmTransaction extends Component {

  state = {
    success: null,
    loading: false,
    cardSelected: null
  }

  componentDidMount = () => {
    this.props.fetchCards()
      .then(() => this.setState({ cardSelected: this.props.cards[0].id }));
  }

  handleCardChange = (e) => {
    this.setState({
      cardSelected: e.target.value
    })
  }

  confirmTransaction = () => {
    this.props.transfer(this.state.cardSelected)
  }

  render() {
    const { numberOfTransf, amount, cards } = this.props;
    const { cardSelected } = this.state;
    return (
      <div className={s.container}>
        <div className={s.header}>REALIZAR TRANSFERENCIA</div>
        <div className={s.amount}>
          USD $ {parseFloat(numberOfTransf * amount).toLocaleString('es')}
        </div>

        <div className={s.about}>
          <div className={s.info}>
            <p>Cantd de becas</p><span>{numberOfTransf}</span>
          </div>
          <div className={s.info}>
            <p>Valor de las becas</p><span>USD ${amount}</span>
          </div>
        </div>

        <div className={s.cardSelection}>
          <label>Elegir Tarjeta</label>
          <div className={s.dropdown}>
            <ValidationForm>
              <SelectGroup
                name="card"
                id="card"
                value={cardSelected}
                required errorMessage="Please select a color."
                onChange={this.handleCardChange}
              >
                {cards.map(card => (
                  <option
                    key={card.id}
                    value={card.id}
                  >
                    {card.label} - $ {card.available}
                  </option>
                ))}
              </SelectGroup>
            </ValidationForm>
          </div>
        </div>

        <div className={s.warning}>
          Advertencia: esta transferencia no puede ser revertida o deshacerse
        </div>

        <button class={`${s.button} ${s.confirm}`} onClick={this.confirmTransaction}>confirm</button>
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