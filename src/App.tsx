import Navbar from "./components/navbar/navbar";
import WelcomeBanner from "./components/welcomeBanner/welcomeBanner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/aboutUs";
import Skills from "./components/skills/skills";
import Experience from "./components/Experience/Experience";
// import Project from "./components/Project/Project";
// import ContactForm from "./components/ContactForm/ContactForm";
import ProjectList from "./components/ProjectList/ProjectList";
import Footer from "./components/Footer/Footer";
import './App.css';
function App() {
  return <div className="overall-container">
    <div className="icon-div"><i className="fa fa-address-book"></i></div>
    <WelcomeBanner />
    <Navbar />
    <HomeBanner />
    <AboutUs />
    <Skills />
    <Experience />
    <ProjectList />
    {/* <ContactForm />  */}
    {/* <Project />
    */}
    <Footer />
  </div>;
}
export default App;