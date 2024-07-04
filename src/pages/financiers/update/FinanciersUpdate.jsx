
import React, { useState, useEffect } from 'react';
import { Label, TextInput, Textarea, Modal, Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import NavbarSidebarLayout from "../../../layouts/navbar-sidebar";
import axios from 'axios';
import './FinanciersUpdate.css';

function FinanciersUpdate({ show, onClose, onSave, financier }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: financier,
  });

  useEffect(() => {
    if (financier) {
      setValue('Financier', financier.Financier);
      setValue('Executive', financier.Executive);
      setValue('enginner', financier.enginner);
      setValue('textbox1', financier.textbox1);
      setValue('textbox2', financier.textbox2);
    }
  }, [financier, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(`http://localhost:3003/financiersdb/${financier.id}`, data);
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error('Error updating financier:', error);
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <Modal show={show} onClose={onClose}>
        <Modal.Body>
          <div className="financ_container">
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
              <div className="form_header">
                <h2>Update Financiers Report</h2>
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
                  <input type="text" id="Executive"
                    sizing="lg"
                    className={errors.Executive ? 'error-borderFinanc' : ''}
                    {...register('Executive', {
                      required: 'Required'
                    })} />
                  <p>{errors.Executive?.message}</p>
                </div>
                <div className='inputFieldFinancer'>
                  <label htmlFor="enginner">Sales engineer name:</label>
                  <input type="text" id="enginner"
                    sizing="lg"
                    className={errors.enginner ? 'error-borderFinanc' : ''}
                    {...register('enginner', {
                      required: 'Required'
                    })} />
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
                    })} />
                  <p>{errors.textbox1?.message}</p>
                </div>
                <div className='inputFieldFinancer'>
                  <label htmlFor="textbox2">Remarks:</label>
                  <textarea id="textbox2"
                    placeholder="Leave a comment..."
                    rows={4}
                    className={errors.textbox2 ? 'error-border2' : ''}
                    {...register('textbox2', {
                      required: 'Required'
                    })} />
                  <p>{errors.textbox2?.message}</p>
                </div>
              </div>
              <div className="form_butt">
                <Button
                  type="submit"
                  className="form_butt1 "
                >
                  Update
                </Button>
                <Button className="form_butt1 " onClick={onClose}>Cancel</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </NavbarSidebarLayout>
  );
}

export default FinanciersUpdate;


