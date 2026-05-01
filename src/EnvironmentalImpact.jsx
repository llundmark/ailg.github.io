import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function EnvironmentalImpact() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>Environmental Impact</h1>
        <h2>"Is it worth the price?"</h2>
        <p>How much does it cost? What's it worth? That seems to be all we can talk about sometimes. Whether it's an object, a person or an idea, we try to simplify these things down to a numerical value, usually in dollars. If we can treat it like a math problem, translate all the details into numbers and find a net positive or negative, maybe we can be sure if we're doing the right thing. On that note, let's talk about the environmental impact of Generative AI.</p>

        <p>For critics of Generative AI, and even many supporters, the cost of using it is a major concern. The benefits of this technology may be considerable, but as with many opportunities there will be a measure of risk. While the cost of AI and its infrastructure have not been completely measured as of yet, we are already aware that it is very demanding of resources. This has the potential to cause major problems in the long-term, both for society and our environment. If we are to make informed decisions about the use of AI, we cannot ignore future issues in favor of short-term profits.</p>

        <h2>A Need for Transparency</h2>

        <p>If history is any indication, what we don't know can hurt us. While we have some estimates and figures about the resources that the AI industry is consuming, there isn't nearly enough information made available. Multiple studies have made note of this discrepancy, for instance one analysis found that 84 percent of LLM use in May 2025 involved AI Models for which there has been no disclosure whatsoever about their environmental impact. Some of the figures and talking points circulating about AI's energy use can be traced back to industry-leader remarks which have no basis in fact.[17]</p>

        <p>While there has been more cooperation from open-source AI companies such as Meta Llama in this regard, we need a better industry standard of transparency if we want to know for certain the cost of AI.[18]</p>

        <h2>Power Consumption</h2>

        <p>While interacting an AI tool like ChatGPT may be quick and easy from the user's perspective, the computation it involves isn’t exactly pulled out of thin air. Many AI tools rely heavily on Cloud Computing. Cloud Computing is very much like a hardware rental service, where users can access powerful computers and large amounts of storage without having to physically own them. This is nothing new, but the need for it has increased dramatically over the past few years in no small part because of AI. </p>

        <p>This leads to the issue of Data Centers. All of the hardware used for AI needs to be housed somewhere, and so to meet the increased demand for AI tools, companies and governments are investing in the construction of many new Data Centers. As of 2025, there were about 4000 Data Centers in the U.S., with 3000 more planned or currently under construction.[19] Although this will provide work and jobs for many people, maintaining these Data Centers requires a massive amount of resources. According to the Electric Power Research Institute (EPRI), it is not unusual to see new data centers being built with energy needs of 100 to 1000 megawatts, roughly equivalent to powering between 80,000 to 800,000 households.[16]</p>

        <p>In a study by the U.S. Government Accountability Office, researchers state “Training one large generative AI model can take tens of thousands of processors running for months and may cost several hundred million dollars.”[16] The energy cost of AI is not limited to training either. Queries from millions of users contribute to this, and researchers have estimated that a ChatGPT query consumes about five times more electricity than a simple web search. It's important to note that these electricity demands are typically met through fossil fuel-based power plants. While all machine-learning models must be trained, one issue unique to generative AI is the rapid fluctuations in energy use that occur over different phases of the training process. Power grid operators must have a way to absorb those fluctuations to protect the grid, and they usually employ diesel-based generators for that task.[20]</p>

        <h2>Hardware and Water</h2>

        <p>For each new Data Center being built, there is a need for a massive amount of computer hardware for servers, data storage drives, and networking equipment. Large Data Centers typically contain at least 5000 servers. In 2025, a direct result of this demand for hardware was a shortage of components such as memory, hard drives and GPUs. Computers and gadgets were suddenly much more expensive, as these components doubled or tripled in price.[21][22]</p>

        <p>A point of concern with Data Centers which may not be readily apparent is the amount of water they use. Computer equipment generates a lot of heat while it is being used, especially in the case of GPUs. Chilled water is used to cool Data Centers by absorbing heat from computing equipment. It has been estimated that, for each kilowatt hour of energy a data center consumes, it would need two liters of water for cooling. Depending on where you live this might not sound like a big deal, but for cities and ecosystems prone to draught this can be a very important consideration.[20]</p>


        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
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
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Essential Principles</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
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
            <span>AI in the News</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default EnvironmentalImpact
