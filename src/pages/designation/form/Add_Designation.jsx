import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Modal } from 'flowbite-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './Add_Designation.css';
import { Link } from 'react-router-dom';

function Add_Designation({ show, onClose, onSave }) {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [Department, setDepartment] = useState('');

  const [inputData, setInputData] = useState({ code: '', name: '', Department: '' });
  const navigat = useNavigate();

  const [codeError, setCodeError] = useState('');
  const [nameError, setNameError] = useState('');
  const [DepartmentError, setDepartmentError] = useState('');

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleRemove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleBlurcode = () => {
    if (!code.trim()) {
      setCodeError('Required');
    } else {
      setCodeError('');
    }
  };

  const handleBlurname = () => {
    if (!name.trim()) {
      setNameError('Required');
    } else {
      setNameError('');
    }
  };

  const handleBlurDepartment = () => {
    if (!Department.trim()) {
      setDepartmentError('Required');
    } else {
      setDepartmentError('');
    }
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setInputData({ ...inputData, code: event.target.value });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setInputData({ ...inputData, name: event.target.value });
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
    setInputData({ ...inputData, Department: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    axios.post('http://localhost:3000/add_designation', inputData).then((res) => {
      // alert("Data Added Successfully");
      navigat('/designation/table');
    });

    if (!code) {
      setCodeError('Please enter Code');
      hasError = true;
    } else {
      setCodeError('');
    }

    if (!name) {
      setNameError('Please enter Name');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!Department) {
      setDepartmentError('Please enter Selected Department');
      hasError = true;
    } else {
      setDepartmentError('');
    }

    if (!hasError) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <Modal show={show} onClose={onClose}>
        <Modal.Body>
          {/* <div className="designation_container">
            <div className="w-full max-w-md designation_model max-w-5xl w-full mx-auto p-6 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="heading">
                  <h1>Add Designation</h1>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="code" value="Your Code" />
                  </div>
                  <TextInput
                    id="code"
                    type="text"
                    placeholder="Your Code"
                    value={code}
                    onChange={handleCodeChange}
                    style={{
                      border: codeError && !code.trim() ? '1px solid red' : '1px solid #ccc'
                    }}
                    onBlur={handleBlurcode}
                    required
                  />
                  {codeError && (
                    <span style={{ color: 'red' }} className="error">
                      {codeError}
                    </span>
                  )}
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Your Name" />
                  </div>
                  <TextInput
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                    style={{
                      border: nameError && !name.trim() ? '1px solid red' : '1px solid #ccc'
                    }}
                    onBlur={handleBlurname}
                    required
                  />
                  {nameError && (
                    <span style={{ color: 'red' }} className="error">
                      {nameError}
                    </span>
                  )}
                </div>

                <div className="mb-2 block">
                  <Label htmlFor="department" value="Select Department" />
                </div>
                <Select
                  id="department"
                  value={Department}
                  onChange={handleDepartmentChange}
                  style={{
                    border:
                      DepartmentError && !Department.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurDepartment}
                  required>
                  <option value="">Select department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </Select>
                {DepartmentError && (
                  <span style={{ color: 'red' }} className="error">
                    {DepartmentError}
                  </span>
                )}

                <div className="designation_button">
                    
                      <Button className="" color="dark" type="submit" onClick={handleSubmit}>
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
            <div className=" Add_Designation_header">
              <h2>Add Designation</h2>
            </div>
            <div className="Add_Designation_section1">
              <div className="Add_Designation_section_A1">
                <Label htmlFor="code" value="Your Code" />
                <TextInput
                  id="code"
                  type="text"
                  placeholder="Your Code"
                  value={code}
                  onChange={handleCodeChange}
                  style={{
                    border: codeError && !code.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurcode}
                  required
                />
                {codeError && (
                  <span style={{ color: 'red' }} className="error">
                    {codeError}
                  </span>
                )}
              </div>
              <div className="Add_Designation_section_A1">
                <Label htmlFor="name" value="Your Name" />
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                  style={{
                    border: nameError && !name.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurname}
                  required
                />
                {nameError && (
                  <span style={{ color: 'red' }} className="error">
                    {nameError}
                  </span>
                )}
              </div>
              <div className="Add_Designation_section_A1">
                <Label htmlFor="department" value="Select Department" />
                <Select
                  id="department"
                  value={Department}
                  onChange={handleDepartmentChange}
                  style={{
                    border:
                      DepartmentError && !Department.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurDepartment}
                  required>
                  <option value="">Select department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </Select>
                {DepartmentError && (
                  <span style={{ color: 'red' }} className="error">
                    {DepartmentError}
                  </span>
                )}
              </div>
            </div>
            <div className="Add_Designation_button">
              <Button className="Add_Designation_btn" type="submit" onClick={handleSubmit}>
                Submit
              </Button>

              <Button className="Add_Designation_btn" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </NavbarSidebarLayout>
  );
}

export default Add_Designation;

// import React, { useState, useEffect } from 'react';
// import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
// import './Departmentform.css';
// import { useForm } from 'react-hook-form';
// import NavbarSidebarLayout from '../../layouts/navbar-sidebar';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Departmentform() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors }
//   } = useForm({
//     mode: 'all'
//   });
//   console.log('errors', errors);
//   const onSubmit = (data) => console.log(data);
//     // Axios POST function
//     const navigate = useNavigate();
//     const handleData = (data) => {
//       axios
//         .post('http://localhost:3000/departmentdetails', data)
//         .then((response) => {
//           console.log('API response:', response.data);
//           navigate('/department/departmentTable'); // Handle successful response
//         })
//         .catch((error) => {
//           console.error('Error submitting data:', error); // Handle errors
//         });
//     };
//   return (
//     <NavbarSidebarLayout isFooter={false}>
//       <form className="Departmentform  gap-4" onSubmit={handleSubmit(handleData,onSubmit)}>
//         <h2>Add Department</h2>

//         <div className="wide-input">
//           <div className="mb-2 block">
//             <Label htmlFor="name" value="Name" />
//           </div>
//           <TextInput
//             id="name"
//             type="text"
//             sizing="lg"
//             className={errors.name ? 'error-border1' : ''}
//             {...register('name', {
//               required: 'Required'
//             })}
//           />
//           <p>{errors.name?.message}</p>
//         </div>
//         <div className="wide-input">
//           <div className="mb-2 block">
//             <Label htmlFor="code" value="Code" />
//           </div>
//           <TextInput
//             id="code"
//             type="text"
//             sizing="lg"
//             className={errors.code ? 'error-border1' : ''}
//             {...register('code', {
//               required: 'Required'
//             })}
//           />
//           <p>{errors.code?.message}</p>
//         </div>

//         <Button className="depart_btn" type="submit">
//           Submit
//         </Button>
//       </form>
//     </NavbarSidebarLayout>
//   );
// }

// export default Departmentform;
