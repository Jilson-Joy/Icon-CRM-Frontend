// import React from 'react'

import './ForgotPass.css';
import { useForm } from 'react-hook-form';

function ForgotPass() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'all'
  });
  console.log('errors', errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div className="Verify_container">
      <div className=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/images/authentication/reset-password.jpg"
          alt=""
        />
        <form
          className="form_text flex flex-col justify-between p-4 leading-normal"
          onSubmit={handleSubmit(onSubmit)}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Email Verification
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            To Verify Enter your email Id
          </p>
          <div className="form_input_box">
            <input
              id="email"
              type="email"
              placeholder="Email ID"
              className={errors.email ? 'error-border1' : ''}
              {...register('email', {
                required: 'Password is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Enter valid Email'
                }
              })}
            />
            <p>{errors.email?.message}</p>

            {/* <input type="text" size={1} maxLength={1} placeholder='.'/>
            <input type="text" size={1} maxLength={1} placeholder='.'/>
            <input type="text" size={1} maxLength={1} placeholder='.'/> */}
          </div>

          <div className="form_submit_button">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Verify Account
            </button>
          </div>

          {/* <div className='form_link'>
    <p>Didn't Recieve code?</p>
    <a href="">Resend OTP</a>
</div> */}
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
