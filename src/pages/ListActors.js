import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { List, Empty, AddContact, ModalComponent } from "../components";

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
    const { contacs } = this.props;
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
            <p className="h4">Listado Estudiantes</p>
            <Button onClick={this.toggleModal} color="info">
              Agregar Estudiantes
            </Button>
          </div>
          {contacs ? <List actors={contacs} /> : <Empty />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  contacs: state.contacts[ownProps.match.params.type]
});

export default connect(mapStateToProps)(ListActors);
