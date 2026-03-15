import AudienceSection from './components/AudienceSection'
import ContactFormSection from './components/ContactFormSection'
import FinalCTASection from './components/FinalCTASection'
import Header from './components/Header'
import Hero from './components/Hero'
import MarketAnalysisSection from './components/MarketAnalysisSection'
import ModulesSection from './components/ModulesSelection'
import ProcessSection from './components/ProcessSection'
import ResultsSection from './components/ResultsSection'
import ScrollToTopButton from './components/ScrollToTopButton'

import './index.css'

function App() {
  return (
    <div style={{ backgroundColor: 'var(--sf-bg)', minHeight: '100vh' }}>

      <Header />

      <Hero />

      <ModulesSection />

      <ProcessSection />

      <ResultsSection />

      <MarketAnalysisSection />

      <AudienceSection />

      <FinalCTASection />

      <ContactFormSection />

      {/* BOTÓN SCROLL TOP */}
      <ScrollToTopButton />

    </div>
  )
}

export default App