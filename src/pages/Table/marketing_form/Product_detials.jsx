import React, { useState } from 'react';
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarSidebarLayout from '../../../layouts/navbar-sidebar';
import './Product_detials.css';

function ProductDetails() {
  const [marketingActivity, setMarketingActivity] = useState('');
  const [proposedDate, setProposedDate] = useState('');
  const [proposedAmount, setProposedAmount] = useState('');
  const [disursableAmount, setDisursableAmount] = useState('');
  const [engineerName, setEngineerName] = useState('');
  const [remarks, setRemarks] = useState('');
  const navigate = useNavigate();

  const [marketingActivityError, setMarketingActivityError] = useState('');
  const [proposedDateError, setProposedDateError] = useState('');
  const [proposedAmountError, setProposedAmountError] = useState('');
  const [disursableAmountError, setDisursableAmountError] = useState('');
  const [engineerNameError, setEngineerNameError] = useState('');
  const [remarksError, setRemarksError] = useState('');

  const handleBlurMarketingActivity = () => {
    if (!marketingActivity.trim()) {
      setMarketingActivityError('Required');
    } else {
      setMarketingActivityError('');
    }
  };

  const handleBlurProposedDate = () => {
    if (!proposedDate.trim()) {
      setProposedDateError('Required');
    } else {
      setProposedDateError('');
    }
  };

  const handleBlurProposedAmount = () => {
    if (!proposedAmount.trim()) {
      setProposedAmountError('Required');
    } else {
      setProposedAmountError('');
    }
  };

  const handleBlurDisursableAmount = () => {
    if (!disursableAmount.trim()) {
      setDisursableAmountError('Required');
    } else {
      setDisursableAmountError('');
    }
  };

  const handleBlurEngineerName = () => {
    if (!engineerName.trim()) {
      setEngineerNameError('Required');
    } else {
      setEngineerNameError('');
    }
  };

  const handleBlurRemarks = () => {
    if (!remarks.trim()) {
      setRemarksError('Required');
    } else {
      setRemarksError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!marketingActivity) {
      setMarketingActivityError('Please enter Marketing Activity');
      hasError = true;
    } else {
      setMarketingActivityError('');
    }

    if (!proposedDate) {
      setProposedDateError('Please select Proposed Date');
      hasError = true;
    } else if (new Date(proposedDate) < new Date()) {
      setProposedDateError('Please select a current or future date.');
      hasError = true;
    } else {
      setProposedDateError('');
    }

    if (!proposedAmount) {
      setProposedAmountError('Please enter Proposed Amount');
      hasError = true;
    } else {
      setProposedAmountError('');
    }

    if (!disursableAmount) {
      setDisursableAmountError('Please enter Disursable Amount');
      hasError = true;
    } else {
      setDisursableAmountError('');
    }

    if (!engineerName) {
      setEngineerNameError('Please enter Engineer Name');
      hasError = true;
    } else {
      setEngineerNameError('');
    }

    if (!remarks) {
      setRemarksError('Please enter Remarks');
      hasError = true;
    } else {
      setRemarksError('');
    }

    if (!hasError) {
      const inputData = {
        marketingActivity: marketingActivity,
        proposedDate: proposedDate,
        proposedAmount: proposedAmount,
        disursableAmount: disursableAmount,
        engineerName: engineerName,
        remarks: remarks
      };

      axios
        .post('http://localhost:3002/product_detials', inputData)
        .then((res) => {
          navigate('/product/list');
        })
        .catch((error) => {
          console.error('Error adding product details:', error);
        });
    }
  };

  const handleChangeMarketingActivity = (event) => {
    setMarketingActivity(event.target.value);
  };

  const handleChangeProposedDate = (event) => {
    setProposedDate(event.target.value);
  };

  const handleChangeProposedAmount = (event) => {
    setProposedAmount(event.target.value);
  };

  const handleChangeDisursableAmount = (event) => {
    setDisursableAmount(event.target.value);
  };

  const handleChangeEngineerName = (event) => {
    setEngineerName(event.target.value);
  };

  const handleChangeRemarks = (event) => {
    setRemarks(event.target.value);
  };

  return (
    <NavbarSidebarLayout isFooter={false}>
      <div className="form_container">
        <div className="table-border">
          <Card className="product-table">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Marketing_Activity" value="Marketing Activity" />
                </div>
                <TextInput
                  id="marketingActivity"
                  type="text"
                  placeholder="Marketing Activity"
                  value={marketingActivity}
                  style={{
                    border:
                      marketingActivityError && !marketingActivity.trim()
                        ? '1px solid red'
                        : '1px solid #ccc'
                  }}
                  onBlur={handleBlurMarketingActivity}
                  onChange={handleChangeMarketingActivity}
                />
                {marketingActivityError && (
                  <span style={{ color: 'red' }}>{marketingActivityError}</span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Proposed_Date">Proposed Date</Label>
                </div>
                <TextInput
                  type="date"
                  id="proposedDate"
                  className="w-full form-control rounded"
                  required
                  min={new Date().toISOString().slice(0, 10)}
                  value={proposedDate}
                  style={{
                    border:
                      proposedDateError && !proposedDate.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurProposedDate}
                  onChange={handleChangeProposedDate}
                />
                {proposedDateError && <span style={{ color: 'red' }}>{proposedDateError}</span>}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Proposed_Amount" value="Proposed Amount" />
                </div>
                <TextInput
                  id="Proposed_Amount"
                  type="text"
                  placeholder="Proposed Amount"
                  value={proposedAmount}
                  style={{
                    border:
                      proposedAmountError && !proposedAmount.trim()
                        ? '1px solid red'
                        : '1px solid #ccc'
                  }}
                  onBlur={handleBlurProposedAmount}
                  onChange={handleChangeProposedAmount}
                />
                {proposedAmountError && <span style={{ color: 'red' }}>{proposedAmountError}</span>}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Disursable_Amount" value="Disursable Amount" />
                </div>
                <TextInput
                  id="disursableAmount"
                  type="text"
                  placeholder="Disursable Amount"
                  value={disursableAmount}
                  style={{
                    border:
                      disursableAmountError && !disursableAmount.trim()
                        ? '1px solid red'
                        : '1px solid #ccc'
                  }}
                  onBlur={handleBlurDisursableAmount}
                  onChange={handleChangeDisursableAmount}
                />
                {disursableAmountError && (
                  <span style={{ color: 'red' }}>{disursableAmountError}</span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="Engineer_Name" value="Engineer Name" />
                </div>
                <TextInput
                  id="engineerName"
                  type="text"
                  placeholder="Engineer Name"
                  value={engineerName}
                  style={{
                    border:
                      engineerNameError && !engineerName.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurEngineerName}
                  onChange={handleChangeEngineerName}
                />
                {engineerNameError && <span style={{ color: 'red' }}>{engineerNameError}</span>}
              </div>

              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="Remarks" value="Your Remarks" />
                </div>
                <Textarea
                  className="textarea" 
                  id="remarks"
                  placeholder="Leave a comment..."
                  value={remarks}
                  style={{
                    border: remarksError && !remarks.trim() ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={handleBlurRemarks}
                  onChange={handleChangeRemarks}
                  rows={4}
                />
                {remarksError && <span style={{ color: 'red' }}>{remarksError}</span>}
              </div>

              <Button color="dark" type="submit">
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </NavbarSidebarLayout>
  );
}

export default ProductDetails;

