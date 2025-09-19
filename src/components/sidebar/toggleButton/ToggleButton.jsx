import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                    strokeWidth="2"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M3.5 8.5H19.5" },
                        open: { d: "M 3 16.5 L 16 2.5" },
                    }}
                />
                <motion.path
                    strokeWidth="2"
                    stroke="black"
                    strokeLinecap="round"
                    d="M3.5 12.5H19.5"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.path
                    strokeWidth="2"
                    stroke="black"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M3.5 16.5H19.5" },
                        open: { d: "M 3 2.5 L 16 16.346" },
                    }}
                />
            </svg>
        </button>
    );
};

export default ToggleButton;