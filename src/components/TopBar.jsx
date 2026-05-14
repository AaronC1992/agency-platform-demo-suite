export default function TopBar({ activeDemo, onBack }) {
  const demoNames = {
    1: 'AgencyOS White Label Client Portal',
    2: 'LocalLead Mini CRM',
    3: 'LocalBoost Campaign Tracker',
  }

  return (
    <header className="topbar">
      <div className="topbar-brand">
        Agency Platform <span>Demo Suite</span>
        {activeDemo && (
          <span className="topbar-demo-name"> — {demoNames[activeDemo]}</span>
        )}
      </div>
      <span className="demo-badge">Demo Mode</span>
      {activeDemo && (
        <button className="back-btn" onClick={onBack}>
          ← Back to Demo Hub
        </button>
      )}
    </header>
  )
}
