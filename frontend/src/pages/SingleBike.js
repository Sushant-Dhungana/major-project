import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getBike } from "../redux/features/sellSlice";
import { ImLocation2 } from "react-icons/im";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import "./tabs.css";
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {ImLocation} from 'react-icons/im';



const SingleBike = () => {
    const [toggleState, setToggleState] = React.useState(1);
    

  const dispatch = useDispatch();
  const { bike } = useSelector((state) => ({ ...state.sell }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { id } = useParams();
  console.log(bike);

  useEffect(() => {
    if (id) {
      dispatch(getBike(id));
    }
  }, [dispatch, id]);
  
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="single-image">
              <img
                src={`http://localhost:8000/uploads/` + bike.image}
                alt={bike?.bike}
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="single-content">
              <h2>Yamaha</h2>
              <p>{bike?.bike}</p>
              <div className="price">
                <p>Npr:&nbsp;{bike?.price}</p>
                <p className="location">
                  <ImLocation2 /> Pokhara
                </p>
              </div>
          </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Basic Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Engine Details
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Additional Details
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          
          
          <p><strong>Brand</strong>&nbsp;&nbsp; Tvs</p>
          <p><strong>Name</strong>&nbsp;&nbsp; Tvs rr 310</p>
          <p><strong>Color</strong>&nbsp;&nbsp; Red</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        > 
          <p><strong>Displacement</strong>&nbsp;&nbsp; 310CC</p>
          <p><strong>Power</strong>&nbsp;&nbsp; 18Nm</p>
          <p><strong>Conditon</strong>&nbsp;&nbsp; Very Good</p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        <p><strong>Brand</strong>&nbsp;&nbsp; Tvs</p>
          <p><strong>Name</strong>&nbsp;&nbsp; Tvs rr 310</p>
          <p><strong>Color</strong>&nbsp;&nbsp; Red</p>
        </div>
      </div>
        </div>
        <div className="col-md-12">
            <div className="contact-seller">
                <button onClick={handleShow}>Contact Seller</button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Seller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p><strong><BsFillTelephoneOutboundFill/> &nbsp;&nbsp;&nbsp;Contact Number:</strong> +977-9861516141</p>
            <p><strong><AiOutlineMail/> &nbsp;&nbsp;Email:</strong> sush@gmail.com</p>
            <p><strong><ImLocation/> &nbsp;&nbsp;Location:</strong> &nbsp;Pokhara</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
            </Button>
        </Modal.Footer>
      </Modal>
            </div>
        </div>
        </div>
        </div>
   
    </>
  );
};

export default SingleBike;
