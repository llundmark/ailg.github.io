import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function KeyVocabulary() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>Key Vocabulary</h1>
        <p>In learning about AI, there are a lot of frequently-used terms that aren't always explained adequately. There are plenty that have already been used in previous pages of this guide. This page is for collecting those terms and giving them a detailed explanation. 
        </p>

        <h2>Application Programming Interface (API)</h2>
        <p>An API is a set of rules and protocols that allow different software programs to communicate with each other and exchange data. It acts as a messenger or intermediary, enabling applications to interact without needing to understand the internal workings or underlying code of the other system</p>

        <h2>Big Data</h2>
        <p>Big data refers to massive, complex, and high-speed datasets that traditional data processing tools cannot manage. It works by collecting and analyzing data from sources like social media, sensors, and transactions to reveal patterns.</p>

        <h2>Data</h2>
        <p>In the context of generative AI, data is any form of information that can be stored and understood by a computer. Most commonly, this is text, images, sound or videos.</p>

        <h2>Deep Learning</h2>
        <p>Deep Learning is a type of machine learning made possible through multilayered neural networks. This design is inspired by the structure of the human brain.</p>

        <h2>Generative Pre-trained Transformer (GPT)</h2>
        <p>A generative pre-trained transformer is a type of large language model (LLM) that is widely used in generative artificial intelligence chatbots. GPTs are based on a deep learning architecture called the transformer. They are pre-trained on large datasets of unlabeled content, and able to generate novel content.[W2]</p>

        <h2>Large Language Model (LLM)</h2>
        <p>A Large Language Model (LLM) is a type of AI designed to understand, generate, and process human-like text by analyzing massive datasets. Using deep learning and transformer architectures, these models predict the most likely next words in a sequence to generate coherent  responses, power chatbots, and perform tasks like translation and coding.</p>

        <h2>Low-Rank Adaptation (LoRA)</h2>
        <p>Small, fine-tuned models used to add specific characters, styles, or objects to a base model.</p>

        <h2>Machine Learning</h2>
        <p>Machine Learning (ML) is a field of study in artificial intelligence concerned with the development and study of statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit programming language instructions.</p>

        <h2>Model</h2>
        <p>AI models are mathematical representations of data used to make  predictions or decisions. They range from simple linear regression models to advanced large language models.[3]</p>

        <h2>Neural Networks</h2>
        <p>A neural network consists of connected units or nodes called artificial neurons, which loosely model the neurons in the brain. These are connected by edges, which model the synapses in the brain. Each artificial neuron receives signals from connected  neurons, then processes them and sends a signal to other connected  neurons. The strength of the signal at each connection is determined by a weight, which adjusts during the learning process. [W3]</p>

        <h2>Prompt</h2>
        <p>A prompt in generative AI is a specific input, which can be text, image, or a piece of code, given to a model to guide its output. It acts as a set of instructions, questions, or context that tells the AI what content to generate.</p>

        <h2>Training</h2>
        <p>AI training is the process of teaching artificial intelligence systems to perform specific tasks. It involves using large datasets and sophisticated algorithms to help AI models learn patterns, solve problems, and make decisions. In effect, the end result is a Model that is suited to a certain behavior, like creating images with a particular style.[3]</p>

        <h2>Transformer</h2>
        <p>In the context of generative AI, the transformer is a primary component in the process of training an AI. Current technology allows an AI to process multiple pieces of data at once and assign each of them a relative value, typically a number. This allows the AI to decide how important each piece of data is compared to others, which helps in predicting what the next piece in a sequence of data should be.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/who-builds-ai')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/who-builds-ai')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Who Builds AI?</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
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
            <span>How is AI Actually Used?</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default KeyVocabulary
