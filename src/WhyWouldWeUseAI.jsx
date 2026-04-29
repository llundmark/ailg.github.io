import './index.css'
import cartoon1 from './assets/AILGp4com.png'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function WhyWouldWeUseAI() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>Why would we want to use AI?</h1>
        <p>For anyone that keeps up with the news or what's trending on social media, this might seem like a silly question. Simply browsing the internet, it's easy to find some advertisement or article talking about what an amazing new technology it is or how it has 'great potential'. We hardly need more people trying to sell us on Artificial Intelligence and that isn't the purpose of this guide.<br/>
        It's only fair, however, to look at what the capabilities of this technology are in order to weigh them against the potential risks. Once we understand that, we can make an educated decision whether or not to use it for our work. <br/>
        In the context of this guide, we will focus on the benefits of using AI for the purpose of design.
        </p>

        <h2>Automation</h2>

        <p>This is probably the biggest reason to use AI, or any kind of software really. Why do something when you can have someone (or in this case something) do it for you? This was a big part of the Industrial Revolution in the 1700s, after all.</p>

        <p>
        One of the selling points of AI is that you can train it to do simple, repetitive  tasks and free up your time for more in-depth work. </p>

        <div className="image-wrapper">
          <img src={cartoon1} alt="panda cartoon"/>
        </div>

        <p>
        If you are working on code for a website, for instance, you can use its text generation capabilities to write test functions, dummy profiles and other essential parts of the testing process.[14]</p>

        <h2>Brainstorming</h2>

        <p>Any designer could tell you how important the first steps of a project are. The process of planning and visualizing the final product is an essential part of design no matter what kind of project it is. Sometimes you'll have a good idea of what your product will look like from the beginning, but probably not every time. In this case it can help to rapidly create mockups for different concepts rather than the designer having to sketch them all. </p>
        
        <p>A designer can always look to other designers' work for inspiration - on sites like Dribbble for instance. AI can be trained to recognize different design patterns and generate variations of them. [5]</p>

        <h2>Playing by the Rules</h2>

        <p>When working with a client, there will often be constraints and guidelines that the designer has to be mindful of. An experienced designer will have an easier time navigating these things, but it can still be a challenge as projects increase in size and complexity. </p>
        
        <p>Computers are really good at keeping track of these kinds of things, since much of their programming is based on logical constraints. While this isn't necessarily something you would need AI for, it can be trained to help with things like accessibility testing.</p>

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

export default WhyWouldWeUseAI
