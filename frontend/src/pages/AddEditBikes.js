import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
  MDBValidationItem,
} from "mdb-react-ui-kit";
// import ChipInput from "material-ui-chip-input";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sellBike } from "../redux/features/sellSlice";
import { updateBike } from "../redux/features/sellSlice";

const initialState = {
  bike: "",
  price: "",
 
};

const AddEditBikes = () => {
  const [bikeData, setBikeData] = useState(initialState);
  const { error, loading, userBikes } = useSelector((state) => ({
    ...state.sell,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bike, price} = bikeData;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleBike = userBikes.find((bike) => bike._id === id);
      
      setBikeData({ ...singleBike });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bike && price  ) {
      
      const updatedBikeData = { ...bikeData, name: user?.name };
      if (!id) {
        dispatch(sellBike({ updatedBikeData, navigate, toast }));
      } else {
        dispatch(updateBike({ id, updatedBikeData, navigate, toast }));
      }

      
      handleClear();
    }
  };
  const onFileUpload = (e) => { 
    setBikeData({ ...bikeData, image: e.target.files[0] });
  }
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBikeData({ ...bikeData, [name]: value });
  };

  const handleClear = () => {
    setBikeData(initialState);
  };
  return (
    <>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "500px",
          alignContent: "center",
          marginTop: "100px",
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5>{id ? "Update Bike" : "Add Bikes"}</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <textarea
                  placeholder="Bike Name and details"
                  type="text"
                  style={{ height: "100px" }}
                  className="form-control"
                  value={bike}
                  name="bike"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please some details about your vehicle
                </div>
              </div>
              <div className="col-md-12">
                <input
                  placeholder="Enter Price"
                  type="number"
                  className="form-controls"
                  value={price}
                  name="price"
                  onChange={onInputChange}
                  required
                  style={{ marginBottom: "20px", width: "100%" }}
                />
                <div className="invalid-feedback">
                  Please enter your required price
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <input 
                  type="file"
                  name="image"
                  onChange={onFileUpload}
                  />
              </div>

              <div className="col-md-12">
                <MDBBtn style={{ width: "100%" }}>
                  {id ? "update" : "Submit"}
                </MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default AddEditBikes;
