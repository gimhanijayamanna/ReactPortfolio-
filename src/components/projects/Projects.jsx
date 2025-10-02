import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "MindfulConnect – Second year software project",
        role: "Full-stack Developer – Admin Panel, Contact Us Management and UI",
        technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe", "JWT", "Google Meet API"],

        img: "/mc.jpeg",
        desc: "A secure online counseling platform connecting clients with licensed counselors through video, messaging, and session bookings, featuring dedicated portals, integrated payments, and role-based access control.",
        repo: "https://github.com/gimhanijayamanna/MindfullConnect"
    },
    {
        id: 2,
        title: "Giggly – Real-time Chat Application",
        role: "Full-Stack Developer– Real-time Messaging, File Sharing, Notifications and User Management",
        technologies: ["React.js", "Firebase (Firestore, Authentication)", "Cloudinary", "CSS3", "JavaScript"],
        img: "/giggly.png",
        desc: "Real-time chat with presence, file sharing, emoji support, unread indicators, and responsive interface for seamless communication.",
        repo: "https://github.com/gimhanijayamanna/Giggly"
    },
    {
        id: 3,
        title: "Portfolio Website",
        role: "Full Stack Developer, UI Designer",
        technologies: ["React", "Vite", "Framer Motion", "SCSS"],
        img: "/pf.png",
        desc: "Modern portfolio showcasing skills, animations, parallax sections, and responsive design for an engaging user experience.",
        repo: "https://github.com/gimhanijayamanna/ReactPortfolio-"
    },
    {
        id: 4,
        title: "Discovery Driven – First Year Hardware Project",
        role: "Hardware integrator, IR system developer, Documentation lead",
        technologies: ["ESP32", "C++", "Arduino Uno", "IR Sensors"],
        img: "/truck.jpg",
        desc: "Interactive learning platform using sensors and robotic arm to teach kids fundamental STEM concepts through play.",
        repo: "https://github.com/gimhanijayamanna/Discovery-Driven-L1-Project"
    },
];

const ProjectSlide = ({ item, first }) => {
    const ref = useRef(null);

    // Track scroll for subtle parallax / motion inside each slide
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

    return (
        <section className="projectSlide" id={first ? "Projects" : undefined}>
            <div className="content" ref={ref}>
                <div className="imageContainer">
                    <img src={item.img} alt={item.title} />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2>{item.title}</h2>
                    <div className="meta">
                        <div className="role">
                            <span className="label">Role:</span>
                            <div className="role-description">{item.role}</div>
                        </div>
                        <div className="techStack">
                            <span className="label">Technologies:</span>
                            <ul>
                                {item.technologies.map((t) => (
                                    <li key={t}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p>{item.desc}</p>
                    <button onClick={() => window.open(item.repo, "_blank")}>See Repo</button>
                </motion.div>
            </div>
        </section>
    );
};

const Projects = () => {
    return (
        <div className="projectsGroup">

            {items.map((item, idx) => (
                <ProjectSlide item={item} first={idx === 0} key={item.id} />
            ))}
        </div>
    );
};

export default Projects;