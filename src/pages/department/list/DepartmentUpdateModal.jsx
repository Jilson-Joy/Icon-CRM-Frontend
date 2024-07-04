import React, { useEffect, useRef } from 'react';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import './DepartmentUpdateModal.css'
const DepartmentUpdateModal = ({ show, onClose, onSave, formData, handleChange }) => {
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
          <div className='Edit_depart_header'>
            <h2>Edit Department</h2>
          </div>
          <div className='Edit_depart_section'>
            <div className="Edit_depart_section_a1">
              <label htmlFor="name" >Name</label>
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>
            <div className="Edit_depart_section_a1">
              <label htmlFor="code" >Code</label>
              <TextInput
                id="code"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Enter code"
              />
            </div>
          </div>
          <div className='Edit_depart_btns'>
          <Button onClick={onSave} className='Edit_depart_btns1'>Save</Button>
          <Button  onClick={onClose}  className='Edit_depart_btns1'>
            Cancel
          </Button>
          </div>
        </Modal.Body>
        
     </div>
    </Modal>
  );
};

export default DepartmentUpdateModal;
