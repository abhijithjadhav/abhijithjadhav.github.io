import React from 'react';

function Experience() {
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
                  <span className='time'>Dec 2020 - Present</span>
                  <h5>Full Stack Developer - <span className='place'>Accenture</span></h5>
                  <p>Pune</p>
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
                  <h5>Full Stack Developer Intern - <span className='place'>Persistent Systems</span></h5>
                  <p>Pune</p>
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