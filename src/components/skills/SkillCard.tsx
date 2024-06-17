import './skillCard.css';
import {motion} from 'framer-motion';
interface props {
    imageName: string,
    name: string
}
const SkillCard = ({ imageName, name }: props) => {
    return (
        <>
            <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="skill-card-single text-center m-2">
                <img src={imageName} className='skill-image'></img>
                <p className="skill-name">{name}</p>
            </motion.div>
        </>
    )
}

export default SkillCard