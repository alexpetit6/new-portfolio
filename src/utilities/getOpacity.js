export function getOpacity(setOpacity, ref) {
  if (ref.current) {
    const portPos = ref.current.getBoundingClientRect().y
    setOpacity((1 - (portPos / (window.innerHeight))) * 2)
  }
}