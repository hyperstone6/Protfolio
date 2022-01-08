import './Project1.css'
import aeki from '../../../images/aeki.png'

const Project1 = (props) => {
    console.log(props.modal)
        
    if(props.modal) {
        return <div className='project__1'>
            <img src={aeki} alt='project aeki' />
        </div>
        } else {
            return <div className='project__1'>
            <iframe src='https://sayed-aeki.netlify.app/'></iframe>
        </div>
        }

}

export default Project1