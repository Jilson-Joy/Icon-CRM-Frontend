import React, { useEffect, useState } from 'react';
import './AddMachine.css';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import useMachine from '../../../hooks/useMachine';
import { useNavigate } from 'react-router-dom';

function AddMachine() {
  const { fetchData, SubmitMachineData } = useMachine();
  const [machineList, setMachineList] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  // console.log('errors', errors);
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
    const GetMachineData = async () => {
      try {
        const machineOptions = await fetchData();
        setMachineList(machineOptions);
      } catch (error) {}
    };
    GetMachineData();
  }, []);
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="AddMachine_container">
        <form className="AddMachine_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="AddMachine_header">
            <h2>Add Machine</h2>
          </div>
          {/*  */}
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
          {/*  */}
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
          {/*  */}
          <div className="AddMachine_button">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddMachine;
