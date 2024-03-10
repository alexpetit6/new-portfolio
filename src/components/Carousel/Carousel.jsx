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

  // useEffect(() =>  {
  //   refs[wrappedIndex(imgs, order.prev)].current.className = 'prev';
  //   refs[wrappedIndex(imgs, order.current)].current.className = 'current';
  //   refs[wrappedIndex(imgs, order.next)].current.className = 'next';
  // }, []);

  function wrappedIndex(arr, idx) {
    return ((idx % arr.length) + arr.length) % arr.length;
  }

  function handlePrev() {
    setOrder({
      prev: wrappedIndex(imgs, order.prev - 1),
      current: wrappedIndex(imgs, order.current - 1),
      next: wrappedIndex(imgs, order.next - 1)
    });
  }

  function handleNext() {
    setOrder({
      prev: wrappedIndex(imgs, order.prev + 1),
      current: wrappedIndex(imgs, order.current + 1),
      next: wrappedIndex(imgs, order.next + 1)
    });
    console.log(refs.current[order.current])
  }


  const Preload = imgs.map((i, idx) => <img src={i} ref={el => refs.current[idx] = el} className='img-preload'/>);

  return (
    // <Fancybox newClass="carousel-container">
      <div className="carousel">
        <i onClick={handlePrev} className="fa-solid fa-chevron-left"></i>
        <div className='carousel-imgs'>
          <img src={imgs[order.prev]} alt="" className="card-one" />
          <img src={imgs[order.current]} alt="" className="card-two" />
          <img src={imgs[order.next]} alt="" className="card-three" />
        </div>
        <i onClick={handleNext} className="fa-solid fa-chevron-right"></i>
        {Preload}
      </div>
    // </Fancybox>
  )
}