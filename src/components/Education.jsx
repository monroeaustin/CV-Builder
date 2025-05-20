
import EducationRow from './EducationRow';
import EntryEducation from './EducationEntry';
import AddEducationButton from './AddEducationButton';
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useForm } from './FormContext';
import EducationEdit from './EducationEdit';
export default function EducationSection() {
  const {
    formData,
    modalVisible,
    setEducationModalVisible,
    setWorkModalVisible,
    educationClicked,
    setEducationClicked,
  
  } = useForm();

  const toggleSection = () => {
    setEducationModalVisible((prev) => !prev);
    setEducationClicked(false); // Reset form view when opening section
    setWorkModalVisible(false)
    
  };


  return (
    <div className="education-section">
      <button className="education-button" onClick={toggleSection}>
        <div className="button-content">
          <div className="button-left">
            <FaGraduationCap className="button-icon" />
            <h3>Education</h3>
          </div>
          <IoIosArrowDown className="button-icon" />
        </div>
      </button>

      {modalVisible && (
  <div className="modal">
    {educationClicked ? (
      <EntryEducation />
    ) : formData.Education.some((edu) => edu.isEditing) ? (
      <EducationEdit />
    ) : (
      <>
        <EducationRow />
        <AddEducationButton />
      </>
    )}
  </div>
)}

    </div>
  );
}
