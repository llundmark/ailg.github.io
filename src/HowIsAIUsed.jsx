import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function HowIsAIUsed() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>How Is AI Actually Used?</h1>
        <p>In order to have a complete understanding of AI, it's important to know how users interact with AI software. There are a number of different uses for AI and naturally many AI tools are built with particular tasks in mind. For instance, Midjourney is recommended for artistically styled images. <br/>
        Just as you might compare design software, like Photoshop vs. Clip Studio Paint, you will find a different experience with each AI tool. However, there are some common components that you are likely to find in any AI right now. We'll go through a few of them here.</p>

        <h2>Hardware Requirements</h2>
        <p>One of the most important things to consider when exploring AI tools is whether or not your computer will be able to handle it. Web-based platforms like Leonardo.ai are fairly accessible in this regard. These applications operate by leveraging cloud-based, pre-trained models that process user input in real-time. Users submit requests via a web browser which are processed on powerful remote servers, allowing complex AI tasks without requiring local hardware resources. </p>

        <p>On the other hand, using a local environment for AI allows for greater customization, which can allow the user to create a model that is very efficient at a particular task.</p>

        <p>AI tools can be very demanding on computer hardware. Have you ever tried running Adobe AfterEffects on a cheap laptop? You would likely run into the same problems trying to use AI software locally. If it runs at all, it will be awfully slow and will likely crash at some point. </p>

        <p>Your best bet is to look at the hardware requirements for different AI tools and see what your computer can handle. That, or see what kind of AI-capable computer would be within your budget to buy. You can find more detailed recommendations online, but here are some minimum requirements for basic use:</p>

        <ul>
          <li>
          <strong>GPU</strong>: A high-performance GPU such as the NVIDIA GeForce RTX 30 series or RTX 40 series is recommended. VRAM (Video RAM) should be at least 8GB, preferably 16GB or more. As of this writing, most AI Models are optimized for NVIDIA GPUs, though AMD GPUs can be used. You will need an Apple Silicon to run on a Mac.[L5] 
          </li>
          <li>
            <strong>CPU</strong>: To get the most out of your GPU, you'll need a high-performance CPU, such as Intel Core i7/i9, AMD Ryzen 7/9, etc.
          </li>
          <li>
            <strong>Memory</strong>: You need memory capacity equal to or  greater than the GPU’s VRAM. For example, if your VRAM is 16GB, you need at least 16GB of memory.
          </li>
        </ul>

        <p>(Bear in mind these are recommendations for image generation)<button className="annotation" onClick={() => navigate('/cited-resources', { state:{ id:'cr-4' } })}>[4]</button></p>

        <h2>The Graphical User Interface (GUI)</h2>

        <p>This may seem pretty obvious, but most AI tools nowadays have a supporting GUI software, as opposed to simply using a command line. Web-based platforms will almost invariably have an interface designed to make use of their services. In the case of locally installed AI programs, the user may have multiple options for what GUI to use. For instance, if the user is setting up Stable Diffusion on their computer they can use programs like Automatic1111 or ComfyUI which offer very different user interfaces.</p>

        <h2>Models</h2>

        <p>The key component for any AI-powered workflow is the Model. A Model is basically a computer algorithm that is trained to recognize patterns and make predictions. There are several different types of Models based on how they were programmed and how they learn from data that is given to them. For the purposes of this guide, we won’t be getting too deep into the specifics of this but there are some great resources available for those interested.[L2]</p>

        <p>Web-based AI applications will typically have a list of pre-trained Models for the user to pick from.<br/> 
        When using locally-based AI, you can train your own Model or download a pre-trained Model from the internet. As of this writing, these will typically come in the form of a .safetensors file. Keep in mind that each of these will likely be a few gigabytes in size, so they will quickly eat up space on your hard drive.</p>

        <p>Once you have everything you need (in some cases, just an internet connection) you can start working with AI tools. From here, there are two things that will be helpful for you to know. One is <strong>Prompting</strong>, which is essential for generative AI, the other is <strong>Training</strong>, which is a little more advanced.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/key-vocabulary')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/key-vocabulary')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Key Vocabulary</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/prompts')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/prompts')
              }
            }}
          >
            <span>Prompts</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowIsAIUsed
