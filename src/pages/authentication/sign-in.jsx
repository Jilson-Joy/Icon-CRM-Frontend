import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import './sign-in.css';
import { BASE_URL_2 } from '../../constants/constants';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleBlurUserName = () => {
    if (!username.trim()) {
      setUserNameError('Please enter a valid username');
    } else {
      setUserNameError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBlurPassword = () => {
    if (!password.trim() || password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setUserNameError('Please enter a valid username');
      return;
    }
    if (!password.trim() || password.length < 4) {
      setPasswordError('Password must be at least 4 characters long');
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL_2}authentication`, {
        username,
        password,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify({
          userid: user.id,
          username: user.username,
          useremail: user.email,
          mobile: user.mobile,
          designation: user.designation,
        }));
        toast.success('Login successful');
        navigate('/');
      } else {
        toast.error(`Authentication failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('Authentication failed: Please check your credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 lg:h-screen lg:gap-y-12"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/929368282/photo/contemporary-workspace-with-books-colour-pencils-gadgets-and-supplies-workspace-and-copy-space.jpg?b=1&s=170667a&w=0&k=20&c=fO5YA9FNJRNRhEPJk512sbdZEaZ8CjfKu86n-6u9Yqg=")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}>
      <Card
        horizontal
        className="w-full md:max-w-screen-sm [&>img]:hidden md:[&>img]:w-96 md:[&>img]:p-0 md:[&>*]:w-full md:[&>*]:p-16 lg:[&>img]:block">
        <h1 className="mb-3 text-2xl font-bold dark:text-white md:text-3xl">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="username">Your username</Label>
            <TextInput
              id="username"
              name="username"
              placeholder="Enter Username"
              type="text"
              value={username}
              onChange={handleUserNameChange}
              onBlur={handleBlurUserName}
              style={{ border: userNameError ? '1px solid red' : '1px solid #ccc' }}
            />
            {userNameError && <p className="text-red-500">{userNameError}</p>}
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handleBlurPassword}
              style={{ border: passwordError ? '1px solid red' : '1px solid #ccc' }}
            />
            {passwordError && <p className="text-red-500">{passwordError}</p>}
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a
              href="/authentication/forgot-password"
              className="w-1/2 text-right text-sm text-primary-600 dark:text-primary-300">
              Lost Password?
            </a>
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full lg:w-auto">
              Login to your account
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="/authentication/sign-up" className="text-primary-600 dark:text-primary-300">
              Create account
            </a>
          </p>
        </form>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default SignInPage;
