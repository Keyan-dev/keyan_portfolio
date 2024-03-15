
interface props {
    imageName: string,
    name: string
}
const SkillCard = ({ imageName, name }: props) => {
    return (
        <>
            <div className="skill-card">
                <img src={imageName} width="100px"></img>
                {name}
            </div>
        </>
    )
}

export default SkillCard