import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button } from 'flowbite-react';
import { useNavigate } from 'react-router';
import useDeals from '../../../hooks/useDeals';

import './AddDealsModal.css';
function AddDealsModal({ show, onClose, onSave }) {
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);
  const [panValid, setPanValid] = useState(true);
  const [selectedProspect, setSelectedProspect] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const [touchedFields, setTouchedFields] = useState([]);
  const [submittedDeals, setSubmittedDeals] = useState(null); // State to store submitted deals
  const [dealTypes, setDealTypes] = useState([]);
  const [dealSuggested, setDealSuggested] = useState([]);
  const [machineTypes, setMachineTypes] = useState([]);
  const [prospects, setProspects] = useState([]);
  const [dateTime, setDateTime] = useState(new Date());
  const [prospectCounts, setProspectCounts] = useState({});

  const modalRef = useRef();

  const navigate = useNavigate();
  const {
    fetchDealTypes,
    fetchDealSuggestedBy,
    fetchMachineTypes,
    fetchProspects,
    createSalesDeal
  } = useDeals();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [types, suggestedBy, machines, prospectList] = await Promise.all([
          fetchDealTypes(),
          fetchDealSuggestedBy(),
          fetchMachineTypes(),
          fetchProspects()
        ]);
        setDealTypes(types);
        setDealSuggested(suggestedBy);
        setMachineTypes(machines);
        setProspects(prospectList);

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

  const resetForm = () => {
    setSelectedProspect('');
    setShowAdditionalFields(false);
    setTouchedFields([]);
    setDisplayValue('');
    setDeals({
      prospect_id: '',
      deal_name: '',
      machine_id: '',
      deal_type_id: '',
      expected_delivery_on: dateTime.toISOString(),
      deal_suggestedby_id: '',
      name: '',
      telephone: '+91',
      pan_no: '',
      segment_id: '',
      machine_application_id: ''
    });
  };
  const [deals, setDeals] = useState({
    prospect_id: '',
    deal_name: '',
    machine_id: '',
    deal_type_id: '',
    expected_delivery_on: dateTime.toISOString(),
    deal_suggestedby_id: '',
    name: '',
    telephone: '+91',
    pan_no: '',
    segment_id: '',
    machine_application_id: ''
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
    const count = (prospectCounts[prospect_id] || 0) + 1; // Increment count
    return `MyDeal${count}`;
  };

  const handleDealChange = (e) => {
    const selectedId = e.target.value;

    // Check if the selected id is 6 (Others)
    if (selectedId === '6') {
      setShowAdditionalFields(true); // Show additional fields
    } else {
      setShowAdditionalFields(false); // Hide additional fields
    }

    // Update the deals state with the selected deal_suggestedby_id
    setDeals({ ...deals, deal_suggestedby_id: selectedId });
  };

  const handlePhoneChange = (e) => {
    const phoneRegex = /^\+91\d{10}$/; // Regex for "+91" followed by 10 digits
    const phoneNumber = e.target.value;

    if (phoneRegex.test(phoneNumber)) {
      setDeals({ ...deals, telephone: phoneNumber });
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  const handlePanChange = (e) => {
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/; // Regex for PAN number format
    const panNumber = e.target.value.toUpperCase();

    if (panRegex.test(panNumber)) {
      setDeals({ ...deals, pan_no: panNumber });
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
      const response = await createSalesDeal(formData);

      console.log('Sales deal created:', response);

      // Update prospect count for next selection
      const updatedCounts = { ...prospectCounts };
      updatedCounts[deals.prospect_id] = (updatedCounts[deals.prospect_id] || 0) + 1;
      setProspectCounts(updatedCounts);

      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error creating sales deal:', error);
    }
  };

  return (
    <Modal show={show} onClose={onClose}>
      {/* <Modal.Header>Add New Prospect</Modal.Header> */}
      <div ref={modalRef}>
        <Modal.Body>
          {/* <div className="main flex justify-center items-center w-[100%] h-{100vh}">
            <div className=" max-w-3xl w-full mx-auto   rounded-lg shadow-md ">
              <div className="form-modaldesign">
                <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Add Deals</h2>
                <form action="" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="prospect_id"
                      className="block text-dark text-sm font-semibold mb-2">
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
                          value={deals.deal_name}
                          readOnly
                          // onChange={handleDisplayValueChange}
                          className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                        />
                      </div>
                    )}
                  </div>
  
                  <div className="mb-4">
                    <label
                      htmlFor="machine_id"
                      className="block text-dark text-sm font-semibold mb-2">
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
                    {touchedFields.includes('expected_delivery_on') &&
                      !deals.expected_delivery_on && (
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
                        <label
                          htmlFor="telephone"
                          className="block text-dark text-sm font-semibold mb-2">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="telephone"
                          placeholder="Enter phone number"
                          className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                            touchedFields.includes('telephone') &&
                            !deals.telephone &&
                            touchedFields.includes('telephone') &&
                            !deals.telephone
                              ? 'border-red-500'
                              : ''
                          }`}
                          defaultValue={deals.telephone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleInputBlur('telephone')}
                          required
                        />
                        {touchedFields.includes('telephone') && !deals.telephone && (
                          <p className="text-red-500">* Please enter a valid phone number</p>
                        )}
                      </div>
  
                      <div className="mb-4">
                        <label
                          htmlFor="pan_no"
                          className="block text-dark text-sm font-semibold mb-2">
                          PAN Number
                        </label>
                        <input
                          type="text"
                          id="pan_no"
                          placeholder="Enter your PAN number"
                          className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                            touchedFields.includes('pan_no') && !deals.pan_no ? 'border-red-500' : ''
                          }`}
                          onChange={handlePanChange}
                          onBlur={() => handleInputBlur('pan_no')}
                          required
                        />
                        {touchedFields.includes('pan_no') && !deals.pan_no && (
                          <p className="text-red-500">* Please enter a valid PAN number</p>
                        )}
                      </div>
                    </>
                  )}
  
                  <div className="mb-4">
                    <label
                      htmlFor="segment_id"
                      className="block text-dark text-sm font-semibold mb-2">
                      Select From Customer Segmentation
                    </label>
                    <select
                      id="segment_id"
                      className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                        touchedFields.includes('segment_id') &&
                        !deals.segment_id &&
                        touchedFields.includes('segment_id') &&
                        !deals.segment_id
                          ? 'border-red-500'
                          : ''
                      }`}
                      onBlur={() => handleInputBlur('segment_id')}
                      onChange={(e) => setDeals({ ...deals, segment_id: e.target.value })}
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
                    {touchedFields.includes('segment_id') && !deals.segment_id && (
                      <p className="text-red-500">* This field is required</p>
                    )}
                  </div>
  
                  <div className="mb-4">
                    <label
                      htmlFor="machine_application_id"
                      className="block text-dark text-sm font-semibold mb-2">
                      Select From Machine Application
                    </label>
                    <select
                      id="machine_application_id"
                      className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                        touchedFields.includes('machine_application_id') &&
                        !deals.machine_application_id &&
                        touchedFields.includes('machine_application_id') &&
                        !deals.machine_application_id
                          ? 'border-red-500'
                          : ''
                      }`}
                      onBlur={() => handleInputBlur('machine_application_id')}
                      onChange={(e) => setDeals({ ...deals, machine_application_id: e.target.value })}
                      required>
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
                    {touchedFields.includes('machine_application_id') &&
                      !deals.machine_application_id && (
                        <p className="text-red-500">* This field is required</p>
                      )}
                  </div>
  
                  <div className="dealmodalbutton">
                    <Button type="submit" style={{ fontWeight: 'bold',backgroundColor:'#04aa6d' }}>
                      Add Deals
                    </Button>
                    <Button color="gray" style={{ fontWeight: 'bold' }} onClick={onClose}>
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          <form action="" onSubmit={handleSubmit}>
            <div className="AddDeals_Header">
              <h2>Add Deals</h2>
            </div>
            <div className="AddDeals_section1">
              <div className="AddDeals_section_a1">
                <label htmlFor="prospect_id">Select from prospect list</label>
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
              </div>

              <div className="AddDeals_section_a1">
                {selectedProspect && (
                  <div className="AddDeals_section_deal">
                    <label htmlFor="deal_name">Deal Name</label>
                    <input
                      type="text"
                      value={deals.deal_name}
                      readOnly
                      // onChange={handleDisplayValueChange}
                    />
                  </div>
                )}
              </div>

              <div className="AddDeals_section_a1">
                <label htmlFor="machine_id"> Select From M/C Model</label>
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
              <div className="AddDeals_section_a1">
                <label htmlFor="deal_type_id">Select From dealtype</label>
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
            </div>

            <div className="AddDeals_section1">
              <div className="AddDeals_section_a1">
                <label htmlFor="expected_delivery_on">Expected Delivery Date</label>
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
             
            </div>
            <div className="AddDeals_section1">
              <div className="AddDeals_section_a1">
                <label htmlFor="deal_suggestedby_id">Deal Suggested by</label>
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
              <div className="AddDeals_section_a1">
                {showAdditionalFields && (
                  <>
                    <div className="AddDeals_section_show_a1">
                      <label htmlFor="name" >
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

                    <div className="AddDeals_section_show_a1">
                      <label
                        htmlFor="telephone"
                        >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        id="telephone"
                        placeholder="Enter phone number"
                        className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                          touchedFields.includes('telephone') &&
                          !deals.telephone &&
                          touchedFields.includes('telephone') &&
                          !deals.telephone
                            ? 'border-red-500'
                            : ''
                        }`}
                        defaultValue={deals.telephone}
                        onChange={handlePhoneChange}
                        onBlur={() => handleInputBlur('telephone')}
                        required
                      />
                      {touchedFields.includes('telephone') && !deals.telephone && (
                        <p className="text-red-500">* Please enter a valid phone number</p>
                      )}
                    </div>

                    <div className="AddDeals_section_show_a1">
                      <label
                        htmlFor="pan_no"
                        >
                        PAN Number
                      </label>
                      <input
                        type="text"
                        id="pan_no"
                        placeholder="Enter your PAN number"
                        className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                          touchedFields.includes('pan_no') && !deals.pan_no ? 'border-red-500' : ''
                        }`}
                        onChange={handlePanChange}
                        onBlur={() => handleInputBlur('pan_no')}
                        required
                      />
                      {touchedFields.includes('pan_no') && !deals.pan_no && (
                        <p className="text-red-500">* Please enter a valid PAN number</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="AddDeals_section1">
              <div className="AddDeals_section_a1">
                <label htmlFor="segment_id">Select From Customer Segmentation</label>
                <select
                  id="segment_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('segment_id') &&
                    !deals.segment_id &&
                    touchedFields.includes('segment_id') &&
                    !deals.segment_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('segment_id')}
                  onChange={(e) => setDeals({ ...deals, segment_id: e.target.value })}
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
                {touchedFields.includes('segment_id') && !deals.segment_id && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>
              <div className="AddDeals_section_a1">
                <label htmlFor="machine_application_id">Select From Machine Application</label>
                <select
                  id="machine_application_id"
                  className={`w-full px-3 py-2 border rounded-lg focus:border-blue-500 ${
                    touchedFields.includes('machine_application_id') &&
                    !deals.machine_application_id &&
                    touchedFields.includes('machine_application_id') &&
                    !deals.machine_application_id
                      ? 'border-red-500'
                      : ''
                  }`}
                  onBlur={() => handleInputBlur('machine_application_id')}
                  onChange={(e) => setDeals({ ...deals, machine_application_id: e.target.value })}
                  required>
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
                {touchedFields.includes('machine_application_id') &&
                  !deals.machine_application_id && (
                    <p className="text-red-500">* This field is required</p>
                  )}
              </div>
            </div>
            <div className="AddDeals_btn">
              <Button type="submit" className='AddDeals_btn1'>
                Add Deals
              </Button>
              <Button onClick={onClose} className='AddDeals_btn1'>
                Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default AddDealsModal;
