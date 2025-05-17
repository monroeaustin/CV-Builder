import { IoIosArrowDown } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import EducationRow from './EducationRow';
import AddEducationButton from './AddEducationButton';
import EntryEducation from "./EducationEntry";
import { useState } from "react";


export default function EducationSection({ formData, modalVisibility }) {
  const [modalVisible, setVisibility] = useState(true)
  const toggleVisibility = () => {
    modalVisible ? setVisibility(false) : setVisibility(true)
  }
  return (
    <div className="education-section">
      <button className="education-button" onClick={toggleVisibility}>
        <div className="button-content">
          <div className="button-left">
            <FaGraduationCap className="button-icon" />
            <h3>Education</h3>
          </div>
          <IoIosArrowDown className="button-icon" />
        </div>
      </button>
      {modalVisible ? <div className="modal"><EducationRow formData={formData}/></div> : null}

   
    </div>
  );
}
