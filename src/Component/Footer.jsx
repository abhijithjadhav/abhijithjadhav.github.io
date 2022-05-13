import React from 'react';
function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-6'>
                        <ul className='contact-social'>
                            <li><a href='https://www.linkedin.com/in/abhijitjadhav1998/' target='_blank'><i className='uil uil-linkedin'></i></a></li>
                            <li><a href='https://github.com/abhijitjadhav1998' target='_blank'><i className='uil uil-github'></i></a></li>
                            <li><a href='mailto:abhijit.jadhav1998@gmail.com' target='_blank'><i className='uil uil-envelope-info'></i></a></li>
                            <li><a href='https://abhijithjadhav.medium.com/' target='_blank'><i className='uil uil-medium-m'></i></a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='back-btn-wrap'>
                            <a href='#' className='back-btn'>
                                <i className='uil uil-location-arrow-alt'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <a href='https://wa.me/+918446755971/' className='whatsapp-btn' target='_blank'>
                <i className='uil uil-whatsapp my-float'></i>
            </a>
        </footer>
        // </main>
        // </body>
        // </html>
    );
}

export default Footer;