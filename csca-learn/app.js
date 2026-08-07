// CSCA Basics — UI logic. Vanilla JS, no framework.
(function() {
  // ── State ──
  const state = { panel: "root", kbSubj: "math", foundSubj: "math", cnLvl: 1, mmCount: 0, mmStreak: 0, mmTimer: null,
    mmFilter: "all", mmMode: "free", mmDailyTotal: 10, mmDailyDone: 0, mmDailyCorrect: 0, mmDailyActive: false,
    mmAdaptive: false, mmDailyQueue: [], mmCurIdx: -1, mockActive: false };
  let rootRendered = false;

  // ═══ i18n: zh / en free switching ═══
  const LANG = (function () { try { return localStorage.getItem("csca_lang") || "zh"; } catch (e) { return "zh"; } })();
  const UI = {
    zh: {
      searchPlaceholder: "搜索全部内容…", myProgress: "我的进度", backToNav: "回到导航站",
      sideModules: "学习模块", sideTools: "诊断与工具",
      cnTitle: "学术中文阅读力训练", cnDesc: "专业中文（理科中文 / 文科中文）是中文授课方向必考科目，90 分钟 80 题，竞品几乎没碰",
      calcTitle: "无计算器手算训练", calcDesc: "CSCA 全部科目禁用计算器。IB/A-Level 学生普遍依赖图形计算器——这里帮你\"去计算器\"再训练。",
      difficulty: "难度", all: "全部", easy: "简单", medium: "中等", hard: "难",
      daily10: "今日 10 题", adaptive: "智能复习",
      dxTitle: "跨课程诊断 → 个性化基础补强", dxDesc: "你学过什么？立刻找出 CSCA 知识缺口，生成按考试日期倒推的每日计划。",
      subjMath: "数学", subjPhys: "物理", subjChem: "化学",
      dxBgPlaceholder: "—— 选择你的课程背景 ——", dxRun: "生成诊断报告 & 每日计划",
      pathTitle: "完整学习路径 · 地基 → 考点", pathDesc: "把「地基补强课」和「CSCA 考点课」按学科顺序拼成一条线。先补地板，再上考点——这是竞品没做的路径。点任意一节即可打开。",
      foundationSkills: "地基技能", basicLessons: "基础课", foundationMastered: "地基掌握",
      openLesson: "基础补强课（点开看完整讲解）", tapAnswer: "点击看答案", animDemo: "概念动画演示",
      animNote: "交互式 SVG 动画 · 非录制视频（真实短视频待补充）", backFoundation: "← 返回地基自检",
      formulaCard: "核心公式卡", exampleSteps: "例题 · 分步解析", starterPractice: "入门级练习（3 题）",
      bridge: "跨课程桥梁", fullContent: "完整内容", frameworkPending: "框架已建 · 待填充",
      answer: "答案：", noAlign: "该主题暂未标注 IB / AP / A-Level 对齐提示。可在 curriculum 字段补充各课程体系对应的知识点。",
      curriculumAlign: "跨课程对齐", frameworkBuilt: "框架已建 · 内容待填充",
      templateNote: "思维导图 + 概念视频 + 3 道入门练习 + 跨课程对齐提示 均可按此模板填入。",
      subTopics: "子知识点", scienceTerms: "理科中文", liberalTerms: "文科中文", coreTerms: "个核心术语",
      lvl2: "Level 2 · 短篇学术文本阅读", lvl3: "Level 3 · 真实题材专项训练",
      comingSoon: "（待构建）", lvl4: "Level 4 · 完整 80 题模考（待构建）",
      lvl4Desc: "全真模拟 CSCA 专业中文考试：80 题、90 分钟倒计时、题型混排（字词识别 + 词语辨析 + 句子排序 + 段落补全 + 阅读理解）。",
      cnL1: "Level 1 · 术语库", cnL2: "Level 2 · 短篇阅读", cnL3: "Level 3 · 真实题材专项训练", cnL4: "Level 4 · 完整 80 题模考",
      noSpeech: "当前浏览器不支持语音朗读（Web Speech API）。",
      mockDuration: "时长：", mockCount: "题量：", mockNoCalc: "全程禁用计算器", mockStart: "开始考试",
      mockNote: "本模考为原创自测题，用于熟悉题型与时间压力；成绩仅作自我诊断，不代表任何官方分数线。",
      mockProgress: "本卷进度：", mockSubmit: "交卷", mockConfirm: "确定交卷？未作答题目将计为错误。",
      yourAnswer: "你的答案", notAnswered: "（未答）", mockReport: "模考成绩报告", mockTotal: "总分：",
      mockRefNote: "※ 本分数为自测参考；CSCA 无对外公布的固定分数线，用于判断薄弱科目与限时适应能力。",
      mockRestart: "重新考试", wrongAnalysis: "错题分析", allCorrect: "全部答对！",
      nextQ: "下一题 →", viewScore: "查看今日成绩 →", todayCorrect: "今日正确", thisGroup: "本组",
      dailyBar: "每日 10 题 · 第", dailyCorrect: "题 · 正确", dailyDone: "今日 10 题完成！正确",
      streakDays: "连续打卡", days: "天", timeout: "超时！", correct: "正确！",
      poolCount: "（", questions: " 题）", correctMark: "正确", wrongMark: "答案：",
      correctAnswer: "正确答案：", noAlignA: "该主题暂未标注 IB / AP / A-Level 对齐提示。可在顶部「", noAlignB: "」模块，按你的课程背景一键生成针对性补强计划。",
      pipeCorrect: " ｜ 正确：", achievement: " 成就解锁：连续 10 次正确！",
      yourBg: "你的背景：", chooseSubj: "选择科目：", daysUntil: "距考试 ", dailyPlan: "每日计划（", daysCountdown: " 天倒推）",
      streakDays2: "连续打卡",
      qUnit: "题",
      mmSubmit: "提交", mmPlaceholder: "心算答案…", exitDaily: "退出每日 10 题", mmStreakLabel: "连对",
      pageTitle: "CSCA Basics — 底层知识图谱 · 基础补强 · 考试训练", learner: "学习者", mainNav: "主导航",
      todayDone: "今日已打卡", todayFinished: "（今日已完成）", adaptiveOn: "智能复习:开",
      dxEmpty: "请先选择你的课程背景", dxReport: "诊断报告",
      dxStrengths: "你的优势：", dxGaps: "CSCA 知识缺口", dxStrategy: "备考策略",
      dxPhase1: "基础补强期", dxPhase2: "模考诊断期", dxPhase3: "冲刺巩固期",
      simReading: "当前读数", simScore: "得分", simStreak: "连对", simBestStreak: "最佳连对",
      simAchieve10: "10 连对达成！", simSubmitReading: "锁定并提交读数",
      simNextObj: "换一个待测物", simWrongBook: "错题本",
      simNoWrong: "还没有错题。连续做对 10 次即可解锁 ", simAchieveWord: "成就！",
      simYourReading: "· 你的读数", simCorrectWord: "正确",
      simRetryMode: "重练模式：把读数拖到正确值附近，再点「锁定并提交读数」。",
      simRightReading: "正确读数", simTrueValue: "真实值",
      simCorrect: "正确！读数", simClose: "接近（误差 ", simFar: "偏差较大（误差 ",
      simAchieveUnlock: "成就解锁：连续 10 次正确！",
      pathFoundation: "地基", pathExam: "考点", pathComplete: "完整", pathTodo: "· 待填充",
      topicUnit: "个主题", minUnit: "分钟", foundationTag: "基础补强课", secUnit: "秒",
      bgIbMathAa: "IB 数学 AA（HL/SL）", bgIbMathAi: "IB 数学 AI（HL/SL）", bgApPrecalc: "AP 预备微积分",
      bgApCalcAb: "AP 微积分 AB", bgAlevelMath: "A-Level 数学", bgIbPhysics: "IB 物理", bgApPhysics1: "AP 物理 1",
      bgAlevelPhysics: "A-Level 物理", bgIbChem: "IB 化学", bgApChem: "AP 化学", bgAlevelChem: "A-Level 化学"
    },
    en: {
      searchPlaceholder: "Search everything…", myProgress: "My progress", backToNav: "Back to navigator",
      sideModules: "Modules", sideTools: "Diagnostics & Tools",
      cnTitle: "Academic Chinese Reading", cnDesc: "Subject-specific Chinese (science / liberal-arts Chinese) is a required exam for Chinese-taught tracks — 80 questions in 90 min, an area few competitors touch.",
      calcTitle: "Calculator-Free Mental Math", calcDesc: "Calculators are banned in all CSCA sections. IB/A-Level students rely heavily on graphing calculators — this re-trains you to go calculator-free.",
      difficulty: "Difficulty", all: "All", easy: "Easy", medium: "Medium", hard: "Hard",
      daily10: "Daily 10", adaptive: "Smart review",
      dxTitle: "Cross-Curriculum Diagnostic → Personalized Remediation", dxDesc: "What have you studied? Instantly find your CSCA knowledge gaps and generate a daily plan counted back from your exam date.",
      subjMath: "Math", subjPhys: "Physics", subjChem: "Chemistry",
      dxBgPlaceholder: "— Select your curriculum background —", dxRun: "Generate diagnostic report & daily plan",
      pathTitle: "Full Learning Path · Foundation → Exam Points", pathDesc: "Stitch the \"foundation remediation\" and \"CSCA exam-point\" lessons into one sequence by subject. Fix the floor first, then the exam points — a path no competitor builds. Click any lesson to open it.",
      foundationSkills: "foundation skills", basicLessons: "basic lessons", foundationMastered: "Foundation mastered",
      openLesson: "Remediation lesson (click to open full explanation)", tapAnswer: "Tap to reveal answer", animDemo: "Concept animation demo",
      animNote: "Interactive SVG animation · not a recorded video (real short video pending)", backFoundation: "← Back to foundation check",
      formulaCard: "Core formula card", exampleSteps: "Example · step-by-step", starterPractice: "Starter practice (3 questions)",
      bridge: "Cross-curriculum bridge", fullContent: "Full content", frameworkPending: "Framework built · content pending",
      answer: "Answer: ", noAlign: "This topic has no IB / AP / A-Level alignment note yet. Add the corresponding points per curriculum in the curriculum field.",
      curriculumAlign: "Curriculum alignment", frameworkBuilt: "Framework built · content pending",
      templateNote: "Mind maps + concept videos + 3 starter exercises + curriculum-alignment hints can all be filled via this template.",
      subTopics: "Sub-topics", scienceTerms: "Science Chinese", liberalTerms: "Liberal-arts Chinese", coreTerms: "core terms",
      lvl2: "Level 2 · Short academic-text reading", lvl3: "Level 3 · Real-topic drills",
      comingSoon: "(coming soon)", lvl4: "Level 4 · Full 80-question mock (coming soon)",
      lvl4Desc: "Full simulation of the CSCA academic-Chinese exam: 80 questions, 90-min countdown, mixed question types (character recognition + word discrimination + sentence ordering + paragraph completion + reading comprehension).",
      cnL1: "Level 1 · Glossary", cnL2: "Level 2 · Short reading", cnL3: "Level 3 · Real-topic drills", cnL4: "Level 4 · Full 80-question mock",
      noSpeech: "Your browser does not support speech synthesis (Web Speech API).",
      mockDuration: "Duration: ", mockCount: "Questions: ", mockNoCalc: "Calculators banned throughout", mockStart: "Start exam",
      mockNote: "This mock uses original self-test questions to familiarize you with question types and time pressure; scores are for self-diagnosis only and represent no official cutoff.",
      mockProgress: "Section progress: ", mockSubmit: "Submit", mockConfirm: "Submit the exam? Unanswered questions count as wrong.",
      yourAnswer: "Your answer", notAnswered: "(not answered)", mockReport: "Mock Exam Report", mockTotal: "Total score: ",
      mockRefNote: "※ This score is a self-test reference; CSCA publishes no official fixed cutoff. Use it to spot weak subjects and gauge timed-adaptation.",
      mockRestart: "Retake exam", wrongAnalysis: "Wrong-answer analysis", allCorrect: "All correct!",
      nextQ: "Next →", viewScore: "View today's score →", todayCorrect: "Today correct", thisGroup: "This set",
      dailyBar: "Daily 10 · Q", dailyCorrect: " · correct ", dailyDone: "Daily 10 done! Correct ",
      streakDays: "Streak", days: "days", timeout: "Time's up!", correct: "Correct!",
      poolCount: "(", questions: " Q)",       correctMark: "Correct", wrongMark: "Answer: ", correctAnswer: "Correct answer: ",
      pipeCorrect: " | correct: ", achievement: " Achievement unlocked: 10 in a row!",
      yourBg: "Your background: ", chooseSubj: "Subjects: ", daysUntil: "Days to exam: ",
      dailyPlan: "Daily plan (", daysCountdown: " days back)", streakDays2: "Streak",
      qUnit: "Q",
      mmSubmit: "Submit", mmPlaceholder: "Mental answer…", exitDaily: "Exit Daily 10", mmStreakLabel: "Streak",
      pageTitle: "CSCA Basics — Foundational Knowledge Map · Remediation · Exam Training", learner: "Learner", mainNav: "Main navigation",
      todayDone: "Done today", todayFinished: " (done today)", adaptiveOn: "Smart review: on",
      dxEmpty: "Please select your curriculum background first", dxReport: "Diagnostic report",
      dxStrengths: "Your strengths: ", dxGaps: "CSCA knowledge gaps", dxStrategy: "Prep strategy",
      dxPhase1: "Foundation phase", dxPhase2: "Mock-exam diagnostic phase", dxPhase3: "Sprint & consolidation phase",
      simReading: "Current reading", simScore: "Score", simStreak: "Streak", simBestStreak: "Best streak",
      simAchieve10: "10-streak achieved", simSubmitReading: "Lock in & submit reading",
      simNextObj: "Next object", simWrongBook: "Mistakes",
      simNoWrong: "No mistakes yet. Get 10 right in a row to unlock ", simAchieveWord: "achievement!",
      simYourReading: "· Your reading", simCorrectWord: "correct",
      simRetryMode: "Retry mode: drag the reading near the correct value, then click “Lock in & submit reading”.",
      simRightReading: "Correct reading", simTrueValue: "true value",
      simCorrect: "Correct! Reading", simClose: "Close (error ", simFar: "Large deviation (error ",
      simAchieveUnlock: "Achievement: 10 correct in a row!",
      pathFoundation: "Foundation", pathExam: "Exam points", pathComplete: "Complete", pathTodo: "· pending",
      topicUnit: "topics", minUnit: "min", foundationTag: "Foundation lesson", secUnit: "s",
      bgIbMathAa: "IB Math AA (HL/SL)", bgIbMathAi: "IB Math AI (HL/SL)", bgApPrecalc: "AP Precalculus",
      bgApCalcAb: "AP Calculus AB", bgAlevelMath: "A-Level Mathematics", bgIbPhysics: "IB Physics", bgApPhysics1: "AP Physics 1",
      bgAlevelPhysics: "A-Level Physics", bgIbChem: "IB Chemistry", bgApChem: "AP Chemistry", bgAlevelChem: "A-Level Chemistry"
    }
  };
  function _t(key) {
    if (UI[LANG] && UI[LANG][key] != null) return UI[LANG][key];
    if (UI.zh[key] != null) return UI.zh[key];
    return key;
  }
  function pick(o, zhKey, enKey) {
    if (!o) return "";
    if (LANG === "en") { const ev = o[enKey] || o.en || o.nameEn; if (ev) return ev; }
    return o[zhKey] != null ? o[zhKey] : (o.title || o.name || "");
  }
  // Return the active-language value of a field that has a parallel `*En` sibling.
  function L2(o, zhKey, enKey) {
    if (!o) return "";
    if (LANG === "en" && o[enKey] != null) return o[enKey];
    return o[zhKey] != null ? o[zhKey] : "";
  }
  // Pick between two ready-made strings by active language.
  function LS(zh, en) { return (LANG === "en" && en) ? en : zh; }
  // Minimal LaTeX → HTML for formula cards (no external renderer needed).
  function mTex(s) {
    if (!s) return "";
    const SYM = {
      cap:"∩", cup:"∪", mid:"|", in:"∈", notin:"∉", subseteq:"⊆", subset:"⊂", supseteq:"⊇",
      iff:"⟺", forall:"∀", exists:"∃", cdot:"·", times:"×", pm:"±", neq:"≠", leq:"≤", geq:"≥",
      to:"→", gets:"←", downarrow:"↓", uparrow:"↑", circ:"°", int:"∫", sum:"∑", prod:"∏",
      phi:"φ", varphi:"φ", varepsilon:"ε", Phi:"Φ", Delta:"Δ", Lambda:"Λ", Sigma:"Σ", Omega:"Ω",
      theta:"θ", delta:"δ", alpha:"α", beta:"β", gamma:"γ", lambda:"λ", mu:"μ", nu:"ν", pi:"π",
      rho:"ρ", sigma:"σ", tau:"τ", omega:"ω", infty:"∞", emptyset:"∅", angle:"∠", perp:"⊥",
      parallel:"∥", approx:"≈", equiv:"≡", propto:"∝", partial:"∂", nabla:"∇", ldots:"…", cdots:"⋯"
    };
    const FN = { log:"log", ln:"ln", lg:"lg", sin:"sin", cos:"cos", tan:"tan", sec:"sec", csc:"csc", cot:"cot", exp:"exp", lim:"lim" };
    const esc = t => String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    let out = "", i = 0;
    const group = () => { let d = 0, j = i; while (j < s.length) { const c = s[j]; if (c === "{") d++; else if (c === "}") { d--; if (d === 0) break; } j++; } const inner = s.slice(i + 1, j); i = j + 1; return inner; };
    const cmd = () => { let j = i + 1; while (j < s.length && /[A-Za-z]/.test(s[j])) j++; const name = s.slice(i + 1, j); i = j; return name; };
    const render = t => mTex(t);
    while (i < s.length) {
      const c = s[i];
      if (c === "\\") {
        const nc = s[i + 1];
        if (nc && !/[A-Za-z]/.test(nc)) {
          i += 2;
          if (nc === ",") out += "&thinsp;";
          else if (nc === ";" || nc === ":") out += "&ensp;";
          else if (nc === " ") out += "&emsp;";
          else if (nc === "{") out += "{";
          else if (nc === "}") out += "}";
          else if (nc === "%") out += "%";
          else if (nc === "&") out += "&amp;";
          else if (nc === "\\") out += "\\";
          else out += esc(nc);
          continue;
        }
        const name = cmd();
        if (name === "frac" || name === "tfrac" || name === "dfrac") { const n = group(), d = group(); out += `<span class="mfrac"><i>${render(n)}</i><i>${render(d)}</i></span>`; }
        else if (name === "text" || name === "mbox" || name === "mathrm") out += render(group());
        else if (name === "mathbf" || name === "boldsymbol") out += `<b>${render(group())}</b>`;
        else if (name === "vec") out += `<span class="macc macc-vec">${render(group())}</span>`;
        else if (name === "hat") out += `<span class="macc macc-hat">${render(group())}</span>`;
        else if (name === "bar" || name === "overline") out += `<span class="macc macc-bar">${render(group())}</span>`;
        else if (name === "complement") out += "∁";
        else if (name === "sqrt") out += `√<span class="msqrt">${render(group())}</span>`;
        else if (name === "left" || name === "right" || name === "big" || name === "Big") { /* keep next char */ }
        else if (name === "operatorname") { if (s[i] === "{") out += render(group()); }
        else if (SYM[name]) out += SYM[name];
        else if (FN[name]) out += `<span class="mfn">${FN[name]}</span>`;
        else out += name;
      } else if (c === "^" || c === "_") {
        const up = c === "^"; i++;
        let tok;
        if (s[i] === "{") tok = group();
        else if (s[i] === "\\") { const n = cmd(); tok = (SYM[n] || FN[n] || n); }
        else tok = s[i++];
        out += up ? `<sup>${render(tok)}</sup>` : `<sub>${render(tok)}</sub>`;
      } else { out += esc(c); i++; }
    }
    return out;
  }
  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (UI[LANG] && UI[LANG][k] != null) el.textContent = UI[LANG][k];
      else if (UI.zh[k] != null) el.textContent = UI.zh[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const k = el.getAttribute("data-i18n-ph");
      if (UI[LANG] && UI[LANG][k] != null) el.setAttribute("placeholder", UI[LANG][k]);
      else if (UI.zh[k] != null) el.setAttribute("placeholder", UI.zh[k]);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const k = el.getAttribute("data-i18n-title");
      el.title = (UI[LANG] && UI[LANG][k] != null) ? UI[LANG][k] : (UI.zh[k] != null ? UI.zh[k] : el.title);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const k = el.getAttribute("data-i18n-aria");
      const v = (UI[LANG] && UI[LANG][k] != null) ? UI[LANG][k] : (UI.zh[k] != null ? UI.zh[k] : el.getAttribute("aria-label"));
      if (v != null) el.setAttribute("aria-label", v);
    });
  }
  function setLang(l) {
    try { localStorage.setItem("csca_lang", l); } catch (e) {}
    document.body.classList.toggle("lang-en", l === "en");
    document.documentElement.lang = (l === "en") ? "en" : "zh-CN";
    qa("#clLang .cl-lang-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-lang") === l));
    applyStaticI18n();
    if (state.panel === "root" && rootRendered) { q("#rootBody").innerHTML = ""; renderRoot(); }
    if (state.panel === "kb") renderKBSubjects();
    if (state.panel === "found" && q("#foundSubjects .cl-subj")) renderFoundation();
    if (state.panel === "cn") renderCNDefault();
    if (state.panel === "calc" && q(".mm-tech-card")) renderCalcDefault();
    if (state.panel === "dx") renderDXForm();
    if (state.panel === "sim" && q("#simStage .sim-wrap")) renderSim();
    if (state.panel === "path" && q("#pathBody .path-subj")) renderPath();
  }

  // ── DOM ──
  const panels = { root: q("#panel-root"), kb: q("#panel-kb"), found: q("#panel-found"), cn: q("#panel-cn"), calc: q("#panel-calc"), dx: q("#panel-dx"), sim: q("#panel-sim"), path: q("#panel-path") };

  // ═══ Tab switching ═══
  q("#clNav").addEventListener("click", function(e) {
    const tab = e.target.closest(".cl-tab");
    if (!tab) return;
    state.panel = tab.getAttribute("data-panel");
    qa(".cl-tab").forEach(t => t.classList.toggle("active", t === tab));
    Object.keys(panels).forEach(k => panels[k].hidden = (k !== state.panel));
    if (state.panel === "kb") renderKBSubjects();
    if (state.panel === "found" && !q("#foundSubjects .cl-subj")) renderFoundation();
    if (state.panel === "cn" && !q(".cn-term")) renderCNDefault();
    if (state.panel === "calc" && !q(".mm-tech-card")) renderCalcDefault();
    if (state.panel === "dx") renderDXForm();
    if (state.panel === "sim" && !q("#simStage .sim-wrap")) renderSim();
    if (state.panel === "path" && !q("#pathBody .path-subj")) renderPath();
    if (state.panel === "root" && !rootRendered) { renderRoot(); rootRendered = true; }
  });

  // ═══ Language toggle wiring ═══
  q("#clLang").addEventListener("click", function(e) {
    const b = e.target.closest(".cl-lang-btn");
    if (!b) return;
    setLang(b.getAttribute("data-lang"));
  });

  // ═══ Foundation Floor (地基) ═══
  function foundationDone(id) {
    try { return !!JSON.parse(localStorage.getItem("csca_foundation") || "{}")[id]; }
    catch (e) { return false; }
  }
  function setFoundation(id, val) {
    let o = {};
    try { o = JSON.parse(localStorage.getItem("csca_foundation") || "{}"); } catch (e) {}
    o[id] = val;
    localStorage.setItem("csca_foundation", JSON.stringify(o));
  }

  function renderFoundation() {
    q("#foundIntro").innerHTML = L2(FOUNDATION, 'intro', 'introEn');
    const box = q("#foundSubjects");
    const subs = FOUNDATION.subjects;
    box.innerHTML = Object.keys(subs).map(k => {
      const s = subs[k];
      const active = k === state.foundSubj ? " active" : "";
      return `<div class="cl-subj${active}" data-fsubj="${k}" style="--subj-color:${s.color}">
        <h3>${icon(s.icon)} <span class="l-zh">${s.name}</span> <span class="subj-en">${s.nameEn}</span></h3>
        <div class="subj-meta">${s.floorSkills.length} ${_t('foundationSkills')}${s.lessons.length}${_t('basicLessons')}</div>
      </div>`;
    }).join("");
    renderFoundationDetail(state.foundSubj);
  }

  q("#foundSubjects").addEventListener("click", function(e) {
    const card = e.target.closest(".cl-subj");
    if (!card) return;
    state.foundSubj = card.getAttribute("data-fsubj");
    renderFoundation();
  });

  q("#foundDetail").addEventListener("click", function(e) {
    const lessonCard = e.target.closest(".found-lesson");
    if (lessonCard) {
      const id = lessonCard.getAttribute("data-lesson");
      const subj = FOUNDATION.subjects[state.foundSubj];
      const lesson = subj.lessons.find(l => l.id === id);
      if (lesson) renderFoundationLesson(lesson, subj);
      return;
    }
    if (e.target.closest(".found-back")) { renderFoundationDetail(state.foundSubj); }
  });

  q("#foundDetail").addEventListener("change", function(e) {
    const cb = e.target.closest("input[data-fsid]");
    if (!cb) return;
    setFoundation(cb.getAttribute("data-fsid"), cb.checked);
    const subj = FOUNDATION.subjects[state.foundSubj];
    const skills = subj.floorSkills;
    const done = skills.filter(s => foundationDone(s.id)).length;
    const pct = Math.round(done / skills.length * 100);
    const bar = q("#foundDetail .fp-fill");
    if (bar) bar.style.width = pct + "%";
    const txt = q("#foundDetail .fp-text");
    if (txt) txt.textContent = `${_t('foundationMastered')}${done}/${skills.length}`;
  });

  function renderFoundationDetail(subjId) {
    const subj = FOUNDATION.subjects[subjId];
    const color = subj.color;
    const skills = subj.floorSkills;
    const done = skills.filter(s => foundationDone(s.id)).length;
    const pct = Math.round(done / skills.length * 100);
    const skillCards = skills.map(s => {
      const checked = foundationDone(s.id) ? " checked" : "";
      return `<div class="found-skill">
        <label class="fs-check">
          <input type="checkbox" data-fsid="${s.id}"${checked}>
          <div class="fs-text">
            <div class="fs-name"><span class="l-zh">${s.name}</span><span class="fs-en">${s.nameEn}</span></div>
            <div class="fs-why">${L2(s, 'why', 'whyEn')}</div>
            <div class="fs-bridge">${icon('bridge')} ${L2(s, 'bridge', 'bridgeEn')}</div>
          </div>
        </label>
      </div>`;
    }).join("");
    const lessons = subj.lessons.map(l =>
      `<div class="found-lesson" data-lesson="${l.id}">
        <div class="t-header">
          <div class="t-num" style="background:${color}">${LS('课', 'L')}</div>
          <div><h4><span class="l-zh">${l.name}</span><span class="t-en">${l.nameEn}</span></h4></div>
        </div>
        <span class="t-badge t-badge-full">${LS('基础课', 'Lesson')} ${icon('check')}</span>
      </div>`
    ).join("");
    q("#foundDetail").innerHTML = `<div class="found-subj-head" style="border-left:4px solid ${color}">
        <h2>${icon(subj.icon)} ${LS(subj.name + ' · 地基自检', subj.nameEn + ' · Foundation Check')}</h2>
        <p>${L2(subj, 'tagline', 'taglineEn')}</p>
      </div>
      <div class="found-progress">
        <div class="fp-bar"><div class="fp-fill" style="width:${pct}%;background:${color}"></div></div>
        <span class="fp-text">${_t('foundationMastered')}${done}/${skills.length}</span>
      </div>
      <div class="found-skills">${skillCards}</div>
      <h3 class="found-lesson-title">${_t('openLesson')}</h3>
      <div class="cl-topics">${lessons}</div>`;
  }

  function renderFoundationLesson(lesson, subj) {
    const concept = L2(lesson, 'concept', 'conceptEn');
    const ex = L2(lesson, 'example', 'exampleEn');
    const prac = L2(lesson, 'practice', 'practiceEn');
    const bridge = L2(lesson, 'bridge', 'bridgeEn');
    const formulas = (lesson.formulas || []).map(f =>
      `<div class="formula-row"><span class="formula-left">${f.left}</span><span class="formula-right">${mTex(f.right)}</span></div>`
    ).join("");
    const steps = (ex.steps || []).map(s => `<div class="es">${s}</div>`).join("");
    const example = `<div class="example-block">
      <div class="ep">${icon('doc')} ${ex.problem}</div>
      ${steps}
      <div class="etip">${icon('check')} ${_t('answer')}${ex.answer} — ${ex.tip}</div>
    </div>`;
    const practice = (prac || []).map((p, i) =>
      `<div class="practice-item">
        <div class="pq">${i + 1}. ${p.q}</div>
        <span class="pa" data-a="${p.a}" onclick="this.textContent=this.getAttribute('data-a')">${_t('tapAnswer')}</span>
      </div>`
    ).join("");
    const anim = (typeof FOUND_ANIM !== "undefined" && FOUND_ANIM[lesson.id])
      ? `<div class="anim-box"><div class="anim-label">${icon('play')} ${_t('animDemo')}<br><small>${_t('animNote')}</small></div>${FOUND_ANIM[lesson.id]}</div>`
      : "";
    q("#foundDetail").innerHTML = `<div class="detail-card">
      <div class="found-back">${_t('backFoundation')}</div>
      <h2><span class="l-zh">${lesson.name}</span></h2><p class="lesson-sub">${_t('foundationTag')}</p><p class="d-en">${lesson.nameEn}</p>
      ${anim}
      <div class="d-concept">${concept}</div>
      <h3>${_t('formulaCard')}</h3><div class="formula-grid">${formulas}</div>
      <h3>${_t('exampleSteps')}</h3>${example}
      <h3>${_t('starterPractice')}</h3><div class="practice-grid">${practice}</div>
      <h3>${icon('bridge')} ${_t('bridge')}</h3><div class="curriculum-box">${bridge}</div>
    </div>`;
    q("#foundDetail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ═══ KB Panel ═══
  function renderKBSubjects() {
    const box = q("#kbSubjects");
    box.innerHTML = SUBJECTS.map(s => {
      const active = s.id === state.kbSubj ? " active" : "";
      return `<div class="cl-subj${active}" data-subj="${s.id}" style="--subj-color:${s.color}">
        <h3>${icon(s.icon)} <span class="l-zh">${s.name}</span> <span class="subj-en">${s.nameEn}</span></h3>
        <div class="subj-meta">${s.topicCount} ${_t('topicUnit')} · ${s.duration.replace('min', _t('minUnit'))} · ${s.questions} ${_t('qUnit')}</div>
      </div>`;
    }).join("");
    box.addEventListener("click", function(e) {
      const card = e.target.closest(".cl-subj");
      if (!card) return;
      state.kbSubj = card.getAttribute("data-subj");
      renderKBSubjects();
      renderKBTopics();
      q("#kbDetail").innerHTML = "";
    });
    renderKBTopics();
  }

  function renderKBTopics() {
    const list = TOPICS[state.kbSubj] || [];
    const subj = SUBJECTS.find(s => s.id === state.kbSubj);
    const color = subj ? subj.color : "#002147";
    const box = q("#kbTopics");
    box.innerHTML = list.map((t, i) => {
      const subs = (t.subs || []).map(s => `<span class="t-sub"><span class="l-zh">${s.name}</span><span class="t-en">${s.nameEn}</span></span>`).join("");
      return `<div class="cl-topic-card" data-topic="${t.id}">
        <div class="t-header">
          <div class="t-num" style="background:${color}">${i+1}</div>
          <div>
            <h4><span class="l-zh">${t.name}</span><span class="t-en">${t.nameEn}</span></h4>
          </div>
        </div>
        <div class="t-subs">${subs}</div>
        ${t.hasContent ? '<span class="t-badge t-badge-full">' + _t('fullContent') + ' ' + icon('check') + '</span>' : ''}
        ${!t.hasContent ? `<span class="t-badge" style="background:#fefce8;color:#b45309">${_t('frameworkPending')}</span>` : ''}
      </div>`;
    }).join("");
    box.addEventListener("click", function(e) {
      const card = e.target.closest(".cl-topic-card");
      if (!card) return;
      const id = card.getAttribute("data-topic");
      const topic = list.find(t => t.id === id);
      if (topic && topic.hasContent) renderKBDetail(topic, subj);
      else if (topic) renderKBStub(topic, subj);
    });
  }

  function renderKBDetail(topic, subj) {
    const concept = L2(topic, 'concept', 'conceptEn');
    const ex = L2(topic, 'example', 'exampleEn');
    const prac = L2(topic, 'practice', 'practiceEn');
    const formulas = (topic.formulas || []).map(f =>
      `<div class="formula-row"><span class="formula-left">${f.left}</span><span class="formula-right">${mTex(f.right)}</span><span class="formula-note">${f.note || ''}</span></div>`
    ).join("");

    const steps = (ex.steps || []).map(s => `<div class="es">${s}</div>`).join("");
    const example = `<div class="example-block">
      <div class="ep">${icon('doc')} ${ex.problem}</div>
      ${steps}
      <div class="etip">${icon('check')} ${_t('answer')}${ex.answer} — ${ex.tip}</div>
    </div>`;

    const practice = (prac || []).map((p, i) =>
      `<div class="practice-item">
        <div class="pq">${i+1}. ${p.q}</div>
        <span class="pa" data-a="${p.a}" onclick="this.textContent=this.getAttribute('data-a')">${_t('tapAnswer')}</span>
      </div>`
    ).join("");

    const maps = [topic.ibMap && `IB：${L2(topic, 'ibMap', 'ibMapEn')}`, topic.apMap && `AP：${L2(topic, 'apMap', 'apMapEn')}`, topic.aLevelMap && `A-Level：${L2(topic, 'aLevelMap', 'aLevelMapEn')}`].filter(Boolean);
    const mapHTML = maps.length
      ? maps.map(m => `<div class="curriculum-box">${m}</div>`).join("")
      : `<div class="curriculum-box" style="background:#f8fafc;color:var(--muted)">${_t('noAlignA')}${icon('target')} ${LS('诊断', 'Diagnostic')}${_t('noAlignB')}</div>`;

    q("#kbDetail").innerHTML = `<div class="detail-card">
      <h2><span class="l-zh">${topic.name}</span></h2><p class="d-en">${topic.nameEn}</p>
      <div class="d-concept">${concept}</div>
      <h3>${_t('formulaCard')}</h3><div class="formula-grid">${formulas}</div>
      <h3>${_t('exampleSteps')}</h3>${example}
      <h3>${_t('starterPractice')}</h3><div class="practice-grid">${practice}</div>
      <h3>${_t('curriculumAlign')}</h3>
      ${mapHTML}
    </div>`;

    q("#kbDetail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderKBStub(topic, subj) {
    const subs = (topic.subs || []).map(s => `<li><span class="l-zh">${s.name}</span> <span class="t-en">(${s.nameEn})</span></li>`).join("");
    q("#kbDetail").innerHTML = `<div class="detail-card">
      <h2><span class="l-zh">${topic.name}</span></h2><p class="d-en">${topic.nameEn}</p>
      <div class="curriculum-box">
        <p><b>${icon('notebook')} ${_t('frameworkBuilt')}</b></p>
        <p>${_t('templateNote')}</p>
      </div>
      <h3>${_t('subTopics')}</h3><ul style="line-height:2;font-size:14px">${subs}</ul>
      ${topic.ibMap ? `<h3>${_t('curriculumAlign')}</h3><div class="curriculum-box">${L2(topic, 'ibMap', 'ibMapEn')}</div>` : ''}
      ${topic.apMap ? `<div class="curriculum-box">${L2(topic, 'apMap', 'apMapEn')}</div>` : ''}
      ${topic.aLevelMap ? `<div class="curriculum-box">${L2(topic, 'aLevelMap', 'aLevelMapEn')}</div>` : ''}
    </div>`;
  }

  // ═══ Academic Chinese Panel ═══
  function renderCNDefault() { renderCNLevel(1); }
  q(".cn-levels").addEventListener("click", function(e) {
    const btn = e.target.closest(".cn-lvl");
    if (!btn) return;
    state.cnLvl = parseInt(btn.getAttribute("data-cn-lvl"));
    qa(".cn-lvl").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCNLevel(state.cnLvl);
  });

  function renderCNLevel(lvl) {
    const body = q("#cnBody");
    if (lvl === 1) {
      const termCard = (t) => `<div class="cn-term" data-k="${(t.zh + " " + t.en + " " + t.pinyin).toLowerCase()}">
          <div class="ct-zh l-zh">${t.zh}<button class="cn-spk" data-txt="${escAttr(t.zh + "。" + t.en)}" title="朗读">${icon('volume')}</button></div>
          <div class="ct-en">${t.en}</div>
          <div class="ct-py">${t.pinyin}</div>
          <div class="ct-ex"><span class="l-zh">${t.example}</span><span class="ct-ex-en">${t.exampleEn}</span></div>
        </div>`;
      const sciRows = CHINESE_TERMS.science.map(termCard).join("");
      const libRows = CHINESE_TERMS.liberal.map(termCard).join("");
      body.innerHTML = `
        <div class="cn-search-wrap"><input id="cnSearch" type="search" placeholder="${LS('搜索术语（中文 / English / pīn yīn）…', 'Search terms (Chinese / English / pīn yīn)…')}" autocomplete="off" /></div>
        <h3 style="margin:0 0 12px">${_t('scienceTerms')}${CHINESE_TERMS.science.length}${_t('coreTerms')}</h3>
        <div class="cn-glossary" id="cnSci">${sciRows}</div>
        <h3 style="margin:24px 0 12px">${_t('liberalTerms')}${CHINESE_TERMS.liberal.length}${_t('coreTerms')}</h3>
        <div class="cn-glossary" id="cnLib">${libRows}</div>`;
      const inp = q("#cnSearch");
      inp.addEventListener("input", () => {
        const v = inp.value.trim().toLowerCase();
        qa("#cnSci .cn-term, #cnLib .cn-term").forEach(el => {
          el.style.display = (!v || el.getAttribute("data-k").includes(v)) ? "" : "none";
        });
      });
      qa(".cn-spk").forEach(b => b.addEventListener("click", function(e) {
        e.stopPropagation();
        speak(b.getAttribute("data-txt"));
      }));
    } else if (lvl === 2 || lvl === 3) {
      const passages = (typeof READING !== "undefined") ? READING.filter(p => p.level === lvl) : [];
      const headLabel = lvl === 2 ? _t('lvl2') : _t('lvl3');
      if (!passages.length) {
        body.innerHTML = `<div class="cl-empty"><h3>${headLabel}${_t('comingSoon')}</h3></div>`;
        return;
      }
      const listHtml = passages.map((p, i) =>
        `<button class="rd-item ${i === 0 ? "active" : ""}" data-rd="${p.id}">
          <span class="rd-scene">${L2(p, 'scene', 'sceneEn')}</span>
          <span class="rd-title">${L2(p, 'title', 'titleEn')}</span>
          <span class="rd-meta">${p.qs.length} ${_t('qUnit')}</span>
        </button>`).join("");
      body.innerHTML = `
        <h3 style="margin:0 0 12px">${headLabel} (${passages.length} ${LS('篇', 'passages')})</h3>
        <div class="rd-layout">
          <div class="rd-list">${listHtml}</div>
          <div class="rd-viewer" id="rdViewer"></div>
        </div>`;

      function showPassage(pid) {
        const p = passages.find(x => x.id === pid);
        if (!p) return;
        qa(".rd-item").forEach(b => b.classList.toggle("active", b.getAttribute("data-rd") === pid));
        const Q = (LANG === 'en' && p.qsEn) ? p.qsEn : p.qs;
        const qsHtml = Q.map((qq, idx) => {
          const opts = qq.opts.map((o, oi) =>
            `<button class="rd-opt" data-q="${idx}" data-o="${oi}">${o}</button>`).join("");
          return `<div class="rd-q" data-q="${idx}">
            <div class="rd-qq">${idx + 1}. ${qq.q}</div>
            <div class="rd-opts">${opts}</div>
            <div class="rd-fb" id="rdfb-${idx}"></div>
          </div>`;
        }).join("");
        q("#rdViewer").innerHTML = `
          <div class="rd-passage-head"><span class="rd-scene">${L2(p, 'scene', 'sceneEn')}</span><h4>${L2(p, 'title', 'titleEn')}</h4>
            <button class="rd-spk" data-txt="${escAttr(L2(p, 'title', 'titleEn') + ". " + L2(p, 'text', 'textEn'))}" title="${LS('朗读全文', 'Read aloud')}">${icon('volume')} ${LS('朗读', 'Read')}</button></div>
          <div class="cn-text">${L2(p, 'text', 'textEn')}</div>
          <div class="rd-qs">${qsHtml}</div>`;
        const spk = q("#rdViewer .rd-spk");
        if (spk) spk.addEventListener("click", () => speak(spk.getAttribute("data-txt")));
        qa("#rdViewer .rd-opt").forEach(b => b.addEventListener("click", function() {
          const qi = +b.getAttribute("data-q");
          const oi = +b.getAttribute("data-o");
          const qq = Q[qi];
          const optsBox = b.parentElement;
          const fb = optsBox.nextElementSibling;
          qa(optsBox.children).forEach(c => {
            c.classList.add("locked");
            if (+c.getAttribute("data-o") === qq.ans) c.classList.add("correct");
          });
          if (oi === qq.ans) {
            b.classList.add("chosen-correct");
            fb.innerHTML = icon('check') + " " + _t('correctMark');
            fb.className = "rd-fb ok";
          } else {
            b.classList.add("chosen-wrong");
            fb.innerHTML = icon('cross') + " " + _t('correctAnswer') + qq.opts[qq.ans];
            fb.className = "rd-fb no";
          }
        }));
      }
      qa(".rd-item").forEach(b => b.addEventListener("click", () => showPassage(b.getAttribute("data-rd"))));
      showPassage(passages[0].id);
    } else if (lvl === 4) {
      renderMock();
    } else {
      body.innerHTML = `<div class="cl-empty">
        <h3>${_t('lvl4')}</h3>
        <p style="max-width:560px;margin:8px auto">${_t('lvl4Desc')}</p>
      </div>`;
    }
  }

  // ── Read-aloud (Web Speech API) ──
  function escAttr(s) { return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  function speak(text) {
    try {
      if (!("speechSynthesis" in window)) { alert(_t('noSpeech')); return; }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = (LANG === 'en') ? "en-US" : "zh-CN"; u.rate = 0.92; u.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const zh = voices.find(v => /zh|cmn/i.test(v.lang));
      if (zh) u.voice = zh;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  // ═══ Level 4 Mock Exam (80 Q) ═══
  const MOCK = { active: false, finished: false, section: 0, answers: {}, startTime: 0, secLeft: 0, timer: null };

  function fmtTime(sec) {
    sec = Math.max(0, sec);
    const m = Math.floor(sec / 60), s = sec % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }
  function mockFlat() {
    let n = 0; MOCK_EXAM.sections.forEach(s => n += s.qs.length); return n;
  }
  function countAnswered(si) {
    let c = 0; Object.keys(MOCK.answers).forEach(k => { if (k.indexOf(si + ":") === 0) c++; }); return c;
  }
  function totalAnswered() { return Object.keys(MOCK.answers).length; }

  function renderMock() {
    const body = q("#cnBody");
    if (MOCK.finished) { renderMockResult(body); return; }
    if (!MOCK.active) { renderMockStart(body); return; }
    renderMockExam(body);
  }
  function renderMockStart(body) {
    body.innerHTML = `
      <div class="mock-start">
        <h3>${L2(MOCK_EXAM, 'title', 'titleEn')}</h3>
        <p>${L2(MOCK_EXAM, 'subtitle', 'subtitleEn')}</p>
        <ul class="mock-meta">
          <li>${icon('clock')} ${_t('mockDuration')}${Math.round(MOCK_EXAM.timeLimit / 60)} ${LS('分钟', 'min')}</li>
          <li>${icon('doc')} ${_t('mockCount')}${mockFlat()} ${LS('题（数学 / 物理 / 化学 / 学术中文 各 20）', 'questions (20 each: Math / Physics / Chemistry / Academic Chinese)')}</li>
          <li>${icon('warn')} ${_t('mockNoCalc')}</li>
        </ul>
        <button class="mock-start-btn" id="mockStartBtn">${_t('mockStart')}</button>
        <p class="mock-note">${_t('mockNote')}</p>
      </div>`;
    q("#mockStartBtn").addEventListener("click", function() {
      MOCK.active = true; MOCK.finished = false; MOCK.section = 0; MOCK.answers = {};
      MOCK.startTime = Date.now(); MOCK.secLeft = MOCK_EXAM.timeLimit;
      renderMockExam(body); startMockTimer();
    });
  }
  function startMockTimer() {
    if (MOCK.timer) clearInterval(MOCK.timer);
    function tick() {
      MOCK.secLeft--;
      const el = q("#mockTimer");
      if (el) el.textContent = fmtTime(MOCK.secLeft);
      if (MOCK.secLeft <= 0) { clearInterval(MOCK.timer); MOCK.timer = null; finishMock(); }
    }
    const e0 = q("#mockTimer"); if (e0) e0.textContent = fmtTime(MOCK.secLeft);
    MOCK.timer = setInterval(tick, 1000);
  }
  function refreshMockMeta() {
    const prog = q(".mock-progress");
    if (prog) prog.innerHTML = `${LS('本卷进度：', 'Section progress: ')}${countAnswered(MOCK.section)}/${MOCK_EXAM.sections[MOCK.section].qs.length} · ${LS('总进度：', 'Total: ')}${totalAnswered()}/${mockFlat()}`;
    qa(".mock-sec-done").forEach((sp, i) => sp.textContent = countAnswered(i) + "/" + MOCK_EXAM.sections[i].qs.length);
  }
  function renderMockExam(body) {
    const sec = MOCK_EXAM.sections[MOCK.section];
    const tabs = MOCK_EXAM.sections.map((s, i) =>
      `<button class="mock-sec-tab ${i === MOCK.section ? "active" : ""}" data-ms="${i}">${L2(s, 'name', 'nameEn')}<span class="mock-sec-done">${countAnswered(i)}/${s.qs.length}</span></button>`
    ).join("");
    let html = "", curPassage = null;
    sec.qs.forEach((qq, qi) => {
      const pass = L2(qq, 'passage', 'passageEn');
      if (qq.passage && pass !== curPassage) {
        curPassage = pass;
        html += `<div class="mock-passage">${curPassage}</div>`;
      }
      const chosen = (MOCK.answers[MOCK.section + ":" + qi] != null) ? MOCK.answers[MOCK.section + ":" + qi] : -1;
      const opts = L2(qq, 'opts', 'optsEn').map((o, oi) =>
        `<button class="mock-opt ${oi === chosen ? "chosen" : ""}" data-q="${qi}" data-o="${oi}">${o}</button>`).join("");
      html += `<div class="mock-q" data-q="${qi}">
        <div class="mock-qq">${qi + 1}. ${L2(qq, 'q', 'qEn')}</div>
        <div class="mock-opts">${opts}</div>
      </div>`;
    });
    body.innerHTML = `
      <div class="mock-bar">
        <div class="mock-timer-wrap">${icon('clock')} <b id="mockTimer">${fmtTime(MOCK.secLeft)}</b></div>
        <div class="mock-secs">${tabs}</div>
        <button class="mock-submit" id="mockSubmitBtn">${_t('mockSubmit')}</button>
      </div>
      <div class="mock-progress">${LS('本卷进度：', 'Section progress: ')}${countAnswered(MOCK.section)}/${sec.qs.length} · ${LS('总进度：', 'Total: ')}${totalAnswered()}/${mockFlat()}</div>
      <div class="mock-qs">${html}</div>`;
    qa(".mock-sec-tab").forEach(t => t.addEventListener("click", function() {
      MOCK.section = +t.getAttribute("data-ms"); renderMockExam(body);
    }));
    qa(".mock-opt").forEach(b => b.addEventListener("click", function() {
      const qi = +b.getAttribute("data-q"), oi = +b.getAttribute("data-o");
      MOCK.answers[MOCK.section + ":" + qi] = oi;
      qa('.mock-q[data-q="' + qi + '"] .mock-opt').forEach(c => c.classList.toggle("chosen", +c.getAttribute("data-o") === oi));
      refreshMockMeta();
    }));
    q("#mockSubmitBtn").addEventListener("click", function() {
      if (confirm(_t('mockConfirm'))) finishMock();
    });
  }
  function finishMock() {
    if (MOCK.timer) { clearInterval(MOCK.timer); MOCK.timer = null; }
    MOCK.active = false; MOCK.finished = true;
    renderMockResult(q("#cnBody"));
  }
  function renderMockResult(body) {
    let totalQ = 0, totalRight = 0;
    const secRows = MOCK_EXAM.sections.map((s, si) => {
      let right = 0; const wrong = [];
      s.qs.forEach((qq, qi) => {
        totalQ++;
        const ans = MOCK.answers[si + ":" + qi];
        if (ans === qq.ans) right++;
        else wrong.push({ qi: qi, q: L2(qq, 'q', 'qEn'), your: (ans != null ? L2(qq, 'opts', 'optsEn')[ans] : _t('notAnswered')), correct: L2(qq, 'opts', 'optsEn')[qq.ans] });
      });
      totalRight += right;
      const pct = Math.round(right / s.qs.length * 100);
      return { name: L2(s, 'name', 'nameEn'), right: right, total: s.qs.length, pct: pct, wrong: wrong };
    });
    const overall = Math.round(totalRight / totalQ * 100);
    const secHTML = secRows.map(r => `
      <div class="mock-res-sec">
        <div class="mock-res-head"><b>${r.name}</b> · ${LS('正确', 'Correct')} ${r.right}/${r.total}（${r.pct}%）</div>
        <div class="mock-res-bar"><div class="mock-res-fill" style="width:${r.pct}%"></div></div>
      </div>`).join("");
    const wrongHTML = secRows.map(r => r.wrong.length ? `
      <div class="mock-res-wrong-sec"><h4>${r.name} · ${LS('错题', 'Wrong')}（${r.wrong.length}）</h4>
        ${r.wrong.map(w => `<div class="mock-res-wrong"><div>${LS('第 ' + (w.qi + 1) + ' 题：', 'Q' + (w.qi + 1) + ': ')}${w.q}</div><div class="mock-res-ans">${LS('你的答案：', 'Your answer: ')}${w.your} ${LS('｜ 正确：', '| Correct: ')}${w.correct}</div></div>`).join("")}
      </div>` : "").join("");
    body.innerHTML = `
      <div class="mock-result">
        <h3>${icon('chart')} ${_t('mockReport')}</h3>
        <div class="mock-res-total">${_t('mockTotal')}<b>${totalRight}</b> / ${totalQ}（${overall}%）</div>
        <p class="mock-res-note">${_t('mockRefNote')}</p>
        ${secHTML}
        <div class="mock-res-actions"><button class="mock-restart" id="mockRestartBtn">${_t('mockRestart')}</button></div>
        <h4 style="margin-top:24px">${_t('wrongAnalysis')}</h4>
        ${wrongHTML || '<div class="mock-res-allok">' + icon('trophy') + ' ' + _t('allCorrect') + '</div>'}
      </div>`;
    q("#mockRestartBtn").addEventListener("click", function() {
      MOCK.active = false; MOCK.finished = false; MOCK.section = 0; MOCK.answers = {}; MOCK.secLeft = MOCK_EXAM.timeLimit;
      renderMock();
    });
  }

  // ═══ Adaptive daily-drill helpers ═══
  function loadMathHist() { try { return JSON.parse(localStorage.getItem("csca_math_hist") || "{}"); } catch (e) { return {}; } }
  function saveMathHist(o) { try { localStorage.setItem("csca_math_hist", JSON.stringify(o)); } catch (e) {} }
  function recordMath(idx, correct) {
    const h = loadMathHist(); const e = h[idx] || { n: 0, c: 0 };
    e.n++; if (correct) e.c++; h[idx] = e; saveMathHist(h);
  }
  function buildAdaptiveQueue() {
    const poolArr = pool();
    const hist = loadMathHist();
    const scored = poolArr.map(p => {
      const idx = PROBLEMS.indexOf(p);
      const hh = hist[idx];
      const n = hh ? hh.n : 0, c = hh ? hh.c : 0;
      const acc = n ? c / n : 0;
      const priority = (n === 0 ? -1 : acc) + n * 0.0005; // unseen first, then low accuracy
      return { p: p, priority: priority };
    });
    scored.sort((a, b) => a.priority - b.priority);
    let q2 = scored.slice(0, state.mmDailyTotal).map(x => x.p);
    if (q2.length < state.mmDailyTotal) {
      const extra = pool().filter(p => !q2.includes(p));
      while (q2.length < state.mmDailyTotal && extra.length) q2.push(extra.shift());
    }
    return q2;
  }

  // ═══ Mental Math Panel ═══
  function renderCalcDefault() {
    renderTechCards();
    renderPoolCount();
    updateDailyStreak();
    qa("#mmFilter .mmf").forEach(x => x.classList.toggle("active", x.getAttribute("data-diff") === state.mmFilter));
    if (state.mmMode === "daily") { renderDailyBar(); if (!currentProblem) generateProblem(); }
    else if (!state.mmTimer) generateProblem();
  }

  const SEED_PROBLEMS = [
    { q: "√37 ≈ ? (精确到 0.1)", a: "6.1", hint: "6²=36, 37-36=1, 1/(2×6)=1/12≈0.083, 6+0.083≈6.1" },
    { q: "lg 18 ≈ ? (lg2=0.301, lg3=0.477)", a: "1.255", hint: "18=2×9=2×3², lg18=lg2+2lg3=0.301+2×0.477=0.301+0.954=1.255" },
    { q: "sin 60° = ?", a: "0.866", hint: "sin60° = √3/2 ≈ 1.732/2 = 0.866" },
    { q: "cos 45° = ?", a: "0.707", hint: "cos45° = √2/2 ≈ 1.414/2 = 0.707" },
    { q: "tan 30° = ?", a: "0.577", hint: "tan30° = sin30°/cos30° = (0.5)/(0.866) ≈ 0.577" },
    { q: "解 x²-7x+12=0", a: "3,4", hint: "因式分解 (x-3)(x-4)=0 → x=3 或 4" },
    { q: "判别式：x²+4x+5=0 有几个实根？", a: "0", hint: "Δ=b²-4ac=16-20=-4<0, 无实根" },
    { q: "200 的 37% = ?", a: "74", hint: "200×25%=50, 200×10%=20, 200×2%=4, 50+20+4=74" },
    { q: "8.5² = ?", a: "72.25", hint: "(8+0.5)²=64+2×8×0.5+0.25=64+8+0.25=72.25" },
    { q: "b²-4ac 中, a=2,b=-6,c=4,=? ", a: "4", hint: "=(-6)²-4×2×4=36-32=4" },
    { q: "log₂32 = ?", a: "5", hint: "2⁵=32, 所以 log₂32=5" },
    { q: "C(5,2) = ? (从 5 个中选 2 个)", a: "10", hint: "C(5,2)=5!/(2!×3!)=120/(2×6)=10" },
    { q: "1.05³ ≈ ? (近似)", a: "1.158", hint: "(1+0.05)³≈1+3×0.05+3×0.0025+0.000125=1+0.15+0.0075+0.000125=1.1576" },
    { q: "6! = ?", a: "720", hint: "6×5×4×3×2×1=720" },
    { q: "∑(1+2+3+…+20) = ?", a: "210", hint: "n(n+1)/2=20×21/2=210" }
  ];

  // Use the expanded bank from data.js if present; fall back to the seed set.
  const PROBLEMS = (typeof MATH_QUESTIONS !== "undefined" && MATH_QUESTIONS.length) ? MATH_QUESTIONS : SEED_PROBLEMS;

  let currentProblem = null;
  let usedProblems = [];
  const DIFF_LABEL = { easy: _t('easy'), medium: _t('medium'), hard: _t('hard') };

  function pool() {
    return PROBLEMS.filter(p => state.mmFilter === "all" || (p.diff || "medium") === state.mmFilter);
  }
  function renderPoolCount() {
    const el = q("#mmPool");
    if (el) el.textContent = _t('poolCount') + pool().length + _t('questions');
  }
  function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function loadDailyLog() {
    try { return JSON.parse(localStorage.getItem("csca_math_daily") || "[]"); } catch (e) { return []; }
  }
  function saveDailyLog(arr) {
    try { localStorage.setItem("csca_math_daily", JSON.stringify(arr)); } catch (e) {}
  }
  function dailyStreak(arr) {
    if (!arr.length) return 0;
    const set = new Set(arr);
    let streak = 0;
    const d = new Date();
    for (let i = 0; ; i++) {
      const key = new Date(d.getTime() - i * 86400000);
      const k = key.getFullYear() + "-" + String(key.getMonth() + 1).padStart(2, "0") + "-" + String(key.getDate()).padStart(2, "0");
      if (set.has(k)) streak++;
      else break;
    }
    return streak;
  }

  function generateProblem() {
    if (state.mmMode === "daily" && state.mmDailyDone >= state.mmDailyTotal) { finishDaily(); return; }
    let prob;
    if (state.mmMode === "daily" && state.mmAdaptive && state.mmDailyQueue.length) {
      prob = state.mmDailyQueue.shift();
    } else {
      let avail = pool().filter(p => !usedProblems.includes(p));
      if (avail.length === 0) { usedProblems = []; avail = pool(); }
      if (avail.length === 0) return;
      prob = avail[Math.floor(Math.random() * avail.length)];
      usedProblems.push(prob);
    }
    currentProblem = prob;
    state.mmCurIdx = PROBLEMS.indexOf(currentProblem);
    const diff = currentProblem.diff || "medium";
    q("#mmProblem").innerHTML = `<span class="mm-diff mm-diff-${diff}">${DIFF_LABEL[diff]}</span>${L2(currentProblem, 'q', 'qEn')}`;
    q("#mmInput").value = "";
    q("#mmFeedback").textContent = "";
    q("#mmNext").hidden = true;
    q("#mmNext").textContent = _t('nextQ');
    q("#mmSubmit").hidden = false;
    q("#mmInput").disabled = false;
    startTimer();
    if (state.mmMode === "daily") renderDailyBar();
  }

  function startTimer() {
    if (state.mmTimer) clearInterval(state.mmTimer);
    let sec = 75;
    const el = q("#mmTimer");
    el.innerHTML = `${sec}<span>${_t('secUnit')}</span>`;
    el.className = "mm-timer";
    state.mmTimer = setInterval(function() {
      sec--;
      el.innerHTML = `${sec}<span>${_t('secUnit')}</span>`;
      if (sec <= 15) el.className = "mm-timer danger";
      else if (sec <= 30) el.className = "mm-timer warn";
      if (sec <= 0) {
        clearInterval(state.mmTimer);
        state.mmTimer = null;
        el.className = "mm-timer danger";
        checkAnswer(true);
      }
    }, 1000);
  }

  function checkAnswer(timeout) {
    if (state.mmTimer) { clearInterval(state.mmTimer); state.mmTimer = null; }
    const input = q("#mmInput").value.trim();
    const correct = currentProblem.a;
    const fb = q("#mmFeedback");
    q("#mmInput").disabled = true;
    q("#mmSubmit").hidden = true;
    q("#mmNext").hidden = false;

    const isRight = (input === correct);
    if (timeout) {
      fb.innerHTML = `⏰ ${_t('timeout')} ${_t('wrongMark')}<b>${correct}</b> &nbsp; ${L2(currentProblem, 'hint', 'hintEn')}`;
      fb.style.color = "#ef4444";
      state.mmStreak = 0;
    } else if (isRight) {
      fb.innerHTML = `${icon('check')} ${_t('correct')} ${L2(currentProblem, 'hint', 'hintEn')}`;
      fb.style.color = "#10b981";
      state.mmStreak++;
      state.mmCount++;
    } else {
      fb.innerHTML = `${icon('cross')} ${_t('wrongMark')}<b>${correct}</b> &nbsp; ${L2(currentProblem, 'hint', 'hintEn')}`;
      fb.style.color = "#ef4444";
      state.mmStreak = 0;
    }
    if (state.mmMode === "daily") {
      state.mmDailyDone++;
      if (isRight) state.mmDailyCorrect++;
      if (state.mmDailyDone >= state.mmDailyTotal) q("#mmNext").textContent = _t('viewScore');
      renderDailyBar();
    }
    recordMath(state.mmCurIdx, isRight);
    q("#mmScoreLabel").textContent = (state.mmMode === "daily") ? _t('todayCorrect') : _t('thisGroup');
    q("#mmScore").textContent = (state.mmMode === "daily") ? state.mmDailyCorrect : state.mmCount;
    q("#mmStreak").textContent = state.mmStreak;
  }

  function renderDailyBar() {
    const bar = q("#mmDailyBar");
    if (!bar) return;
    if (state.mmMode !== "daily") { bar.hidden = true; bar.innerHTML = ""; return; }
    bar.hidden = false;
    const done = state.mmDailyDone, total = state.mmDailyTotal, corr = state.mmDailyCorrect;
    const pct = Math.round(done / total * 100);
    bar.innerHTML = `<div class="mdb-text">${icon('calendar')} ${_t('dailyBar')} <b>${done}</b>/${total} ${_t('dailyCorrect')} <b>${corr}</b></div>
      <div class="mdb-track"><div class="mdb-fill" style="width:${pct}%"></div></div>`;
  }

  function startDaily() {
    state.mmMode = "daily";
    state.mmDailyDone = 0;
    state.mmDailyCorrect = 0;
    usedProblems = [];
    state.mmDailyQueue = state.mmAdaptive ? buildAdaptiveQueue() : [];
    if (state.mmTimer) { clearInterval(state.mmTimer); state.mmTimer = null; }
    q("#mmDailyBtn").textContent = _t('exitDaily');
    renderDailyBar();
    generateProblem();
  }

  function exitDaily() {
    state.mmMode = "free";
    state.mmDailyDone = 0;
    state.mmDailyCorrect = 0;
    usedProblems = [];
    q("#mmDailyBtn").innerHTML = icon('calendar') + " " + _t('daily10');
    renderDailyBar();
    if (state.mmTimer) { clearInterval(state.mmTimer); state.mmTimer = null; }
    generateProblem();
  }

  function finishDaily() {
    const corr = state.mmDailyCorrect, total = state.mmDailyTotal;
    const pct = Math.round(corr / total * 100);
    const log = loadDailyLog();
    const today = todayStr();
    if (!log.includes(today)) { log.push(today); saveDailyLog(log); }
    const streak = dailyStreak(log);
    const bar = q("#mmDailyBar");
    if (bar) {
      bar.hidden = false;
      bar.innerHTML = `<div class="mdb-done">${icon('check')} ${_t('dailyDone')} <b>${corr}</b>/${total}（${pct}%）${
        streak > 1 ? ` · ${icon('fire')} ${_t('streakDays2')} <b>${streak}</b> ${_t('days')}` : ` · ${_t('todayDone')}`}</div>`;
    }
    updateDailyStreak();
    // reset to free mode but keep summary visible until user acts
    state.mmMode = "free";
    q("#mmDailyBtn").innerHTML = icon('calendar') + " " + _t('daily10');
    q("#mmNext").textContent = _t('nextQ');
    q("#mmScoreLabel").textContent = _t('thisGroup');
    q("#mmScore").textContent = state.mmCount;
  }

  function updateDailyStreak() {
    const el = q("#mmDailyStreak");
    if (!el) return;
    const log = loadDailyLog();
    const streak = dailyStreak(log);
    const done = log.includes(todayStr());
    if (streak > 0) el.innerHTML = `${icon('fire')} ${_t('streakDays2')} <b>${streak}</b> ${_t('days')}${done ? _t('todayFinished') : ""}`;
    else el.textContent = "";
  }

  q("#mmSubmit").addEventListener("click", function() { checkAnswer(false); });
  q("#mmNext").addEventListener("click", function() {
    if (state.mmMode === "daily" && state.mmDailyDone >= state.mmDailyTotal) finishDaily();
    else generateProblem();
  });
  q("#mmInput").addEventListener("keydown", function(e) {
    if (e.key === "Enter" && !q("#mmSubmit").hidden) checkAnswer(false);
    else if (e.key === "Enter" && !q("#mmNext").hidden) {
      if (state.mmMode === "daily" && state.mmDailyDone >= state.mmDailyTotal) finishDaily();
      else generateProblem();
    }
  });

  qa("#mmFilter .mmf").forEach(b => b.addEventListener("click", function() {
    state.mmFilter = b.getAttribute("data-diff");
    qa("#mmFilter .mmf").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderPoolCount();
    // switching difficulty exits any active daily run and shows a fresh problem
    if (state.mmMode === "daily") { state.mmMode = "free"; q("#mmDailyBtn").innerHTML = icon('calendar') + " " + _t('daily10'); }
    usedProblems = [];
    if (state.mmTimer) { clearInterval(state.mmTimer); state.mmTimer = null; }
    generateProblem();
  }));
  q("#mmDailyBtn").addEventListener("click", function() {
    if (state.mmMode === "daily") exitDaily();
    else startDaily();
  });
  q("#mmAdaptiveBtn").addEventListener("click", function() {
    state.mmAdaptive = !state.mmAdaptive;
    q("#mmAdaptiveBtn").classList.toggle("active", state.mmAdaptive);
    q("#mmAdaptiveBtn").innerHTML = state.mmAdaptive ? icon('target') + " " + _t('adaptiveOn') : icon('target') + " " + _t('adaptive');
    if (state.mmMode === "daily") startDaily();
    renderPoolCount();
  });

  function renderTechCards() {
    q("#mmTech").innerHTML = MATH_TECHNIQUES.map(t =>
      `<div class="mm-tech-card">
        <h4><span class="l-zh">${t.title}</span> <span class="tec-en">${t.en}</span></h4>
        <p class="tec-desc">${L2(t, 'desc', 'descEn')}</p>
        <div class="tec-ex">${L2(t, 'example', 'exampleEn')}</div>
        <div class="tec-tip">${icon('bulb')} ${L2(t, 'tip', 'tipEn')}</div>
      </div>`
    ).join("");
  }

  // ═══ Gap Diagnosis Panel ═══
  function renderDXForm() { /* form already in HTML */ }

  q("#dxRun").addEventListener("click", function() {
    const bg = q("#dxBg").value;
    if (!bg) { q("#dxResult").innerHTML = '<div class="cl-empty"><h3>' + _t('dxEmpty') + '</h3></div>'; return; }
    const map = CURRICULUM_MAPS[bg];
    if (!map) return;
    const dateStr = q("#dxDate").value;
    if (dateStr) { try { localStorage.setItem("csca_exam_date", dateStr); } catch (e) {} renderCountdown(); }
    let daysUntil = 90;
    if (dateStr) {
      const examDate = new Date(dateStr);
      const today = new Date();
      daysUntil = Math.max(1, Math.round((examDate - today) / (1000 * 60 * 60 * 24)));
    }
    const mathChecked = q('input[name="dx-math"]').checked;
    const physChecked = q('input[name="dx-phys"]').checked;
    const chemChecked = q('input[name="dx-chem"]').checked;
    const subs = [];
    if (mathChecked) subs.push(_t('subjMath'));
    if (physChecked) subs.push(_t('subjPhys'));
    if (chemChecked) subs.push(_t('subjChem'));

    // Generate a realistic study plan
    const gapItems = L2(map, 'gaps', 'gapsEn');
    const phases = [
      { label: _t('dxPhase1'), days: Math.round(daysUntil * 0.5), items: gapItems, desc: L2(map, 'tips', 'tipsEn') },
      { label: _t('dxPhase2'), days: Math.round(daysUntil * 0.3), items: [
          LS("每天 1 套 60 分钟 48 题模考", "1 full mock (60 min, 48 Q) daily"),
          LS("错题归类 + 回看对应的基础课知识点", "Categorize wrong answers + revisit the related foundation lessons")
        ], desc: LS("目标：模考 60 分钟 ≥ 70 分，错题不超过 10 道", "Goal: mock 60 min ≥ 70, no more than 10 wrong") },
      { label: _t('dxPhase3'), days: Math.round(daysUntil * 0.2), items: [
          LS("限时 75 秒/题压力训练", "Timed pressure drill: 75 s/Q"),
          LS("仅练错题和高频考点", "Drill only wrong answers and high-frequency exam points"),
          LS("手算速度专项", "Mental-math speed drills")
        ], desc: LS("目标：稳定 80+，进入考场不慌", "Goal: steady 80+, walk in calm") }
    ];

    const subjJoin = LANG === "en" ? ", " : "、";
    let planHTML = `<div class="dx-summary"><h3>${icon('chart')} ${_t('dxReport')}</h3>
      <p><b>${_t('yourBg')}</b>${map.name} &nbsp;|&nbsp; ${_t('chooseSubj')}${subs.join(subjJoin)} &nbsp;|&nbsp; ${_t('daysUntil')}${daysUntil} ${_t('days')}</p>
      <p><b>${_t('dxStrengths')}</b>${map.strengths.join(subjJoin)}</p>
      </div>
      <div class="dx-gap"><h4>${icon('warn')} ${_t('dxGaps')}</h4><ul>${gapItems.map(g => `<li>${g}</li>`).join('')}</ul></div>
      <div class="dx-gap"><h4>${icon('bulb')} ${_t('dxStrategy')}</h4><p style="font-size:14px">${L2(map, 'tips', 'tipsEn')}</p></div>
      <h3 style="margin:20px 0 12px">${icon('calendar')} ${_t('dailyPlan')}${daysUntil}${_t('daysCountdown')}</h3>`;

    let dayNum = 1;
    phases.forEach(phase => {
      planHTML += `<div class="dx-plan"><h4>${icon('pin')} ${phase.label}（${phase.days} ${_t('days')}）</h4><p style="font-size:13px;color:var(--muted);margin:0 0 8px">${phase.desc}</p>`;
      phase.items.forEach(item => {
        planHTML += `<div class="dx-plan-day"><div class="day-num">${dayNum++}</div><div class="day-task">${item}</div></div>`;
      });
      planHTML += `</div>`;
    });

    q("#dxResult").innerHTML = planHTML;
  });

  // ═══ Exam countdown chip (header) ═══
  function renderCountdown() {
    const el = q("#clCountdown");
    if (!el) return;
    let ds = null;
    try { ds = localStorage.getItem("csca_exam_date"); } catch (e) {}
    if (!ds) { el.hidden = true; return; }
    const d = new Date(ds + "T00:00:00");
    if (isNaN(d.getTime())) { el.hidden = true; return; }
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = Math.round((d - today) / 86400000);
    if (days > 0) {
      el.innerHTML = icon('clock') + " " + LS(`距考试 ${days} 天`, `${days} days to exam`);
      el.title = LS("点击前往诊断，可修改考试日期", "Click to open Diagnostic and change the exam date");
    } else if (days === 0) {
      el.innerHTML = icon('clock') + " " + LS("今天考试", "Exam is today");
      el.title = LS("点击前往诊断", "Open Diagnostic");
    } else {
      el.innerHTML = icon('clock') + " " + LS("考试日已过", "Exam date passed");
      el.title = LS("点击前往诊断，重新设置考试日期", "Open Diagnostic to reset the exam date");
    }
    el.hidden = false;
  }
  const clCountdownEl = q("#clCountdown");
  if (clCountdownEl) clCountdownEl.addEventListener("click", function() {
    const t = document.querySelector('.cl-tab[data-panel="dx"]'); if (t) t.click();
  });
  const dxDateEl = q("#dxDate");
  if (dxDateEl) dxDateEl.addEventListener("change", function() {
    const v = dxDateEl.value;
    if (v) { try { localStorage.setItem("csca_exam_date", v); } catch (e) {} }
    renderCountdown();
  });
  (function prefillDxDate() {
    try { const v = localStorage.getItem("csca_exam_date"); const inp = q("#dxDate"); if (v && inp && !inp.value) inp.value = v; } catch (e) {}
  })();

  // ═══ Instrument Simulator (仪器模拟) — 4 instruments ═══
  const SIM = { instrument: "caliper", score: 0, total: 0, drag: false, val: 0,
    streak: 0, best: 0, achieved: false,
    calPos: 20, calTarget: 20,
    microPos: 5, microTarget: 5,
    swAngle: 0, swTarget: 0,
    amAngle: 0, amTarget: 0 };

  function loadSimWrong() { try { return JSON.parse(localStorage.getItem("csca_sim_wrong") || "[]"); } catch (e) { return []; } }
  function saveSimWrong(a) { try { localStorage.setItem("csca_sim_wrong", JSON.stringify(a.slice(-30))); } catch (e) {} }
  function loadSimBest() { try { return parseInt(localStorage.getItem("csca_sim_best") || "0", 10) || 0; } catch (e) { return 0; } }
  function saveSimBest(v) { try { localStorage.setItem("csca_sim_best", String(v)); } catch (e) {} }

  const INSTRUMENTS = [
    { id: "caliper", name: "游标卡尺", en: "Vernier Caliper", prec: "0.02 mm", est: "不估读" },
    { id: "micrometer", name: "螺旋测微器", en: "Micrometer", prec: "0.01 mm", est: "估读 0.001" },
    { id: "stopwatch", name: "秒表", en: "Stopwatch", prec: "0.1 s", est: "机械秒表" },
    { id: "ammeter", name: "电流表", en: "Ammeter 0–3 A", prec: "0.1 A", est: "半格估读" }
  ];

  function renderSim() {
    SIM.best = loadSimBest();
    SIM.achieved = (function() { try { return !!localStorage.getItem("csca_sim_achieved"); } catch (e) { return false; } })();
    const tabs = INSTRUMENTS.map(i =>
      `<button class="sim-instr-tab ${i.id === SIM.instrument ? "active" : ""}" data-instr="${i.id}"><span class="l-zh">${i.name}</span><span class="si-en">${i.en}</span></button>`
    ).join("");
    q("#simStage").innerHTML = `
      <div class="sim-wrap">
        <div class="sim-instr-tabs">${tabs}</div>
        <div id="simInstr"></div>
        <div class="sim-readout">
          <div class="sim-live">${_t('simReading')} <b id="simLive">0.00</b></div>
          <div class="sim-scoreboard">
            <span class="sb-item">${_t('simScore')} <b id="simScore">${SIM.score}</b> / <span id="simTotal">${SIM.total}</span></span>
            <span class="sb-item sb-streak">${_t('simStreak')} <b id="simStreak">${SIM.streak}</b></span>
            <span class="sb-item sb-best">${_t('simBestStreak')} <b id="simBest">${SIM.best}</b></span>
            <span id="simAch" class="sim-ach ${SIM.best >= 10 ? "on" : ""}">${icon('trophy')} ${_t('simAchieve10')}</span>
          </div>
        </div>
        <div class="sim-controls">
          <button id="simSubmit" class="sim-btn sim-btn-primary">${_t('simSubmitReading')}</button>
          <button id="simNew" class="sim-btn">${_t('simNextObj')}</button>
          <button id="simWrong" class="sim-btn sim-btn-ghost">${icon('notebook')} ${_t('simWrongBook')} (<span id="simWrongN">0</span>)</button>
        </div>
        <div class="sim-feedback" id="simFeedback"></div>
        <div class="sim-hint" id="simHint"></div>
        <div class="sim-wronglist" id="simWrongList" hidden></div>
      </div>`;
    qa(".sim-instr-tab").forEach(t => t.addEventListener("click", () => simSwitchTo(t.getAttribute("data-instr"))));
    q("#simSubmit").addEventListener("click", simSubmit);
    q("#simNew").addEventListener("click", simNewTarget);
    q("#simWrong").addEventListener("click", function() {
      const el = q("#simWrongList");
      el.hidden = !el.hidden;
      renderWrongList();
    });
    renderWrongList();
    simBuild();
  }

  function simSwitchTo(id) {
    SIM.instrument = id;
    qa(".sim-instr-tab").forEach(t => t.classList.toggle("active", t.getAttribute("data-instr") === id));
    simBuild();
  }

  function renderWrongList() {
    const el = q("#simWrongList");
    const n = q("#simWrongN");
    const arr = loadSimWrong();
    if (n) n.textContent = arr.length;
    if (!el || el.hidden) return;
    if (!arr.length) { el.innerHTML = '<div class="swl-empty">' + _t('simNoWrong') + icon('trophy') + ' ' + _t('simAchieveWord') + '</div>'; return; }
    const names = Object.fromEntries(INSTRUMENTS.map(i => [i.id, i.en]));
    const units = { caliper: "mm", micrometer: "mm", stopwatch: "s", ammeter: "A" };
    const dec = { caliper: 2, micrometer: 3, stopwatch: 1, ammeter: 2 };
    el.innerHTML = arr.slice().reverse().map((e, i) => {
      const idx = arr.length - 1 - i;
      const real = (typeof e.target === "number") ? e.target.toFixed(dec[e.instr] || 2) : e.target;
      return `<div class="swl-item">
        <div class="swl-info"><b>${names[e.instr] || e.instr}</b> · ${_t('simYourReading')} ${e.gotStr || "—"} · ${_t('simCorrectWord')} <b>${real} ${units[e.instr]}</b></div>
        <button class="swl-prac" data-wi="${idx}">${LS('重练', 'Retry')}</button>
      </div>`;
    }).join("");
    qa("#simWrongList .swl-prac").forEach(b => b.addEventListener("click", function() {
      const e = loadSimWrong()[+b.getAttribute("data-wi")];
      if (e) simPracticeWrong(e);
    }));
  }

  function simPracticeWrong(e) {
    simSwitchTo(e.instr);
    simNewTargetFixed(e.target);
    const fb = q("#simFeedback");
    if (fb) { fb.textContent = _t('simRetryMode'); fb.style.color = "var(--blue)"; }
    q("#simWrongList").hidden = true;
  }

  function simBuild() {
    ({ caliper: buildCaliper, micrometer: buildMicrometer, stopwatch: buildStopwatch, ammeter: buildAmmeter }[SIM.instrument])();
  }

  function simPointerDown(e) { SIM.drag = true; simSetFromEvent(e); e.preventDefault(); }
  function simPointerMove(e) { if (SIM.drag) simSetFromEvent(e); }
  function simPointerUp() { SIM.drag = false; }
  window.addEventListener("pointerup", simPointerUp);

  function simSetFromEvent(e) {
    ({ caliper: calSetFromEvent, micrometer: microSetFromEvent, stopwatch: swSetFromEvent, ammeter: amSetFromEvent }[SIM.instrument])(e);
  }
  function simNewTarget() {
    ({ caliper: calNewTarget, micrometer: microNewTarget, stopwatch: swNewTarget, ammeter: amNewTarget }[SIM.instrument])();
  }
  function simSubmit() {
    const tol = { caliper: 0.02, micrometer: 0.01, stopwatch: 0.1, ammeter: 0.05 }[SIM.instrument];
    const tgt = { caliper: SIM.calTarget, micrometer: SIM.microTarget, stopwatch: SIM.swTarget, ammeter: SIM.amTarget }[SIM.instrument];
    const unit = { caliper: " mm", micrometer: " mm", stopwatch: " s", ammeter: " A" }[SIM.instrument];
    const diff = Math.abs(SIM.val - tgt);
    SIM.total++;
    const fb = q("#simFeedback");
    const fmt = (v) => (SIM.instrument === "stopwatch" ? v.toFixed(1) : SIM.instrument === "ammeter" ? v.toFixed(2) : v.toFixed(2));
    let correct = false;
    if (diff <= tol) {
      correct = true; SIM.score++; SIM.streak++;
      fb.innerHTML = `${icon('check')} ${_t('simCorrect')} ${fmt(SIM.val)}${unit}, ${_t('simTrueValue')} ${fmt(tgt)}${unit}.`;
      fb.style.color = "#10b981";
    } else if (diff <= tol * 3) {
      SIM.streak = 0;
      fb.innerHTML = `${icon('warn')} ${_t('simClose')}${fmt(diff)}${unit}. ${_t('simRightReading')} ${fmt(tgt)}${unit}.`;
      fb.style.color = "#d97706";
    } else {
      SIM.streak = 0;
      fb.innerHTML = `${icon('cross')} ${_t('simFar')}${fmt(diff)}${unit}. ${_t('simRightReading')} ${fmt(tgt)}${unit}.`;
      fb.style.color = "#ef4444";
    }
    if (!correct) {
      const arr = loadSimWrong();
      arr.push({ instr: SIM.instrument, target: tgt, got: SIM.val, gotStr: fmt(SIM.val) + unit });
      saveSimWrong(arr);
    }
    if (SIM.streak > SIM.best) { SIM.best = SIM.streak; saveSimBest(SIM.best); }
    if (SIM.streak >= 10 && !SIM.achieved) {
      SIM.achieved = true;
      try { localStorage.setItem("csca_sim_achieved", "1"); } catch (e) {}
      const ach = q("#simAch");
      if (ach) { ach.classList.add("on"); ach.innerHTML = icon('trophy') + " " + _t('simAchieve10'); }
      if (fb) { fb.innerHTML += " &nbsp; " + icon('trophy') + " " + _t('simAchieveUnlock'); }
    }
    const sc = q("#simScore"); if (sc) sc.textContent = SIM.score;
    const tot = q("#simTotal"); if (tot) tot.textContent = SIM.total;
    const st = q("#simStreak"); if (st) st.textContent = SIM.streak;
    const bs = q("#simBest"); if (bs) bs.textContent = SIM.best;
    renderWrongList();
  }

  function simNewTargetFixed(val) {
    ({ caliper: () => calNewTarget(val), micrometer: () => microNewTarget(val), stopwatch: () => swNewTarget(val), ammeter: () => amNewTarget(val) }[SIM.instrument])();
  }

  const SW_CX = 380, SW_CY = 140, SW_R = 110;
  const AM_CX = 380, AM_CY = 220, AM_R = 170;

  // ── Caliper (50-division vernier) ──
  function buildCaliper() {
    const margin = 70, pxPerMm = 4, mainLen = 150;
    let mainTicks = "";
    for (let m = 0; m <= mainLen; m++) {
      const x = margin + m * pxPerMm;
      let h = 10, w = 1.5, lbl = "";
      if (m % 10 === 0) { h = 26; w = 2; lbl = m; }
      else if (m % 5 === 0) { h = 18; w = 1.5; }
      mainTicks += `<line x1="${x}" y1="120" x2="${x}" y2="${120 - h}" stroke="#334155" stroke-width="${w}"/>`;
      if (lbl !== "") mainTicks += `<text x="${x}" y="${120 - h - 6}" font-size="12" text-anchor="middle" fill="#475569">${lbl}</text>`;
    }
    let vernier = "";
    for (let k = 0; k <= 50; k++) {
      const vx = k * 0.98 * pxPerMm;
      let h = 8, w = 1;
      if (k % 5 === 0) { h = 14; w = 1.4; }
      vernier += `<line class="vtick" data-k="${k}" x1="${vx}" y1="150" x2="${vx}" y2="${150 + h}" stroke="#64748b" stroke-width="${w}"/>`;
      if (k % 10 === 0) vernier += `<text x="${vx}" y="${150 + h + 12}" font-size="10" text-anchor="middle" fill="#94a3b8">${k}</text>`;
    }
    q("#simInstr").innerHTML = `
      <div class="sim-caliper"><svg id="simSvg" viewBox="0 0 760 250" width="100%" style="touch-action:none;user-select:none;cursor:ew-resize">
        <rect x="0" y="116" width="760" height="8" fill="#cbd5e1"/>
        ${mainTicks}
        <rect x="${margin - 4}" y="124" width="8" height="116" fill="#94a3b8"/>
        <rect id="simObject" x="${margin}" y="196" width="80" height="34" rx="3" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
        <g id="simMovable" transform="translate(0,0)">
          <rect x="${margin - 4}" y="124" width="8" height="116" fill="#475569"/>
          <rect x="${margin - 4}" y="116" width="48" height="6" fill="#475569"/>
          <line x1="${margin}" y1="150" x2="${margin + 50 * 0.98 * pxPerMm}" y2="150" stroke="#64748b" stroke-width="1"/>
          ${vernier}
        </g>
      </svg></div>`;
    q("#simHint").innerHTML = icon('ruler') + " " + LS("50 分度游标卡尺：精度 0.02 mm。读数 = 主尺整数(mm) + 游标对齐格 × 0.02。<b>游标卡尺不估读</b>。",
      "50-division vernier caliper: precision 0.02 mm. Reading = main-scale integer (mm) + vernier-aligned division × 0.02. <b>No estimation on the vernier.</b>");
    const svg = q("#simSvg");
    svg.addEventListener("pointerdown", simPointerDown);
    svg.addEventListener("pointermove", simPointerMove);
    calNewTarget();
  }
  function calReading(pos) {
    const main = Math.floor(pos);
    const digit = Math.round((pos - main) / 0.02);
    return main + digit * 0.02;
  }
  function calHighlight() {
    const digit = Math.round((SIM.calPos - Math.floor(SIM.calPos)) / 0.02);
    qa("#simMovable .vtick").forEach(t => {
      const k = +t.getAttribute("data-k");
      t.setAttribute("stroke", k === digit ? "#ef4444" : "#64748b");
      t.setAttribute("stroke-width", k === digit ? "2" : "1");
    });
  }
  function calSetFromEvent(e) {
    const svg = q("#simSvg");
    const r = svg.getBoundingClientRect();
    const vx = (e.clientX - r.left) / r.width * 760;
    const margin = 70, pxPerMm = 4;
    let pos = (vx - margin) / pxPerMm;
    pos = Math.max(0, Math.min(150, pos));
    SIM.calPos = Math.round(pos * 50) / 50;
    q("#simMovable").setAttribute("transform", `translate(${SIM.calPos * pxPerMm},0)`);
    SIM.val = calReading(SIM.calPos);
    q("#simLive").textContent = SIM.val.toFixed(2);
    calHighlight();
  }
  function calNewTarget(fixed) {
    const L = (fixed != null) ? fixed : Math.round((8 + Math.random() * 52) / 0.02) * 0.02;
    SIM.calTarget = L;
    q("#simObject").setAttribute("width", (L * 4).toFixed(2));
    SIM.calPos = Math.min(150, L + (fixed != null ? (6 + Math.random() * 20) : 25));
    q("#simMovable").setAttribute("transform", `translate(${SIM.calPos * 4},0)`);
    SIM.val = calReading(SIM.calPos);
    q("#simLive").textContent = SIM.val.toFixed(2);
    const fb = q("#simFeedback");
    if (fb) { fb.textContent = ""; fb.style.color = "var(--muted)"; }
    calHighlight();
  }

  // ── Micrometer (螺旋测微器) ──
  function buildMicrometer() {
    const margin = 70, pxPerMm = 12, half = 6;
    let sleeve = "";
    for (let m = 0; m <= 50; m++) {
      const x = margin + m * half;
      const isMajor = m % 2 === 0;
      const h = isMajor ? 22 : 12;
      sleeve += `<line x1="${x}" y1="120" x2="${x}" y2="${120 - h}" stroke="#334155" stroke-width="${isMajor ? 2 : 1}"/>`;
      if (isMajor) sleeve += `<text x="${x}" y="${120 - h - 6}" font-size="11" text-anchor="middle" fill="#475569">${m/2}</text>`;
    }
    let thimble = "";
    for (let k = 0; k <= 50; k++) {
      const vx = k * half;
      const h = (k % 5 === 0) ? 16 : 9;
      thimble += `<line class="mtick" data-k="${k}" x1="${vx}" y1="150" x2="${vx}" y2="${150 + h}" stroke="#64748b" stroke-width="1"/>`;
      if (k % 10 === 0) thimble += `<text x="${vx}" y="${150 + h + 12}" font-size="10" text-anchor="middle" fill="#94a3b8">${k}</text>`;
    }
    q("#simInstr").innerHTML = `
      <div class="sim-caliper"><svg id="simSvg" viewBox="0 0 760 250" width="100%" style="touch-action:none;user-select:none;cursor:ew-resize">
        <rect x="0" y="116" width="760" height="8" fill="#cbd5e1"/>
        ${sleeve}
        <rect id="simObject" x="${margin}" y="196" width="120" height="34" rx="3" fill="#fca5a5" stroke="#ef4444" stroke-width="1.5"/>
        <g id="simMovable" transform="translate(0,0)">
          <rect x="${margin - 4}" y="124" width="8" height="116" fill="#475569"/>
          <rect x="${margin - 4}" y="116" width="40" height="6" fill="#475569"/>
          <line x1="${margin}" y1="150" x2="${margin + 50 * half}" y2="150" stroke="#64748b" stroke-width="1"/>
          ${thimble}
          <line x="${margin - 4}" y1="100" x2="${margin - 4}" y2="160" stroke="#ef4444" stroke-width="2"/>
        </g>
      </svg></div>`;
    q("#simHint").innerHTML = LS("螺旋测微器：精度 0.01 mm。读数 = 套筒整毫米 + 0.5 mm 格 + 旋钮对齐格 × 0.01。<b>需估读一位</b>（此处按 0.01 判定）。",
      "Micrometer: precision 0.01 mm. Reading = sleeve whole-mm + 0.5 mm division + thimble-aligned division × 0.01. <b>Estimate one extra digit.</b> (judged at 0.01 here).");
    const svg = q("#simSvg");
    svg.addEventListener("pointerdown", simPointerDown);
    svg.addEventListener("pointermove", simPointerMove);
    microNewTarget();
  }
  function microReading(pos) {
    const base = Math.floor(pos * 2) / 2;
    const d = Math.round((pos - base) * 100);
    return base + d * 0.01;
  }
  function microHighlight() {
    const base = Math.floor(SIM.microPos * 2) / 2;
    const d = Math.round((SIM.microPos - base) * 100);
    qa("#simMovable .mtick").forEach(t => {
      const k = +t.getAttribute("data-k");
      t.setAttribute("stroke", k === d ? "#ef4444" : "#64748b");
      t.setAttribute("stroke-width", k === d ? "2" : "1");
    });
  }
  function microSetFromEvent(e) {
    const svg = q("#simSvg");
    const r = svg.getBoundingClientRect();
    const vx = (e.clientX - r.left) / r.width * 760;
    let pos = (vx - 70) / 12;
    pos = Math.max(0, Math.min(25, pos));
    SIM.microPos = Math.round(pos * 100) / 100;
    q("#simMovable").setAttribute("transform", `translate(${SIM.microPos * 12},0)`);
    SIM.val = microReading(SIM.microPos);
    q("#simLive").textContent = SIM.val.toFixed(3);
    microHighlight();
  }
  function microNewTarget(fixed) {
    const L = (fixed != null) ? fixed : Math.round((1 + Math.random() * 23) * 100) / 100;
    SIM.microTarget = L;
    SIM.microPos = Math.min(25, L + (fixed != null ? (2 + Math.random() * 6) : 4));
    q("#simMovable").setAttribute("transform", `translate(${SIM.microPos * 12},0)`);
    SIM.val = microReading(SIM.microPos);
    q("#simLive").textContent = SIM.val.toFixed(3);
    const fb = q("#simFeedback");
    if (fb) { fb.textContent = ""; fb.style.color = "var(--muted)"; }
    microHighlight();
  }

  // ── Stopwatch (机械秒表) ──
  function buildStopwatch() {
    const cx = SW_CX, cy = SW_CY, R = SW_R;
    let ticks = "";
    for (let s = 0; s < 60; s++) {
      const ang = s * 6 - 90;
      const rad = ang * Math.PI / 180;
      const isMajor = s % 5 === 0;
      const r1 = R, r2 = R - (isMajor ? 16 : 8);
      const x1 = cx + r1 * Math.cos(rad), y1 = cy + r1 * Math.sin(rad);
      const x2 = cx + r2 * Math.cos(rad), y2 = cy + r2 * Math.sin(rad);
      ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#334155" stroke-width="${isMajor?2:1}"/>`;
      if (isMajor) ticks += `<text x="${cx + (R-30)*Math.cos(rad)}" y="${cy + (R-30)*Math.sin(rad)+4}" font-size="11" text-anchor="middle" fill="#475569">${s}</text>`;
    }
    q("#simInstr").innerHTML = `
      <div class="sim-caliper"><svg id="simSvg" viewBox="0 0 760 280" width="100%" style="touch-action:none;user-select:none;cursor:pointer">
        <circle cx="${cx}" cy="${cy}" r="${R+14}" fill="#fff" stroke="#cbd5e1" stroke-width="2"/>
        <circle cx="${cx}" cy="${cy}" r="${R}" fill="#f8fafc" stroke="#e2e8f0"/>
        ${ticks}
        <g id="simHand">
          <line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy-R+18}" stroke="#ef4444" stroke-width="2.5"/>
          <circle cx="${cx}" cy="${cy}" r="6" fill="#475569"/>
        </g>
      </svg></div>`;
    q("#simHint").innerHTML = LS("⏱ 机械秒表：大表盘每格 1 秒（大刻度 5 秒），读数精确到 0.1 秒。拖动指针到正确位置。",
      "⏱ Mechanical stopwatch: the large dial is 1 s per division (major ticks every 5 s), reading precise to 0.1 s. Drag the hand to the correct position.");
    const svg = q("#simSvg");
    svg.addEventListener("pointerdown", simPointerDown);
    svg.addEventListener("pointermove", simPointerMove);
    swNewTarget();
  }
  function swReading() {
    return Math.round((SIM.swAngle / 6) * 10) / 10;
  }
  function swSetFromEvent(e) {
    const svg = q("#simSvg");
    const r = svg.getBoundingClientRect();
    const cx = SW_CX, cy = SW_CY;
    const x = (e.clientX - r.left) / r.width * 760;
    const y = (e.clientY - r.top) / r.height * 280;
    let ang = Math.atan2(y - cy, x - cx) * 180 / Math.PI + 90;
    if (ang < 0) ang += 360;
    SIM.swAngle = ang;
    const rad = ang * Math.PI / 180;
    const len = SW_R - 18;
    q("#simHand").innerHTML = `<line x1="${cx}" y1="${cy}" x2="${cx + len*Math.cos(rad)}" y2="${cy + len*Math.sin(rad)}" stroke="#ef4444" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="6" fill="#475569"/>`;
    SIM.val = swReading();
    q("#simLive").textContent = SIM.val.toFixed(1) + " s";
  }
  function swNewTarget(fixed) {
    SIM.swTarget = (fixed != null) ? fixed : Math.round((Math.random() * 59 + 0.1) * 10) / 10;
    SIM.swAngle = (SIM.swTarget * 6) % 360;
    const rad = SIM.swAngle * Math.PI / 180;
    const len = SW_R - 18;
    q("#simHand").innerHTML = `<line x1="${SW_CX}" y1="${SW_CY}" x2="${SW_CX + len*Math.cos(rad)}" y2="${SW_CY + len*Math.sin(rad)}" stroke="#ef4444" stroke-width="2.5"/><circle cx="${SW_CX}" cy="${SW_CY}" r="6" fill="#475569"/>`;
    SIM.val = swReading();
    q("#simLive").textContent = SIM.val.toFixed(1) + " s";
    const fb = q("#simFeedback");
    if (fb) { fb.textContent = ""; fb.style.color = "var(--muted)"; }
  }

  // ── Ammeter (电流表 0–3 A) ──
  function buildAmmeter() {
    const cx = AM_CX, cy = AM_CY, R = AM_R;
    const a0 = -60, a1 = 60;
    let ticks = "";
    for (let v = 0; v <= 30; v++) {
      const frac = v / 30;
      const ang = a0 + frac * (a1 - a0);
      const rad = ang * Math.PI / 180;
      const isMajor = v % 5 === 0;
      const r1 = R, r2 = R - (isMajor ? 18 : 9);
      const x1 = cx + r1*Math.cos(rad), y1 = cy + r1*Math.sin(rad);
      const x2 = cx + r2*Math.cos(rad), y2 = cy + r2*Math.sin(rad);
      ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#334155" stroke-width="${isMajor?2:1}"/>`;
      if (isMajor) ticks += `<text x="${cx + (R-32)*Math.cos(rad)}" y="${cy + (R-32)*Math.sin(rad)+4}" font-size="12" text-anchor="middle" fill="#475569">${(v/10).toFixed(1)}</text>`;
    }
    q("#simInstr").innerHTML = `
      <div class="sim-caliper"><svg id="simSvg" viewBox="0 0 760 260" width="100%" style="touch-action:none;user-select:none;cursor:pointer">
        <path d="M ${cx + R*Math.cos(a0*Math.PI/180)} ${cy + R*Math.sin(a0*Math.PI/180)} A ${R} ${R} 0 0 1 ${cx + R*Math.cos(a1*Math.PI/180)} ${cy + R*Math.sin(a1*Math.PI/180)}" fill="none" stroke="#cbd5e1" stroke-width="2"/>
        ${ticks}
        <g id="simNeedle"><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${cy - R + 20}" stroke="#ef4444" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="7" fill="#475569"/></g>
      </svg></div>`;
    q("#simHint").innerHTML = LS("电流表（0–3 A 量程）：每小格 0.1 A，估读到半格（0.05 A）。拖动指针到正确刻度。",
      "Ammeter (0–3 A range): 0.1 A per small division, estimate to half a division (0.05 A). Drag the needle to the correct scale mark.");
    const svg = q("#simSvg");
    svg.addEventListener("pointerdown", simPointerDown);
    svg.addEventListener("pointermove", simPointerMove);
    amNewTarget();
  }
  function amReading() {
    let frac = (SIM.amAngle - (-60)) / 120;
    frac = Math.max(0, Math.min(1, frac));
    return Math.round(frac * 30) / 10;
  }
  function amSetFromEvent(e) {
    const svg = q("#simSvg");
    const r = svg.getBoundingClientRect();
    const cx = AM_CX, cy = AM_CY;
    const x = (e.clientX - r.left) / r.width * 760;
    const y = (e.clientY - r.top) / r.height * 260;
    let ang = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
    if (ang < -90) ang = -90; if (ang > 90) ang = 90;
    SIM.amAngle = ang;
    const rad = ang * Math.PI / 180;
    const len = AM_R - 20;
    q("#simNeedle").innerHTML = `<line x1="${cx}" y1="${cy}" x2="${cx + len*Math.cos(rad)}" y2="${cy + len*Math.sin(rad)}" stroke="#ef4444" stroke-width="2.5"/><circle cx="${cx}" cy="${cy}" r="7" fill="#475569"/>`;
    SIM.val = amReading();
    q("#simLive").textContent = SIM.val.toFixed(2) + " A";
  }
  function amNewTarget(fixed) {
    SIM.amTarget = (fixed != null) ? fixed : Math.round(Math.random() * 30) / 10;
    const frac = SIM.amTarget / 3;
    const ang = -60 + frac * 120;
    SIM.amAngle = ang;
    const rad = ang * Math.PI / 180;
    const len = AM_R - 20;
    q("#simNeedle").innerHTML = `<line x1="${AM_CX}" y1="${AM_CY}" x2="${AM_CX + len*Math.cos(rad)}" y2="${AM_CY + len*Math.sin(rad)}" stroke="#ef4444" stroke-width="2.5"/><circle cx="${AM_CX}" cy="${AM_CY}" r="7" fill="#475569"/>`;
    SIM.val = amReading();
    q("#simLive").textContent = SIM.val.toFixed(2) + " A";
    const fb = q("#simFeedback");
    if (fb) { fb.textContent = ""; fb.style.color = "var(--muted)"; }
  }

  // ═══ Merged Learning Path (地基 → 考点) ═══
  function renderPath() {
    const box = q("#pathBody");
    let html = "";
    ["math", "physics", "chemistry"].forEach(sid => {
      const subj = SUBJECTS.find(s => s.id === sid);
      const fsubj = FOUNDATION.subjects[sid];
      const color = subj ? subj.color : fsubj.color;
      let items = "";
      fsubj.lessons.forEach(l => {
        items += `<div class="path-item path-found" data-type="found" data-id="${l.id}" style="--pc:${color}">
          <span class="path-tag">${_t('pathFoundation')}</span>
          <span class="path-name"><span class="l-zh">${l.name}</span><span class="path-en">${l.nameEn}</span></span>
          <span class="path-status ok">${icon('check')} ${_t('pathComplete')}</span>
        </div>`;
      });
      (TOPICS[sid] || []).forEach(t => {
        const cls = t.hasContent ? "ok" : "todo";
        const label = t.hasContent ? icon('check') + " " + _t('pathComplete') : _t('pathTodo');
        items += `<div class="path-item path-kb" data-type="kb" data-id="${t.id}" data-subj="${sid}" style="--pc:${color}">
          <span class="path-tag">${_t('pathExam')}</span>
          <span class="path-name"><span class="l-zh">${t.name}</span><span class="path-en">${t.nameEn}</span></span>
          <span class="path-status ${cls}">${label}</span>
        </div>`;
      });
      html += `<div class="path-subj">
        <div class="path-subj-head" style="border-left:4px solid ${color}">
          <h3>${icon(subj.icon)} <span class="l-zh">${subj.name}</span> <span class="subj-en">${subj.nameEn}</span></h3>
          <span class="path-count">${fsubj.lessons.length} ${_t('pathFoundation')} · ${TOPICS[sid].length} ${_t('pathExam')}</span>
        </div>
        <div class="path-list">${items}</div>
      </div>`;
    });
    box.innerHTML = html;
  }

  q("#pathBody").addEventListener("click", function(e) {
    const item = e.target.closest(".path-item");
    if (!item) return;
    const type = item.getAttribute("data-type");
    const id = item.getAttribute("data-id");
    if (type === "found") {
      const fsid = id.startsWith("fml") ? "math" : id.startsWith("fpl") ? "physics" : "chemistry";
      const lesson = FOUNDATION.subjects[fsid].lessons.find(l => l.id === id);
      if (lesson) {
        state.foundSubj = fsid;
        q("#clNav").querySelector('[data-panel="found"]').click();
        renderFoundation();
        renderFoundationLesson(lesson, FOUNDATION.subjects[fsid]);
        q("#foundDetail").scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const sid = item.getAttribute("data-subj");
      const topic = TOPICS[sid].find(t => t.id === id);
      if (topic) {
        state.kbSubj = sid;
        q("#clNav").querySelector('[data-panel="kb"]').click();
        renderKBSubjects();
        renderKBTopics();
        const subj = SUBJECTS.find(s => s.id === sid);
        if (topic.hasContent) renderKBDetail(topic, subj); else renderKBStub(topic, subj);
        q("#kbDetail").scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  // ═══ Progress report (我的进度) ═══
  function escText(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function foundationStats() {
    let total = 0, done = 0;
    try {
      const o = JSON.parse(localStorage.getItem("csca_foundation") || "{}");
      Object.keys(FOUNDATION.subjects).forEach(k => {
        FOUNDATION.subjects[k].floorSkills.forEach(s => { total++; if (o[s.id]) done++; });
      });
    } catch (e) {}
    return { total: total, done: done };
  }
  function mathWeak() {
    const h = loadMathHist(); const out = [];
    PROBLEMS.forEach((p, idx) => {
      const e = h[idx];
      if (e && e.n >= 2) { const acc = e.c / e.n; if (acc < 0.6) out.push({ idx: idx, q: p.q, acc: acc, n: e.n }); }
    });
    out.sort((a, b) => a.acc - b.acc);
    return out.slice(0, 8);
  }
  function reportData() {
    const dailyLog = loadDailyLog();
    const fs = foundationStats();
    return {
      exportedAt: new Date().toISOString(),
      dailyStreak: dailyStreak(dailyLog),
      dailyLog: dailyLog,
      simBestStreak: loadSimBest(),
      simAchieved: !!localStorage.getItem("csca_sim_achieved"),
      simWrongCount: loadSimWrong().length,
      foundation: fs,
      mathWeak: mathWeak()
    };
  }
  function openReport() {
    const dailyLog = loadDailyLog();
    const streak = dailyStreak(dailyLog);
    const todayDone = dailyLog.includes(todayStr());
    const best = loadSimBest();
    const achieved = !!localStorage.getItem("csca_sim_achieved");
    const wrongN = loadSimWrong().length;
    const fs = foundationStats();
    const weak = mathWeak();
    const fpct = fs.total ? Math.round(fs.done / fs.total * 100) : 0;
    const weakHTML = weak.length
      ? weak.map(w => {
          const pct = Math.round(w.acc * 100);
          return `<li>${LS('正确率 ' + pct + '%（' + w.n + ' 次）— ' + escText(w.q), 'Accuracy ' + pct + '% (' + w.n + ' attempts) — ' + escText(w.q))}</li>`;
        }).join("")
      : '<li class="rp-empty">' + LS('暂无薄弱题（多练几题后自动统计）', 'No weak points yet (statistics appear after more practice)') + '</li>';
    const modal = q("#reportModal");
    modal.innerHTML = `
      <div class="modal-card">
        <div class="modal-head"><h3>${icon('chart')} ${LS('我的学习进度', 'My learning progress')}</h3><button class="modal-close" id="reportClose">${icon('x')}</button></div>
        <div class="rp-grid">
          <div class="rp-stat"><div class="rp-num">${icon('fire')} ${streak}</div><div class="rp-label">${LS('连续打卡（天）', 'Streak (days)')}${todayDone ? LS(' · 今日已打卡', ' · checked in today') : ""}</div></div>
          <div class="rp-stat"><div class="rp-num">${icon('trophy')} ${best}</div><div class="rp-label">${LS('模拟器最佳连对', 'Best simulator streak')}${achieved ? LS(' · 已解锁', ' · unlocked') : ""}</div></div>
          <div class="rp-stat"><div class="rp-num">${icon('notebook')} ${wrongN}</div><div class="rp-label">${LS('仪器模拟错题本', 'Simulator wrong-answer log')}</div></div>
          <div class="rp-stat"><div class="rp-num">${fs.done}/${fs.total}</div><div class="rp-label">${LS('地基掌握（', 'Foundation mastered (')}${fpct}${LS('%）', '%)')}</div></div>
        </div>
        <h4>${icon('calculator')} ${LS('数学薄弱点（正确率 &lt; 60%）', 'Math weak points (accuracy &lt; 60%)')}</h4>
        <ul class="rp-weak">${weakHTML}</ul>
        <div class="rp-actions">
          <button class="rp-btn" id="reportPrint">${icon('printer')} ${LS('打印报告', 'Print report')}</button>
          <button class="rp-btn rp-btn-ghost" id="reportJson">${icon('download')} ${LS('下载 JSON', 'Download JSON')}</button>
          <button class="rp-btn rp-btn-ghost" id="reportClose2">${LS('关闭', 'Close')}</button>
        </div>
        <p class="rp-foot">${LS('数据保存在本机浏览器（localStorage），不会上传。可据此判断复习重点。', 'Data is stored locally in your browser (localStorage) and not uploaded. Use this to identify review priorities.')}</p>
      </div>`;
    modal.hidden = false;
    q("#reportClose").addEventListener("click", closeReport);
    q("#reportClose2").addEventListener("click", closeReport);
    q("#reportPrint").addEventListener("click", printReport);
    q("#reportJson").addEventListener("click", downloadReportJSON);
  }
  function closeReport() { const m = q("#reportModal"); if (m) { m.hidden = true; m.innerHTML = ""; } }
  function downloadReportJSON() {
    const data = reportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "csca-learn-progress.json";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
  }
  function printReport() {
    const d = reportData();
    const fs = d.foundation;
    const weak = (d.mathWeak.length
      ? d.mathWeak.map(w => {
          const pct = Math.round(w.acc * 100);
          return `<li>${LS('正确率 ' + pct + '%（' + w.n + ' 次）— ' + escText(w.q), 'Accuracy ' + pct + '% (' + w.n + ' attempts) — ' + escText(w.q))}</li>`;
        }).join("")
      : "<li>暂无</li>");
    const w = window.open("", "_blank");
    if (!w) { alert("请允许弹出窗口以打印报告"); return; }
    w.document.write('<html><head><meta charset="utf-8"><title>' + LS('CSCA Basics 学习进度报告', 'CSCA Basics · Progress Report') + '</title>'
      + '<style>body{font-family:sans-serif;padding:32px;color:#1a1c23;line-height:1.7}h1{font-size:22px}'
      + 'table{width:100%;border-collapse:collapse;margin:16px 0}td{border:1px solid #ddd;padding:8px 12px}th{background:#f3f4f6}.sec{margin-top:24px}</style></head><body>'
      + '<h1>' + LS('CSCA Basics 学习进度报告', 'CSCA Basics · Progress Report') + '</h1>'
      + '<p>' + LS('导出时间：', 'Exported: ') + new Date().toLocaleString() + '</p>'
      + '<table><tr><th>' + LS('指标', 'Metric') + '</th><th>' + LS('数值', 'Value') + '</th></tr>'
      + '<tr><td>' + _t('streakDays') + '</td><td>' + d.dailyStreak + _t('days') + '</td></tr>'
      + '<tr><td>' + LS('模拟器最佳连对', 'Best simulator streak') + '</td><td>' + d.simBestStreak + (d.simAchieved ? '（' + icon('trophy') + ' ' + LS('已解锁', 'unlocked') + '）' : '') + '</td></tr>'
      + '<tr><td>' + LS('仪器模拟错题本', 'Simulator wrong-answer log') + '</td><td>' + d.simWrongCount + ' ' + LS('题', 'Q') + '</td></tr>'
      + '<tr><td>' + _t('foundationMastered') + '</td><td>' + fs.done + '/' + fs.total + '（' + (fs.total ? Math.round(fs.done / fs.total * 100) : 0) + '%）</td></tr></table>'
      + '<div class="sec"><h3>' + LS('数学薄弱点（正确率 &lt; 60%）', 'Math weak points (accuracy &lt; 60%)') + '</h3><ul>' + weak + '</ul></div>'
      + '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.print();},300);};</scr' + 'ipt>'
      + '</body></html>');
    w.document.close();
  }

  // ═══ Root knowledge map (根基) ═══
  function getNodeStatus(id, i) {
    // Visual progress badges matching the target design.
    // In a future iteration these can be driven by real localStorage completion data.
    const statuses = [
      { zh: "已完成 25%", en: "25% Complete", cls: "status-partial" },
      { zh: "已完成 40%", en: "40% Complete", cls: "status-partial" },
      { zh: "已完成 10%", en: "10% Complete", cls: "status-partial" },
      { zh: "进行中", en: "In Progress", cls: "status-progress" },
      { zh: "未开始", en: "Not Started", cls: "status-none" },
      { zh: "进行中", en: "In Progress", cls: "status-progress" },
      { zh: "已完成 50%", en: "50% Complete", cls: "status-partial" }
    ];
    const s = statuses[i % statuses.length];
    return { text: LS(s.zh, s.en), cls: s.cls };
  }

  function filterRoot(term) {
    term = (term || "").trim().toLowerCase();
    qa(".root-node").forEach(node => {
      const hay = node.getAttribute("data-search") || "";
      node.style.display = !term || hay.indexOf(term) !== -1 ? "" : "none";
    });
    qa(".root-group").forEach(group => {
      const visible = group.querySelectorAll('.root-node:not([style*="display: none"])').length;
      group.style.display = visible ? "" : "none";
    });
  }

  function renderRoot() {
    const box = q("#rootBody");
    if (!box) return;
    const groups = ROOT_MAP.map(g => {
      const nodes = g.nodes.map((n, i) => {
        const chips = n.links.map(l =>
          `<button class="root-link" data-type="${l.type}" data-id="${l.id || ""}" data-subj="${l.subj || ""}">${L2(l, 'label', 'labelEn')}</button>`
        ).join("");
        const status = getNodeStatus(n.id, i);
        const searchText = (n.title + " " + n.en + " " + n.essence).toLowerCase();
        return `<div class="root-node" data-search="${searchText.replace(/"/g, '&quot;')}">
          <div class="root-node-top">
            <div class="root-node-icon">${icon(n.icon || g.icon)}</div>
            <span class="root-node-status ${status.cls}">${status.text}</span>
          </div>
          <div class="root-node-head">
            <span class="root-node-title l-zh">${n.title}</span>
            <span class="root-node-en">${n.en}</span>
          </div>
          <p class="root-node-essence">${L2(n, 'essence', 'essenceEn')}</p>
          <div class="root-links">${chips}</div>
        </div>`;
      }).join("");
      return `<section class="root-group" data-group="${g.subj}">
        <div class="root-group-head">
          <span class="root-group-icon">${icon(g.icon)}</span>
          <div>
            <h3>${L2(g, 'title', 'en')}</h3>
            <p class="root-group-intro">${L2(g, 'intro', 'introEn')}</p>
          </div>
        </div>
        <div class="root-nodes">${nodes}</div>
      </section>`;
    }).join("");
    box.innerHTML = `<div class="root-intro">
        <h2>${LS('底层知识图谱 · 从这里延伸到全部', 'Foundational Knowledge Map · Everything grows from here')}</h2>
        <p>${LS('CSCA Basics 的全部内容都从下面这些<b>最底层概念</b>长出来。点开任意概念看它是什么，再用「延伸」跳到知识库、地基课、仪器模拟或手算训练——把根扎稳，上层考点自然顺。', 'Everything in CSCA Basics grows from these <b>most foundational concepts</b>. Open any concept to see what it is, then use “Extend” to jump to the knowledge base, foundation lessons, instrument simulator, or mental-math drill — steady the roots and the exam points above fall into place.')}</p>
      </div>
      <div class="root-search-wrap">
        <span class="root-search-icon"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></span>
        <input type="text" id="rootSearch" placeholder="${LANG === "en" ? "Search subjects…" : "搜索学科…"}" autocomplete="off" />
      </div>
      ${groups}`;
    qa("#rootBody .root-link").forEach(b => b.addEventListener("click", function() {
      gotoTarget(b.getAttribute("data-type"), b.getAttribute("data-id"), b.getAttribute("data-subj"));
    }));
    const rootSearch = q("#rootSearch");
    if (rootSearch) {
      rootSearch.addEventListener("input", function() { filterRoot(this.value); });
    }
  }

  function gotoTarget(type, id, subj) {
    if (type === "kb") {
      state.kbSubj = subj;
      q("#clNav").querySelector('[data-panel="kb"]').click();
      renderKBSubjects(); renderKBTopics();
      const topic = (TOPICS[subj] || []).find(t => t.id === id);
      const s = SUBJECTS.find(x => x.id === subj);
      if (topic && topic.hasContent) renderKBDetail(topic, s);
      else if (topic) renderKBStub(topic, s);
      q("#kbDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (type === "found") {
      const fsid = (id.indexOf("fml") === 0 || id.indexOf("fm-") === 0) ? "math" : id.indexOf("fp") === 0 ? "physics" : "chemistry";
      state.foundSubj = fsid;
      q("#clNav").querySelector('[data-panel="found"]').click();
      const subjObj = FOUNDATION.subjects[fsid];
      const lesson = subjObj.lessons.find(l => l.id === id);
      if (lesson) renderFoundationLesson(lesson, subjObj);
      else { renderFoundation(); renderFoundationDetail(fsid); }
      q("#foundDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (type === "sim") {
      q("#clNav").querySelector('[data-panel="sim"]').click();
      if (typeof simSwitchTo === "function") simSwitchTo(id);
    } else if (type === "calc") {
      q("#clNav").querySelector('[data-panel="calc"]').click();
    } else if (type === "cn") {
      state.cnLvl = parseInt(id, 10);
      q("#clNav").querySelector('[data-panel="cn"]').click();
      renderCNLevel(state.cnLvl);
      qa(".cn-lvl").forEach(b => b.classList.toggle("active", b.getAttribute("data-cn-lvl") === String(id)));
    }
  }

  // ═══ Init ═══
  q("#clReportBtn").addEventListener("click", openReport);
  q("#reportModal").addEventListener("click", function(e) { if (e.target === q("#reportModal")) closeReport(); });
  const clQuickSearch = q("#clQuickSearch");
  if (clQuickSearch) {
    clQuickSearch.addEventListener("input", function() {
      const term = this.value.trim();
      if (state.panel !== "root") q('#clNav [data-panel="root"]').click();
      const rootSearch = q("#rootSearch");
      if (rootSearch) { rootSearch.value = term; filterRoot(term); }
    });
  }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() { navigator.serviceWorker.register("sw.js").catch(function() {}); });
  }
  renderRoot();
  rootRendered = true;
  renderKBSubjects();
  renderCNDefault();
  renderCalcDefault();
  renderDXForm();
  renderCountdown();

  // Apply saved language on load
  setLang(LANG);

  // Helpers
  function q(s) { return document.querySelector(s); }
  function qa(s) { return document.querySelectorAll(s); }
})();
