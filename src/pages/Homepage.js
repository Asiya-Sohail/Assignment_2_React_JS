import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Exp from '../components/Experience';
import Work from '../components/Work';
import Contact from '../components/Contact';
import '../styles/Homepage.css';


function Homepage() {
  return (
    <div class='home'>
        <div class='head'>
          <Header />
        </div>

        <div class='body'>
            <div class='container'>
              <p class='hi'><b>Hi, my name is</b></p>
              <p class='name'><b>Asiya Sohail</b></p>
              <p class='profession'><b>Frontend Developer, Student</b></p>
              <p class='cont'>
                As a student, I am exploring different technologies, learnt html, css, js, excel etc. 
                I have developed various html, css projects, website clones and currently getting proficient 
                knowledge of JS.
              </p>
              <button class='cv'>Get in Touch</button>
              <div id='about'><About /></div>
              <div id='experience'><Exp /></div>
              <div id='work'><Work /></div>
              <div id='contact'><Contact /></div>
            </div>
        </div>
    </div>
  )
}

export default Homepage