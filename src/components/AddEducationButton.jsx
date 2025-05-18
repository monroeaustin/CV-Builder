import { FaPlus } from 'react-icons/fa6';
import { useForm } from './FormContext';

export default function AddEducationButton() {
  const { setEducationClicked } = useForm();

  const handleClick = () => {
    setEducationClicked(true);
  };

  return (
    <button className="addEducationBtn" onClick={handleClick}>
      <FaPlus className="icon" /> Education
    </button>
  );
}