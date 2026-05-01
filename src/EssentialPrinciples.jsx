import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function EssentialPrinciples() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>Essential Principles</h1>
        <p>We find ourselves in an interesting time in regards to technology and our social structures. As of this writing (Spring 2026), Generative AI is still new and mysterious to many. Much of our exposure to it is limited to news articles and some weird-looking images or videos on social media. At the same time, there seems to be an urgent, almost frantic, response to it from industry leaders and venture capitalists. Bill Gates, co-founder of Microsoft, has said that AI is “as fundamental as the creation of the microprocessor, the personal computer, the Internet, and the mobile phone.”[8]
        </p>

        <p>Going back to our car analogy, the automobile is an invention that had a profound impact on people around the world. It has empowered us to travel great distances at speeds that were largely impossible before. As with many things, however, this utility can be misused and can even be dangerous. Over time we have developed systems to regulate the use of automobiles - like traffic laws, the Department of Motor Vehicles, and other delightful things.</p>

        <p>By comparison, we have had very little time to figure out proper regulations for AI. There is a seemingly persistent grey area in the ethics and legality of generative AI that we will discuss a bit here.</p>

        <p>Ethics in the field of A.I. is a subject that has seen a great increase in attention over the past few years, much like A.I. itself. We are beginning to formalize a system for the responsible use of A.I. in business and society. Until our government engraves these practices into law it is everyone's responsibility to ensure that this technology causes as little harm as possible.</p>

        <p>Organizations and academics around the world are exploring possibilities for a reliable system to regulate the use of AI. Notable groups include the U.S. Department of Defense (now called the Department of War), Northern Illinois University, and Deloitte.[10][11][12]<br/>
        In many of their studies, some consistent themes and principles have emerged.[1]</p>

        <ul>
          <li>Transparency and Understandability</li>
          <li>Fairness and Impartiality</li>
          <li>Robustness and Reliability</li>
          <li>Privacy</li>
          <li>Accountability and Responsibility</li>
          <li>Safety and Security</li>
        </ul>

        <h2>Transparency and Understandability</h2>

        <p>Transparency in the case of A.I. and software means being open and honest about if and how A.I. tools were used in the development of a product. It should also be made clear what methods these systems use to function. Transparency is critical for building trust and ensuring accountability. Various sources recommend sharing more information to improve transparency in AI development and implementation.</p>

        <p>This information should also be presented in a way that non-experts can understand. Information transparency is considered beneficial when it supplies the necessary information or explains how that information is restricted by regulations. Needless to say, this practice is compromised if incorrect information is shared. It can also be misleading if too little or too much information, designed to confuse the reader, is given.</p>

          <h2>Fairness and Impartiality</h2>

          <p>Fairness and Impartiality are very similar in concept. In order for A.I. systems to be beneficial for everyone, they must treat individuals and groups equally and without bias. This is an understandably difficult task, given that these systems are developed by human beings who can make mistakes and may not always be aware of their own biases. Ultimately, how an A.I. tool perceives the data it is given will be a reflection of its creators' perceptions. </p>

          <p>Another important part of this principle is to make the benefits of A.I. accessible and comprehensible to a diverse audience. The use of A.I. should not be restricted to particular groups based on their social or financial status. Using straightforward language and proper user experience practices, A.I. tools should be made accessible to as many people as possible.</p>

          <h2>Robustness and Reliability</h2>

          <p>It is essential for us to ensure that A.I. systems are dependable and consistently ethical. This should remain the case even in challenging scenarios, like where there is adversarial interference or errors made by implementers. A reliable A.I. system is one that works for its intended purpose and performs the same way under the same conditions. This has more to do with the competency of the developers, but is critical for building trust in an A.I. system.</p>

          <h2>Privacy</h2>

          <p>Privacy, especially data privacy, is a common topic when dealing with software and the internet. It is just as prevalent an issue, if not more so, when dealing with A.I. systems which function by consuming vast amounts of information. Much like our interactions with social media and the internet at large, we should be careful about what information we share with AI tools. </p>

          <p>On the other side of this equation, anyone training AI Models should practice an ethical handling of information. Consider the sensitivity of data when selecting and using AI applications. Exercise extreme caution with vulnerable populations and any personally identifiable information. Care and attention should also be paid to how a particular AI application stores, uses and learns from that data.[15]</p>

          <h2>Accountability and Responsibility</h2>

          <p>Humans create algorithms and the data they rely on, and there is always a human ultimately responsible for the decisions influenced by an algorithm. Blaming "the algorithm" is not an acceptable excuse when algorithmic systems make errors or lead to unintended consequences, even in cases involving machine learning processes.</p>

          <p>In this context, accountability entails reporting, explaining or justifying algorithmic decision-making. Any adverse social impacts or potential harms need to be addressed and mitigated as well. This also ties into the principle of transparency in that it requires cataloguing the development process and making that information accessible.</p>

          <h2>Safety and Security</h2>

        <p>Any utility designed to be used by human beings is incomplete without taking safety into consideration. This involves preventing harm to an individual's physical well-being as well as the psychological, social, and environmental aspects of their well-being. When developing or using AI, the safety risks encountered in a project will depend on various factors, including the algorithms and machine learning techniques employed, data sources, the project objective and problem being addressed.</p>

        <p>It's considered a best practice to incorporate safety considerations related to accuracy, reliability, security, and robustness at every stage of a project's life cycle. This should involve the rigorous application of testing, validation, verification, and ongoing system safety monitoring.[1]</p>


        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/ai-powered-software')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/ai-powered-software')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>AI-Powered Software</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/environmental-impact')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/environmental-impact')
              }
            }}
          >
            <span>Environmental Impact</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default EssentialPrinciples
