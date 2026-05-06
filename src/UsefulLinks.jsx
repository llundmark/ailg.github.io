import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function UsefulLinks() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>Useful Links</h1>
        <p>Here I have compiled links to interesting online resources related to AI. These are videos, articles, tutorials and other such things that I found helpful when researching for this project but I may not have directly referenced them. </p>

        <h2>Understanding AI</h2>

        {/* <div className="useful-link">

          <p className="useful-header">L1.)</p>

          <div>
          <p className="useful-header"><a href=""></a> - <strong></strong></p>
          <p></p>
          </div>
        </div> */}
          <div className="useful-link">
          <p className="useful-header">L1.)</p>

          <div className="useful-text">
          <p className="useful-header"><a href="https://beinternetawesome.withgoogle.com/en_us" target="_blank" rel="noopener noreferrer">Be Internet Awesome</a> - <strong>Google's Guide to The Internet</strong></p>
          <p>Google has a website dedicated to introducing children grades 2-8 to the internet and how to navigate it safely and responsibly. See especially their <a href="" target="_blank" rel="noopener noreferrer">AI literacy guide</a>.</p>
          </div>
        </div>

        <div className="useful-link">

          <p className="useful-header">L2.)</p>

          <div>
          <p className="useful-header"><a href="https://www.coveo.com/blog/generative-models/" target="_blank" rel="noopener noreferrer">Complete Guide to Five Generative AI Models</a> - <strong>Coveo</strong></p>
          <p>A great article explaining the different types of AI Models in use today, how they learn and how they can be used. Written by Rebecca U. Shin.</p>
          </div>
          </div>

          <div className="useful-link">

          <p className="useful-header">L3.)</p>

          <div>
          <p className="useful-header"><a href="https://www.youtube.com/watch?v=NRmAXDWJVnU" target="_blank" rel="noopener noreferrer">Generative AI Explained in 5 Minutes</a> - <strong>Youtube video by SimpliLearn</strong></p>
          <p>A quick video introduction to Generative AI.</p>
          </div>
          </div>

          

          <div className="useful-link">

          <p className="useful-header">L4.)</p>

          <div>
          <p className="useful-header"><a href="https://www.youtube.com/watch?v=gsWCUDfQBvY" target="_blank" rel="noopener noreferrer">What are Generative AI Models?</a> - <strong>Youtube video by SimpliLearn</strong></p>
          <p>A much more in-depth video with explanations for model architecture, training and limitations. About an hour long.</p>
          </div>
          </div>

          <div className="useful-link">

          <p className="useful-header">L5.)</p>

          <div>
          <p className="useful-header"><a href="https://www.pugetsystems.com/solutions/photo-editing-workstations/generative-ai/hardware-recommendations/#:~:text=Our%20top%20recommendations%20at%20this,adds%20a%20lot%20of%20cost." target="_blank" rel="noopener noreferrer">Hardware Recommendations for Generative AI</a> - <strong>Puget Systems</strong></p>
          <p>An article detailing recommended computer specifications for different uses of Generative AI.</p>
          </div>
          </div>


        <h2>AI in Business</h2>

        <div className="useful-link">

          <p className="useful-header">L6.)</p>

          <div>
          <p className="useful-header"><a href="https://iot-analytics.com/leading-generative-ai-companies/" target="_blank" rel="noopener noreferrer">IOT Analytics</a> - <strong>The leading generative AI companies</strong></p>
          <p></p>
          </div>
        </div>

        <h2>Models & Other Resources</h2>

        <div className="useful-link">

          <p className="useful-header">L7.)</p>

          <div>
          <p className="useful-header"><a href="https://civitai.com/" target="_blank" rel="noopener noreferrer">Civitai</a></p>
          <p>An online repository for open-source Generative AI Models. Most Models found here are designed for image or video generation.</p>
          </div>
        </div>

        <h2>Tutorials</h2>
        <div className="useful-link">

          <p className="useful-header">L8.)</p>

          <div>
          <p className="useful-header"><a href="https://stable-diffusion-art.com/beginners-guide/" target="_blank" rel="noopener noreferrer">How to Use Stable Diffusion</a> - <strong>Stable Diffusion Art</strong></p>
          <p>An in-depth tutorial for using Stable Diffusion AI Models.</p>
          </div>
          </div>

          <div className="useful-link">

          <p className="useful-header">L9.)</p>

          <div>
          <p className="useful-header"><a href="https://www.youtube.com/watch?v=fCUkvL0mbxI&t=359s" target="_blank" rel="noopener noreferrer">Training your own AI Model is not as hard as you (probably) think</a> - <strong>Youtube video by Builder.io</strong></p>
          <p>A step-by-step example of how to train a custom AI Model.
          An accompanying text tutorial is available here: <a href="https://www.builder.io/blog/train-ai">https://www.builder.io/blog/train-ai</a></p>
          </div>
        </div>
        
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
