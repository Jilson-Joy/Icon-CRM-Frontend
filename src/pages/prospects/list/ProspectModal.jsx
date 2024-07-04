import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, TextInput, Label } from 'flowbite-react';

const ProspectModal = ({ show, onClose, onSave, prospect }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    telephone: '',
    address1: '',
    district: '',
    pincode: '',
    created_on: ''
  });

  const modalRef = useRef();

  useEffect(() => {
    if (prospect) {
      setFormData(prospect);
    }
  }, [prospect]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Header>
          {prospect ? 'Edit Prospect' : 'Add Prospect'}
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="mb-4">
              <Label htmlFor="name" value="Name" />
              <TextInput
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="telephone" value="Telephone" />
              <TextInput
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="Enter telephone"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="address1" value="Address" />
              <TextInput
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                placeholder="Enter address"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="district" value="District" />
              <TextInput
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                placeholder="Enter district"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="pincode" value="PIN Number" />
              <TextInput
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter PIN number"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="created_on" value="Proposed Date" />
              <TextInput
                id="created_on"
                name="created_on"
                value={formData.created_on}
                onChange={handleChange}
                placeholder="Enter proposed date"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>
            Save
          </Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ProspectModal;
