import React, { useEffect, useRef } from 'react';
import { Button, Label, TextInput, Modal } from 'flowbite-react';
import './add_department.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DepartmentAddModal = ({ show, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });

  const navigate = useNavigate();

  const modalRef = useRef();

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

  const handleData = (data) => {
    axios
      .post('http://localhost:3000/departmentdetails', data)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/department/departmentTable'); // Handle successful response
        onClose(); // Close the modal on successful response
      })
      .catch((error) => {
        console.error('Error submitting data:', error); // Handle errors
      });
  };

  return (
    <Modal show={show} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Body className="department_modal">
          <div className="department_modal_header">
            <h2>Add Department</h2>
          </div>
          <form className="Departmentform1 gap-4 " onSubmit={handleSubmit(handleData)}>
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

            <div className="button_item_department">
              <button type="submit" className='button_item_department_btn'>Submit</button>
              <button type="reset" onClick={onClose}  className='button_item_department_btn'>
                Close
              </button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default DepartmentAddModal;
