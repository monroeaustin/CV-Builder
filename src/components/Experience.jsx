import ExperienceRow from './ExperienceRow';
import EntryExperience from './ExperienceEntry';
import ExperienceEdit from './ExperienceEdit';
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useForm } from './FormContext';
import { FaPlus } from 'react-icons/fa6';

export default function ExperienceSection() {


  const {
    formData,
    modalVisible2,
    setEducationModalVisible,
    setWorkModalVisible,
    setExperienceClicked,
    experienceClicked,
 
  } = useForm();

  const toggleSection = () => {
    setWorkModalVisible((prev) => !prev);
    setExperienceClicked(false);
    setEducationModalVisible(false)
  };

  return (
    <div className="education-section">
      <button className="education-button" onClick={toggleSection}>
        <div className="button-content">
          <div className="button-left">
            <FaGraduationCap className="button-icon" />
            <h3>Work Experience</h3>
          </div>
          {modalVisible2 ? 
            <IoIosArrowDown className='rotate button-icon' /> 
            : <IoIosArrowDown className='button-icon'/>
          }
        </div>
      </button>

      {modalVisible2 && (
        <div className="modal">
          {experienceClicked ? (
            <EntryExperience />
          ) : formData.Experience.some((exp) => exp.isEditing) ? (
            <ExperienceEdit />
          ) : (
            <>
              <ExperienceRow />
              <button onClick={() => setExperienceClicked(true)} className="addEducationBtn">
                <FaPlus className="icon"/> Experience
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
