import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { List, Empty, AddContact, ModalComponent } from "../components";

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
      <div className="d-flex flex-column justify-content-between container-page">
        <div className="mb-4 mt-4 container">
          <div className="d-flex justify-content-between mt-4">
            <p class="h4">Listado Estudiantes</p>
            <Button onClick={this.toggleModal} color="info">
              Agregar Estudiantes
            </Button>
          </div>
          {actors ? <List actors={actors} /> : <Empty />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  actores: state.contacts
});

export default connect(mapStateToProps)(ListActors);
