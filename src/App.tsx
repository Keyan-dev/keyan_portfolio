//style import
import './App.css';
//Component imports
import Navbar from "./components/navbar/navbar";
import WelcomeBanner from "./components/welcomeBanner/welcomeBanner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/aboutUs";
import Skills from "./components/skills/skills";
import Experience from "./components/Experience/Experience";
import ContactForm from "./components/ContactForm/ContactForm";
import ProjectList from "./components/ProjectList/ProjectList";
import Footer from "./components/Footer/Footer";
//fundamentals import
import { useState } from "react";
//apollo client import
import {ApolloProvider} from '@apollo/client';
import client from './gql';

//Root component
function App() {
  const [contactToggle, setContactToggle] = useState(false);
  return <ApolloProvider client={client}><>
    <div className="overall-container">
      <div className="icon-div" onClick={() => setContactToggle(!contactToggle)}><i className="fa fa-address-book"></i></div>
      <WelcomeBanner />
      <Navbar />
      <HomeBanner />
      <AboutUs />
      <Skills />
      <Experience />
      <ProjectList />
      {contactToggle && <ContactForm toggleFunction={setContactToggle} />}
      <Footer />
    </div></></ApolloProvider>;
}
export default App;