import React from 'react';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>CONTACT</h2>
      <p>
        I am interested in taking internships, contribute to the UI/UX side of systems
        and willing to learn more IT-related skills.
      </p>
      <div className="contact-links">
        <a className="outline" href="mailto:maglaquefidelis@gmail.com">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M2.5 3.5 22 12 2.5 20.5l3.7-7.1L15 12l-8.8-1.4z"/></svg>
          <span>maglaquefidelis@gmail.com</span>
        </a>
        <a className="outline" href="https://www.linkedin.com/in/fidelis-maglaque-75044b448/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkedinicon.png" className="contact-icon" alt="" />
          <span>LinkedIn</span>
        </a>
        <a className="outline" href="https://ph.jobstreet.com/profiles/fidelis-maglaque-npsjz4k6tw" target="_blank" rel="noopener noreferrer">
          <img src="/images/jobstreeticon.png" className="contact-icon" alt="" />
          <span>Jobstreet</span>
        </a>
      </div>
    </section>
  );
}
