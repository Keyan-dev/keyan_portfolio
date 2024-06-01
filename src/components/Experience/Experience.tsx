import './Experience.css';
import { FaComputer } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { centizenLogo, zenbasket, kamarajLogo } from '../skills/logos';
import { motion } from 'framer-motion';
const experienceDet = [
    {
        "expName": "Backend Developer",
        "company": "zenbasket",
        "ind": "work",
        "img": zenbasket,
        "description": "I worked as a Backend Developer at zenbasket. My responsibilities included developing and maintaining backend systems, implementing new features, and optimizing performance.",
        "timePeriod": "Jan 2023 - Current"
    },
    {
        "expName": "Software Developer Trainee",
        "company": "zenbasket",
        "ind": "work",
        "img": zenbasket,
        "description": "As a Software Developer Trainee at zenbasket, I underwent comprehensive training in software development methodologies, technologies, and tools. I actively participated in various projects and gained practical experience in software development.",
        "timePeriod": "July 2022 - Dec 2022"
    },
    {
        "expName": "Software Developer Intern",
        "company": "centizen",
        "ind": "work",
        "img": centizenLogo,
        "description": "During my internship at centizen, I worked as a Software Developer Intern. I collaborated with experienced developers on real-world projects, gaining valuable insights into the software development lifecycle and honing my technical skills.",
        "timePeriod": "Dec 2021 - June 2022"
    },
    {
        "expName": "B.Tech Information Technology",
        "company": "Kamaraj College of Engineering and Technology",
        "ind": "school",
        "img": kamarajLogo,
        "description": "I pursued my Bachelor of Technology (B.Tech) in Information Technology from Kamaraj College of Engineering and Technology. During this period, I acquired a solid foundation in IT concepts, software development, and related subjects.",
        "timePeriod": "2018 - 2022"
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
    divClass: string[],
    img: string,
    description: string,
    timePeriod: string,
}
const Timeline = ({ expName, company, ind, divClass, img, description, timePeriod }: timeLineProp) => {
    return <div className={'time-line-div ' + divClass[0]}>
        <motion.img className='logo-image' src={img} whileInView={{ scale: [1.3, 1] }} initial={{ scale: 1 }} transition={{ duration: 0.5 }}></motion.img>
        <motion.div className='text-box bg-light p-3' whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.5 }} transition={{ duration: 0.5 }}>
            <div className='d-flex d-flex justify-content-between'>
                <div className='logo-div py-2'>
                    {ind == 'work' && <FaComputer className='logo'></FaComputer>}
                    {ind == 'school' && <IoSchoolSharp className='logo' />}
                </div>
                <p className='py-2 align-items-end d-flex justify-content-end time-line-timeperiod'>{timePeriod}</p>
            </div>
            <h6 className='time-line-title'>{expName}</h6>
            <p className='time-line-subtitle'>{company}</p>
            <p>{description}</p>
        </motion.div>
    </div>
}
const Experience = () => {
    return (
        <>
            <div className='experience-div container-fluid p-3' id="Experience">
                <h3 className='display-5 text-center text-white'>Experience</h3>
                <div className='container-fluid timeline-placement'>
                    {experienceDet.map((item, index) => (
                        <Timeline timePeriod={item?.timePeriod} description={item?.description} img={item?.img} expName={item?.expName} divClass={index % 2 == 0 ? ['left-container'] : ['right-container']} ind={item?.ind} company={item?.company} key={index}></Timeline>
                    ))}
                </div>
            </div >
        </>
    )
}

export default Experience