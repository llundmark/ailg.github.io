import './index.css'
import cartoon1 from './assets/AILGp3com1.png'
import cartoon2 from './assets/AILGp3com2.png'
import diagram from './assets/neuralnetwork.png'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function HowDoesAIWork() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>How Does AI Work?</h1>
        <p>This is a simple question, but it has a fairly complicated answer. 
        It's kind of like asking how a car works. Plenty of people know what a car is and how they are used, but not nearly so many could tell you exactly what happens inside a car to make it work. If you were asked to build a car from scratch, where would you even start? Some people might know, but they would surely tell you it's a complicated process and one that can be done in many different ways.</p>

        <p>Much like driving a car, we don't have to understand everything about AI to make use of it. It can however be beneficial to the user to understand some basic things about it. With both of these technologies, we should use them safely and responsibly. While this guide is not designed to make you an expert on the subject, we can cover some essential points. </p>
        <div className="image-wrapper">
          <img src={cartoon1} alt="panda car cartoon"/>
        </div>
        <h2>An Introduction to Machine Learning</h2>

        <p>As mentioned on the previous page, AI has been applied to many different technologies. Exactly how it's being used will change depending on the intended result, whether that is an AI assistant taking voice commands or an application that generates images based on a prompt.
        One thing they all have in common is they are programmed to analyze sets of data and find patterns in them. For this to work, computer programmers draw inspiration from humans themselves.</p>

        <p>Most modern AI programs are based on the human brain.\n
        Granted, the brain is something that scientists are still studying so we can't say we have the know-how for a perfect recreation. We can do a basic imitation though, which brings us to something called Neural Networks.</p>

        <p>Without getting too heavily into computer programming (or neuroscience for that matter), let's try looking at how a Neural Network functions.</p>

        <h3>Recreating the Brain in Software</h3>

        <p>The basic building block of a Neural Network is the neuron. Each neuron has a particular function and helps the body to do things like store memories or control muscles. The human brain typically contains almost 100 billion neurons. Each neuron has connections to other neurons and they work together to make the human body function.</p>

        <p>The brain constantly receives signals from the body - what we see, hear and feel among other things. The brain also sends signals, reacting to what our body tells it. Each time signals are sent or received, neurons are activated in the brain. The connections that these neurons maintain will change the more they are activated. This is part of the human process of learning.
        </p>
        <p>
        For instance, when we perform a physical action like throwing a ball or practicing a musical instrument, there is a set of neurons that are activated. The connections in that set of neurons become stronger the more we perform that action. As a result, we become faster and more 'comfortable' with those actions.[23] </p>

        <div className="image-wrapper">
          <img src={diagram} alt="neuron vs neural network"/>
        </div>
        <p>Source: A Gentle Introduction to Neural Networks by Jacob Joseph, CleverTap</p>

        <p>In the case of Artificial Intelligence, the computer programmer creates a data structure that imitates how a brain functions. \nThe neurons become data objects called nodes with their own sets of functions and connections. These nodes receive input in the form of images, text or other data, much like how neurons receive signals from the body. The nodes then work together to form an output. In the body, this would be a signal from the brain to the body's muscles or organs but for AI this can be text, an image or any other form of data.</p>

        <p>A Quick Disclaimer: This is all a massive simplification and only meant to give the reader a way to visualize how AI works. Both the brain and AI have a lot more involved in how they function and I highly recommend learning more about them. It's fascinating, I promise.[24][25][26][27]</p>

        <h2>Data. <em>Lots</em> of Data</h2>

        <p>Each AI program is created with a particular function in mind. There are many potential uses for AI, like creating content or finding trends within large amounts of data. In any case, the program needs to be trained to perform that function.\n
        Training an AI is a little bit like teaching a dog to do a trick. Each time the AI receives data input it will create an output. The person doing the training will then give the AI positive or negative feedback based on the output. This would be like telling a dog to “sit”, and giving it a treat when it sits down. The AI will adjust its behavior each time it receives feedback so that it gets positive results more often.</p>

        <p>
        One term you may hear when learning about AI is Large Language Model (LLM for short). These programs deal mainly with text input and interpret commands, or prompts, given by the user. ChatGPT, developed by OpenAI, is one such AI program that uses an LLM. In training ChatGPT, OpenAI had it analyze roughly 570 gigabytes of text data - which amounts to about 300 billion words.[29]</p>

        <div className="image-wrapper">
          <img src={cartoon2} alt="panda with robot cartoon"/>
        </div>

        <h3>Something to Think About</h3>

        <p>As you learn more about AI, you might find a bit of a disconnect between the way it’s presented in the media and the way it actually is. You might think, “If AI is so smart and useful, why does it need so much data? Why does it need thousands of pictures of a tree to know what a tree is?”\n
        The thing is, while AI technology will continue to develop in the coming years, right now it just isn’t all that smart. Training an AI takes a massive amount of trial and error\n
        BloombergGPT, another LLM, took 1.3 million hours of graphics processing unit time to train. Furthermore, the result of this is not a program that understands the task it is given.[28] 
        As many sources will tell you, AI is built to find patterns in data and make predictions. The more data it is given, the more successful it is at making those predictions. If you tell it to “Draw a picture of a tree”, it can only make a guess at what you want and draw based on data it has been trained on.</p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/what-is-ai')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/what-is-ai')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>What is Artificial Intelligence (AI)?</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/why-would-we-want-to-use-ai')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/why-would-we-want-to-use-ai')
              }
            }}
          >
            <span>Why would we want to use AI?</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowDoesAIWork
