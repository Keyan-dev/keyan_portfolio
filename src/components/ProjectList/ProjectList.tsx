import Project from "../Project/Project";
import CodeLab from "../CodeLab/CodeLab"
import './ProjectList.css'
import CommonHeader from "../common-header/CommonHeader";
import bloodBankImage from "../../assets/projects/bloodbank.png";
import rmsImage from "../../assets/projects/rms.png";
// import javaGame from "../../assets/projects/java-game.png";
import airQualityImage from "../../assets/projects/air-quality.png";
import { motion } from 'framer-motion';
import { useState } from "react";
interface projectDetailsInterface {
    name: string,
    tags: { name: string, color: string }[],
    imageUrl: string,
    description: string,
    buttonDetails: { buttonText: string, navigationLink: string, buttonIcon: string }[]
}
const projects: projectDetailsInterface[] = [
    {
        name: "BloodBank Management system",
        tags: [
            { "name": "HTML", "color": "#e34c26" },
            { "name": "CSS", "color": "#1572b6" },
            { "name": "JavaScript", "color": "#997e00" },
            { "name": "PHP", "color": "#777bb4" },
            { name: "Bootstrap", color: "#6f42c1" },
            { "name": "Visual Studio Code", "color": "#007acc" },
            { "name": "XAMPP", "color": "#fb7a24" },
            { "name": "MySQL", "color": "#4479a1" },
        ],
        buttonDetails: [
            { buttonText: 'Live', navigationLink: 'https://keyan-bb-org.000webhostapp.com/', buttonIcon: 'fa-broadcast-tower' },
            { buttonText: 'Github', navigationLink: 'https://github.com/Keyan-dev/Blood-bank-management-system', buttonIcon: 'fa-github' }
        ],
        imageUrl: bloodBankImage,
        description:
            "Blood Bank Management System: Utilizing PHP and MySQL, this system ensures efficient management of blood donations, inventory, and donor information for seamless operations.",
    },
    {
        name: "Recruitment Management System",
        imageUrl: rmsImage,
        tags: [
            { "name": "HTML", "color": "#e34c26" },
            { "name": "CSS", "color": "#1572b6" },
            { "name": "JavaScript", "color": "#997e00" },
            { "name": "PHP", "color": "#777bb4" },
            { name: "Bootstrap", color: "#6f42c1" },
            { "name": "Visual Studio Code", "color": "#007acc" },
            { "name": "XAMPP", "color": "#fb7a24" },
            { "name": "MySQL", "color": "#4479a1" },
        ],
        buttonDetails: [{ buttonText: 'Github', navigationLink: 'https://github.com/Keyan-dev/Recruitment-management-system', buttonIcon: 'fa-github' }],
        description:
            "Recruitment Management System: Built with PHP and MySQL, this system streamlines the hiring process, facilitating efficient candidate tracking and management",
    },
    // {
    //     name: "Rock Paper Scissors Game",
    //     imageUrl: javaGame,
    //     tags: [
    //         { "name": "Java", "color": "#007396" },
    //         { "name": "Java Applet", "color": "#007396" },
    //         { "name": "NetBeans", "color": "#1b6ac9" },
    //     ],
    //     buttonDetails: [{ buttonText: 'Know more', navigationLink: '', buttonIcon: 'fa-arrow-right' }],
    //     description:
    //         "Crafted a Java Applet: Innovatively designed and developed a captivating 2D game, merging classic entertainment with cutting-edge Java technology.",
    // },
    {
        name: "Air Quality Monitoring System",
        imageUrl: airQualityImage,
        tags: [
            { "name": "MIT App Inventor", "color": "#f16629" },
            { "name": "ThingSpeak", "color": "#00aeef" },
            { "name": "Arduino", "color": "#0088cc" },
            { "name": "IoT", "color": "#10a98b" },
            { "name": "No code development", "color": "#10a98b" }
        ],
        buttonDetails: [],
        description:
            "Air Quality Monitoring System: Employing IoT technology to track and analyze air quality metrics, ensuring environmental safety and awareness.",
    },
    {
        name: "Portfolio Management System",
        imageUrl: '',
        tags: [
            { "name": "Node.js", "color": "#68a063" },
            { "name": "Angular", "color": "#dd0031" },
            { "name": "HTML", "color": "#e34c26" },
            { "name": "CSS", "color": "#1572b6" },
            { "name": "JavaScript", "color": "#997e00" },
            { "name": "TypeScript", "color": "#007acc" },
            { "name": "MongoDB", "color": "#13aa52" },
            { "name": "Visual Studio Code", "color": "#007acc" },
        ],
        buttonDetails: [],
        description:
            "Efficiently manage investment portfolios with this comprehensive system. Monitor assets, track performance, and make informed decisions.",
    }
];
const codeLab = [
    {
        "name": "45+ LeetCode Solved Problems",
        "description": "Demonstrated problem-solving skills by completing over 45 LeetCode challenges.",
        "image": "https://miro.medium.com/v2/resize:fit:947/1*oz2LpDFoQQJjXmxEPe2RsA.png",
        "link":'https://leetcode.com/u/keyan182718/'
    },
    {
        "name": "Currency Converter using Angular",
        "description": "Built a real-time currency converter with dynamic exchange rates using Angular.",
        "image": 'https://drive.google.com/thumbnail?id=1sx5csorAefFwVMttfciVVMOcA_rKUw_l&sz=w1000',
        "link":'https://codesandbox.io/p/devbox/currency-converter-6y3x7t'
    },
    {
        "name": "Password Generator in React JS",
        "description": "Developed a secure password generator with customizable options using React JS.",
        "image": 'https://drive.google.com/thumbnail?id=1XR9OevcpeVi0V7nVb08WrgRJ-5v1loEw&sz=w1000',
        "link":''
    },
    {
        "name": "File Explorer in React JS",
        "description": "Designed a UI for a file explorer with tree structure functionality using React JS.",
        "image": 'https://drive.google.com/thumbnail?id=1w5hwnl-gCTCAfAtK2BXSbqp0PNpKNIzy&sz=w1000',
        "link":''
    },
    {
        "name": "Progress Bar using React JS",
        "description": "Implemented a responsive progress bar with dynamic loading states using React JS.",
        "image": 'https://drive.google.com/thumbnail?id=1LjQwm7ydsAWbfgftfiWA9jHecPghrSlD&sz=w1000',
        "link":''
    },
    {
        "name": "Angular Forms",
        "description": "Developed dynamic and responsive forms with validation using Angular.",
        "image": 'https://drive.google.com/thumbnail?id=1IucXwxxWCxymaLeuhQ7q7mRzTxoTWIHw&sz=w1000',
        "link":''
    },
    {
        "name": "Angular HTTP Client",
        "description": "Integrated RESTful API services with Angular's HTTP client for smooth data handling.",
        "image": 'https://drive.google.com/thumbnail?id=1qCrc14wFyBJo7ahxyUVq4IaIrjzGLu2J&sz=w1000',
        "link":''
    },
    {
        "name": "Light and Dark Theme in React JS",
        "description": "Designed a seamless light and dark mode toggle for a React JS application.",
        "image": 'https://drive.google.com/thumbnail?id=1m10YDX9kjlL7ryNxnL3881ufLPmA04KO&sz=w1000',
        "link":''
    },
    {
        "name": "Paginator in Angular",
        "description": "Implemented efficient pagination controls for large data sets using Angular.",
        "image": 'https://drive.google.com/thumbnail?id=1m2qhlV7tEN-j492qUpx9HvIzcSunF_Ul&sz=w1000',
        "link":''
    }
]

