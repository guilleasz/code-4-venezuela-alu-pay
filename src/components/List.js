import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const List = props => {
  const { actors } = props;
  return (
    <ListGroup>
      {actors.map(actor => (
        <ListGroupItem>{actor}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default List;