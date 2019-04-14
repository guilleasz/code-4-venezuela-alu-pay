import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { List, Empty, AddContact, ModalComponent } from "../components";
import s from './ListActors.module.scss'
import Header from '../components/Header'
const actors = ["Juan", "Pedro", "Luis", "Facu"];

class ListActors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modal: !this.state.modal
    });
  };

  render() {
    return this.state.modal ? (
      <ModalComponent
        open={this.state.modal}
        close={this.toggleModal}
        component={AddContact}
      />
    ) : (
      <>
      <Header/>
        <div className={s.container}>
         <div className={s.align}>
         <h1>VOLVER A LA TRANSFERENCIA</h1>
         <button>ESTUDIANTES</button>
          <input type="text"/> search
         <div>
              <Button onClick={this.toggleModal} color="info">
                Agregar Estudiantes
              </Button>

            {actors ? <List actors={actors} /> : <Empty />}
          </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  actores: state.contacts
});

export default connect(mapStateToProps)(ListActors);
