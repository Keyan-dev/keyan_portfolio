import './CommonHeader.css';
interface headerProps {
    title: string
}
const CommonHeader = ({ title }: headerProps) => {
    return (
        <div className='c-header d-flex align-items-center justify-content-center text-center p-2'>
            <p className="title common-title">{title}</p>
        </div>
    )
}

export default CommonHeader;