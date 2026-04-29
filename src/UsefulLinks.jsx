import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function UsefulLinks() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>Useful Links</h1>
        <p>Here I have compiled links to interesting online resources related to AI. These are videos, articles, tutorials and other such things that I found helpful when researching for this project but I may not have directly referenced them. </p>

        <h2>Understanding AI</h2>


        <h2>AI in Business</h2>

        <h2>Models & Other Resources</h2>

        <h2>Tutorials</h2>

        
        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/ai-news')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/ai-news')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>AI in the News</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/about-the-author')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/about-the-author')
              }
            }}
          >
            <span>About the Author</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default UsefulLinks
