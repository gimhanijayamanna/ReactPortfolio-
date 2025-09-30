import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-260%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>Gimhani Jayamanna</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Third-year IT undergraduate at <br /> University of Moratuwa
                    </motion.h1>
                    <motion.p variants={textVariants} className="hero-description">
                        passionate about Software Engineering and UI/UX design, creating intuitive and user-friendly digital experiences.
                    </motion.p>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button
                            variants={textVariants}
                            onClick={() => scrollToSection('Projects')}
                        >
                            See the Latest Works
                        </motion.button>
                        <motion.button
                            variants={textVariants}
                            onClick={() => scrollToSection('Contact')}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;