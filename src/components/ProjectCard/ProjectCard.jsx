import './ProjectCard.css';

export default function ProjectCard ({title, img}) {
  return (
    <div className="project-card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <img src={img} alt="where is it?" className="card-img" />
    </div>
  );
}