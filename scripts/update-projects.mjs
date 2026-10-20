// Pembaruan data proyek 21 Okt 2026: gambar baru, proyek baru, urutan unggulan.
// Aturan: nama klien selalu dianonimkan; proyek yang bertabrakan dengan non-compete disembunyikan.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const file = 'src/data/projects.json';
const projects = JSON.parse(readFileSync(file, 'utf8'));
const byPrefix = (p) => projects.find((x) => x.title.startsWith(p));

// 1. Gambar untuk proyek yang belum punya
const covers = {
  'Enterprise PPE Detection VMS': 'ppe-detection-vms',
  'Integrated Business Automation Suite': 'business-automation-suite',
  'Mokapos to WhatsApp Automation': 'mokapos-whatsapp-automation',
  'Car Subscription & Long-Term Rental Website': 'car-subscription-website',
  'Scaffolding Rental Management System': 'scaffolding-rental-system',
  'Kindergarten WhatsApp Chatbot': 'kindergarten-whatsapp-chatbot',
  'Car Parts Catalog & Workshop Booking Website': 'car-parts-workshop-website',
  'Cooperative Automation Platform': 'cooperative-automation-platform',
  'Multi-Channel CS Automation': 'multichannel-cs-automation',
  'Odoo × Shopee Integration': 'odoo-shopee-integration',
  'Spray Injector Nozzle AI Inspector': 'spray-nozzle-ai-inspector',
  'AI Camera Activity Recognition System': 'ai-camera-activity-recognition',
  'AI Sales Automation Agent': 'ai-sales-automation-agent',
  'WhatsApp AI Sales Chatbot + Odoo ERP': 'whatsapp-chatbot-odoo-erp',
  'JerseyGen': 'jerseygen-design-studio',
  'MDCNN News Text Classifier': 'mdcnn-text-classifier',
  'Ad Performance Monitor & AI Advisor': 'ad-performance-ai-advisor',
  'Fuel Supply Chain AI': 'fuel-supply-chain-ai',
};
for (const [prefix, slug] of Object.entries(covers)) {
  const p = byPrefix(prefix);
  if (!p) throw new Error(`proyek tidak ditemukan: ${prefix}`);
  const extra = ['inbox', 'pembayaran'].map((f) => `/projects/${slug}/${f}.png`).filter((u) => existsSync(`public${u}`));
  p.thumbnail = `/projects/${slug}/cover.png`;
  p.gallery = [p.thumbnail, ...extra];
}

// 2. Non-compete: chatbot/CRM untuk klinik dan kecantikan tidak ditampilkan publik (data tetap disimpan)
byPrefix('AI Patient Journey Automation').hidden = true;

// 3. Platform koperasi: deskripsi sesuai sistem yang benar-benar berjalan (anonim)
Object.assign(byPrefix('Cooperative Automation Platform'), {
  title: 'Cooperative Automation Platform | WhatsApp AI Agent + CRM + Payments',
  description: 'An all-in-one WhatsApp platform for a savings cooperative and its partner travel program: an AI agent on the official WhatsApp Cloud API, an admin CRM with a 3-column inbox and 360° member profiles, Xendit payments posted to a double-entry ledger, PPOB bill payments, and a tiered referral engine.',
  longDescription: 'A savings cooperative with a partner travel program needed to grow membership and serve members over WhatsApp without growing the admin team at the same pace.\n\n**WhatsApp AI agent**\n- Runs on the official WhatsApp Cloud API and answers questions, sends brochures, registers new members, and hands out personal payment and service links that expire after 24 hours.\n- Around 19 n8n tools and 13 scheduled jobs handle dues reminders, invoices, and follow-ups.\n\n**Admin CRM (Next.js)**\n- Three-column WhatsApp inbox with AI hand-off and a 360° member profile.\n- KYC review, savings products (mandatory and voluntary dues, savings plans), staged down-payment billing, withdrawals, vouchers, broadcasts, cost-of-goods reports, an AI-reply audit, and a staff logbook.\n- Four-tier role access.\n\n**Payments and ledger**\n- Xendit invoices, QRIS, and virtual accounts; a webhook posts every payment to a double-entry ledger and confirms to the member on WhatsApp.\n- PPOB bill payments and phone credit through a biller API.\n- An Android "sound box" app that reads incoming QRIS payments aloud.\n\n**Infrastructure:** self-hosted PostgreSQL and Redis on a VPS, Docker with Traefik and automatic TLS, deployed through GitHub Actions.\n\n_Images are UI illustrations with sample data; client branding and member data are withheld._',
  tech: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Better-Auth', 'n8n', 'OpenAI', 'WhatsApp Cloud API', 'Xendit', 'Redis', 'Docker', 'Traefik', 'Kotlin'],
  features: [
    'AI agent on the official WhatsApp Cloud API that registers members and issues personal 24-hour payment links',
    'Admin CRM with a 3-column inbox, AI hand-off, 360° member profile, KYC review, and 4-tier roles',
    'Xendit invoice, QRIS, and VA payments posted by webhook to a double-entry ledger',
    'Tiered referral and commission engine, PPOB bill payments, broadcasts, and cost-of-goods reports',
    '~13 scheduled jobs for dues reminders, invoices, and follow-ups',
  ],
});

