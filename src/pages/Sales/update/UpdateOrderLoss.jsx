


import React, { useEffect, useRef, useState } from 'react';
import { Button, Label, TextInput, Modal, Select, Textarea } from 'flowbite-react';
import order_loss from '../../../constants/json/orderloss.json';

function UpdateOrderLoss({ show, onClose, onSave, initialData }) {
  const [selectedCustomer, setSelectedCustomer] = useState(initialData.customerName || '');
  const [formData, setFormData] = useState({
    customerName: initialData.customerName || '',
    district: initialData.district || '',
    subseg: initialData.subseg || '',
    hub: initialData.hub || '',
    mcapplication: initialData.mcapplication || '',
    cusfleetsize: initialData.cusfleetsize || '',
    custype: initialData.custype || '',
    phno: initialData.phno || '',
    financeyear: initialData.financeyear || '',
    com_oem: initialData.com_oem || '',
    model: initialData.model || '',
    qnty: initialData.qnty || '',
    bucket: initialData.bucket || '',
    Participation: initialData.Participation || '',
    visitafterlost: initialData.visitafterlost || '',
    visitdate: initialData.visitdate || '',
    rsonforloss: initialData.rsonforloss || '',
    rsonforbysany: initialData.rsonforbysany || '',
    remarks: initialData.remarks || ''
  });

  const [modelOptions, setModelOptions] = useState([]);
  const [bucket, setBucket] = useState(initialData.bucket || '');

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
      // Replace this with your actual update method
      await updateOrderLossData(formData);
      alert('Data updated successfully!');
      onSave();
    } catch (error) {
      console.error('Error updating data:', error);
      alert('Failed to update data.');
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Body>
          <div className="lossform">
            <form onSubmit={handleSubmit}>
              <div className="heading">
                <h1>Edit Order Loss</h1>
              </div>
              <div className="orderlossBox">
                <div className="orderlossBox_Input">
                  <Label htmlFor="customerName" value="Customer Name" />
                  <select
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
                  </select>
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="district">District</Label>
                  <TextInput
                    type="text"
                    id="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="subseg">Subsegment</Label>
                  <TextInput
                    type="text"
                    id="subseg"
                    value={formData.subseg}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="hub">Hub</Label>
                  <TextInput
                    type="text"
                    id="hub"
                    value={formData.hub}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="mcapplication">MC Application</Label>
                  <TextInput
                    type="text"
                    id="mcapplication"
                    value={formData.mcapplication}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="cusfleetsize">Customer Fleet Size</Label>
                  <TextInput
                    type="text"
                    id="cusfleetsize"
                    value={formData.cusfleetsize}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="custype">Customer Type</Label>
                  <TextInput
                    type="text"
                    id="custype"
                    value={formData.custype}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="phno">Contact Number</Label>
                  <TextInput
                    type="text"
                    id="phno"
                    value={formData.phno}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="financeyear">Finance Year</Label>
                  <TextInput
                    type="text"
                    id="financeyear"
                    value={formData.financeyear}
                    onChange={handleInputChange}
                    placeholder=""
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="com_oem">OEM/Competition</Label>
                  <select
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
                  </select>
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="model">Model</Label>
                  <select
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
                  </select>
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="qnty">Quantity</Label>
                  <TextInput
                    type="number"
                    id="qnty"
                    value={formData.qnty}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="orderlossBox_Input">
                  <Label htmlFor="bucket">Bucket</Label>
                  <select
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
                  </select>
                </div>

                { /* Render Participation field based on bucket selection */ }
                { (bucket === 'B1' || bucket === 'B2' || bucket === 'B3' || bucket === 'B4' || bucket === 'B5') && (
                  <div className="orderlossBox_Input">
                    <Label htmlFor="Participation">Participation</Label>
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
                    <div className="orderlossBox_Input">
                      <Label htmlFor="visitafterlost">Visit After Lost</Label>
                      <select
                        id="visitafterlost"
                        value={formData.visitafterlost}
                        onChange={handleInputChange}
                      >
                        <option selected disabled value="">
                          Select
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>

                    <div className="orderlossBox_Input">
                      <Label htmlFor="visitdate">Visit Date</Label>
                      <TextInput
                        type="date"
                        id="visitdate"
                        value={formData.visitdate}
                        onChange={handleInputChange}
                      />
                    </div>
                  </>
                )}

                {bucket === 'B4' && (
                  <div className="orderlossBox_Input">
                    <Label htmlFor="rsonforloss">Reason For Order Lost</Label>
                    <select
                      id="rsonforloss"
                      value={formData.rsonforloss}
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

                {bucket === 'B5' && (
                  <div className="orderlossBox_Input">
                    <Label htmlFor="rsonforbysany">Reason To Buy Sany</Label>
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

                <div className="orderlossBox_Input">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    type="text"
                    id="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    placeholder="Enter Remarks"
                  />
                </div>

                <div className="orderLossButton">
                  <Button size="md" color="dark" type="submit">
                    Submit
                  </Button>
                  <Button color="gray" style={{ fontWeight: 'bold' }} onClick={onClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default UpdateOrderLoss;

