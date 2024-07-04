import React, { useEffect, useRef, useState } from 'react';
import { Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import useMachine from '../../../hooks/useMachine';
import { useNavigate } from 'react-router-dom';
import './MachineAddModal.css';

function MachineAddModal({ show, onClose }) {
  const { fetchData, SubmitMachineData } = useMachine();
  const [machineList, setMachineList] = useState([]);
  const navigate = useNavigate();
  const modalRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });

  const onSubmit = async (data) => {
    try {
      await SubmitMachineData(data);
      console.log('Data submitted successfully', data);
      navigate('/pages/machine/list/MachineTable');
    } catch (error) {
      console.error('Error submitting data:', error.message);
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

  useEffect(() => {
    const GetMachineData = async () => {
      try {
        const machineOptions = await fetchData();
        setMachineList(machineOptions);
      } catch (error) {
        console.error('Error fetching machine data:', error.message);
      }
    };
    GetMachineData();
  }, []);

  return (
    <Modal show={show} onClose={onClose}>
      <div ref={modalRef}>
        {/* <Modal.Header>
          <h2>Add New Machine</h2>
        </Modal.Header>
        <Modal.Body>
        <div className="AddMachine_container">
          <form className="AddMachine_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="AddMachine_header">
              <h2>Add Machine</h2>
            </div>

            <div className="AddMachine_inputFiled">
              <div className="AddMachine_name_section">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className={errors.name ? 'error-borderAddMachine' : ''}
                  {...register('name', {
                    required: 'Required',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'Please enter alphabetic characters only'
                    }
                  })}
                />
                <p className="errormsg">{errors.name?.message}</p>
              </div>
              <div className="AddMachine_code_section">
                <label htmlFor="Code">Code</label>
                <input
                  type="text"
                  id="Code"
                  className={errors.Code ? 'error-borderAddMachine' : ''}
                  {...register('Code', {
                    required: 'Required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter the Code'
                    }
                  })}
                />
                <p className="errormsg">{errors.Code?.message}</p>
              </div>
              <div className="AddMachine_price_section">
                <label htmlFor="price">Price ₹ </label>
                <input
                  type="text"
                  id="price"
                  className={errors.price ? 'error-borderAddMachine' : ''}
                  {...register('price', {
                    required: 'Required',
                    pattern: {
                      value: /^[0-9]+(\.[0-9]+)?$/,
                      message: 'Please enter the amount'
                    }
                  })}
                />
                <p className="errormsg">{errors.price?.message}</p>
              </div>
              <div className="AddMachine_modelNo_section">
                <label htmlFor="modelNo">Model No </label>
                <input
                  type="text"
                  id="modelNo"
                  className={errors.modelNo ? 'error-borderAddMachine' : ''}
                  {...register('modelNo', {
                    required: 'Required',
                    pattern: {
                      value: /^[A-Za-z0-9\s\-_]+$/,
                      message: 'Please enter the Model Number'
                    }
                  })}
                />
                <p className="errormsg">{errors.modelNo?.message}</p>
              </div>
            </div>

            <div className="AddMachine_selectFiled">
              <div className="AddMachine_OEM_section">
                <label htmlFor="oem">Select OEM</label>
                <select
                  id="oem"
                  className={errors.oem ? 'error-borderAddMachine' : ''}
                  {...register('oem', { required: 'Please select an OEM' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, oem_id }) => (
                    <option key={id} value={oem_id}>
                      {oem_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.oem?.message}</p>
              </div>
              <div className="AddMachine_Tonnage_section">
                <label htmlFor="Tonnage">Select Tonnage</label>
                <select
                  id="Tonnage"
                  className={errors.Tonnage ? 'error-borderAddMachine' : ''}
                  {...register('Tonnage', { required: 'Please select an Tonnage' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, tonnage_id }) => (
                    <option key={id} value={tonnage_id}>
                      {tonnage_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.Tonnage?.message}</p>
              </div>
              <div className="AddMachine_segment_section">
                <label htmlFor="Segment">Select Segment</label>
                <select
                  id="Segment"
                  className={errors.Segment ? 'error-borderAddMachine' : ''}
                  {...register('Segment', { required: 'Please select an Segment' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, segment_id }) => (
                    <option key={id} value={segment_id}>
                      {segment_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.Segment?.message}</p>
              </div>
            </div>
  
          </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </Modal.Footer> */}
        <Modal.Body>
          <form>
            <div className="AddMachine_header">
              <h2>Add New Machine</h2>
            </div>
            {/* section 1 */}
            <div className="AddMachine_section1">
              <div className="AddMachine_section_a1">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className={errors.name ? 'error-borderAddMachine' : ''}
                  {...register('name', {
                    required: 'Required',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'Please enter alphabetic characters only'
                    }
                  })}
                />
                <p className="errormsg">{errors.name?.message}</p>
              </div>
              <div className="AddMachine_section_a1">
                <label htmlFor="Code">Code</label>
                <input
                  type="text"
                  id="Code"
                  className={errors.Code ? 'error-borderAddMachine' : ''}
                  {...register('Code', {
                    required: 'Required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter the Code'
                    }
                  })}
                />
                <p className="errormsg">{errors.Code?.message}</p>
              </div>
            </div>
            {/* section 2 */}
            <div className="AddMachine_section1">
              <div className="AddMachine_section_a1">
                <label htmlFor="price">Price ₹ </label>
                <input
                  type="text"
                  id="price"
                  className={errors.price ? 'error-borderAddMachine' : ''}
                  {...register('price', {
                    required: 'Required',
                    pattern: {
                      value: /^[0-9]+(\.[0-9]+)?$/,
                      message: 'Please enter the amount'
                    }
                  })}
                />
                <p className="errormsg">{errors.price?.message}</p>
              </div>
              <div className="AddMachine_section_a1">
                <label htmlFor="modelNo">Model No </label>
                <input
                  type="text"
                  id="modelNo"
                  className={errors.modelNo ? 'error-borderAddMachine' : ''}
                  {...register('modelNo', {
                    required: 'Required',
                    pattern: {
                      value: /^[A-Za-z0-9\s\-_]+$/,
                      message: 'Please enter the Model Number'
                    }
                  })}
                />
                <p className="errormsg">{errors.modelNo?.message}</p>
              </div>
            </div>
            {/* section 3 */}
            <div className="AddMachine_section1">
              <div className="AddMachine_section_a2">
                <label htmlFor="oem">Select OEM</label>
                <select
                  id="oem"
                  className={errors.oem ? 'error-borderAddMachine' : ''}
                  {...register('oem', { required: 'Please select an OEM' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, oem_id }) => (
                    <option key={id} value={oem_id}>
                      {oem_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.oem?.message}</p>
              </div>
              <div className="AddMachine_section_a2">
                <label htmlFor="Tonnage">Select Tonnage</label>
                <select
                  id="Tonnage"
                  className={errors.Tonnage ? 'error-borderAddMachine' : ''}
                  {...register('Tonnage', { required: 'Please select an Tonnage' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, tonnage_id }) => (
                    <option key={id} value={tonnage_id}>
                      {tonnage_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.Tonnage?.message}</p>
              </div>
            </div>
            {/* section 4 */}
            <div className="AddMachine_section1">
              <div className="AddMachine_section_a2">
                <label htmlFor="Segment">Select Segment</label>
                <select
                  id="Segment"
                  className={errors.Segment ? 'error-borderAddMachine' : ''}
                  {...register('Segment', { required: 'Please select an Segment' })}>
                  <option value="">Select an option</option>
                  {machineList?.map(({ id, segment_id }) => (
                    <option key={id} value={segment_id}>
                      {segment_id}
                    </option>
                  ))}
                </select>
                <p className="errormsg">{errors.Segment?.message}</p>
              </div>
            </div>
            <div className="AddMachine_section_buttons">
              <button onClick={handleSubmit} className="AddMachine_section_button1">
                Save
              </button>
              <button onClick={onClose} className="AddMachine_section_button1">
                Cancel
              </button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default MachineAddModal;
