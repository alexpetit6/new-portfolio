import './About.css'
import { useState } from 'react'
import { getOpacity } from '../../utilities/getOpacity'

export default function About({ scrollY }) {
  const [opacity, setOpacity] = useState(0.25)
  // const [offset, setOffset] = useState(0)
  
  window.addEventListener('scroll', () => getOpacity(scrollY, setOpacity, 'top'))

  return (
    <div className='text-center about-text' id='top' style={ {opacity: `${opacity}`}}>
      <h1>My name's Alex.</h1>
      <h4>More specifically: Alexander Petit.</h4>
      <div id='about-gif'>
        <div id='expand-about'>
          <h2>Want to know more about me?</h2>
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