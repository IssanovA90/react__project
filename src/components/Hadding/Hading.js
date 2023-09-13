import './Hading.css'

const Hading = ({ children }) => {
    return (
        <div className='block__ritmstyle'>
            <div className={`left`}></div>
            <p>{children}</p>
            <div className={`left right`}></div>
        </div>
    )
}
export default Hading;