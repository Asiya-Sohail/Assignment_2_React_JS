import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <div class='header'>
        <div class="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div class='list'>
            <ul>
            <li><a href="#about"><span class='num'>01. </span>About</a></li>
            <li><a href="#experience"><span class='num'>02. </span>Experience</a></li>
            <li><a href="#work"><span class='num'>03. </span>Work</a></li>
            <li><a href="#contact"><span class='num'>04. </span>Contact</a></li>
            </ul>
            <div id='cv'>CV</div>
        </div>
    </div>

  )
}

export default Header