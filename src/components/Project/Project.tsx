import './Project.css';
import noImage from '../../assets/projects/no-project.png';
import {motion} from 'framer-motion';
interface projectDetailsInterface {
    name: string,
    tags: { name: string, color: string }[],
    imageUrl: string,
    description: string,
    buttonDetails: buttonDetails[],
}
interface buttonDetails { buttonText: string, navigationLink: string, buttonIcon: string }
const Project = (props: { projectDetails: projectDetailsInterface }) => {
    const projectDetails: projectDetailsInterface = props.projectDetails;
    return (
        <motion.div className="project-container text-dark d-flex flex-column" initial={{ opacity: 0,scale:0.5 }} whileInView={{ opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.5 }}>
            <img
                className="img-fluid project-img"
                src={projectDetails?.imageUrl ? projectDetails.imageUrl : noImage}
                alt="Project illustration"
            />
            <h5 className='project-heading'>{projectDetails?.name ? projectDetails.name : "Project Name"}</h5>
            <div className="badge-container">
                {projectDetails?.tags?.length &&
                    projectDetails.tags.map((item) => (
                        <div className="badge-div" style={{ background: item?.color }}>
                            {item?.name}
                        </div>
                    ))}
            </div>
            <p className="project-description">
                {projectDetails?.description
                    ? projectDetails.description
                    : "Our Master of Science in Data Science program equips students with the skills and knowledge needed to excel in the rapidly growing field of data analytics. This interdisciplinary program combines rigorous coursework in statistics, computer science, and machine learning with practical experience through real-world projects and internships."}
            </p>
            <div className="d-flex justify-content-end align-items-end gap-2 button-container">
                {projectDetails.buttonDetails?.length &&
                    projectDetails.buttonDetails.map((item: buttonDetails) => (
                        <a href={item.navigationLink} target='_blank'>
                            <button type="button" className="btn btn-primary primary-button">
                                {item.buttonText}&nbsp;<i className={"fa " + item.buttonIcon}></i>
                            </button>
                        </a>
                    ))
                }
            </div>
        </motion.div>
    );
};

export default Project;