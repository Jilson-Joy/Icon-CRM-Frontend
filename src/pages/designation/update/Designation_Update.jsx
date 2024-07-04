




import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput, Select, Modal } from 'flowbite-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './Designation_Update.css';

function Designation_Update({ show, onClose, onSave, designation }) {
  const [record, setRecord] = useState({
    code: designation?.code || '',
    name: designation?.name || '',
    Department: designation?.Department || ''
  });
  const [highlightedInputs, setHighlightedInputs] = useState([]);

  useEffect(() => {
    if (designation) {
      setRecord({
        code: designation.code,
        name: designation.name,
        Department: designation.Department
      });
    }
  }, [designation]);

  const handleFocus = (inputId) => {
    setHighlightedInputs([...highlightedInputs, inputId]);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRecord({ ...record, [id]: value });
    setHighlightedInputs(highlightedInputs.filter((input) => input !== id));
  };

  const handleSelectChange = (id, event) => {
    const { value } = event.target;
    setRecord({ ...record, [id]: value });
    setHighlightedInputs(highlightedInputs.filter((input) => input !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Object.keys(record).filter((key) => !record[key]);
    if (errors.length > 0) {
      setHighlightedInputs(errors);
    } else {
      // Axios PUT request
      axios
        .put(`http://localhost:3000/add_designation/${designation.id}`, record)
        .then((response) => {
          console.log('Response from server:', response.data);
          onSave();
        })
        .catch((error) => {
          console.error('Error updating designation:', error);
        });
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <Modal show={show} onClose={onClose}>
        <Modal.Body>
          {/* <div className='update_designation_container'>
            <div className="w-full max-w-md designation_model max-w-5xl w-full mx-auto p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="heading">
                  <h1>Update Designation</h1>
                </div>
                <div>
                  <Label htmlFor="code" value="Your Code" />
                  <TextInput
                    id="code"
                    type="text"
                    placeholder="Your Code"
                    value={record.code}
                    onFocus={() => handleFocus('code')}
                    onChange={handleChange}
                    style={{
                      border:
                        highlightedInputs.includes('code') && !record.code
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="name" value="Your Name" />
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={record.name}
                    onFocus={() => handleFocus('name')}
                    onChange={handleChange}
                    style={{
                      border:
                        highlightedInputs.includes('name') && !record.name
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}
                  />
                </div>

                <div>
                  <Label htmlFor="Department" value="Select Department" />
                  <Select
                    id="Department"
                    value={record.Department}
                    onFocus={() => handleFocus('Department')}
                    onChange={(e) => handleSelectChange('Department', e)}
                    style={{
                      border:
                        highlightedInputs.includes('Department') && !record.Department
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}>
                    <option value="">Select department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </Select>
                </div>

                <div className="update_designation_button">
                  <Button color="dark" type="submit">
                    Submit
                  </Button>
                  <Button color="gray" style={{ fontWeight: 'bold' }} onClick={onClose}>
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div> */}
          <form onSubmit={handleSubmit}>
          <div className="Edit_Designation_header">
                  <h2>Update Designation</h2>
                </div>
                <div className='Edit_Designation_section1'>
                  <div className='Edit_Designation_section_A1'>
                  <Label htmlFor="code" value="Your Code" />
                  <TextInput
                    id="code"
                    type="text"
                    placeholder="Your Code"
                    value={record.code}
                    onFocus={() => handleFocus('code')}
                    onChange={handleChange}
                    style={{
                      border:
                        highlightedInputs.includes('code') && !record.code
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}
                  />
                  </div>
                  <div className='Edit_Designation_section_A1'>
                  <Label htmlFor="name" value="Your Name" />
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={record.name}
                    onFocus={() => handleFocus('name')}
                    onChange={handleChange}
                    style={{
                      border:
                        highlightedInputs.includes('name') && !record.name
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}
                  />
                  </div>
                  <div className='Edit_Designation_section_A1'>
                  <Label htmlFor="Department" value="Select Department" />
                  <Select
                    id="Department"
                    value={record.Department}
                    onFocus={() => handleFocus('Department')}
                    onChange={(e) => handleSelectChange('Department', e)}
                    style={{
                      border:
                        highlightedInputs.includes('Department') && !record.Department
                          ? '1px solid red'
                          : '1px solid #ccc'
                    }}>
                    <option value="">Select department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </Select>
                  </div>
                  <div className='Edit_Designation_buttons'>
                  <Button className='Edit_Designation_btn' type="submit">
                    Submit
                  </Button>
                  <Button className='Edit_Designation_btn' onClick={onClose}>
                    Cancel
                  </Button>
                  </div>

                </div>
          </form>
        </Modal.Body>
      </Modal>
    </NavbarSidebarLayout>
  );
}

export default Designation_Update;


