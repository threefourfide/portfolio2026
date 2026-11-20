import React from 'react';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>CONTACT</h2>

            <p>
                I am interested in taking internships, contribute
                <br className="desktop-break"/>
                to the UI/UX side of systems and willing to learn
                <br className="desktop-break"/>
                more IT-related skills.
            </p>

            <div className="contact-links">
                <a
                    className="outline"
                    href="mailto:maglaquefidelis@gmail.com"
                >
                    ➤ &nbsp; maglaquefidelis@gmail.com
                </a>

                <a
                    className="outline"
                    href="https://www.linkedin.com/in/fidelis-maglaque-75044b448/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/linkedinicon.png"
                        className="contact-icon"
                        alt=""
                    />
                    LinkedIn
                </a>

                <a
                    className="outline"
                    href="https://ph.jobstreet.com/profiles/fidelis-maglaque-npsjz4k6tw"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/images/jobstreeticon.png"
                        className="contact-icon"
                        alt=""
                    />
                    Jobstreet
                </a>
            </div>
        </section>
    );
}