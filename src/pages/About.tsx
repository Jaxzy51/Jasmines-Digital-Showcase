import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <img src="/profile.jpg" alt="Jasmine Mohamed" className="profile-pic" />
      <div className="about-text">
        <h2>Hi, I’m Jasmine 👋</h2>
        <p>
          I’ve always been captivated by technology — from childhood hours spent exploring computer games to the moment I wrote my first line of code.
          Today, I’m a passionate computer science major focused on building digital experiences that make an impact.
        </p>
        <p>
          What draws me to this field isn’t just the innovation — it’s the opportunity to be a creator in a digital world. I aim to contribute meaningful software
          that moves us forward, whether it’s through intuitive design, strong networking, or powerful logic.
        </p>
        <p>
          Technology surrounds us. My goal? To be at the heart of it — not just using it, but building it. Welcome to my digital showcase.
        </p>
      </div>
    </section>
  );
};

export default About;
