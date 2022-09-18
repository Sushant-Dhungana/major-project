import React from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import {AiFillCloseCircle} from "react-icons/ai";
// import { multiStepContext } from "../context/StepContext";

const DisplayData = () => {
  const [open, setOpen] = React.useState(true);
  // const { finalData } = React.useContext(multiStepContext);
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (Loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    if (!Loading) {
      setLoading(false);
    }
  }, [Loading]);
  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          position="absolute"
          top="30%"
          left="30%"
          style={{ backgroundColor: "white" }}
          className="model"
        >
          <div className="model-btn">
            <Button onClick={() => setOpen(false)}>
                <AiFillCloseCircle />
            </Button>
          </div>
          {Loading && (
            <div className="preloader">
              <ClipLoader size={80} className="loader" />
              <Typography className="loader-content">
                Predicting the price...
              </Typography>
            </div>
          )}
          {!Loading && (
            <div className="predicted">
              <p>Predicted price is </p>
              <h4 className="header-predicted" style={{color:"blue"}}>Rs 98,000</h4>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayData;
