import './Projects.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../models/projects';

export default function Projects () {
  const ProjectCards = projects.map((p) => <ProjectCard title={p.title} img={p.img} />);

  return (
    <div id="projects">
      <div id='project-dividers'>
        <div id='vert-div'></div>
        <div id='horiz-div'></div>
      </div>
      <div id="project-cards">
        {ProjectCards}
      </div>
    </div> 
  );
}