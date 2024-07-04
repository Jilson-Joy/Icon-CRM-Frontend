import React, { useState, useEffect } from 'react';
import './update_department.css';
import { Button, TextInput, Label } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Updatedepartment() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  const navigate = useNavigate();
  const { id } = useParams(); // Get branch ID from URL parameter

  // State variables
  const [departmentData, setDepartmenData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); // Track update progress
  // Fetch branch data using branchId
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/departmentdetails/${id}`);
        setDepartmenData(response.data);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    setIsUpdating(true); // Set update progress indicator

    axios
      .put(`http://localhost:3000/departmentdetails/${id}`, data)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/department/departmentTable'); // Handle successful update
      })
      .catch((error) => {
        console.error('Error updating branch:', error);
      })
      .finally(() => {
        setIsUpdating(false); // Reset update progress indicator
      });
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <form className="addbranchform gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Update Department</h2>

        <div className="wide-input">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="lg"
            className={errors.name ? 'error-borderUpdatedepartment' : ''}
            {...register('name', {
              required: 'Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Please enter alphabetic characters only'
              }
            })}
            defaultValue={departmentData.name}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div className="wide-input">
          <div className="mb-2 block">
            <Label htmlFor="code" value="Code" />
          </div>
          <TextInput
            id="code"
            type="text"
            sizing="lg"
            className={errors.code ? 'error-borderUpdatedepartment' : ''}
            {...register('code', { required: 'Required' })}
            defaultValue={departmentData.code}
          />
          <p>{errors.code?.message}</p>
        </div>

        <Button className="branch_btn" type="submit">
          Update
        </Button>
      </form>
    </NavbarSidebarLayout>
  );
}

export default Updatedepartment;
