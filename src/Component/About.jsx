import React from 'react';
import about from '../img/about.png';

function About() {
	return (
		<section className='about' id='about'>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="title">About Me</h1>
						<div className="title-bar"></div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="about-img animate__animated animate__bounceIn">
							<img src={about} alt="Abhijit Jadhav" />
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="about-content">
							<p>Full Stack Java Developer with 1.6+ year of experience developing highly scalable Java applicaitons. </p>
							<p>Proficient in developing <strong>Full Stack Web applications using Java, SpringBoot, SpringMVC ,SpringCloud, Microservice. </strong>
								Pursue good hands on knowledge of Java/J2EE  in analysis, design, implementation, integration, testing, and maintenance of applications.
								Extensively worked with ERP with good knowledge of developing complex projects and good management skill of the deliverables.
							</p>
							<div className="row">
								<div className="col-md-12 col-lg-6">
									<ul>
										<li><i className="uil uil-bag-alt"></i> 1.6+ yr Experience</li>
									</ul>
								</div>
								<div className="col-md-12 col-lg-6">
									<ul>
										<li><i className="uil uil-graduation-cap"></i> B.Tech Graduate</li>
									</ul>
								</div>

								<a href='#contact' className='learn-more animate__animated animate__bounceInUp'>
									<span className='circle' aria-hidden='true'>
										<span className='icon arrow'></span>
									</span>
									<span className='button-text'>Contact Me</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;