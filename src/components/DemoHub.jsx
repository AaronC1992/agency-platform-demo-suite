import { useState } from 'react'
import Modal from './Modal'

const demos = [
  {
    id: 1,
    brand: 'AgencyOS',
    name: 'AgencyOS White Label Client Portal',
    description: 'Client portal for tracking leads, campaigns, reviews, referrals, and monthly reports.',
    bestFit: 'Marketing agencies managing roofing companies, dental practices, auto repair, and home service clients.',
    features: [
      'Lead tracking and follow up management',
      'Campaign performance monitoring',
      'Review request and tracking system',
      'Referral program management',
      'Monthly client reports',
      'Full white label branding controls',
    ],
    tagline: 'Give every client a branded portal they log into every week.',
    overview: 'AgencyOS is a white label client portal your agency resells under your name. Each client gets their own branded dashboard showing exactly what your agency does for them — leads, campaigns, reviews, and results. It replaces the "what are we paying for?" conversation with real data clients can see themselves.',
    capabilities: [
      'Track every lead with status, source, and follow up notes',
      'Monitor campaign performance with charts and real metrics',
      'Send review requests and track every response',
      'Run referral programs with unique links and attribution',
      'Generate branded monthly reports clients can download',
      'Full white label branding — your logo, colors, and domain',
    ],
    possibilities: [
      'Automated monthly PDF reports emailed directly to clients',
      'Integration with Google Ads, Facebook Ads, or any ad platform',
      'Client facing goal tracking with visual progress bars',
      'Multi location support for franchise or chain clients',
      'Internal agency task and note layer behind the scenes',
      'Custom onboarding flows branded to your agency',
    ],
    howItWorks: [
      { title: 'Lead sources connect to a single inbox', desc: 'Website forms, ad campaigns, and manual entries all funnel into one lead list. No scraping email threads or digging through spreadsheets.' },
      { title: 'Every lead is tagged by source and status', desc: 'Each lead shows where it came from — Google Ads, Facebook, website form, referral — so clients see exactly which marketing is producing calls.' },
      { title: 'Your team moves deals through the pipeline', desc: 'You or the client updates the status as leads progress. Clients watch their jobs move from New to Won in a board they can check any time.' },
      { title: 'Campaign data is entered or synced by your agency', desc: 'Your team enters or pulls in campaign performance numbers. Clients see clean charts without ever needing to log into an ad platform.' },
      { title: 'Monthly reports build themselves', desc: 'At the end of each month the platform compiles a branded summary. The client downloads it or your agency sends it — no manual report writing.' },
    ],
  },
  {
    id: 2,
    brand: 'LocalLead',
    name: 'LocalLead Mini CRM',
    description: 'Simple CRM for contractors and local service businesses to track leads, estimates, follow ups, jobs, and reviews.',
    bestFit: 'HVAC companies, plumbers, contractors, roofers, and home service businesses.',
    features: [
      'Visual lead pipeline board',
      'Estimate creation and tracking',
      'Follow up calendar and reminders',
      'Job won and lost reporting',
      'Review request automation',
      'Revenue and conversion reporting',
    ],
    tagline: 'A job tracker your service business clients will actually use.',
    overview: 'LocalLead is a simple CRM built for local service businesses that want to stop losing jobs to disorganization. It covers the full lifecycle from first call to closed invoice — lead intake, estimates, scheduling, follow ups, and reviews. Delivered under your agency brand, it becomes a sticky product your clients depend on month after month.',
    capabilities: [
      'Capture and manage leads with status and source tracking',
      'Visual pipeline board to see every job at a glance',
      'Create and track estimates with approval status',
      'Schedule follow ups and jobs on a built in calendar',
      'Request and monitor Google reviews from won jobs',
      'Revenue and conversion reporting by month',
    ],
    possibilities: [
      'SMS and email follow up automation on new leads',
      'Two-way texting from inside the platform',
      'QuickBooks or invoicing integration',
      'Technician scheduling and job assignment',
      'Photo uploads for job documentation in the field',
      'Mobile friendly field version for techs on the road',
    ],
    howItWorks: [
      { title: 'Every new lead gets a card on the board', desc: 'Whether it comes in through a website form, a phone call your team logs, or a referral — it lands as a card in the pipeline ready to be worked.' },
      { title: 'The team tracks each job as it moves forward', desc: 'Status updates like New, Contacted, Estimate Sent, Won, or Lost move the card across the board so nothing gets buried or forgotten.' },
      { title: 'Estimates are built and sent from inside the platform', desc: 'The estimator lets your client put together a quote, add line items, and send it to the customer — all tracked in one place.' },
      { title: 'Won jobs automatically trigger a review request', desc: 'When a job is marked Won, the platform sends a review request to the customer by email or text. Hands free, every time.' },
      { title: 'Reports show the full business picture', desc: 'Revenue won, jobs lost, lead sources, and conversion rates all feed into a reports page the business owner can pull up any time.' },
    ],
  },
  {
    id: 3,
    brand: 'LocalBoost',
    name: 'LocalBoost Campaign Tracker',
    description: 'QR campaign, referral, redemption, and local promotion tracker for agencies and small businesses.',
    bestFit: 'Restaurants, retail shops, fitness studios, chamber campaigns, and local coalitions.',
    features: [
      'QR code generation and scan tracking',
      'Coupon and offer redemption tracking',
      'Multi business campaign management',
      'Referral program tracking',
      'Customer signup and engagement data',
      'Campaign performance analytics',
    ],
    tagline: 'A QR-powered loyalty and rewards engine that drives repeat business.',
    overview: 'LocalBoost gives restaurants, retailers, and local shops a branded loyalty and rewards platform without the punch cards. Your agency manages the campaigns, generates the QR codes, and tracks every redemption. It is a sticky recurring product your clients hand directly to their customers — and it keeps those customers coming back.',
    capabilities: [
      'Generate and track QR codes for any promotion or offer',
      'Manage coupons, deals, and redemption limits per campaign',
      'Run referral programs with unique sharing links',
      'Track customer signups and visit frequency',
      'Manage multiple businesses from one agency dashboard',
      'Campaign analytics with redemption rates and revenue impact',
    ],
    possibilities: [
      'Digital loyalty punch cards with automatic reward triggers',
      'Seasonal and holiday campaign templates',
      'Text or email campaigns to the rewards subscriber list',
      'Coalition campaigns across multiple local businesses',
      'Integration with Square, Clover, or any POS system',
      'Branded mobile friendly customer facing web app',
    ],
    howItWorks: [
      { title: 'Your agency creates the campaign and generates a QR code', desc: 'You set up an offer, apply a redemption limit if needed, and the platform generates a unique QR code ready to print, text, or share digitally.' },
      { title: 'Customers scan at the register, on a receipt, or from a flyer', desc: 'Every scan is logged — who scanned, when, and which placement the code came from. No app download required. Customers just scan and go.' },
      { title: 'Claimed offers are marked redeemed by the business', desc: 'When a customer comes in to use a deal, the business taps redeemed in the platform. The coupon closes out and the data is captured.' },
      { title: 'Customers who sign up go into a list the business owns', desc: 'Anyone who registers through a campaign is added to that business contact list — ready for future text or email promotions.' },
      { title: 'Your agency dashboard shows everything across all businesses', desc: 'Scans, redemptions, signups, and referrals across every participating business are visible in one place so you can report results and pitch the next campaign.' },
    ],
  },
]

