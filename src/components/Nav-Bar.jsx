import { useForm } from './FormContext';

export default function NavBar(){

  const {clearForm, loadExample } = useForm();
    return(
        <div className="nav">
          <button onClick={clearForm}>Clear Resume</button>
          <button onClick={loadExample}>Load Example</button>
        </div>
    )
}  
  
  