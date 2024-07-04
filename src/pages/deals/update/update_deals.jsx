import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'flowbite-react';
import '../create/add_deals.css'; // Adjust path as needed

function UpdateDeals() {
  const { id } = useParams();
  const [dealData, setDealData] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [phoneValid, setPhoneValid] = useState(true);
  const [panValid, setPanValid] = useState(true);
  const [touchedFields, setTouchedFields] = useState([]);

  useEffect(() => {
    const fetchDealData = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/deals/${id}`);
        setDealData(response.data);
        setFormValues(response.data);
      } catch (error) {
        console.error('Error fetching deal data:', error);
      }
    };

    fetchDealData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3002/deals/${id}`, formValues);
      alert('Deal updated successfully!');
    } catch (error) {
      console.error('Error updating deal:', error);
      alert('Error updating deal. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDealChange = (e) => {
    const selectedDeal = e.target.value;
    setFormValues({ ...formValues, dealSuggestedBy: selectedDeal });

    if (selectedDeal === 'others') {
      setShowAdditionalFields(true);
    } else {
      setShowAdditionalFields(false);
    }
  };

  const handlePhoneChange = (e) => {
    const phoneRegex = /^\+91\d{10}$/;
    const phoneNumber = e.target.value;

    if (phoneRegex.test(phoneNumber)) {
      setFormValues({ ...formValues, phnum: phoneNumber });
      setPhoneValid(true);
    } else {
      setPhoneValid(false);
    }
  };

  const handlePanChange = (e) => {
    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    const panNumber = e.target.value.toUpperCase();

    if (panRegex.test(panNumber)) {
      setFormValues({ ...formValues, pan: panNumber });
      setPanValid(true);
    } else {
      setPanValid(false);
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  const handleInputBlur = (fieldName) => {
    if (!touchedFields.includes(fieldName)) {
      setTouchedFields([...touchedFields, fieldName]);
    }
  };

  if (!dealData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main flex justify-center items-center w-[100%] h-[100vh]">
      <div className="max-w-3xl w-full mx-auto p-6 rounded-lg shadow-md">
        <div className="form-design">
          <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Update Deal</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="prospect" className="block text-dark text-sm font-semibold mb-2">
                Prospect
              </label>
              <input
                type="text"
                id="prospect"
                value={formValues.prospect || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                disabled
                name="prospect"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="deal" className="block text-dark text-sm font-semibold mb-2">
                Deal Name
              </label>
              <input
                type="text"
                id="deal"
                value={formValues.deal || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                disabled
                name="deal"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mc" className="block text-dark text-sm font-semibold mb-2">
                Select From M/C Model
              </label>
              <select
                id="mc"
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('mc') && !formValues.mc && 'border-red-500'
                }`}
                value={formValues.mc || ''}
                onBlur={() => handleInputBlur('mc')}
                onChange={handleChange}
                required
                name="mc"
              >
                <option value="">M/C Model</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              {touchedFields.includes('mc') && !formValues.mc && (
                <p className="text-red-500">* This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="dealtype" className="block text-dark text-sm font-semibold mb-2">
                Select From dealtype
              </label>
              <select
                id="dealtype"
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('dealtype') && !formValues.dealtype && 'border-red-500'
                }`}
                onBlur={() => handleInputBlur('dealtype')}
                value={formValues.dealtype || ''}
                onChange={handleChange}
                required
                name="dealtype"
              >
                <option value="">dealtype</option>
                <option value="Fresher">Fresher</option>
                <option value="Repeated Sale">Repeated Sale</option>
                <option value="Competetion Customer">Competetion Customer</option>
                <option value="Repeated sale with exchange">Repeated sale with exchange</option>
                <option value="Competition customer with exchange">
                  Competition customer with exchange
                </option>
              </select>
              {touchedFields.includes('dealtype') && !formValues.dealtype && (
                <p className="text-red-500">* This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-dark text-sm font-semibold mb-2" htmlFor="date">
                Date
              </label>
              <input
                type="date"
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('date') && !formValues.date && 'border-red-500'
                }`}
                onBlur={() => handleInputBlur('date')}
                onChange={handleChange}
                value={formValues.date || ''}
                required
                min={currentDate}
                name="date"
              />
              {touchedFields.includes('date') && !formValues.date && (
                <p className="text-red-500">* This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="dealSuggestedBy"
                className="block text-dark text-sm font-semibold mb-2"
              >
                Deal Suggested by
              </label>
              <select
                id="dealSuggestedBy"
                value={formValues.dealSuggestedBy || ''}
                onChange={handleDealChange}
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('dealSuggestedBy') &&
                  !formValues.dealSuggestedBy &&
                  'border-red-500'
                }`}
                onBlur={() => handleInputBlur('dealSuggestedBy')}
                required
                name="dealSuggestedBy"
              >
                <option value="">Select a name</option>
                <option value="SANTHOSH">SANTHOSH</option>
                <option value="VIJAY">VIJAY</option>
                <option value="MANOJ">MANOJ</option>
                <option value="others">others</option>
              </select>
              {touchedFields.includes('dealSuggestedBy') && !formValues.dealSuggestedBy && (
                <p className="text-red-500">* This field is required</p>
              )}
            </div>

            {showAdditionalFields && (
              <div className="mb-4">
                <label htmlFor="otherDealSuggestedBy" className="block text-dark text-sm font-semibold mb-2">
                  Other Deal Suggested by
                </label>
                <input
                  type="text"
                  id="otherDealSuggestedBy"
                  value={formValues.otherDealSuggestedBy || ''}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-lg ${
                    touchedFields.includes('otherDealSuggestedBy') &&
                    !formValues.otherDealSuggestedBy &&
                    'border-red-500'
                  }`}
                  onBlur={() => handleInputBlur('otherDealSuggestedBy')}
                  name="otherDealSuggestedBy"
                  required
                />
                {touchedFields.includes('otherDealSuggestedBy') && !formValues.otherDealSuggestedBy && (
                  <p className="text-red-500">* This field is required</p>
                )}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="phnum" className="block text-dark text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phnum"
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('phnum') && !phoneValid && 'border-red-500'
                }`}
                onBlur={() => handleInputBlur('phnum')}
                value={formValues.phnum || ''}
                onChange={handlePhoneChange}
                placeholder="+91"
                name="phnum"
                required
              />
              {touchedFields.includes('phnum') && !phoneValid && (
                <p className="text-red-500">* Invalid phone number format</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="pan" className="block text-dark text-sm font-semibold mb-2">
                PAN Number
              </label>
              <input
                type="text"
                id="pan"
                className={`w-full px-3 py-2 border rounded-lg ${
                  touchedFields.includes('pan') && !panValid && 'border-red-500'
                }`}
                onBlur={() => handleInputBlur('pan')}
                value={formValues.pan || ''}
                onChange={handlePanChange}
                placeholder="ABCDE1234F"
                required
                name="pan"
              />
              {touchedFields.includes('pan') && !panValid && (
                <p className="text-red-500">* Invalid PAN number format</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="aadhar" className="block text-dark text-sm font-semibold mb-2">
                Aadhar Number
              </label>
              <input
                type="text"
                id="aadhar"
                value={formValues.aadhar || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
                disabled
                name="aadhar"
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit">Update Deal</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateDeals;
