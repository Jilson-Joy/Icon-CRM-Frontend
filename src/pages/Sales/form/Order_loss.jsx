import React, { useEffect, useRef, useState } from 'react';
import './Order_loss.css';
import { Button, Label, TextInput, Modal, Select, Textarea } from 'flowbite-react';
import order_loss from '../../../constants/json/orderloss.json';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function Order_loss({ show, onClose, onSave }) {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [formData, setFormData] = useState({
    customerName: '',
    district: '',
    subseg: '',
    hub: '',
    mcapplication: '',
    cusfleetsize: '',
    custype: '',
    phno: '',
    financeyear: '',
    com_oem: '',
    model: '',
    qnty: '',
    bucket: '',
    Participation: '', // Remove this from formData state
    visitafterlost: '',
    visitdate: '',
    rsonforloss: '',
    rsonforbysany: '',
    remarks: ''
  });

  const [modelOptions, setModelOptions] = useState([]);
  const [bucket, setBucket] = useState('');

  const modalRef = useRef();

  const handleCustomerChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCustomer(selectedValue);
    const customerData = order_loss.order_loss.find((customer) => customer.customerName === selectedValue);
    if (customerData) {
      setFormData({
        ...formData,
        customerName: customerData.customerName,
        district: customerData.district,
        subseg: customerData.subseg,
        hub: customerData.hub,
        mcapplication: customerData.mcapplication,
        cusfleetsize: customerData.cusfleetsize,
        custype: customerData.custype,
        phno: customerData.phno,
        financeyear: customerData.financeyear
      });
    }
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

  const handleCompetitionChange = (e) => {
    const selectedValue = e.target.value;
    setFormData({
      ...formData,
      com_oem: selectedValue
    });

    if (selectedValue === 'JCB') {
      setModelOptions(['J1', 'J2', 'J3']);
    } else if (selectedValue === 'Hitachi') {
      setModelOptions(['H1', 'H2', 'H3']);
    } else if (selectedValue === 'Sany') {
      setModelOptions(['S1', 'S2', 'S3']);
    } else {
      setModelOptions([]);
    }
  };

  const handleBucketChange = (e) => {
    const selectedBucket = e.target.value;
    setBucket(selectedBucket);
    let participationValue = '';

    if (selectedBucket === 'B1' || selectedBucket === 'B2' || selectedBucket === 'B3') {
      participationValue = 'No';
    } else if (selectedBucket === 'B4' || selectedBucket === 'B5') {
      participationValue = 'Yes';
    }

    setFormData({
      ...formData,
      bucket: selectedBucket,
      Participation: participationValue
    });
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setFormData({
      ...formData,
      model: selectedModel
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace this with your actual post method
      await postOrderLossData(formData);
      alert('Data submitted successfully!');
      onSave();
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data.');
    }
  };

  return (
   <NavbarSidebarLayout isFooter={false}>
      <form onSubmit={handleSubmit} className='order_loss_form'>
        <div className='orderLoss_header'>
          <h2>Add Order Loss</h2>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="customerName">Customer Name</label>
            <Select
              id="customerName"
              value={selectedCustomer}
              onChange={handleCustomerChange}
            >
              <option selected disabled value="">
                Select Customer
              </option>
              {order_loss.order_loss.map((customer) => (
                <option key={customer.id} value={customer.customerName}>
                  {customer.customerName}
                </option>
              ))}
            </Select>
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="com_oem">OEM/Competition</label>
            <Select
              id="com_oem"
              value={formData.com_oem}
              onChange={handleCompetitionChange}
            >
              <option selected disabled value="">
                Select
              </option>
              <option value="JCB">JCB</option>
              <option value="Hitachi">Hitachi</option>
              <option value="Sany">Sany</option>
            </Select>
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="district">District</label>
            <TextInput
              type="text"
              id="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="subseg">Subsegment</label>
            <TextInput
              type="text"
              id="subseg"
              value={formData.subseg}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="hub">Hub</label>
            <TextInput
              type="text"
              id="hub"
              value={formData.hub}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="mcapplication">MC Application</label>
            <TextInput
              type="text"
              id="mcapplication"
              value={formData.mcapplication}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="cusfleetsize">Customer Fleet Size</label>
            <TextInput
              type="text"
              id="cusfleetsize"
              value={formData.cusfleetsize}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="custype">Customer Type</label>
            <TextInput
              type="text"
              id="custype"
              value={formData.custype}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="phno">Contact Number</label>
            <TextInput
              type="text"
              id="phno"
              value={formData.phno}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="financeyear">Finance Year</label>
            <TextInput
              type="text"
              id="financeyear"
              value={formData.financeyear}
              onChange={handleInputChange}
              placeholder=""
            />
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="qnty">Quantity</label>
            <TextInput
              type="number"
              id="qnty"
              value={formData.qnty}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="model">Model</label>
            <Select
              id="model"
              value={formData.model}
              onChange={handleModelChange}
            >
              <option selected disabled value="">
                Select
              </option>
              {modelOptions.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </Select>
          </div>
          <div className='orderLoss_section_a1'>
            <label htmlFor="bucket">Bucket</label>
            <Select
              id="bucket"
              value={formData.bucket}
              onChange={handleBucketChange}
            >
              <option selected disabled value="">
                Select
              </option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="B3">B3</option>
              <option value="B4">B4</option>
              <option value="B5">B5</option>
            </Select>
          </div>
        </div>
        <div className='orderLoss_section1'>
          {(bucket === 'B1' || bucket === 'B2' || bucket === 'B3' || bucket === 'B4' || bucket === 'B5') && (
            <div className="orderLoss_section_a1">
              <label htmlFor="Participation">Participation</label>
              <TextInput
                type="text"
                id="Participation"
                value={formData.Participation}
                onChange={handleInputChange}
                readOnly // Make it read-only as per your requirement
              />
            </div>
          )}
          {['B1', 'B2', 'B3'].includes(bucket) && (
            <>
              <div className="orderLoss_section_a1">
                <label htmlFor="visitdate">Visit Date</label>
                <TextInput
                  type="date"
                  id="visitdate"
                  value={formData.visitdate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="orderLoss_section_a1">
                <label htmlFor="visitafterlost">Visit After Lost</label>
                <Select
                  id="visitafterlost"
                  value={formData.visitafterlost}
                  onChange={handleInputChange}
                >
                  <option selected disabled value="">
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Select>
              </div>
            </>
          )}
          {bucket === 'B4' && (
            <div className="orderLoss_section_a1">
              <label htmlFor="rsonforloss">Reason For Order Lost</label>
              <Select
                id="rsonforloss"
                value={formData.rsonforloss}
                onChange={handleInputChange}
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="ggg">ggg</option>
                <option value="vfggg">vfggg</option>
              </Select>
            </div>
          )}
  
          {bucket === 'B5' && (
            <div className="orderLoss_section_a1">
              <label htmlFor="rsonforbysany">Reason To Buy Sany</label>
              <select
                id="rsonforbysany"
                value={formData.rsonforbysany}
                onChange={handleInputChange}
              >
                <option selected disabled value="">
                  Select
                </option>
                <option value="ggg">ggg</option>
                <option value="vfggg">vfggg</option>
              </select>
            </div>
          )}
        </div>
        <div className='orderLoss_section1'>
          <div className='orderLoss_section_a1'>
            <label htmlFor="remarks">Remarks</label>
            <Textarea
              type="text"
              id="remarks"
              value={formData.remarks}
              onChange={handleInputChange}
              placeholder="Enter Remarks"
            />
          </div>
        </div>
        <div className='orderLoss_buttons'>
          <Button className='orderLoss_btn' type="submit">
            Submit
          </Button>
          <Button className='orderLoss_btn' onClick={onClose}>
            Cancel
          </Button>
        </div>
      </form>
   </NavbarSidebarLayout>
  );
}

export default Order_loss;
