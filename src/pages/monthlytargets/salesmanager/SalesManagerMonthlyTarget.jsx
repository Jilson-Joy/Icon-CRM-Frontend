import React, { useEffect, useState } from 'react'
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar'
import './SalesManagerMonthlyTarget.css'
import { Button, Label } from 'flowbite-react'
import useSalesManagerMonthlyTarget from '../../../hooks/useManagerMonthlyTarget';

function SalesManagerMonthlyTarget() {

  const [salesManagers, setSalesManagers] = useState([]);
  const [formData, setFormData] = useState({
    salesManager: '',
    district: '',
    salesCalls: '',
    newProspect: '',
    markettingActivity: '',
    newMachineSales: '',
    participationRate: '',
    marketShare: '',
    strikeRate: '',
    salesCallWithTeam: '',
    coutesyCalls: '',
    customerVisitWithServiceTeam: ''
  });

  const { getSalesManagerMonthlyTarget, postSalesManagerMonthlyTarget } = useSalesManagerMonthlyTarget();

  useEffect(() => {
    const fetchSalesManagers = async () => {
      try {
        const data = await getSalesManagerMonthlyTarget();
        setSalesManagers(data);
      } catch (error) {
        console.error('Error fetching sales managers:', error);
      }
    };

    fetchSalesManagers();
  }, []);


  const handleSalesManagerChange = (e) => {
    const selectedManager = salesManagers.find(manager => manager.salesManager === e.target.value);
    setFormData({
      ...formData,
      salesManager: selectedManager.salesManager,
      district: selectedManager.district
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
      await postSalesManagerMonthlyTarget(formData);
      alert('Monthly target submitted successfully!');
      setFormData({
        salesManager: '',
        district: '',
        salesCalls: '',
        newProspect: '',
        markettingActivity: '',
        newMachineSales: '',
        participationRate: '',
        marketShare: '',
        strikeRate: '',
        salesCallWithTeam: '',
        coutesyCalls: '',
        customerVisitWithServiceTeam: ''
      });
    } catch (error) {
      console.error('Error submitting monthly target:', error);
    }
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
        <div className='smang_monthly_target_container'>
        <form onSubmit={handleSubmit} className='smang_monthly_target_form'>
          <h2 className="text-3xl text-center font-bold mb-6">Monthly Target - Sales Manager</h2>
          <div className="smang_monthly_target_input_box1 mb-2">
            <div className="smang_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="salesManager" value="Sales Manager" />
              </div>
              <select
                id="salesManager"
                name="salesManager"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                required
                value={formData.salesManager}
                onChange={handleSalesManagerChange}>
                <option disabled selected>
                  Sales Managers
                </option>
                {salesManagers.map(manager => (
                  <option key={manager.id} value={manager.salesManager}>
                    {manager.salesManager}
                  </option>
                ))}
              </select>
            </div>
            <div className="smang_monthly_target_1">
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
            <div className="smang_monthly_target_1">
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
          <div className="smang_monthly_target_input_box1 mb-2">
            <div className="smang_monthly_target_1">
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
            <div className="smang_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="markettingActivity" value="Marketing Activity" />
              </div>
              <input
                id="markettingActivity"
                name="markettingActivity"
                type="text"
                sizing="md"
                placeholder="Enter Marketing Activity"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.markettingActivity}
                onChange={handleChange}
              />
            </div>
            <div className="smang_monthly_target_1">
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
          <div className="smang_monthly_target_input_box1 mb-2">
            <div className="smang_monthly_target_1">
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
            <div className="smang_monthly_target_1">
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
            <div className="smang_monthly_target_1">
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
          <div className="smang_monthly_target_input_box1 mb-2">
            <div className="smang_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="salesCallWithTeam" value="Sales Call With Team" />
              </div>
              <input
                id="salesCallWithTeam"
                name="salesCallWithTeam"
                type="text"
                sizing="md"
                placeholder="Enter Sales Call With Team"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.salesCallWithTeam}
                onChange={handleChange}
              />
            </div>
            <div className="smang_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="coutesyCalls" value="Courtesy Calls" />
              </div>
              <input
                id="coutesyCalls"
                name="coutesyCalls"
                type="text"
                sizing="md"
                placeholder="Enter Courtesy Calls"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.coutesyCalls}
                onChange={handleChange}
              />
            </div>
            <div className="smang_monthly_target_1">
              <div className="mb-2 block">
                <Label htmlFor="customerVisitWithServiceTeam" value="Customer Visit With Service Team" />
              </div>
              <input
                id="customerVisitWithServiceTeam"
                name="customerVisitWithServiceTeam"
                type="text"
                sizing="md"
                placeholder="Enter"
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.customerVisitWithServiceTeam}
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
  )
}

export default SalesManagerMonthlyTarget
