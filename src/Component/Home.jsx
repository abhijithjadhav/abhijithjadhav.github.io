import React from 'react';
import ReactDOM from 'react-dom';
import Typical from 'react-typical';
import slider from '../img/hero.png';
import sun from '../img/sun.png';
import moon from '../img/moon.png';


function Home() {
  return (
    <header>

      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-nav'>
          <div className='container-fluid'>

            <a href="/" className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">Abhijit Jadhav</span>
              <span className="grey-color">/&gt;</span>
            </a>

            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'>
                <i className='uil uil-list-ul'></i>
              </span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link' href='#home'><i className='uil uil-estate'></i> Home </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#about'><i className='uil uil-user'></i> About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#experience'><i className='uil uil-bag-alt'></i> Experience</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#skills'><i className='uil uil-react'></i> Skills</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#portfolio'><i className='uil uil-window-grid'></i> Projects</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#blogs'><i className='uil  uil-book-reader'></i> Blogs</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#contact'><i className='uil uil-calling'></i> Contact</a>
                </li>
                <li className='nav-item'>
                  <img src={moon} alt='' id='icon' />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='row'>
          <div className='col-12 col-lg-6 hero-content'>
            <div className='d-flex'>
              <h4 className='animate__animated animate__bounceInDown'>Hi, I'm Abhijit Jadhav </h4>
              <h4 className='hi'>👋</h4>
            </div>
            {" "}
            <h1 className='animate__animated animate__bounceInLeft'>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Java AWS Developer",
                  1000,
                  "Technical Blogger",
                  1000,
                  "AI Enthusiast",
                  1000,
                  "Cloud Native Java Developer",
                  1000,
                  "AWS Developer",
                  1000,
                ]}
              />
            </h1>
            <p className='pt-10 animate__animated animate__bounceInRight'>
              A passionate Java Developer having an experience of building Full Stack Web Application...<br /><br />
              Loves to solve real world problems with latest tech stack.
            </p>
            <div className="social-media-div">

              <a href='https://www.linkedin.com/in/abhijitjadhav1998/' className="icon-button linkedin" target="_blank" rel="noopener noreferrer">
                <i className="uil-linkedin"></i>
                <span></span>
              </a>

              <a href='https://github.com/abhijitjadhav1998' className="icon-button github" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github"></i>
                <span></span>
              </a>

              <a href='mailto:abhijit.jadhav1998@gmail.com' className="icon-button google" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-envelope-info"></i>
                <span></span>
              </a>
              <a href='https://abhijithjadhav.medium.com/' className="icon-button medium" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-medium-m"></i>
                <span></span>
              </a>
            </div>
            <div>
              <a href='https://drive.google.com/file/d/1g9ibIevUGWmW3Sh9gi9-jHUVR8BJFdkP/view?usp=sharing' target="_blank" className='learn-more animate__animated animate__bounceInUp'>
                <span className='circle' aria-hidden='true'>
                  <span className='icon arrow'></span>
                </span>
                <span className='button-text'>Resume</span>
              </a>
            </div>

          </div>
          <div className='col-12 col-lg-6'>
            <div className='hero-img animate__animated animate__bounceInDown fadeOutUpBig'>
              <img src={slider} alt='Abhijit Full stack developer' />
            </div>
          </div>
        </div>
      </div>
    </header>

  );
}

export default Home;
