import './skills.css';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
    SiAngular,
    SiAwslambda,
    SiC,
    SiCss3,
    SiDocker,
    SiExpress,
    SiGit,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiIonic,
    SiJavascript,
    SiJest,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNodedotjs,
    SiNpm,
    SiOpenai,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedis,
    SiScrumalliance,
    SiTypescript
} from 'react-icons/si';
import { FaCloud, FaCode, FaDatabase, FaJava, FaRobot, FaServer, FaToolbox } from 'react-icons/fa';
import CommonHeader from '../common-header/CommonHeader';

type SkillItem = {
    icon: IconType;
    name: string;
    featured?: boolean;
};

type SkillGroup = {
    title: string;
    icon: IconType;
    summary: string;
    skills: SkillItem[];
};

const skillSet: SkillGroup[] = [
    {
        title: 'Frontend & Mobile',
        icon: FaCode,
        summary: 'Responsive web and hybrid mobile interfaces for production product workflows.',
        skills: [
            { icon: SiAngular, name: 'Angular', featured: true },
            { icon: SiIonic, name: 'Ionic', featured: true },
            { icon: SiReact, name: 'React.js', featured: true },
            { icon: SiMui, name: 'Material UI' },
            { icon: SiHtml5, name: 'HTML5' },
            { icon: SiCss3, name: 'CSS3' },
            { icon: SiJavascript, name: 'Flowbite' }
        ],
    },
    {
        title: 'Backend & APIs',
        icon: FaServer,
        summary: 'Scalable services, API contracts, authentication flows, and production support.',
        skills: [
            { icon: SiNodedotjs, name: 'Node.js', featured: true },
            { icon: SiExpress, name: 'Express.js', featured: true },
            { icon: FaServer, name: 'REST APIs', featured: true },
            { icon: SiGraphql, name: 'GraphQL' },
            { icon: SiPrisma, name: 'Prisma ORM' }
        ],
    },
    {
        title: 'Data & Performance',
        icon: FaDatabase,
        summary: 'Database modeling, query tuning, caching, and async job processing.',
        skills: [
            { icon: SiMysql, name: 'MySQL', featured: true },
            { icon: SiRedis, name: 'Redis', featured: true },
            { icon: SiPostgresql, name: 'PostgreSQL' },
            { icon: SiMongodb, name: 'MongoDB' },
            { icon: FaDatabase, name: 'BullMQ' }
        ],
    },
    {
        title: 'Languages',
        icon: SiTypescript,
        summary: 'Daily engineering languages used across frontend, backend, and data access.',
        skills: [
            { icon: SiTypescript, name: 'TypeScript', featured: true },
            { icon: SiJavascript, name: 'JavaScript', featured: true },
            { icon: FaJava, name: 'Java' },
            { icon: SiC, name: 'C' }
        ],
    },
    {
        title: 'Cloud, Tools & Workflow',
        icon: FaCloud,
        summary: 'Delivery tooling for serverless workloads, source control, testing, and Agile teams.',
        skills: [
            { icon: SiAwslambda, name: 'AWS Lambda', featured: true },
            { icon: SiDocker, name: 'Docker' },
            { icon: SiGit, name: 'Git' },
            { icon: SiGithub, name: 'GitHub' },
            { icon: SiJest, name: 'Jest' },
            { icon: SiNpm, name: 'NPM' },
            { icon: FaToolbox, name: 'Agile' },
            { icon: SiScrumalliance, name: 'Scrum' }
        ],
    },
    {
        title: 'AI-Assisted Development',
        icon: FaRobot,
        summary: 'Practical AI coding tools used for implementation support and workflow acceleration.',
        skills: [
            { icon: FaRobot, name: 'Claude Code' },
            { icon: SiOpenai, name: 'Codex' },
            { icon: FaRobot, name: 'Antigravity' }
        ],
    }
];

const Skills = () => {
    return (
        <section className='skill-main-div'>
            <div className="skills container-fluid justify-content-center align-items-center p-3" id="Skills">
                <CommonHeader title='Technical Skills' />
            </div>
            <div className='skills-section-intro'>
                <p>Core stack and supporting tools I use to build, ship, maintain, and tune full-stack product features.</p>
            </div>
            <div className='skills-grid'>
                {skillSet.map((group) => {
                    const GroupIcon = group.icon;
                    return (
                        <div className='skill-card' key={group.title}>
                            <div className='skill-group-card'>
                                <motion.span className='skill-group-icon' initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }}><GroupIcon /></motion.span>
                                <div>
                                    <h3>{group.title}</h3>
                                    <p>{group.summary}</p>
                                </div>
                            </div>
                            <div className='skills-card'>
                                {group.skills.map((skill) => (
                                    <SkillCard icon={skill.icon} name={skill.name} featured={skill.featured} key={skill.name} />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills;
