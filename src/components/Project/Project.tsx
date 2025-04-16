import './Project.css';

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  demoLink: string;
  repoLink: string;
}

const Project = ({ title, image, description, demoLink, repoLink }: ProjectProps) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-img" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;

