import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Editor from "../Components/Editor/editor";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Answer :</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Editor data={props.data} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function ExploreModal({ modalShow, setModalShow, data }) {
  return (
    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      data={data}
    />
  );
}

export default ExploreModal;
