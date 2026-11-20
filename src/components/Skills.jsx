
import React from 'react';

const cards = [
    {
        title: 'Tools & Collaboration',
        groups: [
            [
                'SYSTEM DEVELOPMENT',
                ['VSCode', 'NetBeans', 'Gemini', 'Claude', 'Vercel', 'Render']
            ],
            [
                'COLLABORATIVE TOOLS',
                [
                    'Canva',
                    'Figma',
                    'Microsoft Teams',
                    'Microsoft Word',
                    'Google Drive',
                    'GitHub',
                    'Discord'
                ]
            ]
        ]
    },
    {
        title: 'Mobile & Web Development',
        subtitle: 'BASED ON PAST PROJECTS',
        groups: [
            [
                'LANGUAGES',
                ['JavaScript', 'Python', 'Dart']
            ],
            [
                'FRONT END INTERFACES',
                ['React', 'HTML/CSS', 'Figma', 'Flutter']
            ],
            [
                'DATABASES',
                ['MySQL', 'MongoDB']
            ]
        ]
    },
    {
        title: 'Skills Tier',
        subtitle: 'BASED ON LISTED TAGS',
        groups: [
            [
                'BEGINNER',
                ['Figma', 'Dart']
            ],
            [
                'INTERMEDIATE (Learning)',
                [
                    'Microsoft Word',
                    'Google Drive',
                    'Python',
                    'React Native',
                    'ReactJS',
                    'HTML/CSS',
                    'GitHub',
                    'MongoDB'
                ]
            ],
            [
                'ADVANCED',
                ['Canva', 'Microsoft Teams', 'Discord']
            ]
        ]
    }
];

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <h2>KNOWLEDGE &amp; SKILLS</h2>

            <div className="skill-grid">
                {cards.map((card) => (
                    <article className="card skill" key={card.title}>
                        <h3>{card.title}</h3>

                        {card.subtitle && (
                            <small className="muted">
                                {card.subtitle}
                            </small>
                        )}

                        {card.groups.map(([label, tags]) => (
                            <div className="skill-group" key={label}>
                                <h4>{label}</h4>

                                <div className="tags">
                                    {tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </article>
                ))}
            </div>
        </section>
    );
}
