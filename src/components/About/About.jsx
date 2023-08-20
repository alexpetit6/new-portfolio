import './About.css'
import { useState } from 'react'
export default function About({ scrollY }) {
  const [opacity, setOpacity] = useState(0.25)
  // const [offset, setOffset] = useState(0)
  
  function getOpacity(scrollY, setOpacity, id) {
    const offsetTop = document.getElementById(id).offsetTop
    const opacity = scrollY / (offsetTop / 2);
    opacity <= 0.25 ? setOpacity(0.25) : setOpacity(opacity);
  }

  window.addEventListener('scroll', () => getOpacity(scrollY, setOpacity, 'top'))
  // function getOffset() {
  //   setOffset(document.getElementById('top').offsetTop)
  // }

  return (
    <div className='text-center about-text' id='top' style={ {opacity: `${opacity}`}}>
      <h1>My name's Alex.</h1>
      <h4>More specifically: Alexander Petit.</h4>
      <div>
        <h6 id='contact-header'>Here's some contact info: </h6> 
        <a href="https://www.linkedin.com/in/alex-petit-large/" target='_blank' rel='noreferrer'><img className='contact-logos' src="images/logos/In-Blue-21.png" alt="LinkedIn"/></a>
        <a href="https://github.com/alexpetit6" target='_blank' rel='noreferrer'><img className='contact-logos' src="images/logos/github-mark.png" alt="GitHub"/></a>
        <h6>Renton, WA</h6>
        &nbsp;|&nbsp;
        <h6>alexpetit6@gmail.com</h6>
      </div>
      {/* <button onClick={() => getOpacity(scrollY, setOpacity, 'top')}>get opacity</button> */}
      {/* <button onClick={getOffset}>get offset</button> */}
      {/* <h3>opacity: {opacity}</h3> */}
      {/* <h3>offset: {offset}</h3> */}
      {/* <h2>{scrollY}</h2> */}
    </div>
  )
}