
import React from 'react';
import ArrowIcon from './ArrowIcon.jsx';

export default function ProjectCard({ project: p }) {
    return (
        <article className="project card">
            <div className="project-top">
                <div>
                    <h3>{p.name}</h3>
                    <small>{p.platform}</small>
                </div>

                <span>
                    {p.type.toUpperCase()}
                    <br />
                    {p.year}
                </span>
            </div>

            <p>{p.description}</p>

            <div className="tags">
                {p.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            {p.url ? (
                <a
                    className="button project-button"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Project
                    <ArrowIcon direction="diagonal" size={16} />
                </a>
            ) : (
                <button
                    className="button project-button"
                    disabled
                    title="Project link coming soon"
                >
                    View Project
                    <ArrowIcon direction="diagonal" size={16} />
                </button>
            )}
        </article>
    );
}
