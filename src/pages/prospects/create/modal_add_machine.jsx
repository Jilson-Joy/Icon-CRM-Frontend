import React, { useState } from 'react';
import './modal_add_machine.css';
import { Plus } from 'lucide-react';

function AddMachine() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [tonnage, setTonnage] = useState('');

  const [makeError, setMakeError] = useState('');
  const [modelError, setModelError] = useState('');
  const [manufactureYearError, setManufactureYearError] = useState('');
  const [tonnageError, setTonnageError] = useState('');

  const handleBlurMake = () => {
    if (!make.trim()) {
      setMakeError('Required');
    } else {
      setMakeError('');
    }
  };

  const handleBlurModel = () => {
    if (!model.trim()) {
      setModelError('Required');
    } else {
      setModelError('');
    }
  };

  const handleBlurManufactureYear = () => {
    if (!manufactureYear.trim()) {
      setManufactureYearError('Required');
    } else {
      setManufactureYearError('');
    }
  };

  const handleBlurTonnage = () => {
    if (!tonnage.trim()) {
      setTonnageError('Required');
    } else {
      setTonnageError('');
    }
  };

  const handleCancel = () => {
    document.getElementById('my_modal_1').close();
    setMake('');
    setModel('');
    setManufactureYear('');
    setTonnage('');

    setMakeError('');
    setModelError('');
    setManufactureYearError('');
    setTonnageError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let makeErr = '';
    let modelErr = '';
    let manufactureYearErr = '';
    let tonnageErr = '';

    if (!make.trim()) {
      makeErr = 'Required';
    }

    if (!model.trim()) {
      modelErr = 'Required';
    }

    if (!manufactureYear.trim()) {
      manufactureYearErr = 'Required';
    }

    if (!tonnage.trim()) {
      tonnageErr = 'Required';
    }

    setMakeError(makeErr);
    setModelError(modelErr);
    setManufactureYearError(manufactureYearErr);
    setTonnageError(tonnageErr);

    if (!makeErr && !modelErr && !manufactureYearErr && !tonnageErr) {
      const newModel = { make, model, manufactureYear, tonnage };
      console.loh(newModel);
      //handleAddModel(newModel);

      setMake('');
      setModel('');
      setManufactureYear('');
      setTonnage('');

      setMakeError('');
      setModelError('');
      setManufactureYearError('');
      setTonnageError('');

      document.getElementById('my_modal_1').close();
    }
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-outline"
          onClick={() => document.getElementById('my_modal_1').showModal()}>
          <Plus />
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Model</h3>
          <div className="max-w-5xl w-full mx-auto p-6  rounded-lg shadow-md">
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="mb-2 block">
                <div>
                  <label htmlFor="make">Make:</label>
                  <select
                    id="make"
                    value={make}
                    style={{
                      border: makeError ? '1px solid red' : '1px solid #ccc'
                    }}
                    className="input-field"
                    onChange={(e) => setMake(e.target.value)}
                    onBlur={handleBlurMake}
                    required>
                    <option value="">Select Any</option>
                    <option value="Sample 1">Sample 1</option>
                    <option value="Sample 2">Sample 2</option>
                  </select>
                  {makeError && <p className="error-message">{makeError}</p>}
                  {/* {errors.make && <span>This field is required</span>} */}
                </div>
              </div>
              <div className="mb-2 block">
                <div>
                  <label htmlFor="model">Model:</label>
                  <input
                    type="text"
                    id="model"
                    placeholder="Enter Model Number"
                    value={model}
                    style={{
                      border: modelError ? '1px solid red' : '1px solid #ccc'
                    }}
                    className="input-field "
                    onChange={(e) => setModel(e.target.value)}
                    onBlur={handleBlurModel}
                    required
                  />
                  {modelError && <p className="error-message">{modelError}</p>}
                  {/* {errors.model && <span>This field is required</span>} */}
                </div>
              </div>
              <div className="mb-2 block">
                <div>
                  <label htmlFor="manufactureYear">Manufacture Year:</label>
                  <input
                    type="text"
                    id="manufactureYear"
                    placeholder="Enter Manufacture Year"
                    value={manufactureYear}
                    style={{
                      border: manufactureYearError ? '1px solid red' : '1px solid #ccc'
                    }}
                    className="input-field"
                    onChange={(e) => setManufactureYear(e.target.value)}
                    onBlur={handleBlurManufactureYear}
                    required
                  />
                  {manufactureYearError && <p className="error-message">{manufactureYearError}</p>}
                  {/* {errors.manufactureYear && <span>This field is required</span>} */}
                </div>
              </div>
              <div className="mb-2 block">
                <div>
                  <label htmlFor="tonnage">Tonnage:</label>
                  <input
                    type="number"
                    id="tonnage"
                    placeholder="Enter Tonnage"
                    value={tonnage}
                    style={{
                      border: tonnageError ? '1px solid red' : '1px solid #ccc'
                    }}
                    className="input-field"
                    onChange={(e) => setTonnage(e.target.value)}
                    onBlur={handleBlurTonnage}
                    required
                  />
                  {tonnageError && <p className="error-message">{tonnageError}</p>}
                  {/* {errors.tonnage && <span>This field is required</span>} */}
                </div>
              </div>
              <div
                className="modal-action"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                <button className="btn btn-outline " onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-outline ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default AddMachine;
