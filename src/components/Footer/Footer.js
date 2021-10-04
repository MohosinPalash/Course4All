import React from 'react';
import './Footer.css';
import { div, form, input } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12 segment-one md-mb-30 sm-mb-30">
                            <h3>THESIS STACK</h3>
                            <p>An Online Education Platform.The platform offers different courses base on technology field.
                                All the courses are in a reasonable prices.And the instructors are highly experienced.</p>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-two md-mb-30 sm-mb-30">
                            <h3>DEVELOPER INFO</h3>
                            <ul>
                                <li>MOHOSIN ISLAM PALASH</li>
                                <li>Mobile: 01676336205</li>
                                <li>Email: mp @gmail.com</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-three md-mb-30 sm-mb-30">
                            <h3>FOLLOW US</h3>
                            <p>We are available in social medias.You may contact us from 10 AM to 10 PM.And our executive
                                member will reply you as soon as possible </p>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12 segment-four md-mb-30 sm-mb-30">
                            <h3>CONTACT US</h3>
                            <p>We take any feedback with great interest.You may also be a part of makin our activity
                                smoother just typing a text in the below box and tap on the sen dbutton.</p>


                        </div>
                    </div>
                </div>
            </div>
            <p className="footer-bottom-text">All rights reserved by &copy; Thesis Stack 2021</p>
        </footer>
    );
};

export default Footer;