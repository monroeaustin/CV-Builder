import { FaRegEye } from "react-icons/fa";
import { useForm } from './FormContext';

export default function EducationRow() {
  const { formData, setFormData } = useForm();

  const toggleVisible = (id) => {
    setFormData((prev) => ({
      ...prev,
      Education: prev.Education.map((edu) =>
        edu.id === id ? { ...edu, isVisible: !edu.isVisible } : edu
      )
    }));
  };

  return (
    <>
      {formData.Education.map((education, index) => (
        <div className={`edu-row ${index}`} key={education.id || education.school}>
          <button className="headingBtn">{education.school}</button>
          <button
            className="eyeIcon"
            onClick={() => toggleVisible(education.id)}
            id={education.id}
          >
            <FaRegEye />
          </button>
        </div>
      ))}
    </>
  );
}
