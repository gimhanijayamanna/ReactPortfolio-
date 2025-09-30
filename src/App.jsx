import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Achievements from "./components/achievements/Achievements";

const App = () => {
    return <div>
        <section id="Home"><Navbar /><Hero /></section>
        <section>
            <Parallax type="skills" />
        </section>
        <section id="Skills"><Skills /></section>
        <section>
            <Parallax type="projects" />
        </section>
        {/* Projects now renders 4 full-screen <section> slides internally; first slide has id="Projects" */}
        <Projects />
        <section >
            <Parallax type="achievements" />
        </section>
        <section id="Achievements"><Achievements /></section>
        <section>
            <Parallax type="contact" />
        </section>
        <section id="Contact"><Contact /></section>
    </div>
}
export default App;