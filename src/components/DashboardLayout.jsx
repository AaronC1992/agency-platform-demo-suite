import { useState } from 'react'

export default function DashboardLayout({ title, subtitle, poweredBy, navItems, activePage, onPageChange, children, themeClass }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`dashboard${themeClass ? ` ${themeClass}` : ''}`}>
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">{title}</div>
          <div className="sidebar-subtitle">{subtitle}</div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item${activePage === item.id ? ' active' : ''}`}
              onClick={() => { onPageChange(item.id); setSidebarOpen(false) }}
            >
              {item.label}
            </button>
          ))}
        </nav>
        {poweredBy && <div className="powered-label">{poweredBy}</div>}
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-topbar">
          <button className="hamburger" onClick={() => setSidebarOpen(s => !s)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
          <h1 className="page-title">
            {navItems.find(n => n.id === activePage)?.label}
          </h1>
        </div>
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  )
}
