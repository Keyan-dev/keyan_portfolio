import './CommonHeader.css';
interface headerProps {
    title: string
}
const CommonHeader = ({ title }: headerProps) => {
    return (
        <p className="title text-center p-3">{title}</p>
    )
}

export default CommonHeader