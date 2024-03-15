import './skills.css';
import skillImage from '../../assets/about.png';
import SkillCard from './SkillCard';
const skillSet: object = {
    'Frontend': [{ image: skillImage, name: 'Angular' }],
    'Backend': [{ image: skillImage, name: 'Node js' }],
    'Others': [{ image: skillImage, name: 'Figma' }]
}
const Skills = () => {
    return (
        <>
            <div className="skills container-fluid justify-content-center align-items-center p-3">
                <h1 className="display-5 skill-title text-center">Skills</h1>
            </div>
            <div className='container-fluid'>
                {Object.keys(skillSet)?.length && Object.keys(skillSet).map((item) => (
                    <><div>{item}</div>
                        <div>
                            {skillSet[item].map((skill, index) => (
                                <SkillCard imageName={skill.image} name={skill.name} />
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default Skills;