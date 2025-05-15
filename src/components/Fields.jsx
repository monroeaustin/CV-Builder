export default function Field({name,value,DoThis,label}){

    return (
        <> <label>
                {label}
                <input name= {name} value={value} onChange= {DoThis} />
           </label>           
        </>
    )
}