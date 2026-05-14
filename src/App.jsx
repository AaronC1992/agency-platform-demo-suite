import { useState } from 'react'
import TopBar from './components/TopBar'
import DemoHub from './components/DemoHub'
import AgencyOS from './demos/AgencyOS'
import LocalLead from './demos/LocalLead'
import LocalBoost from './demos/LocalBoost'
import './styles.css'

export default function App() {
  const [activeDemo, setActiveDemo] = useState(null)

  return (
    <div className="app">
      <TopBar activeDemo={activeDemo} onBack={() => setActiveDemo(null)} />
      {activeDemo === null && <DemoHub onOpenDemo={setActiveDemo} />}
      {activeDemo === 1 && <AgencyOS />}
      {activeDemo === 2 && <LocalLead />}
      {activeDemo === 3 && <LocalBoost />}
    </div>
  )
}
