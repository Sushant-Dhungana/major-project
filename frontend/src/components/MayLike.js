import React from "react";
import "./maylike.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBCardImage,
} from "mdb-react-ui-kit";

import { ImLocation2 } from "react-icons/im";
import bike from "../pictures/bike.png";
import { GrFavorite } from "react-icons/gr";

const MayLike = () => {
  return (
    <div className="maylike-top">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <GrFavorite size={30} /> &nbsp; Product you might like
            </h4>
          </div>
          <div className="col-md-4">
            <MDBCardGroup>
              <MDBCard
                className="maylike mt-20 d-sm-flex"
                style={{ maxWidth: "25rem" }}
              >
                <MDBCardImage
                  src={bike}
                  alt="bike image"
                  position="top"
                  style={{ maxWidth: "100%", height: "180px" }}
                />
                <MDBCardBody>
                  <MDBCardText className="describe text-start">
                    Mach I (II, III, IV) Kawasaki, Ducati (Mach 1S){" "}
                  </MDBCardText>
                  <MDBCardTitle className="text-start">
                    Price:Nrs 100000
                  </MDBCardTitle>
                  <div className="card-between-may">
                    <p>$ Negotiable</p>
                    <p className="location-may">
                      <ImLocation2 /> Pokhara
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </div>
          <div className="col-md-4">
            <MDBCardGroup>
              <MDBCard
                className="maylike mt-20 d-sm-flex"
                style={{ maxWidth: "25rem" }}
              >
                <MDBCardImage
                  src={bike}
                  alt="bike image"
                  position="top"
                  style={{ maxWidth: "100%", height: "180px" }}
                />
                <MDBCardBody>
                  <MDBCardText className="describe text-start">
                    Mach I (II, III, IV) Kawasaki, Ducati (Mach 1S){" "}
                  </MDBCardText>
                  <MDBCardTitle className="text-start">
                    Price:Nrs 100000
                  </MDBCardTitle>
                  <div className="card-between-may">
                    <p>$ Negotiable</p>
                    <p className="location-may">
                      <ImLocation2 /> Pokhara
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </div>
          <div className="col-md-4">
            <MDBCardGroup>
              <MDBCard
                className="maylike mt-20 d-sm-flex"
                style={{ maxWidth: "25rem" }}
              >
                <MDBCardImage
                  src={bike}
                  alt="bike image"
                  position="top"
                  style={{ maxWidth: "100%", height: "180px" }}
                />
                <MDBCardBody>
                  <MDBCardText className="describe text-start">
                    Mach I (II, III, IV) Kawasaki, Ducati (Mach 1S){" "}
                  </MDBCardText>
                  <MDBCardTitle className="text-start">
                    Price:Nrs 100000
                  </MDBCardTitle>
                  <div className="card-between-may">
                    <p>$ Negotiable</p>
                    <p className="location-may">
                      <ImLocation2 /> Pokhara
                    </p>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MayLike;
