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

        {/* EDUCATION SECTION */}
        <div className="region">
          <div className="wrapperlabel">
            <h2>Education</h2>
          </div>
          {formData.Education.map((education) => (
            education.isVisible && (
              
              <div className="experience-group" key={education.school}>
                <div className="experience-label">
                    <div className="experience-info">
                  <h3>{education.school}</h3>
                  <p>{education.Degree}</p>
                </div>
                  <p>{education.StartDate} - {education.EndDate}</p>
                  <p>{education.Location}</p>
                </div>
              
              </div>
            )
          ))}
        </div>

        {/* EXPERIENCE SECTION — FIXED */}
        <div className="region">
          <div className="wrapperlabel">
            <h2>Experience</h2>
          </div>
          {formData.Experience.map((Experience) => (
            Experience.isVisible && (
              <div className="experience-group" key={Experience.companyName}>
                <div className="experience-label">
                    <div className="experience-info">
                  <h3>{Experience.positionTitle}</h3>
                  <p>{Experience.companyName}</p>
                </div>
                  <p>{Experience.StartDate} - {Experience.EndDate}</p>
                  <p>{Experience.location}</p>
                </div>
                <div className="details">
                  <p>{Experience.description}</p>
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
}
