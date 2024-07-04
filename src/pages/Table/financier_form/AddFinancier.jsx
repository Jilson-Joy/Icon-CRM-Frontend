import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Label, TextInput, Button } from 'flowbite-react';
import './AddFinancier.css';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';


function AddFinancier() {
  const [financierName, setFinancierName] = useState('');
  const [district, setDistrict] = useState('');
  const [officeAddress, setOfficeAddress] = useState('');
  const [executiveName, setExecutiveName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [mailId, setMailId] = useState('');
  const navigate = useNavigate();

  const [financierNameError, setFinancierNameError] = useState('');
  const [districtError, setDistrictError] = useState('');
  const [officeAddressError, setOfficeAddressError] = useState('');
  const [executiveNameError, setExecutiveNameError] = useState('');
  const [phoneNoError, setPhoneNoError] = useState('');
  const [mailIdError, setMailIdError] = useState('');

  const handleNameChange = (event) => {
    const enteredName = event.target.value;
    const nameRegex = /^[A-Za-z ]*$/;
    setFinancierName(enteredName);
    if (nameRegex.test(enteredName)) {
      setFinancierNameError('');
    } else {
      setFinancierNameError('Name should contain only alphabets');
    }
  };

  const handleBlurfinancierName = () => {
    if (!financierName.trim()) {
      setFinancierNameError('Required');
    }
  };

  const handleDistrictChange = (event) => {
    const enteredDistrict = event.target.value;
    const districtRegex = /^[A-Za-z ]*$/;
    setDistrict(enteredDistrict);
    if (districtRegex.test(enteredDistrict)) {
      setDistrictError('');
    } else {
      setDistrictError('District should contain only alphabets');
    }
  };

  const handleBlurDistrict = () => {
    if (!district.trim()) {
      setDistrictError('Required');
    }
  };

  const handleBlurOfficeAddress = () => {
    if (!officeAddress.trim()) {
      setOfficeAddressError('Required');
    }
  };

  const handlePhoneNumberChange = (event) => {
    const enteredPhoneNumber = event.target.value;
    const numericPhoneNumber = enteredPhoneNumber.replace(/\D/g, '');

    if (numericPhoneNumber.length <= 10) {
      setPhoneNo(numericPhoneNumber);
      setPhoneNoError('');
    } else {
      setPhoneNoError('Invalid phone number');
    }
  };

  const handleBlurPhoneNo = () => {
    if (!phoneNo.trim()) {
      setPhoneNoError('Required');
    } else {
      setPhoneNoError('');
    }
  };

  const handleBlurExecutiveName = () => {
    if (!executiveName.trim()) {
      setExecutiveNameError('Required');
    }
  };

  const handleMailIdChange = (event) => {
    const enteredMailId = event.target.value;
    const mailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setMailId(enteredMailId);
    if (mailRegex.test(enteredMailId) || enteredMailId === '') {
      setMailIdError('');
    } else {
      setMailIdError('Please enter a valid email address');
    }
  };

  const handleBlurMailId = () => {
    if (!mailId.trim()) {
      setMailIdError('Required');
    }
  };

  const handleOfficeAddressChange = (event) => {
    setOfficeAddress(event.target.value);
  };

  const handleExecutiveNameChange = (event) => {
    setExecutiveName(event.target.value);
  };

  const handlePhoneNoChange = (event) => {
    setPhoneNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!financierName) {
      setFinancierNameError('Please enter Financier Name');
      hasError = true;
    } else {
      setFinancierNameError('');
    }

    if (!district) {
      setDistrictError('Please enter District');
      hasError = true;
    } else {
      setDistrictError('');
    }

    if (!officeAddress) {
      setOfficeAddressError('Please enter Office Address');
      hasError = true;
    } else {
      setOfficeAddressError('');
    }

    if (!phoneNo) {
      setPhoneNoError('Please enter Phone No');
      hasError = true;
    } else {
      setPhoneNoError('');
    }

    if (!mailId) {
      setMailIdError('Please enter Mail Id');
      hasError = true;
    } else {
      setMailIdError('');
    }

    if (!executiveName) {
      setExecutiveNameError('Please enter Executive Name');
      hasError = true;
    } else {
      setExecutiveNameError('');
    }

    if (!hasError) {
      // Submit form if there are no errors
      console.log('Form submitted successfully');
    }

    if (!hasError) {
      const inputData = {
        financierName: financierName,
        district: district,
        officeAddress: officeAddress,
        executiveName: executiveName,
        phoneNo: phoneNo,
        mailId: mailId
      };

      axios
        .post('http://localhost:3001/add_financier', inputData)
        .then((res) => {
          navigate('/financier/table'); // Navigate after successful submission
        })
        .catch((error) => {
          console.error('Error adding financier:', error);
        });
    }
  };

  
  return (
<NavbarSidebarLayout isFooter={false}>
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
                  value={financierName}
                  style={{ border: financierNameError ? '1px solid red' : '1px solid #ccc' }}
                  onChange={handleNameChange}
                  onBlur={handleBlurfinancierName}
                />
                {financierNameError && (
                  <span style={{ color: 'red' }} className="error">
                    {financierNameError}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="district">District</Label>
                <TextInput
                  type="text"
                  id="district"
                  placeholder="Enter District"
                  value={district}
                  style={{ border: districtError ? '1px solid red' : '1px solid #ccc' }}
                  onBlur={handleBlurDistrict}
                  onChange={handleDistrictChange}
                />
                {districtError && (
                  <span style={{ color: 'red' }} className="error">
                    {districtError}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="officeAddress">Office Address</Label>
                <TextInput
                  type="text"
                  id="officeAddress"
                  placeholder="Enter Office Address"
                  value={officeAddress}
                  style={{ border: officeAddressError ? '1px solid red' : '1px solid #ccc' }}
                  onBlur={handleBlurOfficeAddress}
                  onChange={handleOfficeAddressChange}
                />
                {officeAddressError && (
                  <span style={{ color: 'red' }} className="error">
                    {officeAddressError}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="executiveName">Executive Name</Label>
                <TextInput
                  type="text"
                  id="executiveName"
                  placeholder="Enter Executive Name"
                  value={executiveName}
                  style={{ border: executiveNameError ? '1px solid red' : '1px solid #ccc' }}
                  onBlur={handleBlurExecutiveName}
                  onChange={handleExecutiveNameChange}
                />
                {executiveNameError && (
                  <span style={{ color: 'red' }} className="error">
                    {executiveNameError}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="phoneNo">Phone No</Label>
                <TextInput
                  type="text"
                  id="phoneNo"
                  placeholder="Enter Phone No"
                  value={phoneNo}
                  style={{ border: phoneNoError ? '1px solid red' : '1px solid #ccc' }}
                  onBlur={handleBlurPhoneNo}
                  onChange={handlePhoneNumberChange}
                />
                {phoneNoError && (
                  <span style={{ color: 'red' }} className="error">
                    {phoneNoError}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="mailId">Mail Id</Label>
                <TextInput
                  type="text"
                  id="mailId"
                  placeholder="Enter Mail Id"
                  value={mailId}
                  style={{ border: mailIdError ? '1px solid red' : '1px solid #ccc' }}
                  onBlur={handleBlurMailId}
                  onChange={handleMailIdChange}
                />
                {mailIdError && (
                  <span style={{ color: 'red' }} className="error">
                    {mailIdError}
                  </span>
                )}
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
</NavbarSidebarLayout>
  );
}

export default AddFinancier;




