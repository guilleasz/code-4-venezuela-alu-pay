import React from "react";
import Modal from "react-responsive-modal";

const ModalComponent = props => {
  const { component: Component } = props;
  return (
    <Modal open={props.open} onClose={props.close} closeOnOverlayClick={true}>
      <Component {...props} />
    </Modal>
  );
};

export default ModalComponent;
