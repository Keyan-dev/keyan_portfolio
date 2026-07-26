import Project from "../Project/Project";
import './ProjectList.css'
import CommonHeader from "../common-header/CommonHeader";
import bloodBankImage from "../../assets/projects/bloodbank.png";
import rmsImage from "../../assets/projects/rms.png";
// import javaGame from "../../assets/projects/java-game.png";
import {motion}  from 'framer-motion';
interface projectDetailsInterface {
    name: string,
    tags: { name: string, color: string }[],
    imageUrl: string,
    description: string,
    buttonDetails: { buttonText: string, navigationLink: string, buttonIcon: string }[]
}
const projects: projectDetailsInterface[] = [
    {
        name: "High-Traffic Matchmaking Platform",
        tags: [
            { "name": "Angular", "color": "#dd0031" },
            { "name": "Ionic", "color": "#3880ff" },
            { "name": "Node.js", "color": "#68a063" },
            { "name": "Express.js", "color": "#222222" },
            { "name": "MySQL", "color": "#4479a1" },
            { "name": "Redis", "color": "#dc382d" },
            { "name": "Prisma", "color": "#2d3748" },
        ],
        buttonDetails: [],
        imageUrl: '',
        description:
            "Built production full-stack features for a consumer-facing matrimony platform handling approximately 200 requests per second across web and mobile. Improved API latency by redesigning Redis caching from 100ms average response time to 30ms.",
    },
    {
        name: "E-Commerce Marketplace Platform",
        imageUrl: '',
        tags: [
            { "name": "Node.js", "color": "#68a063" },
            { "name": "Express.js", "color": "#222222" },
            { "name": "Angular", "color": "#dd0031" },
            { "name": "React.js", "color": "#61dafb" },
            { "name": "PostgreSQL", "color": "#336791" },
            { "name": "MySQL", "color": "#4479a1" },
            { "name": "MongoDB", "color": "#13aa52" },
            { "name": "AWS Lambda", "color": "#ff9900" },
        ],
        buttonDetails: [],
        description:
            "Owned core Product Management and Order Placement / Payment modules for a Shopify-style multi-vendor marketplace. Designed serverless workflows on AWS Lambda to offload long-running jobs and keep the main service responsive.",
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
        name: "Portfolio Website",
        imageUrl: rmsImage,
        tags: [
            { "name": "React", "color": "#61dafb" },
            { "name": "TypeScript", "color": "#007acc" },
            { "name": "Vite", "color": "#646cff" },
            { "name": "Framer Motion", "color": "#ff2d95" },
            { "name": "Bootstrap", "color": "#6f42c1" },
        ],
        buttonDetails: [{ buttonText: 'Live', navigationLink: 'https://keyan-dev.github.io/keyan_portfolio/', buttonIcon: 'fa-broadcast-tower' }, { buttonText: 'Github', navigationLink: 'https://github.com/keyan-dev/keyan_portfolio', buttonIcon: 'fa-github' }],
        description:
            "Personal portfolio built with React, TypeScript, Bootstrap, and Framer Motion to present experience, skills, projects, and a current resume.",
    },
    {
        name: "Blood Bank Management System",
        imageUrl: bloodBankImage,
        tags: [
            { "name": "HTML", "color": "#e34c26" },
            { "name": "CSS", "color": "#1572b6" },
            { "name": "JavaScript", "color": "#997e00" },
            { "name": "PHP", "color": "#777bb4" },
            { "name": "Bootstrap", "color": "#6f42c1" },
            { "name": "MySQL", "color": "#4479a1" },
        ],
        buttonDetails: [
            { buttonText: 'Live', navigationLink: 'https://keyan-bb-org.000webhostapp.com/', buttonIcon: 'fa-broadcast-tower' },
            { buttonText: 'Github', navigationLink: 'https://github.com/keyan-dev/Blood-bank-management-system', buttonIcon: 'fa-github' }
        ],
        description:
            "PHP and MySQL application for managing blood donations, inventory, and donor information with a straightforward admin workflow.",
    }
];
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
    return (
        <div id="Projects">
            <CommonHeader title='Selected Work' />
            <motion.div className="project-list-container" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: [200, 0] }} transition={{ ease: "easeOut", duration: 0.8 }}>
                {projects.map((item, index) => (
                    <Project projectDetails={item} key={index} />
                ))}
            </motion.div>
        </div>
    )
}

export default ProjectList
