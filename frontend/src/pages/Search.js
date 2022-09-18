import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

import { getBikes } from "../redux/features/sellSlice";
import Spinner from "../components/Spinner";
import "./Home.css";

import { AiFillApple, AiOutlineSearch } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import cb from "../pictures/cb.jpeg";
import bikeimage from "../pictures/bike.png";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import MayLike from "../components/MayLike";
import SearchBike from "../components/SearchBike";

const Search = () => {
  const { bikes, userBikes, loading } = useSelector((state) => ({
    ...state.sell,
  }));
  // const {user} = useSelector((state) => ({...state.auth}));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBikes());
  }, []);
  if (loading) {
    return <Spinner />;
  }

  const { bike, price, image } = bikes;

  console.log(userBikes);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-8 home-left-section">
            <h4>
              Predict The <br />
              <span>Perfect Price</span>
            </h4>
            <p>
              E-commerce has evolved over the past few years and since it’s
              easier and more convenient, it is evident that customers are
              actually switching to the trend of onlinclothing necessities of
              both men and women but you can also shop for all kinds of
              appliances like air conditioners, heaters, refrigerators, LED TVs
              and a lot more.{" "}
            </p>
            <button>Predict Now</button>
          </div>
          <div className="col-md-4 home-img">
            <img src={bikeimage} alt="bike" />
          </div>
        </div>
      </div>
      <div className="container play">
        <div className="row">
          <div className="col-md-3">
            <p>Top selling Brand</p>
            <div className="play-store">
              <div className="play-main-section">
                <div className="icon">
                  <AiFillApple size={70} color="white" />
                  <p>
                    Download on the <br />
                    <span>App Store</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bikes-section">
        <div className="row">
          <div className="col-md-4 trending">
            <p>
              <AiOutlineSearch size={35} /> &nbsp;&nbsp; Searched Products
            </p>
          </div>
          <div className="col-md-4"></div>
          <hr className="bikes-hr" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "1000px",
                alignContent: "center",
              }}
            >
              <MDBRow className="mt-5">
                {userBikes.length === 0 && (
                  <MDBTypography className="text-center mb-0" tag="h2">
                    No Searched Bikes Found
                  </MDBTypography>
                )}

                <MDBCol>
                  <MDBContainer>
                    <MDBRow style={{ marginTop: "10px" }}>
                      {/* <h1> hello : {user?.name} your created ads bikes are</h1> */}
                    </MDBRow>
                    <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                      {userBikes &&
                        userBikes.map((item, index) => (
                          <SearchBike key={index} {...item} />
                        ))}
                    </MDBRow>
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </div>
      <div className="container third-image-section">
        <div className="row">
          <div className="col-md-12 third-para">
            <p>
              {" "}
              <AiOutlineSearch size={35} />
              &nbsp;&nbsp;Find MotorCycles based on Brands
            </p>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={cb}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>Tvs </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={cb}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>Bajaj </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={cb}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>Yamaha </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={cb}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>Honda </h2>
              </ImgOverlay>
            </div>
          </div>
        </div>
      </div>
      <MayLike />
    </div>
  );
};

export default Search;
