import { useState } from 'react'
import DashboardLayout from '../components/DashboardLayout'
import StatCard from '../components/StatCard'
import DataTable from '../components/DataTable'
import Modal from '../components/Modal'
import VisualBarChart from '../components/VisualBarChart'
import {
  localBoostBusinesses,
  localBoostQRCodes,
  localBoostCampaigns,
  localBoostRedemptions,
  localBoostReferrals,
  localBoostCustomers,
  weeklyBoostData,
} from '../data/mockData'

const NAV = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'qrtracking', label: 'QR Tracking' },
  { id: 'businesses', label: 'Businesses' },
  { id: 'redemptions', label: 'Redemptions' },
  { id: 'referrals', label: 'Referrals' },
  { id: 'customers', label: 'Customers' },
  { id: 'reports', label: 'Reports' },
  { id: 'settings', label: 'Settings' },
]

function statusBadge(status) {
  const map = {
    Active: 'badge-green', Completed: 'badge-gray', Paused: 'badge-yellow',
    Redeemed: 'badge-green', Pending: 'badge-yellow', Expired: 'badge-red',
    Submitted: 'badge-blue', Contacted: 'badge-yellow', Converted: 'badge-green',
    'Reward Sent': 'badge-purple',
  }
  return <span className={`badge ${map[status] || 'badge-gray'}`}>{status}</span>
}

