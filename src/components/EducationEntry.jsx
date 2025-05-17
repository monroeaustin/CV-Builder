import Field from "./Fields"
export default function EntryEducation () {


    return(
        <>
<Field
    name="School"
    value=""
    label="School"
/>
<Field
    name="Degree"
    value=""
    label="Degree"
/>
<div className="group">
    <Field
    name="StartDate"
    value=""
    label="Start Date"
/>
<Field
    name="EndDate"
    value=""
    label="End Date"
/>
</div>
<Field
    name="Location"
    value=""
    label="Location"
/>

<div className="controll-btns">
  <button className="btn btn-save">Save</button>
  <button className="btn btn-cancel">Cancel</button>
</div>

</>
    )

    
}