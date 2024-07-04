import React from 'react';
import './Add_Tonnage.css';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { Link } from 'react-router-dom';


function Add_Tonnage() {
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
          <div className="AddTonnage_container">
            <form className="AddTonnage_form" onSubmit={handleSubmit(onSubmit)}>
              <div className="AddTonnage_header">
                <h2>Add Tonnage</h2>
              </div>
              <div className="AddTonnage_inputdiv">
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
              <div className="AddTonnage_inputdiv">
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
              <div className="AddTonnage_button">
<Link to={`/pages/tonnage/list/List_Tonnage`} >
                  <button type="reset">Cancel</button>
  
</Link>                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </NavbarSidebarLayout>
      );
    }
    

export default Add_Tonnage
