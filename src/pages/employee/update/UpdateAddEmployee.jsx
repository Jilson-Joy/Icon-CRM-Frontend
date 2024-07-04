import React, { useState, useEffect } from 'react';
import '../create/AddEmployee.css';
import { Button, Label, TextInput, Textarea, Modal } from 'flowbite-react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UpdateAddEmployee.css'
function UpdateAddEmployee({ show, onClose, onSave }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    empcode: '',
    name: '',
    phnumber: '',
    usname: '',
    pass: '',
    department: '',
    date: '',
    pfcode: '',
    esino: '',
    mediclaim: '',
    state: '',
    district: '',
    location: '',
    qualification: '',
    dob: '',
    email: '',
    branch: '',
    altnum: '',
    gender: '',
    repto: '',
    designation: '',
    address: '',
    yoe: '',
    salary: ''
  });
  const [highlightedInputs, setHighlightedInputs] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/addemployees/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, [id]);


  const handleFocus = (inputId) => {
    setHighlightedInputs([...highlightedInputs, inputId]);
  };

  const handleBlur = (inputId) => {
    setHighlightedInputs(highlightedInputs.filter((id) => id !== inputId));
    validateInput(inputId);
  };

  const validateInput = (inputId) => {
    if (!employee[inputId]) {
      setErrorInputs([...errorInputs, inputId]);
    } else {
      setErrorInputs(errorInputs.filter((id) => id !== inputId));

      // Additional validations
      if (inputId === 'phnumber') {
        const phoneNumberRegex = /^[6-9]\d{9}$/; // Indian phone number regex
        if (!phoneNumberRegex.test(employee[inputId])) {
          setErrorInputs([...errorInputs, inputId]);
        }
      }

      if (inputId === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(employee[inputId])) {
          setErrorInputs([...errorInputs, inputId]);
        }
      }

      if (inputId === 'pass') {
        if (employee[inputId].length < 6) {
          setErrorInputs([...errorInputs, inputId]);
        }
      }
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEmployee({ ...employee, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSelectChange = (id, event) => {
    const { value } = event.target;
    setEmployee({ ...employee, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Object.keys(employee).filter((key) => !employee[key]);
    if (errors.length > 0) {
      setErrorInputs(errors);
    } else {
      // Axios PUT request
      axios
        .put(`http://localhost:3001/addemployees/${id}`, employee)
        .then((response) => {
          console.log('Response from server:', response.data);
          navigate('/pages/employee/emptable'); // Change '/success' to your desired route
        })
        .catch((error) => {
          console.log('Error:', error);
          // Handle error scenario
        });
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Body>
        <div className="emp_container">
          <form className="emp_form" action="" onSubmit={handleSubmit}>
            <h2 className="h2_class text-3xl text-center font-bold mb-6">Edit Employee</h2>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="empcode" value="Employee Code" />
                </div>
                <TextInput
                  id="empcode"
                  type="text"
                  sizing="md"
                  placeholder="Enter Employee Code"
                  value={employee.empcode}
                  onChange={handleChange}
                  onFocus={() => handleFocus('empcode')}
                  onBlur={() => handleBlur('empcode')}
                  style={{
                    borderColor: errorInputs.includes('empcode') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('empcode') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  sizing="md"
                  placeholder="Enter Name"
                  value={employee.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={() => handleBlur('name')}
                  style={{
                    borderColor: errorInputs.includes('name') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('name') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="phnumber" value="Phonenumber" />
                </div>
                <TextInput
                  id="phnumber"
                  type="text"
                  sizing="md"
                  placeholder="Enter Phonenumber"
                  value={employee.phnumber}
                  onChange={handleChange}
                  onFocus={() => handleFocus('phnumber')}
                  onBlur={() => handleBlur('phnumber')}
                  style={{
                    borderColor: errorInputs.includes('phnumber') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('phnumber') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="usname" value="Username" />
                </div>
                <TextInput
                  id="usname"
                  placeholder="Enter User Name"
                  type="text"
                  sizing="md"
                  value={employee.usname}
                  onChange={handleChange}
                  onFocus={() => handleFocus('usname')}
                  onBlur={() => handleBlur('usname')}
                  style={{
                    borderColor: errorInputs.includes('usname') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('usname') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="pass" value="Password" />
                </div>
                <TextInput
                  id="pass"
                  type="password"
                  sizing="md"
                  placeholder="Enter Password"
                  value={employee.pass}
                  onChange={handleChange}
                  onFocus={() => handleFocus('pass')}
                  onBlur={() => handleBlur('pass')}
                  style={{
                    borderColor: errorInputs.includes('pass') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('pass') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="department" value="Department" />
                </div>
                <TextInput
                  id="department"
                  type="text"
                  sizing="md"
                  placeholder="Enter Department"
                  value={employee.department}
                  onChange={handleChange}
                  onFocus={() => handleFocus('department')}
                  onBlur={() => handleBlur('department')}
                  style={{
                    borderColor: errorInputs.includes('department') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('department') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="date" value="Date of join" />
                </div>
                <TextInput
                  id="date"
                  type="date"
                  sizing="md"
                  value={employee.date}
                  onChange={handleChange}
                  onFocus={() => handleFocus('date')}
                  onBlur={() => handleBlur('date')}
                  style={{
                    borderColor: errorInputs.includes('date') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('date') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="pfcode" value="Pfcode" />
                </div>
                <TextInput
                  id="pfcode"
                  type="text"
                  sizing="md"
                  placeholder="Enter Pfcode"
                  value={employee.pfcode}
                  onChange={handleChange}
                  onFocus={() => handleFocus('pfcode')}
                  onBlur={() => handleBlur('pfcode')}
                  style={{
                    borderColor: errorInputs.includes('pfcode') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('pfcode') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="esino" value="Esino" />
                </div>
                <TextInput
                  id="esino"
                  type="text"
                  sizing="md"
                  placeholder="Esino"
                  value={employee.esino}
                  onChange={handleChange}
                  onFocus={() => handleFocus('esino')}
                  onBlur={() => handleBlur('esino')}
                  style={{
                    borderColor: errorInputs.includes('esino') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('esino') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="mediclaim" value="Mediclaim" />
                </div>
                <TextInput
                  id="mediclaim"
                  type="text"
                  sizing="md"
                  placeholder="Mediclaim"
                  value={employee.mediclaim}
                  onChange={handleChange}
                  onFocus={() => handleFocus('mediclaim')}
                  onBlur={() => handleBlur('mediclaim')}
                  style={{
                    borderColor: errorInputs.includes('mediclaim') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('mediclaim') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  id="state"
                  type="text"
                  sizing="md"
                  placeholder="Enter State"
                  value={employee.state}
                  onChange={handleChange}
                  onFocus={() => handleFocus('state')}
                  onBlur={() => handleBlur('state')}
                  style={{
                    borderColor: errorInputs.includes('state') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('state') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="district" value="District" />
                </div>
                <TextInput
                  id="district"
                  type="text"
                  sizing="md"
                  placeholder="Enter District"
                  value={employee.district}
                  onChange={handleChange}
                  onFocus={() => handleFocus('district')}
                  onBlur={() => handleBlur('district')}
                  style={{
                    borderColor: errorInputs.includes('district') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('district') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="location" value="Location" />
                </div>
                <TextInput
                  id="location"
                  type="text"
                  sizing="md"
                  placeholder="Enter Location"
                  value={employee.location}
                  onChange={handleChange}
                  onFocus={() => handleFocus('location')}
                  onBlur={() => handleBlur('location')}
                  style={{
                    borderColor: errorInputs.includes('location') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('location') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="qualification" value="Qualification" />
                </div>
                <TextInput
                  id="qualification"
                  type="text"
                  sizing="md"
                  placeholder="Enter Qualification"
                  value={employee.qualification}
                  onChange={handleChange}
                  onFocus={() => handleFocus('qualification')}
                  onBlur={() => handleBlur('qualification')}
                  style={{
                    borderColor: errorInputs.includes('qualification') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('qualification') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="dob" value="Date of Birth" />
                </div>
                <TextInput
                  id="dob"
                  type="date"
                  sizing="md"
                  value={employee.dob}
                  onChange={handleChange}
                  onFocus={() => handleFocus('dob')}
                  onBlur={() => handleBlur('dob')}
                  style={{
                    borderColor: errorInputs.includes('dob') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('dob') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Email" />
                </div>
                <TextInput
                  id="email"
                  type="email"
                  sizing="md"
                  placeholder="Email"
                  value={employee.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  style={{
                    borderColor: errorInputs.includes('email') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('email') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="branch" value="Branch" />
                </div>
                <TextInput
                  id="branch"
                  type="text"
                  sizing="md"
                  placeholder="Enter Branch"
                  value={employee.branch}
                  onChange={handleChange}
                  onFocus={() => handleFocus('branch')}
                  onBlur={() => handleBlur('branch')}
                  style={{
                    borderColor: errorInputs.includes('branch') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('branch') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="altnum" value="Alternative Number" />
                </div>
                <TextInput
                  id="altnum"
                  type="text"
                  sizing="md"
                  placeholder="Enter Alternative Number"
                  value={employee.altnum}
                  onChange={handleChange}
                  onFocus={() => handleFocus('altnum')}
                  onBlur={() => handleBlur('altnum')}
                  style={{
                    borderColor: errorInputs.includes('altnum') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('altnum') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="gender" value="Select Your gender" />
                </div>
                <select
                  id="gender"
                  className="w-full px-3 py-2  rounded-lg focus:border-blue-500"
                  value={employee.gender}
                  onChange={(e) => handleSelectChange('gender', e)}
                  onFocus={() => handleFocus('gender')}
                  onBlur={() => handleBlur('gender')}
                  style={{
                    borderColor: errorInputs.includes('gender') ? 'red' : ''
                  }}
                  required>
                  <option selected>Select</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                  <option value="3">Others</option>
                </select>
                {errorInputs.includes('gender') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="repto" value="Reporting to" />
                </div>
                <select
                  id="repto"
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={employee.repto}
                  onChange={(e) => handleSelectChange('repto', e)}
                  onFocus={() => handleFocus('repto')}
                  onBlur={() => handleBlur('repto')}
                  style={{
                    borderColor: errorInputs.includes('repto') ? 'red' : ''
                  }}
                  required>
                  <option selected>Select</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                {errorInputs.includes('repto') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="designation" value="Designation" />
                </div>
                <TextInput
                  id="designation"
                  type="text"
                  sizing="md"
                  placeholder="Enter Designation"
                  value={employee.designation}
                  onChange={handleChange}
                  onFocus={() => handleFocus('designation')}
                  onBlur={() => handleBlur('designation')}
                  style={{
                    borderColor: errorInputs.includes('designation') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('designation') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="emp_input_box1">
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="address" value="Address" />
                </div>
                <Textarea
                  id="address"
                  type="text"
                  sizing="md"
                  placeholder="Enter Address"
                  value={employee.address}
                  onChange={handleChange}
                  onFocus={() => handleFocus('address')}
                  onBlur={() => handleBlur('address')}
                  style={{
                    borderColor: errorInputs.includes('address') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('address') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="yoe" value="Year of Experience" />
                </div>
                <TextInput
                  id="yoe"
                  type="text"
                  sizing="md"
                  placeholder="Year of Experience"
                  value={employee.yoe}
                  onChange={handleChange}
                  onFocus={() => handleFocus('yoe')}
                  onBlur={() => handleBlur('yoe')}
                  style={{
                    borderColor: errorInputs.includes('yoe') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('yoe') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="emp_1">
                <div className="mb-2 block">
                  <Label htmlFor="salary" value="Gross Salary" />
                </div>
                <TextInput
                  id="salary"
                  type="text"
                  sizing="md"
                  placeholder="Gross Salary"
                  value={employee.salary}
                  onChange={handleChange}
                  onFocus={() => handleFocus('salary')}
                  onBlur={() => handleBlur('salary')}
                  style={{
                    borderColor: errorInputs.includes('salary') ? 'red' : ''
                  }}
                />
                {errorInputs.includes('salary') && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="Employe_Update_Button">
              <Button
                className=" sm:w-auto"
                color="dark"
                style={{ fontWeight: 'bold' }}
                type="submit">
                Update Employee
              </Button>
              <Button color="gray" style={{ fontWeight: 'bold' }} onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UpdateAddEmployee;


