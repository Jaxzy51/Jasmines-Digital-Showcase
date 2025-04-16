import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Jasmine Mohamed</p>
      <div className="footer-links">
        <a href="https://github.com/jasmine" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/jasmine" target="_blank">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