const partnershipModels = [
  {
    title: 'Flat White Label Build',
    desc: 'One time setup fee for a fully branded platform delivered to your agency and ready for clients.',
  },
  {
    title: 'Monthly Support',
    desc: 'Ongoing maintenance, updates, and client onboarding support included with your package.',
  },
  {
    title: 'Revenue Split',
    desc: 'Partner on client retainers with a shared revenue model for sustainable long term growth.',
  },
  {
    title: 'Pilot Launch',
    desc: 'Start with a single client deployment to prove the value before rolling it out across your book of business.',
  },
]

const blankForm = { agencyName: '', contactName: '', clientType: '', platform: '', notes: '' }

export default function DemoHub({ onOpenDemo }) {
  const [showModal, setShowModal] = useState(false)
  const [previewId, setPreviewId] = useState(null)
  const [form, setForm] = useState(blankForm)
  const [submitted, setSubmitted] = useState(false)
  const previewDemo = demos.find(d => d.id === previewId) ?? null

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
          <h1>White label client platforms your agency can resell under your brand.</h1>
          <p>
            I build the software behind the scenes. You keep the client relationship.
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
                <h3><span className="demo-brand">{demo.brand}</span>{demo.name.slice(demo.brand.length)}</h3>
                <p className="demo-card-desc">{demo.description}</p>
                <div className="demo-card-bestfit">
                  <span className="label">Best fit: </span>{demo.bestFit}
                </div>
                <ul className="demo-card-features">
                  {demo.features.map(f => (
                    <li key={f}><span className="check">✓</span>{f}</li>
                  ))}
                </ul>
                <button className="btn btn-primary" onClick={() => setPreviewId(demo.id)}>
                  Open Demo
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How agencies make money */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2>How agencies make money with this</h2>
            <p>Three proven ways to turn a white label platform into recurring agency revenue.</p>
          </div>
          <div className="money-cards">
            <div className="money-card">
              <div className="money-card-icon">01</div>
              <h3>Sell setup fees</h3>
              <p>Charge a one time onboarding fee to build, brand, and launch the platform for each new client.</p>
            </div>
            <div className="money-card">
              <div className="money-card-icon">02</div>
              <h3>Add monthly support</h3>
              <p>Stack recurring revenue with a monthly plan covering updates, maintenance, and client support.</p>
            </div>
            <div className="money-card">
              <div className="money-card-icon">03</div>
              <h3>Bundle with websites, ads, SEO, or social media</h3>
              <p>Include the platform as part of a larger retainer to increase the value of every client relationship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section">
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
            <h2>Ready to launch one of these platforms under your brand?</h2>
            <p>We build and deliver the full software under your agency's name. You own the client relationship and grow your recurring revenue.</p>
            <button className="btn btn-white btn-lg" onClick={() => setShowModal(true)}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      {showModal && (
        <Modal title="Request a Platform Build" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Request Received</h3>
              <p>Thanks for reaching out. We will follow up within 1 business day to talk through your platform and next steps.</p>
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

      {/* Demo Preview Modal */}
      {previewDemo && (
        <Modal title={previewDemo.name} onClose={() => setPreviewId(null)} size="lg">
          <div className="demo-preview">
            <p className="demo-preview-tagline">{previewDemo.tagline}</p>
            <p className="demo-preview-overview">{previewDemo.overview}</p>
            <div className="demo-how-it-works">
              <h4>How it works</h4>
              <ol className="demo-how-steps">
                {previewDemo.howItWorks.map((step, i) => (
                  <li key={i} className="demo-how-step">
                    <span className="demo-how-num">{i + 1}</span>
                    <div className="demo-how-body">
                      <strong>{step.title}</strong>
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="demo-preview-sections">
              <div className="demo-preview-section">
                <h4>What it can do</h4>
                <ul>
                  {previewDemo.capabilities.map(c => (
                    <li key={c}><span className="preview-check">✓</span>{c}</li>
                  ))}
                </ul>
              </div>
              <div className="demo-preview-section demo-preview-section--alt">
                <h4>What we can add or customize</h4>
                <ul>
                  {previewDemo.possibilities.map(p => (
                    <li key={p}><span className="preview-arrow">→</span>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="demo-preview-footer">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => { onOpenDemo(previewDemo.id); setPreviewId(null) }}
              >
                Launch Demo →
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
