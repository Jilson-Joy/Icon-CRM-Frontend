import React, { useState, useEffect } from 'react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import { Select } from 'flowbite-react';
import { Radio } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateSalesCall() {
  const [dateTime, setDateTime] = useState(new Date());
  const [showAdditionalFields, setShowAdditionalFields] = useState('');
  const handleDealChange = (e) => {
    const selectedValue = e.target.value;
    setUpdateData((prevState) => ({
      ...prevState,
      deallist: selectedValue // Update deallist specifically here
    }));
    // Rest of your logic in handleDealChange (if any)
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUpdateData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };
  // Define the onChange function

  const [updateData, setUpdateData] = useState({
    deallist: '',
    Number: '',
    Stage: '',
    OEM: '',
    ModelNum: '',
    bank: '',
    comment: '',
    currentTime: '',
    SelectDate: '',
    Radiobox: '',
    id: ''
  }); // State to hold fetched data
  //   const handleChange = (e) => {
  //     setUpdateData(e.target.value);
  //   };

  // React Hook Form
  const form = useForm({ mode: 'all' });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  // Fetch branch data using branchId
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/salescalldetail/${id}`);
        setUpdateData(response.data);
        console.log('Fetched data:', response.data);
      } catch (error) {
        console.error('Error fetching branch data:', error);
      }
    };
    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3001/salescalldetail/${id}`, data);
      navigate('/page/salescalls/salescalltable');
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };

  // Select Data
  const dealOptions = [
    { value: 'Profit', label: 'Profit' },
    { value: 'Loss', label: 'Loss' },
    { value: 'France', label: 'France' },
    { value: 'Germany', label: 'Germany' },
    { value: 'A', label: 'A' }
  ];

  const StageOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'LLOS', label: 'LLOS' },
    { value: 'Order Lost', label: 'Order Lost' },
    { value: 'Hold', label: 'Hold' }
  ];

  const financeOptions = [
    { value: 'HDFC', label: 'HDFC' },
    { value: 'ICICI', label: 'ICICI' },
    { value: 'SBI', label: 'SBI' },
    { value: 'SIB', label: 'SIB' },
    { value: 'Axis', label: 'Axis' }
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="sales">
        <form className="sales_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="sales_from_head mt-5">
            <h1>Update Sales Call list</h1>
            <hr />
          </div>

          {/* section 1 */}
          <div className="setbox">
            <div className="sale_form_section1 mt-5">
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="deallist" value="Select deals" />
                </div>
                <Select
                  id="deallist"
                  // className={errors.deallist ? 'error-bordersales' : ''}
                  value={updateData.deallist} // Set the initial value here
                  onChange={(e) => setUpdateData(e.target.value)}
                  {...register('deallist', {
                    required: 'Selection required'
                  })}>
                  {dealOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
                {/* {!updateData.deallist && <p>{errors.deallist?.message}</p>} */}

                <p>{errors.deallist?.message}</p>
              </div>

              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="Number" value="Phone Number" />
                </div>
                <TextInput
                  id="Number"
                  // className={errors.Number ? 'error-bordersales' : ''}
                  value={updateData.Number} // Ensure default value is an empty string if null
                  maxLength={13}
                  type="tel"
                  sizing="md"
                  placeholder="+91"
                  {...register('Number', {
                    required: 'Number required',
                    pattern: {
                      value: /^\+91\d{10}$/, // Matches "+91" followed by 10 digits
                      message: 'Invalid phone number (must start with +91)'
                    }
                  })}
                />
                {/* {!updateData.Number && <p>{errors.Number?.message}</p>} */}

                <p>{errors.Number?.message}</p>
              </div>
            </div>

            {/* section 2 */}
            <div className="sale_form_section1 mt-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Stage" value="Stage selection" />
                </div>
                <Select
                  id="Stage"
                  // className={errors.Stage ? 'error-bordersales' : ''}
                  value={updateData.Stage}
                  onChange={(e) => {
                    handleChange(e); // Optionally, if you need to update the updateData state
                    handleDealChange(e); // Call handleDealChange when deallist changes
                  }}
                  {...register('Stage', {
                    required: 'Selection is required'
                  })}>
                  {StageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
              {/* {!updateData.Stage && <p>{errors.Stage?.message}</p>} */}

              <p>{errors.Stage?.message}</p>

              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="bank" value="Select finance" />
                </div>
                <Select
                  id="bank"
                  // className={errors.bank ? 'error-bordersales' : ''}
                  value={updateData.bank} // Ensure that this value is being updated correctly
                  onChange={handleChange}
                  {...register('bank', {
                    required: 'Selection required'
                  })}>
                  <option value="" disabled>
                    Select option
                  </option>
                  {financeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
              {/* {!updateData.bank && <p>{errors.bank?.message}</p>} */}

              <p>{errors.bank?.message}</p>
            </div>

            {showAdditionalFields && (
              <div className="input_options max-w-md">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="OEM" value="OEM" />
                  </div>
                  <TextInput
                    id="OEM"
                    // className={errors.OEM ? 'error-bordersales' : ''}
                    Value={updateData.OEM}
                    type="text"
                    sizing="lg"
                    {...register('OEM', {
                      required: 'Required'
                    })}
                  />
                  {/* {!updateData.OEM && <p>{errors.OEM?.message}</p>} */}

                  <p>{errors.OEM?.message}</p>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ModelNum" value="Model" />
                  </div>
                  <TextInput
                    id="ModelNum"
                    // className={errors.ModelNum ? 'error-bordersales' : ''}
                    Value={updateData.ModelNum}
                    type="text"
                    sizing="lg"
                    {...register('ModelNum', {
                      required: 'Required'
                    })}
                  />
                  {/* {!updateData.ModelNum && <p>{errors.ModelNum?.message}</p>} */}

                  <p>{errors.ModelNum?.message}</p>
                </div>
              </div>
            )}
          </div>
          {/* section 3 */}
          <div className="textareabox mt-5">
            <div className="textareabox1 mb-2 block">
              <Label htmlFor="comment" value="Discussion points" />
            </div>
            <Textarea
              id="comment"
              // className={errors.comment ? 'error-border2' : ''}
              defaultValue={updateData.comment}
              placeholder="Leave a comment..."
              rows={5}
              maxLength={200}
              {...register('comment', {
                required: 'Fill this field'
              })}
            />
            {/* {!updateData.comment && <p>{errors.comment?.message}</p>} */}

            <p>{errors.comment?.message}</p>
          </div>

          {/* section 4 */}
          <div className="sale_form_date">
            <div>
              <div className="mb-2 mt-5 block">
                <Label htmlFor="currentTime" value="Current date & Time:" />
              </div>
              <TextInput
                id="currentTime"
                type="text"
                sizing="lg"
                value={new Date().toLocaleString()}
                readOnly
                {...register('currentTime', {
                  required: 'Select Date and Time'
                })}
              />
              {/* {!updateData.currentTime && <p>{errors.currentTime?.message}</p>} */}

              <p>{errors.currentTime?.message}</p>
            </div>
            <div>
              <div className="mb-2 mt-5 block">
                <Label htmlFor="SelectDate" value="Schedule Meeting:" />
              </div>
              <TextInput
                id="SelectDate"
                // className={errors.SelectDate ? 'error-bordersales' : ''}
                Value={updateData.SelectDate}
                type="date"
                min={currentDate}
                sizing="md"
                style={{ width: '150px' }}
                {...register('SelectDate', {
                  required: 'Date required'
                })}
              />
              {/* {!updateData.SelectDate && <p>{errors.SelectDate?.message}</p>} */}
              <p>{errors.SelectDate?.message}</p>
            </div>
          </div>

          {/* section 5 */}
          {/* <fieldset className="gap-4 mt-5">
            <div className="sales_radio_button">
              <legend>Head support required</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="Yes"
                  name="Radiobox"
                  Value={updateData.Yes}
                  {...register('Radiobox', {
                    required: 'Select if Yes'
                  })}
                />
                <Label htmlFor="Yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="No"
                  name="Radiobox"
                  Value={updateData.No}
                  {...register('Radiobox', {
                    required: 'Select if No'
                  })}
                />
                <Label htmlFor="No">No</Label>
              </div>
              <p>{errors.Radiobox?.message}</p>
            </div>
          </fieldset> */}
          <fieldset className="   gap-4 mt-5">
            <div className="sales_radio_button">
              <legend className="">Head support required</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="Radiobox"
                  name="Yes"
                  value="Yes"
                  {...register('Radiobox', {
                    required: {
                      value: true,
                      message: 'Select if Yes'
                    }
                  })}
                />
                <Label htmlFor="Yes">yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="No"
                  name="No"
                  value="No"
                  defaultChecked
                  {...register('Radiobox', {
                    required: {
                      value: true,
                      message: 'Select if No'
                    }
                  })}
                />
                <Label htmlFor="No">No</Label>
              </div>
              <p className="Validation_error_message">{errors.Radiobox?.message}</p>
            </div>
          </fieldset>

          {/* section 6 */}
          <div className="sale_form_subButton">
            <button
              type="submit"
              className="sales_btn text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default UpdateSalesCall;
