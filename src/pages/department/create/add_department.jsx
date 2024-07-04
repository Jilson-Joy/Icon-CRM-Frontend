import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import './add_department.css';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddDepartment() {
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
  // Axios POST function
  const navigate = useNavigate();
  const handleData = (data) => {
    axios
      .post('http://localhost:3000/departmentdetails', data)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/department/departmentTable'); // Handle successful response
      })
      .catch((error) => {
        console.error('Error submitting data:', error); // Handle errors
      });
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <form className="Departmentform  gap-4" onSubmit={handleSubmit(handleData, onSubmit)}>
        <h2>Add Department</h2>

        <div className="wide-input">
          <div className="input_name">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="md"
            className={errors.name ? 'error-borderdepartment' : ''}
            {...register('name', {
              required: 'Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Please enter alphabetic characters only'
              }
            })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="wide-input">
          <div className="input_name">
            <Label htmlFor="code" value="Code" />
          </div>
          <TextInput
            id="code"
            type="text"
            sizing="md"
            className={errors.code ? 'error-borderdepartment' : ''}
            {...register('code', {
              required: 'Required'
            })}
          />
          <p>{errors.code?.message}</p>
        </div>

        <Button className="depart_btn" type="submit">
          Submit
        </Button>
      </form>
    </NavbarSidebarLayout>
  );
}

export default AddDepartment;
