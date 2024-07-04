import React, { useEffect, useRef } from 'react';
import { Modal, Button, Label, TextInput } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import './Add_Branch_Modal.css'
function Add_Branch_Modal({ show, onClose, onSave }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleData = (data) => {
    onSave(data);
  };

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

  return (
    <Modal show={show} onClose={onClose}>
     
      <div ref={modalRef}>
        <Modal.Body>
          <form className="addbranchform gap-4" onSubmit={handleSubmit(handleData)}>
           <div className='AddBranch_header'>
              <h2>Add Branch</h2>
           </div>
            <div className="wide-input">
              <div className="input_name">
                <label htmlFor="name" >Name</label>
                <TextInput
                id="name"
                type="text"
                sizing="md"
                className={errors.name ? 'error-borderbranch' : ''}
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
                <label htmlFor="code">Code</label>
              
              <TextInput
                id="code"
                type="text"
                sizing="md"
                className={errors.code ? 'error-borderbranch' : ''}
                {...register('code', {
                  required: 'Required'
                })}
              />
              <p>{errors.code?.message}</p>
            </div>
            </div>
            <div className='branch_buttons'>
                <Button className="branch_btn" type="submit">
                  Submit
                </Button>
                <Button className="branch_btn"  onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </div>
     
    </Modal>
  );
}

export default Add_Branch_Modal;
