import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';

function Financierform_Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({
    financierName: '',
    district: '',
    officeAddress: '',
    executiveName: '',
    phoneNo: '',
    mailId: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/add_financier/${id}`)
      .then((response) => {
        setRecord(response.data);
      })
      .catch((error) => {
        console.error('Error fetching financier data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecord({ ...record, [id]: value });
    switch (id) {
      case 'financierName':
        handleNameChange(value);
        break;
      case 'district':
        handleDistrictChange(value);
        break;
      case 'phoneNo':
        handlePhoneNumberChange(value);
        break;
      case 'mailId':
        handleMailIdChange(value);
        break;
      default:
        break;
    }
  };

  const handleNameChange = (enteredName) => {
    const nameRegex = /^[A-Za-z ]*$/;
    if (nameRegex.test(enteredName)) {
      setErrors({ ...errors, financierName: '' });
    } else {
      setErrors({ ...errors, financierName: 'Name should contain only alphabets' });
    }
  };

  const handleDistrictChange = (enteredDistrict) => {
    const districtRegex = /^[A-Za-z ]*$/;
    if (districtRegex.test(enteredDistrict)) {
      setErrors({ ...errors, district: '' });
    } else {
      setErrors({ ...errors, district: 'District should contain only alphabets' });
    }
  };

  const handlePhoneNumberChange = (enteredPhoneNumber) => {
    const numericPhoneNumber = enteredPhoneNumber.replace(/\D/g, '');
    if (numericPhoneNumber.length <= 10) {
      setErrors({ ...errors, phoneNo: '' });
    } else {
      setErrors({ ...errors, phoneNo: 'Invalid phone number' });
    }
  };

  const handleMailIdChange = (enteredMailId) => {
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (mailRegex.test(enteredMailId) || enteredMailId === '') {
      setErrors({ ...errors, mailId: '' });
    } else {
      setErrors({ ...errors, mailId: 'Please enter a valid email address' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      axios
        .put(`http://localhost:3001/add_financier/${id}`, record)
        .then((response) => {
          console.log('Response from server:', response.data);
          navigate('/financier/table');
        })
        .catch((error) => {
          console.error('Error updating designation:', error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!record.financierName.trim()) {
      errors.financierName = 'Financier name is required';
    }
    if (!record.district.trim()) {
      errors.district = 'District is required';
    }
    if (!record.officeAddress.trim()) {
      errors.officeAddress = 'Office address is required';
    }
    if (!record.executiveName.trim()) {
      errors.executiveName = 'Executive name is required';
    }
    if (!record.phoneNo.trim()) {
      errors.phoneNo = 'Phone number is required';
    } else if (isNaN(record.phoneNo) || record.phoneNo.length !== 10) {
      errors.phoneNo = 'Invalid phone number';
    }
    if (!record.mailId.trim()) {
      errors.mailId = 'Mail ID is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(record.mailId)) {
      errors.mailId = 'Invalid email address';
    }
    return errors;
  };

  return (
    <div className="container1">
      <div className="w-full max-w-md">
        <form className="form-border" onSubmit={handleSubmit}>
          <div className="flex max-w-md flex-col gap-4">
            <div className="heading">
              <h1>Add Financier</h1>
            </div>
            <div>
              <Label htmlFor="financierName">Financier Name</Label>
              <TextInput
                type="text"
                id="financierName"
                placeholder="Enter Financier Name"
                value={record.financierName}
                onChange={handleChange}
                style={{ border: errors.financierName ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.financierName && <p className="error">{errors.financierName}</p>}
            </div>
            <div>
              <Label htmlFor="district">District</Label>
              <TextInput
                type="text"
                id="district"
                placeholder="Enter District"
                value={record.district}
                onChange={handleChange}
                style={{ border: errors.district ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.district && <p className="error">{errors.district}</p>}
            </div>
            <div>
              <Label htmlFor="officeAddress">Office Address</Label>
              <TextInput
                type="text"
                id="officeAddress"
                placeholder="Enter Office Address"
                value={record.officeAddress}
                onChange={handleChange}
                style={{ border: errors.officeAddress ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.officeAddress && <p className="error">{errors.officeAddress}</p>}
            </div>
            <div>
              <Label htmlFor="executiveName">Executive Name</Label>
              <TextInput
                type="text"
                id="executiveName"
                placeholder="Enter Executive Name"
                value={record.executiveName}
                onChange={handleChange}
                style={{ border: errors.executiveName ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.executiveName && <p className="error">{errors.executiveName}</p>}
            </div>
            <div>
              <Label htmlFor="phoneNo">Phone No</Label>
              <TextInput
                type="text"
                id="phoneNo"
                placeholder="Enter Phone No"
                value={record.phoneNo}
                onChange={handleChange}
                style={{ border: errors.phoneNo ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
            </div>
            <div>
              <Label htmlFor="mailId">Mail Id</Label>
              <TextInput
                type="text"
                id="mailId"
                placeholder="Enter Mail Id"
                value={record.mailId}
                onChange={handleChange}
                style={{ border: errors.mailId ? '1px solid red' : '1px solid #ccc' }}
              />
              {errors.mailId && <p className="error">{errors.mailId}</p>}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button size="md" color="dark" className="w-full" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Financierform_Update;
