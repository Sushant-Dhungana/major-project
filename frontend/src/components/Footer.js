import React from 'react'
import "./Footer.css";
import {FcAbout, FcDonate} from 'react-icons/fc';
import {BsFacebook, BsLinkedin} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer_last'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-top">
                    <h2>Enter. Wait. Predict</h2>
                    </div>
                    <div className="footer-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="about">
                        <div className="footer-about">
                        <p><FcAbout/> &nbsp;About us</p>
                        </div>
                        <div className="footer-donate">
                        <p><FcDonate/> &nbsp;Donate</p>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="footer-pps">
                    <h2>PPS</h2>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <div className="copy">
                        <p>&copy;2022 Chill Guys ++.  All Rights Reserved. </p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="footer-icons">
                        <div className="icons">
                        <BsFacebook size={25}/>
                        </div>
                        <div className="icons">
                        <BsLinkedin size={25}/>
                        </div>
                        <div className="icons">
                        <AiOutlineTwitter size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
