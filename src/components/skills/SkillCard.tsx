import './skillCard.css';
interface props {
    imageName: string,
    name: string
}
const SkillCard = ({ imageName, name }: props) => {
    return (
        <>
            <div className="skill-card col text-center">
                <img src={imageName} width="50px" height="50px"></img>
                <p className="h6 p-3 skill-name">{name}</p>
            </div>
        </>
    )
}

export default SkillCard