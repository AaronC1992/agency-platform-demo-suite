import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import StatCard from '../components/StatCard'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import VisualBarChart from '../components/VisualBarChart'
import {
  localLeadLeads,
  localLeadEstimates,
  localLeadCalendar,
  localLeadReviews,
  leadSources,
  revenueByWeek,
} from '../data/mockData'

const NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'leads', label: 'Leads' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'estimates', label: 'Estimates' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
]

const STATUSES = ['New', 'Contacted', 'Estimate Scheduled', 'Estimate Sent', 'Won', 'Lost']
const SOURCES = ['Website Form', 'Google Business', 'Facebook', 'Referral', 'Phone Call', 'QR Code']

function statusBadge(status) {
  const map = {
    New: 'badge-blue', Contacted: 'badge-yellow',
    'Estimate Scheduled': 'badge-purple', 'Estimate Sent': 'badge-orange',
    Won: 'badge-green', Lost: 'badge-red',
    Draft: 'badge-gray', Sent: 'badge-blue', Accepted: 'badge-green', Declined: 'badge-red',
    Completed: 'badge-green', Pending: 'badge-yellow',
  }
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>
}

function stars(n) {
  if (!n) return <span className="badge badge-gray">Pending</span>
  return <span style={{ color: '#f59e0b' }}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

const calendarColors = { estimate: '#2563eb', followup: '#f59e0b', job: '#10b981', review: '#8b5cf6' }

// ─── Dashboard Page ───────────────────────────────────────────
function LLDashboard({ leads }) {
  const todayFollowUps = leads.filter(l => ['New', 'Contacted', 'Estimate Scheduled'].includes(l.status)).slice(0, 4)
  const recentLeads = leads.slice(0, 4)
  const maxSource = Math.max(...leadSources.map(s => s.count), 1)
  const builtFor = [
    { title: 'Never Lose a Website Lead', desc: 'Every form submission lands in your pipeline automatically, ready for follow-up.' },
    { title: 'Track Every Estimate', desc: 'Know exactly which estimates are pending, accepted, or still waiting for a callback.' },
    { title: 'Know Which Marketing Works', desc: 'See exactly which lead sources are generating the most revenue for your business.' },
    { title: 'Follow Up Faster', desc: 'Daily follow-up reminders keep your team on top of every opportunity in the pipeline.' },
    { title: 'Request More Reviews', desc: 'Automated review requests go out after every completed job to build your reputation.' },
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Ozark Family HVAC — February 2025</p>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="New Leads" value="10" change="3 vs last week" changeDir="up" />
        <StatCard label="Follow Ups Due" value="5" />
        <StatCard label="Estimates Sent" value="6" change="2 vs last month" changeDir="up" />
        <StatCard label="Jobs Won" value="8" change="1 vs last month" changeDir="up" />
        <StatCard label="Jobs Lost" value="2" />
        <StatCard label="Est. Monthly Revenue" value="$18,650" change="14% vs last month" changeDir="up" />
        <StatCard label="Avg. Job Value" value="$2,331" change="8% vs last month" changeDir="up" />
        <StatCard label="Reviews Requested" value="6" />
      </div>
      <div className="two-col mb-6">
        <div className="card">
          <div className="card-header"><h3>Today's Follow-Ups</h3></div>
          <div className="card-body">
            {todayFollowUps.length === 0 ? <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>No follow-ups scheduled today.</p> : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {todayFollowUps.map(l => (
                  <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{l.customer}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{l.service} · {l.phone}</div>
                    </div>
                    {statusBadge(l.status)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Recent Leads</h3></div>
          <div className="card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {recentLeads.map(l => (
                <div key={l.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{l.customer}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{l.service} · {l.source}</div>
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.9375rem' }}>{l.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="two-col mb-6">
        <div className="card">
          <div className="card-header"><h3>Lead Sources Breakdown</h3></div>
          <div className="card-body">
            <div className="source-bars">
              {leadSources.map(s => (
                <div key={s.label} className="source-row">
                  <div className="source-label">{s.label}</div>
                  <div className="source-track">
                    <div className="source-fill" style={{ width: `${(s.count / maxSource) * 100}%`, backgroundColor: s.color, height: '100%', borderRadius: 100 }} />
                  </div>
                  <div className="source-count">{s.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Built for Local Businesses</h3></div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {builtFor.map(b => (
              <div key={b.title} style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '0.875rem' }}>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: 2 }}>{b.title}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--mid)' }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Leads Page ───────────────────────────────────────────────
function LLLeads({ leads, onAddLead, onUpdateStatus }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [sourceFilter, setSourceFilter] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { customer: '', phone: '', email: '', service: '', source: '', status: 'New', value: '', followUp: '', assigned: 'Jake Owens', notes: '' }
  const [form, setForm] = useState(blankForm)

  const filtered = leads.filter(l => {
    if (statusFilter && l.status !== statusFilter) return false
    if (sourceFilter && l.source !== sourceFilter) return false
    if (search && !l.customer.toLowerCase().includes(search.toLowerCase())) return false
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
    { key: 'customer', label: 'Customer' },
    { key: 'phone', label: 'Phone' },
    { key: 'service', label: 'Service' },
    { key: 'source', label: 'Source' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'value', label: 'Value' },
    { key: 'followUp', label: 'Follow Up' },
    { key: 'assigned', label: 'Assigned To' },
    { key: 'notes', label: 'Notes', render: v => <span style={{ fontSize: '0.8125rem', color: 'var(--mid)' }}>{v}</span> },
  ]

  return (
    <div>
      <div className="page-header">
        <div><h2>Leads</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>{filtered.length} of {leads.length} leads</p></div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>+ Add Lead</button>
      </div>
      <div className="filter-bar">
        <input placeholder="Search by customer name…" value={search} onChange={e => setSearch(e.target.value)} />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {STATUSES.map(s => <option key={s}>{s}</option>)}
        </select>
        <select value={sourceFilter} onChange={e => setSourceFilter(e.target.value)}>
          <option value="">All Sources</option>
          {SOURCES.map(s => <option key={s}>{s}</option>)}
        </select>
        {(search || statusFilter || sourceFilter) && (
          <button className="btn btn-ghost btn-sm" onClick={() => { setSearch(''); setStatusFilter(''); setSourceFilter('') }}>Clear</button>
        )}
      </div>
      <DataTable columns={cols} rows={filtered} emptyMessage="No leads match your filters." />

      {showModal && (
        <Modal title="Add New Lead" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Lead Added</h3>
              <p>The lead has been added to your pipeline.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group"><label>Customer Name</label><input required value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))} placeholder="Full name" /></div>
                <div className="form-group"><label>Phone</label><input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="(417) 555-0000" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Service Needed</label>
                  <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}>
                    <option value="">Select service</option>
                    {['AC Installation','AC Repair','Heating Repair','Furnace Replacement','HVAC Maintenance','Duct Cleaning'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Lead Source</label>
                  <select value={form.source} onChange={e => setForm(p => ({ ...p, source: e.target.value }))}>
                    <option value="">Select source</option>
                    {SOURCES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Status</label>
                  <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                    {STATUSES.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Est. Value</label><input value={form.value} onChange={e => setForm(p => ({ ...p, value: e.target.value }))} placeholder="$0" /></div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Follow Up Date</label><input value={form.followUp} onChange={e => setForm(p => ({ ...p, followUp: e.target.value }))} placeholder="e.g. Feb 20" /></div>
                <div className="form-group"><label>Assigned To</label>
                  <select value={form.assigned} onChange={e => setForm(p => ({ ...p, assigned: e.target.value }))}>
                    {['Jake Owens','Marcus Hill'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
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

// ─── Pipeline Page ────────────────────────────────────────────
function LLPipeline({ leads, onUpdateStatus }) {
  return (
    <div>
      <div className="page-header"><div><h2>Pipeline</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Drag cards or use the status selector to move leads</p></div></div>
      <div className="pipeline">
        {STATUSES.map(status => {
          const cards = leads.filter(l => l.status === status)
          return (
            <div key={status} className="pipeline-column">
              <div className="pipeline-column-header">
                <span className="pipeline-column-title">{status}</span>
                <span className="pipeline-count">{cards.length}</span>
              </div>
              <div className="pipeline-cards">
                {cards.map(lead => (
                  <div key={lead.id} className="pipeline-card">
                    <div className="pipeline-card-name">{lead.customer}</div>
                    <div className="pipeline-card-service">{lead.service}</div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{lead.source}</span>
                    </div>
                    <div className="pipeline-card-footer">
                      <span className="pipeline-card-value">{lead.value}</span>
                      <span className="pipeline-card-date">Follow-up: {lead.followUp}</span>
                    </div>
                    <div style={{ marginTop: '0.625rem' }}>
                      <select
                        value={lead.status}
                        onChange={e => onUpdateStatus(lead.id, e.target.value)}
                        style={{ fontSize: '0.75rem', padding: '4px 8px', border: '1px solid var(--border)', borderRadius: 4, width: '100%', background: 'var(--bg)', color: 'var(--mid)', cursor: 'pointer' }}
                      >
                        {STATUSES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
                {cards.length === 0 && (
                  <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.8125rem', padding: '1rem 0' }}>No leads</div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Estimates Page ───────────────────────────────────────────
function LLEstimates({ estimates, onAddEstimate }) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { customer: '', service: '', amount: '', dateSent: '', status: 'Draft', followUp: '' }
  const [form, setForm] = useState(blankForm)

  function handleSubmit(e) {
    e.preventDefault()
    onAddEstimate({ ...form, id: Date.now() })
    setSubmitted(true)
  }
  function handleClose() { setShowModal(false); setSubmitted(false); setForm(blankForm) }

  const cols = [
    { key: 'customer', label: 'Customer' },
    { key: 'service', label: 'Service' },
    { key: 'amount', label: 'Amount' },
    { key: 'dateSent', label: 'Date Sent' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'followUp', label: 'Follow Up' },
  ]

  return (
    <div>
      <div className="page-header">
        <div><h2>Estimates</h2></div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>+ Create Estimate</button>
      </div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Total Estimates" value={estimates.length} />
        <StatCard label="Accepted" value={estimates.filter(e => e.status === 'Accepted').length} />
        <StatCard label="Pending" value={estimates.filter(e => ['Draft','Sent'].includes(e.status)).length} />
        <StatCard label="Declined" value={estimates.filter(e => e.status === 'Declined').length} />
      </div>
      <DataTable columns={cols} rows={estimates} />

      {showModal && (
        <Modal title="Create Estimate" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Estimate Created</h3>
              <p>The estimate has been saved to your records.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-row">
                <div className="form-group"><label>Customer</label><input required value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))} /></div>
                <div className="form-group"><label>Service</label>
                  <select value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}>
                    <option value="">Select service</option>
                    {['AC Installation','AC Repair','Heating Repair','Furnace Replacement','HVAC Maintenance','Duct Cleaning'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Estimate Amount</label><input required value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} placeholder="$0" /></div>
                <div className="form-group"><label>Status</label>
                  <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                    {['Draft','Sent','Accepted','Declined'].map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group"><label>Date Sent</label><input value={form.dateSent} onChange={e => setForm(p => ({ ...p, dateSent: e.target.value }))} placeholder="e.g. Feb 20" /></div>
                <div className="form-group"><label>Follow Up Date</label><input value={form.followUp} onChange={e => setForm(p => ({ ...p, followUp: e.target.value }))} placeholder="e.g. Feb 27" /></div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Save Estimate</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}

// ─── Calendar Page ────────────────────────────────────────────
function LLCalendar() {
  const grouped = localLeadCalendar.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = []
    acc[item.date].push(item)
    return acc
  }, {})

  const typeLabel = { estimate: 'Estimate', followup: 'Follow-Up', job: 'Job', review: 'Review Request' }

  return (
    <div>
      <div className="page-header"><div><h2>Calendar</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Week of February 17–21, 2025</p></div></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date}>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.625rem' }}>{date}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {items.map((item, i) => (
                <div key={i} className="calendar-item" style={{ borderLeftColor: calendarColors[item.type] }}>
                  <div>
                    <div className="calendar-item-date">{item.time}</div>
                    <span style={{ fontSize: '0.7rem', background: calendarColors[item.type] + '22', color: calendarColors[item.type], padding: '2px 8px', borderRadius: 100, fontWeight: 700 }}>{typeLabel[item.type]}</span>
                  </div>
                  <div>
                    <div className="calendar-item-title">{item.title}</div>
                    <div className="calendar-item-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Reviews Page ─────────────────────────────────────────────
function LLReviews({ reviews, onAddReview }) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { customer: '', jobDate: '' }
  const [form, setForm] = useState(blankForm)

  const completed = reviews.filter(r => r.status === 'Completed')
  const avgRating = completed.length
    ? (completed.reduce((s, r) => s + r.rating, 0) / completed.length).toFixed(1)
    : '—'

  function handleSubmit(e) {
    e.preventDefault()
    onAddReview({ ...form, requestDate: 'Today', status: 'Sent', rating: null, id: Date.now() })
    setSubmitted(true)
  }
  function handleClose() { setShowModal(false); setSubmitted(false); setForm(blankForm) }

  const cols = [
    { key: 'customer', label: 'Customer' },
    { key: 'jobDate', label: 'Job Completed' },
    { key: 'requestDate', label: 'Request Sent' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'rating', label: 'Rating', render: v => stars(v) },
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
              <h3>Request Sent</h3>
              <p>The customer will receive a review request for their recent job.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group"><label>Customer Name</label><input required value={form.customer} onChange={e => setForm(p => ({ ...p, customer: e.target.value }))} /></div>
              <div className="form-group"><label>Job Completed Date</label><input value={form.jobDate} onChange={e => setForm(p => ({ ...p, jobDate: e.target.value }))} placeholder="e.g. Feb 20" /></div>
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

// ─── Reports Page ─────────────────────────────────────────────
function LLReports({ leads }) {
  const [exportClicked, setExportClicked] = useState(false)
  const won = leads.filter(l => l.status === 'Won')
  const lost = leads.filter(l => l.status === 'Lost')
  const total = leads.length
  const convRate = total ? Math.round((won.length / total) * 100) : 0

  return (
    <div>
      <div className="report-header">
        <div><h2>Monthly Report — February 2025</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem' }}>Ozark Family HVAC</p></div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => { setExportClicked(true); setTimeout(() => setExportClicked(false), 3000) }}>Export PDF</button>
          {exportClicked && <span className="demo-notice">Not available in demo mode.</span>}
        </div>
      </div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Total Leads" value={total} />
        <StatCard label="Conversion Rate" value={`${convRate}%`} />
        <StatCard label="Revenue Won" value="$18,650" />
        <StatCard label="Avg Response Time" value="2.4 hrs" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="card">
          <div className="card-header"><h3>Leads by Source</h3></div>
          <div className="card-body">
            <VisualBarChart data={leadSources} labelKey="label" valueKey="count" color="#2563eb" />
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Revenue by Week</h3></div>
          <div className="card-body">
            <VisualBarChart data={revenueByWeek} labelKey="label" valueKey="value" color="#10b981" formatValue={v => `$${v.toLocaleString()}`} />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header"><h3>Recommended Next Steps</h3></div>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            'Follow up on 2 pending estimates over $5,000 before the end of the week.',
            'Launch a Facebook retargeting campaign targeting homeowners who visited your website.',
            'Request reviews from the 4 jobs completed in the last 10 days.',
            'Add Google Business Profile photos from recent completed jobs.',
            'Consider a referral incentive program for your top repeat customers.',
          ].map((s, i) => (
            <div key={i} className="report-recommendation"><p>{s}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Settings Page ────────────────────────────────────────────
function LLSettings() {
  const [businessName, setBusinessName] = useState('Ozark Family HVAC')
  const [reviewTemplate, setReviewTemplate] = useState(
    'Hi {customer}, thank you for choosing Ozark Family HVAC! We would love to hear about your experience. Please take a moment to leave us a review on Google: {link}'
  )
  const [toggles, setToggles] = useState({ newLead: true, followUp: true, estimate: true, review: false })

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
      <div className="page-header"><div><h2>Settings</h2></div></div>
      <div className="settings-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div className="card-header"><h3>Business Info</h3></div>
            <div className="card-body">
              <div className="form">
                <div className="form-group"><label>Business Name</label><input value={businessName} onChange={e => setBusinessName(e.target.value)} /></div>
                <div className="form-group"><label>Services Offered</label>
                  <textarea defaultValue="AC Installation, AC Repair, Heating Repair, Furnace Replacement, HVAC Maintenance, Duct Cleaning" rows={3} />
                </div>
                <div className="form-group"><label>Team Members</label>
                  <textarea defaultValue="Jake Owens – Lead Technician&#10;Marcus Hill – Service Technician&#10;Dana Kelley – Office Manager" rows={3} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><h3>Review Request Template</h3></div>
            <div className="card-body">
              <div className="form-group">
                <label>Message Template</label>
                <textarea value={reviewTemplate} onChange={e => setReviewTemplate(e.target.value)} rows={4} />
              </div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.5rem' }}>Use {'{customer}'} and {'{link}'} as placeholders.</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Notification Preferences</h3></div>
          <div className="card-body">
            {[
              { id: 'newLead', label: 'New lead notifications' },
              { id: 'followUp', label: 'Follow-up due reminders' },
              { id: 'estimate', label: 'Estimate status updates' },
              { id: 'review', label: 'Review received alerts' },
            ].map(item => (
              <div key={item.id} className="toggle-row">
                <span className="toggle-label">{item.label}</span>
                <Toggle id={item.id} />
              </div>
            ))}
          </div>
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', fontSize: '0.8125rem', color: 'var(--muted)', textAlign: 'center' }}>
            Provided by Your Marketing Agency
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────
export default function LocalLead() {
  const [activePage, setActivePage] = useState('dashboard')
  const [leads, setLeads] = useState(localLeadLeads)
  const [estimates, setEstimates] = useState(localLeadEstimates)
  const [reviews, setReviews] = useState(localLeadReviews)

  function updateLeadStatus(id, newStatus) {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l))
  }

  return (
    <DashboardLayout
      title="Ozark Family HVAC"
      subtitle="LocalLead CRM"
      poweredBy="Provided by Your Marketing Agency"
      navItems={NAV}
      activePage={activePage}
      onPageChange={setActivePage}
    >
      {activePage === 'dashboard' && <LLDashboard leads={leads} />}
      {activePage === 'leads' && (
        <LLLeads leads={leads} onAddLead={l => setLeads(p => [l, ...p])} onUpdateStatus={updateLeadStatus} />
      )}
      {activePage === 'pipeline' && (
        <LLPipeline leads={leads} onUpdateStatus={updateLeadStatus} />
      )}
      {activePage === 'estimates' && (
        <LLEstimates estimates={estimates} onAddEstimate={e => setEstimates(p => [e, ...p])} />
      )}
      {activePage === 'calendar' && <LLCalendar />}
      {activePage === 'reviews' && (
        <LLReviews reviews={reviews} onAddReview={r => setReviews(p => [r, ...p])} />
      )}
      {activePage === 'reports' && <LLReports leads={leads} />}
      {activePage === 'settings' && <LLSettings />}
    </DashboardLayout>
  )
}
