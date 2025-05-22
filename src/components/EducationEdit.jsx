import { useState } from 'react';
import Field from './Fields';
import { useForm } from './FormContext';

export default function EducationEdit() {
  const {
    formData,
    setFormData,
    setModalVisible,
    deleteEducation
  } = useForm();

  const selectedEdu = formData.Education.find((edu) => edu.isEditing);
  if (!selectedEdu) return null;

  const [edited, setEdited] = useState({ ...selectedEdu });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdited((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setFormData((prev) => ({
      ...prev,
      Education: prev.Education.map((edu) =>
        edu.id === selectedEdu.id ? { ...edited, isEditing: false } : edu
      )
    }));
    setModalVisible(false);
  };

  const handleCancel = () => {
    setFormData((prev) => ({
      ...prev,
      Education: prev.Education.map((edu) =>
        edu.id === selectedEdu.id ? { ...edu, isEditing: false } : edu
      )
    }));
    setModalVisible(false);
  };

const handleDelete = () => {
  deleteEducation(selectedEdu.id);
  setModalVisible(false);
};

  return (
    <>
      <Field name="school" value={edited.school} onChange={handleChange} label="School" />
      <Field name="Degree" value={edited.Degree} onChange={handleChange} label="Degree" />
      <div className="group">
        <Field name="StartDate" value={edited.StartDate} onChange={handleChange} label="Start Date" />
        <Field name="EndDate" value={edited.EndDate} onChange={handleChange} label="End Date" />
      </div>
      <Field name="Location" value={edited.Location} onChange={handleChange} label="Location" />

      <div className="controll-btns">
        <button className="btn btn-save" onClick={handleSave}>Update</button>
        <button className="btn btn-cancel" onClick={handleCancel}>Cancel</button>
        <button className="btn btn-delete" onClick={handleDelete}>Delete</button>


      </div>
    </>
  );
}
