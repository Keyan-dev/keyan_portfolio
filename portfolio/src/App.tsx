import Navbar from "./components/navbar/navbar";
import WelcomeBanner from "./components/welcomeBanner/welcomeBanner";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import AboutUs from "./components/AboutUs/aboutUs";
import './App.css';
function App() {
  return <div>
    <WelcomeBanner />
    <Navbar />
    <HomeBanner />
    <AboutUs />
  </div>;
}
export default App;