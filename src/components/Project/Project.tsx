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
const codeLabDetails = [
    {
        id: 1, name: 'Title 1', "description": 'dsfsdf', buttonText: 'sdfsdf'
    },
    {
        id: 2, name: 'Title 2', "description": 'dsfsdf', buttonText: 'sdfsdf'
    }
]
const ProjectCard = (props: projectProps) => {
    const { index } = props;
    return <>
        <div className="col-lg-2 col-md-6 m-2">
            <div className="card">
                <img src={skillImage} className="card-img-top image-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{projectDetails[index]?.name}</h5>
                    <p className="card-text">{projectDetails[index]?.description}</p>
                    <a href="#" className="btn btn-primary primary-button">Learn more</a>
                </div>
            </div>
        </div>
    </>
};
const Project = () => {
    return (
        <>
            <CommonHeader title="My Works" />
            <div className='p-5'>
                <ul className='nav nav-tabs' id="projectTab" role="tablist">
                    <li className='nav-item' role="presentation"><button className="nav-link active" data-bs-toggle="tab" data-bs-target="#project" type="button" role="tab" aria-controls="projects" aria-selected="false">Projects</button></li>
                    <li className='nav-item' role="presentation"><button className="nav-link" data-bs-toggle="tab" data-bs-target="#codelab" type="button" role="tab" aria-controls="codelab" aria-selected="false">Code lab</button></li>
                </ul>
            </div>
            <div className='tab-content' id="projectTabContent">
                <div className="tab-pane fade show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                    <div className="container-fluid row justify-content-center align-items-center p-3 project-container">
                        <div className="card m-3" style={{ width: "18rem" }}>
                            <img src={skillImage} className="card-img-top" alt="..." style={{ "width": '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Blood Bank Management System</h5>
                                <div>
                                    <span className="badge rounded-pill bg-primary m-1">HTML</span>
                                    <span className="badge rounded-pill bg-success m-1">CSS</span>
                                    <span className="badge rounded-pill bg-danger m-1">PHP</span>
                                    <span className="badge rounded-pill bg-secondary m-1">MYSQL</span>
                                    <span className="badge rounded-pill bg-danger m-1">PHP</span>
                                    <span className="badge rounded-pill bg-secondary m-1">MYSQL</span>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                        <div className="card m-3" style={{ width: "18rem" }}>
                            <img src={skillImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Recruitment Management System</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                        <div className="card m-3" style={{ width: "18rem" }}>
                            <img src={skillImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Rock Paper Scissor Game in JAVA</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                        <div className="card m-3" style={{ width: "18rem" }}>
                            <img src={skillImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Air Quality Monitoring System using IOT</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                        <div className="card m-3" style={{ width: "18rem" }}>
                            <img src={skillImage} className="card-img-top" alt="..." style={{ "width": '100%' }} />
                            <div className="card-body">
                                <h5 className="card-title">Blood Bank Management System</h5>
                                <div>
                                    <span className="badge rounded-pill bg-primary m-1">HTML</span>
                                    <span className="badge rounded-pill bg-success m-1">CSS</span>
                                    <span className="badge rounded-pill bg-danger m-1">PHP</span>
                                    <span className="badge rounded-pill bg-secondary m-1">MYSQL</span>
                                    <span className="badge rounded-pill bg-danger m-1">PHP</span>
                                    <span className="badge rounded-pill bg-secondary m-1">MYSQL</span>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade show" id="codelab" role="tabpanel" aria-labelledby="code-lab">
                    <div className="container-fluid row justify-content-center align-items-center p-3 project-container">
                        {codeLabDetails.map((item, index) => (
                            <ProjectCard index={index} key={item?.id} />))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;