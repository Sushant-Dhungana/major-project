import React from 'react'
import ShowMultiStep from './multistepform/ShowMultiStep';

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = React.useState(1);
  const [userData, setUserData] = React.useState([]);
  const [finalData, setFinalData] = React.useState([]);

  function submitData() {

    setFinalData(finalData => [...finalData, userData]);
    setUserData('');
    setStep(1);
  }
  console.log(finalData)

  return (
    <div>
      <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData  }}>
        <ShowMultiStep/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext