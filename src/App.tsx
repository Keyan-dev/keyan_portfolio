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
import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import {ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
const errorLink=onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      console.log("GraphQLerror",message,location,path)
    })
  }
})
const link=from([errorLink,new HttpLink({uri:"http://localhost:4000/graphql"})]);
const client=new ApolloClient({
  cache:new InMemoryCache(),
  link:link
})
function App() {
  const [contactToggle, setContactToggle] = useState(false);
  const { scrollYProgress } = useScroll();
  return <ApolloProvider client={client}><>
    <div className="overall-container">

      <div className="icon-div" onClick={() => setContactToggle(!contactToggle)}><i className="fa fa-address-book"></i></div>
      <WelcomeBanner />
      <motion.div
        className="scroll-progress-bar sticky-top"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <HomeBanner />
      <AboutUs />
      <Skills />
      <Experience />
      <ProjectList />
      {contactToggle && <ContactForm toggleFunction={setContactToggle} />}
      {/* <Project />
    */}
      <Footer />
    </div></></ApolloProvider>;
}
export default App;