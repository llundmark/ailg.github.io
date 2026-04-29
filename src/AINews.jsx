import './index.css'
import './news.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'
import article1 from './assets/article1.png'
import article2 from './assets/article2.png'
import article3 from './assets/article3.png'
import article4 from './assets/article4.png'

function AINews() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>AI in the News</h1>
        <p>Artificial Intelligence is a frequent topic of discussion in the U.S. and the world at large. Here you can find links to interesting News articles related to developments in AI and how they effect society.</p>
        
        {/* <div class="news-article">
          <div class="news-grid">
            <img src="#" class="news-thumb" alt="article thumbnail" />
            <div class="news-text">
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div> */}

        
        <div class="news-article">
        <a href="https://www.msn.com/en-us/money/news/block-lays-off-nearly-half-its-staff-because-of-ai-its-ceo-said-most-companies-will-do-the-same/ar-AA1X9pwD?ocid=winp2fptaskbarhover&cvid=fc02d59495544a9ad2b8568dadf28fd6&ei=6">
          <div class="news-grid">
            <img src={article1} class="news-thumb" alt="article thumbnail" />
            <div class="news-text">
              <h4>Block lays off nearly half its staff because of AI. Its CEO said that most companies will do the same.</h4>
              <p>Block, the company behind Square, Cash App and Afterpay, is cutting its staff by 40%. The reason: “intelligence tools,” according to a letter to shareholders by co-founder Jack Dorsey.</p>
            </div>
          </div>
          </a>
        </div>
        
        
        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/environmental-impact')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/environmental-impact')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Environmental Impact</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/useful-links')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/useful-links')
              }
            }}
          >
            <span>Useful Links</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AINews
