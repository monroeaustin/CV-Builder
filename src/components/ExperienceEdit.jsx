import { useState } from 'react';
import Field from './Fields';
import { useForm } from './FormContext';

export default function ExperienceEdit() {
  const {
    formData,
    setFormData,
    setModalVisible
  } = useForm();

  const selected = formData.Experience.find((exp) => exp.isEditing);
  if (!selected) return null;

  const [edited, setEdited] = useState({ ...selected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdited((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setFormData((prev) => ({
      ...prev,
      Experience: prev.Experience.map((exp) =>
        exp.id === selected.id ? { ...edited, isEditing: false } : exp
      )
    }));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setFormData((prev) => ({
      ...prev,
      Experience: prev.Experience.map((exp) =>
        exp.id === selected.id ? { ...exp, isEditing: false } : exp
      )
    }));
    setModalVisible(false);
  };

  return (
    <>
      <Field name="companyName" value={edited.companyName} onChange={handleChange} label="Company" />
      <Field name="positionTitle" value={edited.positionTitle} onChange={handleChange} label="Position" />
      <div className="group">
        <Field name="StartDate" value={edited.StartDate} onChange={handleChange} label="Start Date" />
        <Field name="EndDate" value={edited.EndDate} onChange={handleChange} label="End Date" />
      </div>
      <Field name="location" value={edited.location} onChange={handleChange} label="Location" />
      <Field name="description" value={edited.description} onChange={handleChange} label="Description" />
      <div className="controll-btns">
        <button className="btn btn-save" onClick={handleSave}>Update</button>
        <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
}
