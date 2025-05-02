// Contact.tsx
const Contact = () => {
    return (
      <section id="contact" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Contact Me</h2>
          <form className="mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  