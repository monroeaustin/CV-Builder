import { useState } from 'react';
import Field from './Fields';
import { useForm } from './FormContext';
import { v4 as uuidv4 } from 'uuid';

export default function EntryExperience() {
  const {
    addExperience,
    setExperienceClicked,
    setModalVisible
  } = useForm();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    isVisible: true,
    isEditing: false,
    companyName: '',
    positionTitle: '',
    StartDate: '',
    EndDate: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    addExperience(formData);
    setExperienceClicked(false);
    setModalVisible(false);
  };

  const handleCancel = () => {
    setExperienceClicked(false);
    setModalVisible(false);
  };

  return (
    <>
      <Field name="companyName" value={formData.companyName} onChange={handleChange} label="Company" />
      <Field name="positionTitle" value={formData.positionTitle} onChange={handleChange} label="Position" />
      <div className="group">
        <Field name="StartDate" value={formData.StartDate} onChange={handleChange} label="Start Date" />
        <Field name="EndDate" value={formData.EndDate} onChange={handleChange} label="End Date" />
      </div>
      <Field name="location" value={formData.location} onChange={handleChange} label="Location" />
      <Field  name="description" value={formData.description} onChange={handleChange} label="Description" />
      <div className="controll-btns">
        <button className="btn btn-save" onClick={handleSave}>Save</button>
        <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
}
