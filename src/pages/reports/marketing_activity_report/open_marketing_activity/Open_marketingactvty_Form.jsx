import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import NavbarSidebarLayout from '../../../../layouts/navbar-sidebar';
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';

function Open_marketingactvty_Form() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    id: id,
    marketingActivity: '',
    proposedDate: '',
    proposedAmount: '',
    disbursibleAmount: '',
    engineerName: '',
    dateofActvty: '',
    totalExpense: '',
    remarks: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/marketing_report_detials/${id}`)
      .then(res => {
        setFormData({
          id: id,
          marketingActivity: res.data.marketingActivity || '',
          proposedDate: res.data.proposedDate || '',
          proposedAmount: res.data.proposedAmount || '',
          disbursibleAmount: res.data.disbursibleAmount || '',
          engineerName: res.data.engineerName || '',
          dateofActvty: res.data.dateofActvty || '',
          totalExpense: res.data.totalExpense || '',
          remarks: res.data.remarks || ''
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/marketing_rprtCmpltd/${id}`, formData)
      .then(res => {
        console.log('Updated marketing report completion detail:', res.data);
        navigate('/pages/reports/marketing_activity_report/completed_marketing_activity/Cmpltd_marketingactvty_List');
      })
      .catch(err => {
        console.error('Error updating marketing report completion detail:', err);
        // Handle error appropriately, such as showing a message to the user
      });
  };
  
  
  

  return (
    <div>
      <NavbarSidebarLayout isFooter={false}>
        <div className="form_container">
          <div className="table-border">
            <Card className="product-table">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="marketingActivity" value="Marketing Activity" />
                  </div>
                  <TextInput
                    name="marketingActivity"
                    type="text"
                    placeholder="Marketing Activity"
                    value={formData.marketingActivity}
                    onChange={e => setFormData({ ...formData, marketingActivity: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="proposedDate" value="Proposed Date" />
                  </div>
                  <TextInput
                    type="date"
                    name="proposedDate"
                    className="w-full form-control rounded"
                    value={formData.proposedDate}
                    onChange={e => setFormData({ ...formData, proposedDate: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="proposedAmount" value="Proposed Amount" />
                  </div>
                  <TextInput
                    name="proposedAmount"
                    type="text"
                    placeholder="Proposed Amount"
                    value={formData.proposedAmount}
                    onChange={e => setFormData({ ...formData, proposedAmount: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="disbursibleAmount" value="Disbursible Amount" />
                  </div>
                  <TextInput
                    name="disbursibleAmount"
                    type="text"
                    placeholder="Disbursible Amount"
                    value={formData.disbursibleAmount}
                    onChange={e => setFormData({ ...formData, disbursibleAmount: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="engineerName" value="Engineer Name" />
                  </div>
                  <TextInput
                    id="engineerName"
                    type="text"
                    placeholder="Engineer Name"
                    value={formData.engineerName}
                    onChange={e => setFormData({ ...formData, engineerName: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="dateofActvty" value="Date of Activity" />
                  </div>
                  <TextInput
                    type="date"
                    id="dateofActvty"
                    className="w-full form-control rounded"
                    value={formData.dateofActvty}
                    onChange={e => setFormData({ ...formData, dateofActvty: e.target.value })}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="totalExpense" value="Total Expense" />
                  </div>
                  <TextInput
                    id="totalExpense"
                    type="text"
                    placeholder="Total Expense"
                    value={formData.totalExpense}
                    onChange={e => setFormData({ ...formData, totalExpense: e.target.value })}
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="remarks" value="Your Remarks" />
                  </div>
                  <Textarea
                    id="remarks"
                    placeholder="Leave a comment..."
                    rows={4}
                    value={formData.remarks}
                    onChange={e => setFormData({ ...formData, remarks: e.target.value })}
                  />
                </div>

                <Button color="dark" type="submit">
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </NavbarSidebarLayout>
    </div>
  );
}

export default Open_marketingactvty_Form;

