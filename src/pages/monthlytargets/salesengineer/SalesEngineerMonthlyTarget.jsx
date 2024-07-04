import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './SalesEngineerMonthlyTarget.css';
import { Button, Label } from 'flowbite-react';
import useSalesEngineerMonthlyTarget from '../../../hooks/useSalesEngineerMonthlyTarget';

function SalesEngineerMonthlyTarget() {
  const [salesEngineers, setSalesEngineers] = useState([]);
  const [formData, setFormData] = useState({
    salesEngineer: '',
    district: '',
    salesCalls: '',
    newProspect: '',
    markettingActivity: '',
    newMachineSales: '',
    participationRate: '',
    marketShare: '',
    strikeRate: ''
  });

  const { getSalesEngineerMonthlyTarget, postSalesEngineerMonthlyTarget } = useSalesEngineerMonthlyTarget();

  useEffect(() => {
    const fetchSalesEngineers = async () => {
      try {
        const data = await getSalesEngineerMonthlyTarget();
        setSalesEngineers(data);
      } catch (error) {
        console.error('Error fetching sales engineers:', error);
      }
    };

    fetchSalesEngineers();
  }, []);

  const handleSalesEngineerChange = (e) => {
    const selectedEngineer = salesEngineers.find(engineer => engineer.salesEngineer === e.target.value);
    setFormData({
      ...formData,
      salesEngineer: selectedEngineer.salesEngineer,
      district: selectedEngineer.district
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postSalesEngineerMonthlyTarget(formData);
      alert('Monthly target submitted successfully!');
      setFormData({
        salesEngineer: '',
        district: '',
        salesCalls: '',
        newProspect: '',
        markettingActivity: '',
        newMachineSales: '',
        participationRate: '',
        marketShare: '',
        strikeRate: ''
      });
    } catch (error) {
      console.error('Error submitting monthly target:', error);
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className='seng_monthly_target_container'>
        <form onSubmit={handleSubmit} className='seng_monthly_target_form'>
          <h2 className="text-3xl text-center font-bold mb-6">Monthly Target - Sales Engineer</h2>
          <div className="seng_monthly_target_input_box1 mb-2">
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="salesEngineer" value="Sales Engineer" />
              </div>
              <select
                id="salesEngineer"
                name="salesEngineer"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                required
                value={formData.salesEngineer}
                onChange={handleSalesEngineerChange}>
                <option disabled selected>
                  Sales Engineers
                </option>
                {salesEngineers.map(engineer => (
                  <option key={engineer.id} value={engineer.salesEngineer}>
                    {engineer.salesEngineer}
                  </option>
                ))}
              </select>
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="district" value="District" />
              </div>
              <input
                id="district"
                name="district"
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.district}
                readOnly
              />
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="salesCalls" value="Number Of Sales Calls" />
              </div>
              <input
                id="salesCalls"
                name="salesCalls"
                type="text"
                sizing="md"
                placeholder="Enter Number Of Sales Calls"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.salesCalls}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="seng_monthly_target_input_box1 mb-2">
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="newProspect" value="New Prospects" />
              </div>
              <input
                id="newProspect"
                name="newProspect"
                type="text"
                sizing="md"
                placeholder="Enter New Prospects"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.newProspect}
                onChange={handleChange}
              />
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="markettingActivity" value="Marketting Activity" />
              </div>
              <input
                id="markettingActivity"
                name="markettingActivity"
                type="text"
                sizing="md"
                placeholder="Enter Marketting Activity"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.markettingActivity}
                onChange={handleChange}
              />
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="newMachineSales" value="New Machine Sales" />
              </div>
              <input
                id="newMachineSales"
                name="newMachineSales"
                type="text"
                sizing="md"
                placeholder="Enter New Machine Sales"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.newMachineSales}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="seng_monthly_target_input_box1 mb-2">
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="participationRate" value="Participation Rate" />
              </div>
              <input
                id="participationRate"
                name="participationRate"
                type="text"
                sizing="md"
                placeholder="Enter Participation Rate"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.participationRate}
                onChange={handleChange}
              />
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="marketShare" value="Market Share" />
              </div>
              <input
                id="marketShare"
                name="marketShare"
                type="text"
                sizing="md"
                placeholder="Enter Market Share"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.marketShare}
                onChange={handleChange}
              />
            </div>
            <div className="seng_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="strikeRate" value="Strike Rate" />
              </div>
              <input
                id="strikeRate"
                name="strikeRate"
                type="text"
                sizing="md"
                placeholder="Enter Strike Rate"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.strikeRate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center mb-2 mt-3">
            <Button
              className="sm:w-auto"
              color="dark"
              style={{ fontWeight: 'bold', width: '200px' }}
              type='submit'>
              Submit
            </Button>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default SalesEngineerMonthlyTarget;
