import { createContext, useContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    Education: [],
    Experience: []
  });

  const [modalVisible, setEducationModalVisible] = useState(false);
  const [modalVisible2, setWorkModalVisible] = useState(false);

  const [educationClicked, setEducationClicked] = useState(false);
  const [experienceClicked, setExperienceClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(JSON.stringify(formData));
  };

  const addEducation = (newEntry) => {
    setFormData((prev) => ({
      ...prev,
      Education: [...prev.Education, newEntry]
    }));
  };

  const addExperience = (newEntry) => {
    setFormData((prev) => ({
      ...prev,
      Experience: [...prev.Experience, newEntry]
    }));
  };

  const clearForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      address: '',
      Education: [],
      Experience: []
    });
  };

  const loadExample = () => {
    setFormData({
      fullName: 'Example Name',
      email: 'example@email.com',
      phoneNumber: '+1234567890',
      address: 'Sample City, USA',
      Education: [
        {
          id: 0,
          isEditing: false,
          isVisible: true,
          school: 'Sample University',
          Degree: 'B.A. in Design',
          StartDate: '01/2018',
          EndDate: '01/2022',
          Location: 'San Francisco, CA'
        }
      ],
      Experience: [
        {
          id: 0,
          isEditing: false,
          isVisible: true,
          companyName: 'Facebook',
          positionTitle: 'Software Engineer II',
          StartDate: '01/2025',
          EndDate: 'PRESENT',
          location: 'REMOTE',
          description: 'Created JSX React Application'
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
        modalVisible,
        setEducationModalVisible,
        setWorkModalVisible,
        educationClicked,
        setEducationClicked,
        modalVisible2,
        experienceClicked,
        setExperienceClicked,
        addEducation,
        addExperience,
        clearForm,
        loadExample
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
