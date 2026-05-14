import { useState } from 'react'
import Modal from './Modal'

const demos = [
  {
    id: 1,
    name: 'AgencyOS White Label Client Portal',
    description: 'Client portal for tracking leads, campaigns, reviews, referrals, and monthly reports.',
    bestFit: 'Marketing agencies managing roofing companies, dental practices, auto repair, and home service clients.',
    features: [
      'Lead tracking and follow-up management',
      'Campaign performance monitoring',
      'Review request and tracking system',
      'Referral program management',
      'Monthly client reports',
      'Full white label branding controls',
    ],
  },
  {
    id: 2,
    name: 'LocalLead Mini CRM',
    description: 'Simple CRM for contractors and local service businesses to track leads, estimates, follow-ups, jobs, and reviews.',
    bestFit: 'HVAC companies, plumbers, contractors, roofers, and home service businesses.',
    features: [
      'Visual lead pipeline board',
      'Estimate creation and tracking',
      'Follow-up calendar and reminders',
      'Job won and lost reporting',
      'Review request automation',
      'Revenue and conversion reporting',
    ],
  },
  {
    id: 3,
    name: 'LocalBoost Campaign Tracker',
    description: 'QR campaign, referral, redemption, and local promotion tracker for agencies and small businesses.',
    bestFit: 'Restaurants, retail shops, fitness studios, chamber campaigns, and local coalitions.',
    features: [
      'QR code generation and scan tracking',
      'Coupon and offer redemption tracking',
      'Multi-business campaign management',
      'Referral program tracking',
      'Customer signup and engagement data',
      'Campaign performance analytics',
    ],
  },
]

const partnershipModels = [
  {
    title: 'Flat White Label Build',
    desc: 'One-time setup fee for a fully branded platform delivered to your agency and ready for clients.',
  },
  {
    title: 'Monthly Support',
    desc: 'Ongoing maintenance, updates, and client onboarding support included with your package.',
  },
  {
    title: 'Revenue Split',
    desc: 'Partner on client retainers with a shared revenue model for sustainable long-term growth.',
  },
  {
    title: 'Pilot Demo Build',
    desc: 'Start with a single client pilot to prove the value of the platform before a full rollout.',
  },
]

const blankForm = { agencyName: '', contactName: '', clientType: '', platform: '', notes: '' }

export default function DemoHub({ onOpenDemo }) {
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(blankForm)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    setShowModal(false)
    setSubmitted(false)
    setForm(blankForm)
  }

  function scrollToDemo() {
    document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="demo-hub">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">White Label Platform Suite</div>
          <h1>White Label Platforms Marketing Agencies Can Resell</h1>
          <p>
            Three interactive demos showing client portals, mini CRMs, and campaign
            tracking tools built for small business marketing packages.
          </p>
          <button className="btn btn-white btn-lg" onClick={scrollToDemo}>
            View Demos
          </button>
        </div>
      </section>

      {/* Demo Cards */}
      <section id="demos" className="section">
        <div className="container">
          <div className="section-header">
            <h2>Interactive Platform Demos</h2>
            <p>Explore each platform and see exactly what your clients would experience day to day.</p>
          </div>
          <div className="demo-cards">
            {demos.map(demo => (
              <div key={demo.id} className="demo-card">
                <div className="demo-card-number">{String(demo.id).padStart(2, '0')}</div>
                <h3>{demo.name}</h3>
                <p className="demo-card-desc">{demo.description}</p>
                <div className="demo-card-bestfit">
                  <span className="label">Best fit: </span>{demo.bestFit}
                </div>
                <ul className="demo-card-features">
                  {demo.features.map(f => (
                    <li key={f}><span className="check">✓</span>{f}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" onClick={() => onOpenDemo(demo.id)}>
                  Open Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>Partnership Models</h2>
            <p>Flexible options to fit where your agency is today and scale as you grow.</p>
          </div>
          <div className="partnership-grid">
            {partnershipModels.map(m => (
              <div key={m.title} className="partnership-card">
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-inner">
            <h2>Want a white label demo for one of your clients?</h2>
            <p>We will build a custom branded demo tailored to your agency's niche and client base.</p>
            <button className="btn btn-white btn-lg" onClick={() => setShowModal(true)}>
              Request Demo Build
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <Modal title="Request a Demo Build" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Request Received</h3>
              <p>Thanks for reaching out. We will follow up within 1 business day to discuss your demo build.</p>
              <button className="btn btn-primary" onClick={handleClose}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label>Agency Name</label>
                <input
                  required
                  value={form.agencyName}
                  onChange={e => setForm(p => ({ ...p, agencyName: e.target.value }))}
                  placeholder="Your agency name"
                />
              </div>
              <div className="form-group">
                <label>Contact Name</label>
                <input
                  required
                  value={form.contactName}
                  onChange={e => setForm(p => ({ ...p, contactName: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Client Type</label>
                  <input
                    value={form.clientType}
                    onChange={e => setForm(p => ({ ...p, clientType: e.target.value }))}
                    placeholder="e.g. HVAC, Dental, Retail"
                  />
                </div>
                <div className="form-group">
                  <label>Platform Needed</label>
                  <select
                    value={form.platform}
                    onChange={e => setForm(p => ({ ...p, platform: e.target.value }))}
                  >
                    <option value="">Select a platform</option>
                    <option>AgencyOS White Label Client Portal</option>
                    <option>LocalLead Mini CRM</option>
                    <option>LocalBoost Campaign Tracker</option>
                    <option>All Three Platforms</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea
                  value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                  placeholder="Any specific requirements, questions, or context about your clients"
                  rows={3}
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}
