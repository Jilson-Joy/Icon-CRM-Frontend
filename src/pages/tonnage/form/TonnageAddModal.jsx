import React, { useState } from 'react';
import { Button, Modal, TextInput, Label } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './TonnageAddModal.css';

function TonnageAddModal({ onClose, onAdd }) {
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

  return (
    <Modal show onClose={onClose}>
      <Modal.Body>
        <div className="TonnageAdd_container">
          <form className="TonnageAdd" onSubmit={handleSubmit(onSubmit)}>
            <div className="TonnageAdd_header">
              <h2>Add Tonnage</h2>
            </div>
          <div className='TonnageAdd_section1'>
              <div className="TonnageAdd_inputdiv">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  id="name"
                  className={errors.name ? 'error-borderAddTonnage' : ''}
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
              <div className="TonnageAdd_inputdiv">
                <label htmlFor="">Code</label>
                <input
                  type="text"
                  id="Code"
                  className={errors.Code ? 'error-borderAddTonnage' : ''}
                  {...register('Code', {
                    required: 'Required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Please enter number only'
                    }
                  })}
                />
                <p className="errormsg">{errors.Code?.message}</p>
              </div>
          </div>
            <div className="TonnageAdd_button">
              <Link to={`/pages/tonnage/list/List_Tonnage`}>
                <button type="reset" onClick={onClose}>
                  Cancel
                </button>
              </Link>{' '}
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default TonnageAddModal;
