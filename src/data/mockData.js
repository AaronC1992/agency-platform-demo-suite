// ============================================================
// AGENCY PLATFORM DEMO SUITE – Mock Data
// ============================================================

// ============================================================
// AgencyOS – Demo 1 (Four States Creative Group)
// ============================================================
export const agencyOSClients = [
  { id: 1, name: 'Joplin Roofing Co.', industry: 'Roofing', campaigns: 3, leadsThisMonth: 18, rating: 4.7, status: 'Active' },
  { id: 2, name: 'Main Street Dental', industry: 'Dental', campaigns: 2, leadsThisMonth: 12, rating: 4.9, status: 'Active' },
  { id: 3, name: 'Four State Auto Repair', industry: 'Auto Repair', campaigns: 2, leadsThisMonth: 9, rating: 4.5, status: 'Active' },
  { id: 4, name: 'Ozark Family HVAC', industry: 'HVAC', campaigns: 4, leadsThisMonth: 22, rating: 4.8, status: 'Active' },
  { id: 5, name: 'Downtown Coffee Co.', industry: 'Food & Beverage', campaigns: 1, leadsThisMonth: 6, rating: 4.6, status: 'Active' },
]

export const agencyOSLeads = [
  { id: 1, name: 'Travis Hendricks', business: 'Joplin Roofing Co.', phone: '(417) 555-0184', email: 'travis.h@email.com', source: 'Website Form', status: 'New', value: '$4,200', followUp: 'Feb 15', notes: 'Needs full roof replacement estimate' },
  { id: 2, name: 'Melissa Carter', business: 'Main Street Dental', phone: '(417) 555-0291', email: 'm.carter@email.com', source: 'Google Ad', status: 'Contacted', value: '$800', followUp: 'Feb 16', notes: 'New patient – cleaning and whitening' },
  { id: 3, name: 'Derek Morrison', business: 'Four State Auto Repair', phone: '(417) 555-0377', email: 'derek.m@email.com', source: 'Facebook Ad', status: 'Estimate Sent', value: '$650', followUp: 'Feb 17', notes: 'Brake job plus oil change package' },
  { id: 4, name: 'Amanda Stokes', business: 'Ozark Family HVAC', phone: '(417) 555-0412', email: 'astokes@email.com', source: 'Referral', status: 'Won', value: '$3,800', followUp: 'Feb 20', notes: 'New HVAC system installation – completed' },
  { id: 5, name: 'James Whitfield', business: 'Downtown Coffee Co.', phone: '(417) 555-0563', email: 'jwhit@email.com', source: 'QR Flyer', status: 'Lost', value: '$2,100', followUp: 'Feb 18', notes: 'Catering event – went with another vendor' },
  { id: 6, name: 'Sandra Liu', business: 'Joplin Roofing Co.', phone: '(417) 555-0628', email: 'sliu@email.com', source: 'Google Ad', status: 'Contacted', value: '$6,500', followUp: 'Feb 19', notes: 'Commercial roof damage from storm' },
  { id: 7, name: 'Michael Torres', business: 'Main Street Dental', phone: '(417) 555-0741', email: 'mtorres@email.com', source: 'Referral', status: 'New', value: '$1,200', followUp: 'Feb 22', notes: 'Dental implant consult' },
  { id: 8, name: 'Rachel Burns', business: 'Ozark Family HVAC', phone: '(417) 555-0859', email: 'rburns@email.com', source: 'Facebook Ad', status: 'Won', value: '$4,100', followUp: 'Feb 21', notes: 'Heating system replacement – closed' },
  { id: 9, name: 'Kyle Donovan', business: 'Four State Auto Repair', phone: '(417) 555-0934', email: 'kdonovan@email.com', source: 'Website Form', status: 'Estimate Sent', value: '$900', followUp: 'Feb 23', notes: 'Full detail plus transmission service' },
  { id: 10, name: 'Tina Marsh', business: 'Downtown Coffee Co.', phone: '(417) 555-0105', email: 'tmarsh@email.com', source: 'QR Flyer', status: 'Contacted', value: '$1,800', followUp: 'Feb 24', notes: 'Monthly coffee subscription for office' },
]

