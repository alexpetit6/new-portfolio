import './About.css'
import { useState, useRef } from 'react'
import { getOpacity } from '../../utilities/getOpacity'
import ContactInfo from '../ContactInfo/ContactInfo';
import Skills from '../Skills/Skills';

export default function About() {
  const [opacity, setOpacity] = useState(0.25);
  // const [offset, setOffset] = useState(0)

  const expandedRef = useRef(null);
  const expandAboutRef = useRef(null);
  const aboutRef = useRef(null);

  function handleExpand() {
    expandedRef.current.style.height = `${expandedRef.current.scrollHeight}px`;
    expandAboutRef.current.style.height = '0'
  }

  function handleCollapse() {
    expandedRef.current.style.height = '0'
    expandAboutRef.current.style.height = `${expandAboutRef.current.scrollHeight}px`
  }

  window.addEventListener('scroll', () => getOpacity(setOpacity, aboutRef))
  
  return (
    <div ref={aboutRef} className='text-center about-text' id='top' style={ {opacity: `${opacity}`}}>
      <h1>My name's Alex.</h1>
      <ContactInfo />
      {/* <h4>More specifically: Alexander Petit.</h4> */}
      <div id='about-gif'>
        <div ref={expandAboutRef} id='expand-about-btn' onClick={handleExpand}>
          <h2>Want to know more about me?</h2>
        </div>
      </div>
      <div ref={expandedRef} id='about-expanded'>
        <h5>A lil’ tidbit</h5>
        <button className='btn' onClick={handleCollapse}>X</button>
        <div id='about-p'>
          <p>
            To be a little more specific my full name is Alexander Petit. I’m a full-stack developer with a preference for front-end. 
            I value the aesthetics of a website and the functionality equally. Both are important in their own regards, and I strive to balance them. 
            But if there’s one thing you should really know about me: it’s that <strong>I love to learn.</strong>
          </p>
          <p>
            I keep myself in a constant state of education and challenge. Take this portfolio for example; 
            I could’ve easily finalized a standard portfolio website in a day, maybe two, if I just wrote it 
            in EJS, set up some simple routes and navigation, an easy navbar off of bootstrap, and a little 
            CSS. Instead I completely diverged from what I was already comfortable with 
            to make a highly dynamic SPA. In the time I’ve spent building this project I have learned countless 
            mechanics and features. I’ve gained insight into handy Window properties such as innerHeight and 
            Element methods like getBoundingClientRect. With the two combined I made components that fade depending on an 
            element's position in the viewport. For me, the challenge of having to learn new methods and techniques to 
            achieve a goal doesn’t stop me in any area of life, whether it’s rock climbing, Noita (a 
            brutally difficult video game with elements of gamified programming), or coding; the ominous presence 
            of the unknown is to me an exciting invitation to learn and grow.
          </p>
        </div>
      </div>
      <Skills />
      

      {/* <button onClick={viewport}>get offset</button>
      <h3>offset: {offset}</h3> */}
      {/* <button onClick={() => getOpacity(scrollY, setOpacity, 'top')}>get opacity</button> */}
      {/* <h3>opacity: {opacity}</h3> */}
      {/* <h2>{scrollY}</h2> */}
    </div>
  )
}