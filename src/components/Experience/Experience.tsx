import './Experience.css';
import { FaComputer } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { centizenLogo, kamarajLogo, matrimonyLogo } from '../skills/logos';
import { motion } from 'framer-motion';
const experienceDet = [
    {
        "expName": "Senior Fullstack Engineer",
        "company": "Matrimony.com Ltd",
        "ind": "work",
        "img": matrimonyLogo,
        "description": "Develop and maintain Angular, Ionic, Node.js, and Express.js features for a high-traffic B2C matchmaking platform. Redesigned Redis API caching to reduce average response time from 100ms to 30ms, implemented Prisma ORM over MySQL, mentor intern engineers, and own production support for backend services.",
        "timePeriod": "Current Role"
    },
    {
        "expName": "Software Developer",
        "company": "Centizen Inc / Zenbasket",
        "ind": "work",
        "img": centizenLogo,
        "description": "Owned end-to-end development for Product Management and Order Placement / Payment modules on a Shopify-style multi-vendor e-commerce platform. Built Node.js and Express.js APIs across PostgreSQL, MySQL, and MongoDB, designed AWS Lambda workflows, and delivered Angular UI features.",
        "timePeriod": "3+ Years"
    },
    {
        "expName": "Certifications",
        "company": "HackerRank, Anthropic, LinkedIn Learning",
        "ind": "school",
        "img": kamarajLogo,
        "description": "Angular (Intermediate) Certification from HackerRank, Claude Code in Action from Anthropic, and Vibe Coding Fundamentals from LinkedIn Learning.",
        "timePeriod": "2025 - 2026"
    },
    {
        "expName": "B.Tech Information Technology",
        "company": "Kamaraj College of Engineering and Technology",
        "ind": "school",
        "img": kamarajLogo,
        "description": "Completed B.Tech in Information Technology with a CGPA of 7.8/10. Earned 1st place in the Data Structures Demystified contest.",
        "timePeriod": "2022"
    }
    // ,
    // {
    //     "expName": "Higher Secondary Certificate (HSC)",
    //     "company": "PKN Higher Secondary School",
    //     "ind": "school",
    //     "img": pkn,
    //     "description": "I completed my Higher Secondary Certificate (HSC) from PKN Higher Secondary School in 2018. I achieved a percentage of 72.33% in this examination, demonstrating proficiency in various subjects.",
    //     "timePeriod": "2016 - 2018"
    // },
    // {
    //     "expName": "Secondary School Leaving Certificate (SSLC)",
    //     "company": "PKN Higher Secondary School",
    //     "ind": "school",
    //     "img": pkn,
    //     "description": "I completed my Secondary School Leaving Certificate (SSLC) from PKN Higher Secondary School in 2016. I obtained a percentage of 92.40% in this examination, showcasing strong academic performance and foundational knowledge.",
    //     "timePeriod": "2015 - 2016"
    // }
];
interface timeLineProp {
    expName: string,
    company: string,
    ind: string,
    img: string,
    description: string,
    timePeriod: string,
}
const Timeline = ({ expName, company, ind, img, description, timePeriod }: timeLineProp) => {
    return <motion.article className='experience-card' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} transition={{ duration: 0.35 }}>
        <div className='experience-card-header'>
            <img className='logo-image' src={img} alt={`${company} logo`} />
            <div className='experience-title-group'>
                <div className='experience-icon-row'>
                    {ind == 'work' && <FaComputer className='logo'></FaComputer>}
                    {ind == 'school' && <IoSchoolSharp className='logo' />}
                    <span className='time-line-timeperiod'>{timePeriod}</span>
                </div>
                <h3 className='time-line-title'>{expName}</h3>
                <p className='time-line-subtitle'>{company}</p>
            </div>
        </div>
        <p className='experience-description'>{description}</p>
    </motion.article>
}
const Experience = () => {
    return (
        <>
            <section className='experience-div' id="Experience">
                <div className='experience-section-header'>
                    <span className='section-kicker'>Experience</span>
                    <h2>Professional Experience</h2>
                </div>
                <div className='timeline-placement'>
                    {experienceDet.map((item, index) => (
                        <Timeline timePeriod={item?.timePeriod} description={item?.description} img={item?.img} expName={item?.expName} ind={item?.ind} company={item?.company} key={index}></Timeline>
                    ))}
                </div>
            </section >
        </>
    )
}

export default Experience
