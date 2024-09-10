import { motion } from 'framer-motion';
import './CodeLab.css';
interface codeLabProps {
    title: string
    description: string,
    image: string
}
const CodeLab = (props: codeLabProps) => {
    return (
        <motion.div className='codelab-container' initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}>
            <img src={props.image ? props.image : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"} alt="" className='code-lab-img img-fluid' />
            <div className='content-div'>
                <p className='code-lab-heading'>{props.title}</p>
                <p className='code-lab-description'>{props.description}</p>
            </div>
            <div className='action-container'>
                <button className='action-button'><i className="fa fa-external-link" aria-hidden="true"></i>&nbsp;Explore</button>
            </div>
        </motion.div>
    )
}

export default CodeLab;