// ─── Dashboard Page ───────────────────────────────────────────
function LBDashboard() {
  const activity = [
    { text: 'QR scan from Downtown Coffee Co. – front counter display', time: '3 minutes ago' },
    { text: 'Coupon redeemed at Route 66 Burger House – BOGO burger offer', time: '11 minutes ago' },
    { text: 'Referral submitted for Main Street Dental by Sarah Jennings', time: '28 minutes ago' },
    { text: 'New customer signup from Joplin Family Fitness campaign', time: '45 minutes ago' },
    { text: 'Campaign report generated for Joplin Local Rewards', time: '1 hour ago' },
  ]
  const topBusinesses = [
    { name: 'Route 66 Burger House', scans: 487, redemptions: 122 },
    { name: 'Downtown Coffee Co.', scans: 412, redemptions: 87 },
    { name: 'Joplin Family Fitness', scans: 275, redemptions: 58 },
    { name: 'Four State Auto Repair', scans: 318, redemptions: 64 },
    { name: 'Main Street Dental', scans: 226, redemptions: 41 },
  ]
  const bestUses = [
    'Grand openings', 'Restaurant promotions', 'Retail events', 'Chamber campaigns',
    'Local subscription boxes', 'Referral contests', 'Direct mail tracking', 'Community giveaways',
  ]

  return (
    <div>
      <div className="page-header">
        <div>
          <h2>Dashboard</h2>
          <p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Joplin Local Rewards Campaign — February 2025</p>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard label="Total QR Scans" value="2,258" change="23% vs last month" changeDir="up" />
        <StatCard label="Unique Visitors" value="1,168" change="19% vs last month" changeDir="up" />
        <StatCard label="Coupon Redemptions" value="476" change="31% vs last month" changeDir="up" />
        <StatCard label="Customer Signups" value="342" change="28% vs last month" changeDir="up" />
        <StatCard label="Referral Leads" value="18" />
        <StatCard label="Participating Businesses" value="8" />
        <StatCard label="Top Campaign" value="Joplin Local Rewards" />
        <StatCard label="Est. Revenue Influenced" value="$89,400" change="18% vs last month" changeDir="up" />
      </div>

      <div className="card mb-6">
        <div className="card-header"><h3>Weekly Campaign Performance — Scans vs. Redemptions</h3></div>
        <div className="card-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>QR Scans per Week</div>
            <VisualBarChart data={weeklyBoostData} labelKey="label" valueKey="scans" color="#2563eb" />
          </div>
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--muted)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Redemptions per Week</div>
            <VisualBarChart data={weeklyBoostData} labelKey="label" valueKey="redemptions" color="#10b981" />
          </div>
        </div>
      </div>

      <div className="two-col mb-6">
        <div className="card">
          <div className="card-header"><h3>Top Performing Businesses</h3></div>
          <div className="card-body">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {topBusinesses.map((b, i) => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '0.75rem', borderBottom: i < topBusinesses.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{b.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{b.scans} scans · {b.redemptions} redemptions</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
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
      </div>

      <div className="card">
        <div className="card-header"><h3>Best Uses for LocalBoost</h3></div>
        <div className="card-body">
          <div className="uses-grid">
            {bestUses.map(u => (
              <div key={u} className="use-card">{u}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Campaigns Page ───────────────────────────────────────────
function LBCampaigns({ campaigns, onAddCampaign }) {
  const [showModal, setShowModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const blankForm = { name: '', type: '', businesses: '', status: 'Active' }
  const [form, setForm] = useState(blankForm)

  function handleSubmit(e) {
    e.preventDefault()
    onAddCampaign({ ...form, id: Date.now(), scans: 0, redemptions: 0, signups: 0, businesses: Number(form.businesses) || 0 })
    setSubmitted(true)
  }
  function handleClose() { setShowModal(false); setSubmitted(false); setForm(blankForm) }

  const types = ['Grand Opening', 'Restaurant Promo', 'Retail Giveaway', 'Chamber Event', 'Local Rewards Box', 'Referral Drive', 'Holiday Promotion']

  return (
    <div>
      <div className="page-header">
        <div><h2>Campaigns</h2></div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>+ Create Campaign</button>
      </div>
      <div className="campaign-cards">
        {campaigns.map(c => (
          <div key={c.id} className="campaign-card">
            <div className="campaign-card-header">
              <div>
                <div className="campaign-card-name">{c.name}</div>
                <div style={{ marginTop: 4 }}><span className="campaign-card-type">{c.type}</span></div>
              </div>
              {statusBadge(c.status)}
            </div>
            <div className="campaign-card-stats" style={{ marginTop: '0.875rem' }}>
              <div className="campaign-card-stat"><strong>{c.businesses}</strong>Businesses</div>
              <div className="campaign-card-stat"><strong>{c.scans.toLocaleString()}</strong>QR Scans</div>
              <div className="campaign-card-stat"><strong>{c.redemptions}</strong>Redemptions</div>
              <div className="campaign-card-stat"><strong>{c.signups}</strong>Signups</div>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <Modal title="Create Campaign" onClose={handleClose}>
          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>Campaign Created</h3>
              <p>Your new campaign has been added.</p>
              <button className="btn btn-primary" onClick={handleClose}>Done</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group"><label>Campaign Name</label><input required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></div>
              <div className="form-row">
                <div className="form-group"><label>Campaign Type</label>
                  <select value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}>
                    <option value="">Select type</option>
                    {types.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group"><label>Business Count</label><input type="number" value={form.businesses} onChange={e => setForm(p => ({ ...p, businesses: e.target.value }))} placeholder="0" /></div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary">Create Campaign</button>
              </div>
            </form>
          )}
        </Modal>
      )}
    </div>
  )
}

// ─── QR Tracking Page ─────────────────────────────────────────
function LBQRTracking() {
  const [showQR, setShowQR] = useState(null)

  const cols = [
    { key: 'name', label: 'QR Code Name' },
    { key: 'business', label: 'Business' },
    { key: 'placement', label: 'Placement' },
    { key: 'scans', label: 'Total Scans' },
    { key: 'uniqueScans', label: 'Unique Scans' },
    { key: 'lastScan', label: 'Last Scan' },
    { key: 'conversion', label: 'Conversion' },
    {
      key: 'id', label: '',
      render: (v, row) => (
        <button className="btn btn-secondary btn-sm" onClick={() => setShowQR(row)}>View QR</button>
      ),
    },
  ]

  return (
    <div>
      <div className="page-header"><div><h2>QR Tracking</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>8 active QR codes across the campaign</p></div></div>
      <DataTable columns={cols} rows={localBoostQRCodes} />

      {showQR && (
        <Modal title={showQR.name} onClose={() => setShowQR(null)}>
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8,1fr)', gap: 3, width: 140, height: 140, background: 'white', border: '1px solid var(--border)', borderRadius: 8, margin: '0 auto', padding: 8 }}>
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} style={{ background: [0,1,2,8,9,10,16,17,18,3,4,5,11,14,22,23,24,30,48,49,50,56,57,58,40,41,42,32,33,34,26,27,28,44,45,46,63,62,61,55,54,53].includes(i) ? '#1e293b' : 'white', borderRadius: 1 }} />
                ))}
              </div>
            </div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{showQR.business}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--mid)', marginBottom: '0.5rem' }}>Placement: {showQR.placement}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              <div><strong style={{ display: 'block', fontSize: '1.25rem' }}>{showQR.scans}</strong>Total Scans</div>
              <div><strong style={{ display: 'block', fontSize: '1.25rem' }}>{showQR.conversion}</strong>Conversion</div>
            </div>
            <button className="btn btn-primary" onClick={() => setShowQR(null)}>Done</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

// ─── Businesses Page ──────────────────────────────────────────
function LBBusinesses() {
  return (
    <div>
      <div className="page-header"><div><h2>Businesses</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>8 participating businesses</p></div></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {localBoostBusinesses.map(b => (
          <div key={b.id} className="campaign-card">
            <div className="campaign-card-header">
              <div>
                <div className="campaign-card-name">{b.name}</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: 2 }}>{b.category}</div>
              </div>
              {statusBadge(b.status)}
            </div>
            <div style={{ background: 'var(--bg)', borderRadius: 6, padding: '0.625rem 0.875rem', fontSize: '0.8125rem', color: 'var(--mid)', margin: '0.75rem 0', fontStyle: 'italic' }}>
              "{b.offer}"
            </div>
            <div className="campaign-card-stats">
              <div className="campaign-card-stat"><strong>{b.items}</strong>Items Contributed</div>
              <div className="campaign-card-stat"><strong>{b.scans}</strong>Scans</div>
              <div className="campaign-card-stat"><strong>{b.redemptions}</strong>Redemptions</div>
              <div className="campaign-card-stat"><strong>{b.leads}</strong>Leads Generated</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Redemptions Page ─────────────────────────────────────────
function LBRedemptions() {
  const [statusFilter, setStatusFilter] = useState('')

  const filtered = localBoostRedemptions.filter(r => !statusFilter || r.status === statusFilter)

  const cols = [
    { key: 'customer', label: 'Customer' },
    { key: 'business', label: 'Business' },
    { key: 'offer', label: 'Offer' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'value', label: 'Value' },
    { key: 'campaign', label: 'Campaign' },
  ]

  return (
    <div>
      <div className="page-header"><div><h2>Redemptions</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>{filtered.length} records</p></div></div>
      <div className="filter-bar">
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {['Redeemed','Pending','Expired'].map(s => <option key={s}>{s}</option>)}
        </select>
        {statusFilter && <button className="btn btn-ghost btn-sm" onClick={() => setStatusFilter('')}>Clear</button>}
      </div>
      <DataTable columns={cols} rows={filtered} emptyMessage="No redemptions match your filters." />
    </div>
  )
}

// ─── Referrals Page ───────────────────────────────────────────
function LBReferrals() {
  const cols = [
    { key: 'referrer', label: 'Referrer' },
    { key: 'referred', label: 'Referred Customer' },
    { key: 'business', label: 'Business' },
    { key: 'reward', label: 'Reward' },
    { key: 'status', label: 'Status', render: v => statusBadge(v) },
    { key: 'date', label: 'Date' },
  ]
  return (
    <div>
      <div className="page-header"><div><h2>Referrals</h2></div></div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Total Referrals" value={localBoostReferrals.length} />
        <StatCard label="Converted" value={localBoostReferrals.filter(r => r.status === 'Converted').length} />
        <StatCard label="Rewards Sent" value={localBoostReferrals.filter(r => r.status === 'Reward Sent').length} />
        <StatCard label="Pending" value={localBoostReferrals.filter(r => r.status === 'Submitted').length} />
      </div>
      <DataTable columns={cols} rows={localBoostReferrals} />
    </div>
  )
}

// ─── Customers Page ───────────────────────────────────────────
function LBCustomers() {
  const [search, setSearch] = useState('')

  const filtered = localBoostCustomers.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  )

  const cols = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'zip', label: 'Zip' },
    { key: 'source', label: 'Campaign Source' },
    { key: 'offers', label: 'Offers Claimed' },
    { key: 'referrals', label: 'Referrals' },
    { key: 'lastActivity', label: 'Last Activity' },
  ]

  return (
    <div>
      <div className="page-header"><div><h2>Customers</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>{filtered.length} customers</p></div></div>
      <div className="filter-bar">
        <input placeholder="Search by name or email…" value={search} onChange={e => setSearch(e.target.value)} />
        {search && <button className="btn btn-ghost btn-sm" onClick={() => setSearch('')}>Clear</button>}
      </div>
      <DataTable columns={cols} rows={filtered} emptyMessage="No customers found." />
    </div>
  )
}

// ─── Reports Page ─────────────────────────────────────────────
function LBReports() {
  const [exportClicked, setExportClicked] = useState(false)
  return (
    <div>
      <div className="report-header">
        <div><h2>Campaign Report — February 2025</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem' }}>Joplin Local Rewards Campaign</p></div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn btn-secondary btn-sm" onClick={() => { setExportClicked(true); setTimeout(() => setExportClicked(false), 3000) }}>Export Report</button>
          {exportClicked && <span className="demo-notice">Not available in demo mode.</span>}
        </div>
      </div>
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '1.5rem' }}>
        <StatCard label="Total Scans" value="2,258" change="23% vs last month" changeDir="up" />
        <StatCard label="Total Redemptions" value="476" change="31% vs last month" changeDir="up" />
        <StatCard label="Total Signups" value="342" change="28% vs last month" changeDir="up" />
        <StatCard label="Referrals Submitted" value="18" />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div className="card">
          <div className="card-header"><h3>Campaign Highlights</h3></div>
          <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {[
              { label: 'Best Performing Business', value: 'Route 66 Burger House' },
              { label: 'Most Popular Offer', value: 'Buy one get one burger' },
              { label: 'Best QR Placement', value: 'Receipt (50% conversion rate)' },
              { label: 'Top Lead Generator', value: 'Joplin Family Fitness (52 leads)' },
              { label: 'Avg. Redemption Value', value: '$52.49' },
            ].map(h => (
              <div key={h.label} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.875rem', borderBottom: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--mid)' }}>{h.label}</span>
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>{h.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Scans by Week</h3></div>
          <div className="card-body">
            <VisualBarChart data={weeklyBoostData} labelKey="label" valueKey="scans" color="#2563eb" />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header"><h3>Recommended Next Steps</h3></div>
        <div className="card-body" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            'Add 2 more restaurant partners to increase foot traffic variety and redemption volume.',
            'Test window sticker QR placement at all businesses to match the receipt success rate.',
            'Launch a spring referral contest with $50 reward for top referrer of the month.',
            'Create a follow-up text sequence for customers who scanned but did not redeem.',
            'Pitch the next campaign box to 3 prospective businesses from the dental and fitness categories.',
          ].map((s, i) => (
            <div key={i} className="report-recommendation"><p>{s}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Settings Page ────────────────────────────────────────────
function LBSettings() {
  const [agencyName, setAgencyName] = useState('Four States Creative Group')
  const [campaignName, setCampaignName] = useState('Joplin Local Rewards')
  const [businessLimit, setBusinessLimit] = useState('12')
  const [toggles, setToggles] = useState({ scanAlerts: true, weeklyReport: true, redemptionAlerts: false, referralAlerts: true })
  const [reportFreq, setReportFreq] = useState('Weekly')

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
      <div className="page-header"><div><h2>Settings</h2><p style={{ color: 'var(--mid)', fontSize: '0.875rem', marginTop: 2 }}>Campaign and agency configuration</p></div></div>
      <div className="settings-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="card">
            <div className="card-header"><h3>Campaign Settings</h3></div>
            <div className="card-body">
              <div className="form">
                <div className="form-group"><label>Campaign Name</label><input value={campaignName} onChange={e => setCampaignName(e.target.value)} /></div>
                <div className="form-group"><label>Participating Business Limit</label><input type="number" value={businessLimit} onChange={e => setBusinessLimit(e.target.value)} /></div>
                <div className="form-group"><label>Default Reward Type</label>
                  <select defaultValue="Credit"><option>Credit</option><option>Free Item</option><option>Discount</option><option>Gift Card</option></select>
                </div>
                <div className="form-group"><label>Report Frequency</label>
                  <select value={reportFreq} onChange={e => setReportFreq(e.target.value)}>
                    {['Daily','Weekly','Bi-weekly','Monthly'].map(f => <option key={f}>{f}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header"><h3>Agency Branding</h3></div>
            <div className="card-body">
              <div className="form">
                <div className="form-group"><label>Agency Name</label><input value={agencyName} onChange={e => setAgencyName(e.target.value)} /></div>
                <div className="form-group">
                  <label>Agency Logo</label>
                  <div className="logo-upload">Click to upload agency logo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header"><h3>Notification Settings</h3></div>
          <div className="card-body">
            {[
              { id: 'scanAlerts', label: 'QR scan milestone alerts' },
              { id: 'weeklyReport', label: 'Weekly performance summary' },
              { id: 'redemptionAlerts', label: 'Real-time redemption alerts' },
              { id: 'referralAlerts', label: 'New referral notifications' },
            ].map(item => (
              <div key={item.id} className="toggle-row">
                <span className="toggle-label">{item.label}</span>
                <Toggle id={item.id} />
              </div>
            ))}
          </div>
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border)', fontSize: '0.8125rem', color: 'var(--muted)', textAlign: 'center' }}>
            White label ready for agencies
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────
export default function LocalBoost() {
  const [activePage, setActivePage] = useState('dashboard')
  const [campaigns, setCampaigns] = useState(localBoostCampaigns)

  return (
    <DashboardLayout
      title="Joplin Local Rewards"
      subtitle="LocalBoost Campaign Tracker"
      poweredBy="White label ready for agencies"
      navItems={NAV}
      activePage={activePage}
      onPageChange={setActivePage}
      themeClass="theme-rewards"
    >
      {activePage === 'dashboard' && <LBDashboard />}
      {activePage === 'campaigns' && (
        <LBCampaigns campaigns={campaigns} onAddCampaign={c => setCampaigns(p => [c, ...p])} />
      )}
      {activePage === 'qrtracking' && <LBQRTracking />}
      {activePage === 'businesses' && <LBBusinesses />}
      {activePage === 'redemptions' && <LBRedemptions />}
      {activePage === 'referrals' && <LBReferrals />}
      {activePage === 'customers' && <LBCustomers />}
      {activePage === 'reports' && <LBReports />}
      {activePage === 'settings' && <LBSettings />}
    </DashboardLayout>
  )
}
