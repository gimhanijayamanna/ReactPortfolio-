import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return <div>
        <section id="Home"><Navbar /><Hero /></section>
        <section id="About">About</section>
        <section id="Skills">Skills</section>
        <section id="Projects">Projects</section>
        <section id="Achievements">Achievements</section>
        <section id="Contact">Contact</section>
    </div>
}
export default App;