import profileImg from "/german-blue.webp";

const About = () => {
  return (
    <section className="about">
      <div className="about__text-box">
        <div className="about__profile-box">
          <img className="about__img" alt="German" src={profileImg} />
        </div>
        <h1 className="about__title">About Germán</h1>
        <h5 className="about__subtitle">
          Germán is a México based Web Developer with 7 years of experience
          building digital products. I build (and sometimes design) beautiful
          user-centered interfaces for web & mobile applications using web
          technologies.
        </h5>
      </div>
    </section>
  );
};

export default About;
