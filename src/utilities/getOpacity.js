export function getOpacity(setOpacity, ref) {
  if (ref.current) {
    const portPos = ref.current.getBoundingClientRect().y;
    const opacity = (0.8 - (portPos / (window.innerHeight))) * 2;
    opacity < 0.2 ? setOpacity(0.2) : setOpacity(opacity)
  }
}