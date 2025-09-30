import "./achievements.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useMemo } from "react";

const competitions = [
    {
        title: "PearlHack 3.0",
        achievement: "Finalist",
        year: "2024-2025",
        description: "Inter-University Hackathon organized by IEEE WIE Affinity Group of Sabaragamuwa University of Sri Lanka"
    },
    {
        title: "JapuraXtream ",
        achievement: "4th Place",
        year: "2024",
        description: "An innovative hackathon organized by the University of Sri Jayewardenepura"
    },
    {
        title: "HaXtreme 2.0",
        achievement: "Participant",
        year: "2024",
        description: "Coding competition organized by the Computer Society and Communication Society of IEEE student branch in University of Ruhuna"
    },
    {
        title: "CodeRush",
        achievement: "Participant",
        year: "2024",
        description: "The Intra-Faculty Coding competition organized by the INTECS Society, Faculty of IT, University of Moratuwa"
    }
];

const extracurricular = [
    {
        title: "Co-Chairperson",
        role: "HackElite 2.0, organized by IEEE WIE Student Branch Affinity Group of University of Moratuwa",
        year: "2024"
    },
    {
        title: "Program and Event Coordination Committee Member",
        role: "IEEE WIE Student Branch Affinity Group of University of Moratuwa",
        year: "2024-present"
    },
    {
        title: "Program and Coordinating Lead",
        role: "Road To Legacy 1.0",
        year: "2023-2024"
    },
    {
        title: "Program Committee Member",
        role: "Mora UXplore 2.0, organized by IEEE Student Branch, University of Moratuwa",
        year: "2024"
    }
];

const Achievements = () => {
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

    const cardVariants = useMemo(() => ({
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
            className="achievements-section"
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            exit="exit"
        >
            <h2 className="achievements-subtitle">COMPETITIONS</h2>
            <div className="achievements-groups">
                {competitions.map((competition, index) => (
                    <motion.div
                        className="achievement-row"
                        key={`${competition.title}-${index}`}
                        variants={cardVariants}
                        transition={{ delay: index * 0.05 }}
                    >
                        <div className="achievement-header">
                            <div className="achievement-title">{competition.title}</div>
                            <div className="achievement-badges">
                                <motion.span
                                    className="achievement-badge"
                                    variants={pillVariants}
                                >
                                    {competition.achievement}
                                </motion.span>
                                <motion.span
                                    className="achievement-year"
                                    variants={pillVariants}
                                >
                                    {competition.year}
                                </motion.span>
                            </div>
                        </div>
                        <div className="achievement-description">
                            {competition.description}
                        </div>
                    </motion.div>
                ))}
            </div>

            <h2 className="achievements-subtitle">EXTRACURRICULAR ACTIVITIES</h2>
            <div className="extracurricular-cards">
                {extracurricular.map((activity, index) => (
                    <motion.div
                        key={`${activity.title}-${index}`}
                        className="extracurricular-card"
                        variants={cardVariants}
                        transition={{ delay: index * 0.05 }}
                    >
                        <div className="card-header">
                            <h4 className="card-title">{activity.title}</h4>
                        </div>
                        <div className="card-role">{activity.role}</div>
                        {activity.organization && (
                            <div className="card-organization">{activity.organization}</div>
                        )}
                        <span className="card-year">{activity.year}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Achievements;