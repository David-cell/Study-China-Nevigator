#!/usr/bin/env node
/*
 * StudyChina Navigator — static SEO pre-renderer.
 *
 * Why this exists:
 *   The live site is a client-side rendered SPA (one index.html + data.js).
 *   Search engines (esp. Bing/DuckDuckGo) see an almost-empty shell, and every
 *   university shares one URL, so the site can't rank for long-tail queries like
 *   "[Tsinghua] scholarship for international students". This script reads the
 *   SAME data.js the app uses and emits crawlable, individually-addressable
 *   static pages + a sitemap, so the real content becomes indexable.
 *
 * Run:  node seo-generate.cjs
 * Safe to re-run any time you edit data.js — it overwrites outputs.
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;                       // .../study-china-nav
const DATA = path.join(ROOT, 'data.js');
// Live base URL of the GitHub Pages project site (adjust if you move hosts).
const BASE = 'https://csaca.david-cells.com';

// ---- Load the dataset the same way the browser does, but in Node ----
const src = fs.readFileSync(DATA, 'utf8');
const data = new Function(
  src + '\nreturn {UNIVERSITIES, SCHOLARSHIPS, EXAM_PREP, SCHOOL_STATS, CSCA_NOTE};'
)();
const { UNIVERSITIES, SCHOLARSHIPS, CSCA_NOTE } = data;

// ---- Helpers ----
const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const list = (arr) => (Array.isArray(arr) ? arr : []);

// Shared, self-contained styling so pages are fast + look consistent without
// depending on the Tailwind CDN (which hurts Core Web Vitals / crawlability).
const CSS = `
:root{--navy:#002147;--red:#bb0027;--bg:#f7f9fb;--card:#fff;--ink:#191c1e;--mut:#5b6168;--bd:#e0e3e5;}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;}
a{color:var(--navy);text-decoration:none}
a:hover{text-decoration:underline}
.wrap{max-width:880px;margin:0 auto;padding:28px 20px 60px}
header.top{background:var(--navy);color:#fff}
header.top .wrap{padding:14px 20px;display:flex;align-items:center;justify-content:space-between}
header.top a{color:#fff;font-weight:600}
.brand{font-weight:700;letter-spacing:.2px}
.crumb{color:var(--mut);font-size:14px;margin:18px 0 4px}
h1{font-size:30px;margin:6px 0 2px;color:var(--navy)}
.zh{color:var(--mut);font-weight:500;font-size:18px}
.meta{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}
.tag{background:#eef2f8;color:var(--navy);border:1px solid #d7e0ef;padding:3px 10px;border-radius:999px;font-size:13px}
.card{background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:18px 20px;margin:16px 0;box-shadow:0 1px 2px rgba(0,0,0,.04)}
h2{font-size:20px;color:var(--navy);margin:0 0 8px;border-left:4px solid var(--red);padding-left:10px}
ul{margin:6px 0 0;padding-left:20px}
li{margin:3px 0}
.kv{display:grid;grid-template-columns:180px 1fr;gap:6px 14px}
.kv dt{color:var(--mut);font-weight:600}
.kv dd{margin:0}
.cta{background:#fff5f6;border:1px solid #f3c9cf;border-left:4px solid var(--red);border-radius:12px;padding:16px 20px;margin:22px 0}
.cta a.btn{display:inline-block;background:var(--red);color:#fff;padding:9px 16px;border-radius:8px;font-weight:600;margin-top:8px}
.cta a.btn:hover{text-decoration:none;opacity:.92}
.rel{display:flex;flex-wrap:wrap;gap:10px}
.rel a{background:#eef2f8;border:1px solid #d7e0ef;padding:6px 12px;border-radius:8px;font-size:14px}
footer{color:var(--mut);font-size:13px;margin-top:30px;border-top:1px solid var(--bd);padding-top:16px}
.pill{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;background:#eef2f8;color:var(--navy);margin-left:6px}
`;

function page(title, description, bodyInner, jsonld, canonical) {
  const og = `
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical || BASE + '/')}">
<meta name="twitter:card" content="summary_large_image">`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical || BASE + '/')}">
${og}
<style>${CSS}</style>
${jsonld ? '<script type="application/ld+json">' + JSON.stringify(jsonld) + '</script>' : ''}
</head>
<body>
<header class="top"><div class="wrap"><span class="brand">StudyChina Navigator</span><a href="../index.html">Open interactive directory &rarr;</a></div></header>
<div class="wrap">
${bodyInner}
<footer>
  StudyChina Navigator — independent directory of Chinese universities and scholarships for international students.
  Data is indicative; always confirm on each school's official international-students office.
  &copy; ${new Date().getFullYear()}.
</footer>
</div>
</body>
</html>`;
}

// ---- University detail page ----
function uniPage(u) {
  const url = `${BASE}/uni/${u.id}.html`;
  const title = `${u.nameEn} (${u.nameZh}) — Study in China | StudyChina Navigator`;
  const desc = `${u.nameEn} in ${u.city}, China: ${u.blurb} Admissions, ${u.englishTaught ? 'English-taught options, ' : ''}CSC scholarships, deadlines and how to apply.`;
  const related = UNIVERSITIES.filter((x) => x.city === u.city && x.id !== u.id).slice(0, 6);
  const otherCity = related.length < 4
    ? UNIVERSITIES.filter((x) => x.region === u.region && x.id !== u.id && x.city !== u.city).slice(0, 6 - related.length)
    : [];
  const relLinks = [...related, ...otherCity]
    .map((x) => `<a href="../uni/${x.id}.html">${esc(x.nameEn)}</a>`)
    .join('');

  const strong = list(u.strongSubjectsEn).map((s) => `<li>${esc(s)}</li>`).join('');
  const strengths = list(u.strengthsEn).map((s) => `<li>${esc(s)}</li>`).join('');
  const highlights = list(u.highlights).map((s) => `<li>${esc(s)}</li>`).join('');
  const types = list(u.types).map((t) => `<span class="tag">${esc(t)}</span>`).join('');

  const body = `
<div class="crumb"><a href="../index.html">Home</a> &rsaquo; <a href="../universities.html">Universities</a> &rsaquo; ${esc(u.city)}</div>
<h1>${esc(u.nameEn)}</h1><div class="zh">${esc(u.nameZh)}</div>
<div class="meta"><span class="tag">${esc(u.city)}</span>${types}${u.tier ? `<span class="tag">${esc(u.tier)}</span>` : ''}</div>

<div class="card">
  <p>${esc(u.blurb)}</p>
</div>

<div class="card">
  <h2>At a glance</h2>
  <dl class="kv">
    <dt>Location</dt><dd>${esc(u.city)}${u.region ? ', ' + esc(u.region) + ' China' : ''}</dd>
    <dt>Degree levels</dt><dd>${u.undergrad ? 'Undergraduate' : ''}${u.undergrad && u.graduate ? ' · ' : ''}${u.graduate ? 'Graduate (Master\'s / PhD)' : ''}</dd>
    <dt>English-taught</dt><dd>${esc(u.englishTaught || 'Not specified')}</dd>
    <dt>CSCA aptitude exam</dt><dd>${esc(u.csca || 'Not specified')}${list(u.cscaSubjects).length ? ' — subjects: ' + list(u.cscaSubjects).join(', ') : ''}</dd>
    <dt>Language requirement</dt><dd>${esc(u.language || 'Not specified')}</dd>
    <dt>Application deadline</dt><dd>${esc(u.deadline || 'Not specified')}</dd>
    <dt>Tuition (indicative)</dt><dd>${esc(u.tuition || 'Not specified')}</dd>
  </dl>
</div>

${strong ? `<div class="card"><h2>Strong subjects</h2><ul>${strong}</ul></div>` : ''}
${strengths ? `<div class="card"><h2>Why students choose it</h2><ul>${strengths}</ul></div>` : ''}
${highlights ? `<div class="card"><h2>Highlights</h2><ul>${highlights}</ul></div>` : ''}

<div class="cta">
  <strong>Ready to apply to ${esc(u.nameEn)}?</strong>
  <p>Use the official portals below. Compare it with other schools on the <a href="../universities.html">full directory</a>, or browse <a href="../scholarships.html">scholarships in China</a>.</p>
  ${u.applyUrl ? `<a class="btn" href="${esc(u.applyUrl)}" rel="noopener" target="_blank">Official application portal &rarr;</a>` : ''}
  ${u.isoUrl ? `<a class="btn" style="background:var(--navy)" href="${esc(u.isoUrl)}" rel="noopener" target="_blank">International office &rarr;</a>` : ''}
</div>

${relLinks ? `<div class="card"><h2>Similar universities</h2><div class="rel">${relLinks}</div></div>` : ''}

<p style="margin-top:24px"><a href="../guides/csc-2026-guide.html">How to apply for a Chinese Government Scholarship (CSC) &rarr;</a></p>
`;

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: u.nameEn,
    alternateName: u.nameZh,
    url: u.isoUrl || url,
    address: { '@type': 'PostalAddress', addressLocality: u.city, addressCountry: 'CN' },
    department: list(u.strongSubjectsEn).map((s) => ({ '@type': 'EducationalOrganization', name: s })),
  };
  return page(title, desc, body, jsonld, url);
}

// ---- Universities hub (crawlable directory) ----
function universitiesHub() {
  const rows = UNIVERSITIES.map((u) => {
    const tags = [u.city, ...list(u.types)].join(' · ');
    return `<li><a href="uni/${u.id}.html"><strong>${esc(u.nameEn)}</strong></a> <span class="pill">${esc(u.nameZh)}</span><br><span style="color:var(--mut);font-size:14px">${esc(tags)} — ${esc(u.blurb)}</span></li>`;
  }).join('');
  const body = `
<div class="crumb"><a href="index.html">Home</a> &rsaquo; Universities</div>
<h1>Chinese Universities for International Students</h1>
<div class="zh">${UNIVERSITIES.length} schools, with admissions, English-taught options, CSC scholarships and deadlines.</div>
<div class="cta">
  Prefer the filterable, interactive version? <a href="index.html">Open the directory &rarr;</a>
</div>
<div class="card"><ul style="list-style:none;padding-left:0">${rows}</ul></div>
`;
  return page(
    `Chinese Universities for International Students (${UNIVERSITIES.length} schools) | StudyChina Navigator`,
    `A directory of ${UNIVERSITIES.length} Chinese universities for international students — admissions, English-taught programs, CSC scholarships, deadlines and how to apply.`,
    body,
    { '@context': 'https://schema.org', '@type': 'ItemList', numberOfItems: UNIVERSITIES.length },
    `${BASE}/universities.html`
  );
}

// ---- Scholarships page ----
function scholarshipsPage() {
  const rows = SCHOLARSHIPS.map((s) => {
    const deg = list(s.degree).map((d) => ({ ug: 'Undergraduate', master: "Master's", phd: 'PhD' }[d] || d)).join(', ');
    return `<div class="card" id="${esc(s.id)}">
      <h2>${esc(s.name)}</h2>
      <dl class="kv">
        <dt>Provider</dt><dd>${esc(s.provider)}</dd>
        <dt>Funding</dt><dd>${esc(s.funding === 'full' ? 'Full funding' : 'Partial funding')}</dd>
        <dt>Degree</dt><dd>${esc(deg)}</dd>
        <dt>Region</dt><dd>${esc(s.region || 'Nationwide / all China')}</dd>
        <dt>Deadline</dt><dd>${esc(s.deadline)}</dd>
        <dt>Min. GPA</dt><dd>${esc(s.gpaMin || 'Not specified')}</dd>
      </dl>
      <p>${esc(s.blurb)}</p>
      <a class="btn" style="background:var(--navy)" href="${esc(s.link)}" rel="noopener" target="_blank">Official source &rarr;</a>
    </div>`;
  }).join('');
  const body = `
<div class="crumb"><a href="index.html">Home</a> &rsaquo; Scholarships</div>
<h1>Scholarships to Study in China</h1>
<div class="zh">${SCHOLARSHIPS.length} scholarships for international students — government, provincial and university-funded.</div>
<div class="card">
  <h2>Start here</h2>
  <ul>
    <li><a href="#csc_bilateral">Chinese Government Scholarship (CSC) — Bilateral</a>: full funding via your home-country Chinese embassy.</li>
    <li><a href="#csc_university">CSC University Postgraduate</a>: university-nominated full scholarships.</li>
    <li><a href="guides/csc-2026-guide.html">Full CSC 2026 application guide &rarr;</a></li>
  </ul>
</div>
${rows}
`;
  return page(
    `Scholarships to Study in China (${SCHOLARSHIPS.length}) for International Students | StudyChina Navigator`,
    `Compare ${SCHOLARSHIPS.length} scholarships for international students in China: CSC, provincial and university awards — funding, eligibility, deadlines and official links.`,
    body,
    { '@context': 'https://schema.org', '@type': 'ItemList', numberOfItems: SCHOLARSHIPS.length },
    `${BASE}/scholarships.html`
  );
}

// ---- Pillar guide pages (original long-form content) ----
const guides = {
  'csc-2026-guide': {
    title: 'How to Apply for a Chinese Government Scholarship (CSC) 2026 | StudyChina Navigator',
    desc: 'Step-by-step CSC 2026 application guide: scholarship types, eligibility, deadlines, required documents, and tips to improve your chances of funding to study in China.',
    body: `
<div class="crumb"><a href="../index.html">Home</a> &rsaquo; <a href="../scholarships.html">Scholarships</a> &rsaquo; CSC Guide</div>
<h1>How to Apply for a Chinese Government Scholarship (CSC) 2026</h1>
<div class="zh">A practical, up-to-date walkthrough for international students.</div>

<div class="card">
  <h2>1. What is the CSC scholarship?</h2>
  <p>The Chinese Government Scholarship, administered by the China Scholarship Council (CSC), is the largest fully-funded route for international students to study in China. "Full funding" typically covers tuition, on-campus accommodation, a monthly living stipend, and comprehensive medical insurance. It is awarded for degree programs (undergraduate, master's and PhD) and some non-degree study.</p>
</div>

<div class="card">
  <h2>2. The main types</h2>
  <ul>
    <li><strong>Bilateral Program</strong> — applied through the Chinese embassy in your home country. Open to most nationalities; deadlines usually Jan–Apr.</li>
    <li><strong>University Postgraduate Program (High-Level University)</strong> — you apply directly to a Chinese university, which nominates you. Strong for Master's / PhD. Deadlines often Dec–Apr.</li>
    <li><strong>Excellence / Silk Road PhD</strong> — targeted at outstanding PhD candidates, especially from Belt &amp; Road countries.</li>
    <li><strong>MOFCOM Scholarship</strong> — for students from developing countries, prioritising economics, trade and engineering; applied via your home government channel.</li>
  </ul>
  <p>See the full <a href="../scholarships.html">scholarship list</a> for deadlines and links.</p>
</div>

<div class="card">
  <h2>3. Typical eligibility</h2>
  <ul>
    <li>Non-Chinese citizen in good health.</li>
    <li>Academic record meeting the program (most funded awards expect a GPA around 3.0/4.0 or higher).</li>
    <li>Language: HSK for Chinese-taught programs; an English test (TOEFL/IELTS) for English-taught programs if English is not your first language.</li>
    <li>Age limits apply by degree level — check the official notice for your year.</li>
  </ul>
</div>

<div class="card">
  <h2>4. Documents you'll usually need</h2>
  <ul>
    <li>Completed application (via <a href="https://www.campuschina.org" rel="noopener" target="_blank">Campus China</a> for most CSC routes).</li>
    <li>Highest diploma &amp; transcripts (notarised + translated).</li>
    <li>Study plan / research proposal.</li>
    <li>Two recommendation letters.</li>
    <li>Physical examination form.</li>
    <li>Language proficiency certificate.</li>
    <li>Passport copy.</li>
  </ul>
</div>

<div class="card">
  <h2>5. Timeline (indicative)</h2>
  <ul>
    <li><strong>Sep–Nov:</strong> MOFCOM and some autumn CSC rounds open.</li>
    <li><strong>Nov–Mar:</strong> University-postgraduate and Excellence nominations.</li>
    <li><strong>Jan–Apr:</strong> Bilateral Program via embassies (the biggest window).</li>
    <li><strong>Apr–Jul:</strong> Provincial government scholarships.</li>
  </ul>
  <p>Dates shift every year — always confirm on the official notice for your country and target university.</p>
</div>

<div class="cta">
  <strong>Next steps</strong>
  <p>Shortlist schools in the <a href="../universities.html">university directory</a>, check each school's English-taught options and deadlines, then apply through the right CSC channel.</p>
  <a class="btn" href="../scholarships.html">Browse all scholarships &rarr;</a>
</div>
`,
  },
  'csca-exam': {
    title: 'CSCA Aptitude Assessment 2026/27 — China Study Abroad Exam Explained | StudyChina Navigator',
    desc: 'What the new CSCA aptitude assessment (from the 2026/27 cycle) means for undergraduate applicants to Chinese universities: subjects, who it applies to, and how to prepare.',
    body: `
<div class="crumb"><a href="../index.html">Home</a> &rsaquo; Guides &rsaquo; CSCA Exam</div>
<h1>The CSCA Aptitude Assessment (2026/27 cycle)</h1>
<div class="zh">A new admissions hurdle for many undergraduate applicants to China.</div>

<div class="card">
  <h2>What is CSCA?</h2>
  <p>${esc(CSCA_NOTE)}</p>
</div>

<div class="card">
  <h2>Who it applies to</h2>
  <p>From the 2026/27 admissions cycle, most <strong>undergraduate</strong> applicants to Chinese universities are expected to sit the CSCA aptitude assessment. Graduate applicants are generally assessed on their prior record and research proposal rather than this exam — confirm the rule for your target program.</p>
</div>

<div class="card">
  <h2>What is tested</h2>
  <ul>
    <li><strong>Mathematics</strong> — compulsory for every undergraduate applicant.</li>
    <li><strong>A subject-appropriate Chinese paper</strong>:
      <ul>
        <li>Science / Professional Chinese for STEM, engineering and medicine.</li>
        <li>Liberal-Arts Chinese for humanities, social science and economics.</li>
      </ul>
    </li>
  </ul>
  <p>Each school publishes its own required subjects and indicative cut-offs in its undergraduate admission guide. Treat any published number as indicative only.</p>
</div>

<div class="card">
  <h2>How to prepare</h2>
  <ul>
    <li>Confirm the exact subjects and cut-off for your target school on its official international-admissions site.</li>
    <li>Bring your mathematics to a solid high-school level; the Chinese paper tests subject reading/writing in Chinese, not just conversation.</li>
    <li>Check each university's page for its specific CSCA note — e.g. <a href="../uni/thu.html">Tsinghua</a>, <a href="../uni/pku.html">Peking University</a>.</li>
  </ul>
</div>

<div class="cta">
  <strong>Plan early</strong>
  <p>The CSCA adds a step to undergraduate admission. Build your shortlist in the <a href="../universities.html">directory</a> and verify each school's requirement before you apply.</p>
  <a class="btn" href="../universities.html">Browse universities &rarr;</a>
</div>
`,
  },
  'english-taught': {
    title: 'English-Taught Programs in China for International Students | StudyChina Navigator',
    desc: 'Which Chinese universities offer English-taught degrees, how limited they are, and how to find the right program if you do not yet speak Chinese.',
    body: `
<div class="crumb"><a href="../index.html">Home</a> &rsaquo; Guides &rsaquo; English-Taught Programs</div>
<h1>English-Taught Programs in China</h1>
<div class="zh">Study in China without (yet) being fluent in Chinese.</div>

<div class="card">
  <h2>The reality</h2>
  <p>Most undergraduate programs in China are taught in Chinese and require HSK. English-taught options exist but are concentrated at the graduate level and in specific fields — business, engineering, international relations, and some medicine programs. A handful of universities (often language or international-studies focused) offer English-taught bachelor's degrees.</p>
</div>

<div class="card">
  <h2>How to find them</h2>
  <ul>
    <li>Open any school in the <a href="../universities.html">directory</a> and read its "English-taught" line — it states exactly what is offered.</li>
    <li>For graduate study, shortlist universities and check each program's language of instruction on the official portal.</li>
    <li>If you plan to study long-term in China, starting Chinese (HSK) early dramatically widens your options and scholarships.</li>
  </ul>
</div>

<div class="card">
  <h2>Tip</h2>
  <p>Even at English-taught universities, daily life, internships and many networking opportunities assume some Chinese. Budget time for language study alongside your degree.</p>
</div>

<div class="cta">
  <strong>Compare your options</strong>
  <p>Filter the <a href="../universities.html">university directory</a> by city and strength, and open each profile for its English-taught status and deadlines.</p>
  <a class="btn" href="../universities.html">Browse universities &rarr;</a>
</div>
`,
  },
};

// ---- Write everything ----
function write(rel, content) {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  return rel;
}

const written = [];
written.push(write('universities.html', universitiesHub()));
written.push(write('scholarships.html', scholarshipsPage()));
for (const u of UNIVERSITIES) written.push(write(`uni/${u.id}.html`, uniPage(u)));
for (const [slug, g] of Object.entries(guides)) {
  written.push(write(`guides/${slug}.html`, page(g.title, g.desc, g.body, null, `${BASE}/guides/${slug}.html`)));
}

// ---- sitemap.xml ----
const urls = [`${BASE}/`, `${BASE}/csca-learn/`, `${BASE}/universities.html`, `${BASE}/scholarships.html`];
for (const u of UNIVERSITIES) urls.push(`${BASE}/uni/${u.id}.html`);
for (const slug of Object.keys(guides)) urls.push(`${BASE}/guides/${slug}.html`);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${esc(u)}</loc></url>`).join('\n')}
</urlset>
`;
written.push(write('sitemap.xml', sitemap));

// ---- robots.txt ----
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;
written.push(write('robots.txt', robots));

console.log(`Generated ${written.length} files:`);
console.log(`  universities: 1 hub + ${UNIVERSITIES.length} detail pages`);
console.log(`  scholarships: 1 page (${SCHOLARSHIPS.length} entries)`);
console.log(`  guides: ${Object.keys(guides).length}`);
console.log(`  sitemap.xml (${urls.length} URLs) + robots.txt`);
