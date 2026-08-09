// StudyChina Navigator — UI logic. Pure vanilla JS, no build step.
(function () {
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const resultCount = document.getElementById("resultCount");
  const searchInput = document.getElementById("search");
  const cscaBanner = document.getElementById("cscaBanner");
  const topStats = document.getElementById("topStats");
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");
  const dbview = document.getElementById("dbview");
  const viewToggle = document.getElementById("viewToggle");
  const examPrepSection = document.getElementById("examPrep");
  const examCards = document.getElementById("examCards");
  const mainnav = document.getElementById("mainnav");

  const state = {
    search: "",
    degree: null,
    english: false,
    region: null,
    csca: [],          // array of selected CSCA subject tags (AND semantics)
    view: "cards",
    main: "directory",
    examLang: readStore("csca_exam_lang", "zh")
  };

  // ---- localStorage helpers (safe in file:// / private mode) ----
  function readStore(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function writeStore(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  let examChecks = {};
  try { examChecks = JSON.parse(localStorage.getItem("csca_exam_check_v1") || "{}"); } catch (e) { examChecks = {}; }
  const EXAM_LABELS = {
    zh: { before: "考前做", fix: "出事怎么办" },
    en: { before: "Before the exam", fix: "If something goes wrong" },
    ur: { before: "امتحان سے پہلے", fix: "مسئلہ آئے تو" },
    ar: { before: "قبل الاختبار", fix: "عند حدوث مشكلة" },
    fr: { before: "Avant l'examen", fix: "Si un problème survient" }
  };

  // ---- Top stats + CSCA context ----
  const withEnglish = UNIVERSITIES.filter((u) => /english/i.test(u.englishTaught) && !/very limited|mostly chinese/i.test(u.englishTaught)).length;
  const cities = new Set(UNIVERSITIES.map((u) => u.city)).size;
  const cscaCount = UNIVERSITIES.filter((u) => u.csca && /required/i.test(u.csca)).length;
  topStats.innerHTML =
    `<div class="stat"><b>${UNIVERSITIES.length}</b><span>universities</span></div>` +
    `<div class="stat"><b>${cities}</b><span>cities</span></div>` +
    `<div class="stat"><b>${cscaCount}</b><span>CSCA req.</span></div>` +
    `<div class="stat"><b>${withEnglish}</b><span>English-taught</span></div>`;
  cscaBanner.innerHTML = "<b>About CSCA:</b> " + CSCA_NOTE;
  const footCount = document.getElementById("footCount");
  if (footCount) footCount.textContent = UNIVERSITIES.length;

  // ---- Filtering ----
  function getFiltered() {
    const q = state.search.trim().toLowerCase();
    return UNIVERSITIES.filter((u) => {
      if (q) {
        const hay = (u.nameEn + " " + u.nameZh + " " + u.city + " " + u.types.join(" ")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (state.degree === "undergrad" && !u.undergrad) return false;
      if (state.degree === "graduate" && !u.graduate) return false;
      if (state.english && !( /english/i.test(u.englishTaught) && !/very limited|mostly chinese/i.test(u.englishTaught))) return false;
      if (state.region && u.region !== state.region) return false;
      if (state.csca.length) {
        const subs = u.cscaSubjects || [];
        // AND semantics: school must require every selected subject
        if (!state.csca.every((s) => subs.includes(s))) return false;
      }
      return true;
    });
  }

  // ---- Card rendering ----
  function cardHTML(u) {
    const facts = [];
    facts.push(`<span class="fact">${u.undergrad ? "Undergrad" : ""}${u.undergrad && u.graduate ? " · " : ""}${u.graduate ? "Grad" : ""}</span>`);
    if (/english/i.test(u.englishTaught) && !/very limited|mostly chinese/i.test(u.englishTaught)) {
      facts.push(`<span class="fact yes">English programs</span>`);
    }
    facts.push(`<span class="fact csca">CSCA req.</span>`);
    const types = u.types.map((t) => `<span class="type-tag">${t}</span>`).join("");
    const subjects = (u.cscaSubjects || []).map((s) => `<span class="type-tag type-sub">${s}</span>`).join("");
    return `
      <article class="card" data-id="${u.id}">
        <div class="card-head">
          <div class="crest">${(typeof schoolCrest==="function"?schoolCrest(u,44):'<div class="badge" style="background:'+u.color+'">'+u.badge+'</div>')}</div>
          <div>
            <h3 class="card-title">${u.nameEn}</h3>
            <p class="card-zh">${u.nameZh} · ${u.city}</p>
          </div>
        </div>
        <div class="types">${types}</div>
        <p class="blurb">${u.blurb}</p>
        <div class="quickfacts">${facts.join("")}</div>
        ${subjects ? `<div class="subj-line"><span class="subj-label">CSCA:</span> ${subjects}</div>` : ""}
        <div class="card-actions">
          <a class="btn btn-apply" href="${u.applyUrl}" target="_blank" rel="noopener">Apply / 报名 →</a>
          <button class="btn btn-detail" data-detail="${u.id}">Requirements</button>
        </div>
      </article>`;
  }

  // ---- Database (school × CSCA) rendering ----
  function dbHTML(list) {
    const rows = list.map((u) => {
      const subs = (u.cscaSubjects || []).map((s) => `<span class="type-tag type-sub">${s}</span>`).join(" ");
      const majorsBlock = (u.majors && u.majors.length)
        ? `<details class="majors"><summary>${u.majors.length} major(s) with CSCA detail</summary>` +
          u.majors.map((m) =>
            `<div class="major-row"><span class="major-name">${m.name}</span>` +
            `<span class="major-subs">${(m.cscaSubjects || []).map((s) => `<span class="type-tag type-sub">${s}</span>`).join(" ")}</span>` +
            (m.note ? `<span class="major-note">${m.note}</span>` : "") +
            `</div>`).join("") + `</details>`
        : "";
      const srcClass = u.scoreSource === "official" ? "src-official" : (u.scoreSource === "reported" ? "src-reported" : "src-none");
      const srcLabel = u.scoreSource ? (SCORE_SOURCE_LABEL[u.scoreSource] || u.scoreSource) : "";
      const scoreCell = u.minScore
        ? `<b class="score-num">${u.minScore}</b>${srcLabel ? `<span class="src-dot ${srcClass}">${srcLabel}</span>` : ""}`
        : (u.scoreSource === "reported"
            ? `<span class="score-status ${srcClass}">${srcLabel}</span>`
            : `<span class="score-status src-none">未公布</span>`);
      const basis = u.scoreBasis ? `<div class="score-basis">${u.scoreBasis}</div>` : "";
      return `
        <tr>
          <td class="db-name"><b>${u.nameEn}</b><br><span class="db-zh">${u.nameZh} · ${u.city}</span></td>
          <td>${u.region}</td>
          <td>${u.undergrad ? "UG" : ""}${u.undergrad && u.graduate ? " · " : ""}${u.graduate ? "Grad" : ""}</td>
          <td class="db-subs">${subs}${majorsBlock}</td>
          <td class="db-score">${scoreCell}${basis}</td>
          <td><a class="btn btn-apply db-apply" href="${u.applyUrl}" target="_blank" rel="noopener">Apply →</a></td>
        </tr>`;
    }).join("");
    return `
      <table class="db-table">
        <thead>
          <tr>
            <th>University</th>
            <th>Region</th>
            <th>Degree</th>
            <th>CSCA subjects</th>
            <th>Min score</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="db-note"><b>分数来源说明：</b><span class="src-dot src-official">官方文件</span> = 校方招生文件/PDF 明示；<span class="src-dot src-reported">招办口径</span> = 第三方整理的招办复函，<b>非校方官网公示</b>，以官方为准；<span class="src-dot src-none">未公布</span> = 校方尚未公开。通用合格线约 60/100，医学/奖学金通常更高。空格就是产品的核心差异点——拿到各校真实分数线你就拥有独家数据。</p>`;
  }

  function render() {
    const list = getFiltered();
    if (state.view === "cards") {
      grid.hidden = false; dbview.hidden = true;
      grid.innerHTML = list.map(cardHTML).join("");
      empty.hidden = list.length !== 0;
      bindDetailButtons();
    } else {
      grid.hidden = true; dbview.hidden = false;
      empty.hidden = list.length !== 0;
      dbview.innerHTML = dbHTML(list);
    }
    const cscaLabel = state.csca.length ? ` · CSCA: ${state.csca.join("+")}` : "";
    resultCount.textContent = `Showing ${list.length} of ${UNIVERSITIES.length} universities${cscaLabel}`;
  }

  // ---- Detail modal ----
  function openModal(id) {
    const u = UNIVERSITIES.find((x) => x.id === id);
    if (!u) return;
    const rows = [
      ["Overview", u.blurb],
      ["Degree levels", [u.undergrad && "Undergraduate", u.graduate && "Master's / PhD"].filter(Boolean).join(", ")],
      ["English-taught", u.englishTaught],
      ["CSCA", u.csca],
      ["CSCA subjects", (u.cscaSubjects || []).join(", ") || "—"],
      ["Language (HSK)", u.language],
      ["Application window", u.deadline],
      ["Tuition (indicative)", u.tuition],
    ];
    const listItems = rows.map(([k, v]) => {
      const cls = k === "CSCA" ? "csca" : "";
      return `<li class="${cls}"><span class="k">${k}</span><span>${v}</span></li>`;
    }).join("");

    const majorsBlock = (u.majors && u.majors.length)
      ? `<div class="modal-section"><h3>CSCA by major</h3><ul class="req-list">` +
        u.majors.map((m) =>
          `<li><span class="k">${m.name}</span><span>${(m.cscaSubjects || []).join(" + ")}${m.note ? " — " + m.note : ""}</span></li>`
        ).join("") + `</ul></div>`
      : "";

    modalBody.innerHTML = `
      <div class="modal-head">
        <div class="crest">${(typeof schoolCrest==="function"?schoolCrest(u,56,"m"):'<div class="badge" style="background:'+u.color+'">'+u.badge+'</div>')}</div>
        <div>
          <h2>${u.nameEn}</h2>
          <p class="m-zh">${u.nameZh}</p>
          <p class="m-city">${u.city}, China · ${u.types.join(" · ")}</p>
        </div>
      </div>
      <div class="modal-section">
        <h3>Admission Requirements</h3>
        <ul class="req-list">${listItems}</ul>
      </div>
      ${majorsBlock}
      <div class="modal-section">
        <h3>Why students pick it</h3>
        <ul class="req-list">${u.highlights.map((h) => `<li><span class="k">•</span><span>${h}</span></li>`).join("")}</ul>
      </div>
      <div class="modal-links">
        <a class="btn btn-apply" href="${u.applyUrl}" target="_blank" rel="noopener">Apply on official site →</a>
        <a class="btn btn-detail" href="${u.isoUrl}" target="_blank" rel="noopener">Int'l office</a>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function bindDetailButtons() {
    document.querySelectorAll("[data-detail]").forEach((b) => {
      b.addEventListener("click", () => openModal(b.getAttribute("data-detail")));
    });
  }

  // ---- Events ----
  searchInput.addEventListener("input", (e) => { state.search = e.target.value; render(); });

  document.getElementById("filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn || btn.id === "reset") return;
    const filter = btn.getAttribute("data-filter");
    const value = btn.getAttribute("data-value");

    if (filter === "english") {
      state.english = !state.english;
      btn.classList.toggle("active", state.english);
    } else if (filter === "csca") {
      const i = state.csca.indexOf(value);
      if (i === -1) state.csca.push(value); else state.csca.splice(i, 1);
      btn.classList.toggle("active", i === -1);
    } else if (filter === "region") {
      state.region = state.region === value ? null : value;
      document.querySelectorAll('[data-filter="region"]').forEach((c) => c.classList.remove("active"));
      if (state.region) btn.classList.add("active");
    } else if (filter === "degree") {
      state.degree = state.degree === value ? null : value;
      document.querySelectorAll('[data-filter="degree"]').forEach((c) => c.classList.remove("active"));
      if (state.degree) btn.classList.add("active");
    }
    render();
  });

  viewToggle.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip-view");
    if (!btn) return;
    state.view = btn.getAttribute("data-view");
    document.querySelectorAll(".chip-view").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    render();
  });

  document.getElementById("reset").addEventListener("click", () => {
    state.search = ""; state.degree = null; state.english = false; state.region = null; state.csca = [];
    searchInput.value = "";
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    render();
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  // ---- Exam-day prep (家考模拟) ----
  function examCardHTML(e, lang) {
    const i18n = (lang !== "zh" && EXAM_I18N[e.id] && EXAM_I18N[e.id][lang])
      ? EXAM_I18N[e.id][lang]
      : { title: e.title, summary: e.summary, before: e.before, fix: e.fix, tip: e.tip };
    const labels = EXAM_LABELS[lang] || EXAM_LABELS.zh;
    const cardChecks = examChecks[e.id] || [];
    const items = i18n.before || [];
    const total = items.length;
    const doneCount = items.filter((_, i) => cardChecks[i]).length;
    const pct = total ? Math.round(doneCount / total * 100) : 0;
    const before = items.map((b, i) =>
      `<li class="check-item"><label><input type="checkbox" data-card="${e.id}" data-idx="${i}" ${cardChecks[i] ? "checked" : ""}> <span>${b}</span></label></li>`
    ).join("");
    return `
      <article class="exam-card">
        <div class="exam-card-head">
          <div class="exam-icon" style="background:${e.color}">${e.icon}</div>
          <div>
            <h3>${i18n.title}</h3>
            <p class="exam-en">${e.en}</p>
          </div>
        </div>
        <p class="exam-why">${i18n.summary}</p>
        <div class="exam-block">
          <h4>${labels.before} <span class="card-progress">${doneCount}/${total}</span></h4>
          <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
          <ol class="check">${before}</ol>
        </div>
        <div class="exam-block">
          <h4>${labels.fix}</h4>
          <p class="exam-fix">${i18n.fix}</p>
        </div>
        <p class="exam-tip">${e.tip}</p>
      </article>`;
  }

  function bindExamChecks() {
    examCards.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener("change", (ev) => {
        const card = ev.target.getAttribute("data-card");
        const idx = parseInt(ev.target.getAttribute("data-idx"), 10);
        if (!examChecks[card]) examChecks[card] = [];
        examChecks[card][idx] = ev.target.checked;
        writeStore("csca_exam_check_v1", JSON.stringify(examChecks));
        updateExamProgress();
        const cardEl = ev.target.closest(".exam-card");
        if (cardEl) {
          const total = cardEl.querySelectorAll('input[type="checkbox"]').length;
          const done = cardEl.querySelectorAll('input[type="checkbox"]:checked').length;
          const pct = total ? Math.round(done / total * 100) : 0;
          cardEl.querySelector(".card-progress").textContent = done + "/" + total;
          cardEl.querySelector(".progress-bar").style.width = pct + "%";
        }
      });
    });
  }

  function updateExamProgress() {
    let total = 0, done = 0;
    EXAM_PREP.forEach((e) => {
      const items = (e.before || []).length;
      total += items;
      const cc = examChecks[e.id] || [];
      for (let i = 0; i < items; i++) if (cc[i]) done++;
    });
    const pct = total ? Math.round(done / total * 100) : 0;
    const txt = document.getElementById("examOverallText");
    const bar = document.getElementById("examOverallBar");
    if (txt) txt.textContent = "考前准备 " + done + "/" + total + " 已完成 (" + pct + "%)";
    if (bar) bar.style.width = pct + "%";
  }

  function renderExam() {
    const lang = state.examLang;
    examCards.setAttribute("dir", (lang === "ur" || lang === "ar") ? "rtl" : "ltr");
    examCards.innerHTML = EXAM_PREP.map((e) => examCardHTML(e, lang)).join("");
    bindExamChecks();
    updateExamProgress();
  }

  // ---- Exam language switcher ----
  const examLangBox = document.getElementById("examLang");
  if (examLangBox) {
    examLangBox.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (!btn) return;
      state.examLang = btn.getAttribute("data-lang");
      writeStore("csca_exam_lang", state.examLang);
      examLangBox.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderExam();
    });
    examLangBox.querySelectorAll(".lang-btn").forEach((b) =>
      b.classList.toggle("active", b.getAttribute("data-lang") === state.examLang));
  }

  if (mainnav) {
    mainnav.addEventListener("click", (e) => {
      const btn = e.target.closest(".navtab");
      if (!btn) return;
      state.main = btn.getAttribute("data-main");
      document.querySelectorAll(".navtab").forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      const isExam = state.main === "exam";
      document.querySelector(".container").classList.toggle("view-exam", isExam);
      examPrepSection.hidden = !isExam;
      if (isExam) renderExam();
    });
  }

  render();
})();
