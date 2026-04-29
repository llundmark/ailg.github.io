import './WhatIsAI.css'
import './index.css'
import { useNavigate } from 'react-router-dom'
import explainerImage from './assets/GenerativeAIExplainer.png'
import bannerImage from './assets/AILGp2com.png'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'

function WhatIsAI() {
  const navigate = useNavigate()

  return (
    <div className="what-is-ai-page">
      <div className="page-content">
        <img className="wia-top-banner" src={bannerImage} alt="AI literacy comic banner" />

        <p className="wia-top-credit">
          Original: <em>Red vs. Blue</em> season 1 episode 13
        </p>

        <h1 className="wia-h1">What is Artificial Intelligence (AI)?</h1>

        <p>According to the Encyclopedia Britannica:</p>
        <p className="wia-p wia-quote">
          <em>
            Artificial Intelligence (AI) is the ability of a digital computer or
            computer-controlled robot to perform tasks commonly associated with
            intelligent beings.
          </em>
        </p>
        <p className="wia-source">
          <span>Source - </span>
          <a href="https://www.britannica.com/technology/artificial-intelligence" target="_blank" rel="noreferrer">
            https://www.britannica.com/technology/artificial-intelligence
          </a>
        </p>

        <p>
          As you can probably see, the definition of AI is fairly broad and necessarily so
          when dealing with such abstract concepts. To help understand the idea, we can
          first try to define Intelligence.
        </p>

        <p>According to the Merriam-Webster Dictionary:</p>
        <p className="wia-p wia-quote-2">
          <em>
            Intelligence - the ability to learn or understand things or to deal with new or
            difficult situations.
          </em>
        </p>
        <p className="wia-source wia-source-2">
          <span>Source - </span>
          <a href="https://www.merriam-webster.com/dictionary/intelligence" target="_blank" rel="noreferrer">
            https://www.merriam-webster.com/dictionary/intelligence
          </a>
        </p>

        <p>
          <em>Intelligence</em> is something unique to humans and animals in that we can make
          observations about our environment and change our behavior accordingly.
          While this is hardly a foreign concept, after all we use our intelligence every day,
          it helps to make that distinction when we are discussing Artificial Intelligence.
        </p>

        <p>
          To say something is <em>Artificial</em> is to say it is not naturally occurring. It is something
          created by an intelligent being. In the case of Artificial Intelligence, we are trying
          to create something that can think and learn the way a human can.
        </p>

        <h2>Different Kinds of “AI”</h2>
        <p>
          When you think about Artificial Intelligence, what comes to mind?
          Over the past several decades, we have seen the term applied to many different
          technologies. We can get into more detail about these in a later section, but for now
          let&apos;s look at some examples.
        </p>

        <p><strong>Mobile Applications</strong> - Most software will provide some kind of function based on data either from a database or provided by the user.</p>
        <p><strong>Voice-Activated Tech</strong> - AI performs much better than standard software when it comes to processing sound, vision and other forms of input. These tools will often take an example of the user&apos;s voice to calibrate its functions.</p>
        <p><strong>Streaming Services and Social Media</strong> - Services like this will typically curate their content for the user based on what they typically watch or otherwise engage with.</p>
        <p><strong>Videogames</strong> - Games will often have characters programmed to behave depending on how the user plays.</p>
        <p><strong>Content-Generating Applications</strong> - Software that generates images, videos and other content based on a prompt from the user. This is commonly known as Generative AI. These are generally what people talk about when it comes to AI nowadays and they are the main reason for this literacy guide!</p>

        <h2 className="wia-h2 wia-h2-visual">A Brief Visual Definition</h2>
        <p className="wia-p wia-visual-copy">
          There are a lot of different types of AI and you will likely find a lot of interrelated
          terms. Here is a handy diagram for where Generative AI is located in all of this.
        </p>

        <img className="wia-explainer-image" src={explainerImage} alt="Generative AI hierarchy explainer" />
        <p className="wia-image-credit">
          Source: AI For Education
          <br />
          https://www.aiforeducation.io/ai-resources/generative-ai-explainer
        </p>

        <h2 className="wia-h2 wia-h2-important">The Important Thing</h2>
        <p>
          Something that&apos;s important to recognize here is that while the examples above
          are all complicated programs, not all of them are <em>intelligent</em>.
        </p>
        <p>
          Let&apos;s take the example of a non-player character (NPC) in a video game. The
          player can interact with this NPC in different ways, through actions or dialogue.
          Each line of its dialogue has to be written by the game&apos;s developer. It might have
          thousands of lines of text, but if the player interacts with it enough it will eventually
          run out of lines or start repeating itself. Some games, like{' '}
          <a href="https://undertale.com/about/" target="_blank" rel="noreferrer">Undertale</a>,
          can be very creative with this.
        </p>
        <p>
          The point is, no matter who is playing the game or how many times they play it,
          that NPC won&apos;t ever come up with anything new to say. The game&apos;s developer
          would have to add more lines into the character&apos;s dialogue.
          (Again, some developers can be really creative with this but you know what I
          mean. They <em>could</em> program the NPC to say random gibberish but that would kind
          of defeat the purpose.)
        </p>
        <p>
          In order for us to say that NPC is intelligent, it would have to adapt to the
          player&apos;s behavior in a way that the game&apos;s developer did <em>not</em> explicitly
          instruct. Some way that isn&apos;t just a glitch but an appropriate response to new data.
        </p>
        <p>
          <strong>How could we make that happen?</strong> Well that&apos;s where things get complicated.
        </p>
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

export default WhatIsAI
