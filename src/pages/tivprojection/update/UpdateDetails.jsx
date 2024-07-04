import React, { useState, useEffect } from 'react';
import { Button, Card, Label, TextInput, Select, Textarea } from 'flowbite-react';
import '../create/AddTivProjection.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';

function UpdateDetails() {
    const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    namee: '',
    datee: '',
    oems: '',
    mc: '',
    comp1: '',
    comp2: '',
    engnamee: '',
    remarks: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3003/tiv/${id}`)
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [id]);

  const [highlightedInputs, setHighlightedInputs] = useState([]);
  const [errorInputs, setErrorInputs] = useState([]);

  const handleFocus = (inputId) => {
    setHighlightedInputs([...highlightedInputs, inputId]);
  };

  const handleBlur = (inputId) => {
    setHighlightedInputs(highlightedInputs.filter((id) => id !== inputId));
    validateInput(inputId);
  };

  const validateInput = (inputId) => {
    if (!customer[inputId]) {
      setErrorInputs([...errorInputs, inputId]);
    } else {
      setErrorInputs(errorInputs.filter((id) => id !== inputId));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCustomer({ ...customer, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSelectChange = (id, value) => {
    setCustomer({ ...customer, [id]: value });
    setErrorInputs(errorInputs.filter((input) => input !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = Object.keys(customer).filter((key) => !customer[key]);
    if (errors.length > 0) {
      setErrorInputs(errors);
    } else {
      axios
        .put(`http://localhost:3003/tiv/${id}`, customer)
        .then((response) => {
          console.log('Data updated successfully:', response.data);
          // You can perform any additional actions after successful submission
          navigate('/pages/customer/tivtable');
        })
        .catch((error) => {
          console.log('Error updating data:', error);
        });
    }
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="form-div">
        <Card className="details_form mt-2" style={{ width: '700px' }}>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="namee" value="Your Name" />
              </div>
              <TextInput
                id="namee"
                type="text"
                placeholder="Customer Name"
                value={customer.namee}
                onChange={handleChange}
                onFocus={() => handleFocus('namee')}
                onBlur={() => handleBlur('namee')}
                style={{
                  borderColor: errorInputs.includes('namee') ? 'red' : ''
                }}
              />
              {errorInputs.includes('namee') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="datee" value="Date" />
              </div>
              <TextInput
                id="datee"
                type="date"
                value={customer.datee}
                onChange={handleChange}
                onFocus={() => handleFocus('datee')}
                onBlur={() => handleBlur('datee')}
                style={{
                  borderColor: errorInputs.includes('datee') ? 'red' : ''
                }}
                min={currentDate}
              />
              {errorInputs.includes('datee') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="oems" value="OEM" />
              </div>
              <Select
                id="oems"
                value={customer.oems || ''}
                onChange={(e) => handleSelectChange('oems', e.target.value)}
                onFocus={() => handleFocus('oems')}
                onBlur={() => handleBlur('oems')}
                style={{
                  borderColor: errorInputs.includes('oems') ? 'red' : ''
                }}>
                <option disabled value="">
                  Select OEM
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              {errorInputs.includes('oems') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="mc" value="M/C Model" />
              </div>
              {/* <TextInput
                id="mc"
                type="text"
                placeholder="M/C Model"
                value={customer.mc}
                onChange={handleChange}
                onFocus={() => handleFocus('mc')}
                onBlur={() => handleBlur('mc')}
                style={{
                  borderColor: errorInputs.includes('mc') ? 'red' : ''
                }}
              />
              {errorInputs.includes('mc') && (
                <span className="text-red-500">This field is required</span>
              )} */}
                  <Select
               id="mc"
               type="text"
               placeholder="M/C Model"
               value={customer.mc}
               onChange={handleChange}
               onFocus={() => handleFocus('mc')}
               onBlur={() => handleBlur('mc')}
               style={{
                 borderColor: errorInputs.includes('mc') ? 'red' : ''
               }}>
                <option disabled value="">
                  Select M/C Model
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              {errorInputs.includes('mc') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>


            <div>
              <div className="mb-2 block">
                <Label htmlFor="comp1" value="Competetion1" />
              </div>
              {/* <TextInput
                id="comp1"
                type="text"
                placeholder="Competetion1"
                value={customer.comp1}
                onChange={handleChange}
                onFocus={() => handleFocus('comp1')}
                onBlur={() => handleBlur('comp1')}
                style={{
                  borderColor: errorInputs.includes('comp1') ? 'red' : ''
                }}
              />
              {errorInputs.includes('comp1') && (
                <span className="text-red-500">This field is required</span>
              )} */}
                  <Select
               id="comp1"
               type="text"
               placeholder="Competetion1"
               value={customer.comp1}
               onChange={handleChange}
               onFocus={() => handleFocus('comp1')}
               onBlur={() => handleBlur('comp1')}
               style={{
                 borderColor: errorInputs.includes('comp1') ? 'red' : ''
               }}>
                <option disabled value="">
                  Select from Competetion1
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              {errorInputs.includes('comp1') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="comp2" value="Competetion2" />
              </div>
              {/* <TextInput
                id="comp2"
                type="text"
                placeholder="Competetion2"
                value={customer.comp2}
                onChange={handleChange}
                onFocus={() => handleFocus('comp2')}
                onBlur={() => handleBlur('comp2')}
                style={{
                  borderColor: errorInputs.includes('comp2') ? 'red' : ''
                }}
              />
              {errorInputs.includes('comp2') && (
                <span className="text-red-500">This field is required</span>
              )} */}
              <Select
                id="comp2"
                type="text"
                placeholder="Competetion2"
                value={customer.comp2}
                onChange={handleChange}
                onFocus={() => handleFocus('comp2')}
                onBlur={() => handleBlur('comp2')}
                style={{
                  borderColor: errorInputs.includes('comp2') ? 'red' : ''
                }}>
                <option disabled value="">
                  Select from Competetion2
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
              {errorInputs.includes('comp2') && (
                <span className="text-red-500">This field is required</span>
              )} 
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="engnamee" value="Engineer Name" />
              </div>
              <TextInput
                id="engnamee"
                type="text"
                placeholder="Engineer Name"
                value={customer.engnamee}
                onChange={handleChange}
                onFocus={() => handleFocus('engnamee')}
                onBlur={() => handleBlur('engnamee')}
                style={{
                  borderColor: errorInputs.includes('engnamee') ? 'red' : ''
                }}
              />
              {errorInputs.includes('engnamee') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="remarks" value="Remarks" />
              </div>
              <Textarea
                id="remarks"
                type="text"
                placeholder="Remarks"
                value={customer.remarks}
                onChange={handleChange}
                onFocus={() => handleFocus('remarks')}
                onBlur={() => handleBlur('remarks')}
                style={{
                  borderColor: errorInputs.includes('remarks') ? 'red' : ''
                }}
              />
              {errorInputs.includes('remarks') && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>


            <Button
              className="w-full sm:w-auto"
              color="dark"
              style={{ fontWeight: 'bold' }}
              type="submit">
              Update
            </Button>
          </form>
        </Card>
      </div>
  )
}

export default UpdateDetails
