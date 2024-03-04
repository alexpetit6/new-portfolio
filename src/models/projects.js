function imgPath(title) {
  return `/images/${title}-thumbnail.png`;
}

const projects = [
  {title: 'Katie Newbury Portfolio', img: imgPath('katie')},
  {title: 'SVGC', img: imgPath('svgc')},
  {title: 'Macro Counter', img: imgPath('macro')},
  {title: 'Climbing Advice', img: imgPath('climbing')},
];

export default projects;