// 4. Proyek baru
const fresh = [
  {
    title: 'Dompet | Personal Finance via WhatsApp + Android App',
    description: 'A personal finance system where expenses are logged by chatting with a WhatsApp bot ("coffee 15k, fuel 30k e-wallet") and reviewed in a Flutter Android app with offline sync, fingerprint lock, savings goals, receivables, and an AI assistant that answers questions from the database.',
    longDescription: 'Logging money only works if it is as fast as sending a chat. This system makes WhatsApp the main input and an Android app the dashboard.\n\n**WhatsApp bot (TypeScript, Baileys)**\n- Rule-based Indonesian parser for amounts ("25rb", "1,5jt", "gocap"), dates ("kemarin", "tgl 10"), accounts, transfers with fees, and several transactions per message, backed by 180+ unit tests.\n- Corrections by replying to the bot ("salah, 35rb"), undo, and 1/2 questions for ambiguous input.\n- An AI assistant (tool calling over database functions) answers questions such as "how much did I spend yesterday?" with numbers taken from the database, never invented.\n\n**Supabase backend**\n- Row Level Security on every table, balances computed from transactions in a view, automatic edit history and keyword learning in triggers, and receivables with partial payments.\n\n**Flutter app**\n- Local mirror plus an outbox so it works offline without duplicates, Realtime sync, a two-step entry flow with a calculator keypad, charts per day/week/month, savings-goal projection, and a strong-biometric lock.\n- UI decisions were based on Material 3 guidelines, NN/g research, and WCAG contrast checks.',
    tech: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'TypeScript', 'Node.js', 'Baileys', 'OpenAI', 'Kotlin', 'Vitest'],
    features: [
      'Log transactions by WhatsApp chat in free-form Indonesian, several per message, with corrections by reply',
      'AI assistant answers spending questions using database tools, so numbers are never made up',
      'Offline-first Android app with outbox sync, Realtime updates, and fingerprint lock',
      'Savings goals with projections, receivables with partial payments, and balance reconciliation',
      'Charts by day, week, and month with a colorblind-safe palette',
    ],
    type: 'Mobile + AI Automation', category: 'web-application', link: '/projects/dompet-ferri',
    thumbnail: '/projects/dompet-ferri/cover.png', gallery: ['/projects/dompet-ferri/cover.png'], featured: true,
  },
  {
    title: 'Kantor Agent | 3D Office for AI Coding Agents',
    description: 'A local 3D office that visualises Claude Code subagents working in real time. Each agent gets a desk, walks to the manager to report, takes breaks in the pantry or gym, and shows what it is reading, writing, or running, all by reading session logs read-only.',
    longDescription: 'Multi-agent coding sessions are hard to follow from a terminal. Kantor Agent turns them into a living office.\n\n- Every subagent has a desk in a room; the main session is the manager.\n- Speech bubbles show the current action (reading a file, typing code, running a command), and monitors glow while an agent works.\n- Idle agents wander to the pantry, canteen, gym, or lounge, and run back to their desk when a task starts.\n- A side panel with team, flow, and activity tabs, a timeline of today\'s tasks, token and cost estimates, and Ctrl+K search.\n- A flow editor to chain agents (review, security check, debug, summarise).\n\nIt reads Claude Code\'s own session logs read-only, needs no hooks or config changes, and sends nothing over the network.',
    tech: ['JavaScript', 'Three.js', 'Vite', 'Node.js', 'Claude Code'],
    features: [
      'Real-time 3D visualisation of AI coding agents from read-only session logs',
      'Agents walk between desks, the manager, and shared rooms with collision-free paths',
      'Flow editor to chain agents and run read-only tasks',
      'Per-agent drawer with current task, timeline, tokens, and estimated cost',
      'No hooks, no config changes, no network calls',
    ],
    type: 'Developer Tool', category: 'web-application', link: '/projects/kantor-agent',
    thumbnail: '/projects/kantor-agent/cover.png',
    gallery: ['/projects/kantor-agent/cover.png', '/projects/kantor-agent/kantor-3d.png', '/projects/kantor-agent/flow.png'], featured: true,
  },
  {
    title: 'AI Messaging Agent Backend | B2B SaaS (under NDA)',
    description: 'Backend work for a B2B SaaS startup: migrated a large set of n8n workflows into a typed Node.js service with a job queue, an LLM agent with tool calling, retrieval-augmented answers, and a WhatsApp gateway. Product details are withheld under NDA.',
    longDescription: 'Engineering work for a B2B SaaS startup. Product, client, and data details are confidential under NDA, so only the engineering scope is described here.\n\n- Migrated production n8n workflows into a typed Node.js (Fastify) service with schema validation.\n- Job queue on PostgreSQL (pg-boss) for retries, scheduling, and idempotent webhook handling.\n- LLM conversation agent with tool calling and a retrieval layer on pgvector.\n- WhatsApp gateway and scheduled reminder and follow-up jobs.\n- Dockerised deployment to a VPS.\n\n_The image is a generic architecture diagram, not the product UI._',
    tech: ['Node.js', 'Fastify', 'PostgreSQL', 'pgvector', 'pg-boss', 'LLM tool calling', 'Zod', 'Docker'],
    features: [
      'n8n workflows migrated into a typed, tested Node.js service',
      'PostgreSQL job queue for retries, schedules, and idempotent webhooks',
      'LLM agent with tool calling and retrieval on pgvector',
      'WhatsApp gateway and scheduled messaging jobs',
    ],
    type: 'AI Backend', category: 'nlp-genai', link: '/projects/ai-messaging-agent-backend',
    thumbnail: '/projects/ai-messaging-agent-backend/cover.png', gallery: ['/projects/ai-messaging-agent-backend/cover.png'],
  },
];
for (const f of fresh) if (!projects.some((p) => p.title === f.title)) projects.push(f);

