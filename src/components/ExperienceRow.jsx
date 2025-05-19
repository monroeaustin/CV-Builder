import { FaRegEye } from "react-icons/fa";
import { useForm } from './FormContext';

export default function ExperienceRow() {
  const { formData, setFormData, setModalVisible } = useForm();

  const toggleVisible = (id) => {
    setFormData((prev) => ({
      ...prev,
      Experience: prev.Experience.map((exp) =>
        exp.id === id ? { ...exp, isVisible: !exp.isVisible } : exp
      )
    }));
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
            <FaRegEye />
          </button>
        </div>
      ))}
    </>
  );
}
