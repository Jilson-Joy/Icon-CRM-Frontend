import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useNavigate } from 'react-router';
import useDeals from '../../../hooks/useDeals';
import useTiv from '../../../hooks/useTiv';
import './TivProjectionEditModal.css';

const TivProjectionEditModal = ({ show, onClose, formData, onSave, handleChange }) => {
  const navigate = useNavigate();
  const { fetchMachineTypes } = useDeals();
  const { fetchOEM } = useTiv();

  const [highlightedInputs, setHighlightedInputs] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);
  const [machineTypes, setMachineTypes] = useState([]);
  const [oem, setOem] = useState([]);
  const [proposedDate, setProposedDate] = useState(new Date());

  const modalRef = useRef()

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
    if (!formData[inputId]) {
      setErrorInputs([...errorInputs, inputId]);
    } else {
      setErrorInputs(errorInputs.filter((id) => id !== inputId));
    }
  };

  const handleSelectChange = (id, value) => {
    handleChange({ target: { id, value } });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(); // Save the form data
    navigate('/pages/tivprojection/list/TivProjectionList'); // Navigate after saving
  };

  return (
    <Modal show={show} onClose={onClose}>
     <div ref={modalRef}>
        {/* <Modal.Header>Edit TIV Projection</Modal.Header> */}
        <Modal.Body>
          <form  onSubmit={handleSubmit}>
            {/* <div>
              <div className="mb-2 block">
                <Label htmlFor="customer_name" value="Your Name" />
              </div>
              <TextInput
                id="customer_name"
                type="text"
                placeholder="Customer Name"
                defaultValue={formData.customer_name}
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
                defaultValue={proposedDate.toLocaleString()}
                readOnly
                onChange={(e) => handleChange({ target: { id: 'proposed_date', value: e.target.value } })}
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
                value={formData.orm_id || ''}
                onChange={(e) => handleSelectChange('orm_id', e.target.value)}
                onFocus={() => handleFocus('orm_id')}
                onBlur={() => handleBlur('orm_id')}
                style={{
                  borderColor: errorInputs.includes('orm_id') ? 'red' : ''
                }}
              >
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
                defaultValue={formData.machine_id}
                onChange={handleChange}
                onFocus={() => handleFocus('machine_id')}
                onBlur={() => handleBlur('machine_id')}
                style={{
                  borderColor: errorInputs.includes('machine_id') ? 'red' : ''
                }}
              >
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
                <Label htmlFor="competition1" value="Competition1" />
              </div>
              <TextInput
                id="competition1"
                type="text"
                placeholder="Competition1"
                defaultValue={formData.competition1}
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
                <Label htmlFor="competition2" value="Competition2" />
              </div>
              <TextInput
                id="competition2"
                type="text"
                placeholder="Competition2"
                defaultValue={formData.competition2}
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
  
            <Button className="w-full sm:w-auto" color="dark" style={{ fontWeight: 'bold' }} type="submit">
              Submit
            </Button> */}
            <div className='TivProjectionEditModal_header'>
              <h2>Edit TIV Projection</h2>
            </div>
            <div className='TivProjectionEditModal_section1'>
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="customer_name" value="Your Name" />
              <TextInput
                id="customer_name"
                type="text"
                placeholder="Customer Name"
                defaultValue={formData.customer_name}
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
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="Engineer_name" value="Engineer Name" />
              <TextInput
                id="Engineer_name"
                type="text"
                placeholder="Customer Name"
                defaultValue={formData.customer_name}
                onChange={handleChange}
                onFocus={() => handleFocus('Engineer_name')}
                onBlur={() => handleBlur('Engineer_name')}
                style={{
                  borderColor: errorInputs.includes('Engineer_name') ? 'red' : ''
                }}
              />
              {errorInputs.includes('Engineer_name') && (
                <span className="text-red-500">This field is required</span>
              )}
              </div>
            </div>
            <div className='TivProjectionEditModal_section1'>
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="competition1" value="Competition1" />
              <TextInput
                id="competition1"
                type="text"
                placeholder="Competition1"
                defaultValue={formData.competition1}
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
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="competition2" value="Competition2" />
              <TextInput
                id="competition2"
                type="text"
                placeholder="Competition2"
                defaultValue={formData.competition2}
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
            <div className='TivProjectionEditModal_section1'>
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="orm_id" value="OEM" />
              <Select
                id="orm_id"
                value={formData.orm_id || ''}
                onChange={(e) => handleSelectChange('orm_id', e.target.value)}
                onFocus={() => handleFocus('orm_id')}
                onBlur={() => handleBlur('orm_id')}
                style={{
                  borderColor: errorInputs.includes('orm_id') ? 'red' : ''
                }}
              >
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
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="machine_id" value="M/C Model" />
              <Select
                id="machine_id"
                defaultValue={formData.machine_id}
                onChange={handleChange}
                onFocus={() => handleFocus('machine_id')}
                onBlur={() => handleBlur('machine_id')}
                style={{
                  borderColor: errorInputs.includes('machine_id') ? 'red' : ''
                }}
              >
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
            <div className='TivProjectionEditModal_section1'>
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="proposed_date" value="Date" />
              <TextInput
                id="proposed_date"
                type="text"
                defaultValue={proposedDate.toLocaleString()}
                readOnly
                onChange={(e) => handleChange({ target: { id: 'proposed_date', value: e.target.value } })}
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
            <div className='TivProjectionEditModal_section1'>
              <div className='TivProjectionEditModal_section_A1'>
              <Label htmlFor="proposed_date" value="Remarks" />
              <Textarea
                id="proposed_date"
                type="text"
                defaultValue={proposedDate.toLocaleString()}
                readOnly
                onChange={(e) => handleChange({ target: { id: 'proposed_date', value: e.target.value } })}
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
            <div className='TivProjectionEditModal_buttons'>
            <Button className="TivProjectionEditModal_btn" type="submit">
              Submit
            </Button> 
            <Button className="TivProjectionEditModal_btn"  onClick={onClose}>
            Cancel
          </Button> 
            </div>
          </form>
        </Modal.Body>

     </div>
    </Modal>
  );
};

export default TivProjectionEditModal;
