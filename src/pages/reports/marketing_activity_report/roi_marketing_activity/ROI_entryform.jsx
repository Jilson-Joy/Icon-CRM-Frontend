import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';

const ROIEntryForm = () => {
  const [selectedMarketingEvent, setSelectedMarketingEvent] = useState('');
  const [selectedDeal, setSelectedDeal] = useState('');
  const [formData, setFormData] = useState({
    model: '',
    type: '',
    report: '',
  });
  const [deals, setDeals] = useState([]);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const apiUrl = 'http://localhost:3002/roi_mrktng';

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...');
        const response = await axios.get(apiUrl);
        console.log('Data fetched:', response.data);
        if (Array.isArray(response.data) && Array.isArray(response.data[0])) {
          setDeals(response.data[0]);
          console.log('Deals state updated:', response.data[0]);
        } else {
          console.error('Unexpected API response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMarketingEventChange = (event) => {
    const marketingEvent = event.target.value;
    setSelectedMarketingEvent(marketingEvent);
    setSelectedDeal('');
    setFormData({ model: '', type: '', report: '' });
  };

  const handleDealChange = (event) => {
    const deal = event.target.value;
    setSelectedDeal(deal);

    const selectedData = deals.find(d => d.deal === deal);
    if (selectedData) {
      setFormData({
        model: selectedData.model,
        type: selectedData.type,
        report: selectedData.report,
      });
    } else {
      setFormData({ model: '', type: '', report: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate('/pages/reports/marketing_activity_report/roi_marketing_activity/ROI_displayList'); // Navigate to the desired route
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="main flex justify-center items-center w-full h-screen">
        <div className="max-w-3xl w-full mx-auto p-6 rounded-lg shadow-md">
          <div className="form-design">
            <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">ROI Entry Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="marketing_event" className="block text-dark text-sm font-semibold mb-2">
                  Select Marketing Event
                </label>
                <select
                  id="marketing_event"
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  required
                  value={selectedMarketingEvent}
                  onChange={handleMarketingEventChange}
                >
                  <option value="" disabled>
                    Select Any
                  </option>
                  {[...new Set(deals.map(d => d.marketing_event))].map((event, index) => (
                    <option key={index} value={event}>
                      {event}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="deal" className="block text-dark text-sm font-semibold mb-2">
                  Select Deal
                </label>
                <select
                  id="deal"
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={selectedDeal}
                  onChange={handleDealChange}
                  required
                  disabled={!selectedMarketingEvent}
                >
                  <option value="" disabled>
                    Select Any
                  </option>
                  {deals
                    .filter(d => d.marketing_event === selectedMarketingEvent)
                    .map((deal) => (
                      <option key={deal.id} value={deal.deal}>
                        {deal.deal}
                      </option>
                  ))}
                </select>
              </div>
              {selectedDeal && (
                <>
                  <div className="mb-4">
                    <label htmlFor="model" className="block text-dark text-sm font-semibold mb-2">
                      M/C Model
                    </label>
                    <input
                      type="text"
                      id="model"
                      className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                      value={formData.model}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="type" className="block text-dark text-sm font-semibold mb-2">
                      Deal Type
                    </label>
                    <input
                      type="text"
                      id="type"
                      className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                      value={formData.type}
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="report" className="block text-dark text-sm font-semibold mb-2">
                      Report
                    </label>
                    <input
                      type="text"
                      id="report"
                      className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                      value={formData.report}
                      readOnly
                    />
                  </div>
                </>
              )}
              <div className="flex justify-center mb-4">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  color="dark"
                  style={{ fontWeight: 'bold' }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
};

export default ROIEntryForm;
