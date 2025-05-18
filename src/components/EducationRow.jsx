import { FaRegEye } from "react-icons/fa";
import AddEducationButton from "./AddEducationButton";
import { useForm } from './FormContext';
import {useState } from 'react';
export default function EducationRow() {
  const { formData } = useForm();
  const [isVisible, setVisible] = useState(true)

  const toggleVisible = () => {
     isVisible ? setVisible(false) : setVisible(true) 
  }
  return (
    <>
      {formData.Education.map((education, index) => (
        <div className={`edu-row ${index}`} key={education.school}>
          <button className="headingBtn">{education.school}</button>
          <button className="eyeIcon" toggleVisible={toggleVisible} ><FaRegEye /></button>
        </div>
      ))}
      
    </>
  );
}
