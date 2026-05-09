import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate, useLocation } from 'react-router-dom';

function CitedResources() {
  const navigate = useNavigate();
  const pathname = useLocation();
let sectionDest = pathname.state?.id;
let elementFromID  = document.getElementById(sectionDest);
//console.log(sectionDest);
//console.log(elementFromID);

if(elementFromID){
    //console.log("found element")
    elementFromID.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

  return (
    <div className="page-canvas">
      <div className="page-content">

        {/* <div className="citation">

          <p className="citation-num">[1]</p>

          <div className="citation-text">
          <p className="citation-header"><strong></strong></p>
          <p></p>
          <a href=""></a>
          </div>
        </div> */}


        <h1>Cited Resources</h1>
        <p>This page is a complete collection of the written works, websites and other materials that were used as sources of information for this project.</p>

         <div className="citation" id="cr-1">

          <p className="citation-num">[1]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>A REVIEW OF THE ETHICS OF ARTIFICIAL INTELLIGENCE AND ITS APPLICATIONS IN THE UNITED STATES</strong></p>
          <p>Taiwo Esther, Akinsola, Ahmed Tella, Edward, Makinde, Kolade, Akinwande, Mayowa<br/>
          Department of Computer Science, Austin Peay State University, Clarksville USA.<br/>
          International Journal on Cybernetics & Informatics (IJCI) Vol.12, No.6, December 2023</p>
          </div>
        </div> 

        <div className="citation" id="cr-2">

          <p className="citation-num">[2]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>How generative AI is transforming financial services - and what it means for customers</strong></p>
          <p>Emmanuel Mogaji</p>
          <a href="https://theconversation.com/how-generative-ai-is-transforming-financial-services-and-what-it-means-for-customers-246649" target="_blank" rel="noreferrer">https://theconversation.com/how-generative-ai-is-transforming-financial-services-and-what-it-means-for-customers-246649</a>
          </div>
        </div>

        <div className="citation" id="cr-3">

          <p className="citation-num">[3]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>What is AI Training?</strong></p>
          <p>Akamai</p>
          <a href="https://www.akamai.com/glossary/what-is-ai-training" target="_blank" rel="noreferrer">https://www.akamai.com/glossary/what-is-ai-training</a>
          </div>
        </div>

        <div className="citation" id="cr-4">

          <p className="citation-num">[4]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Hardware Requirements for Generative AI: Building a Suitable Environment</strong></p>
          <p>AI Prompt</p>
          <a href="https://service.ai-prompt.jp/en/article/hardware-requirements/" target="_blank" rel="noreferrer">https://service.ai-prompt.jp/en/article/hardware-requirements/</a>
          </div>
        </div>

        <div className="citation" id="cr-5">

          <p className="citation-num">[5]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>AI for Graphic Designers: 3 Major Benefits</strong></p>
          <p>Adobe</p>
          <a href="https://www.adobe.com/products/firefly/discover/ai-for-graphic-designers.html" target="_blank" rel="noreferrer">https://www.adobe.com/products/firefly/discover/ai-for-graphic-designers.html</a>
          </div>
        </div>

        <div className="citation" id="cr-6">

          <p className="citation-num">[6]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Generative AI Prompt Writing</strong></p>
          <p>Sheridan College</p>
          <a href="https://sheridancollege.libguides.com/gen-ai-prompt-writing-module/writing-effective-AI-prompts/what-is-a-prompt" target="_blank" rel="noreferrer">https://sheridancollege.libguides.com/gen-ai-prompt-writing-module/writing-effective-AI-prompts/what-is-a-prompt</a>
          </div>
        </div>

        <div className="citation" id="cr-7">

          <p className="citation-num">[7]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Generative AI Prompt Writing - Writing Prompts</strong></p>
          <p>Sheridan College</p>
          <a href="https://sheridancollege.libguides.com/gen-ai-prompt-writing-module/writing-prompts" target="_blank" rel="noreferrer">https://sheridancollege.libguides.com/gen-ai-prompt-writing-module/writing-prompts</a>
          </div>
        </div>

        <div className="citation" id="cr-8">

          <p className="citation-num">[8]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Bill Gates: AI is most important tech advance in decades</strong></p>
          <p>Tom Gerken - BBC News</p>
          <a href="https://www.bbc.com/news/technology-65032848" target="_blank" rel="noreferrer">https://www.bbc.com/news/technology-65032848</a>
          </div>
        </div>

        <div className="citation" id="cr-9">

          <p className="citation-num">[9]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>What are Foundation Models?</strong></p>
          <p>Google</p>
          <a href="https://cloud.google.com/discover/what-are-foundation-models" target="_blank" rel="noreferrer">https://cloud.google.com/discover/what-are-foundation-models</a>
          </div>
        </div>

        <div className="citation" id="cr-10">

          <p className="citation-num">[10]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>AI Ethical Guidelines</strong></p>
          <p>Northern Illinois University</p>
          <a href="https://www.niu.edu/artificial-intelligence/ethical-guidelines/index.shtml" target="_blank" rel="noreferrer">https://www.niu.edu/artificial-intelligence/ethical-guidelines/index.shtml</a>
          </div>
        </div>

        <div className="citation" id="cr-11">

          <p className="citation-num">[11]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>The Trustworthy AITM Approach</strong></p>
          <p>Deloitte</p>
          <a href="https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/services/ethics-of-ai-framework.html" target="_blank" rel="noreferrer">https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/services/ethics-of-ai-framework.html</a>
          </div>
        </div>

        <div className="citation" id="cr-12">

          <p className="citation-num">[12]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>DOD Adopts Ethical Principles for Artificial Intelligence</strong></p>
          <p>U.S. Department of War</p>
          <a href="https://www.war.gov/News/Releases/release/article/2091996/dod-adopts-ethical-principles-for-artificial-intelligence/" target="_blank" rel="noreferrer">https://www.war.gov/News/Releases/release/article/2091996/dod-adopts-ethical-principles-for-artificial-intelligence/</a>
          </div>
        </div>

        <div className="citation" id="cr-13">

          <p className="citation-num">[13]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>How to use AI for product design: 7 use cases</strong></p>
          <p>Figma</p>
          <a href="https://www.figma.com/resource-library/ai-for-product-design/" target="_blank" rel="noreferrer">https://www.figma.com/resource-library/ai-for-product-design/</a>
          </div>
        </div>

        <div className="citation" id="cr-14">

          <p className="citation-num">[14]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>The Intersection of Design Thinking and AI: Enhancing Innovation</strong></p>
          <p>IDEO U</p>
          <a href="https://www.ideou.com/blogs/inspiration/ai-and-design-thinking?srsltid=AfmBOopQOgGrVGMBErv1KdWfu10xRPZ5EsX8gL9rD1qRuLy39D9jeXi2" target="_blank" rel="noreferrer">https://www.ideou.com/blogs/inspiration/ai-and-design-thinking?srsltid=AfmBOopQOgGrVGMBErv1KdWfu10xRPZ5EsX8gL9rD1qRuLy39D9jeXi2</a>
          </div>
        </div>

        <div className="citation" id="cr-15">

          <p className="citation-num">[15]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>AI Ethical Guidelines</strong></p>
          <p>Northern Illinois University</p>
          <a href="https://www.niu.edu/artificial-intelligence/ethical-guidelines/index.shtml" target="_blank" rel="noreferrer">https://www.niu.edu/artificial-intelligence/ethical-guidelines/index.shtml</a>
          </div>
        </div>

        <div className="citation" id="cr-16">

          <p className="citation-num">[16]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Generative AI's Environmental and
          Human Effects</strong></p>
          <p>Brian Bothwell, Kevin Walsh<br/>
            United States Government Accountability Office<br/>
            Technology Assessment: Artificial Intelligence, GAO-25-107172, April 2025</p>
          <a href="https://www.gao.gov/assets/gao-25-107172.pdf" target="_blank" rel="noreferrer">https://www.gao.gov/assets/gao-25-107172.pdf</a>
          </div>
        </div>

        <div className="citation" id="cr-17">

          <p className="citation-num">[17]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>How Much Energy Does AI Use? The People Who Know Aren't Saying</strong></p>
          <p>Molly Taft<br/>
          Wired, June 2025</p>
          <a href="https://www.wired.com/story/ai-carbon-emissions-energy-unknown-mystery-research/" target="_blank" rel="noreferrer">https://www.wired.com/story/ai-carbon-emissions-energy-unknown-mystery-research/</a>
          </div>
        </div>

        <div className="citation" id="cr-18">

          <p className="citation-num">[18]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Energy costs of communicating with AI</strong></p>
          <p>Maximilian Dauner, Gudrun Socher<br/>
          Frontiers, June 2025</p>
          <a href="https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2025.1572947/full" target="_blank" rel="noreferrer">https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2025.1572947/full</a>
          </div>
        </div>

        <div className="citation" id="cr-19">

          <p className="citation-num">[19]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>America's data center growth hot spots, mapped</strong></p>
          <p>Alex Fitzpatrick<br/>
          Axios, December 2025</p>
          <a href="https://www.axios.com/2025/12/18/data-center-growth-map-states" target="_blank" rel="noreferrer">https://www.axios.com/2025/12/18/data-center-growth-map-states</a>
          </div>
        </div>

        <div className="citation" id="cr-20">

          <p className="citation-num">[20]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Explained: Generative AI's environmental impact</strong></p>
          <p>Adam Zewe<br/>
          MIT News, January 2025</p>
          <a href="https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117" target="_blank" rel="noreferrer">https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117</a>
          </div>
        </div>

        <div className="citation" id="cr-21">

          <p className="citation-num">[21]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Thanks a lot, AI: Hard drives are already sold out for the entire year, says Western Digital</strong></p>
          <p>Matt Binder<br/>
          Mashable, February 2026</p>
          <a href="https://mashable.com/article/ai-hard-drive-hdd-shortages-western-digital-sold-out?utm_source=firefox-newtab-en-us" target="_blank" rel="noreferrer">https://mashable.com/article/ai-hard-drive-hdd-shortages-western-digital-sold-out?utm_source=firefox-newtab-en-us</a>
          </div>
        </div>

        <div className="citation" id="cr-22">

          <p className="citation-num">[22]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Explainer: The RAMpocalypse is making memory, SSDs, and even GPUs much more expensive, and it's all down to AI</strong></p>
          <p>Jacob Fox<br/>
          PCGamer, January 2026</p>
          <a href="https://www.pcgamer.com/hardware/memory/ram-and-storage-is-ridiculously-expensive-right-now-because-of-drumroll-ai-of-course-and-theres-little-reason-to-think-prices-will-drop-any-time-soon/" target="_blank" rel="noreferrer">https://www.pcgamer.com/hardware/memory/ram-and-storage-is-ridiculously-expensive-right-now-because-of-drumroll-ai-of-course-and-theres-little-reason-to-think-prices-will-drop-any-time-soon/</a>
          </div>
        </div>

        <div className="citation" id="cr-23">

          <p className="citation-num">[23]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Brain Anatomy and How the Brain Works</strong></p>
          <p>Johns Hopkins Medicine</p>
          <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/anatomy-of-the-brain" target="_blank" rel="noreferrer">https://www.hopkinsmedicine.org/health/conditions-and-diseases/anatomy-of-the-brain</a>
          </div>
        </div>

        <div className="citation" id="cr-24">

          <p className="citation-num">[24]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>A Gentle Introduction to Neural Networks</strong></p>
          <p>Jacob Joseph<br/>
          CleverTap, January 2025</p>
          <a href="https://clevertap.com/blog/neural-networks/" target="_blank" rel="noreferrer">https://clevertap.com/blog/neural-networks/</a>
          </div>
        </div>

        <div className="citation" id="cr-25">

          <p className="citation-num">[25]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Brain</strong></p>
          <p>Cleveland Clinic, January 2025</p>
          <a href="https://my.clevelandclinic.org/health/body/22638-brain" target="_blank" rel="noreferrer">https://my.clevelandclinic.org/health/body/22638-brain</a>
          </div>
        </div>

        <div className="citation" id="cr-26">

          <p className="citation-num">[26]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>What is a Neural Network?</strong></p>
          <p>AWS Amazon</p>
          <a href="https://aws.amazon.com/what-is/neural-network/" target="_blank" rel="noreferrer">https://aws.amazon.com/what-is/neural-network/</a>
          </div>
        </div>

        <div className="citation" id="cr-27">

          <p className="citation-num">[27]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>What is a Neural Network?</strong></p>
          <p>Geeks for Geeks, April 2026</p>
          <a href="https://www.geeksforgeeks.org/deep-learning/neural-networks-a-beginners-guide/" target="_blank" rel="noreferrer">https://www.geeksforgeeks.org/deep-learning/neural-networks-a-beginners-guide/</a>
          </div>
        </div>

        <div className="citation" id="cr-28">

          <p className="citation-num">[28]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>AI training data: How much do you need?</strong></p>
          <p>Kevin Rubin<br/>
          Stratosphere Networks, February 2025</p>
          <a href="https://www.stratospherenetworks.com/blog/ai-training-data-how-much-do-you-need/" target="_blank" rel="noreferrer">https://www.stratospherenetworks.com/blog/ai-training-data-how-much-do-you-need/</a>
          </div>
        </div>

        <div className="citation" id="cr-29">

          <p className="citation-num">[29]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>“Big Data” isn't big enough to train generative AI</strong></p>
          <p>Dan Brightmore<br/>
          Interface, March 2024</p>
          <a href="https://interface.media/blog/2024/03/06/big-data-isnt-big-enough-to-train-generative-ai/" target="_blank" rel="noreferrer">https://interface.media/blog/2024/03/06/big-data-isnt-big-enough-to-train-generative-ai/</a>
          </div>
        </div>

        <h2>Wikipedia Articles</h2>

        <div className="citation" id="cr-w1">

          <p className="citation-num">[W1]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Generative AI</strong></p>
          <a href="https://en.wikipedia.org/wiki/Generative_AI" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Generative_AI</a>
          </div>
        </div>

        <div className="citation" id="cr-w2">

          <p className="citation-num">[W2]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Generative Pre-Trained Transformer</strong></p>
          <a href="https://en.wikipedia.org/wiki/Generative_pre-trained_transformer" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Generative_pre-trained_transformer</a>
          </div>
        </div>

        <div className="citation" id="cr-w3">

          <p className="citation-num">[W3]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Neural Network</strong></p>
          <a href="https://en.wikipedia.org/wiki/Neural_network_(machine_learning)" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Neural_network_(machine_learning)</a>
          </div>
        </div>

        <div className="citation" id="cr-w4">

          <p className="citation-num">[W4]</p>

          <div className="citation-text">
          <p className="citation-header"><strong>Machine Learning</strong></p>
          <a href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" rel="noreferrer">https://en.wikipedia.org/wiki/Machine_learning</a>
          </div>
        </div>



        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
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
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>About the Author</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CitedResources
