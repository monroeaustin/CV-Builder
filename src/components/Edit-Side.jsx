import EducationSection from './Education';
import { useForm } from './FormContext';
import NavBar from './Nav-Bar';
export default function Edit_Side() {
  const { formData, handleChange } = useForm();

  return (
    <div className="left-side">
      <NavBar />
      <div className="personal-info">
        <label>Full Name <input name="fullName" value={formData.fullName} onChange={handleChange} /></label>
        <label>Email <input name="email" value={formData.email} onChange={handleChange} /></label>
        <label>Phone <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} /></label>
        <label>Address <input name="address" value={formData.address} onChange={handleChange} /></label>

      </div>
      <EducationSection />
    </div>
  );
}