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
                    <a href="#"><img src="/linkedin.jpeg" alt="LinkedIn" /></a>
                    <a href="#"><img src="/github.png" alt="GitHub" /></a>
                    <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
                    <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="/dribble.png" alt="Dribbble" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;