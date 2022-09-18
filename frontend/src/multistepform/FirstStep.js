import React, {useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./multistepform.css";
import DisplayData from "./DisplayData";
import { multiStepContext } from '../StepContext';


const FirstStep = () => {
  const {setStep, userData, setUserData, finalData} = useContext(multiStepContext);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
         <div style={{marginTop:"200px"}} className="step-form">
        <TextField label="Bike Brand" value={userData['brand']} onChange={(e)=>setUserData({...userData, "brand":e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        <br/>
        <TextField label="Bike Name" value={userData['bikename']} onChange={(e)=>setUserData({...userData, "bikename ":e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        <br/>
        <div className="submit-btn">
        <button onClick={()=>setStep(2)}>Next</button>
        </div>
        {finalData.length >0 ? <DisplayData/> : ''}
    </div>
    </div>
    </div> 
    </div>
  )
}

export default FirstStep