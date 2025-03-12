import React from 'react';
import devops from '../img/dvops.png';
import ai from '../img/ai.png';
import dva from '../img/dvapng.png';
import saa from '../img/saa.png';
import cpp from '../img/cpp.png';
import mla from '../img/ml.png';

function Certifications() {
    return (
        <section className='certifications' id='certifications'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='title'>Certifications</h1>
                        <div className='title-bar'></div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                                <a href='https://www.credly.com/badges/18262ccf-aa54-44b8-9860-5235a5fbdc2a' target='_blank'>
                                    <img src={devops} className='card-img-top' alt='DevOps professional Associate' />
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                            <a href='https://www.credly.com/badges/90c65071-a4af-4e6e-a1f3-0217b47f19ac' target='_blank'>
                                    <img src={saa} className='card-img-top' alt='AWS Certified Solutions Architect – Associate' />
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                            <a href='https://www.credly.com/badges/269cb944-45da-4d40-8333-89c56cb4b649' target='_blank'>
                                    <img src={ai} className='card-img-top' alt='AI Practioner' />
                                </a>
                            </div>
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                            <a href='https://www.credly.com/badges/5ba94895-8387-4102-b437-cf5899cb1c28' target='_blank'>
                                    <img src={dva} className='card-img-top' alt='AWS Certified Developer – Associate' />
                                </a>
                            </div>
                        </div>
                      

                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                            <a href='https://www.credly.com/badges/4735ea88-866e-4428-9b84-749e23e28590/public_url' target='_blank'>
                                    <img src={cpp} className='card-img-top' alt='AWS Certified Cloud Practitioner' />
                                </a>
                            </div>
                        </div>
                        
                        <div className='col-12 col-lg-4'>
                            <div className='card mt-20'>
                            <a href='https://www.credly.com/badges/72fdaaeb-4247-44fc-ae1c-db0d79ef394c' target='_blank'>
                                    <img src={mla} className='card-img-top' alt='AI Practioner' />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='more-projects'>
                    <a href='https://www.linkedin.com/in/abhijithjadhav/details/certifications/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> More Certifications</a>
                </div>

            </div>
        </section>
    );
};

export default Certifications;

