
import { motion } from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
};

const Links = () => {
    const items = [
        "Home",
        "Skills",
        "Projects",
        "Achievements",
        "Contact"
    ];

    // Always animate open for demo; you can control with state
    return (
        <motion.div className="links" variants={variants} animate="open" initial="closed">
            {items.map((item) => (
                <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    );
}

export default Links;