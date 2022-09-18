import React, {useContext} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./multistepform.css";
import { multiStepContext } from '../StepContext';


const SecondStep = () => {
  const {setStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
    <div style={{marginTop:"200px"}} className="step-form">
        <TextField value={userData['Yearofpurchase']} onChange={(e)=>setUserData({...userData, "Yearofpurchase":e.target.value})} label="Year Of Purchase" margin="normal" variant="outlined" color="secondary"/>
        <br/>
        <TextField label="KM Travelled" value={userData['kmtravelled']} onChange={(e)=>setUserData({...userData, "kmtravelled":e.target.value})} margin="normal" variant="outlined" color="secondary"/>
        <br/>
        <div className="submit-btn-multiple">
        <button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</button><span> </span>
        <button variant="contained" color="primary" onClick={()=>setStep(3)}>Next</button>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SecondStep