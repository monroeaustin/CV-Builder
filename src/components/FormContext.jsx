import { createContext, useContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: "",
    address: '',
    Education: [
     
    ]
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [educationClicked, setEducationClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(JSON.stringify(formData))
  };

  const addEducation = (newEntry) => {
    setFormData((prev) => ({
      ...prev,
      Education: [...prev.Education, newEntry]
    }));
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      Education: []
    });
  };

  const loadExample = () => {
    setFormData({
      fullName: 'Example Name',
      email: 'example@email.com',
      phoneNumber: '+1234567890',
      address: 'Sample City, USA',
      Education: [
        { id: 0,
          isVisible: true,
          school: 'Sample University',
          Degree: 'B.A. in Design',
          StartDate: '01/2018',
          EndDate: '01/2022',
          Location: 'San Francisco, CA'
        }
      ]
    });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        addEducation,
        modalVisible,
        setModalVisible,
        educationClicked,
        setEducationClicked,
        clearForm,
        loadExample
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);