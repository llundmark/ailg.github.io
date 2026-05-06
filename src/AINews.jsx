import './index.css'
import './news.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'
import article1 from './assets/article1.jpg'
import article2 from './assets/article2.jpg'
import article3 from './assets/article3.jpg'
import article4 from './assets/article4.jpg'

function AINews() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>AI in the News</h1>
        <p>Artificial Intelligence is a frequent topic of discussion in the U.S. and the world at large. Here you can find links to interesting News articles related to developments in AI and how they effect society.</p>
        

        <div class="news-list">

        <div class="news-article">
          <a class = "news-link" href="https://www.msn.com/en-us/money/news/block-lays-off-nearly-half-its-staff-because-of-ai-its-ceo-said-most-companies-will-do-the-same/ar-AA1X9pwD?ocid=winp2fptaskbarhover&cvid=fc02d59495544a9ad2b8568dadf28fd6&ei=6" target="_blank" rel="noopener noreferrer">
            <div class="news-grid">
              <img src={article1} class="news-thumb" alt="article thumbnail" />
              <div class="news-text">
                <h4>Block lays off nearly half its staff because of AI. Its CEO said that most companies will do the same.</h4>
                <p>Block, the company behind Square, Cash App and Afterpay, is cutting its staff by 40%. The reason: “intelligence tools,” according to a letter to shareholders by co-founder Jack Dorsey.</p>
              </div>
          </div>
          </a>
        </div>

        <div class="news-article">
          <a class = "news-link" href="https://blog.mozilla.org/en/firefox/ai-controls/?utm_source=www.firefox.com&utm_medium=referral&utm_campaign=whatsnew-148" target="_blank" rel="noopener noreferrer">
            <div class="news-grid">
              <img src={article2} class="news-thumb" alt="article thumbnail" />
              <div class="news-text">
                <h4>AI controls are coming to Firefox</h4>
                <p>AI is changing the web, and people want very different things from it.  We've heard from many who want nothing to do with AI. We've also heard  from others who want AI tools that are genuinely useful.</p>
              </div>
          </div>
          </a>
        </div>

        <div class="news-article">
          <a class = "news-link" href="https://www.msn.com/en-us/money/other/the-chinese-ai-app-sending-hollywood-into-a-panic/ar-AA1WH84p?ocid=winp2fptaskbarhover&cvid=e7a4d64be6ef4114c2dd69aefd9b60af&ei=29" target="_blank" rel="noopener noreferrer">
            <div class="news-grid">
              <img src={article3} class="news-thumb" alt="article thumbnail" />
              <div class="news-text">
                <h4>The Chinese AI app sending Hollywood into a panic</h4>
                <p>A new artificial intelligence (AI) model developed by the Chinese company behind TikTok rocked Hollywood this week - not just because of  what it can do, but what it could mean for creative industries.</p>
              </div>
          </div>
          </a>
        </div>

        <div class="news-article">
          <a class = "news-link" href="https://fortune.com/2026/02/19/the-billion-dollar-justification-why-ai-giants-need-you-to-fear-for-your-job/" target="_blank" rel="noopener noreferrer">
            <div class="news-grid">
              <img src={article4} class="news-thumb" alt="article thumbnail" />
              <div class="news-text">
                <h4>The billion-dollar justification: why AI giants need you to fear for your job</h4>
                <p>Warnings that AI is coming for your job have become a familiar refrain in tech. OpenAI founder Sam Altman says AI could replace 40% of jobs, while Dario Amodei, CEO of Anthropic, warns that AI ...</p>
              </div>
          </div>
          </a>
        </div>

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
