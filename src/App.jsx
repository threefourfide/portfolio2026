
import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import AllProjects from './pages/AllProjects.jsx';
import ArrowIcon from './components/ArrowIcon.jsx';
import './projects-page.css';

export default function App() {
    const [hash, setHash] = useState(window.location.hash);
    const all = hash === '#/projects';

    // Smooth scroll-driven animation for Projects & Skills
    useEffect(() => {
        if (all) return;

        const panel = document.querySelector('.work');
        if (!panel) return;

        const reducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        if (reducedMotion.matches) {
            panel.style.transform = 'none';
            return;
        }

        const travel = 180;
        const scrollDistance = 650;
        const smoothness = 0.065;

        let current = travel;
        let target = travel;
        let frameId = null;

        const clamp = (value) =>
            Math.min(1, Math.max(0, value));

        const updateTarget = () => {
            const rect = panel.getBoundingClientRect();

            // Remove the current transform from the measurement
            const originalTop = rect.top - current;

            const progress = clamp(
                (window.innerHeight - originalTop) / scrollDistance
            );

            // Smoothstep easing
            const eased = progress * progress * (3 - 2 * progress);

            target = travel * (1 - eased);
        };

        const animate = () => {
            current += (target - current) * smoothness;

            if (Math.abs(target - current) < 0.1) {
                current = target;
            }

            panel.style.transform =
                `translate3d(0, ${current}px, 0)`;

            if (Math.abs(target - current) >= 0.1) {
                frameId = requestAnimationFrame(animate);
            } else {
                frameId = null;
            }
        };

        const onScroll = () => {
            updateTarget();

            if (frameId === null) {
                frameId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('scroll', onScroll, {
            passive: true
        });

        window.addEventListener('resize', onScroll);

        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);

            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }

            panel.style.transform = '';
        };
    }, [all]);

    // Listen for navigation changes
    useEffect(() => {
        const update = () => {
            setHash(window.location.hash);
        };

        window.addEventListener('hashchange', update);

        return () => {
            window.removeEventListener('hashchange', update);
        };
    }, []);

    // Update page title and handle navigation scrolling
    useEffect(() => {
        document.title = all
            ? 'Projects | FM.'
            : 'FM. | Portfolio 2026';

        const frame = requestAnimationFrame(() => {
            if (all || !hash) {
                window.scrollTo({
                    top: 0,
                    behavior: 'instant'
                });
                return;
            }

            document
                .getElementById(hash.slice(1))
                ?.scrollIntoView({ block: 'start' });
        });

        return () => cancelAnimationFrame(frame);
    }, [hash, all]);

    // Back to top functionality
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        document
            .querySelector('.project-card-scroll')
            ?.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
    };

    return (
        <>
            <Navbar />

            {all ? (
                <AllProjects />
            ) : (
                <main>
                    <Hero />

                    <div className="work-heading" id="projects">
    <span>recent</span>
    <h2>PROJECTS</h2>
</div>

                    <div className="work">
                        <Projects />
                        <Skills />
                    </div>

                    <Certifications />
                    <Contact />
                </main>
            )}

            {!all && (
                <footer>
                    <span>
                        © 2026 Fidelis May M. Maglaque — Makati City, PH
                    </span>

                    <button
                        type="button"
                        className="back-to-top"
                        onClick={handleBackToTop}
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        <ArrowIcon direction="up" size={28} />
                    </button>
                </footer>
            )}
        </>
    );
}
