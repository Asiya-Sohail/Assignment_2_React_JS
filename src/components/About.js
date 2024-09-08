import React from 'react'
import '../styles/About.css'
import img from '../assets/me.png'

function About() {
  return (
    <div class='about-cont'>
      <div class='heading'>
        <h2><span class='num'>01. </span>About Me</h2>
      </div>
      <div class='content'>
      <div class='text-content'>
          <p>Hello! I am Asiya Sohail, a frontend developer and student of NED University from Karachi, Pakistan.</p>
          <p>I have good knowledge of developing Html, Css clones and animated websites.
            I have also developed some amazing dashboards using power bi and excel as my 
            university assignments.
          </p>
          <p>As a student, I not only aim to get good grades but practical skills and soft skills as well.
            I like to get into challenging tasks and competitions that significantly improve my skills and 
            thinking ability.
          </p>
          <p>
            I aim to get good technical skills through out my 3rd semester and aiming to do internships to apply 
            my knowledge and learn practical skills in the next semester. 
          </p>
          <p>Here are few technologies I have been working with</p>
          <div class='list'>
          <ul>
            <li><span class='num'>&#8594;  </span>C</li>
            <li><span class='num'>&#8594;  </span>C++</li>
            <li><span class='num'>&#8594;  </span>Python</li>
            <li><span class='num'>&#8594;  </span>Javascript</li>
          </ul>  
          <ul>  
            <li><span class='num'>&#8594;  </span>React</li>
            <li><span class='num'>&#8594;  </span>Html</li>
            <li><span class='num'>&#8594;  </span>Css</li>
            <li><span class='num'>&#8594;  </span>Microsoft Excel</li>
          </ul>
        </div>
      </div>
      <div class='img-content'>
        <img src={img} alt='me'/>
      </div>
      </div>
      
    </div>
  )
}

export default About