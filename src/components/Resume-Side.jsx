export default function Resume_Side({formData}) {
  return (
    <div className="resume-side">
      <div className="resumewrapper">
        <div className="top-section">
          <h1>{formData.fullName}</h1>
          <div className="contact"><span>{formData.email} | {formData.phoneNumber} | {formData.address}</span></div>
        </div>
      </div>
    </div>
  )
}
