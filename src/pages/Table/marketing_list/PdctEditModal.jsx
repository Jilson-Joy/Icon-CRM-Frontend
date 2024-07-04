import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import './PdctEditModal.css';
function PdctEditModal({ item, setIsEditModalOpen }) {
  const [formData, setFormData] = useState({
    activity_descrption: '',
    proposed_date: '',
    proposed_amt: '',
    disbursable_amt: '',
    activity_name: '',
    remarks: ''
  });

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsEditModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsEditModalOpen]);

  useEffect(() => {
    if (item) {
      setFormData({
        activity_descrption: item.activity_descrption || '',
        proposed_date: item.proposed_date || '',
        proposed_amt: item.proposed_amt || '',
        disbursable_amt: item.disbursable_amt || '',
        activity_name: item.activity_name || '',
        remarks: item.remarks || ''
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You need to implement the update logic here
    // For now, we'll just log the updated form data to console
    console.log('Updated Data:', formData);

    // Mock API call (replace with actual API call)
    const updateItem = async (data) => {
      try {
        // Uncomment and adjust the following lines for actual API integration
        // const response = await axios.put(`API_ENDPOINT/${item.id}`, data);
        // if (response.status === 200) {
        console.log('Update successful');
        setIsEditModalOpen(false); // Close modal on successful update
        // } else {
        //   console.error('Update failed');
        // }
      } catch (error) {
        console.error('Error updating item:', error);
      }
    };

    updateItem(formData);
  };

  return (
    <Modal show={true} onClose={() => setIsEditModalOpen(false)}>
      <div ref={modalRef}>
        <Modal.Body>
          {/* <div className="form_container">
            <Modal.Header>
              Edit Marketing Activity
            </Modal.Header>
            <Card className="product-table">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="activity_descrption" value="Activity Description" />
                  </div>
                  <TextInput
                    id="activity_descrption"
                    type="text"
                    name="activity_descrption"
                    value={formData.activity_descrption}
                    onChange={handleChange}
                    placeholder="Activity Description"
                  />
                </div>
  
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="proposed_date" value="Proposed Date" />
                  </div>
                  <TextInput
                    id="proposed_date"
                    type="date"
                    name="proposed_date"
                    value={formData.proposed_date}
                    onChange={handleChange}
                    placeholder="Proposed Date"
                  />
                </div>
  
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="proposed_amt" value="Proposed Amount" />
                  </div>
                  <TextInput
                    id="proposed_amt"
                    type="text"
                    name="proposed_amt"
                    value={formData.proposed_amt}
                    onChange={handleChange}
                    placeholder="Proposed Amount"
                  />
                </div>
  
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="disbursable_amt" value="Disbursable Amount" />
                  </div>
                  <TextInput
                    id="disbursable_amt"
                    type="text"
                    name="disbursable_amt"
                    value={formData.disbursable_amt}
                    onChange={handleChange}
                    placeholder="Disbursable Amount"
                  />
                </div>
  
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="activity_name" value="Activity Name" />
                  </div>
                  <TextInput
                    id="activity_name"
                    type="text"
                    name="activity_name"
                    value={formData.activity_name}
                    onChange={handleChange}
                    placeholder="Activity Name"
                  />
                </div>
  
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="remarks" value="Remarks" />
                  </div>
                  <Textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Leave a comment..."
                    rows={4}
                  />
                </div>
  
                <Button color="dark" type="submit">
                  Save Changes
                </Button>
                <Button color="light" type="button" onClick={() => setIsEditModalOpen(false)}>
                  Cancel
                </Button>
              </form>
            </Card>
          </div> */}

          <form action="">
            <div className="Edit_markiting_header">
              <h2>Edit Marketing Activity</h2>
            </div>
            {/* section 1 */}
            <div className="Edit_markiting_section1">
              <div className="Edit_markiting_section_a1">
                <Label htmlFor="activity_descrption" value="Activity Description" />
                <TextInput
                  id="activity_descrption"
                  type="text"
                  name="activity_descrption"
                  value={formData.activity_descrption}
                  onChange={handleChange}
                  placeholder="Activity Description"
                />
              </div>
              <div className="Edit_markiting_section_a1">
                <Label htmlFor="proposed_amt" value="Proposed Amount" />
                <TextInput
                  id="proposed_amt"
                  type="text"
                  name="proposed_amt"
                  value={formData.proposed_amt}
                  onChange={handleChange}
                  placeholder="Proposed Amount"
                />
              </div>
            </div>
            {/* section 2*/}
            <div className="Edit_markiting_section1">
              <div className="Edit_markiting_section_a1">
                <Label htmlFor="disbursable_amt" value="Disbursable Amount" />
                <TextInput
                    id="disbursable_amt"
                    type="text"
                    name="disbursable_amt"
                    value={formData.disbursable_amt}
                    onChange={handleChange}
                    placeholder="Disbursable Amount"
                  />
              </div>
              <div className="Edit_markiting_section_a1">
                <Label htmlFor="activity_name" value="Activity Name" />
                <TextInput
                    id="activity_name"
                    type="text"
                    name="activity_name"
                    value={formData.activity_name}
                    onChange={handleChange}
                    placeholder="Activity Name"
                  />
              </div>
            </div>
            {/* section 3 */}
            <div className="Edit_markiting_section1">
              <div className="Edit_markiting_section_a1">
              <Label htmlFor="proposed_date" value="Proposed Date" />
              <TextInput
                    id="proposed_date"
                    type="date"
                    name="proposed_date"
                    value={formData.proposed_date}
                    onChange={handleChange}
                    placeholder="Proposed Date"
                  />
              </div>
            </div>
            {/* section 4 */}
            <div className="Edit_markiting_section1">
              <div className="Edit_markiting_section_a1">
              <Label htmlFor="remarks" value="Remarks" />
              <Textarea
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Leave a comment..."
                    rows={4}
                  />
              </div>
            </div>
          </form>
          <div className='Edit_markiting_button'>
            <Button className='Edit_Marketing_Activity_button1' type='submit'>Submit</Button>
            <Button className='Edit_Marketing_Activity_button1'>Cancel</Button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default PdctEditModal;
