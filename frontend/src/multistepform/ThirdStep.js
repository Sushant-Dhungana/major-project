import React from "react";
import "./multistepform.css";
import { multiStepContext } from "../StepContext";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    React.useContext(multiStepContext);
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="step-form">
              <div style={{ marginTop: "200px" }} className="step-form">
                <TextField
                  value={userData["lotnumber"]}
                  onChange={(e) =>
                    setUserData({ ...userData, lotnumber: e.target.value })
                  }
                  label="Lot Number"
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                />
                <br />
                <TextField
                  label="Engine Displacement"
                  value={userData["displacement"]}
                  onChange={(e) =>
                    setUserData({ ...userData, displacement: e.target.value })
                  }
                  margin="normal"
                  variant="outlined"
                  color="secondary"
                />
                <br />
                <div className="submit-btn-multiple">
                  <button
                    variant="contained"
                    color="secondary"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>
                  <span> </span>
                  <button
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)}
                    className="submit-btn-next"
                  >
                    Submit
                  </button>
                </div>
                <Dialog open={open} onClose={() => setOpen(false)}>
                  <DialogTitle></DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Are you sure want to predict the price ?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                      cancel
                    </Button>
                    <Button onClick={submitData} color="primary">
                      Ok
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
