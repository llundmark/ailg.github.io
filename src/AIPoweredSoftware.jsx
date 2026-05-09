import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function AIPoweredSoftware() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>AI-Powered Software</h1>
        <p>It's no exaggeration to say that there has been an explosion in the number of AI-powered software programs in the past few years. Without assistance, it can be challenging to sort through them when you're looking for something in particular. Here is a list of some AI tools and how they are typically used as of this writing. This is by no means an exhaustive list, but is meant to provide some good examples for anyone getting started.</p>

        <h2>Web-Based Applications</h2>

        <p><a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a> - General-purpose chatbot.</p>

        <p><a href="https://claude.ai/login" target="_blank" rel="noopener noreferrer">Claude</a> - General-purpose chatbot. Claude Code especially good for coding.</p>

        <p><a href="https://www.midjourney.com/home" target="_blank" rel="noopener noreferrer">Midjourney</a> - Images.</p>

        <p><a href="https://leonardo.ai/" target="_blank" rel="noopener noreferrer">Leonardo.ai</a> - Images and Videos.</p>

        <p><a href="https://openai.com/index/dall-e-3/" target="_blank" rel="noopener noreferrer">DALL-E</a> - Images. (Currently hosted on ChatGPT - select Images in sidebar.)</p>

        <p><a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Copilot</a> - General-purpose chatbot.</p>

        <h2>Local Applications</h2>

        <p><a href="https://huggingface.co/blog/stable_diffusion" target="_blank" rel="noopener noreferrer">Stable Diffusion</a> - Images.</p>

        <p><a href="https://www.llama.com/" target="_blank" rel="noopener noreferrer">Llama</a> - Large Language Model.</p>

        <p><a href="https://deepmind.google/models/gemma/" target="_blank" rel="noopener noreferrer">Google Gemma</a> - General-purpose and others.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/ai-in-design')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/ai-in-design')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>AI in Design</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/essential-principles')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/essential-principles')
              }
            }}
          >
            <span>Essential Principles</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AIPoweredSoftware