export const agencyOSCampaigns = [
  { id: 1, name: 'Spring Roofing Push', client: 'Joplin Roofing Co.', type: 'Google Ad', landingPage: 'joplinroofing.com/spring', scans: 1240, submissions: 47, conversion: '3.8%', status: 'Active' },
  { id: 2, name: 'New Patient Drive', client: 'Main Street Dental', type: 'Facebook Ad', landingPage: 'mainstreetdental.com/new', scans: 890, submissions: 31, conversion: '3.5%', status: 'Active' },
  { id: 3, name: 'Tune-Up Special', client: 'Four State Auto Repair', type: 'QR Flyer', landingPage: 'fourstateauto.com/promo', scans: 642, submissions: 18, conversion: '2.8%', status: 'Paused' },
  { id: 4, name: 'HVAC Spring Special', client: 'Ozark Family HVAC', type: 'Google Ad', landingPage: 'ozarkhvac.com/spring', scans: 1580, submissions: 62, conversion: '3.9%', status: 'Active' },
  { id: 5, name: 'Grand Opening Push', client: 'Downtown Coffee Co.', type: 'Grand Opening Promo', landingPage: 'downtowncoffee.com/open', scans: 2100, submissions: 89, conversion: '4.2%', status: 'Completed' },
  { id: 6, name: 'Review Campaign Q1', client: 'Ozark Family HVAC', type: 'Review Campaign', landingPage: 'ozarkhvac.com/review', scans: 340, submissions: 28, conversion: '8.2%', status: 'Active' },
]

export const campaignPerformance = [
  { label: 'Spring Roofing Push', value: 1240 },
  { label: 'New Patient Drive', value: 890 },
  { label: 'Tune-Up Special', value: 642 },
  { label: 'HVAC Spring Special', value: 1580 },
  { label: 'Grand Opening Push', value: 2100 },
  { label: 'Review Campaign Q1', value: 340 },
]

export const agencyOSReviews = [
  { id: 1, customer: 'Amanda Stokes', client: 'Ozark Family HVAC', requestDate: 'Feb 10', status: 'Completed', rating: 5, source: 'Google' },
  { id: 2, customer: 'Travis Hendricks', client: 'Joplin Roofing Co.', requestDate: 'Feb 11', status: 'Completed', rating: 5, source: 'Google' },
  { id: 3, customer: 'Melissa Carter', client: 'Main Street Dental', requestDate: 'Feb 12', status: 'Sent', rating: null, source: 'Google' },
  { id: 4, customer: 'Rachel Burns', client: 'Ozark Family HVAC', requestDate: 'Feb 12', status: 'Completed', rating: 4, source: 'Facebook' },
  { id: 5, customer: 'Derek Morrison', client: 'Four State Auto Repair', requestDate: 'Feb 13', status: 'Opened', rating: null, source: 'Google' },
  { id: 6, customer: 'Kyle Donovan', client: 'Four State Auto Repair', requestDate: 'Feb 13', status: 'Not Responded', rating: null, source: 'Google' },
  { id: 7, customer: 'Tina Marsh', client: 'Downtown Coffee Co.', requestDate: 'Feb 14', status: 'Completed', rating: 5, source: 'Yelp' },
  { id: 8, customer: 'Sandra Liu', client: 'Joplin Roofing Co.', requestDate: 'Feb 14', status: 'Sent', rating: null, source: 'Google' },
]

export const agencyOSReferrals = [
  { id: 1, referrer: 'Amanda Stokes', referred: 'Michael Torres', client: 'Main Street Dental', status: 'Converted', reward: '$50 credit', date: 'Feb 10' },
  { id: 2, referrer: 'Rachel Burns', referred: 'David Chen', client: 'Ozark Family HVAC', status: 'Contacted', reward: '$50 credit', date: 'Feb 11' },
  { id: 3, referrer: 'Travis Hendricks', referred: 'Karen Webb', client: 'Joplin Roofing Co.', status: 'Submitted', reward: '$75 credit', date: 'Feb 12' },
  { id: 4, referrer: 'Tina Marsh', referred: 'Brian Foster', client: 'Downtown Coffee Co.', status: 'Submitted', reward: '$25 credit', date: 'Feb 13' },
  { id: 5, referrer: 'Melissa Carter', referred: 'Jennifer Price', client: 'Main Street Dental', status: 'Converted', reward: '$50 credit', date: 'Feb 14' },
  { id: 6, referrer: 'Derek Morrison', referred: 'Tom Larkin', client: 'Four State Auto Repair', status: 'Contacted', reward: '$40 credit', date: 'Feb 14' },
]

// ============================================================
// LocalLead – Demo 2 (Ozark Family HVAC)
// ============================================================
export const localLeadLeads = [
  { id: 1, customer: 'Greg Patterson', phone: '(417) 555-0211', email: 'gpatterson@email.com', service: 'AC Installation', source: 'Website Form', status: 'New', value: '$4,800', followUp: 'Feb 15', assigned: 'Jake Owens', notes: 'New build, needs full AC system' },
  { id: 2, customer: 'Lisa Hartman', phone: '(417) 555-0332', email: 'lhartman@email.com', service: 'Heating Repair', source: 'Google Business', status: 'Contacted', value: '$650', followUp: 'Feb 15', assigned: 'Marcus Hill', notes: 'Furnace not heating properly' },
  { id: 3, customer: 'Brian Cole', phone: '(417) 555-0447', email: 'bcole@email.com', service: 'HVAC Maintenance', source: 'Referral', status: 'Estimate Scheduled', value: '$320', followUp: 'Feb 16', assigned: 'Jake Owens', notes: 'Annual tune-up referral' },
  { id: 4, customer: 'Cynthia Rhodes', phone: '(417) 555-0558', email: 'crhodes@email.com', service: 'Duct Cleaning', source: 'Facebook', status: 'Estimate Sent', value: '$480', followUp: 'Feb 17', assigned: 'Marcus Hill', notes: 'Whole house duct cleaning' },
  { id: 5, customer: 'Tom Bradley', phone: '(417) 555-0663', email: 'tbradley@email.com', service: 'AC Repair', source: 'Phone Call', status: 'Won', value: '$920', followUp: 'Feb 18', assigned: 'Jake Owens', notes: 'Compressor replacement – completed' },
  { id: 6, customer: 'Debra Simmons', phone: '(417) 555-0774', email: 'dsimmons@email.com', service: 'Furnace Replacement', source: 'QR Code', status: 'Won', value: '$3,200', followUp: 'Feb 19', assigned: 'Marcus Hill', notes: 'Full furnace swap – installed' },
  { id: 7, customer: 'Mark Jensen', phone: '(417) 555-0885', email: 'mjensen@email.com', service: 'AC Installation', source: 'Website Form', status: 'Estimate Sent', value: '$5,100', followUp: 'Feb 20', assigned: 'Jake Owens', notes: 'Whole home system' },
  { id: 8, customer: 'Paula Wright', phone: '(417) 555-0996', email: 'pwright@email.com', service: 'Heating Repair', source: 'Google Business', status: 'Lost', value: '$750', followUp: 'Feb 20', assigned: 'Marcus Hill', notes: 'Went with lower bid' },
  { id: 9, customer: 'Steve Ingram', phone: '(417) 555-0123', email: 'singram@email.com', service: 'HVAC Maintenance', source: 'Facebook', status: 'Contacted', value: '$280', followUp: 'Feb 21', assigned: 'Jake Owens', notes: 'Spring tune-up package' },
  { id: 10, customer: 'Nancy Fleming', phone: '(417) 555-0234', email: 'nfleming@email.com', service: 'Duct Cleaning', source: 'Referral', status: 'New', value: '$420', followUp: 'Feb 22', assigned: 'Marcus Hill', notes: 'Referred by Brian Cole' },
]

