import React from 'react';
//frontend
const html = { width: '60%' }
const react = { width: '60%' }
const js = { width: '65%' }
const css = { width: '55%' }
//Backend
const java = { width: '80%' }
const spring = { width: '78%' }
const microservices = { width: '75%' }
const springCloud = { width: '70%' }
//Databases
const mySql = { width: '70%' }
// Devops
const docker = { width: '75%' }
const kubernetes = { width: '60%' }

// Unit Testing
const jUnit = { width: '75%' }
const mockito = { width: '75%' }


// Others
const dataStructure = { width: '60%' }





function Skills() {
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h1 className='title'>Skills</h1>
						<div className='title-bar'></div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='col-12'>
							<h1 className='title'>Frontend</h1>
							<div className='title-bar'></div>
						</div>
						<div className='skills'>
							<div className='skill'>
								<h5 className='skill-title'>HTML5</h5>
								<div className='skill-bar'>
									<div className='skill-progress-frontend' style={html} data-progress='60%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>React JS</h5>
								<div className='skill-bar'>
									<div className='skill-progress-frontend' style={react} data-progress='60%' ></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Javascript</h5>
								<div className='skill-bar'>
									<div className='skill-progress-frontend' style={js} data-progress='65%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>CSS3</h5>
								<div className='skill-bar'>
									<div className='skill-progress-frontend' style={css} data-progress='55%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>Backend</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Java</h5>
								<div className='skill-bar'>
									<div className='skill-progress-backend' style={java} data-progress='80%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Microservices</h5>
								<div className='skill-bar'>
									<div className='skill-progress-backend' style={microservices} data-progress='60%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Springboot, SpringMVC, SpringDataJPA</h5>
								<div className='skill-bar'>
									<div className='skill-progress-backend' style={spring} data-progress='65%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>SpringCloud</h5>
								<div className='skill-bar'>
									<div className='skill-progress-backend' style={springCloud} data-progress='75%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>DataBase</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>MySQL</h5>
								<div className='skill-bar'>
									<div className='skill-progress-database' style={mySql} data-progress='80%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>DevOps</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Docker</h5>
								<div className='skill-bar'>
									<div className='skill-progress-devops' style={docker} data-progress='80%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Kubernetes</h5>
								<div className='skill-bar'>
									<div className='skill-progress-devops' style={kubernetes} data-progress='80%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>Testing Framework</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>JUnit</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={jUnit} data-progress='80%'></div>
								</div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Mockito</h5>
								<div className='skill-bar'>
									<div className='skill-progress' style={mockito} data-progress='80%'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>Others</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>Data Structure and Algorithms</h5>
								<div className='skill-bar'>
									<div className='skill-progress-others' style={dataStructure} data-progress='80%'></div>
								</div>
								<div className='skill'>
									<h5 className='skill-title'>Maven Git Swagger</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default Skills;