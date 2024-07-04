import React, { useEffect, useState } from 'react';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import './Form_New_Bill.css';
import { X, ReceiptIndianRupee } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import useExpenseReport from '../../../../hooks/useExpenseReport';
import axios from 'axios';

function Form_New_Bill() {
  const { GetFormBillData,submitFormBillData } = useExpenseReport();
  const [formData, setFormData] = useState([]);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    EXP_Type: '',
    Date_from: '',
    Date_To: '',
    Select_Notific: '',
    plc_from: '',
    plc_to: '',
    mode_of_con: '',
    kilometers: '',
    Travel_Exp: '',
    DA: '',
    if_mode: '',
    local: '',
    loading: '',
    other: '',
    if_Other: '',
    Total: '',
    file1: null,
    file2: null,
    Additional_remarks: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFormBillData = async () => {
      try {
        const Billopt = await GetFormBillData();
        setFormData(Billopt);
      } catch (error) {
        console.error('Error fetching expense reports:', error);
      }
    };

    fetchFormBillData();
  }, [GetFormBillData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!data.EXP_Type) newErrors.EXP_Type = 'Expense type is required';
    if (!data.Date_from) newErrors.Date_from = 'Start date is required';
    if (!data.Date_To) newErrors.Date_To = 'End date is required';
    if (!data.Select_Notific) newErrors.Select_Notific = 'Notification number is required';
    if (!data.plc_from) newErrors.plc_from = 'Place from is required';
    if (!data.plc_to) newErrors.plc_to = 'Place to is required';
    if (!data.mode_of_con) newErrors.mode_of_con = 'Mode of conveyance is required';
    if (!data.kilometers) newErrors.kilometers = 'Kilometers travelled is required';
    if (!data.Travel_Exp) newErrors.Travel_Exp = 'Travel expense is required';
    if (!data.DA) newErrors.DA = 'Daily allowance is required';
    if (!data.Total) newErrors.Total = 'Total is required';
    if (!data.if_mode) newErrors.if_mode = 'If mode is Other is required';
    if (!data.local) newErrors.local = 'Local Conveyance is required';
    if (!data.loading) newErrors.loading = 'Loading is required';
    if (!data.other) newErrors.other = 'Other is required';
    if (!data.file1) newErrors.file1 = 'Required';
    if (!data.file2) newErrors.file2 = 'Required';
    if (!data.if_Other) newErrors.if_Other = 'Required';
    if (!data.Additional_remarks) newErrors.Additional_remarks = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    // Form submission logic
    submitFormBillData(data);
    navigate('/pages/reports/expensebillReport/newBill/AddNewBill');
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="form_new_bill_container">
        <form onSubmit={handleSubmit}>
          <div className="form_new_bill_row1">
            <h3>Expense Bill #:ICO/EXP/3301</h3>
          </div>
          <hr />
          <div className="form_new_bill_row2">
            <div className="form_new_bill_col2_1">
              <label htmlFor="EXP_Type">Select Expense Type</label>
              <select name="EXP_Type" id="EXP_Type" onChange={handleChange} value={data.EXP_Type}>
                <option value="">Select an option</option>
                {formData.map(({ id, EXP_Type }) => (
                  <option key={id} value={EXP_Type}>
                    {EXP_Type}
                  </option>
                ))}
              </select>
              {errors.EXP_Type && <span className="error">{errors.EXP_Type}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="Date_from">Date from</label>
              <input
                type="date"
                name="Date_from"
                id="Date_from"
                onChange={handleChange}
                value={data.Date_from}
              />
              {errors.Date_from && <span className="error">{errors.Date_from}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="Date_To">Date To</label>
              <input
                type="date"
                name="Date_To"
                id="Date_To"
                onChange={handleChange}
                value={data.Date_To}
              />
              {errors.Date_To && <span className="error">{errors.Date_To}</span>}
            </div>
          </div>
          <div className="form_new_bill_row3">
            <div className="form_new_bill_col2_1">
              <label htmlFor="Select_Notific">Select Notification No</label>
              <select
                name="Select_Notific"
                id="Select_Notific"
                onChange={handleChange}
                value={data.Select_Notific}>
                <option value="">Select an option</option>
                {formData.map(({ id, Select_Notific }) => (
                  <option key={id} value={Select_Notific}>
                    {Select_Notific}
                  </option>
                ))}
              </select>
              {errors.Select_Notific && <span className="error">{errors.Select_Notific}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="plc_from">Place from</label>
              <input
                type="text"
                name="plc_from"
                id="plc_from"
                onChange={handleChange}
                value={data.plc_from}
              />
              {errors.plc_from && <span className="error">{errors.plc_from}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="plc_to">Place Upto</label>
              <input
                type="text"
                name="plc_to"
                id="plc_to"
                onChange={handleChange}
                value={data.plc_to}
              />
              {errors.plc_to && <span className="error">{errors.plc_to}</span>}
            </div>
          </div>
          <div className="form_new_bill_row4">
            <div className="form_new_bill_col2_1">
              <label htmlFor="mode_of_con">Mode of Conveyance</label>
              <select
                name="mode_of_con"
                id="mode_of_con"
                onChange={handleChange}
                value={data.mode_of_con}>
                <option value="">Select an option</option>
                {formData.map(({ id, mode_of_con }) => (
                  <option key={id} value={mode_of_con}>
                    {mode_of_con}
                  </option>
                ))}
              </select>
              {errors.mode_of_con && <span className="error">{errors.mode_of_con}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="kilometers">Kilometers travelled</label>
              <input
                type="text"
                name="kilometers"
                id="kilometers"
                onChange={handleChange}
                value={data.kilometers}
              />
              {errors.kilometers && <span className="error">{errors.kilometers}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="Travel_Exp">Travel Expense</label>
              <input
                type="text"
                name="Travel_Exp"
                id="Travel_Exp"
                onChange={handleChange}
                value={data.Travel_Exp}
              />
              {errors.Travel_Exp && <span className="error">{errors.Travel_Exp}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="DA">Daily Allowance</label>
              <input type="text" name="DA" id="DA" onChange={handleChange} value={data.DA} />
              {errors.DA && <span className="error">{errors.DA}</span>}
            </div>
          </div>
          <div className="form_new_bill_row5">
            <div className="form_new_bill_col2_1">
              <label htmlFor="if_mode">If mode is Other, Specify here..</label>
              <input
                type="text"
                name="if_mode"
                id="if_mode"
                onChange={handleChange}
                value={data.if_mode}
              />
              {errors.if_mode && <span className="error">{errors.if_mode}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="local">Local Conveyance</label>
              <input
                type="text"
                name="local"
                id="local"
                onChange={handleChange}
                value={data.local}
              />
              {errors.local && <span className="error">{errors.local}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="loading">Loading</label>
              <input
                type="text"
                name="loading"
                id="loading"
                onChange={handleChange}
                value={data.loading}
              />
              {errors.loading && <span className="error">{errors.loading}</span>}
            </div>
            <div className="form_new_bill_col2_1">
              <label htmlFor="other">Others</label>
              <input
                type="text"
                name="other"
                id="other"
                onChange={handleChange}
                value={data.other}
              />
              {errors.other && <span className="error">{errors.other}</span>}
            </div>
          </div>
          <div className="form_new_bill_row6">
            <div className="form_new_bill_file">
              <div className="form_new_bill_file1">
                <label htmlFor="file1">Attach Bills</label>
                <input type="file" name="file1" id="file1" onChange={handleChange} />
                {errors.file1 && <span className="error">{errors.file1}</span>}
              </div>
              <div className="form_new_bill_file2">
                <label htmlFor="file2">Attach Bills</label>
                <input type="file" name="file2" id="file2" onChange={handleChange} />
                {errors.file2 && <span className="error">{errors.file2}</span>}
              </div>
            </div>
            <div className="form_new_bill_col6">
              <div className="form_new_bill_col6_1">
                <div className="form_new_bill_col6_1_1">
                  <label htmlFor="if_Other">If Others, please mention</label>
                  <input
                    type="text"
                    name="if_Other"
                    id="if_Other"
                    onChange={handleChange}
                    value={data.if_Other}
                  />
                  {errors.if_Other && <span className="error">{errors.if_Other}</span>}
                </div>
                <div className="form_new_bill_col6_1_2">
                  <label htmlFor="Total">Total</label>
                  <input
                    type="text"
                    name="Total"
                    id="Total"
                    onChange={handleChange}
                    value={data.Total}
                  />
                  {errors.Total && <span className="error">{errors.Total}</span>}
                </div>
              </div>
              <div className="form_new_bill_col7">
                <div className="form_new_bill_col6_3">
                  <label htmlFor="Additional_remarks">Additional Remarks, if any</label>
                  <input
                    type="text"
                    name="Additional_remarks"
                    id="Additional_remarks"
                    onChange={handleChange}
                    value={data.Additional_remarks}
                  />
                  {errors.Additional_remarks && <span className="error">{errors.Additional_remarks}</span>}
                </div>
              </div>
            </div>
          </div>
          <div className="form_new_bill_colbtn">
            <button type="submit" style={{ backgroundColor: '#04aa6d' }}>
              Save bill <ReceiptIndianRupee />
            </button>
            <Link to={'/pages/reports/expensebillReport/newBill/AddNewBill'}>
              <button type="button" style={{ backgroundColor: '#f44336' }}>
                Close <X />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </NavbarSidebarLayout>
  );
}

export default Form_New_Bill;
