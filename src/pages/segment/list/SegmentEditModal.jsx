import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'flowbite-react';
import './SegmentEditModal.css'
function SegmentEditModal({ isOpen, onClose, segment, onEdit }) {
  const [formData, setFormData] = useState({ ...segment });
  const modalRef = useRef()

  useEffect(() => {
    if (segment) {
      setFormData(segment);
    }
  }, [segment]);

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
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    onEdit(formData);
    onClose();
  };

  return (
    <Modal show={isOpen} onClose={onClose}>
     <div ref={modalRef}>
        <Modal.Body>
          <div className='segment_header'>
            <h2>
            Edit Segment
            </h2>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Code
            </label>
            <input
              type="text"
              className="block w-full p-2 border border-gray-300 rounded-lg"
              name="code"
              value={formData.code}
              onChange={handleInputChange}
            />
          </div>
          <div className="AddSegment_button">
              <button type="reset" onClick={onClose}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
        </Modal.Body>
       
     </div>
    </Modal>
  );
}

export default SegmentEditModal;
