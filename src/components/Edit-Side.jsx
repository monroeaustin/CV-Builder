import NavBar from "./Nav-Bar"
import Field from "./Fields"
import EducationSection from "./Education"
export default function Edit_Side ({formData,handleChange}) {


  return (
    <div className="left-side">
      <NavBar />

      <div className="personal-info">
        <h4>
          Personal Details
        </h4>
<Field
  name= "fullName"
  value= {formData.fullName}
  DoThis= {handleChange}
  label = "Full Name"
  onChange = {handleChange}
/>
<Field
  name= "email"
  value= {formData.email}
  DoThis= {handleChange}
  label = "Email"
  onChange = {handleChange}
/>
<Field
  name= "phoneNumber"
  value= {formData.phoneNumber}
  DoThis= {handleChange}
  label = "Phone number"
  onChange = {handleChange}
/>
<Field
  name= "address"
  value= {formData.address}
  DoThis= {handleChange}
  label = "Address"
  onChange = {handleChange}
/>

      </div>
      <EducationSection/>
    </div>
  )
}