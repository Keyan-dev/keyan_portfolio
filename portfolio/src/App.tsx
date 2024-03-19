import Navbar from "./components/navbar/navbar";
import WelcomeBanner from "./components/welcomeBanner/welcomeBanner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/aboutUs";
import Skills from "./components/skills/skills";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import './App.css';
function App() {
  return <div>
    <WelcomeBanner />
    <Navbar />
    <HomeBanner />
    <AboutUs />
    <Skills />
    <Experience />
    <Project />
  </div>;
}
export default App;