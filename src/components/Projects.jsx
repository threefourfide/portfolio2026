
import React from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import ArrowIcon from './ArrowIcon.jsx';

export default function Projects() {
    return (
        <section className="projects">
            <div className="see-all">
                <a className="see-all-link" href="#/projects">
                    SEE ALL
                    <ArrowIcon size={18} />
                </a>
            </div>

            <div className="project-grid">
                {projects.slice(0, 2).map((project) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}
