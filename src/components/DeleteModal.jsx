import React from 'react';
import { Button, Modal } from 'flowbite-react';

function DeleteModal({ show, onClose, onDelete, item }) {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>
        Confirm Delete
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete</p>
      </Modal.Body>
      <Modal.Footer>
        <Button color="failure" onClick={onDelete}>
          Delete
        </Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;

