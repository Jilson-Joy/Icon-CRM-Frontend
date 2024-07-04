import React, { useEffect, useRef } from 'react';
import { Modal } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import './MachineEditModal.css';
import useMachine from '../../../hooks/useMachine';

function MachineEditModal({ show, onClose, onSave, formData, handleChange, machineList }) {
  const { name, code, price, modelNo, oem, Tonnage, Segment } = formData;

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <Modal show={show} onClose={onClose}>
      <div ref={modalRef}>
        {/* <Modal.Header>
          <h2>Edit Machine</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="EditMachine_container">
            <form className="EditMachine_form" onSubmit={onSave}>
              <div className="EditMachine_header">
                <h2>Edit Machine</h2>
              </div>
              <div className="EditMachine_inputFiled">
                <div className="EditMachine_name_section">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="EditMachine_code_section">
                  <label htmlFor="Code">Code</label>
                  <input
                    type="text"
                    id="Code"
                    value={code}
                    onChange={handleChange}
                    name="code"
                  />
                </div>
                <div className="EditMachine_price_section">
                  <label htmlFor="price">Price ₹</label>
                  <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={handleChange}
                    name="price"
                  />
                </div>
                <div className="EditMachine_modelNo_section">
                  <label htmlFor="modelNo">Model No</label>
                  <input
                    type="text"
                    id="modelNo"
                    value={modelNo}
                    onChange={handleChange}
                    name="modelNo"
                  />
                </div>
              </div>
              <div className="EditMachine_selectFiled">
                <div className="EditMachine_OEM_section">
                  <label htmlFor="oem">Select OEM</label>
                  <select id="oem" value={oem} onChange={handleChange} name="oem">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, oem_id }) => (
                      <option key={id} value={oem_id}>
                        {oem_id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="EditMachine_Tonnage_section">
                  <label htmlFor="Tonnage">Select Tonnage</label>
                  <select id="Tonnage" value={Tonnage} onChange={handleChange} name="Tonnage">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, tonnage_id }) => (
                      <option key={id} value={tonnage_id}>
                        {tonnage_id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="EditMachine_segment_section">
                  <label htmlFor="Segment">Select Segment</label>
                  <select id="Segment" value={Segment} onChange={handleChange} name="Segment">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, segment_id }) => (
                      <option key={id} value={segment_id}>
                        {segment_id}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={onSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </Modal.Footer> */}
        <Modal.Body>
          <div className="EditMachine_container">
            <form action="">
              <div className="EditMachine_header">
                <h2>Edit Machine</h2>
              </div>
              {/* section1 */}
              <div className="EditMachine_section1">
                <div className="EditMachine_section_a1">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" value={name} onChange={handleChange} name="name" />
                </div>
                <div className="EditMachine_section_a1">
                  <label htmlFor="Code">Code</label>
                  <input type="text" id="Code" value={code} onChange={handleChange} name="code" />
                </div>
              </div>

              {/* section2 */}

              <div className="EditMachine_section1">
                <div className="EditMachine_section_a1">
                  <label htmlFor="price">Price ₹</label>
                  <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={handleChange}
                    name="price"
                  />
                </div>
                <div className="EditMachine_section_a1">
                  <label htmlFor="modelNo">Model No</label>
                  <input
                    type="text"
                    id="modelNo"
                    value={modelNo}
                    onChange={handleChange}
                    name="modelNo"
                  />
                </div>
              </div>

              {/* section 3 */}

              <div className="EditMachine_section1">
                <div className="EditMachine_section_a2">
                  <label htmlFor="oem">Select OEM</label>
                  <select id="oem" value={oem} onChange={handleChange} name="oem">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, oem_id }) => (
                      <option key={id} value={oem_id}>
                        {oem_id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="EditMachine_section_a2">
                  <label htmlFor="Tonnage">Select Tonnage</label>
                  <select id="Tonnage" value={Tonnage} onChange={handleChange} name="Tonnage">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, tonnage_id }) => (
                      <option key={id} value={tonnage_id}>
                        {tonnage_id}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* section 4 */}

              <div className="EditMachine_section1">
                <div className="EditMachine_section_a2">
                  <label htmlFor="Segment">Select Segment</label>
                  <select id="Segment" value={Segment} onChange={handleChange} name="Segment">
                    <option value="">Select an option</option>
                    {machineList?.map(({ id, segment_id }) => (
                      <option key={id} value={segment_id}>
                        {segment_id}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>

          <div className="EditMachine_section_button">
            <button onClick={onSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default MachineEditModal;
