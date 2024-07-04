
import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './AddOfm.css';
import { Button, Label } from 'flowbite-react';
import useOfm from '../../../hooks/useOfm';

function AddOfm() {
  const [showExchangeDetails, setShowExchangeDetails] = useState(false);
  const [customerName, setCustomerName] = useState([]);
  const [offerData, setOfferData] = useState({
    offers: [],
  });
  const [formData, setFormData] = useState({
    customerName: '',
    Address: '',
    GSTNumber: '',
    PANNumber: '',
    dateOfBirth: '',
    weddingAnniversery: '',
    mcModel: '',
    financiarName: '',
    billingPrice: '',
    DoAmount: '',
    cashDiscount: '',
    ExchangeMachine: '',
    ExchangeMcOem: '',
    MachineModel: '',
    manufactureYear: '',
    purchasePrice: '',
    committedSellingPrice: '',
    leverageIfAny: '',
    marginMoney: '',
    warrentyExtends: '',
    offers: ''
  });

  const { getOfmData, postOfmData } = useOfm();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await getOfmData();
        setCustomerName(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchCustomers();
  }, []);

  const handleCustomerChange = (e) => {
    const selectedCustomer = customerName.find(customer => customer.customerName === e.target.value);
    setFormData({
      ...formData,
      customerName: selectedCustomer.customerName,
      Address: selectedCustomer.Address,
      GSTNumber: selectedCustomer.GSTNumber,
      PANNumber: selectedCustomer.PANNumber,
      mcModel: selectedCustomer.mcModel,
      financiarName: selectedCustomer.financiarName,
      billingPrice: selectedCustomer.billingPrice,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleExchangeDetailsChange = (event) => {
    setShowExchangeDetails(event.target.value === "Yes");
  };

  const calculateLeverageIfAny = () => {
    const { purchasePrice, committedSellingPrice } = formData;
    if (purchasePrice && committedSellingPrice) {
      const leverage = parseFloat(purchasePrice) - parseFloat(committedSellingPrice);
      setFormData((prevData) => ({
        ...prevData,
        leverageIfAny: leverage.toFixed(2)
      }));
    }
  };

  const calculateMarginMoney = () => {
    const { billingPrice, cashDiscount, leverageIfAny, DoAmount } = formData;
    if (billingPrice && cashDiscount && leverageIfAny && DoAmount) {
      const margin = parseFloat(billingPrice) - parseFloat(cashDiscount) - parseFloat(leverageIfAny) - parseFloat(DoAmount);
      setFormData((prevData) => ({
        ...prevData,
        marginMoney: margin.toFixed(2)
      }));
    }
  };

  useEffect(() => {
    calculateLeverageIfAny();
  }, [formData.purchasePrice, formData.committedSellingPrice]);

  useEffect(() => {
    calculateMarginMoney();
  }, [formData.billingPrice, formData.cashDiscount, formData.leverageIfAny, formData.DoAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postOfmData(formData);
      alert('Ofm submitted successfully!');
      setFormData({
        customerName: '',
        Address: '',
        GSTNumber: '',
        PANNumber: '',
        dateOfBirth: '',
        weddingAnniversery: '',
        mcModel: '',
        financiarName: '',
        billingPrice: '',
        DoAmount: '',
        cashDiscount: '',
        ExchangeMachine: '',
        ExchangeMcOem: '',
        MachineModel: '',
        manufactureYear: '',
        purchasePrice: '',
        committedSellingPrice: '',
        leverageIfAny: '',
        marginMoney: '',
        warrentyExtends: '',
        offers: ''
      });
    } catch (error) {
      console.error('Error submitting Ofm:', error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let newOffers = [...offerData.offers];
    if (checked) {
      newOffers.push(value);
    } else {
      newOffers = newOffers.filter(offer => offer !== value);
    }
    setOfferData({ ...offerData, offers: newOffers });
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="ofm_container">
        <form action="" onSubmit={handleSubmit} className="ofm_form">
          <h2 className="text-3xl text-center font-bold mb-6">Add OFM</h2>
          <div className="ofm_input_box1 mb-2">
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Customer Name" />
              </div>
              <select
                id=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                onChange={handleCustomerChange}
                required>
                <option disabled selected>
                  Select Customers
                </option>
                {customerName.map(customer => (
                  <option key={customer.id} value={customer.customerName}>
                    {customer.customerName}
                  </option>
                ))}
              </select>
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Address" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.Address}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="GST Number" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.GSTNumber}
                readOnly
              />
            </div>
          </div>
          <div className="ofm_input_box1 mb-2">
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="PAN Number" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.PANNumber}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Date Of Birth" />
              </div>
              <input
                id=""
                type="date"
                sizing="md"
                placeholder=""
                name='dateOfBirth'
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Wedding Anniversery" />
              </div>
              <input
                id=""
                type="date"
                sizing="md"
                placeholder=""
                name='weddingAnniversery'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.weddingAnniversery}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ofm_input_box1 mb-2">
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="M/C Model" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.mcModel}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Financier Name" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.financiarName}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Billing Price" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='billingPrice'
                value={formData.billingPrice}
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="ofm_input_box1 mb-2">
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="D/O Amount" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='DoAmount'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.DoAmount}
                onChange={handleChange}
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Cash Discount" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='cashDiscount'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.cashDiscount}
                onChange={handleChange}
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Exchange Machine" />
              </div>
              <div>
                <label className="mr-2">
                  <input
                    type="radio"
                    name="ExchangeMachine"
                    value="Yes"
                    className="mr-1"
                    checked={formData.ExchangeMachine === "Yes"}
                    onChange={handleChange}
                    onClick={handleExchangeDetailsChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="ExchangeMachine"
                    value="No"
                    className="mr-1"
                    checked={formData.ExchangeMachine === "No"}
                    onChange={handleChange}
                    onClick={handleExchangeDetailsChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          {showExchangeDetails && (
            <div className="ofm_input_box1 mb-2">
              <div className="ofm_1">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Exchange M/C OEM" />
                </div>
                <input
                  id=""
                  type="text"
                  sizing="md"
                  placeholder=""
                  name='ExchangeMcOem'
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={formData.ExchangeMcOem}
                  onChange={handleChange}
                />
              </div>
              <div className="ofm_1">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Machine Model" />
                </div>
                <input
                  id=""
                  type="text"
                  sizing="md"
                  placeholder=""
                  name='MachineModel'
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={formData.MachineModel}
                  onChange={handleChange}
                />
              </div>
              <div className="ofm_1">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Manufacture Year" />
                </div>
                <input
                  id=""
                  type="text"
                  sizing="md"
                  placeholder=""
                  name='manufactureYear'
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={formData.manufactureYear}
                  onChange={handleChange}
                />
              </div>
              <div className="ofm_1">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Purchase Price" />
                </div>
                <input
                  id=""
                  type="text"
                  sizing="md"
                  placeholder=""
                  name='purchasePrice'
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={formData.purchasePrice}
                  onChange={handleChange}
                />
              </div>
              <div className="ofm_1">
                <div className="mb-2 block">
                  <Label htmlFor="" value="Committed Selling Price" />
                </div>
                <input
                  id=""
                  type="text"
                  sizing="md"
                  placeholder=""
                  name='committedSellingPrice'
                  className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                  value={formData.committedSellingPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          <div className="ofm_input_box1 mb-2">
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Leverage if Any" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='leverageIfAny'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.leverageIfAny}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Margin Money" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='marginMoney'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.marginMoney}
                readOnly
              />
            </div>
            <div className="ofm_1">
              <div className="mb-2 block">
                <Label htmlFor="" value="Warranty Extends" />
              </div>
              <input
                id=""
                type="text"
                sizing="md"
                placeholder=""
                name='warrentyExtends'
                className="w-full px-3 py-2 border rounded-lg focus:border-blue-500"
                value={formData.warrentyExtends}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="offer-box mb-4">
            <div className="mb-2 block">
              <Label htmlFor="offers" value="Offers" />
            </div>
            {[
              "Free Accessories",
              "Free Insurance",
              "Free Warranty Extends",
              "Free Service",
              "Cash Discount"
            ].map((offer, index) => (
              <div className="flex items-center mb-2" key={index}>
                <input
                  id={`offer${index}`}
                  type="checkbox"
                  value={offer}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`offer${index}`} className="mr-4">
                  {offer}
                </label>
                {offerData.offers.includes(offer) && (
                  <input
                    type="text"
                    name={offer.toLowerCase().replace(" ", "")}
                    placeholder={`Enter ${offer}`}
                    className="px-2 py-1 border rounded-md ml-2 w-48" // Adjusted margin and width
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="ofm_add_btn text-center">
            <Button type="submit" className="ofm_add_btn1 px-6 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-700">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default AddOfm;
