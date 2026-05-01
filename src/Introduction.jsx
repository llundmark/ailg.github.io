import './index.css';
import introductionImage from './assets/introPanda.png';
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function Introduction() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
      <h1>Introduction</h1>
      <p>Hello, and welcome to this guide on Artificial Intelligence (AI) and Ethics.
      This is meant to be used as a primer for individuals interested in AI and its current technologies. Specifically, the content here is geared towards designers and professionals indirectly involved with design that want to explore or at least understand the use of AI in design. The intent is not to condone or condemn the use of this technology, but to promote a greater public understanding of AI, it's capabilities and potential problems. With this, we can hopefully diminish the harmful effects of those problems on our society and find a place for AI that is constructive and benign.</p>

      <div><img className="img-right" src={introductionImage} alt="panda" /></div>

      <h2>A Bit of Backstory</h2>
      <p>One of the most widely discussed subjects in the U.S. in 2025 was the rapid integration of Artificial Intelligence. <a href="https://trends.withgoogle.com/year-in-search/2025/" target="_blank" rel="noreferrer">According to Google</a>, Deepseek (a generative AI platform) was the fifth most searched topic of the year in the U.S. and sixth most worldwide after topics like soccer tournaments and the new Pope. We've seen AI integrated into software and services like Photoshop and Figma as well as across the internet and social media.</p>
      <p>
      Our rapid development of technology has caused drastic changes in our quality of life and one of the great challenges of our species is establishing a moral infrastructure for these new capabilities. Modern industry is often given priority while we recognize its harmful effects only long after the fact. AI seems to be the latest in this trend, with large companies rushing to make use of it and course-correcting where lawsuits and public opinion direct. As usual, it's up to others to try and make sense of it all.</p>

      <h2>What's The Point?</h2>
      <p>One of the key points will be to explore ways that we can develop a code of ethics for our use of generative AI. Certainly, this is a great undertaking and will only get more complicated as the technology develops. What I can do, is try to break the issue down into parts and try to get that conversation started.</p>
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

export default Introduction;