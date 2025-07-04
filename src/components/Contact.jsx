const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="section-number">04.</span> What's Next?
          </h2>
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-description">
            Yes, I'm currently looking for new Challenges, So... my inbox is
            always open. Whether you have a question or just want to say hi, I'll
            get back to you!
          </p>
          <button
            className="btn btn-outline btn-large"
            onClick={() => window.open('mailto:akintayodavid2003@gmail.com')}
          >
            Say Hello
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact