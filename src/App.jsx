import { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import WhatIsAI from './WhatIsAI';
import Introduction from './Introduction';
import HowDoesAIWork from './HowDoesAIWork';
import WhyWouldWeUseAI from './WhyWouldWeUseAI';
import WhoBuildsAI from './WhoBuildsAI';
import KeyVocabulary from './KeyVocabulary';
import HowIsAIUsed from './HowIsAIUsed';
import Prompts from './Prompts';
import Training from './Training';
import AIOutsideDesign from './AIOutsideDesign';
import AIInDesign from './AIInDesign';
import AIPoweredSoftware from './AIPoweredSoftware';
import EssentialPrinciples from './EssentialPrinciples';
import EnvironmentalImpact from './EnvironmentalImpact';
import AINews from './AINews';
import UsefulLinks from './UsefulLinks';
import AboutTheAuthor from './AboutTheAuthor';
import CitedResources from './CitedResources';
import './App.css';
import heroImage from './assets/landingPageHero.png'

const ailgLogoImage = 'https://www.figma.com/api/mcp/asset/ae4b96b8-a69b-4229-899f-42e9d47ca3e8'

const navItems = [
  { id: 'ai-basics', label: 'AI Basics' },
  { id: 'uses-and-software', label: 'Uses and Software' },
  { id: 'social-responsibility', label: 'Social Responsibility' },
  { id: 'environmental-impact', label: 'Environmental Impact' },
  { id: 'recent-events', label: 'Recent Events' },
  { id: 'useful-links', label: 'Useful Links' },
  { id: 'about-the-guide', label: 'About the Guide' },
]

const aiBasicsSubmenu = [
  { id: 'introduction', label: 'Introduction', to: '/introduction' },
  {
    id: 'what-is-ai',
    label: 'What is Artificial Intelligence?',
    to: '/what-is-ai',
  },
  { id: 'how-does-ai-work', label: 'How does AI Work?', to: '/how-does-ai-work' },
  {
    id: 'why-would-we-use-ai',
    label: 'Why would we want to use AI?',
    to: '/why-would-we-want-to-use-ai',
  },
  { id: 'who-builds-ai', label: 'Who builds AI?', to: '/who-builds-ai' },
  { id: 'key-vocabulary', label: 'Key Vocabulary', to: '/key-vocabulary' },
]

const usesAndSoftwareSubmenu = [
  {id: 'how-is-ai-used', label: 'How Is AI Actually Used?', to: '/how-is-ai-used'},
  {id: 'prompts', label: 'Prompts', to: '/prompts'},
  {id: 'training', label: 'Training', to: '/training'},
  {id: 'ai-outside-design', label: 'AI Outside of Design', to: '/ai-outside-design'},
  {id: 'ai-in-design', label: 'AI in Design', to: '/ai-in-design'},
  {id: 'ai-powered-software', label: 'AI-Powered Software', to: '/ai-powered-software'},
]

const socialResponsibilitySubmenu = [
  {id: 'essential-principles', label: 'Essential Principles', to: '/essential-principles'}
]

const environmentalImpactSubmenu = [
  {id: 'environmental-impact', label: 'Environmental Impact', to: '/environmental-impact'}
]

const recentEventsSubmenu = [
  {id: 'ai-news', label: 'AI in theNews', to: '/ai-news'}
]

const usefulLinksSubmenu = [
  {id: 'useful-links', label: 'Useful Links', to: '/useful-links'}
]

const aboutTheGuideSubmenu = [
  {id: 'about-the-author', label: 'About the Author', to: '/about-the-author'},
  {id: 'cited-resources', label: 'Cited Resources', to: '/cited-resources'}
]

const navSubmenusById = {
  'ai-basics': aiBasicsSubmenu,
  'uses-and-software': usesAndSoftwareSubmenu,
  'social-responsibility': socialResponsibilitySubmenu,
  'environmental-impact': environmentalImpactSubmenu,
  'recent-events': recentEventsSubmenu,
  'useful-links': usefulLinksSubmenu,
  'about-the-guide': aboutTheGuideSubmenu,
}

function LandingPage({ onNavigateToSection }) {
  return (
    <main className="hero-content">
      <img
        className="hero-illustration"
        src={heroImage}
        alt="Panda at computer illustration"
      />
      <h1>Welcome to The Literacy Guide on AI and Ethics</h1>
      <p className="hero-subtitle">
        A Guide for Designers and Design-Adjacent Professionals interested in
        using AI technology responsibly
      </p>
      <button className="start-button" onClick={() => onNavigateToSection('ai-basics')}>
        Let&apos;s Start with the Basics!
      </button>
    </main>
  )
}

function App() {
  const [expandedItem, setExpandedItem] = useState('ai-basics')
  const [openSubmenuNavId, setOpenSubmenuNavId] = useState(null)
  const [pendingSection, setPendingSection] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToSection = (sectionId) => {
    const goToSection = () => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    if (location.pathname !== '/') {
      setPendingSection(sectionId)
      navigate('/')
      return
    }

    goToSection()
  }

  useEffect(() => {
    if (location.pathname !== '/' || !pendingSection) {
      return
    }

    setTimeout(() => {
      const section = document.getElementById(pendingSection)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingSection(null)
    }, 0)
  }, [location.pathname, pendingSection])

  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      setOpenSubmenuNavId(null)
      return
    }
    for (const [navId, items] of Object.entries(navSubmenusById)) {
      if (items.some((sub) => sub.to === path)) {
        setExpandedItem(navId)
        setOpenSubmenuNavId(navId)
        return
      }
    }
  }, [location.pathname])

  const onAccordionClick = (itemId) => {
    setExpandedItem(itemId)

    const submenu = navSubmenusById[itemId]
    if (submenu?.length) {
      setOpenSubmenuNavId((prev) => (prev === itemId ? null : itemId))
      return
    }

    setOpenSubmenuNavId(null)
    navigateToSection(itemId)
  }

  return (
    <div className="landing-page">
      <aside className="sidebar" aria-label="Table of contents">
        <div className="sidebar-inner">
          <img className="ailg-logo" src={ailgLogoImage} alt="AILG logo" />
          <h2 className="sidebar-title">Table of Contents</h2>
          <div className="accordion-list">
            {navItems.map((item) => {
              const isExpanded = expandedItem === item.id
              const submenu = navSubmenusById[item.id]
              const showSubmenu = Boolean(submenu?.length && openSubmenuNavId === item.id)

              return (
                <div
                  key={item.id}
                  className={`accordion-item ${isExpanded ? 'expanded' : ''} ${showSubmenu ? 'with-submenu' : ''}`}
                >
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => onAccordionClick(item.id)}
                    aria-expanded={showSubmenu}
                    aria-controls={submenu?.length ? `submenu-${item.id}` : undefined}
                  >
                    {item.label}
                  </button>

                  {submenu?.length ? (
                    <div
                      id={`submenu-${item.id}`}
                      className={`submenu-panel ${showSubmenu ? 'open' : ''}`}
                    >
                      {submenu.map((subItem) => (
                        <NavLink
                          key={subItem.id}
                          to={subItem.to}
                          className={({ isActive }) =>
                            `submenu-link ${isActive ? 'active' : ''}`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </aside>

      <Routes>
        <Route path="/" element={<LandingPage onNavigateToSection={navigateToSection} />} />
        <Route path="/what-is-ai" element={<WhatIsAI />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/how-does-ai-work" element={<HowDoesAIWork />} />
        <Route path="/why-would-we-want-to-use-ai" element={<WhyWouldWeUseAI />} />
        <Route path="/who-builds-ai" element={<WhoBuildsAI />} />
        <Route path="/key-vocabulary" element={<KeyVocabulary />} />
        <Route path="/how-is-ai-used" element={<HowIsAIUsed />} />
        <Route path="/prompts" element={<Prompts />} />
        <Route path="/training" element={<Training />} />
        <Route path="/ai-outside-design" element={<AIOutsideDesign />} />
        <Route path="/ai-in-design" element={<AIInDesign />} />
        <Route path="/ai-powered-software" element={<AIPoweredSoftware />} />
        <Route path="/essential-principles" element={<EssentialPrinciples />} />
        <Route path="/environmental-impact" element={<EnvironmentalImpact />} />
        <Route path="/ai-news" element={<AINews />} />
        <Route path="/useful-links" element={<UsefulLinks />} />
        <Route path="/about-the-author" element={<AboutTheAuthor />} />
        <Route path="/cited-resources" element={<CitedResources />} />
        <Route path="*" element={<LandingPage onNavigateToSection={navigateToSection} />} />
      </Routes>
    </div>
  )
}

export default App
