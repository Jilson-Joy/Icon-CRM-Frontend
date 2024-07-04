import React, { useEffect, useRef } from 'react';
import {  Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSegment from '../../../hooks/useSegment';


function SegmentAddModal({ isOpen, onClose, onAdd }) {
    const navigate = useNavigate();

    const modalRef = useRef()

    const { submitData } = useSegment();
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      mode: 'all'
    });

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
    
  
    const onSubmit = async (data) => {
      try {
        console.log('Form data:', data); // Log the form data to see if it's captured correctly
  
        // Call the submitData function from useSegment hook
        await submitData(data, navigate);
  
        // Note: You can remove the Axios call here, as it's handled inside submitData function
      } catch (error) {
        console.error('Error submitting data:', error.message);
      }
    };
  return (
    <Modal show={isOpen} onClose={onClose}>
   <div ref={modalRef}>
        <Modal.Body>
        <div className="AddSegment_container">
          <form className="AddSegment_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="AddSegment_header">
              <h2>Add Segment</h2>
            </div>
            <div className="AddSegment_name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className={errors.name ? 'error-borderAddSegment' : ''}
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
            <div className="AddSegment_code">
              <label htmlFor="code">Code</label>
              <input
                type="text"
                id="code"
                className={errors.code ? 'error-borderAddSegment' : ''}
                {...register('code', {
                  required: 'Required',
                  pattern: {
                    value: /^[A-Za-z0-9\s\-_]+$/,
                    message: 'Please enter the Code'
                  }
                })}
              />
              <p className="errormsg">{errors.code?.message}</p>
            </div>
            <div className="AddSegment_button">
              <button type="reset" onClick={onClose}>Cancel</button>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        </Modal.Body>
        
   </div>
    </Modal>
  );
}

export default SegmentAddModal;
