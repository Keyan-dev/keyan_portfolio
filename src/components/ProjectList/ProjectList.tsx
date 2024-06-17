import Project from "../Project/Project";
import './ProjectList.css'
import CommonHeader from "../common-header/CommonHeader";
import bloodBankImage from "../../assets/projects/bloodbank.png";
import rmsImage from "../../assets/projects/rms.png";
import javaGame from "../../assets/projects/java-game.png";
import airQualityImage from "../../assets/projects/air-quality.png";
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
        buttonDetails: [{ buttonText: 'Know more', navigationLink: '', buttonIcon: 'fa-arrow-right' }, { buttonText: 'Github', navigationLink: 'https://github.com/Keyan-dev/Recruitment-management-system', buttonIcon: 'fa-github' }],
        description:
            "Recruitment Management System: Built with PHP and MySQL, this system streamlines the hiring process, facilitating efficient candidate tracking and management",
    },
    {
        name: "Rock Paper Scissors Game",
        imageUrl: javaGame,
        tags: [
            { "name": "Java", "color": "#007396" },
            { "name": "Java Applet", "color": "#007396" },
            { "name": "NetBeans", "color": "#1b6ac9" },
        ],
        buttonDetails: [{ buttonText: 'Know more', navigationLink: '', buttonIcon: 'fa-arrow-right' }],
        description:
            "Crafted a Java Applet: Innovatively designed and developed a captivating 2D game, merging classic entertainment with cutting-edge Java technology.",
    },
    {
        name: "Air Quality Monitoring System",
        imageUrl: airQualityImage,
        tags: [
            { "name": "MIT App Inventor", "color": "#f16629" },
            { "name": "ThingSpeak", "color": "#00aeef" },
            { "name": "Arduino", "color": "#0088cc" },
            { "name": "IoT", "color": "#10a98b" }
        ],
        buttonDetails: [{ buttonText: 'Know more', navigationLink: '', buttonIcon: 'fa-arrow-right' }],
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
        buttonDetails: [{ buttonText: 'Know more', navigationLink: '', buttonIcon: 'fa-arrow-right' }],
        description:
            "Efficiently manage investment portfolios with this comprehensive system. Monitor assets, track performance, and make informed decisions.",
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
            <CommonHeader title='My Works' />
            <div className="project-list-container">
                {projects.map((item, index) => (
                    <Project projectDetails={item} key={index} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList