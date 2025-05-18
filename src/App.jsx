import Edit_Side from './components/Edit-Side';
import Resume_Side from './components/Resume-Side';
import { FormProvider } from './components/FormContext';
import './assets/styles/App.css'
export default function App() {
  return (
    <FormProvider>
      <div className="App">
        <Edit_Side />
        <Resume_Side />
      </div>
    </FormProvider>
  );
}
