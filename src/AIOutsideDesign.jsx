import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function AIOutsideDesign() {
  const navigate = useNavigate()

  return (
    <div className="page-canvas">
      <div className="page-content">
        <h1>AI Outside of Design</h1>
        <p>AI is a technology that has a wide range of uses and it's likely we will see it more often in the coming years. While the focus of this guide is on how it is used in graphic design, understanding how AI has impacted other industries may also be beneficial. Although AI software is relatively new in the field of design, it has had successful implementations elsewhere. It's entirely likely that proponents of AI integration are basing their enthusiasm on this.</p>

        <h2>Healthcare</h2>

        <p>One of the more promising uses of AI is in the field of medicine and healthcare. AI is capable of analyzing vast amounts of patient data to find common health needs. When given an individual's health problems and history, the AI can then predict what the most effective treatment would be. They call this personalization of care Precision Medicine. In addition to this, AI has been used to great effect in drug development and managing clinical trials. <button className="annotation" onClick={() => navigate('/cited-resources', { state: { id: 'cr-1' } })}>[1]</button></p>

        <h2>Technology</h2>

        <p>Something that will no doubt have an impact on the general public is the release of new AI-powered gadgets. We have seen limited use of these so far, but they will likely improve in their performance and accessibility with further development. Here are some examples:</p>

        <ul>
          <li><strong>Virtual Assistants</strong>: Many industries are adopting virtual assistants to aid users, exemplified by Tesla's Tesla Bot, which offers real-time assistance.</li>
          <li><strong>Self-Driving Cars</strong>: Organizations are developing self-driving cars to improve safety and security during journeys compared to traditional manual driving.</li>
          <li><strong>Robotics</strong>: AI is revolutionizing robotics by enabling robots to draw upon past experiences to solve tasks, expanding their capabilities beyond repetitive functions. <button className="annotation" onClick={() => navigate('/cited-resources', { state: { id: 'cr-1' } })}>[1]</button></li>
        </ul>

        <h2>Financial Services</h2>

        <p>AI can make wealth management more accessible and efficient. Robo-investment platforms use AI to create personalized investment strategies, managing portfolios based on goals and risk tolerance. This approach reduces costs and offers constant portfolio monitoring without requiring direct human oversight.</p>

        <p>That being said, this field is one of the most likely targets for exploitation and misuse of AI. With banks now able to access diverse customer data sets and harness the creative power of AI, the potential for personalized advertisements and customized financial products is immense. At the same time, the balance between relevance and privacy becomes increasingly delicate.</p>

        <p>It's not just about banks and institutions using AI legitimately. Generative AI can produce misleading or even fictitious adverts, potentially ushering in an era of deepfakes that trick consumers or leave them doubting what's real. <button className="annotation" onClick={() => navigate('/cited-resources', { state: { id: 'cr-2' } })}>[2]</button></p>

        <h2>Education</h2>
        <p>In education, AI can be seen integrated into a curriculum in three different ways: </p>
        <ul>
        <li><strong>AI-Guided</strong>: learners take on the role of active participants.</li>
        <li><strong>AI-Assisted</strong>: fosters collaboration between learners and technology. </li>
        <li><strong>AI-Empowered</strong>: learners use AI for self-directed exploration, research, and critical thinking in their educational journey.</li>
        </ul>

        <p>Artificial Intelligence in Education (AIEd) has demonstrated its potential to benefit not only learners but also educators. A noteworthy manifestation of this potential is the development of automated assessment systems designed to assist teachers in evaluating students' knowledge. <button className="annotation" onClick={() => navigate('/cited-resources', { state: { id: 'cr-1' } })}>[1]</button></p>

        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
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
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Training</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/ai-in-design')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/ai-in-design')
              }
            }}
          >
            <span>AI in Design</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AIOutsideDesign
