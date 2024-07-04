// DesigEditModal.jsx
import React from 'react';
import './DesigEditModal.css'
function DesigEditModal({ show, onClose, onSave, designation }) {
  if (!show) return null;

  const [formData, setFormData] = React.useState({ ...designation });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Edit Designation</h2>
        <form>
          <label>
            Code:
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Department:
            <input
              type="text"
              name="Department"
              value={formData.Department}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default DesigEditModal;
