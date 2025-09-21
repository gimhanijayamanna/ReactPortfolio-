import "./skills.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const technicalSkills = [
    {
        title: "Programming Languages",
        skills: ["C", "C++", "Python", "Java", "Javascript"],
    },
    {
        title: "Web Development",
        skills: ["HTML", "CSS", "Javascript", "NodeJs", "ReactJs", "NextJs", "Tailwind CSS"],
    },
    {
        title: "Database",
        skills: ["MySQL", "MSSQL", "MongoDB"],
    },
    {
        title: "UI / UX Designing",
        skills: ["Figma", "Canva"],
    },
    {
        title: "IDE’S",
        skills: ["VS Code", "IntelliJ", "CLion", "Visual Studio"],
    },
    {
        title: "Version Controlling",
        skills: ["Git (GitHub)"]
    },
    {
        title: "Project Management Tools",
        skills: ["Trello"]
    }
];

const softSkills = [
    "Leadership",
    "Time Management",
    "Teamwork",
    "Communication (Fluent in English and Sinhala)",
    "Adaptability to change"
];

const Skills = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                controls.start({
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", duration: 0.8, staggerChildren: 0.12 }
                });
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <div className="skills-section" ref={sectionRef}>
            <h1 className="skills-title">SKILLS</h1>
            <h2 className="skills-subtitle">TECHNICAL SKILLS</h2>
            <div className="technical-skills-row">
                {technicalSkills.map((group, idx) => (
                    <motion.div
                        className="skill-box"
                        key={group.title}
                        whileHover={{ scale: 1.08, boxShadow: "0 8px 32px #0c0c1d99" }}
                        initial={{ opacity: 0, x: -80 }}
                        animate={controls}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <h3 className="skill-box-title">{group.title}</h3>
                        <ul className="skill-list">
                            {group.skills.map((skill) => (
                                <li key={skill} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <h2 className="skills-subtitle">SOFT SKILLS</h2>
            <div className="soft-skills-row">
                {softSkills.map((skill, idx) => (
                    <motion.div
                        className="soft-skill-box"
                        key={skill}
                        whileHover={{ scale: 1.12, boxShadow: "0 12px 32px #0c0c1d99" }}
                        initial={{ opacity: 0, x: -80 }}
                        animate={controls}
                        transition={{ duration: 0.6, delay: idx * 0.1 + 0.5 }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
