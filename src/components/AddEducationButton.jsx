import { FaPlus } from "react-icons/fa6";

export default function AddEducationButton({ onClick }) {
  return (
    <button className="addEducationBtn" onClick={onClick}>
      <FaPlus className="icon" /> Education
    </button>
  );
}
