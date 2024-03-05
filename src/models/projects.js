function imgPath(title) {
  return `/images/${title}-thumbnail.png`;
}

const projects = [
  {id: '1', title: 'Katie Newbury Portfolio', img: imgPath('katie')},
  {id: '2', title: 'SVGC', img: imgPath('svgc')},
  {id: '3', title: 'Macro Counter', img: imgPath('macro')},
  {id: '4', title: 'Climbing Advice', img: imgPath('climbing')},
];

export default projects;