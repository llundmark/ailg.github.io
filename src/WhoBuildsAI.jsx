import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function WhoBuildsAI() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>Who builds AI?</h1>
        <p>Right now, training an AI from scratch is something only companies with a lot of resources can accomplish. Here are some of the prominent companies in the field today. Bear in mind that new technologies are being developed and we may see a lot of changes both in AI and the business of it.
        </p>

        <a href="https://openai.com/"><h2>OpenAI</h2></a>
        <p>OpenAI is widely recognized for its development of the GPT family of large language models, the DALL-E series of text-to-image models, and the Sora series of text-to-video models.</p>

        <a href="https://www.anthropic.com/"><h2>Anthropic</h2></a>
        <p>Not to be confused with Anthropologie, Anthropic is the company behind Claude AI.</p>

        <a href="https://www.nvidia.com/en-us/solutions/ai/"><h2>NVidia</h2></a>
        <p>NVidia is heavily involved in the industry of AI, both in software implementation and hardware manufacturing. They develop a vast majority of the GPUs used in AI datacenters as of 2024.</p>

        <a href="https://www.microsoft.com/en-us/ai"><h2>Microsoft</h2></a>
        <p>Microsoft has developed AI and AI-powered programs such as Copilot and Bing among others.</p>

        <a href="https://www.adobe.com/ai/overview.html"><h2>Adobe</h2></a>
        <p>Adobe has developed AI-powered software such as Firefly and includes AI tools such as Generative Fill in their design programs.</p>

        <a href="https://www.palantir.com/platforms/aip/"><h2>Palantir</h2></a>
        <p>The Palantir AI Platform enables organizations to integrate large language models (LLMs) and other AI into data-driven operational workflows, combining secure data management with generative AI, particularly for defense, government, and enterprise clients.</p>

        <a href="https://www.apple.com/apple-intelligence/"><h2>Apple</h2></a>
        <p>Apple Intelligence is a personal AI system integrated into iPhone, iPad, and Mac, emphasizing on-device processing for privacy.</p>

        <a href="https://www.tesla.com/AI"><h2>Tesla</h2></a>
        <p>Tesla is involved with a variety of AI applications, including self-driving cars, robotics and Grok, their LLM.</p>

        <a href="https://stability.ai/"><h2>Stability AI</h2></a>
        <p>Stability AI Ltd is a UK-based artificial intelligence company, best known for its text-to-image model Stable Diffusion.</p>

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

export default WhoBuildsAI
