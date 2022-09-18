import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContext } from "../StepContext";

const ShowMultiStep = () => {
  const { currentStep, finalData } = React.useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      default:
    }
  }
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="predict-text">
            <h2>Enter. Predict. Sell</h2>
            <div className="predict-paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 multi-step mx-auto">
            <div className="predict-form-main">
              <div style={{ marginTop: "200px" }}>
                <Stepper activeStep={currentStep - 1} alternativeLabel>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                  <Step>
                    <StepLabel></StepLabel>
                  </Step>
                </Stepper>
              </div>
              {showStep(currentStep)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMultiStep;
