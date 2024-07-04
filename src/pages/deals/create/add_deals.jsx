import React, { useEffect, useState } from 'react';
import './add_deals.css';
import { Button } from 'flowbite-react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import { useNavigate } from 'react-router';
import useDeals from '../../../hooks/useDeals';
import useProspects from '../../../hooks/useProspects.ts';

function ModifyDeals() {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);
  const [panValid, setPanValid] = useState(true);
  const [selectedProspect, setSelectedProspect] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [touchedFields, setTouchedFields] = useState([]);
  const [dealTypes, setDealTypes] = useState([]);
  const [dealSuggested, setDealSuggested] = useState([]);
  const [machineTypes, setMachineTypes] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [prospectCounts, setProspectCounts] = useState({});

  //const navigate = useNavigate();
  const { fetchDealTypes, fetchDealSuggestedBy, fetchMachineTypes, addDeal } = useDeals();
  const { fetchProspectsList } = useProspects();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [types, suggestedBy, machines, prospectList] = await Promise.all([
          fetchDealTypes(),
          fetchDealSuggestedBy(),
          fetchMachineTypes(),
          fetchProspectsList()
        ]);
        setDealTypes(types);
        setDealSuggested(suggestedBy);
        setMachineTypes(machines);
        setProspects(prospectList);

        console.log(prospectList);

        // Initialize prospect counts to 1 for each prospect
        const initialCounts = {};
        prospectList.forEach((prospect) => {
          initialCounts[prospect.id] = 1;
        });
        setProspectCounts(initialCounts);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchInitialData();
  }, []);

  // const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const resetForm = () => {
    setSelectedProspect('');
    setShowAdditionalFields(false);
  };

  const [deals, setDeals] = useState({
    prospect_id: '',
    deal_name: '',
    machine_id: '',
    deal_type_id: '',
    expected_delivery_on: dateTime.toISOString(),
    deal_suggestedby_id: '',
    name: '',
    phnum: '+91',
    pan: '',
    customerseg: '',
    machine: ''
  });
  // console.log(deals);

  // const currentDate = new Date().toISOString().split('T')[0];
  const handleChange = (event) => {
    const prospect_id = event.target.value;
    setSelectedProspect(prospect_id);
    setShowAdditionalFields(false); // Reset additional fields visibility
    const deal_name = generateDealName(prospect_id);
    setDeals({ ...deals, prospect_id, deal_name });
  };

  const generateDealName = (prospect_id) => {
    const count = prospectCounts[prospect_id] || 1;
    return `MyDeal${count}`;
  };

  const handleDealChange = (e) => {
    const selectedDeal = e.target.value;
    setDeals({ ...deals, deal_suggestedby_id: selectedDeal }); // Update state

    if (selectedDeal === 'Others') {
      setShowAdditionalFields(true);
    } else {
      setShowAdditionalFields(false);
    }

    console.log('Selected Deal:', selectedDeal);
  };

  const handlePhoneChange = (e) => {
    const phoneRegex = /^\+91\d{10}$/; // Regex for "+91" followed by 10 digits
    const phoneNumber = e.target.value;

    if (phoneRegex.test(phoneNumber)) {
      setDeals({ ...deals, phnum: phoneNumber });
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  const handlePanChange = (e) => {
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/; // Regex for PAN number format
    const panNumber = e.target.value.toUpperCase();

    if (panRegex.test(panNumber)) {
      setDeals({ ...deals, pan: panNumber });
      setPanValid(true);
    } else {
      setPanValid(false);
    }
  };

  const handleInputBlur = (fieldName) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields([...touchedFields, fieldName]);
    }
  };

  // Handle change in deal name
  const handleDisplayValueChange = (event) => {
    setDisplayValue(event.target.value);
    setDeals({ ...deals, deal_name: event.target.value }); // Update the deal value in state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = `Prospect_Id=${deals.prospect_id}&Deal_Name=${deals.deal_name}&Machine_Id=${deals.machine_id}&Deal_Type_Id=${deals.deal_type_id}&Expected_Delivery=${deals.expected_delivery_on}&Suggested_Id=${deals.deal_suggestedby_id}&Created_By=1`;
      const response = await addDeal(formData);

      console.log('Sales deal created:', response);
      if (response.length > 0) {
        navigate('/deals/list/list-deals');
      }
    } catch (error) {
      console.error('Error creating sales deal:', error);
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="main flex justify-center items-center w-[100%] h-{100vh}">
        <div className=" max-w-3xl w-full mx-auto p-6  rounded-lg shadow-md ">
          <div className="form-design">
            <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Add Deals</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="prospect_id" className="block text-dark text-sm font-semibold mb-2">
                  Select from prospect list
                </label>
                <select
                  id="prospect_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('prospect_id') &&
                    !deals.prospect_id &&
                    touchedFields.includes('prospect_id') &&
                    !deals.prospect_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('prospect_id')}
                  onChange={handleChange}
                  value={selectedProspect}
                  required>
                  <option value="" disabled selected>
                    Prospect list
                  </option>
                  {prospects.map((prospect) => (
                    <option key={prospect.id} value={prospect.id}>
                      {prospect.name}
                    </option>
                  ))}
                </select>
                {touchedFields.includes('prospect_id') && !deals.prospect_id && (
                  <p className="text-red-500">* This field is required </p>
                )}
                {selectedProspect && (
                  <div className="mb-4">
                    <label
                      htmlFor="deal_name"
                      className="block text-dark text-sm font-semibold mb-2 mt-2">
                      Deal Name
                    </label>

                    <input
                      type="text"
                      value={selectedProspect}
                      readOnly
                      onChange={handleDisplayValueChange}
                      className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                    />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="machine_id" className="block text-dark text-sm font-semibold mb-2">
                  Select From M/C Model
                </label>
                <select
                  id="machine_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('machine_id') &&
                    !deals.machine_id &&
                    touchedFields.includes('machine_id') &&
                    !deals.machine_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('machine_id')}
                  onChange={(e) => setDeals({ ...deals, machine_id: e.target.value })}
                  required>
                  <option value="" disabled selected>
                    M/C Model
                  </option>
                  {machineTypes.map((machine) => (
                    <option key={machine.id} value={machine.id}>
                      {machine.name}
                    </option>
                  ))}
                </select>
                {touchedFields.includes('machine_id') && !deals.machine_id && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deal_type_id"
                  className="block text-dark text-sm font-semibold mb-2">
                  Select From dealtype
                </label>

                <select
                  id="deal_type_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('deal_type_id') &&
                    !deals.deal_type_id &&
                    touchedFields.includes('deal_type_id') &&
                    !deals.deal_type_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('deal_type_id')}
                  onChange={(e) => setDeals({ ...deals, deal_type_id: e.target.value })}
                  required>
                  <option value="" selected disabled>
                    {' '}
                    Select deal type
                  </option>
                  {dealTypes.map((types) => (
                    <option key={types.id} value={types.id}>
                      {types.description}
                    </option>
                  ))}
                </select>
                {touchedFields.includes('deal_type_id') && !deals.deal_type_id && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-dark text-sm font-semibold mb-2"
                  htmlFor="expected_delivery_on">
                  Expected Delivery Date
                </label>
                <input
                  id="expected_delivery_on"
                  type="text"
                  sizing="lg"
                  value={dateTime.toLocaleString()}
                  readOnly
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('expected_delivery_on') &&
                    !deals.expected_delivery_on &&
                    touchedFields.includes('expected_delivery_on') &&
                    !deals.expected_delivery_on
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('expected_delivery_on')}
                  required
                  onChange={(e) => setDeals({ ...deals, expected_delivery_on: e.target.value })}
                />
                {touchedFields.includes('expected_delivery_on') && !deals.expected_delivery_on && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="deal_suggestedby_id"
                  className="block text-dark text-sm font-semibold mb-2">
                  Deal Suggested by
                </label>
                <select
                  id="deal_suggestedby_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('deal_suggestedby_id') &&
                    !deals.deal_suggestedby_id &&
                    touchedFields.includes('deal_suggestedby_id') &&
                    !deals.deal_suggestedby_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('deal_suggestedby_id')}
                  onChange={handleDealChange}
                  required>
                  <option value="" selected disabled>
                    Suggested by
                  </option>
                  {dealSuggested.map((suggestedBy) => (
                    <option key={suggestedBy.id} value={suggestedBy.id}>
                      {suggestedBy.name}
                    </option>
                  ))}
                </select>
                {touchedFields.includes('deal_suggestedby_id') && !deals.deal_suggestedby_id && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              {showAdditionalFields && (
                <>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-dark text-sm font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                        touchedFields.includes('name') &&
                        !deals.name &&
                        touchedFields.includes('name') &&
                        !deals.name
                          ? 'border-red-500'
                          : ''
                      }`}
                      onChange={(e) => setDeals({ ...deals, name: e.target.value })}
                      onBlur={() => handleInputBlur('name')}
                      required
                    />
                    {touchedFields.includes('name') && !deals.name && (
                      <p className="text-red-500">* This field is required</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phnum" className="block text-dark text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phnum"
                      placeholder="Enter phone number"
                      className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                        touchedFields.includes('phnum') &&
                        !deals.phnum &&
                        touchedFields.includes('phnum') &&
                        !deals.phnum
                          ? 'border-red-500'
                          : ''
                      }`}
                      defaultValue={deals.phnum}
                      onChange={handlePhoneChange}
                      onBlur={() => handleInputBlur('phnum')}
                      required
                    />
                    {touchedFields.includes('phnum') && !deals.phnum && (
                      <p className="text-red-500">* Please enter a valid phone number</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="pan" className="block text-dark text-sm font-semibold mb-2">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      id="pan"
                      placeholder="Enter your PAN number"
                      className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                        touchedFields.includes('pan') && !deals.pan ? 'border-red-500' : ''
                      }`}
                      onChange={handlePanChange}
                      onBlur={() => handleInputBlur('pan')}
                      required
                    />
                    {touchedFields.includes('pan') && !deals.pan && (
                      <p className="text-red-500">* Please enter a valid PAN number</p>
                    )}
                  </div>
                </>
              )}

              <div className="mb-4">
                <label htmlFor="customerseg" className="block text-dark text-sm font-semibold mb-2">
                  Select From Customer Segmentation
                </label>
                <select
                  id="customerseg"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('customerseg') &&
                    !deals.customerseg &&
                    touchedFields.includes('customerseg') &&
                    !deals.customerseg
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('customerseg')}
                  onChange={(e) => setDeals({ ...deals, customerseg: e.target.value })}
                  required>
                  <option selected>Customer Segmentation</option>
                  <option value="First-time buyers">First-time buyers</option>
                  <option value="Small Fleet Owner (Less than 3 Machines)">
                    Small Fleet Owner (Less than 3 Machines)
                  </option>
                  <option value="Semi Corporate">Semi Corporate</option>
                  <option value="Strategic captives">Strategic captives</option>
                  <option value="Goverment">Goverment</option>
                </select>
                {touchedFields.includes('customerseg') && !deals.customerseg && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="machine" className="block text-dark text-sm font-semibold mb-2">
                  Select From Machine Application
                </label>
                <select
                  id="machine"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('machine') &&
                    !deals.machine &&
                    touchedFields.includes('machine') &&
                    !deals.machine
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('machine')}
                  onChange={(e) => setDeals({ ...deals, machine: e.target.value })}
                  required>
                  <option selected> Machine Application</option>
                  <option value="Construction(residential,industrial,including demolition)">
                    Construction(residential,industrial,including demolition)
                  </option>
                  <option value="Road construction">Road construction</option>
                  <option value="Irrigation/channel clearing">Irrigation/channel clearing</option>
                  <option value="Industrial application(Brick Kiln,Recycling,Material handling,Waste mgt)">
                    Industrial application(Brick Kiln,Recycling,Material handling,Waste mgt)
                  </option>
                  <option value="Municipality for industrial applications">
                    Municipality for industrial applications
                  </option>
                  <option value="Oil and Gas">Oil and Gas</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Mining">Mining</option>
                  <option value="Quarrying">Quarrying</option>
                  <option value="Landscaping/forestry">Landscaping/forestry</option>
                  <option value="Material Handling">Material Handling</option>
                  <option value="Mining Operations  ">Mining Operations</option>
                </select>
                {touchedFields.includes('machine') && !deals.machine && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>

              <div className="flex justify-center mb-4">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  color="dark"
                  style={{ fontWeight: 'bold' }}>
                  Add Deals
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default ModifyDeals;