export const localLeadEstimates = [
  { id: 1, customer: 'Mark Jensen', service: 'AC Installation', amount: '$5,100', dateSent: 'Feb 14', status: 'Sent', followUp: 'Feb 21' },
  { id: 2, customer: 'Cynthia Rhodes', service: 'Duct Cleaning', amount: '$480', dateSent: 'Feb 13', status: 'Accepted', followUp: 'Feb 17' },
  { id: 3, customer: 'Greg Patterson', service: 'AC Installation', amount: '$4,800', dateSent: 'Feb 15', status: 'Draft', followUp: 'Feb 18' },
  { id: 4, customer: 'Paula Wright', service: 'Heating Repair', amount: '$750', dateSent: 'Feb 12', status: 'Declined', followUp: 'Feb 16' },
  { id: 5, customer: 'Tom Bradley', service: 'AC Repair', amount: '$920', dateSent: 'Feb 10', status: 'Accepted', followUp: 'Feb 14' },
  { id: 6, customer: 'Debra Simmons', service: 'Furnace Replacement', amount: '$3,200', dateSent: 'Feb 11', status: 'Accepted', followUp: 'Feb 15' },
]

export const localLeadCalendar = [
  { date: 'Mon Feb 17', time: '9:00 AM', title: 'Estimate – Greg Patterson', sub: 'AC Installation · 4210 Oak St', type: 'estimate' },
  { date: 'Mon Feb 17', time: '11:30 AM', title: 'Follow-up Call – Lisa Hartman', sub: 'Heating Repair · (417) 555-0332', type: 'followup' },
  { date: 'Tue Feb 18', time: '8:00 AM', title: 'Job Start – Tom Bradley', sub: 'AC Repair · 811 Maple Ave', type: 'job' },
  { date: 'Tue Feb 18', time: '2:00 PM', title: 'Estimate – Mark Jensen', sub: 'AC Installation · 516 Pine Rd', type: 'estimate' },
  { date: 'Wed Feb 19', time: '9:30 AM', title: 'Follow-up Call – Mark Jensen', sub: 'AC Installation estimate follow-up', type: 'followup' },
  { date: 'Wed Feb 19', time: '3:00 PM', title: 'Review Request – Tom Bradley', sub: 'Send Google review request', type: 'review' },
  { date: 'Thu Feb 20', time: '10:00 AM', title: 'Job Start – Debra Simmons', sub: 'Furnace Replacement · 221 Birch Ln', type: 'job' },
  { date: 'Thu Feb 20', time: '1:00 PM', title: 'Estimate – Cynthia Rhodes', sub: 'Duct Cleaning · 908 Elm St', type: 'estimate' },
  { date: 'Fri Feb 21', time: '9:00 AM', title: 'Follow-up – Steve Ingram', sub: 'HVAC Maintenance package', type: 'followup' },
  { date: 'Fri Feb 21', time: '4:00 PM', title: 'Review Request – Debra Simmons', sub: 'Send Google review request', type: 'review' },
]

export const localLeadReviews = [
  { id: 1, customer: 'Tom Bradley', jobDate: 'Feb 14', requestDate: 'Feb 15', status: 'Completed', rating: 5 },
  { id: 2, customer: 'Debra Simmons', jobDate: 'Feb 15', requestDate: 'Feb 16', status: 'Completed', rating: 5 },
  { id: 3, customer: 'Amanda Stokes', jobDate: 'Feb 10', requestDate: 'Feb 11', status: 'Completed', rating: 5 },
  { id: 4, customer: 'Rachel Burns', jobDate: 'Feb 8', requestDate: 'Feb 9', status: 'Completed', rating: 4 },
  { id: 5, customer: 'Brian Cole', jobDate: 'Feb 7', requestDate: 'Feb 8', status: 'Pending', rating: null },
  { id: 6, customer: 'Cynthia Rhodes', jobDate: 'Feb 17', requestDate: 'Feb 18', status: 'Sent', rating: null },
]

