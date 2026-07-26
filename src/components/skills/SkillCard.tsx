import './skillCard.css';
import {motion} from 'framer-motion';
import type { IconType } from 'react-icons';
interface props {
    icon: IconType,
    name: string,
    featured?: boolean
}
const SkillCard = ({ icon: Icon, name, featured = false }: props) => {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className={`skill-card-single ${featured ? 'featured-skill' : ''}`}>
                <span className='skill-icon-shell'>
                    <Icon className='skill-image' />
                </span>
                <p className="skill-name">{name}</p>
            </motion.div>
        </>
    )
}

export default SkillCard
