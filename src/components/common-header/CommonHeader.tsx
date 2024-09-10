import './CommonHeader.css';
interface headerProps {
    title: string,
    subTitle?:string
}
const CommonHeader = ({ title,subTitle }: headerProps) => {
    return (
        <div className='c-header d-flex flex-column align-items-center justify-content-center text-center p-2'>
            <p className="title common-title">{title}</p>
            <p className='sub-title'>{subTitle}</p>
        </div>
    )
}

export default CommonHeader;