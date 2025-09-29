import "./skills.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

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
    const inView = useInView(sectionRef, { amount: 0.3, margin: "0px 0px -10% 0px" });

    // Variants memoized to avoid recreation
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { when: "beforeChildren", staggerChildren: 0.08, duration: 0.6, ease: [0.25, 0.8, 0.35, 1] }
        },
        exit: { opacity: 0, y: -80, transition: { duration: 0.4 } }
    }), []);

    const rowVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.35 } }
    }), []);

    const pillVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 18, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -12, scale: 0.95, transition: { duration: 0.3 } }
    }), []);

    const softPillVariants = useMemo(() => ({
        hidden: { opacity: 0, scale: 0.6, rotate: -8, y: 14, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 160, damping: 18, mass: 0.6 }
        },
        exit: { opacity: 0, scale: 0.7, rotate: 6, y: -10, transition: { duration: 0.25 } }
    }), []);

    useEffect(() => {
        controls.start(inView ? "visible" : "hidden");
    }, [inView, controls]);

    return (
        <motion.div
            className="skills-section"
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            exit="exit"
        >
            <h2 className="skills-subtitle">TECHNICAL SKILLS</h2>
            <div className="skills-groups">
                {technicalSkills.map((group) => (
                    <motion.div
                        className="skill-row"
                        key={group.title}
                        variants={rowVariants}
                    >
                        <div className="skill-category">{group.title}</div>
                        <ul className="skill-list">
                            {group.skills.map((skill) => (
                                <motion.li
                                    key={skill}
                                    className="skill-item"
                                    variants={pillVariants}
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
            <h2 className="skills-subtitle">SOFT SKILLS</h2>
            <motion.div className="soft-skills-pills" variants={rowVariants}>
                {softSkills.map((skill, idx) => (
                    <motion.span
                        key={skill}
                        className="soft-skill-pill"
                        variants={softPillVariants}
                        transition={{ delay: idx * 0.05 }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;