export const leadSources = [
  { label: 'Website Form', count: 34, color: '#2563eb' },
  { label: 'Google Business Profile', count: 28, color: '#0ea5e9' },
  { label: 'Facebook', count: 19, color: '#3b82f6' },
  { label: 'Referral', count: 22, color: '#10b981' },
  { label: 'Phone Call', count: 15, color: '#f59e0b' },
  { label: 'QR Code', count: 8, color: '#8b5cf6' },
]

export const revenueByWeek = [
  { label: 'Week 1', value: 4200 },
  { label: 'Week 2', value: 7800 },
  { label: 'Week 3', value: 5400 },
  { label: 'Week 4', value: 9100 },
]

// ============================================================
// LocalBoost – Demo 3 (Joplin Local Rewards Campaign)
// ============================================================
export const localBoostBusinesses = [
  { id: 1, name: 'Downtown Coffee Co.', category: 'Food & Beverage', offer: 'Free coffee upgrade with purchase', items: 200, scans: 412, redemptions: 87, leads: 34, status: 'Active' },
  { id: 2, name: 'Four State Auto Repair', category: 'Auto Repair', offer: '10% off any oil change', items: 150, scans: 318, redemptions: 64, leads: 28, status: 'Active' },
  { id: 3, name: 'Main Street Dental', category: 'Dental', offer: 'Free new patient consultation', items: 100, scans: 226, redemptions: 41, leads: 39, status: 'Active' },
  { id: 4, name: 'Ozark Family HVAC', category: 'HVAC', offer: 'Free spring HVAC inspection', items: 80, scans: 189, redemptions: 32, leads: 31, status: 'Active' },
  { id: 5, name: 'Joplin Family Fitness', category: 'Fitness', offer: 'Free 7-day trial pass', items: 120, scans: 275, redemptions: 58, leads: 52, status: 'Active' },
  { id: 6, name: 'Route 66 Burger House', category: 'Restaurant', offer: 'Buy one get one burger', items: 250, scans: 487, redemptions: 122, leads: 18, status: 'Active' },
  { id: 7, name: 'Bright Smile Orthodontics', category: 'Orthodontics', offer: 'Free whitening consult', items: 75, scans: 148, redemptions: 24, leads: 22, status: 'Active' },
  { id: 8, name: 'Elite Detail Garage', category: 'Auto Detailing', offer: '20% off full detail package', items: 100, scans: 203, redemptions: 48, leads: 20, status: 'Active' },
]

export const localBoostQRCodes = [
  { id: 1, name: 'Downtown Coffee – Front Counter', business: 'Downtown Coffee Co.', placement: 'Front counter', scans: 218, uniqueScans: 184, lastScan: 'Feb 14, 2:14 PM', conversion: '42%' },
  { id: 2, name: 'Downtown Coffee – Flyer Drop', business: 'Downtown Coffee Co.', placement: 'Flyer', scans: 194, uniqueScans: 162, lastScan: 'Feb 14, 11:08 AM', conversion: '38%' },
  { id: 3, name: 'Auto Repair – Window Sticker', business: 'Four State Auto Repair', placement: 'Window sticker', scans: 178, uniqueScans: 151, lastScan: 'Feb 13, 4:55 PM', conversion: '34%' },
  { id: 4, name: 'Dental – Waiting Room', business: 'Main Street Dental', placement: 'Front counter', scans: 136, uniqueScans: 119, lastScan: 'Feb 14, 10:22 AM', conversion: '45%' },
  { id: 5, name: 'Fitness – Mailer Campaign', business: 'Joplin Family Fitness', placement: 'Mailer', scans: 145, uniqueScans: 128, lastScan: 'Feb 14, 9:00 AM', conversion: '40%' },
  { id: 6, name: 'Burger House – Receipt', business: 'Route 66 Burger House', placement: 'Receipt', scans: 289, uniqueScans: 241, lastScan: 'Feb 14, 1:45 PM', conversion: '50%' },
  { id: 7, name: 'Orthodontics – Social Post', business: 'Bright Smile Orthodontics', placement: 'Social post', scans: 98, uniqueScans: 84, lastScan: 'Feb 13, 8:00 PM', conversion: '29%' },
  { id: 8, name: 'Detail Garage – Event Booth', business: 'Elite Detail Garage', placement: 'Event booth', scans: 117, uniqueScans: 99, lastScan: 'Feb 12, 5:30 PM', conversion: '36%' },
]

