import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";

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
        <section id="Projects">Projects</section>
        <section >
            <Parallax type="achievements" />
        </section>
        <section id="Achievements">Achievements</section>
        <section>
            <Parallax type="contact" />
        </section>
        <section id="Contact">Contact</section>
    </div>
}
export default App;