// 5. Link GitHub placeholder (yourusername) mengarah ke 404: hapus
for (const p of projects) if (p.githubLink?.includes('yourusername')) delete p.githubLink;

// 6. Unggulan dan urutan: proyek komersial terbaru dulu, proyek kuliah di belakang
const order = ['Cooperative Automation Platform', 'Dompet', 'Kantor Agent', 'Enterprise PPE Detection VMS', 'Integrated Business Automation Suite',
  'Odoo × Shopee', 'AI Messaging Agent Backend', 'Scaffolding Rental', 'WhatsApp AI Sales Chatbot + Odoo', 'Multi-Channel CS', 'AI Sales Automation Agent',
  'Fuel Supply Chain AI', 'Spray Injector Nozzle', 'AI Camera Activity', 'Car Subscription', 'Car Parts Catalog', 'Ad Performance Monitor',
  'Mokapos to WhatsApp', 'JerseyGen', 'Kindergarten WhatsApp', 'DERMA-DFU.ID', 'WEB.DERMA-DFU.ID', 'InsightSphere', 'Manggrow.id'];
const featured = new Set(['Cooperative Automation Platform', 'Dompet', 'Kantor Agent', 'Enterprise PPE Detection VMS', 'Integrated Business Automation Suite', 'Odoo × Shopee']);
const rank = (p) => { const i = order.findIndex((o) => p.title.startsWith(o)); return i < 0 ? order.length : i; };
const sorted = projects.map((p, i) => ({ p, i })).sort((a, b) => rank(a.p) - rank(b.p) || a.i - b.i).map(({ p }) => p);
for (const p of sorted) { if ([...featured].some((f) => p.title.startsWith(f))) p.featured = true; else delete p.featured; }

writeFileSync(file, JSON.stringify(sorted, null, 2) + '\n');
console.log(`${sorted.length} proyek, ${sorted.filter((p) => p.featured).length} unggulan, ${sorted.filter((p) => p.hidden).length} disembunyikan, ${sorted.filter((p) => !(p.gallery ?? []).length).length} tanpa gambar`);
