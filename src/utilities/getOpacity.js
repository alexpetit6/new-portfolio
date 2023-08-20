export function getOpacity(scrollY, setOpacity, id) {
  const offsetTop = document.getElementById(id).offsetTop
  const opacity = scrollY / (offsetTop / 2);
  opacity <= 0.25 ? setOpacity(0.25) : setOpacity(opacity);
}