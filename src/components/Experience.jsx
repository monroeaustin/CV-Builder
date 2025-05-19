import ExperienceRow from './ExperienceRow';
import EntryExperience from './ExperienceEntry';
import ExperienceEdit from './ExperienceEdit';
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useForm } from './FormContext';

export default function ExperienceSection() {
  const {
    formData,
    modalVisible,
    setModalVisible,
    experienceClicked,
    setExperienceClicked
  } = useForm();

  const toggleSection = () => {
    setModalVisible((prev) => !prev);
    setExperienceClicked(false); // Reset form view
  };

  return (
    <div className="education-section">
      <button className="education-button" onClick={toggleSection}>
        <div className="button-content">
          <div className="button-left">
            <FaGraduationCap className="button-icon" />
            <h3>Work Experience</h3>
          </div>
          <IoIosArrowDown className="button-icon" />
        </div>
      </button>

      {modalVisible && (
        <div className="modal">
          {experienceClicked ? (
            <EntryExperience />
          ) : formData.Experience.some((exp) => exp.isEditing) ? (
            <ExperienceEdit />
          ) : (
            <>
              <ExperienceRow />
              <button onClick={() => setExperienceClicked(true)} className="addEducationBtn">
                Add Experience
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
