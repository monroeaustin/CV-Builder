export default function Field({name,value,onChange,label}){

    return (
        <> <label>
                {label}
                <input name= {name} value={value} onChange= {onChange} />
           </label>           
        </>
    )
}