import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './OemAddModal.css'
function OemAddModal({ isOpen, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
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

  const handleAdd = () => {
    onAdd({ name, code });
    setName('');
    setCode('');
    onClose();
  };

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

  return (
    <Modal show={isOpen} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Body>
          <div className="oemAdd_container">
            <form className="oemAdd_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="oemAdd_header">
                <h2>Add OEM</h2>
              </div>
            <div className='oemAdd_section'>
                <div className="oemAdd_inputdiv">
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
                <div className="oemAdd_inputdiv">
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
            </div>
              <div className="oemAdd_button">
                <Link to={`/pages/oem/list/List_Oem`}>
                  <button type="reset" onClick={onClose}>
                    Cancel
                  </button>
                </Link>{' '}
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default OemAddModal;
