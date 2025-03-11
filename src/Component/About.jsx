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
							<p><strong>AWS Developer</strong> with 4+ years of experience specializing in designing and optimizing high-performance, scalable solutions. I have led key innovations, including enhancing Java Kinesis Client Library mechanisms for a <strong>5x performance boost</strong>  and implementing AWS Glue Jobs using PySpark, <strong>improving performance by 50%.</strong></p>
							<p>My expertise lies in <strong>Java, SpringBoot, SpringMVC ,SpringCloud, Microservice , Python, and a wide array of AWS services like Lambda, ECS, Kinesis, and Glue.</strong> I am passionate about improving system performance, reducing costs, and crafting low-latency microservices. With <strong>6 AWS certifications</strong>, including AWS Certified DevOps Engineer Professional, I continuously push the boundaries of cloud technology.</p>
							<p>Beyond my professional work, I actively contribute to <strong>open-source</strong> projects like DeepFake Video Detection (<strong>628+ stars</strong> on GitHub) and share insights on platforms like Medium.com. I thrive in cross-functional teams, delivering mission-critical solutions while maintaining high quality and performance standards.</p>
							
							<div className="row">
								<div className="col-md-12 col-lg-6">
									<ul>
										<li><i className="uil uil-bag-alt"></i> 4+ yr Experience</li>
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