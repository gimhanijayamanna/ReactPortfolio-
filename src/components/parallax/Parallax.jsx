import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === "skills"
                        ? "linear-gradient(180deg, #111132, #0c0c1d)"
                        : type === "projects"
                            ? "linear-gradient(180deg, #18182a, #0c0c1d)"
                            : type === "achievements"
                                ? "linear-gradient(180deg, #23233a, #0c0c1d)"
                                : type === "contact"
                                    ? "linear-gradient(180deg, #292940, #0c0c1d)"
                                    : "linear-gradient(180deg, #111132, #0c0c1d)"
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "aboutme" && "About Me"}
                {type === "skills" && "Skills"}
                {type === "projects" && "Projects"}
                {type === "achievements" && "Achievements"}
                {type === "contact" && "Contact"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;