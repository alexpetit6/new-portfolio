import './Carousel.css';
import { useState } from 'react';
import { Fancybox } from '@fancyapps/ui';

export default function Carousel() {
  const imgs = ['/images/climbing-thumbnail.png', '/images/katie-thumbnail.png', '/images/macro-thumbnail.png', '/images/svgc-thumbnail.png']
  const [order, setOrder] = useState({
    prev: imgs.length - 1,
    current: 0,
    next: 1
  });

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
  }

  return (
    // <Fancybox newClass="carousel-container">
      <div className="carousel">
        <i onClick={handlePrev} class="fa-solid fa-chevron-left"></i>
        <img src={imgs[order.prev]} alt="" className="prev" />
        <img src={imgs[order.current]} alt="" className="current" />
        <img src={imgs[order.next]} alt="" className="next" />
        <i onClick={handleNext} class="fa-solid fa-chevron-right"></i>
      </div>
    // </Fancybox>
  )
}