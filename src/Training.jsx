import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function Training() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>Training</h1>
        <p>As you might expect from computer software, how involved you are with the setup of your AI will depend on how complex your project is. For many writing and basic generation tasks, you can safely rely on the pre-trained Models provided by web-based applications. Generally, how much customization you can access from these will depend on how much money you can put into your subscription. You can train custom Models on cloud-based platforms with providers like Azure ML or AWS SageMaker. How cost-effective that will be compared to training with local hardware will depend on your project size and how often you will be training AI.</p>

        <h2>An Overview of Training</h2>

        <h3>Choosing a Base Model</h3>

        <p>While most Base Models are made to be general-purpose, they still may be better suited to particular tasks because of their architecture.[L2]</p>

        <p>Here are some examples of Base Models. There are several others, but these are Open Source and therefore free to access. Most of these can be found on internet repositories like Huggingface.</p>

        <p><a href="https://stable-diffusion-art.com/sdxl-model/">SDXL</a> - Stable Diffusion Model suited for image generation.</p>
        <p><a href="https://www.llama.com/">Meta Llama</a> - Auto-regressive language Model great as a chatbot or LLM.</p>
        <p><a href="https://deepmind.google/models/gemma/">Google Gemma</a></p> - You can get multiple variations of Gemma for general and specific use cases.

        <h3>Choosing a Machine Learning Platform</h3>

        <p>Once you have decided on a Base Model, you will need some way of actually training it. This part of the process can also be called Fine-Tuning a Model.</p>

        <p><a href="https://cloud.google.com/vertex-ai">Vertex AI</a> - Offers managed training services, including custom training jobs, hyperparameter tuning, and support for pre-built or custom Docker containers to run PyTorch or TensorFlow code.</p>
        <p><strong>Side Note</strong> - In order to access Vertex AI, they require you to use a Google account that has administrator privileges and billing. You may not be able to use your account if it's a student account for college.</p>
        <p><a href="https://pytorch.org/get-started/locally/">Pytorch</a> - An Open-Source framework for training AI. Some experience using Python will be helpful, as this framework requires a Python installation to run on your computer.</p>
        <p><a href="https://www.tensorflow.org/">Tensorflow</a> - TensorFlow is an open-source platform for machine learning using data flow graphs.</p>
        <p><a href="https://huggingface.co/docs/diffusers/training/dreambooth">DreamBooth</a> - DreamBooth is used to fine-tune Text-to-Image Diffusion Models like SDXL.</p>

        <h3>Gathering a Dataset</h3>

        <p>The most difficult part of the process may be deciding on what data to use to train your Model. Most experts in AI will tell you that the quality of your Custom Model will depend largely on the quality of the data you provide it. Some Models will require certain characteristics for the data that is used, for instance Stable Diffusion v1.5 needs to be trained on images that are 512 pixels in width and 512 pixels in height.</p>

        <p>
        Knowing what kind of data counts as 'high-quality' for your purposes may take some research and experimentation. Clearly defining what you want your Custom Model to do will help a great deal. The Training Platform you use may also have tools and options for extra input to help with this process. As usual, looking through the documentation and tutorials for your Base Model, Platform should point you in the right direction. While we won't be going further into the process of AI Training here, we will include links to some interesting tutorials and other internet resources on the Useful Links page.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
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
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Prompts</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/ai-outside-design')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/ai-outside-design')
              }
            }}
          >
            <span>AI Outside of Design</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Training
