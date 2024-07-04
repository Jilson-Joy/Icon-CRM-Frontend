import React, { useEffect, useRef, useState } from 'react';
import { Modal, Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import useMarketing from '../../../hooks/useMarketing';

function PdctAddModal({ setIsModalOpen, refreshData }) {
  const [marketingActivity, setMarketingActivity] = useState('');
  const [proposedDate, setProposedDate] = useState('');
  const [proposedAmount, setProposedAmount] = useState('');
  const [disbursableAmount, setDisbursableAmount] = useState('');
  const [engineerName, setEngineerName] = useState('');
  const [remarks, setRemarks] = useState('');
  const modalRef = useRef();
  const { submitData } = useMarketing();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsModalOpen]);

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleBlur = (field, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !value.trim() ? 'Required' : ''
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!marketingActivity) newErrors.marketingActivity = 'Please enter Marketing Activity';
    if (!proposedDate) {
      newErrors.proposedDate = 'Please select Proposed Date';
    } else if (new Date(proposedDate) < new Date()) {
      newErrors.proposedDate = 'Please select a current or future date.';
    }
    if (!proposedAmount) newErrors.proposedAmount = 'Please enter Proposed Amount';
    if (!disbursableAmount) newErrors.disbursableAmount = 'Please enter Disbursable Amount';
    if (!engineerName) newErrors.engineerName = 'Please enter Engineer Name';
    if (!remarks) newErrors.remarks = 'Please enter Remarks';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const inputData = {
      activity_name: marketingActivity,
      proposed_date: proposedDate,
      proposed_amt: proposedAmount,
      disbursable_amt: disbursableAmount,
      engineer_id: engineerName,
      created_by: 1,
      activity_description: remarks
    };

    try {
      const newData = await submitData(inputData);
      if (newData) {
        refreshData();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error adding product details:', error);
    }
  };

  return (
    <Modal show={true} onClose={() => setIsModalOpen(false)}>
      <div ref={modalRef}>
        <Modal.Body>
          {/* <div className="form_container">
                        <div className="table-border">
                            <Modal.Header>
                                Add New Product
                            </Modal.Header>
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
                                                border: errors.marketingActivity ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('marketingActivity', marketingActivity)}
                                            onChange={handleChange(setMarketingActivity)}
                                        />
                                        {errors.marketingActivity && (
                                            <span style={{ color: 'red' }}>{errors.marketingActivity}</span>
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
                                                border: errors.proposedDate ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('proposedDate', proposedDate)}
                                            onChange={handleChange(setProposedDate)}
                                        />
                                        {errors.proposedDate && (
                                            <span style={{ color: 'red' }}>{errors.proposedDate}</span>
                                        )}
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
                                                border: errors.proposedAmount ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('proposedAmount', proposedAmount)}
                                            onChange={handleChange(setProposedAmount)}
                                        />
                                        {errors.proposedAmount && (
                                            <span style={{ color: 'red' }}>{errors.proposedAmount}</span>
                                        )}
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="Disursable_Amount" value="Disursable Amount" />
                                        </div>
                                        <TextInput
                                            id="disursableAmount"
                                            type="text"
                                            placeholder="Disbursable Amount"
                                            value={disbursableAmount}
                                            style={{
                                                border: errors.disbursableAmount ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('disbursableAmount', disbursableAmount)}
                                            onChange={handleChange(setDisbursableAmount)}
                                        />
                                        {errors.disbursableAmount && (
                                            <span style={{ color: 'red' }}>{errors.disbursableAmount}</span>
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
                                                border: errors.engineerName ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('engineerName', engineerName)}
                                            onChange={handleChange(setEngineerName)}
                                        />
                                        {errors.engineerName && (
                                            <span style={{ color: 'red' }}>{errors.engineerName}</span>
                                        )}
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
                                                border: errors.remarks ? '1px solid red' : '1px solid #ccc',
                                            }}
                                            onBlur={() => handleBlur('remarks', remarks)}
                                            onChange={handleChange(setRemarks)}
                                            rows={4}
                                        />
                                        {errors.remarks && (
                                            <span style={{ color: 'red' }}>{errors.remarks}</span>
                                        )}
                                    </div>

                                    <Button color="dark" type="submit">
                                        Submit
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div> */}
          <form action="">
            <div className="Marketing_Activity">
              <h2> Add New Product</h2>
            </div>
            {/* section 1 */}
            <div className="Marketing_Activity_section1">
              <div className="Marketing_Activity_section_A1">
                <label htmlFor="Marketing_Activity">Marketing Activity</label>
                <TextInput
                  id="marketingActivity"
                  type="text"
                  placeholder="Marketing Activity"
                  value={marketingActivity}
                  style={{
                    border: errors.marketingActivity ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={() => handleBlur('marketingActivity', marketingActivity)}
                  onChange={handleChange(setMarketingActivity)}
                />
                {errors.marketingActivity && (
                  <span style={{ color: 'red' }}>{errors.marketingActivity}</span>
                )}
              </div>
              <div className="Marketing_Activity_section-A2">
                <label htmlFor="Proposed_Date">Proposed Date</label>
                <TextInput
                  type="date"
                  id="proposedDate"
                  className="w-full form-control rounded"
                  required
                  min={new Date().toISOString().slice(0, 10)}
                  value={proposedDate}
                  style={{
                    border: errors.proposedDate ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={() => handleBlur('proposedDate', proposedDate)}
                  onChange={handleChange(setProposedDate)}
                />
                {errors.proposedDate && <span style={{ color: 'red' }}>{errors.proposedDate}</span>}
              </div>
            </div>
            {/* section 2 */}

            <div className="Marketing_Activity_section1">
              <div className="Marketing_Activity_section_A1">
                <label htmlFor="Proposed_Amount">Proposed Amount</label>
                <TextInput
                  id="Proposed_Amount"
                  type="text"
                  placeholder="Proposed Amount"
                  value={proposedAmount}
                  style={{
                    border: errors.proposedAmount ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={() => handleBlur('proposedAmount', proposedAmount)}
                  onChange={handleChange(setProposedAmount)}
                />
                {errors.proposedAmount && (
                  <span style={{ color: 'red' }}>{errors.proposedAmount}</span>
                )}
              </div>
              <div className="Marketing_Activity_section-A1">
                <label htmlFor="Disursable_Amount">Disursable Amount</label>
                <TextInput
                  id="disursableAmount"
                  type="text"
                  placeholder="Disbursable Amount"
                  value={disbursableAmount}
                  style={{
                    border: errors.disbursableAmount ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={() => handleBlur('disbursableAmount', disbursableAmount)}
                  onChange={handleChange(setDisbursableAmount)}
                />
                {errors.disbursableAmount && (
                  <span style={{ color: 'red' }}>{errors.disbursableAmount}</span>
                )}
              </div>
            </div>
            {/* section 3 */}

            <div className="Marketing_Activity_section1">
              <div className="Marketing_Activity_section_A1">
                <label htmlFor="Engineer_Name">Engineer Name</label>
                <TextInput
                  id="engineerName"
                  type="text"
                  placeholder="Engineer Name"
                  value={engineerName}
                  style={{
                    border: errors.engineerName ? '1px solid red' : '1px solid #ccc'
                  }}
                  onBlur={() => handleBlur('engineerName', engineerName)}
                  onChange={handleChange(setEngineerName)}
                />
                {errors.engineerName && <span style={{ color: 'red' }}>{errors.engineerName}</span>}
              </div>
            </div>
            {/* section 4 */}

            <div className="Marketing_Activity_section_A2">
              <label htmlFor="Remarks">Your Remarks</label>
              <Textarea
                className="textarea"
                id="remarks"
                placeholder="Leave a comment..."
                value={remarks}
                style={{
                  border: errors.remarks ? '1px solid red' : '1px solid #ccc'
                }}
                onBlur={() => handleBlur('remarks', remarks)}
                onChange={handleChange(setRemarks)}
                rows={4}
              />
              {errors.remarks && <span style={{ color: 'red' }}>{errors.remarks}</span>}
            </div>
            <div className='Marketing_Activity_button'>
              <Button color="dark" type="submit" className='Marketing_Activity_button1'>
                Submit
              </Button>
              <Button color="dark" className='Marketing_Activity_button1'>
              Cancel
              </Button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default PdctAddModal;
