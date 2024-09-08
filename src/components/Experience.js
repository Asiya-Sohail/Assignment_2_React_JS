import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience() {
  const [selectedWork, setSelectedWork] = useState('Ned Scholars');

  return (
    <div className='exp-cont'>
      <div className='exp-heading'>
        <h2><span className='num'>02. </span>Where I've Worked</h2>
      </div>
      <div className='content'>
        <div className='exp-list'>
          <ul>
            <li onClick={() => setSelectedWork('Ned Scholars')} className={selectedWork === 'Ned Scholars' ? 'active' : ''}>Ned Scholars</li>
            <li onClick={() => setSelectedWork('CodeAlpha')} className={selectedWork === 'CodeAlpha' ? 'active' : ''}>CodeAlpha</li>
          </ul>
        </div>
        <div className='exp-text-content'>
          {selectedWork === 'Ned Scholars' && (
            <div id='part-a'>
              <p>I am currently a part of <span className='num'>Ned Scholars</span>. As a scholar, 
              I am involved in various tech projects and other activities. I've 
              done projects on <span className='num'>Frontend Web Dev</span> 
              and currently working on <span className='num'>ChatGPT Assistants</span>. </p>
            </div>
          )}
          {selectedWork === 'CodeAlpha' && (
            <div id='part-b'>
              <p>I have done an internship in <span className='num'>CodeAlpha</span>. 
              As an intern, I explored various uses of <span className='num'>Python Programming</span> 
              and I also learned to work on <span className='num'>Django</span> and fetching data through 
              <span className='num'>APIs</span>. This internship significantly enhanced my skills 
              and gave me experience in solving real problems.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
