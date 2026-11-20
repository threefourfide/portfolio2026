import React from 'react';
import {projects} from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
export default function Projects(){return <section className="projects"><div className="see-all"><a className="see-all-link" href="#/projects">SEE ALL ❯</a></div><div className="project-grid">{projects.slice(0,2).map(p=><ProjectCard key={p.name} project={p}/>)}</div></section>}
