import { motion } from 'framer-motion';
import './CodeLab.css';
import { useQuery } from '@apollo/client';
import { getCodeLabsData } from '../../gql/Queries';
import { useEffect } from 'react';
interface codeLabProps {
    title: string
    description: string,
    image: string,
    link:string,
}
const defaultUserId="666825deab9cc33d6a5c4342";
const CodeLab = (props: codeLabProps) => {
    const {error,loading,data}=useQuery(getCodeLabsData,{variables:{userId:defaultUserId}});
    useEffect(()=>{
        console.log("data",data);
        console.log("error",error);
        console.log("loading..",loading);
    },[data])
    return (
        <motion.div className='codelab-container' initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ ease: "easeOut", duration: 0.5 }}>
            <img src={props.image ? props.image : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled.png"} alt="" className='code-lab-img img-fluid' />
            <div className='content-div'>
                <p className='code-lab-heading'>{props.title}</p>
                <p className='code-lab-description'>{props.description}</p>
            </div>
            <div className='action-container'>
                <button className='action-button' onClick={()=>{window.open(props.link,"_blank")}}><i className="fa fa-external-link" aria-hidden="true"></i>&nbsp;Explore</button>
            </div>
        </motion.div>
    )
}

export default CodeLab;