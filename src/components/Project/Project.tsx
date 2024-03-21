import './Project.css';
import CommonHeader from "../common-header/CommonHeader";
import skillImage from '../../assets/about.png';
interface projectProps {
    index: number
}
const projectDetails = [
    { id: 1, name: 'Project 1', 'description': 'sdfsdfsdfsdfsdfsdf', buttonText: 'sdfsdfsdf' },
    { id: 2, name: 'Project 2', 'description': 'sdfsdfsdfsdfsdfsdf', buttonText: 'sdfsdfsdf' },
];
const ProjectCard = (props: projectProps) => {
    const { index } = props;
    return <>
        <div className="col-lg-2 col-md-6 m-2">
            <div className="card">
                <img src={skillImage} className="card-img-top image-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{projectDetails[index]?.name}</h5>
                    <p className="card-text">{projectDetails[index]?.description}</p>
                    <a href="#" className="btn btn-primary primary-button">Go somewhere</a>
                </div>
            </div>
        </div>
    </>
};
const Project = () => {
    return (
        <>
            <CommonHeader title="My Projects" />
            <div className="container-fluid row justify-content-center align-items-center p-3 project-container">
                {projectDetails.map((item, index) => (
                    <ProjectCard index={index} key={item?.id} />))}
            </div>
        </>
    )
}

export default Project;