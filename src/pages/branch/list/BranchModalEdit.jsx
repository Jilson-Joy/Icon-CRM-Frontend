import React, { useEffect, useRef } from 'react';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import './BranchModalEdit.css'
const BranchModalEdit = ({ show, onClose, onSave, formData, handleChange }) => {
  const modalRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return (
    <Modal show={show} onClose={onClose}>
    <div ref={modalRef}>
       
        <Modal.Body>
          <div className='EditBranch_header'>
            <h2>Edit Branch</h2>
          </div>
          <div>
            <div className="">
              <label htmlFor="Name">Name</label>
              <TextInput
                id="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="">
              <label htmlFor="Code">Code</label>
              <TextInput
                id="Code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Code"
              />
            </div>
          </div>
          <div className='EditBranch_btns'>
          <Button onClick={onSave} className='EditBranch_btn'>
            Save
          </Button>
          <Button  onClick={onClose} className='EditBranch_btn'>
            Cancel
          </Button>
          </div>
        </Modal.Body>
       
    </div>
    </Modal>
  );
};

export default BranchModalEdit;
