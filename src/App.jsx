import Edit_Side from './components/Edit-Side'
import './assets/styles/App.css'
import Resume_Side from './components/Resume-Side'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    fullName: 'Daddy',
    email: 'monroeaustinn@gmail.com',
    phoneNumber: +15104156680,
    address: 'Richmond, CA',
    Education: [{
      school:'London City University',
      Degree:'Bachelors in Economics',
      StartDate:'08/2020',
      EndDate:'present',
      Location:'New York City, US'
    },
    {
      school:'Hidden University',
      Degree:'Mathematics',
      StartDate:'08/2020',
      EndDate:'present',
      Location:'New York City, US'
    },
  ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    console.log(`The State is`, JSON.stringify(formData))
  };

  return (
    <div className='App'>
      <Edit_Side formData={formData} setFormData={setFormData} handleChange={handleChange} />
      <Resume_Side formData={formData} />
    </div>
  );
}

export default App;
