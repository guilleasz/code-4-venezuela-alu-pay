import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { List, Empty } from "../components";

const actors = ["Juan", "Pedro", "Luis", "Facu"];

class ListActors extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-between container-page">
        <div className="mb-4 mt-4 container">
          <div className="d-flex justify-content-between mt-4">
            <p class="h4">Listado Estudiantes</p>
            <Button color="info">Agregar Estudiantes</Button>
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
