import React, { useEffect, useRef } from 'react';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import './SalesUpdateModal.css';
const SalesUpdateModal = ({ show, onClose, onSave, formData = {}, handleChange }) => {
  const modalRef = useRef();

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
          <form action="">
            <div className="Update_Modal_header">
              <h2>Update Sales Details</h2>
            </div>
            {/* section1 */}
            <div className="Update_Modal_section1">
              <div className="Update_Modal_section_a1">
                <Label htmlFor="Deals" value="Deals" />
                <TextInput
                  id="Deals"
                  name="deal_id"
                  value={formData.deal_id || ''}
                  onChange={handleChange}
                  placeholder="Enter deal ID"
                />
              </div>
              <div className="Update_Modal_section_a1">
              <Label htmlFor="Number" value="Number" />
              <TextInput
                id="Number"
                name="telephone"
                value={formData.telephone || ''}
                onChange={handleChange}
                placeholder="Enter telephone number"
              />
              </div>
            </div>

            {/* section 2 */}
            <div className="Update_Modal_section1">
              <div className="Update_Modal_section_a1">
                <Label htmlFor="Stage" value="Stage" />
                <TextInput
                id="Stage"
                name="stage_id"
                value={formData.stage_id || ''}
                onChange={handleChange}
                placeholder="Enter stage ID"
              />
              </div>
              <div className="Update_Modal_section_a1">
              <Label htmlFor="Finance" value="Finance" />
              <TextInput
                id="Finance"
                name="financier_id"
                value={formData.financier_id || ''}
                onChange={handleChange}
                placeholder="Enter financier ID"
              />
              </div>
            </div>

            {/* section 3 */}

            <div className="Update_Modal_section1">
              <div className="Update_Modal_section_a1">
                <Label htmlFor="datetime" value="Current date & time" />
                <TextInput
                id="datetime"
                name="created_on"
                value={formData.created_on || ''}
                onChange={handleChange}
                placeholder="Enter current date & time"
              />
              </div>
              <div className="Update_Modal_section_a1">
              <Label htmlFor="Meeting" value="Meeting" />
              <TextInput
                id="Meeting"
                name="next_call_date"
                value={formData.next_call_date || ''}
                onChange={handleChange}
                placeholder="Enter next call date"
              />
              </div>
            </div>

            {/* section 5 */}
            <div className="Update_Modal_section1">
              <div className="Update_Modal_section_a1">
                <Label htmlFor="support" value="Support required" />
                <TextInput
                id="support"
                name="status"
                value={formData.status || ''}
                onChange={handleChange}
                placeholder="Enter support required"
              />
              </div>
              <div className="Update_Modal_section_a1">
              <Label htmlFor="Discussion" value="Discussion" />
              <TextInput
                id="Discussion"
                name="discussion_points"
                value={formData.discussion_points || ''}
                onChange={handleChange}
                placeholder="Enter discussion points"
              />
              </div>
            </div>
            <div className='Update_Modal_section_button1'>
            <Button onClick={onSave}
            className="sales_btn_Modal">
            Submit
          </Button>
          <Button color="gray" onClick={onClose} 
          className="sales_btn_Modal">
            Cancel
          </Button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SalesUpdateModal;
