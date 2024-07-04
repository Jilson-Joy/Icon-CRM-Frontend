


import { Modal, Button, TextInput, Label } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';
import './CreateUser.css'

function CreateUser({ isVisible, onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    useremail: '',
    mobile: '',
    userrole: '',
    designation: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const modalRef = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const USER_ROLES = [
    { id: 1, role: 'Super Admin' },
    { id: 2, role: 'Manager' },
    { id: 3, role: 'Employee' },
  ];

  const DESIGNATIONS = [
    { id: 1, designation: 'Supervisor' },
    { id: 2, designation: 'Manager' },
    { id: 3, designation: 'Team Lead' },
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.useremail) {
      newErrors.useremail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.useremail)) {
      newErrors.useremail = 'Email is invalid';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Mobile number is invalid';
    }
    if (!formData.userrole) {
      newErrors.userrole = 'User role is required';
    }
    if (!formData.designation) {
      newErrors.designation = 'Designation is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:3000/create-user', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Response from server:', response.data);
        toast.success('User created successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light',
        });

        setErrors({});
        onClose();
      } catch (error) {
        console.error('Error creating user:', error);
        if (error.response && error.response.status === 400) {
          toast.error('User already exists. Please try with a different email.');
          setFormData({
            username: '',
            useremail: '',
            mobile: '',
            userrole: '',
            designation: '',
            password: '',
            confirmPassword: '',
          });
        } else {
          toast.error('Failed to create user. Please try again later.');
        }
      }
    }
  };

  return (
    <Modal show={isVisible} onClose={onClose}>
      <div ref={modalRef}>
        <Modal.Header>Create New User</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="createuser_form">
            <div className="createuser_input_div">
              <Label htmlFor="username" value="Username" />
              <TextInput id="username" type="text" value={formData.username} onChange={handleChange} required />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="useremail" value="Email" />
              <TextInput id="useremail" type="email" value={formData.useremail} onChange={handleChange} required />
              {errors.useremail && <p className="error">{errors.useremail}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="mobile" value="Mobile" />
              <TextInput id="mobile" type="text" value={formData.mobile} onChange={handleChange} required />
              {errors.mobile && <p className="error">{errors.mobile}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="userrole" value="User Role" />
              <select id="userrole" value={formData.userrole} onChange={handleChange} required>
                <option value="">Select Any</option>
                {USER_ROLES.map((role) => (
                  <option key={role.id} value={role.role}>
                    {role.role}
                  </option>
                ))}
              </select>
              {errors.userrole && <p className="error">{errors.userrole}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="designation" value="Designation" />
              <select id="designation" value={formData.designation} onChange={handleChange} required>
                <option value="">Select Any</option>
                {DESIGNATIONS.map((designation) => (
                  <option key={designation.id} value={designation.designation}>
                    {designation.designation}
                  </option>
                ))}
              </select>
              {errors.designation && <p className="error">{errors.designation}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="password" value="Password" />
              <div className="password_input">
                <TextInput id="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} required />
                <button type="button" className="toggle_password" onClick={toggleShowPassword}>
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="createuser_input_div">
              <Label htmlFor="confirmPassword" value="Confirm Password" />
              <div className="password_input">
                <TextInput id="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} required />
                <button type="button" className="toggle_password" onClick={toggleShowConfirmPassword}>
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
            <div className="createuser_button">
              <Button onClick={onClose}>Back</Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Modal.Body>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </div>
    </Modal>
  );
}

export default CreateUser;



