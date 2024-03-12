import './Carousel.css';
import { useState, createRef, useRef, useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';

export default function Carousel() {
  const imgs = ['/images/climbing-thumbnail.jpg', '/images/katie-thumbnail.jpg', '/images/macro-thumbnail.jpg', '/images/svgc-thumbnail.jpg']
  const [order, setOrder] = useState({
    prev: imgs.length - 1,
    current: 0,
    next: 1
  });

  const refs = useRef([]);
  const shadowRef = useRef(null);

  useEffect(() =>  {
    imgs.forEach((i, idx) => {
      if (!Object.values(order).includes(idx)) refs.current[idx].className='hide'
    });
    refs.current[order.prev].className = `prev${refs.current[order.prev].className.slice(5)}`;
    refs.current[order.current].className =  `curr${refs.current[order.current].className.slice(5)}`;
    refs.current[order.next].className =  `next${refs.current[order.next].className.slice(5)}`;
  }, [order]);

  function wrappedIndex(arr, idx) {
    return ((idx % arr.length) + arr.length) % arr.length;
  }

  function handleCycle(next) {
    let operand = 1;
    let type = 'forward';

    if (!next) {
      operand = -1;
      type = 'back';
    };

    setOrder({
      prev: wrappedIndex(imgs, order.prev + operand),
      current: wrappedIndex(imgs, order.current + operand),
      next: wrappedIndex(imgs, order.next + operand)
    });

    //trigger box-shadow animation
    shadowRef.current.className = '';
    //trigger reflow
    void shadowRef.current.offsetWidth;
    console.log(shadowRef.current.className, 'nada')
    shadowRef.current.className = `box-shadow ${type}`;
    refs.current.forEach((r) => r.className=`${r.className.slice(0, 5)}  ${type}`)
  }

  // function handlePrev() {
  //   setOrder({
  //     prev: wrappedIndex(imgs, order.prev - 1),
  //     current: wrappedIndex(imgs, order.current - 1),
  //     next: wrappedIndex(imgs, order.next - 1)
  //   });

  //   refs.current.forEach((r) => r.className=`${r.className.slice(0, 5)}  back`)
  //   console.log(refs.current)
  // }
  
  // function handleNext() {
  //   setOrder({
  //     prev: wrappedIndex(imgs, order.prev + 1),
  //     current: wrappedIndex(imgs, order.current + 1),
  //     next: wrappedIndex(imgs, order.next + 1)
  //   });
  //   refs.current.forEach((r) => r.className=`${r.className.slice(0, 5)}  forward`)
  //   console.log(refs.current)
  // }

  //need seperate element to animate box-shadow with opacity for performance
  const Imgs = imgs.map((i, idx) => <img src={i} ref={el => refs.current[idx] = el}/>)

  return (
    // <Fancybox newClass="carousel-container">
      <div className="carousel">
        <i onClick={() => handleCycle(false)} className="fa-solid fa-chevron-left"></i>
        <div className='carousel-imgs'>
          <div ref={shadowRef} className='box-shadow'></div>
          {Imgs}
        </div>
        <i onClick={() => handleCycle(true)} className="fa-solid fa-chevron-right"></i>
      </div>
    // </Fancybox>
  )
}