import React, { useRef } from 'react';

export const Contact = () => {

    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title'>Get in Touch</h1>
                        <div className='title-bar'></div>
                    </div>
                    <div className='col-12 col-lg-6'>

                        <ul>
                            <li>
                                <i className='uil uil-outgoing-call'></i>
                                <span className='info-details'>
                                    <h6>Phone</h6>
                                    <span className='info-value'><a href='tel:+918446755971'> +91 8446755971</a></span>
                                </span>
                            </li>

                            <li>
                                <i className='uil uil-location-pin-alt'></i>
                                <span className='info-details'>
                                    <h6>Location</h6>
                                    <span className='info-value'> Pune, Maharahtra, India</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6'>

                        <ul>
                            <li>
                                <i className='uil uil-envelope-edit'></i>
                                <span className='info-details'>
                                    <h6>Email</h6>
                                    <span className='info-value'><a href='mailto:abhijit.jadhav1998@gmail.com'> abhijit.jadhav1998@gmail.com</a></span>
                                </span>
                            </li>
                            <li>
                                <i className='uil  uil-desktop'></i>
                                <span className='info-details'>
                                    <h6></h6>
                                    <span className='info-value'> Open for new opportunitiess</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;