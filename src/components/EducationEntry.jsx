import { useState } from 'react';
import Field from './Fields';
import { useForm } from './FormContext';
import {v4 as uuidv4 } from 'uuid';

export default function EntryEducation() {
  const {
    addEducation,
    setEducationClicked,
    setModalVisible
  } = useForm();

  const [formData, setFormData] = useState({
    id: uuidv4(),
    isVisible: true,
    isEditing: false,
    school: '',
    Degree: '',
    StartDate: '',
    EndDate: '',
    Location: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    addEducation(formData);
    setEducationClicked(false);
    console.log(`The ID to this Eduation is ${formData.id}`)
    
  };

  const handleCancel = () => {
    setEducationClicked(false);
    setModalVisible(false);
  };

  return (
    <>
      <Field name="school" defaultValue={formData.school} label="School" onChange={handleChange} />
      <Field name="Degree" defaultValue={formData.Degree} label="Degree" onChange={handleChange} />
      <div className="group">
        <Field name="StartDate" defaultValue={formData.StartDate} label="Start Date" onChange={handleChange} />
        <Field name="EndDate" defaultValue={formData.EndDate} label="End Date" onChange={handleChange} />
      </div>
      <Field name="Location" defaultValue={formData.Location} label="Location" onChange={handleChange} />
      

      <div className="controll-btns">
        <button className="btn btn-save" onClick={handleSave}>Save</button>
        <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
}
