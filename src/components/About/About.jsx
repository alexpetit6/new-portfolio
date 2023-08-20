import './About.css'
import { useState } from 'react'

export default function About({ scrollY }) {
  const [opacity, setOpacity] = useState(0.25)
  // const [offset, setOffset] = useState(0)
  
  function getOpacity(scrollY, setOpacity, id) {
    const offsetTop = document.getElementById(id).offsetTop
    const opacity = scrollY / (offsetTop / 2);
    if (opacity <= 0.25) return
    setOpacity(opacity);
  }

  // function getOffset() {
  //   setOffset(document.getElementById('top').offsetTop)
  // }

  return (
    <div className='text-center about-text' id='top'>
      <h1>My name's Alex.</h1>
      <button onClick={() => getOpacity(scrollY, setOpacity, 'top')}>get opacity</button>
      {/* <button onClick={getOffset}>get offset</button> */}
      <h3>opacity: {opacity}</h3>
      {/* <h3>offset: {offset}</h3> */}
      <h2>{scrollY}</h2>
    </div>
  )
}