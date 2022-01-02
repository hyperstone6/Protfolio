import './SidebarBottom.css'
import twitter from '../../icons/twitter.svg'
import linkedin from '../../icons/linkedin.svg'
import github from '../../icons/github.svg'

const SidebarBottom = () => {
    return (
        <div className='sidebar-bottom'>
          <div className='icon-container'>
            <img className='sidebar-bottom-icon' src={twitter} alt='twitter icon' />
            <a href='https://github.com/hyperstone6' target="_blank" rel="noopener noreferrer"><img className='sidebar-bottom-icon' src={github} alt='github icon' /></a>
            <a href='https://www.linkedin.com/in/sayed-ahmad-mahmood/' target="_blank" rel="noopener noreferrer"><img className='sidebar-bottom-icon' src={linkedin} alt='linkedin icon' /></a>
          </div>
        </div>
    )
}

export default SidebarBottom