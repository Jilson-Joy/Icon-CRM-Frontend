import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { FileInput } from 'flowbite-react';
import './Modify_Prospects.css';
import AddModels from '../create/Add_Machine';
import { Trash2, PencilLine, SquareCheckBig } from 'lucide-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';

function ProspectsModify() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [deals, setDeals] = useState({ date: '' });
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
    },
    {
      id: 3,
      make: 'Magic Mouse 2',
      model: 'Black',
      manufactureYear: 'Accessories',
      tonnage: 'Yes'
    },
    {
      id: 4,
      make: 'Apple Watch',
      model: 'Black',
      manufactureYear: 'Watches',
      tonnage: 'Yes'
    },
    {
      id: 5,
      make: 'Apple iMac',
      model: 'Silver',
      manufactureYear: 'PC',
      tonnage: 'Yes'
    },
    {
      id: 6,
      make: 'Apple AirPods',
      model: 'White',
      manufactureYear: 'Accessories',
      tonnage: 'NO'
    },
    {
      id: 7,
      make: 'iPad Pro',
      model: 'Gold',
      manufactureYear: 'Gold',
      tonnage: 'No'
    },
    {
      id: 8,
      make: 'Magic Keyboard',
      model: 'Black',
      manufactureYear: 'Accessories',
      tonnage: 'Yes'
    },
    {
      id: 9,
      make: 'Apple TV 4K',
      model: 'Black',
      manufactureYear: 'TV',
      tonnage: 'Yes'
    },
    {
      id: 10,
      make: 'AirTag',
      model: 'Silver',
      manufactureYear: 'Accessories',
      tonnage: 'Yes'
    }
  ]);

  const [nameError, setNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [districtError, setDistrictError] = useState('');
  const [pincodeError, setPincodeError] = useState('');
  const [dealsError, setDealsError] = useState('');
  // const [fileUploaded, setFileUploaded] = useState(false);
  // const [editingIndex, setEditingIndex] = useState(null);
  // const [editingItem, setEditingItem] = useState(null);

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

  const handleChange = (event) => {
    const selectedDate = new Date(event.target.value);

    if (selectedDate < new Date()) {
      alert('Please select a current or future date.');
      return;
    }

    setDeals({ ...deals, date: event.target.value });
    console.log('test');
  };

  const [editingIndex, setEditingIndex] = useState(null);

  const handleSave = (index) => {
    console.log(index);
    //setEditingIndex(index);
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

  // const handleFileUpload = () => {
  //   setFileUploaded(true);
  // };

  const handleSubmit = () => {
    let hasError = false;

    if (!name) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }

    if (!phoneNumber) {
      setPhoneNumberError('Please enter your phone number');
    }

    if (!address) {
      setAddressError('Please enter your address');
    }

    if (!district) {
      setDistrictError('Please enter your district');
    }

    if (!pincode) {
      setPincodeError('Please enter your pincode');
    }

    if (!deals.date) {
      setDealsError('Please select a date.');
      hasError = true;
    } else {
      setDealsError('');
    }

    if (hasError) {
      return;
    }

    // if (!fileUploaded) {
    //   alert("Please upload a file.");
    //   return;
    // }

    // if (hasError) {
    //   return;
    // }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          padding: '40px'
        }}>
        <form className="form-container">
          <div className="mb-2 block">
            <div>
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter  Name"
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
              <Label htmlFor="phoneNumber" value="Your Number" />
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
          {/* </div> */}
          <div className="mb-2 block">
            <div>
              <Label htmlFor="address" value="Your Address" />
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
          {/* <div style={{ display: "flex", gap: "10px" }}> */}
          <div className="mb-2 block">
            <div>
              <Label htmlFor="district" value="Your District" />
            </div>
            <TextInput
              id="district"
              type="district"
              placeholder="Enter  District"
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
              <Label htmlFor="pincode" value="Your Pin Number" />
            </div>
            <TextInput
              id="pincode"
              type="tel"
              pattern="[0-9]{6}"
              maxLength="6"
              placeholder="Enter  Pin Number"
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
          {/* </div> */}
          <div id="fileUpload" className="mb-2 block">
            <div>
              <Label htmlFor="file" value="Upload Adhar" />
            </div>
            <FileInput id="file" />
          </div>
          <div id="fileUpload" className="mb-2 block">
            <div>
              <Label htmlFor="file" value="Upload Pan Card" />
            </div>
            <FileInput id="file" />
          </div>
          {/* <div className="mb-2 block">
              <div>
                <Label htmlFor="date" value="Your Date" />
              </div>
              <TextInput
                id="date"
                type="date"
                placeholder="Enter Yoru Date"
                required
                shadow
              />
            </div> */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Proposed_Date">Proposed Date</Label>
            </div>
            <TextInput
              type="date"
              id="Proposed_Date"
              className="w-full form-control rounded "
              required
              min={new Date().toISOString().slice(0, 10)}
              onChange={handleChange}
              value={deals.date}
            />
            {dealsError && <span style={{ color: 'red' }}>{dealsError}</span>}
          </div>
          {/* BUTTON */}
          <div
            className="add-button "
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'end'
            }}>
            <AddModels handleAddModel={handleAddModel} />
          </div>
          {/* TABLE */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5 block">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" class="p-4">
                      <div class="flex items-center">
                          <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                          <label for="checkbox-all-search" class="sr-only">checkbox</label>
                      </div>
                  </th> */}
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
                  {/* <th scope="col" class="px-6 py-3">
                      Available
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                      Weight
                  </th> */}
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

export default ProspectsModify;
