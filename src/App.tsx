import Navbar from "./components/navbar/navbar";
import WelcomeBanner from "./components/welcomeBanner/welcomeBanner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/aboutUs";
import Skills from "./components/skills/skills";
import Experience from "./components/Experience/Experience";
// import Project from "./components/Project/Project";
import ContactForm from "./components/ContactForm/ContactForm";
import ProjectList from "./components/ProjectList/ProjectList";
import Footer from "./components/Footer/Footer";
import './App.css';
import { createContext, useContext, useState } from "react";
function App() {
  let [contactToggle,setContactToggle]=useState(false);
  return <div className="overall-container">
    <div className="icon-div" onClick={()=>setContactToggle(!contactToggle)}><i className="fa fa-address-book"></i></div>
    <WelcomeBanner />
    <Navbar />
    <HomeBanner />
    <AboutUs />
    <Skills />
    <Experience />
    <ProjectList />
    {contactToggle && <ContactForm toggleFunction={setContactToggle}/>} 
    {/* <Project />
    */}
    <Footer />
  </div>;
}
export default App;