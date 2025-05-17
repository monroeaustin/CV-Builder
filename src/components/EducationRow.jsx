import { FaRegEye } from "react-icons/fa";
import AddEducationButton from "./AddEducationButton";
export default function EducationRow({ formData }) {
  return (
    <>
      {formData.Education.map((education, index) => (
        <div className={`edu-row ${index}`} key={index}>
          <h4>{education.school}</h4>
          <FaRegEye />
        </div>
      ))}
      <AddEducationButton />
    </>
  );
}
