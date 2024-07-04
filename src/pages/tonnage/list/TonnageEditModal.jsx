import React, { useState, useEffect } from 'react';
import { Button, Modal, TextInput, Label } from 'flowbite-react';
import './TonnageEditModal.css'
function TonnageEditModal({ tonnage, onClose, onUpdate }) {
  const [name, setName] = useState(tonnage.name);
  const [code, setCode] = useState(tonnage.code);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTonnage = { ...tonnage, name, code };
    onUpdate(updatedTonnage);
    onClose();
  };

  useEffect(() => {
    setName(tonnage.name);
    setCode(tonnage.code);
  }, [tonnage]);

  return (
    <Modal show onClose={onClose}>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className='EditTonnage_header'>
            <h2>Edit Tonnage</h2>
          </div>
        <div className='EditTonnage_section1'>
            <div className="EditTonnage_section_a1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="EditTonnage_section_a1">
              <label htmlFor="code" >Code</label>
              <input
                id="code"
                type="text"
                placeholder="Enter code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
        </div>
          <div className="EditTonnage_button">
            <Button type="button" onClick={onClose} className='EditTonnage_button1' >
              Cancel
            </Button>
            <Button type="submit" className='EditTonnage_button1'>
              Update
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TonnageEditModal;
