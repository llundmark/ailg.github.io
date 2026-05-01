import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function Prompts() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>Prompts</h1>
        <p>A prompt is the instruction, question, or discussion topic you type into a generative AI tool to get a response. Most AI tools will feature a text box where the user basically explains to the AI what they want, much like how you would interact with an internet search engine. <br/>
        Prompts can be short or detailed depending on the level of complexity you need in your end result; however, being clear and specific in your prompt writing will lead to more relevant responses from your AI tools.[6]</p>

        <p>Writing prompts that result in quality output from an AI has its own method to it. Each AI tool will respond to a prompt a bit differently, so it's important to spend time familiarizing yourself with the tool you plan to use and all its quirks. Outside of that, there are some elements that you would typically want to include in a prompt to make it as effective as possible.</p>

        <ul>
          <li>
            <strong>Role</strong>: Prompts starting with "act as..." or "pretend to be..." will provide responses in a similar style as a person who holds that role. Picking a role for the AI tool will determine the type of information you'll receive and the way the information is communicated back to you. Roles can also help determine the interactivity of the conversation.
          </li>
          <li>
            <strong>Task</strong>: The task is a summary of what you want the prompt to do. This generally describes whatever output you need from the AI. For instance, this can be a study guide, a background image or any kind of data the AI is trained to generate.
          </li>
          <li>
            <strong>Requirements</strong>: AI models will make assumptions for any information they don't have in the prompt. Consider it like communicating your needs to another person, except they don’t have any common sense. Eliminating any wrong assumptions the AI might make requires writing a clear and descriptive prompt, often with more information than you think is necessary. It's helpful to define what the output should look like and list any conditions that might affect the output. 
          </li>
          <li>
            <strong>Instructions</strong>: Instructions will tell the AI how to complete the task. Instructions can include examples of how you want the AI to do the  work, and it can include steps the AI can follow or any other  information you think the AI needs to have.
          </li>
        </ul>

        <h3>An Example Prompt:[7]</h3>

        <ul>
          <li>
            <strong>Role</strong>: “Act as a college communications instructor.”
          </li>
          <li>
            <strong>Task</strong>: “Analyze the tone of this paragraph and suggest edits to make it more professional and persuasive.”
          </li>
          <li>
            <strong>Requirements</strong>: “Maintain the original meaning and use clear, accessible language.”
          </li>
          <li>
            <strong>Instructions</strong>: “Provide both a revised version and a brief explanation of what you changed and why.”
          </li>
        </ul>

        <p>Depending on the user interface of your application, and which Model you are using, you may be able to provide your AI with multiple forms of input. For instance, in an application like Leonardo.ai you can upload an image file from your computer for it to use as a reference in addition to your prompt.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/how-is-ai-used')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/how-is-ai-used')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>How is AI actually used?</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/training')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/training')
              }
            }}
          >
            <span>Training</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Prompts
