import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedDeal } from '../../../components/redux/dealSlice';
import { Modal, Button } from 'flowbite-react';
import './DealModal.css'
function DealModal({ selectedDeal, onClose, onSave }) {
  const dispatch = useDispatch();
  const deal = useSelector((state) => state.deals.selectedDeal);
  const [formData, setFormData] = useState({
    deal_name: '',
    machine_id: '',
    deal_type_id: '',
    expected_delivery_date: '',
    suggested_by_id: ''
  });

  const modalRef = useRef();

  useEffect(() => {
    if (selectedDeal) {
      dispatch(setSelectedDeal(selectedDeal));
    }
  }, [selectedDeal, dispatch]);

  useEffect(() => {
    if (deal) {
      setFormData({
        deal_name: deal.deal_name || '',
        machine_id: deal.machine_id || '',
        deal_type_id: deal.deal_type_id || '',
        expected_delivery_date: deal.expected_delivery_date || '',
        suggested_by_id: deal.suggested_by_id || ''
      });
    }
  }, [deal]);

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Modal show={true} onClose={onClose}>
     <div ref={modalRef}>
       
        <Modal.Body>
          <form className="space-y-4">
            <div className='EditDeals_header'>
              <h2>Edit Deal</h2>
            </div>
            <div className="EditDeals_section1">
              <label htmlFor="deal_name" className="font-semibold">Deal Name:</label>
              <input
                type="text"
                id="deal_name"
                name="deal_name"
                value={formData.deal_name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div className="EditDeals_section1">
              <label htmlFor="machine_id" className="font-semibold">M/C Model:</label>
              <input
                type="text"
                id="machine_id"
                name="machine_id"
                value={formData.machine_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div className="EditDeals_section1">
              <label htmlFor="deal_type_id" className="font-semibold">Deal Type:</label>
              <input
                type="text"
                id="deal_type_id"
                name="deal_type_id"
                value={formData.deal_type_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div className="EditDeals_section1">
              <label htmlFor="expected_delivery_date" className="font-semibold">Expected Delivery Date:</label>
              <input
                type="date"
                id="expected_delivery_date"
                name="expected_delivery_date"
                value={formData.expected_delivery_date}
                onChange={handleChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div className="EditDeals_section1">
              <label htmlFor="suggested_by_id" className="font-semibold">Deal Suggested By:</label>
              <input
                type="text"
                id="suggested_by_id"
                name="suggested_by_id"
                value={formData.suggested_by_id}
                onChange={handleChange}
                className="mt-1 p-2 border rounded"
              />
            </div>
            <div className='EditDeals_btn'>
            <Button onClick={handleSubmit} className='EditDeals_btn1'>Save</Button>
          <Button  onClick={onClose} className='EditDeals_btn1'>
            Cancel
          </Button>
            </div>
          </form>
        </Modal.Body>
     </div>
    </Modal>
  );
}

export default DealModal;
