import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function AboutTheAuthor() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>About the Author</h1>
        <p>This page is linked and ready for full content.</p>
        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/introduction')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/introduction')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Introduction</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/how-does-ai-work')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/how-does-ai-work')
              }
            }}
          >
            <span>How Does AI Work?</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutTheAuthor
