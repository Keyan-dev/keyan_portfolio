import './skills.css';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { react, c, java, python, lambda, figma, angularLogo, expressLogo, nodejs, git, github, gitlab, pgAdmin, material, mysql, postgres, motionLogo,frontend,backend,tools,programming,others } from "./logos";
import CommonHeader from '../common-header/CommonHeader';
type skillSet = {
    [key: string]: { image: string; name: string }[];
};
type skillGroup={
    [key:string]:{image:string};
};
const skillSet: skillSet = {
    'Frontend': [{ image: angularLogo, name: 'Angular' }, { image: react, name: 'React js' }, { image: motionLogo, name: 'Framer motion' }, { image: material, name: 'Angular Material' }],
    'Backend': [{ image: nodejs, name: 'Node js' }, { image: expressLogo, name: 'Express' }, { image: mysql, name: 'MySQL' }, { image: postgres, name: 'postgres' }, { image: lambda, name: 'Lambda function' }],
    'Tools': [{ image: git, name: 'git' }, { image: github, name: 'github' }, { image: gitlab, name: 'gitlab' }, { image: pgAdmin, name: 'pgadmin' }],
    'cores': [{ image: c, name: 'C' }, { image: java, name: 'Java' }, { image: python, name: 'Python' }],
    'Others': [{ image: figma, name: 'Figma' }]
}
const skillGroup:skillGroup={
    'Frontend':{
        image:frontend,
    },
    'Backend':{
        image:backend,
    },
    'Tools':{
        image:tools,
    },
    'cores':{
        image:programming,
    },
    'Others':{
        image:others,
    }
}
const Skills = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center skill-main-div'>
            <div className="skills container-fluid justify-content-center align-items-center p-3" id="Skills">
                <CommonHeader title='Crafting Code: My Expertise Unveile' />
            </div>
            <div className='pb-3 '>
                {Object.keys(skillSet)?.length && Object.keys(skillSet).map((item: string) => (
                        <div className='skill-card'>
                            <div className='skill-group-card'>
                                <motion.img initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} width={45} src={skillGroup[item].image}></motion.img>
                                {item}
                            </div>
                            <div  className='skills-card p-3'>
                                {skillSet[item].map((skill: { image: string, name: string }, index: number) => (
                                    <SkillCard imageName={skill.image} name={skill.name} key={index} />
                                ))}
                            </div>
                        </div>
                ))}
                </div> 
        </div>
    )
}

export default Skills;