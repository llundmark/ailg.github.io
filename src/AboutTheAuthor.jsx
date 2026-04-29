import './index.css'
import rightChevron from './assets/chevron-right.svg'
import leftChevron from './assets/chevron-left.svg'
import { useNavigate } from 'react-router-dom'

function AboutTheAuthor() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-content">
        <h1>About the Author</h1>
        <p>Art has been a lifelong passion of mine, whether it is music, drawing or writing. In high school I would typically take part in any creative  club or event available, like the Literary Magazine club or Drama class. I would put a lot of effort into artistic assignments, especially  creative writing projects. Although I was very introverted at that age I came to be known for my writing, even at times being volunteered by  teachers and other students to read my stories aloud for the class. I  felt really proud being recognized for something, even if I had only  seen it as a hobby. Ever since then I’ve wanted to find a professional  role in which I could apply my creativity.</p>

        <p>While I keep my dreams and passions close to my heart, I tend to be  realistic in my expectations. Pursuing a degree in Computer Science  mostly stemmed from the idea that I wanted to actually find a job after  college. I figured I could work my way into a role that I enjoyed  somewhere down the line. While my progress in that has been gradual, I  feel like I have learned a lot and grown in ways I wouldn’t have  otherwise. What drew me to UX Design was that while it's in the field of design, there is a pragmatic side to it. Its focus on the effect of a  product on its consumer makes it a marketable skill in nearly any  industry. While there are plenty of established patterns and practices  in UX, I feel like it still rewards creative thinking. I have certainly  found it very engaging to use both sides of my brain in my work.</p>

        <p>My experience as a Software Developer has had a tangible impact on my  design career thus far. Besides granting me a familiarity with website  development languages like HTML, I have also found some development  practices that work well in design. For instance, if you approach design in a similar way to modular software development, you can create  reusable, interchangeable elements. This makes development and  maintenance of a design much faster in the long run.</p>

        <p>Reaching  this point in my professional life has brought many challenges, but it  has helped me to mature as a person. More so than the skills I have  learned along the way, I've become more confident in my decisions and comfortable in unfamiliar situations. Retooling for a new job can be  difficult but for me it has been just as much about reconnecting with my interests. I have found every part of the design process engaging.  While my career is still unfolding, I know that if I can establish  myself in design then I will have achieved my goal of becoming a  creative professional. Whatever direction I'm drawn toward from there, I will be in a much better position to pursue it. I'm determined to work  hard and with luck I'll have success in this field.</p>


        <div className="pageNav">
          <div
            className="wia-nav wia-nav-prev"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/useful-links')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/useful-links')
              }
            }}
          >
            <img src={leftChevron} alt="" aria-hidden="true" />
            <span>Useful Links</span>
          </div>
        
          <div
            className="wia-nav wia-nav-next"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/cited-resources')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate('/cited-resources')
              }
            }}
          >
            <span>Cited Resources</span>
            <img src={rightChevron} alt="" aria-hidden="true" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutTheAuthor
