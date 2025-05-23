import { FaRegEye } from "react-icons/fa";
import { useForm } from './FormContext';
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function ExperienceRow() {
  const { formData, setFormData, setModalVisible } = useForm();
  const [visible,setVisible] = useState(true)

  const toggleVisible = (id) => {
    setFormData((prev) => ({
      ...prev,
      Experience: prev.Experience.map((exp) =>
        exp.id === id ? { ...exp, isVisible: !exp.isVisible } : exp
      )
    }));
  setVisible(visible ? false : true);
  };

  const editExperience = (id) => {
    setFormData((prev) => ({
      ...prev,
      Experience: prev.Experience.map((exp) =>
        exp.id === id ? { ...exp, isEditing: true } : { ...exp, isEditing: false }
      )
    }));
    setModalVisible(true);
  };

  return (
    <>
      {formData.Experience.map((exp, index) => (
        <div className={`edu-row ${index}`} key={exp.id || exp.companyName}>
          <button className="headingBtn" onClick={() => editExperience(exp.id)}>
            {exp.companyName}
          </button>
          <button
            className="eyeIcon"
            onClick={() => toggleVisible(exp.id)}
            id={exp.id}
          >
            { visible ? <FaRegEye /> :
            <FaRegEyeSlash /> }
          </button>
        </div>
      ))}
    </>
  );
}
