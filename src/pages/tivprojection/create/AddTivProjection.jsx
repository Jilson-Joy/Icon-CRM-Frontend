import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Label, TextInput, Select, Textarea, Modal } from 'flowbite-react';
import './AddTivProjection.css';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router';
import useDeals from '../../../hooks/useDeals';
import useTiv from '../../../hooks/useTiv';

function AddTivProjection({ show, onClose, onSave }) {
  const navigate = useNavigate();
  const { fetchMachineTypes } = useDeals();
  const { fetchOEM, CreateTIVProjection } = useTiv();

  const [highlightedInputs, setHighlightedInputs] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);
  const [machineTypes, setMachineTypes] = useState([]);
  const [oem, setOem] = useState([]);
  const [proposedDate, setProposedDate] = useState(new Date());

  const modalRef = useRef();

  const [customer, setCustomer] = useState({
    customer_name: '',
    proposed_date: proposedDate.toISOString(),
    orm_id: '',
    machine_id: '',
    competition1: '',
    competition2: '',
    engnamee: '',
    remarks: ''
  });

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [machines, oems] = await Promise.all([fetchMachineTypes(), fetchOEM()]);

        setMachineTypes(machines);
        setOem(oems);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchInitialData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setProposedDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  const handleFocus = (inputId) => {
    setHighlightedInputs([...highlightedInputs, inputId]);
  };

  const handleBlur = (inputId) => {
    setHighlightedInputs(highlightedInputs.filter((id) => id !== inputId));
    validateInput(inputId);
  };

  const validateInput = (inputId) => {
    if (!customer[inputId]) {
      setErrorInputs([...errorInputs, inputId]);
    } else {
      setErrorInputs(errorInputs.filter((id) => id !== inputId));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCustomer({ ...customer, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSelectChange = (id, value) => {
    setCustomer({ ...customer, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = `Customer_Name=${customer.customer_name}&Proposed_Date=${customer.proposed_date}&OEM_Id=${customer.orm_id}&Machine_Id=${customer.machine_id}&Competition1=${customer.competition1}&Competition2=${customer.competition2}&Engineer_Id=1&Created_By=1`;
      const response = await CreateTIVProjection(formData);

      console.log('TIV Projection created:', response);
      navigate('/pages/tivprojection/list/TivProjectionList');

      // Clear the form after successful submission
      setCustomer({
        customer_name: '',
        proposed_date: proposedDate.toISOString(),
        orm_id: '',
        machine_id: '',
        competition1: '',
        competition2: '',
        engnamee: '',
        remarks: ''
      });
    } catch (error) {
      console.error('Error creating TIV Projection:', error);
    }
  };

  // const currentDate = new Date().toISOString().split('T')[0];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <Modal show={show} onClose={onClose}>
        <div ref={modalRef}>
          <Modal.Body>
            {/* <div className="form-div">
          <Card className=" mt-2 " style={{ width: '700px' }}>
            <form className="details_form p-4 flex flex-col gap-2" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="customer_name" value="Your Name" />
                </div>
                <TextInput
                  id="customer_name"
                  type="text"
                  placeholder="Customer Name"
                  value={customer.customer_name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('customer_name')}
                  onBlur={() => handleBlur('customer_name')}
                  style={{
                    borderColor: errorInputs.includes('customer_name') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('customer_name') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="proposed_date" value="Date" />
                </div>
                <TextInput
                  id="proposed_date"
                  type="text"
                  value={proposedDate.toLocaleString()}
                  readOnly
                  onChange={(e) => setCustomer({ ...customer, proposed_date: e.target.value })}
                  onFocus={() => handleFocus('proposed_date')}
                  onBlur={() => handleBlur('proposed_date')}
                  style={{
                    borderColor: errorInputs.includes('proposed_date') ? 'red' : ''
                  }}
                  
                />
                {errorInputs.includes('proposed_date') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="orm_id" value="OEM" />
                </div>
                <Select
                  id="orm_id"
                  value={customer.orm_id || ''}
                  onChange={(e) => handleSelectChange('orm_id', e.target.value)}
                  onFocus={() => handleFocus('orm_id')}
                  onBlur={() => handleBlur('orm_id')}
                  style={{
                    borderColor: errorInputs.includes('orm_id') ? 'red' : ''
                  }}>
                  <option selected disabled value="">
                    Select OEM
                  </option>
                  {oem.map((oems) => (
                      <option key={oems.id} value={oems.id}>
                        {oems.name}
                      </option>
                    ))}
                </Select>
                {errorInputs.includes('orm_id') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="machine_id" value="M/C Model" />
                </div>
                <Select
                 id="machine_id"
                 type="text"
                 placeholder="M/C Model"
                 value={customer.machine_id}
                 onChange={handleChange}
                 onFocus={() => handleFocus('machine_id')}
                 onBlur={() => handleBlur('machine_id')}
                 style={{
                   borderColor: errorInputs.includes('machine_id') ? 'red' : ''
                 }}>
                  <option value="" disabled selected>
                    Select M/C Model
                  </option>
                  {machineTypes.map((machine) => (
                      <option key={machine.id} value={machine.id}>
                        {machine.name}
                      </option>
                    ))}
                </Select>
                {errorInputs.includes('machine_id') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="competition1" value="Competetion1" />
                </div>
                <TextInput
                  id="competition1"
                  type="text"
                  placeholder="Competetion1"
                  value={customer.competition1}
                  onChange={handleChange}
                  onFocus={() => handleFocus('competition1')}
                  onBlur={() => handleBlur('competition1')}
                  style={{
                    borderColor: errorInputs.includes('competition1') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('competition1') && (
                  <span className="text-red-500">This field is required</span>
                )}
              
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="competition2" value="Competetion2" />
                </div>
                <TextInput
                  id="competition2"
                  type="text"
                  placeholder="Competetion2"
                  value={customer.competition2}
                  onChange={handleChange}
                  onFocus={() => handleFocus('competition2')}
                  onBlur={() => handleBlur('competition2')}
                  style={{
                    borderColor: errorInputs.includes('competition2') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('competition2') && (
                  <span className="text-red-500">This field is required</span>
                )}
                
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="engnamee" value="Engineer Name" />
                </div>
                <TextInput
                  id="engnamee"
                  type="text"
                  placeholder="Engineer Name"
                  value={customer.engnamee}
                  onChange={handleChange}
                  onFocus={() => handleFocus('engnamee')}
                  onBlur={() => handleBlur('engnamee')}
                  style={{
                    borderColor: errorInputs.includes('engnamee') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('engnamee') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="remarks" value="Remarks" />
                </div>
                <Textarea
                  id="remarks"
                  type="text"
                  placeholder="Remarks"
                  value={customer.remarks}
                  onChange={handleChange}
                  onFocus={() => handleFocus('remarks')}
                  onBlur={() => handleBlur('remarks')}
                  style={{
                    borderColor: errorInputs.includes('remarks') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('remarks') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
  
         
  
              <Button
                className="w-full sm:w-auto"
                color="dark"
                style={{ fontWeight: 'bold' }}
                type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer> */}
            <form action="" onSubmit={handleSubmit}>
              <div className="AddTivProjection_header">
                <h2>Add TIV Projection</h2>
              </div>
              <div className="AddTivProjection_section1">
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="customer_name" value="Your Name" />
                  <TextInput
                    id="customer_name"
                    type="text"
                    placeholder="Customer Name"
                    value={customer.customer_name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('customer_name')}
                    onBlur={() => handleBlur('customer_name')}
                    style={{
                      borderColor: errorInputs.includes('customer_name') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('customer_name') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="engnamee" value="Engineer Name" />
                  <TextInput
                    id="engnamee"
                    type="text"
                    placeholder="Engineer Name"
                    value={customer.engnamee}
                    onChange={handleChange}
                    onFocus={() => handleFocus('engnamee')}
                    onBlur={() => handleBlur('engnamee')}
                    style={{
                      borderColor: errorInputs.includes('engnamee') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('engnamee') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="AddTivProjection_section1">
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="competition1" value="Competetion1" />
                  <TextInput
                    id="competition1"
                    type="text"
                    placeholder="Competetion1"
                    value={customer.competition1}
                    onChange={handleChange}
                    onFocus={() => handleFocus('competition1')}
                    onBlur={() => handleBlur('competition1')}
                    style={{
                      borderColor: errorInputs.includes('competition1') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('competition1') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="competition2" value="Competetion2" />
                  <TextInput
                    id="competition2"
                    type="text"
                    placeholder="Competetion2"
                    value={customer.competition2}
                    onChange={handleChange}
                    onFocus={() => handleFocus('competition2')}
                    onBlur={() => handleBlur('competition2')}
                    style={{
                      borderColor: errorInputs.includes('competition2') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('competition2') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="AddTivProjection_section1">
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="orm_id" value="OEM" />
                  <Select
                    id="orm_id"
                    value={customer.orm_id || ''}
                    onChange={(e) => handleSelectChange('orm_id', e.target.value)}
                    onFocus={() => handleFocus('orm_id')}
                    onBlur={() => handleBlur('orm_id')}
                    style={{
                      borderColor: errorInputs.includes('orm_id') ? 'red' : ''
                    }}>
                    <option selected disabled value="">
                      Select OEM
                    </option>
                    {oem.map((oems) => (
                      <option key={oems.id} value={oems.id}>
                        {oems.name}
                      </option>
                    ))}
                  </Select>
                  {errorInputs.includes('orm_id') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="machine_id" value="M/C Model" />
                  <Select
                    id="machine_id"
                    type="text"
                    placeholder="M/C Model"
                    value={customer.machine_id}
                    onChange={handleChange}
                    onFocus={() => handleFocus('machine_id')}
                    onBlur={() => handleBlur('machine_id')}
                    style={{
                      borderColor: errorInputs.includes('machine_id') ? 'red' : ''
                    }}>
                    <option value="" disabled selected>
                      Select M/C Model
                    </option>
                    {machineTypes.map((machine) => (
                      <option key={machine.id} value={machine.id}>
                        {machine.name}
                      </option>
                    ))}
                  </Select>
                  {errorInputs.includes('machine_id') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="AddTivProjection_section1">
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="proposed_date" value="Date" />
                  <TextInput
                    id="proposed_date"
                    type="text"
                    value={proposedDate.toLocaleString()}
                    readOnly
                    onChange={(e) => setCustomer({ ...customer, proposed_date: e.target.value })}
                    onFocus={() => handleFocus('proposed_date')}
                    onBlur={() => handleBlur('proposed_date')}
                    style={{
                      borderColor: errorInputs.includes('proposed_date') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('proposed_date') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="AddTivProjection_section1">
                <div className="AddTivProjection_section_A1">
                  <Label htmlFor="remarks" value="Remarks" />
                  <Textarea
                    id="remarks"
                    type="text"
                    placeholder="Remarks"
                    value={customer.remarks}
                    onChange={handleChange}
                    onFocus={() => handleFocus('remarks')}
                    onBlur={() => handleBlur('remarks')}
                    style={{
                      borderColor: errorInputs.includes('remarks') ? 'red' : ''
                    }}
                  />
                  {errorInputs.includes('remarks') && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="AddTivProjection_buttons">
                <Button className="AddTivProjection_btn" type="submit">
                  Submit
                </Button>
                <Button className="AddTivProjection_btn" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </NavbarSidebarLayout>
  );
}

export default AddTivProjection;
