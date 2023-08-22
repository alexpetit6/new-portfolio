import './About.css'
import { useState, useRef } from 'react'
import { getOpacity } from '../../utilities/getOpacity'
import ContactInfo from '../ContactInfo/ContactInfo';

export default function About({ scrollY }) {
  const [opacity, setOpacity] = useState(0.25);
  // const [offset, setOffset] = useState(0)

  const expandedRef = useRef(null);
  const expandAboutRef = useRef(null);
  
  

  function handleExpand() {
    expandedRef.current.style.height = `${expandedRef.current.scrollHeight}px`;
    expandAboutRef.current.style.height = '0'
  }

  function handleCollapse() {
    expandedRef.current.style.height = '0'
    expandAboutRef.current.style.height = `${expandAboutRef.current.scrollHeight}px`
  }

  window.addEventListener('scroll', () => getOpacity(scrollY, setOpacity, 'top'))

  return (
    <div className='text-center about-text' id='top' style={ {opacity: `${opacity}`}}>
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
            To be a little more specific my name is Alexander Petit. I’m a full-stack developer with a preference for front-end. 
            I value the aesthetics of a website and the functionality equally. Both are important in their own regards, and I strive to balance them. 
            But if there’s one thing you should really know about me it’s that I love to learn.
          </p>
          <p>
            I keep myself in a constant state of learning and challenge. Take this portfolio for example; 
            I could’ve easily finished a simple portfolio website in a day, maybe two, if I just wrote it 
            in EJS, set up some simple routes and navigation, an easy navbar off of bootstrap, and a little 
            CSS. Instead I went for a completely different approach from what I was already comfortable with 
            to make a highly dynamic SPA. In the time I’ve spent with this project I have learned countless 
            mechanics and features. I’ve been enlightened about handy Window properties such as scrollY and 
            Element properties like offsetTop. With the two combined I made text that fades depending on a 
            user’s scroll position. For me, the challenge of having to learn new methods and techniques to 
            achieve a goal doesn’t stop me in any area of life, whether it’s rock climbing, Noita (a 
            challenging video game with elements of gamified programming), or coding; the ominous presence 
            of the unknown is for me an exciting invitation to learn and grow.
          </p>
        </div>
      </div>
      

      {/* <button onClick={() => getOpacity(scrollY, setOpacity, 'top')}>get opacity</button> */}
      {/* <button onClick={getOffset}>get offset</button> */}
      {/* <h3>opacity: {opacity}</h3> */}
      {/* <h3>offset: {offset}</h3> */}
      {/* <h2>{scrollY}</h2> */}
    </div>
  )
}