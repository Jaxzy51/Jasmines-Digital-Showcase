import myImage from '../../assets/jasmine.png'; // make sure the path is correct

function About() {
  return (
    <div className="container text-center mt-5">
      {/* Image Circle */}
      <div className="d-flex justify-content-center mb-4">
        <img
          src={myImage}
          alt="Jasmine"
          className="rounded-circle shadow"
          style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        />
      </div>

      {/* Heading */}
      <h1 className="mb-3">Hi, I’m Jasmine 👋</h1>

      {/* Description */}
      <p className="lead">
        Welcome to my digital showcase. I’m passionate about web development, design, and building meaningful projects.
        <br />
        Feel free to explore my portfolio to see what I’ve been working on!
      </p>
    </div>
  );
}

export default About;


  