import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Label, TextInput, Textarea } from 'flowbite-react';
import './SalesCallView.css';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function SalesCallView() {
  const [data, setData] = useState(null);
  const { id } = useParams(); // Extract id from URL parameter

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:3001/salescalldetail/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
          console.error('Error fetching data:', error); // Log for debugging
        });
    };

    fetchData();
  }, [id]);
  if (!data) return <p>Loading...</p>; // Display loading message while fetching

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="SalesCallView">
        <div className="SalesCallView_title">
          <h1>Sales Call Details</h1>
        </div>
        <div className="SalesCallView_details">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Deal List:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.deallist} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Number:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.Number} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Stage:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.Stage} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Bank:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.bank} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Current Date & Time:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.currentTime} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Meeting Date:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.SelectDate} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Support Required:" />
            </div>
            <TextInput id="base" type="text" sizing="md" value={data.Radiobox} readOnly />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Discussion:" />
            </div>
            <Textarea id="comment" required rows={4} value={data.comment} readOnly />
          </div>
          <div className="Salescalltable_back_div">
            <Link to={'/page/salescalls/salescalltable'}>
              <button type="button" className="Salescalltable_back">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default SalesCallView;