export const localBoostCampaigns = [
  { id: 1, name: 'Joplin Local Rewards', type: 'Local Rewards Box', businesses: 8, scans: 2258, redemptions: 476, signups: 342, status: 'Active' },
  { id: 2, name: 'Grand Opening – Downtown Coffee', type: 'Grand Opening', businesses: 1, scans: 412, redemptions: 87, signups: 94, status: 'Completed' },
  { id: 3, name: 'Chamber Spring Mixer', type: 'Chamber Event', businesses: 5, scans: 318, redemptions: 64, signups: 78, status: 'Active' },
  { id: 4, name: 'Route 66 Summer BOGO', type: 'Restaurant Promo', businesses: 1, scans: 487, redemptions: 122, signups: 61, status: 'Active' },
]

export const localBoostRedemptions = [
  { id: 1, customer: 'Kevin Barnes', business: 'Route 66 Burger House', offer: 'Buy one get one burger', date: 'Feb 14', status: 'Redeemed', value: '$14.99', campaign: 'Joplin Local Rewards' },
  { id: 2, customer: 'Sarah Jennings', business: 'Downtown Coffee Co.', offer: 'Free coffee upgrade', date: 'Feb 14', status: 'Redeemed', value: '$3.50', campaign: 'Joplin Local Rewards' },
  { id: 3, customer: 'Chris Walton', business: 'Joplin Family Fitness', offer: 'Free 7-day trial pass', date: 'Feb 13', status: 'Redeemed', value: '$49.00', campaign: 'Joplin Local Rewards' },
  { id: 4, customer: 'Brenda Holt', business: 'Four State Auto Repair', offer: '10% off oil change', date: 'Feb 13', status: 'Redeemed', value: '$8.50', campaign: 'Joplin Local Rewards' },
  { id: 5, customer: 'Daniel Ruiz', business: 'Main Street Dental', offer: 'Free new patient consult', date: 'Feb 12', status: 'Redeemed', value: '$150.00', campaign: 'Joplin Local Rewards' },
  { id: 6, customer: 'Laura Kim', business: 'Elite Detail Garage', offer: '20% off full detail', date: 'Feb 12', status: 'Redeemed', value: '$40.00', campaign: 'Joplin Local Rewards' },
  { id: 7, customer: 'Tyler Nash', business: 'Route 66 Burger House', offer: 'Buy one get one burger', date: 'Feb 12', status: 'Redeemed', value: '$14.99', campaign: 'Joplin Local Rewards' },
  { id: 8, customer: 'Amy Chen', business: 'Bright Smile Orthodontics', offer: 'Free whitening consult', date: 'Feb 11', status: 'Redeemed', value: '$200.00', campaign: 'Joplin Local Rewards' },
  { id: 9, customer: 'Jose Reyes', business: 'Ozark Family HVAC', offer: 'Free HVAC inspection', date: 'Feb 11', status: 'Pending', value: '$89.00', campaign: 'Joplin Local Rewards' },
  { id: 10, customer: 'Fran Cooper', business: 'Downtown Coffee Co.', offer: 'Free coffee upgrade', date: 'Feb 10', status: 'Expired', value: '$3.50', campaign: 'Joplin Local Rewards' },
]

