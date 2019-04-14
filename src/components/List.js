import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ConfirmTransaction from "./ConfirmTransaction";

const List = props => {
  const { actors } = props;
  return (
    <ListGroup>
      <ConfirmTransaction amount={35} numberOfStudents={100} />
      {actors.map(actor => (
        <ListGroupItem>{actor}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default List;
