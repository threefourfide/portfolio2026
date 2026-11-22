import React from 'react';

export default function Navbar() {
  const links = [
    ['ABOUT', 'about'], ['PROJECTS', 'projects'], ['SKILLS', 'skills'],
    ['CERTIFICATION', 'certification'], ['CONTACT', 'contact']
  ];

  return (
    <header className="nav">
      <a className="logo" href="#about" aria-label="FM. Home">FM.</a>
      <nav aria-label="Main navigation">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
      <a className="button hello" href="#contact">
        <span>say hello</span>
        <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M2.5 3.5 22 12 2.5 20.5l3.7-7.1L15 12l-8.8-1.4z"/></svg>
      </a>
    </header>
  );
}
