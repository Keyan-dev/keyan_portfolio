import './skills.css';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { react, c, java, python, lambda, figma, angularLogo, expressLogo, nodejs, git, github, gitlab, pgAdmin, material, mysql, postgres, motionLogo } from "./logos";
import CommonHeader from '../common-header/CommonHeader';
type skillSet = {
    [key: string]: { image: string; name: string }[];
};
const skillSet: skillSet = {
    'Frontend': [{ image: angularLogo, name: 'Angular' }, { image: react, name: 'React js' }, { image: motionLogo, name: 'Framer motion' }, { image: material, name: 'Angular Material' }],
    'Backend': [{ image: nodejs, name: 'Node js' }, { image: expressLogo, name: 'Express' }, { image: mysql, name: 'MySQL' }, { image: postgres, name: 'postgres' }, { image: lambda, name: 'Lambda function' }],
    'Tools': [{ image: git, name: 'git' }, { image: github, name: 'github' }, { image: gitlab, name: 'gitlab' }, { image: pgAdmin, name: 'pgadmin' }],
    'Programming': [{ image: c, name: 'C' }, { image: java, name: 'Java' }, { image: python, name: 'Python' }],
    'Others': [{ image: figma, name: 'Figma' }]
}
const Skills = () => {
    return (
        <>
            <div className="skills container-fluid justify-content-center align-items-center p-3">
                <CommonHeader title='My Skills' />
            </div>
            <div className='container-fluid row p-3 justify-content-center '>
                {Object.keys(skillSet)?.length && Object.keys(skillSet).map((item: string) => (
                    <>
                        <div className='skill-card col-lg-3 col-sm-12 col-md-6 p-3'>
                            <h4 className='h4 text-center m-3'>{item}</h4>
                            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className='row p-3'>
                                {skillSet[item].map((skill: { image: string, name: string }, index: number) => (
                                    <SkillCard imageName={skill.image} name={skill.name} key={index} />
                                ))}
                            </motion.div>
                        </div>
                        {/* <div className='col-lg-4 col-md-12 container-fluid align-items-center justify-content-center p-3'><p className='h5'>{item}</p></div>
                        <div className='col-lg-8 col-md-12 container-fluid jusify-content-center align-items-center p-3'>
                            <div className='row'>
                                {skillSet[item].map((skill, index) => (
                                    <SkillCard imageName={skill.image} name={skill.name} />
                                ))}
                            </div>
                        </div> */}
                    </>
                ))}
            </div>
        </>
    )
}

export default Skills;