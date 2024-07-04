import React, { useState, useEffect } from 'react';
import { Label, TextInput, Textarea } from 'flowbite-react';
import './add_sales_calls.css';
import { Select } from 'flowbite-react';
import { Radio } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { useNavigate } from 'react-router-dom';

import useSalesCalls from '../../../hooks/useSalesCalls';
import useFinanciers from '../../../hooks/useFinanciers';
import useDeals from '../../../hooks/useDeals';
import useMachine from '../../../hooks/useMachine';
import useDealStages from '../../../hooks/useDealStages.ts';

function AddSalesCall() {
  // define the useEffect calls here
  const { GetFinanciersList } = useFinanciers();
  const { fetchDeals } = useDeals();
  const { GetStagesList } = useDealStages();
  const { GetMachineList } = useMachine();
  const { CreateSalesCall } = useSalesCalls();

  // state collections for dropdown
  const [dealsList, setDealsList] = useState([]);
  const [machineList, setMachineList] = useState([]);
  const [stageList, setStageList] = useState([]);
  const [financiersList, setFinanciersList] = useState([]);

  const [dateTime, setDateTime] = useState(new Date());
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const navigate = useNavigate();

  const handleDealChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === 'LLOS') {
      setShowAdditionalFields(true);
    } else {
      setShowAdditionalFields(false);
    }
    console.log(selectedValue);
  };

  // in formload, call APIs for dropdown data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const deals = await fetchDeals(1);
        const machines = await GetMachineList();
        const dealStages = await GetStagesList();
        const financiers = await GetFinanciersList();

        // console.log("Deals:", deals);
        // console.log("Machines:", machines);
        // console.log("Deal Stages:", dealStages);
        // console.log("Financiers:", financiers);

        setDealsList(deals);
        setMachineList(machines);
        setStageList(dealStages);
        setFinanciersList(financiers);
      } catch (error) {
        // Handle errors
        // console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const form = useForm({
    mode: 'all'
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const currentDate = new Date().toISOString().split('T')[0];
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // handle onSubmit
  const onSubmit = async (data) => {
    try {
      const head_support_value = data.head_support == 'Yes' ? 1 : 0;
      const formPara =
        'Deal_Id=' +
        data.deal_id +
        '&Telephone=' +
        data.telephone +
        '&Machine_Id=' +
        data.machine_id +
        '&Stage_Id=' +
        data.stage_id +
        '&Call_Date=' +
        data.call_date +
        '&Discussion_Points=' +
        data.discussion_points +
        '&Head_Support=' +
        head_support_value +
        '&Financier_Id=' +
        data.financier_id +
        '&Next_Call_Date=' +
        data.next_call_date +
        '&Created_By=1';

      CreateSalesCall(formPara)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      navigate('/salescalls/list/list-sales-calls');
      // console.log(formPara);
    } catch (error) {
      console.error('Error updating branch:', error);
    }
  };
  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="sales ">
        <form className="sales_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="sales_from_head mt-5">
            <h1>Add Sales Call</h1>
            <hr />
          </div>

          {/* section 1 */}
          <div className="setbox">
            <div className="sale_form_section1 mt-5">
              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="deal_id" value="Select deal" />
                </div>
                <Select
                  id="deal_id"
                  className={errors.deal_id ? 'error-bordersales ' : ''}
                  {...register('deal_id', {
                    required: 'Please select a Deal'
                  })}>
                  <option value="">Select option</option>
                  {dealsList?.map(({ id, deal_name }) => (
                    <option key={id} value={id}>
                      {deal_name}
                    </option>
                  ))}
                </Select>
                <p>{errors.deal_id?.message}</p>
              </div>

              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="telephone" value="Phone Number" />
                </div>
                <TextInput
                  id="telephone"
                  maxLength={13}
                  type="tel"
                  sizing="md"
                  className={errors.telephone ? 'error-bordersales' : ''}
                  defaultValue={'+91'} // Set default value to +91
                  placeholder="+91"
                  {...register('telephone', {
                    required: 'Number required',
                    pattern: {
                      value: /^\+91\d{10}$/, // Matches "+91" followed by 10 digits
                      message: 'Invalid phone number (must start with +91)'
                    }
                  })}
                />
                <p>{errors.telephone?.message}</p>
              </div>
            </div>

            <div className="">
              <div className="mb-2 block">
                <Label htmlFor="machine_id" value="Select Machine" />
              </div>
              <Select
                id="machine_id"
                className={errors.machine_id ? 'error-bordersales ' : ''}
                {...register('machine_id', {
                  required: 'Please select a model'
                })}>
                <option value="">Select option</option>
                {machineList?.map(({ id, model_name }) => (
                  <option key={id} value={id}>
                    {model_name}
                  </option>
                ))}
              </Select>
              <p>{errors.machine_id?.message}</p>
            </div>

            {/* section 2 */}
            <div className="sale_form_section1 mt-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="stage_id" value="Stage selection" />
                </div>
                <Select
                  id="stage_id"
                  className={errors.stage_id ? 'error-bordersales' : ''}
                  {...register('stage_id', {
                    required: 'Selection is required'
                  })}
                  onChange={handleDealChange}>
                  <option value="">Select option</option>
                  {stageList?.map(({ id, stage_name }) => (
                    <option key={id} value={id}>
                      {stage_name}
                    </option>
                  ))}
                </Select>
              </div>
              <p>{errors.stage_id?.message}</p>

              {/*  */}

              <div className="">
                <div className="mb-2 block">
                  <Label htmlFor="financier_id" value="Select finance" />
                </div>
                <Select
                  id="financier_id"
                  className={errors.financier_id ? 'error-bordersales' : ''}
                  {...register('financier_id', {
                    required: 'Selection  required'
                  })}>
                  <option value="">Select option</option>
                  {financiersList?.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </Select>
              </div>
              <p>{errors.financier_id?.message}</p>
            </div>

            {showAdditionalFields && (
              <div className="input_options">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="OEM" value="OEM" />
                  </div>
                  <TextInput
                    id="OEM"
                    type="text"
                    sizing="lg"
                    className={errors.OEM ? 'error-bordersalesbox' : ''}
                    {...register('OEM', {
                      required: ' Required'
                    })}
                  />
                  <p>{errors.OEM?.message}</p>
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="ModelNum" value="Model" />
                  </div>
                  <TextInput
                    id="ModelNum"
                    type="text"
                    sizing="lg"
                    className={errors.ModelNum ? 'error-bordersalesbox' : ''}
                    {...register('ModelNum', {
                      required: ' Required'
                    })}
                  />
                  <p>{errors.ModelNum?.message}</p>
                </div>
              </div>
            )}
          </div>
          {/* section 3 */}
          {/* max-w-md */}
          <div className="textareabox  mt-5">
            <div className="textareabox1 mb-2 block">
              <Label htmlFor="discussion_points" value="Duiscssion points" />
            </div>
            <Textarea
              id="discussion_points"
              placeholder="Leave a comment..."
              rows={5}
              maxLength={200}
              className={errors.discussion_points ? 'error-border2' : ''}
              {...register('discussion_points', {
                required: 'Fill this feild'
              })}
            />
            <p>{errors.discussion_points?.message}</p>
          </div>

          {/* section 4 */}

          <div className="sale_form_date">
            <div>
              <div className="mb-2 mt-5 block">
                <Label htmlFor="call_date" value="Current date & Time:" />
              </div>
              <TextInput
                id="call_date"
                type="text"
                sizing="md"
                value={dateTime.toLocaleString()}
                readOnly
                {...register('call_date', {
                  required: 'select Date and Time'
                })}
              />
              <p>{errors.call_date?.message}</p>
            </div>
            <div>
              <div className="mb-2 mt-5 block">
                <Label htmlFor="next_call_date" value="Schedule Meeting:" />
              </div>
              <TextInput
                id="next_call_date"
                type="date"
                min={currentDate}
                sizing="md"
                className={errors.next_call_date ? 'error-bordersales' : ''}
                style={{ width: '150px' }}
                {...register('next_call_date', {
                  required: 'Date required'
                })}
              />
              <p>{errors.next_call_date?.message}</p>
            </div>
          </div>

          {/* section 5 */}

          <fieldset className="gap-4 mt-5">
            <div className="sales_radio_button">
              <legend className="">Head support required</legend>
              <div className="flex items-center gap-2">
                <Radio
                  id="head_support"
                  name="Yes"
                  value="Yes"
                  {...register('head_support', {
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
                  id="head_support"
                  name="No"
                  value="No"
                  defaultChecked
                  {...register('head_support', {
                    required: {
                      value: true,
                      message: 'Select if No'
                    }
                  })}
                />
                <Label htmlFor="No">No</Label>
              </div>
              <p className="Validation_error_message">{errors.head_support?.message}</p>
            </div>
          </fieldset>

          {/*section 6  */}

          <div className="sale_form_subButton">
            <button
              type="Submit"
              className="sales_btn text-white mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Submit
            </button>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddSalesCall;
