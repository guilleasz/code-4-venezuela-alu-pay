import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ConfirmTransaction from "./ConfirmTransaction";

const List = props => {
  const { actors } = props;
  return (
    <ListGroup>
      {actors.map(actor => (
        <ListGroupItem key={actor.id}>{actor.name}</ListGroupItem>
      ))}
    </ListGroup>
  );
};


export default List;
