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
const python = { width: '60%' }

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
const machinelearning = { width: '60%' }
const deeplearning = { width: '70%' }






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
						<div className='skills'>
							<div className='col-12'>
								<h1 className='title'>Backend</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Java</h5>
					
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Microservices</h5>
					
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Springboot, SpringMVC, SpringDataJPA</h5>
				
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ SpringCloud</h5>
						
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Python</h5>
					
							</div>
							<div className='col-12'>
								<h1 className='title'>AWS Services</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ Lambda</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ ECS</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ Glue</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ S3</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ Kinesis</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ SQS</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ API Gateway</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ ALB, NLB</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ CloudWatch</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ IAM</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>◀️ Event Bridge</h5>
							</div>

						</div>
					</div>
					<div className='col-12 col-lg-6'>
						<div className='col-12'>
							<h1 className='title'>Frontend</h1>
							<div className='title-bar'></div>
						</div>
						<div className='skills'>
							<div className='skill'>
								<h5 className='skill-title'>❇️ HTML5</h5>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>❇️ React JS</h5>
	
							</div>
							<div className='skill'>
								<h5 className='skill-title'>❇️ Javascript</h5>
					
							</div>
							<div className='skill'>
								<h5 className='skill-title'>❇️ CSS3</h5>
			
							</div>
						</div>
						<div className='col-12'>
								<h1 className='title'>DataBase</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>🔖 MySQL</h5>
				
							</div>
							<div className='skill'>
								<h5 className='skill-title'>🔖 DynamoDB</h5>
				
							</div>
							<div className='col-12'>
								<h1 className='title'>Testing Framework</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>☑️ JUnit</h5>
		
							</div>
							<div className='skill'>
								<h5 className='skill-title'>☑️ Mockito</h5>
				
							</div>
							<div className='col-12'>
								<h1 className='title'>Others</h1>
								<div className='title-bar'></div>
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Data Structure and Algorithms</h5>
							</div>

							<div className='skill'>
								<h5 className='skill-title'>✅ Machine Learning</h5>
					
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Deep Learning</h5>
							
							</div>
							<div className='skill'>
								<h5 className='skill-title'>✅ Maven Git Swagger</h5>
							</div>
					</div>
				</div>
			</div>
		</section>
	);
}


export default Skills;