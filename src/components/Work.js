import React from 'react'
import '../styles/Work.css'
import amazon from '../assets/Amazon_Clone.png'
import hijab from '../assets/Hijab_Web.png'
import parallax from '../assets/Parallax_Scrolling.png'
import html_form from '../assets/Html_Form.png'

function Work() {
  return (
    <div class='work-cont'>
      <div class='work-heading'>
          <h2><span class='num'>03. </span>Something I've built</h2>
      </div>
      <div class='work-content'>
        <div class='work-text-content'>
          <p><span class='num'>Personal Project</span></p>
          <h3>Amazon Clone Project</h3>
          <p>I have developed Html, Css clone project. This project signoficantly improved my designing
             and frontend development skills.
          </p>
          <p>I have used external css for fonts from font-awesome. </p>
          <h4 class='num'><a href='https://github.com/Asiya-Sohail/Amazon_Clone' 
          target="_blank" rel="noopener noreferrer">Show</a></h4>
        </div>
        <div class='work-img-content'>
          <img src={amazon} alt='amazon'/>
        </div>
      </div>
      <div class='work-content'>
      <div class='work-img-content'>
          <img src={hijab} alt='hijab'/>
        </div>
        <div class='work-text-content'>
          <p><span class='num'>Assignment Project</span></p>
          <h3>React Hijab Project</h3>
          <p>I have developed Hijab Website, by applying the concepts of react js learnt in the classes. I have
            utilized the concepts of functional components and external css.
          </p>
          <p>This project enhanced my skills in development through React JS. </p>
          <h4 class='num'><a href='https://github.com/Asiya-Sohail/Assignment_1_React_JS' 
          target="_blank" rel="noopener noreferrer">Show</a></h4>
        </div>
      </div>
      <div class='work-content'>
        <div class='work-text-content'>
          <p><span class='num'>Personal Project</span></p>
          <h3>Parallax Scrolling Web Project</h3>
          <p>I have explored animation through JavaScript and used in this website, I have used the concepts 
            like Z score and transform in this website.
          </p>
          <p>This project gave me confidence to make modern animated websites.</p>
          <h4 class='num'><a href='https://github.com/Asiya-Sohail/Parallax_Scrolling_Website' 
          target="_blank" rel="noopener noreferrer">Show</a></h4>
        </div>
        <div class='work-img-content'>
          <img src={parallax} alt='parallax'/>
        </div>
      </div>
      <div class='work-content'>
      <div class='work-img-content'>
          <img src={html_form} alt='hijab'/>
        </div>
        <div class='work-text-content'>
          <p><span class='num'>Personal Project</span></p>
          <h3>Html Form Project</h3>
          <p>I have developed a working form with beautiful background and stylish css. This was my first poject 
            in Html Css, and it has significance because of being the starting point of this journey.
          </p>
          <p>This project significantly enhanced my skills. </p>
          <h4 class='num'><a href='https://github.com/Asiya-Sohail/HTML-FORM' 
          target="_blank" rel="noopener noreferrer">Show</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Work