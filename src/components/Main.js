export default function Main() {
  return (
    <main className="main-block">
      <div className="main-block">
        <h1 className="name">Laura Smith</h1>
        <h2 className="job">Frontend Developer</h2>
        <h3 className="website">laurasmith.website</h3>
      </div>
      <div className="button-block">
        <button className="email-button">
          <img src={require("../icons/email.jpg")} alt="email icon" />
          <p>Email</p>
        </button>
        <div className="space"></div>
        <button className="linkedin-button">
          <div className="linkedin-icon">
            <p>in</p>
          </div>
          <p>LinkedIn</p>
        </button>
      </div>
      <div className="additional-info-block">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}