export const localBoostReferrals = [
  { id: 1, referrer: 'Sarah Jennings', referred: 'Mike Barton', business: 'Downtown Coffee Co.', reward: '$10 credit', status: 'Converted', date: 'Feb 13' },
  { id: 2, referrer: 'Chris Walton', referred: 'Emma Davis', business: 'Joplin Family Fitness', reward: '1 month free', status: 'Contacted', date: 'Feb 13' },
  { id: 3, referrer: 'Kevin Barnes', referred: 'Paul Newton', business: 'Route 66 Burger House', reward: '$15 credit', status: 'Reward Sent', date: 'Feb 12' },
  { id: 4, referrer: 'Daniel Ruiz', referred: 'Susan Park', business: 'Main Street Dental', reward: '$25 credit', status: 'Submitted', date: 'Feb 12' },
  { id: 5, referrer: 'Laura Kim', referred: 'Allen Cross', business: 'Elite Detail Garage', reward: '$20 credit', status: 'Submitted', date: 'Feb 11' },
  { id: 6, referrer: 'Amy Chen', referred: 'Kate Morris', business: 'Bright Smile Orthodontics', reward: '$50 credit', status: 'Converted', date: 'Feb 11' },
]

export const localBoostCustomers = [
  { id: 1, name: 'Kevin Barnes', email: 'kbarnes@email.com', phone: '(417) 555-0341', zip: '64801', source: 'Joplin Local Rewards', offers: 2, referrals: 1, lastActivity: 'Feb 14' },
  { id: 2, name: 'Sarah Jennings', email: 'sjennings@email.com', phone: '(417) 555-0452', zip: '64804', source: 'Joplin Local Rewards', offers: 3, referrals: 1, lastActivity: 'Feb 14' },
  { id: 3, name: 'Chris Walton', email: 'cwalton@email.com', phone: '(417) 555-0563', zip: '64801', source: 'Joplin Local Rewards', offers: 1, referrals: 1, lastActivity: 'Feb 13' },
  { id: 4, name: 'Brenda Holt', email: 'bholt@email.com', phone: '(417) 555-0674', zip: '64802', source: 'Joplin Local Rewards', offers: 1, referrals: 0, lastActivity: 'Feb 13' },
  { id: 5, name: 'Daniel Ruiz', email: 'druiz@email.com', phone: '(417) 555-0785', zip: '64801', source: 'Joplin Local Rewards', offers: 2, referrals: 1, lastActivity: 'Feb 12' },
  { id: 6, name: 'Laura Kim', email: 'lkim@email.com', phone: '(417) 555-0896', zip: '64804', source: 'Joplin Local Rewards', offers: 1, referrals: 1, lastActivity: 'Feb 12' },
  { id: 7, name: 'Tyler Nash', email: 'tnash@email.com', phone: '(417) 555-0907', zip: '64801', source: 'Joplin Local Rewards', offers: 1, referrals: 0, lastActivity: 'Feb 12' },
  { id: 8, name: 'Amy Chen', email: 'achen@email.com', phone: '(417) 555-0118', zip: '64803', source: 'Joplin Local Rewards', offers: 2, referrals: 1, lastActivity: 'Feb 11' },
  { id: 9, name: 'Jose Reyes', email: 'jreyes@email.com', phone: '(417) 555-0229', zip: '64801', source: 'Joplin Local Rewards', offers: 1, referrals: 0, lastActivity: 'Feb 11' },
  { id: 10, name: 'Fran Cooper', email: 'fcooper@email.com', phone: '(417) 555-0330', zip: '64802', source: 'Joplin Local Rewards', offers: 1, referrals: 0, lastActivity: 'Feb 10' },
]

export const weeklyBoostData = [
  { label: 'Jan W3', scans: 142, redemptions: 31 },
  { label: 'Jan W4', scans: 198, redemptions: 44 },
  { label: 'Feb W1', scans: 276, redemptions: 62 },
  { label: 'Feb W2', scans: 341, redemptions: 78 },
  { label: 'Feb W3', scans: 412, redemptions: 98 },
]
