// ProjectList.tsx
const ProjectList = () => {
    return (
      <section id="projects" className="bg-white py-5">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row g-4">
            {/* Example project card */}
            <div className="col-md-4">
              <div className="card h-100 shadow">
                <img src="/images/project1.png" className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Project Title</h5>
                  <p className="card-text">A brief description of the project you built.</p>
                  <a href="#" className="btn btn-outline-primary">View Project</a>
                </div>
              </div>
            </div>
            {/* Duplicate and replace for other projects */}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectList;
  