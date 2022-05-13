import React from 'react';
import agami from '../img/agami.png';
import sadak from '../img/sadak.png';
import nalahotel from '../img/nalahotel.png';
import admission from '../img/admission.png';
import alshifa from '../img/alshifa.png';
import nansei from '../img/nansei.png';

function Portfolio() {
	return (
		<section className='portfolio' id='portfolio'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Projects</h1>
						<div className='title-bar'></div>
					</div>
					<div className='row'>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={agami} className='card-img-top' alt='Agami Network' />
								<div className='card-body'>
									<h5 className='card-title'>Deepfake video Detection using DeepLearning</h5>
									<a href='https://www.agami.network/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={sadak} className='card-img-top' alt='Sadakathullah Appa College' />
								<div className='card-body'>
									<h5 className='card-title'>Open Source Contribution - Cartoonizer</h5>
									<a href='http://www.sadakath.ac.in/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>

						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={nalahotel} className='card-img-top' alt='Nala Hotel' />
								<div className='card-body'>
									<h5 className='card-title'>Todo Microservice Full stack react app</h5>
									<a href='https://www.nalahotel.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={admission} className='card-img-top' alt='Ambai Arts College Admission' />
								<div className='card-body'>
									<h5 className='card-title'>Web Scrapper for Housing.com </h5>
									<a href='https://www.admissionself.ambaiartscollege.org/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={alshifa} className='card-img-top' alt='Al Shifa Ayush Hospital' />
								<div className='card-body'>
									<h5 className='card-title'>Neural Style transfer using- GG19  </h5>
									<a href='http://www.alshifaayush.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a> fgfdg
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={nansei} className='card-img-top' alt='Nansei Organic Shop' />
								<div className='card-body'>
									<h5 className='card-title'>Keep Mouse Moving - Robot Script</h5>
									<a href='https://www.nanseionline.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='more-projects'>
					<a href='https://www.nalahotel.com/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> More Projects</a>
				</div>

			</div>
		</section>
	);
}

export default Portfolio;