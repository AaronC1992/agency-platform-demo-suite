import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import StatCard from '../components/StatCard'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import VisualBarChart from '../components/VisualBarChart'
import {
  agencyOSClients,
  agencyOSLeads,
  agencyOSCampaigns,
  campaignPerformance,
  agencyOSReviews,
  agencyOSReferrals,
} from '../data/mockData'

const NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'clients', label: 'Clients' },
  { id: 'leads', label: 'Leads' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'referrals', label: 'Referrals' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
]

function statusBadge(status) {
  const map = {
    New: 'badge-blue', Contacted: 'badge-yellow', 'Estimate Sent': 'badge-orange',
    Won: 'badge-green', Lost: 'badge-red', Active: 'badge-green', Paused: 'badge-yellow',
    Completed: 'badge-gray', Sent: 'badge-blue', Opened: 'badge-yellow',
    'Not Responded': 'badge-red', Converted: 'badge-green', Submitted: 'badge-blue',
  }
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>
}

function stars(n) {
  if (!n) return <span className="badge badge-gray">Pending</span>
  return <span style={{ color: '#f59e0b' }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

// ─── Dashboard Page ───────────────────────────────────────────
function DashboardPage() {
  const activity = [
    { text: 'New website lead from Joplin Roofing Co.', time: '2 minutes ago' },
    { text: 'QR scan from Downtown Coffee Co. campaign', time: '14 minutes ago' },
    { text: 'Review request sent for Main Street Dental', time: '1 hour ago' },
    { text: 'Referral submitted for Ozark Family HVAC', time: '2 hours ago' },
    { text: 'Campaign report generated for Four State Auto Repair', time: '3 hours ago' },
  ]
  const why = [
    { title: 'Adds Recurring Revenue', desc: 'Monthly platform fees create predictable income for your agency beyond one-time project work.' },
    { title: 'Improves Client Retention', desc: 'Clients who log in regularly stay longer. Visibility builds loyalty and trust.' },
    { title: 'Makes Results Visible', desc: 'Campaigns, leads, and reviews in one place show clients exactly what their investment is doing.' },
    { title: 'Gives Clients a Real Tool', desc: 'This is not a vanity dashboard. Clients use it daily to manage leads and track growth.' },
  ]
  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Four States Creative Group — February 2025</p>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Total Leads This Month" value="67" change="12% vs last month" changeDir="up" />
        <StatCard label="New Leads This Week" value="14" change="3 vs last week" changeDir="up" />
        <StatCard label="Follow Ups Due" value="8" />
        <StatCard label="QR Scans" value="4,394" change="18% vs last month" changeDir="up" />
        <StatCard label="Reviews Requested" value="12" />
        <StatCard label="Reviews Received" value="8" change="67% response rate" changeDir="up" />
        <StatCard label="Referral Leads" value="9" change="2 vs last month" changeDir="up" />
        <StatCard label="Est. Revenue Influenced" value="$48,200" change="22% vs last month" changeDir="up" />
      </div>
      <div className="two-col">
        <div className="card">
          <div className="card-header"><h3>Recent Activity</h3></div>
          <div className="card-body">
            <div className="activity-feed">
              {activity.map((a, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-dot" />
                  <div>
                    <div className="activity-text">{a.text}</div>
                    <div className="activity-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Why Agencies Sell This</h3></div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {why.map(w => (
              <div key={w.title} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '0.875rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 3 }}>{w.title}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--mid)' }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Clients Page ─────────────────────────────────────────────
function ClientsPage({ onNavigate }) {
  return (
    <div>
      <div className="page-header">
        <div><h2>Clients</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>5 active clients</p></div>
      </div>
      <div className="client-cards">
        {agencyOSClients.map(c => (
          <div key={c.id} className="client-card">
            <div className="client-card-name">{c.name}</div>
            <div className="client-card-industry">{c.industry}</div>
            <div className="client-card-stats">
              <div className="client-card-stat"><strong>{c.campaigns}</strong> Campaigns</div>
              <div className="client-card-stat"><strong>{c.leadsThisMonth}</strong> Leads / Mo</div>
              <div className="client-card-stat">
                <strong style={{ color: '#f59e0b' }}>{'★'.repeat(Math.round(c.rating))}</strong> {c.rating}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {statusBadge(c.status)}
              <button className="btn btn-secondary btn-sm" onClick={() => onNavigate('leads')}>View Leads</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Leads Page ───────────────────────────────────────────────
function LeadsPage({ leads, onAddLead }) {
  const [search, setSearch] = useState('')
  const [clientFilter, setClientFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { name: '', business: '', phone: '', email: '', source: '', status: 'New', value: '', followUp: '', notes: '' }
  const [form, setForm] = useState(blankForm)

  const clients = [...new Set(agencyOSLeads.map(l => l.business))]
  const statuses = ['New', 'Contacted', 'Estimate Sent', 'Won', 'Lost']

  const filtered = leads.filter(l => {
    if (clientFilter && l.business !== clientFilter) return false
    if (statusFilter && l.status !== statusFilter) return false
    if (search && !l.name.toLowerCase().includes(search.toLowerCase()) &&
        !l.email.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  function handleSubmit(e) {
    e.preventDefault()
    onAddLead({ ...form, id: Date.now() })
    setSubmitted(true)
  }

  function handleClose() {
    setShowModal(false)
    setSubmitted(false)
    setForm(blankForm)
  }

  const cols = [
    { key: 'name', label: 'Name' },
    { key: 'business', label: 'Business' },
    { key: 'phone', label: 'Phone' },
    { key: 'source', label: 'Lead Source' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'value', label: 'Value' },
    { key: 'followUp', label: 'Follow Up' },
    { key: 'notes', label: 'Notes', render: v => <span style={{ fontSize: '0.8125rem', color: 'var(--mid)' }}>{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div><h2>Leads</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>{filtered.length} of {leads.length} leads</p></div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>+ Add Lead</button>
      </div>
      <div className="filter-bar">
        <input placeholder="Search by name or email…" value={search} onChange={e => setSearch(e.target.value)} />
        <select value={clientFilter} onChange={e => setClientFilter(e.target.value)}>
          <option value="">All Clients</option>
          {clients.map(c => <option key={c}>{c}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {statuses.map(s => <option key={s}>{s}</option>)}
        </select>
        {(search || clientFilter || statusFilter) && (
          <button className="btn btn-ghost btn-sm" onClick={() => { setSearch(''); setClientFilter(''); setStatusFilter('') }}>Clear</button>
        )}
      </div>
      <DataTable columns={cols} rows={filtered} emptyMessage="No leads match your filters." />

      {showModal && (
        <Modal title="Add New Lead" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Lead Added</h3>
              <p>The lead has been added to the system.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group"><label>Name</label><input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name" /></div>
                <div className="form-group"><label>Business / Client</label>
                  <select value={form.business} onChange={e => setForm(p => ({ ...p, business: e.target.value }))}>
                    <option value="">Select client</option>
                    {clients.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Phone</label><input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="(417) 555-0000" /></div>
                <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="email@example.com" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Lead Source</label>
                  <select value={form.source} onChange={e => setForm(p => ({ ...p, source: e.target.value }))}>
                    <option value="">Select source</option>
                    {['Website Form','Google Ad','Facebook Ad','Referral','QR Flyer','Phone Call'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Status</label>
                  <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                    {['New','Contacted','Estimate Sent','Won','Lost'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Est. Value</label><input value={form.value} onChange={e => setForm(p => ({ ...p, value: e.target.value }))} placeholder="$0" /></div>
                <div className="form-group"><label>Follow Up Date</label><input value={form.followUp} onChange={e => setForm(p => ({ ...p, followUp: e.target.value }))} placeholder="e.g. Feb 20" /></div>
              </div>
              <div className="form-group"><label>Notes</label><textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={2} placeholder="Any relevant notes" /></div>
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Lead</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}

// ─── Campaigns Page ───────────────────────────────────────────
function CampaignsPage() {
  return (
    <div>
      <div className="page-header">
        <div><h2>Campaigns</h2></div>
      </div>
      <div className="campaign-cards">
        {agencyOSCampaigns.map(c => (
          <div key={c.id} className="campaign-card">
            <div className="campaign-card-header">
              <div>
                <div className="campaign-card-name">{c.name}</div>
                <div className="campaign-card-client">{c.client}</div>
              </div>
              {statusBadge(c.status)}
            </div>
            <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '0.875rem' }}>
              <span className="campaign-card-type">{c.type}</span>
              <span style={{ marginLeft: 8, color: 'var(--mid)' }}>{c.landingPage}</span>
            </div>
            <div className="campaign-card-stats">
              <div className="campaign-card-stat"><strong>{c.scans.toLocaleString()}</strong>QR / Page Visits</div>
              <div className="campaign-card-stat"><strong>{c.submissions}</strong>Form Submissions</div>
              <div className="campaign-card-stat"><strong>{c.conversion}</strong>Conversion Rate</div>
            </div>
          </div>
        ))}
      </div>
      <div className="card">
        <div className="card-header"><h3>Campaign Performance — QR Scans &amp; Visits</h3></div>
        <div className="card-body">
          <VisualBarChart data={campaignPerformance} labelKey="label" valueKey="value" color="#2563eb" />
        </div>
      </div>
    </div>
  )
}

// ─── Reviews Page ─────────────────────────────────────────────
function ReviewsPage({ reviews, onAddReview }) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { customer: '', client: '', source: 'Google' }
  const [form, setForm] = useState(blankForm)

  const completed = reviews.filter(r => r.status === 'Completed')
  const avgRating = completed.length
    ? (completed.reduce((s, r) => s + (r.rating || 0), 0) / completed.length).toFixed(1)
    : '—'

  function handleSubmit(e) {
    e.preventDefault()
    onAddReview({ ...form, requestDate: 'Today', status: 'Sent', rating: null, id: Date.now() })
    setSubmitted(true)
  }

  function handleClose() {
    setShowModal(false)
    setSubmitted(false)
    setForm(blankForm)
  }

  const cols = [
    { key: 'customer', label: 'Customer' },
    { key: 'client', label: 'Client' },
    { key: 'requestDate', label: 'Request Date' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'rating', label: 'Rating', render: v => stars(v) },
    { key: 'source', label: 'Source' },
  ]

  return (
    <div>
      <div className="page-header">
        <div><h2>Reviews</h2></div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>Send Review Request</button>
      </div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Requests Sent" value={reviews.length} />
        <StatCard label="Reviews Received" value={completed.length} />
        <StatCard label="Average Rating" value={`${avgRating} ★`} />
        <StatCard label="Pending Requests" value={reviews.filter(r => r.status !== 'Completed').length} />
      </div>
      <DataTable columns={cols} rows={reviews} />

      {showModal && (
        <Modal title="Send Review Request" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Review Request Sent</h3>
              <p>The customer will receive a review request by text and email.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group"><label>Customer Name</label><input required value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))} placeholder="Customer full name" /></div>
              <div className="form-group"><label>Client</label>
                <select value={form.client} onChange={e => setForm(p => ({ ...p, client: e.target.value }))}>
                  <option value="">Select client</option>
                  {agencyOSClients.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="form-group"><label>Review Platform</label>
                <select value={form.source} onChange={e => setForm(p => ({ ...p, source: e.target.value }))}>
                  {['Google','Facebook','Yelp','BBB'].map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Send Request</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}

// ─── Referrals Page ───────────────────────────────────────────
function ReferralsPage({ referrals }) {
  const converted = referrals.filter(r => r.status === 'Converted').length
  const cols = [
    { key: 'referrer', label: 'Referrer' },
    { key: 'referred', label: 'Referred Customer' },
    { key: 'client', label: 'Client' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'reward', label: 'Reward' },
    { key: 'date', label: 'Date' },
  ]
  return (
    <div>
      <div className="page-header"><div><h2>Referrals</h2></div></div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Programs Active" value="5" />
        <StatCard label="Referrals Submitted" value={referrals.length} />
        <StatCard label="Rewards Pending" value={referrals.filter(r => r.status === 'Submitted').length} />
        <StatCard label="Converted" value={converted} />
        <StatCard label="Est. Revenue" value="$18,400" />
      </div>
      <DataTable columns={cols} rows={referrals} />
    </div>
  )
}

// ─── Reports Page ─────────────────────────────────────────────
function ReportsPage() {
  const [selectedClient, setSelectedClient] = useState('Ozark Family HVAC')
  const [exportClicked, setExportClicked] = useState(false)
  const reports = {
    'Ozark Family HVAC': {
      leads: 22, bestCampaign: 'HVAC Spring Special', reviews: 4,
      referralLeads: 3, revenue: '$14,200',
      steps: [
        'Launch a referral follow up sequence for 3 pending referrals.',
        'Increase Google Ad budget by 15% for the spring heating season.',
        'Request reviews from the 2 jobs completed last week.',
        'Schedule a monthly report review call with the client.',
      ],
    },
    'Joplin Roofing Co.': {
      leads: 18, bestCampaign: 'Spring Roofing Push', reviews: 2,
      referralLeads: 2, revenue: '$11,800',
      steps: [
        'Follow up on 2 outstanding estimates over $5,000.',
        'Expand QR flyer distribution to 3 more zip codes.',
        'Add a referral program for past customers.',
        'Set up a Google review request for recent jobs.',
      ],
    },
    'Main Street Dental': {
      leads: 12, bestCampaign: 'New Patient Drive', reviews: 3,
      referralLeads: 2, revenue: '$8,600',
      steps: [
        'Send follow up to 3 new leads who have not responded.',
        'Launch a seasonal cleaning promotion for spring.',
        'Request reviews from 4 new patients from last month.',
        'Add a patient referral incentive to the portal.',
      ],
    },
  }
  const report = reports[selectedClient] || reports['Ozark Family HVAC']

  return (
    <div>
      <div className="report-header">
        <div><h2>Monthly Report — February 2025</h2></div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <select
            value={selectedClient}
            onChange={e => setSelectedClient(e.target.value)}
            style={{ padding: '8px 12px', border: '1.5px solid var(--border)', borderRadius: 6, fontSize: '0.875rem', background: 'var(--surface)', color: 'var(--dark)', outline: 'none' }}
          >
            {agencyOSClients.map(c => <option key={c.id}>{c.name}</option>)}
          </select>
          <button className="btn btn-secondary btn-sm" onClick={() => { setExportClicked(true); setTimeout(() => setExportClicked(false), 3000) }}>Export PDF</button>
          {exportClicked && <span className="demo-notice">Not available in demo mode.</span>}
        </div>
      </div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: 6 }}>Client</div>
          <div style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--dark)' }}>{selectedClient}</div>
          <div style={{ fontSize: '0.875rem', color: 'var(--mid)' }}>Prepared by Four States Creative Group</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <StatCard label="Leads Generated" value={report.leads} />
          <StatCard label="Best Campaign" value={report.bestCampaign} />
          <StatCard label="Reviews Received" value={report.reviews} />
          <StatCard label="Referral Leads" value={report.referralLeads} />
        </div>
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '0.75rem' }}>Recommended Next Steps</div>
          {report.steps.map((s, i) => (
            <div key={i} className="report-recommendation">
              <p>{s}</p>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border)', fontSize: '0.8125rem', color: 'var(--muted)' }}>
          Estimated Revenue Influenced: <strong style={{ color: 'var(--dark)' }}>{report.revenue}</strong>
        </div>
      </div>
    </div>
  )
}

// ─── Settings Page ────────────────────────────────────────────
function SettingsPage() {
  const [agencyName, setAgencyName] = useState('Four States Creative Group')
  const [portalName, setPortalName] = useState('Client Dashboard')
  const [primaryColor, setPrimaryColor] = useState('#2563eb')
  const [toggles, setToggles] = useState({ clientAccess: true, monthlyReport: true, emailNotifications: true })

  const colors = ['#2563eb','#0ea5e9','#7c3aed','#059669','#dc2626','#d97706','#0f172a']

  function Toggle({ id }) {
    return (
      <label className="toggle">
        <input type="checkbox" checked={toggles[id]} onChange={() => setToggles(p => ({ ...p, [id]: !p[id] }))} />
        <span className="toggle-slider" />
      </label>
    )
  }

  return (
    <div>
      <div className="page-header"><div><h2>Settings</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>White label configuration</p></div></div>
      <div className="settings-grid">
        <div>
          <div className="card" style={{ marginBottom: '1rem' }}>
            <div className="card-header"><h3>White Label Branding</h3></div>
            <div className="card-body">
              <div className="form" style={{ gap: '1rem' }}>
                <div className="form-group">
                  <label>Agency Name</label>
                  <input value={agencyName} onChange={e => setAgencyName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Portal Name</label>
                  <input value={portalName} onChange={e => setPortalName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Primary Color</label>
                  <div className="color-options">
                    {colors.map(c => (
                      <div
                        key={c}
                        className={`color-swatch${primaryColor === c ? ' selected' : ''}`}
                        style={{ background: c }}
                        onClick={() => setPrimaryColor(c)}
                      />
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Logo</label>
                  <div className="logo-upload">Click to upload agency logo (PNG, SVG)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><h3>Client Settings</h3></div>
            <div className="card-body">
              {[
                { id: 'clientAccess', label: 'Client portal access enabled' },
                { id: 'monthlyReport', label: 'Auto-generate monthly reports' },
                { id: 'emailNotifications', label: 'Email notifications for new leads' },
              ].map(item => (
                <div key={item.id} className="toggle-row">
                  <span className="toggle-label">{item.label}</span>
                  <Toggle id={item.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--mid)' }}>Portal Preview</div>
          <div className="preview-card" style={{ borderTop: `4px solid ${primaryColor}` }}>
            <div className="preview-card-agency">{agencyName}</div>
            <div className="preview-card-name">{portalName}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
              {['Leads','Campaigns','Reviews','Reports'].map(item => (
                <div key={item} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 6, padding: '0.75rem', fontSize: '0.8125rem', color: '#cbd5e1' }}>{item}</div>
              ))}
            </div>
            <div className="preview-card-powered">Powered by {agencyName}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────
export default function AgencyOS() {
  const [activePage, setActivePage] = useState('dashboard')
  const [leads, setLeads] = useState(agencyOSLeads)
  const [reviews, setReviews] = useState(agencyOSReviews)
  const [referrals] = useState(agencyOSReferrals)

  return (
    <DashboardLayout
      title="Four States Creative Group"
      subtitle="Client Portal"
      poweredBy="Powered by Your Agency"
      navItems={NAV}
      activePage={activePage}
      onPageChange={setActivePage}
    >
      {activePage === 'dashboard' && <DashboardPage />}
      {activePage === 'clients' && <ClientsPage onNavigate={setActivePage} />}
      {activePage === 'leads' && (
        <LeadsPage leads={leads} onAddLead={lead => setLeads(p => [lead, ...p])} />
      )}
      {activePage === 'campaigns' && <CampaignsPage />}
      {activePage === 'reviews' && (
        <ReviewsPage reviews={reviews} onAddReview={r => setReviews(p => [r, ...p])} />
      )}
      {activePage === 'referrals' && <ReferralsPage referrals={referrals} />}
      {activePage === 'reports' && <ReportsPage />}
      {activePage === 'settings' && <SettingsPage />}
    </DashboardLayout>
  )
}