// const skills = [
//     { "name": "HTML", "color": "#e34c26" },
//     { "name": "CSS", "color": "#1572b6" },
//     { "name": "JavaScript", "color": "#f0db4f" },
//     { "name": "React", "color": "#61dafb" },
//     { "name": "Angular", "color": "#dd0031" },
//     { "name": "Vue.js", "color": "#4fc08d" },
//     { "name": "Node.js", "color": "#68a063" },
//     { "name": "Bootstrap", "color": "#563d7c" },
//     { "name": "Sass", "color": "#cc6699" },
//     { "name": "TypeScript", "color": "#007acc" },
//     { "name": "jQuery", "color": "#0769ad" },
//     { "name": "Java", "color": "#007396" },
//     { "name": "Python", "color": "#3776ab" },
//     { "name": "C++", "color": "#00599c" },
//     { "name": "Ruby", "color": "#cc342d" },
//     { "name": "PHP", "color": "#777bb4" },
//     { "name": "Swift", "color": "#ffac45" },
//     { "name": "Kotlin", "color": "#0095d5" },
//     { "name": "Objective-C", "color": "#438eff" },
//     { "name": ".NET", "color": "#5c2d91" },
//     { "name": "Dart", "color": "#0175c2" },
//     { "name": "Go", "color": "#00add8" },
//     { "name": "Rust", "color": "#000000" },
//     { "name": "SQL", "color": "#f29111" },
//     { "name": "GraphQL", "color": "#e10098" },
//     { "name": "MongoDB", "color": "#13aa52" },
//     { "name": "MySQL", "color": "#4479a1" },
//     { "name": "PostgreSQL", "color": "#336791" },
//     { "name": "SQLite", "color": "#3c9d9b" },
//     { "name": "Firebase", "color": "#ffca28" },
//     { "name": "DynamoDB", "color": "#ff9900" },
//     { "name": "Oracle", "color": "#f80000" },
//     { "name": "Java Spring", "color": "#6db33f" },
//     { "name": "Ruby on Rails", "color": "#cc0000" },
//     { "name": "Express.js", "color": "#000000" },
//     { "name": "ASP.NET", "color": "#008080" },
//     { "name": "NetBeans", "color": "#1b6ac9" },
//     { "name": "Eclipse", "color": "#2c2255" },
//     { "name": "Visual Studio Code", "color": "#007acc" },
//     { "name": "XAMPP", "color": "#fb7a24" },
//     { "name": "Apache Tomcat", "color": "#f8dc75" },
//     { "name": "Docker", "color": "#2496ed" },
//     { "name": "Java Applet", "color": "#007396" },
//     { "name": "MIT App Inventor", "color": "#f16629" },
//     { "name": "ThingSpeak", "color": "#00aeef" },
//     { "name": "Arduino", "color": "#0088cc" },
//     { "name": "IoT", "color": "#10a98b" }
// ];
const ProjectList = () => {
    const [project, setProject] = useState(true);
    return (
        <div id="Projects">
            <CommonHeader 
            title='Pixel Portraits: My Development Gallery' 
            subTitle="Explore a curated collection of my digital creations, showcasing the journey of my development skills through vibrant pixel art and dynamic projects."
            />
            <div className="d-flex justify-content-center p-3 m-0">
                <div className="toggle-outer">
                    <button className={`toggle-button ${project ? 'toggle-active' : ''}`} disabled={project} onClick={() => setProject(!project)}>
                        <i className={`fa fa-folder-open`} onClick={() => setProject(!project)} />&nbsp;Projects</button>
                    <button className={`toggle-button ${!project ? 'toggle-active' : ''}`} disabled={!project} onClick={() => setProject(!project)}>
                        <i className={`fa fa-flask`} />&nbsp;Code Lab</button>
                </div>
            </div>
            <motion.div className="project-list-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [200, 0] }} transition={{ ease: "easeOut", duration: 0.8 }}>
                {project && projects.map((item, index) => (
                    <Project projectDetails={item} key={index} />
                ))}
                {!project && codeLab.map((item, index) => (
                    <CodeLab description={item.description} title={item.name} image={item?.image} link={item.link} key={index}></CodeLab>
                ))}
            </motion.div>
        </div>
    )
}

export default ProjectList