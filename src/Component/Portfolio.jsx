import React from 'react';
import dfdc from '../img/fakegif.gif';
import cartoonize from '../img/cartoonize.jpg';
import todo from '../img/Todos react app.jpg';
import webscrapper from '../img/Web Scrapper.gif';
import neural from '../img/stylized-image.png';
import robot from '../img/robot-computer.jpg';

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
								<img src={dfdc} className='card-img-top' alt='deepfake detectiong using Deep learning' />
								<div className='card-body'>
									<h5 className='card-title'>Deepfake video Detection using DeepLearning</h5>
									<a href='https://github.com/abhijitjadhav1998/Deepfake_detection_using_deep_learning' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={cartoonize} className='card-img-top' alt='Cartoonizer app' />
								<div className='card-body'>
									<h5 className='card-title'>Open Source Contribution - Cartoonizer</h5>
									<a href='https://github.com/experience-ml/cartoonize' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>
									&nbsp;
									<a href='https://cartoonize-lkqov62dia-de.a.run.app/' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> Demo</a>
								</div>
							</div>
						</div>

						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={todo} className='card-img-top' alt='todo rest react app' />
								<div className='card-body'>
									<h5 className='card-title'>Todo Microservice Full stack react app</h5>
									<a href='https://github.com/abhijitjadhav1998/TODO-App-java-react' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={webscrapper} className='card-img-top' alt='Web Scrapper for Housing.com' />
								<div className='card-body'>
									<h5 className='card-title'>Web Scrapper for Housing.com </h5>
									<a href='https://github.com/abhijitjadhav1998/WebScrapper-for-housing.com' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>

								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={neural} className='card-img-top' alt='Al Shifa Ayush Hospital' />
								<div className='card-body'>
									<h5 className='card-title'>Neural Style transfer using- GG19  </h5>
									<a href='https://github.com/abhijitjadhav1998/Neural-Style-transfer-using-VGG19' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>
								</div>
							</div>
						</div>
						<div className='col-12 col-lg-4'>
							<div className='card mt-20'>
								<img src={robot} className='card-img-top' alt='Robot Computer' />
								<div className='card-body'>
									<h5 className='card-title'>Keep Mouse Moving - Robot Script</h5>
									<a href='https://github.com/abhijitjadhav1998/Keep-mouse-moving' target='_blank' className='btn btn-dark'><i className='uil uil-github'></i> Code </a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='more-projects'>
					<a href='https://github.com/abhijitjadhav1998' target='_blank' className='btn btn-primary'><i className='uil uil-link'></i> More Projects</a>
				</div>

			</div>
		</section>
	);
}

export default Portfolio;