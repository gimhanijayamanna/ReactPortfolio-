import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Gimhani Jayamanna</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/gimhani-jayamanna-41695a276/"><img src="/linkedin.jpeg" alt="LinkedIn" /></a>
                    <a href="https://github.com/gimhanijayamanna"><img src="/github.png" alt="GitHub" /></a>
                    <a href="https://dribbble.com/gimhani-jayamanna"><img src="/dribble.png" alt="Dribbble" /></a>
                    <a href="https://www.instagram.com/p_b_s_r_/?hl=en"><img src="/instagram.png" alt="Instagram" /></a>
                    <a href="https://web.facebook.com/gimhani.jayamanna.9?_rdc=1&_rdr#"><img src="/facebook.png" alt="Facebook" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;