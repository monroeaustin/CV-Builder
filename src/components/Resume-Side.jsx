import { IoIosMail } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { CiMapPin } from 'react-icons/ci';
import { useForm } from './FormContext';

export default function Resume_Side() {
  const { formData } = useForm();

  return (
    <div className="resume-side">
      <div className="resumewrapper">
        <div className="top-section">
          <h1>{formData.fullName}</h1>
          <div className="contact">
            <span>
              <IoIosMail className="svg-icon" /> {formData.email}
              <MdLocalPhone className="svg-icon" /> {formData.phoneNumber}
              <CiMapPin style={{ fill: 'white' }} className="svg-icon" /> {formData.address}
            </span>
          </div>
        </div>
        <div className="region">
          <div className="wrapperlabel">
            <h2>Education</h2>
          </div>
          {formData.Education.map((education) => (
            <div className="experience-group" key={education.school}>
              <div className="experience-label">
                <p>{education.StartDate} - {education.EndDate}</p>
                <p>{education.Location}</p>
              </div>
              <div className="experience-info">
                <h3>{education.school}</h3>
                <p>{education.Degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}