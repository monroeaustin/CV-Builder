import { FaRegEye } from "react-icons/fa";
import { useForm } from './FormContext';
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function EducationRow() {
  const { formData, setFormData, setModalVisible } = useForm();

  const toggleVisible = (id) => {
    setFormData((prev) => ({
      ...prev,
      Education: prev.Education.map((edu) =>
        edu.id === id ? { ...edu, isVisible: !edu.isVisible } : edu
      )
    }));
  setVisible(visible ? false : true);
  };

  const editEducation = (id) => {
    setFormData((prev) => ({
      ...prev,
      Education: prev.Education.map((edu) =>
        edu.id === id ? { ...edu, isEditing: true } : { ...edu, isEditing: false }
      )
    }));
    setModalVisible(true);
  };

  const [visible,setVisible] = useState(true)
  return (
    <>
      {formData.Education.map((education, index) => (
        <div className={`edu-row ${index}`} key={education.id || education.school}>
          <button className="headingBtn" onClick={() => editEducation(education.id)}>
            {education.school}
          </button>
          <button
            className="eyeIcon"
            onClick={() => toggleVisible(education.id)}
            id={education.id}
          >
            {
            visible ? <FaRegEye /> : 
            <FaRegEyeSlash />

}

          </button>
        </div>
      ))}
    </>
  );
}
