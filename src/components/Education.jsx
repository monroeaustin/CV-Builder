import { IoIosArrowDown } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";

export default function EducationSection() {
  return (
    <div className="education-section">
      <button className="education-button">
        <div className="button-content">
          <div className="button-left">
            <FaGraduationCap className="button-icon" />
            <h3>Education</h3>
          </div>
          <IoIosArrowDown className="button-icon" />
        </div>
      </button>
      <div className="modal">
        <div className="row">London City University</div>
        <div className="row">Hidden University</div>
      </div>
    </div>
  );
}
