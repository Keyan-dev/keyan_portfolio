import './skills.css';
import skillImage from '../../assets/about.png';
import SkillCard from './SkillCard';
import { react, angularLogo, expressLogo, nodejs, git, github, gitlab, pgAdmin, material, mysql, postgres } from "./logos";
const skillSet: object = {
    'Frontend': [{ image: angularLogo, name: 'Angular' }, { image: react, name: 'React js' }, { image: skillImage, name: 'Framer motion' }, { image: material, name: 'Angular Material' }],
    'Backend': [{ image: nodejs, name: 'Node js' }, { image: expressLogo, name: 'Express' }, { image: mysql, name: 'MySQL' }, { image: postgres, name: 'postgres' }, { image: skillImage, name: 'Lambda function' }],
    'Tools': [{ image: git, name: 'git' }, { image: github, name: 'github' }, { image: gitlab, name: 'gitlab' }, { image: pgAdmin, name: 'pgadmin' }],
    'Others': [{ image: skillImage, name: 'Figma' }]
}
const Skills = () => {
    return (
        <>
            <div className="skills container-fluid justify-content-center align-items-center p-3">
                <h1 className="display-5 skill-title text-center">Skills</h1>
            </div>
            <div className='container-fluid row p-3'>
                {Object.keys(skillSet)?.length && Object.keys(skillSet).map((item) => (
                    <>
                        <div className='col-lg-4 col-md-12 container-fluid align-items-center justify-content-center p-3'><p className='h5'>{item}</p></div>
                        <div className='col-lg-8 col-md-12 container-fluid jusify-content-center align-items-center p-3'>
                            <div className='row'>
                                {skillSet[item].map((skill, index) => (
                                    <SkillCard imageName={skill.image} name={skill.name} />
                                ))}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Skills;