import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { FileInput } from 'flowbite-react';
import './add_prospects.css';
import AddMachine from './modal_add_machine';
import { Trash2, PencilLine, SquareCheckBig } from 'lucide-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

import { USER_ID_PREF } from '../../../constants/constants';
import useProspects from '../../../hooks/useProspects';
import { useNavigate } from 'react-router-dom';

function AddProspects() {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [email, setEmail] = useState('');
  const [gst_no, setGSTNO] = useState('');
  const [adhaar_no, setAdhaarNo] = useState('');
  const [pan_no, setPanNo] = useState('');

  const [data, setData] = useState([
    {
      id: 1,
      make: 'Apple MacBook Pro 17"',
      model: 'Silver',
      manufactureYear: 'Laptop',
      tonnage: 'Yes'
    },
    {
      id: 2,
      make: 'Microsoft Surface Pro',
      model: 'White',
      manufactureYear: 'Laptop PC',
      tonnage: 'No'
    }
  ]);

  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [address2Error, setAddress2Error] = useState('');
  const [districtError, setDistrictError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [gst_noError, setGSTNOError] = useState('');
  const [adhaar_noError, setAdhaarnoError] = useState('');
  const [pan_noError, setpanNoError] = useState('');

  useEffect(() => {
    setUserId(localStorage.getItem(USER_ID_PREF));
  }, []);

  const { addProspect } = useProspects();
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    const enteredName = event.target.value;
    const nameRegex = /^[A-Za-z]*$/;

    if (nameRegex.test(enteredName)) {
      setName(enteredName);
      setNameError('');
    } else {
      setNameError('Name should contain only alphabets');
    }
  };

  const handleBlurName = () => {
    if (!name.trim()) {
      setNameError('Required');
    } else {
      setNameError('');
    }
  };

  const handlePhoneNumberChange = (event) => {
    const enteredPhoneNumber = event.target.value;
    const numericPhoneNumber = enteredPhoneNumber.replace(/\D/g, '');

    if (numericPhoneNumber.length <= 10) {
      setPhoneNumber(numericPhoneNumber);
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Invalid phone number');
    }
  };

  const handleBlurPhoneNumber = () => {
    if (!name.trim()) {
      setPhoneNumberError('Required');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleBlurAddress = () => {
    if (!address.trim()) {
      setAddressError('Required');
    } else {
      setAddressError('');
    }
  };

  const handleBlurAddress2 = () => {
    if (!address2.trim()) {
      setAddress2Error('Required');
    } else {
      setAddress2Error('');
    }
  };

  const handleDistrictChange = (event) => {
    const enteredDistrict = event.target.value;

    const districtRegex = /^[A-Za-z]*$/;

    if (districtRegex.test(enteredDistrict)) {
      setDistrict(enteredDistrict);
      setDistrictError('');
    } else {
      setDistrictError('District should contain only alphabets');
    }
  };

  const handleBlurDistrict = () => {
    if (!district.trim()) {
      setDistrictError('Required');
    } else {
      setDistrictError('');
    }
  };

  const handlePincodeChange = (event) => {
    const enteredPincode = event.target.value;
    const numericPincode = enteredPincode.replace(/\D/g, '');

    setPincode(numericPincode);

    if (enteredPincode.length !== 6) {
      setPincodeError('Pincode must be 6 digits');
    } else {
      setPincodeError('');
    }
  };

  const handleBlurPincode = () => {
    if (!pincode.trim()) {
      setPincodeError('Required');
    } else {
      setPincodeError('');
    }
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmail(enteredEmail);
    if (emailRegex.test(enteredEmail)) {
      setEmailError('');
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  const handleBlurEmail = () => {
    if (!email.trim()) {
      setEmailError('Required');
    } else {
      setEmailError('');
    }
  };

  const handleGSTNOChange = (event) => {
    const enteredGST = event.target.value;
    const gstRegex = /^[0-9]*$/;

    if (gstRegex.test(enteredGST)) {
      setGSTNO(enteredGST);
      setGSTNOError('');
    } else {
      setGSTNOError('GST should contain only numbers');
    }
  };

  const handleBlurGSTNO = () => {
    if (!gst_no.trim()) {
      setGSTNOError('Required');
    } else {
      setGSTNOError('');
    }
  };

  const handleAdhaarNoChange = (event) => {
    const enteredAdhaar = event.target.value;

    const adhaarRegex = /^[A-Za-z]*$/;

    if (adhaarRegex.test(enteredAdhaar)) {
      setAdhaarNo(enteredAdhaar);
      setAdhaarnoError('');
    } else {
      setAdhaarnoError('Adhaar should contain only alphabets');
    }
  };

  const handleAdhaarNo = () => {
    if (!adhaar_no.trim()) {
      setAdhaarnoError('Required');
    } else {
      setAdhaarnoError('');
    }
  };

  const handlePanNoChange = (event) => {
    const enteredPanNo = event.target.value;

    const panNoRegex = /^[A-Za-z]*$/;

    if (panNoRegex.test(enteredPanNo)) {
      setPanNo(enteredPanNo);
      setpanNoError('');
    } else {
      setpanNoError('PAN No should contain only alphabets');
    }
  };

  const handlePanNo = () => {
    if (!pan_no.trim()) {
      setpanNoError('Required');
    } else {
      setpanNoError('');
    }
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = (index) => {
    console.log(index);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
    console.log('Remove item with id:', id);
  };

  const handleAddModel = (newModelData) => {
    setData([...data, newModelData]);
  };

  const handleSubmit = async () => {
    let hasError = false;

    if (!name) {
      setNameError('Please enter name');
    } else {
      setNameError('');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Please enter phone number');
    }

    if (!address) {
      setAddressError('Please enter address1');
    }

    if (!address2) {
      setAddress2Error('Please enter address2');
    }

    if (!district) {
      setDistrictError('Please enter district');
    }

    if (!pincode) {
      setPincodeError('Please enter pincode');
    }

    if (!email) {
      setEmailError('Please enter email');
    }

    if (!gst_no) {
      setGSTNOError('Please enter GST');
    }

    if (!adhaar_no) {
      setAdhaarnoError('Please enter adhaar no');
    }

    if (!pan_no) {
      setpanNoError('Please enter pan no');
    }

    if (hasError) {
      return;
    }

    console.log('form Submit');
    const apiParams =
      'Name=' +
      name +
      '&Telephone=' +
      phoneNumber +
      '&Address=' +
      address +
      '&District=' +
      district +
      '&Pincode=' +
      pincode +
      '&Adhaar_no=' +
      adhaar_no +
      '&Pan_No=' +
      pan_no +
      '&Created_By=' +
      userId;

    await addProspect(apiParams)
      .then(async (response) => {
        console.log(response);
        // After successfully adding the prospect, fetch updated prospect data from the API
        if (response.length > 0) {
          navigate('/prospects/list/list-prospects');
        }
      })
      .catch((error) => {
        console.error('Error creating prospect:', error);
      });
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div
        style={{
          display: 'flex',
          //justifyContent: 'center',
          //alignItems: 'center',
          gap: '5px',
          padding: '10px'
        }}>
        <form className="form-container">
          <div className="mb-2 block">
            <div>
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter Name"
              required
              shadow
              style={{
                border: nameError && !name.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              value={name}
              onChange={handleNameChange}
              onBlur={handleBlurName}
            />
            {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
          </div>
          <div className="mb-2 block">
            <div>
              <Label htmlFor="phoneNumber" value="Number" />
            </div>
            <TextInput
              id="phoneNumber"
              type="tel"
              placeholder="+91"
              required
              shadow
              style={{
                border: phoneNumberError && !phoneNumber.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onBlur={handleBlurPhoneNumber}
            />
            {phoneNumberError && <span style={{ color: 'red' }}>{phoneNumberError}</span>}
          </div>
          <div className="mb-2 block">
            <div>
              <Label htmlFor="address1" value="Address1" />
            </div>
            <TextInput
              id="address"
              type="text"
              sizing="lg"
              placeholder="Enter  Address"
              required
              rows={4}
              value={address}
              style={{
                border: addressError && !address.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={handleBlurAddress}
            />
            {addressError && <span style={{ color: 'red' }}>{addressError}</span>}{' '}
          </div>
          <div className="mb-2 block">
            <Label htmlFor="address2" value="Address2" />
            <TextInput
              id="address2"
              type="text"
              placeholder="Enter Address"
              required
              rows={4}
              value={address2}
              style={{
                border: address2Error && !address2.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              onChange={(e) => setAddress2(e.target.value)}
              onBlur={handleBlurAddress2}
            />
            {address2Error && <span style={{ color: 'red' }}>{address2Error}</span>}{' '}
          </div>
          <div className="mb-2 block">
            <div>
              <Label htmlFor="district" value="District" />
            </div>
            <TextInput
              id="district"
              type="text"
              placeholder="Enter District"
              required
              shadow
              value={district}
              style={{
                border: districtError && !district.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              onChange={handleDistrictChange}
              onBlur={handleBlurDistrict}
            />
            {districtError && <span style={{ color: 'red' }}>{districtError}</span>}{' '}
          </div>
          <div className="mb-2 block">
            <div>
              <Label htmlFor="pincode" value="Pin Number" />
            </div>
            <TextInput
              id="pincode"
              type="tel"
              pattern="[0-9]{6}"
              maxLength="6"
              placeholder="Enter Pin Number"
              required
              shadow
              style={{
                border: pincodeError && !pincode.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              value={pincode}
              onChange={handlePincodeChange}
              onBlur={handleBlurPincode}
            />
            {pincodeError && <span style={{ color: 'red' }}>{pincodeError}</span>}{' '}
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="text"
              placeholder="Enter Email"
              shadow
              style={{
                border: emailError && !email.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlurEmail}
            />
            {emailError && <span style={{ color: 'red' }}>{emailError}</span>}{' '}
          </div>
          <div className="mb-2 block">
            <Label htmlFor="gst_no" value="GST" />
            <TextInput
              id="gst_no"
              type="text"
              placeholder="Enter GST"
              shadow
              style={{
                border: gst_noError && !gst_no.trim() ? '1px solid red' : '1px solid #ccc'
              }}
              value={gst_no}
              onChange={handleGSTNOChange}
              onBlur={handleBlurGSTNO}
            />
            {gst_noError && <span style={{ color: 'red' }}>{gst_noError}</span>}{' '}
          </div>
          <div id="fileUpload" className="mb-2 block">
            <div>
              <Label htmlFor="adhaar_no" value="Adhaar Number" />
            </div>
            <TextInput
              id="adhaar_no"
              type="text"
              placeholder="Enter  Adhaar no"
              required
              shadow
              value={adhaar_no}
              onChange={handleAdhaarNoChange}
              onBlur={handleAdhaarNo}
              style={{
                border: adhaar_noError && !adhaar_no.trim() ? '1px solid red' : '1px solid #ccc'
              }}
            />
            {adhaar_noError && <span style={{ color: 'red' }}>{adhaar_noError}</span>}{' '}
            <div>
              <Label htmlFor="file" value="Upload Adhar" />
            </div>
            <FileInput id="file" />
          </div>
          <div id="fileUpload" className="mb-2 block">
            <div>
              <Label htmlFor="pan_no" value="PAN Number" />
            </div>
            <TextInput
              id="pan_no"
              type="text"
              placeholder="Enter pan no"
              required
              shadow
              value={pan_no}
              onChange={handlePanNoChange}
              onBlur={handlePanNo}
              style={{
                border: pan_noError && !pan_no.trim() ? '1px solid red' : '1px solid #ccc'
              }}
            />
            {pan_noError && <span style={{ color: 'red' }}>{pan_noError}</span>}{' '}
            <div>
              <div>
                <Label htmlFor="file" value="Upload Pan Card" />
              </div>
              <FileInput id="file" />
            </div>
          </div>
          {/* BUTTON */}
          <div
            className="add-button "
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'end'
            }}>
            <AddMachine handleAddModel={handleAddModel} />
          </div>
          {/* TABLE */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Make
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Model
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Manufacture Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tonnage
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {editingIndex === index ? (
                        <TextInput
                          value={item.make}
                          onChange={(e) =>
                            setData([
                              ...data.slice(0, index),
                              { ...item, make: e.target.value },
                              ...data.slice(index + 1)
                            ])
                          }
                        />
                      ) : (
                        item.make
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingIndex === index ? (
                        <TextInput
                          value={item.model}
                          onChange={(e) =>
                            setData([
                              ...data.slice(0, index),
                              { ...item, model: e.target.value },
                              ...data.slice(index + 1)
                            ])
                          }
                        />
                      ) : (
                        item.model
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingIndex === index ? (
                        <TextInput
                          value={item.manufactureYear}
                          onChange={(e) =>
                            setData([
                              ...data.slice(0, index),
                              { ...item, manufactureYear: e.target.value },
                              ...data.slice(index + 1)
                            ])
                          }
                        />
                      ) : (
                        item.manufactureYear
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingIndex === index ? (
                        <TextInput
                          value={item.tonnage}
                          onChange={(e) =>
                            setData([
                              ...data.slice(0, index),
                              { ...item, tonnage: e.target.value },
                              ...data.slice(index + 1)
                            ])
                          }
                        />
                      ) : (
                        item.tonnage
                      )}
                    </td>
                    <td className="flex items-center px-6 py-4">
                      {editingIndex === index ? (
                        <Button
                          className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                          onClick={() => handleSave(index)}>
                          <SquareCheckBig />
                        </Button>
                      ) : (
                        <Button
                          className="font-medium text-white-600 dark:text-white-500 hover:underline mr-3"
                          onClick={() => handleEdit(index)}>
                          <PencilLine />
                        </Button>
                      )}
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mb-2 block">
            <Button className="w-full sm:w-auto" color="dark" onClick={handleSubmit}>
              Submit
            </Button>
          </div>{' '}
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddProspects;
