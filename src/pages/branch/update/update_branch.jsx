import React, { useState, useEffect } from 'react';
import { Button, TextInput, Label } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateBranch() {
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
  // State variables
  const [branchData, setBranchData] = useState({});
  const [isUpdating, setIsUpdating] = useState(false); // Track update progress
  // Fetch branch data using branchId
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/branchdb/${id}`);
        setBranchData(response.data);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    setIsUpdating(true); // Set update progress indicator

    axios
      .put(`http://localhost:3004/branchdb/${id}`, data)
      .then((response) => {
        console.log('API response:', response.data);
        navigate('/branch/branchTable'); // Handle successful update
      })
      .catch((error) => {
        console.error('Error updating branch:', error);
      })
      .finally(() => {
        setIsUpdating(false); // Reset update progress indicator
      });
  };

  // Pre-populate form fields with existing data
  return (
    <NavbarSidebarLayout isFooter={false}>
      <form className="addbranchform gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2>Update Branch</h2>

        <div className="wide-input">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            sizing="lg"
            className={errors.name ? 'error-borderbranch' : ''}
            {...register('name', {
              required: 'Required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Please enter alphabetic characters only'
              }
            })}
            defaultValue={branchData.name}
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
            className={errors.code ? 'error-borderbranch' : ''}
            {...register('code', { required: 'Required' })}
            defaultValue={branchData.code}
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

export default UpdateBranch;
