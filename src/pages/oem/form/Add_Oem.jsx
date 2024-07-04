import React from 'react';
import './Add_Oem.css';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { Link } from 'react-router-dom';

function Add_Oem() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  console.log('errors', errors);
  const onSubmit = (data) => console.log(data);
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="Addoem_container">
        <form className="Addoem_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Addoem_header">
            <h2>Add OEM</h2>
          </div>
          <div className="AddOem_inputdiv">
            <label htmlFor="">Name</label>
            <input
              type="text"
              id="name"
              className={errors.name ? 'error-borderAddoem' : ''}
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
          <div className="AddOem_inputdiv">
            <label htmlFor="">Code</label>
            <input
              type="text"
              id="Code"
              className={errors.Code ? 'error-borderAddoem' : ''}
              {...register('Code', {
                required: 'Required',
                pattern: {
                  // value: /^[0-9]+$/,
                  message: 'Please enter number only'
                }
              })}
            />
            <p className="errormsg">{errors.Code?.message}</p>
          </div>
          <div className="Addoem_button">
            <Link to={`/pages/oem/list/List_Oem`}>
              <button type="reset">Cancel</button>
            </Link>{' '}
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default Add_Oem;
