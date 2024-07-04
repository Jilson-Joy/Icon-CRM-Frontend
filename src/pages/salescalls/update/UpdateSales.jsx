import React, { useState, useEffect } from 'react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Radio } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateSales.css';

function UpdateSales() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/salescalldetail/${id}`);
        setUpdateData(response.data);
        console.log('Fetched data:', response.data);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3001/salescalldetail/${id}`, data);
      navigate('/page/salescalls/salescalltable');
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };
  //
  const dealOptions = [
    { value: 'Profit', label: 'Profit' },
    { value: 'Loss', label: 'Loss' },
    { value: 'France', label: 'France' },
    { value: 'Germany', label: 'Germany' },
    { value: 'A', label: 'A' }
  ];

  const StageOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'LLOS', label: 'LLOS' },
    { value: 'Order Lost', label: 'Order Lost' },
    { value: 'Hold', label: 'Hold' }
  ];

  const financeOptions = [
    { value: 'HDFC', label: 'HDFC' },
    { value: 'ICICI', label: 'ICICI' },
    { value: 'SBI', label: 'SBI' },
    { value: 'SIB', label: 'SIB' },
    { value: 'Axis', label: 'Axis' }
  ];
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="salesUpdate_container">
        <form className="SalesForm" onSubmit={handleSubmit}>
          <div className="salesHeader">
            <h1>Update Sales Call list</h1>
          </div>
          <div className="salesUpdateFeild">
            {/* Select deals */}
            <div className="salesSection1">
              <label>Select deals</label>
              <select>
                {dealOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Enter Number */}
            <div className="salesSection1">
              <label htmlFor="">Phone Number</label>
              <input type="text" />
            </div>
            {/* Stage selection */}
            <div className="salesSection1">
              <label>Select Stage</label>
              <select>
                <option value="1">1</option>
              </select>
            </div>
            {/* stage Options  hidden*/}
            <div className="stageOptions">
              <div className="Oem">
                <label htmlFor="">OEM</label>
                <input type="text" />
              </div>
              <div className="ModelNumber">
                <label htmlFor="">ModelNumber</label>
                <input type="text" />
              </div>
            </div>
            {/* Select finance */}
            <div className="salesSection1">
              <label>Select finance</label>
              <select>
                <option value="1">1</option>
              </select>
            </div>
            {/* textarea */}
            <div className="salesSection1">
              <label>Duiscssion points</label>
              <textarea name="" id="" cols="50" rows="5"></textarea>
            </div>{' '}
            {/*Current date & Time:  */}
            <div className="salesSection2">
              <div className="salesSection1">
                <label>Current date & Time:</label>
                <input type="text" />
              </div>
              <div className="salesSection1">
                <label>Schedule Meeting:</label>
                <input type="text" />
              </div>
            </div>
            {/* button */}
            <div>
              <button>Update</button>
            </div>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default UpdateSales;
