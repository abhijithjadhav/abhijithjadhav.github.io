import React, { useState } from 'react';

function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [isExpandedAcc, setIsExpandedAcc] = useState(false);

  const handleToggleExpandAcc = () => {
    setIsExpandedAcc(!isExpandedAcc);
  };

  const [isExpandedPersi, setIsExpandedPersi] = useState(false);

  const handleToggleExpandPersi = () => {
    setIsExpandedPersi(!isExpandedPersi);
  };

  return (
    <section className='experience' id='experience'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Experience</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Sept 2022 - Present</span>
                  <h5>AWS Developer - BA4 <span className='place'>Barclays</span></h5>
                  <p>Pune</p>

                  {isExpanded ? (
                    <>
                      <p>➡️ Implemented Multi Scheduler support for Kinesis Client Library-based ECS pull mechanism resulting in a <strong>5x performance gain</strong> </p>
                      <p>➡️ Received <strong>23 recognitions and 1 Boost</strong></p>
                      <p>➡️ Implemented the Kinesis Producer Library in the push-based mechanism resulting in <strong>3x performance gain.</strong>(Patent WIP)</p>
                      <p>➡️ Optimized the ETL Glue Job using PySpark Best Practices increasing the performance by <strong>20% for the peak NFR of 5L.</strong></p>
                      <p>➡️ Led a cross-functional team to successfully deliver a key feature on time and without issues, ensuring seamless implementation and meeting all quality standards.</p>
                      <p>➡️ Developed a Transformer Rule Engine for ETL operations leading to the reducing the effort for new application development. </p>

                      <p>➡️ Provided extended support to the Team <strong>outside the Business Unit</strong>, helping them to Setup Api Gateway, Lambda Authorizer, ECS Spring Boot REST API.</p>
                      <p>➡️ Identified <strong>PySpark Scientific issue</strong> and proposed the solution for the same helping to avoid a major issue related to the currency value in OML.</p>
                      <p>➡️ Established the process for API calls inside VPC in Python and contributed to the Certificate Generator.</p>
                      <p>➡️ Re-designed the Step function-based applications into an AWS Glue Job with PySpark enhancing the performance by <strong>50 percent</strong>, along with horizontal scaling capabilities to the KPL pull mechanism.</p>
                      <p>➡️ Identified and implemented the performance improvement in the Lambda-based application responsible for sending notifications giving <strong>33 percent</strong> performance improvement. </p>
                      <p>➡️ Parallel API calls in Python application resulting in <strong>4X performance</strong> improvement.</p>
                      <p>➡️ <strong>Published Blogs</strong> for DynamoDB and PySpark Best practices, along with POCs for GSI sharding and Sparse Indexes.</p>
                      <p>➡️ Implemented the PySpark Working on Jenkins that helped the team to avoid the mocking of the Spark and <strong>presented the same to the Leadership</strong></p>
                      <p>➡️ Developed the utility to <strong>automatically</strong> fetch the number of monthly commits for the team members.</p>
                      <p>➡️ Developed the utility to Update the confluence with the application version in all production and non-production environments, helping the team <strong>avoid the manual effort</strong> of updating the page.</p>
                      <p>➡️ <strong>Automated</strong> the Release Notes update in confluence via Jenkins Pipeline.</p>
                      <p>➡️ Increased the performance of the Lambda application replacing the scan of the DynamoDB table and using the GSI based approach for the data retrieval leading to <strong>immense cost saving</strong>.</p>
                      <p>➡️ Implemented the Spring Boot REST API latency sensitive Microservice and solutioned the horizontal capability</p>
                      <p>➡️ Provided Support for <strong>Multi Region Enablement</strong> including POC for Glue multi region.</p>
                      <p>➡️ Implemented the common service catalog products for DynamoDB, S3, KMS to be used across NGCB.</p>
                      <p>➡️ Did the evaluation of the GitHub Copilot for our BU, which was presented to the <strong>Leadership</strong>.</p>
                      <p>➡️ Implemented POC for provisioned concurrency autoscaling and presented the same in the <strong>Weekly Engineering Leadership call</strong>.</p>
                      <p>➡️ Shown <strong>leadership</strong> skills in the Cross Account Lambda Event Source Mapping activity for Triumph including collaboration with the Other Team.</p>
                      <p>➡️ Solutioned the Horizontal Scaling approach for push adapter leading to the <strong>performance gain</strong> that will depend upon the number of horizontal instances are running.</p>
                      <p>➡️ Added the much needed <strong>JKS to PEM</strong> conversation lambda to the SIL certificate generator.</p>
                    </>
                  ) : (
                    <>
                      <p>➡️ Implemented Multi Scheduler support for Kinesis Client Library-based ECS pull mechanism resulting in a <strong>5x performance gain</strong> </p>
                      <p>➡️ Received <strong>23 recognitions and 1 Boost</strong></p>
                      <p>➡️ Implemented the Kinesis Producer Library in the push-based mechanism resulting in <strong>3x performance gain.</strong>(Patent WIP)</p>
                      <p>➡️ Optimized the ETL Glue Job using PySpark Best Practices increasing the performance by <strong>20% for the peak NFR of 5L.</strong></p>
                      <p>➡️ Led a cross-functional team to successfully deliver a key feature on time and without issues, ensuring seamless implementation and meeting all quality standards.</p>

                    </>
                  )}

                  <button onClick={handleToggleExpand} className="btn btn-primary btn-sm">
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </button>
                </li>
              </ul>
            </div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Dec 2020 - Sept 2022</span>
                  <h5>Application Development Analyst - <span className='place'>Accenture</span></h5>
                  <p>Pune</p>




                  {isExpandedAcc ? (
                    <>
                      <p>➡️ Implementing full-stack application using Spring boot, Spring MVC, Spring Security, Spring Data JPA, andWeb services. </p>
                      <p>➡️ Involved in requirement gathering, analysis, design, optimization, and documentation of the application using Agile Scrum methodology.</p>
                      <p>➡️ Time Entry workflow optimization on ERP to handle more number of users at the same time with limited server resources.</p>
                      <p>➡️ Worked on Inactive user Automation and PS Level Restriction Automation on ERP.</p>
                      <p>➡️ Developed Microservice based REST APIs for ERP</p>
                      <p>➡️ Writing various Unit testing Junit and Mockito test cases.</p>
                      <p>➡️ Version management using Git and used Maven Build tool.</p>
                      <p>➡️ Used JSP, HTML5, CSS3, Bootstrap, jQuery, and JavaScript in developing a Full Stack Java Spring Boot application.</p>
                      <p>➡️ Worked on agile scrum methodology and was involved in stand-up meetings to monitor the progress.</p>
                      <p>➡️ Involving in requirement gathering, analysis, design, and documentation of the application.</p>
                      <p>➡️ Implementing backend business layer using spring boot and web services.</p>
                      <p>➡️ Implementing Java EE components using Spring MVC, Spring IOC, and Spring security. </p>
                      <p>➡️ Developing JPA with entity beans for interacting persistence layer for CRUD operations. </p>
                      <p>➡️ Developing various Junit test cases for Unit Testing.</p>
                      <p>➡️ Preparing documentation of the application using Swagger.</p>
                    </>
                  ) : (
                    <>
                      <p>➡️ Implementing full-stack application using Spring boot, Spring MVC, Spring Security, Spring Data JPA, andWeb services. </p>
                      <p>➡️ Involved in requirement gathering, analysis, design, optimization, and documentation of the application using Agile Scrum methodology.</p>

                      <p>➡️ Time Entry workflow optimization on ERP to handle more number of users at the same time with limited server resources.</p>
                      <p>➡️ Worked on Inactive user Automation and PS Level Restriction Automation on ERP.</p>
                      <p>➡️ Developed Microservice based REST APIs for ERP</p>
                    </>
                  )}

                  <button onClick={handleToggleExpandAcc} className="btn btn-primary btn-sm">
                    {isExpandedAcc ? 'Read Less' : 'Read More'}
                  </button>

                </li>
              </ul>
            </div>

          </div>
          <div className='col-12 col-lg-6'>
            <h1 className='title'>Internship</h1>
            <div className='title-bar'></div>
            <div className='exp-list'>
              <ul>
                <li>
                  <div className='icon'></div>
                  <span className='time'>Jan 2019 - Jun 2019</span>
                  <h5>Software Engineering Intern - <span className='place'>Persistent Systems</span></h5>
                  <p>Pune</p>

                  {isExpandedPersi ? (
                    <>
                      <p>➡️ Worked on Interview Automation on an online campus test conducting platform called CodeSlash.</p>
                      <p>➡️ Was a part of a software development team, responsible for developing and managing a placement exam conduction software known as CodeSlash.</p>
                      <p>➡️ Created an interview automation module that was capable of recording the video of the candidate through the webcam and storing the recorded videos on the server.</p>
                      <p>➡️ Integrated the module with the CodeSlash, enabling the feature of conducting the interview on the platform. Developed the workflow of the Admin side, User side, and evaluator side.</p>
                    </>
                  ) : (
                    <>
                      <p>➡️ Worked on Interview Automation on an online campus test conducting platform called CodeSlash.</p>
                      <p>➡️ Was a part of a software development team, responsible for developing and managing a placement exam conduction software known as CodeSlash.</p>
                      <p>➡️ Created an interview automation module that was capable of recording the video of the candidate through the webcam and storing the recorded videos on the server.</p>
                      <p>➡️ Integrated the module with the CodeSlash, enabling the feature of conducting the interview on the platform. Developed the workflow of the Admin side, User side, and evaluator side.</p>

                    </>
                  )}

                  <button onClick={handleToggleExpandPersi} className="btn btn-primary btn-sm">
                    {isExpandedPersi ? 'Read Less' : 'Read More'}
                  </button>


                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Experience;