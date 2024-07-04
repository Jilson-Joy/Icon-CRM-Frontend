import React, { useState, useEffect, useRef } from 'react';
import { Label, TextInput, Textarea,Modal, Button } from 'flowbite-react';
import './AddFinanciersReports.css';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { DevTool } from "@hookform/devtools";
function AddFinanciersReports({ show, onClose, onSave }) {
  const form = useForm();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });

  console.log('errors', errors);
  const onSubmit = (data) => console.log(data);

  // Axios POST function
  const navigate = useNavigate();
  const modalRef = useRef()

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
      .post('http://localhost:3003/financiersdb', data)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/page/financiers/AddFinanciersReportTable'); // Handle successful response
      })
      .catch((error) => {
        console.error('Error submitting data:', error); // Handle errors
      });
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
       <Modal show={show} onClose={onClose}>
       <div ref={modalRef}>
          <Modal.Body>
        <div className="financ_container">
          <form className="form_box" onSubmit={handleSubmit(handleData, onSubmit)}>
            <div className="form_header">
              <h2>Financiers Report</h2>
            </div>
            <div className='financerInputbutton'>
              <div className='inputFieldFinancer'>
                <label htmlFor="Financier">Financier name:</label>
                <input type="text" id="Financier"
                  sizing="lg"
                  className={errors.Financier ? 'error-borderFinanc' : ''}
                  {...register('Financier', {
                    required: 'Required'
                  })} />
                  <p>{errors.Financier?.message}</p>
              </div>
              <div className='inputFieldFinancer'>
                <label htmlFor="Executive">Executive name:</label>
                <input type="text"  id="Executive"
                  sizing="lg"
                  className={errors.Executive ? 'error-borderFinanc' : ''}
                  {...register('Executive', {
                    required: 'Required'
                  })}/>
                   <p>{errors.Executive?.message}</p>
              </div>
              <div className='inputFieldFinancer'>
                <label htmlFor="base">Sales enginner name:</label>
                <input type="text"   id="enginner"
                  sizing="lg"
                  className={errors.enginner ? 'error-borderFinanc' : ''}
                  {...register('enginner', {
                    required: 'Required'
                  })}/>
                   <p>{errors.enginner?.message}</p>
              </div>
              <div className='inputFieldFinancer'>
                <label htmlFor="textbox1">Discussion points:</label>
                <textarea id="textbox1"
                  placeholder="Leave a comment..."
                  rows={4}
                  className={errors.textbox1 ? 'error-border2' : ''}
                  {...register('textbox1', {
                    required: 'Required'
                  })}/>
                  <p>{errors.textbox1?.message}</p>
              </div>
              <div className='inputFieldFinancer'>
                <label htmlFor="textbox2">Remarks:</label>
                <textarea  id="textbox2"
                  placeholder="Leave a comment..."
                  rows={4}
                  className={errors.textbox2 ? 'error-border2' : ''}
                  {...register('textbox2', {
                    required: 'Required'
                  })}/>
                   <p>{errors.textbox2?.message}</p>
              </div>
            
  
            </div>
          
            <div className="form_butt">
              <Button
                type="submit"
                className="form_butt1">
                Submit
              </Button>
              <Button className='form_butt1' onClick={onClose}>
            Cancel
          </Button>
            </div>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
        </Modal.Body>
       </div>
      </Modal>
    </NavbarSidebarLayout>
  );
}

export default AddFinanciersReports;
