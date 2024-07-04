import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'flowbite-react';
import './OemEditModal.css';
function OemEditModal({ isOpen, onClose, onEdit, oem }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const modalRef = useRef();

  useEffect(() => {
    if (oem) {
      setName(oem.name);
      setCode(oem.code);
    }
  }, [oem]);

  const handleEdit = () => {
    onEdit({ ...oem, name, code });
    onClose();
  };

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
    <Modal show={isOpen} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Body>
          {/* <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Code
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div className="AddSegment_button">
              <button type="reset" onClick={onClose}>Cancel</button>
              <button type="submit">Submit</button>
            </div> */}
          <form action="">
            <div className="EditOEM_header">
              <h2>Edit OEM</h2>
            </div>
            <div className="EditOEM_section1">
              <div className="EditOEM_section_a1">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="EditOEM_section_a1">
                <label htmlFor="">Code</label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
            <div className="EditOEM_button">
              <button type="reset" onClick={onClose}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default OemEditModal;
