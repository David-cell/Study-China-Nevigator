// CSCA Basics — Knowledge base dataset.
// Topic taxonomy aligned with csca.app/csca.cn official 2025 syllabus.
// Math: 12 topics (4 modules) | Physics: 21 topics (5 modules) | Chem: 15 topics (3 modules).
// Only 3 seed topics have full content (concept, formulas, example, practice, curriculum map).
// Add content to remaining topics by filling their objects — renderer auto-adapts.

// ─── SUBJECT INDEX ────────────────────────────────────────────────
const SUBJECTS = [
  { id: "math", name: "数学", nameEn: "Mathematics", icon: "∑", color: "#002147", topicCount: 12, duration: "60 min", questions: 48, mandatory: true },
  { id: "physics", name: "物理", nameEn: "Physics", icon: "atom", color: "#4a6fa5", topicCount: 21, duration: "60 min", questions: 48, mandatory: false },
  { id: "chemistry", name: "化学", nameEn: "Chemistry", icon: "flask", color: "#0f766e", topicCount: 15, duration: "60 min", questions: 48, mandatory: false }
];

// ─── TOPIC DEFINITIONS ─────────────────────────────────────────────
// Each topic: { id, name, nameEn, module, weight, difficulty: easy|medium|hard, timeMinutes, subs:[],
//   concept (optional full content), formulas:[], example:{}, practice:[], ibMap, apMap, aLevelMap }
// Full content only for 3 seed topics (math-conics, physics-newton, chem-mole). Others are stubs.

const TOPICS = {
  math: [
    { id: "math-sets", name: "集合", nameEn: "Sets", module: "集合与不等式", moduleEn: "Sets & Inequalities", weight: "8%", difficulty: "easy", timeMinutes: 180,
      subs: [{ name: "集合的定义与表示", nameEn: "Set definition" }, { name: "交、并、补", nameEn: "Operations" }, { name: "韦恩图", nameEn: "Venn diagram" }],
      concept: "<p>集合是具有某种共同属性的对象的全体。CSCA 重点考集合运算（交、并、补）及含不等式的复合集合问题。</p>\n<p><b>核心思维：</b>用韦恩图或数轴可视化；含参集合题先定取值区间，再做运算。</p>",
      conceptEn: "<p>A set is a collection of objects sharing some common attribute. CSCA focuses on set operations (intersection, union, complement) and compound set problems involving inequalities.</p>\n<p><b>Core thinking:</b> visualize with Venn diagrams or the number line; for parameter-containing set problems, first fix the value intervals, then operate.</p>",
      formulas: [
        { left: "交集", right: "A \\cap B = \\{x \\mid x\\in A \\text{ 且 } x\\in B\\}" },
        { left: "并集", right: "A \\cup B = \\{x \\mid x\\in A \\text{ 或 } x\\in B\\}" },
        { left: "补集", right: "\\complement_U A = \\{x \\mid x\\in U \\text{ 且 } x\\notin A\\}" },
        { left: "子集", right: "A \\subseteq B \\iff \\forall x\\in A,\\, x\\in B" },
        { left: "容斥", right: "|A\\cup B| = |A| + |B| - |A\\cap B|" }
      ],
      example: {
        problem: "已知 A={x|x²−3x+2<0}，B={x|x<1}，求 A∩B。",
        steps: [
          "解 x²−3x+2<0 → 1<x<2，A=(1,2)",
          "B=(−∞,1)",
          "A∩B=∅"
        ],
        answer: "∅",
        tip: "含不等式的集合先化区间，再在数轴上取交/并。"
      },
      exampleEn: {
        problem: "Given A={x|x²−3x+2<0}, B={x|x<1}, find A∩B.",
        steps: [
          "Solve x²−3x+2<0 → 1<x<2, so A=(1,2)",
          "B=(−∞,1)",
          "A∩B=∅"
        ],
        answer: "∅",
        tip: "For set problems with inequalities, first convert to intervals, then take intersection/union on the number line."
      },
      practice: [
        { q: "A={1,2,3},B={2,3,4}，求 A∪B。", a: "{1,2,3,4}" },
        { q: "A={x|x>0},B={x|x<5}，求 A∩B。", a: "(0,5)" },
        { q: "U={1,2,3,4},A={1,2}，求 ∁U A。", a: "{3,4}" }
      ],
      practiceEn: [
        { q: "A={1,2,3}, B={2,3,4}; find A∪B.", a: "{1,2,3,4}" },
        { q: "A={x|x>0}, B={x|x<5}; find A∩B.", a: "(0,5)" },
        { q: "U={1,2,3,4}, A={1,2}; find ∁U A.", a: "{3,4}" }
      ],
      hasContent: true,
      ibMap: "IB Math AA/AI 集合，CSCA 更深入含不等式",
      ibMapEn: "IB Math AA/AI covers sets; CSCA goes deeper and includes inequalities",
      apMap: "AP Precalc 集合仅基础",
      apMapEn: "AP Precalc covers only basic sets",
      aLevelMap: "A-Level 集合为概率基础",
      aLevelMapEn: "A-Level sets form the foundation for probability"
    },
    { id: "math-inequalities", name: "不等式", nameEn: "Inequalities", module: "集合与不等式", moduleEn: "Sets & Inequalities", weight: "8%", difficulty: "medium", timeMinutes: 180,
      subs: [{ name: "一元一次", nameEn: "Linear" }, { name: "一元二次", nameEn: "Quadratic" }, { name: "绝对值", nameEn: "Absolute value" }],
      concept: "<p>不等式表示大小关系。CSCA 重点考一元二次/一次不等式、含参不等式与绝对值不等式。</p>\n<p><b>核心思维：</b>二次项系数化正；含参讨论开口与根；|x|<a ⇔ −a<x<a；乘除负数变号。</p>",
      conceptEn: "<p>An inequality expresses an order relation. CSCA focuses on quadratic/linear inequalities, parameter-containing inequalities, and absolute-value inequalities.</p>\n<p><b>Core thinking:</b> make the quadratic coefficient positive; for parameters discuss the opening and roots; |x|<a ⇔ −a<x<a; multiplying/dividing by a negative flips the sign.</p>",
      formulas: [
        { left: "绝对值", right: "|x| < a \\iff -a < x < a" },
        { left: "二次", right: "ax^2+bx+c \\lessgtr 0 \\text{ 看判别式与开口}" },
        { left: "区间", right: "x > a \\to (a, +\\infty)" }
      ],
      example: {
        problem: "解不等式 2x−1 > 3。",
        steps: [
          "2x > 4",
          "x > 2"
        ],
        answer: "(2, +∞)",
        tip: "移项合并，系数化 1（正数不变号）。"
      },
      exampleEn: {
        problem: "Solve the inequality 2x−1 > 3.",
        steps: [
          "2x > 4",
          "x > 2"
        ],
        answer: "(2, +∞)",
        tip: "Move terms and combine, then make the coefficient 1 (no sign flip for positive)."
      },
      practice: [
        { q: "|x|<3 的解集？", a: "−3<x<3" },
        { q: "x−5≤0 解？", a: "x≤5" },
        { q: "二次项系数为负先？", a: "化为正" }
      ],
      practiceEn: [
        { q: "Solution set of |x|<3?", a: "−3<x<3" },
        { q: "Solve x−5≤0?", a: "x≤5" },
        { q: "If the quadratic coefficient is negative, first?", a: "make it positive" }
      ],
      hasContent: true,
      ibMap: "IB 不等式覆盖，CSCA 重含参",
      ibMapEn: "IB covers inequalities; CSCA emphasizes parameter-containing cases",
      apMap: "AP Precalc 不等式覆盖",
      apMapEn: "AP Precalc covers inequalities",
      aLevelMap: "A-Level 不等式为考点",
      aLevelMapEn: "A-Level inequalities are an examined topic"
    },
    { id: "math-conics", name: "圆锥曲线", nameEn: "Conic Sections", module: "解析几何", moduleEn: "Analytic Geometry", weight: "10%", difficulty: "hard", timeMinutes: 190,
      subs: [{ name: "椭圆", nameEn: "Ellipse" }, { name: "双曲线", nameEn: "Hyperbola" }, { name: "抛物线", nameEn: "Parabola" }],
      concept: "<p>圆锥曲线由平面截圆锥得到。CSCA 重点考标准方程与几何性质（焦点、离心率）。</p>\n<p><b>核心思维：</b>先定类型再写方程；椭圆 a²=b²+c²，e=c/a<1；双曲线 c²=a²+b²，e>1。</p>",
      conceptEn: "<p>Conic sections are obtained by cutting a cone with a plane. CSCA focuses on standard equations and geometric properties (foci, eccentricity).</p>\n<p><b>Core thinking:</b> determine the type first, then write the equation; for an ellipse a²=b²+c² with e=c/a<1; for a hyperbola c²=a²+b² with e>1.</p>",
      formulas: [
        { left: "椭圆", right: "\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1,\\; a^2=b^2+c^2" },
        { left: "双曲线", right: "\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1,\\; c^2=a^2+b^2" },
        { left: "抛物线", right: "y^2 = 2px,\\; \\text{焦点 }(p/2,0)" },
        { left: "离心率", right: "e = \\frac{c}{a}" }
      ],
      example: {
        problem: "椭圆 x²/25 + y²/16 = 1 的焦点？",
        steps: [
          "a²=25,b²=16",
          "c²=25−16=9 → c=3",
          "焦点 (±3,0)"
        ],
        answer: "(±3, 0)",
        tip: "焦点在长轴所在轴；先判 a,b 大小。"
      },
      exampleEn: {
        problem: "Foci of the ellipse x²/25 + y²/16 = 1?",
        steps: [
          "a²=25, b²=16",
          "c²=25−16=9 → c=3",
          "foci (±3,0)"
        ],
        answer: "(±3, 0)",
        tip: "Foci lie on the major-axis; first compare a and b."
      },
      practice: [
        { q: "椭圆离心率范围？", a: "0<e<1" },
        { q: "抛物线 y²=4x 焦点？", a: "(1,0)" },
        { q: "双曲线 c²=？", a: "a²+b²" }
      ],
      practiceEn: [
        { q: "Range of ellipse eccentricity?", a: "0<e<1" },
        { q: "Focus of parabola y²=4x?", a: "(1,0)" },
        { q: "Hyperbola: c²=?", a: "a²+b²" }
      ],
      hasContent: true,
      ibMap: "IB 圆锥曲线覆盖，CSCA 重计算",
      ibMapEn: "IB covers conic sections; CSCA emphasizes computation",
      apMap: "AP Precalc 圆锥曲线覆盖",
      apMapEn: "AP Precalc covers conic sections",
      aLevelMap: "A-Level 圆锥曲线为核心",
      aLevelMapEn: "A-Level conic sections are core"
    },
    { id: "math-func", name: "函数", nameEn: "Functions", module: "函数", moduleEn: "Functions", weight: "8%", difficulty: "medium", timeMinutes: 170,
      subs: [{ name: "定义域值域", nameEn: "Domain & range" }, { name: "单调性", nameEn: "Monotonicity" }, { name: "奇偶性", nameEn: "Parity" }],
      concept: "<p>函数三要素：定义域、值域、对应法则。CSCA 重单调性、奇偶性与反函数。</p>\n<p><b>核心思维：</b>定义域优先（分母≠0、根号内≥0）；奇函数关于原点对称，偶函数关于 y 轴对称。</p>",
      conceptEn: "<p>Three elements of a function: domain, range, and mapping rule. CSCA emphasizes monotonicity, parity (odd/even), and inverse functions.</p>\n<p><b>Core thinking:</b> domain first (denominator ≠ 0, radicand ≥ 0); odd functions are symmetric about the origin, even functions about the y-axis.</p>",
      formulas: [
        { left: "偶", right: "f(-x) = f(x)" },
        { left: "奇", right: "f(-x) = -f(x)" },
        { left: "反函数", right: "f(f^{-1}(x)) = x" }
      ],
      example: {
        problem: "判断 f(x)=x² 的奇偶性。",
        steps: [
          "f(−x)=(−x)²=x²=f(x)",
          "偶函数"
        ],
        answer: "偶函数",
        tip: "先验证定义域关于原点对称。"
      },
      exampleEn: {
        problem: "Determine the parity of f(x)=x².",
        steps: [
          "f(−x)=(−x)²=x²=f(x)",
          "even function"
        ],
        answer: "even function",
        tip: "First verify the domain is symmetric about the origin."
      },
      practice: [
        { q: "f(x)=x³ 奇偶？", a: "奇" },
        { q: "定义域要考虑？", a: "分母、根号等" },
        { q: "增函数含义？", a: "x大y大" }
      ],
      practiceEn: [
        { q: "Parity of f(x)=x³?", a: "odd" },
        { q: "What to consider for domain?", a: "denominator, radical, etc." },
        { q: "Meaning of increasing function?", a: "larger x → larger y" }
      ],
      hasContent: true,
      ibMap: "IB/AP/A-Level 都学函数，概念一致",
      ibMapEn: "IB/AP/A-Level all study functions with consistent concepts",
      apMap: "AP Precalc 函数内容充分覆盖",
      apMapEn: "AP Precalc adequately covers functions",
      aLevelMap: "A-Level 函数与反函数均覆盖",
      aLevelMapEn: "A-Level covers both functions and inverse functions"
    },
    { id: "math-elemfn", name: "初等函数", nameEn: "Elementary Functions", module: "函数", moduleEn: "Functions", weight: "8%", difficulty: "medium", timeMinutes: 170,
      subs: [{ name: "指数", nameEn: "Exponential" }, { name: "对数", nameEn: "Logarithmic" }, { name: "幂", nameEn: "Power" }],
      concept: "<p>指数与对数函数互为反函数。CSCA 重运算性质、图像与简单方程。</p>\n<p><b>核心思维：</b>对数把乘除变加减；解指数方程常取对数。底数 a>0 且 a≠1。</p>",
      conceptEn: "<p>Exponential and logarithmic functions are inverses of each other. CSCA emphasizes operational properties, graphs, and simple equations.</p>\n<p><b>Core thinking:</b> logarithms turn multiplication/division into addition/subtraction; solve exponential equations by taking logs. Base a>0 and a≠1.</p>",
      formulas: [
        { left: "指数", right: "a^{x+y}=a^x a^y,\\; (a^x)^y=a^{xy}" },
        { left: "对数", right: "\\log_a(MN)=\\log_a M+\\log_a N" },
        { left: "换底", right: "\\log_a b = \\frac{\\ln b}{\\ln a}" }
      ],
      example: {
        problem: "解方程 2^x = 8。",
        steps: [
          "8=2³",
          "2^x=2³ → x=3"
        ],
        answer: "3",
        tip: "化为同底再比较指数。"
      },
      exampleEn: {
        problem: "Solve 2^x = 8.",
        steps: [
          "8=2³",
          "2^x=2³ → x=3"
        ],
        answer: "3",
        tip: "Rewrite with the same base, then compare exponents."
      },
      practice: [
        { q: "log_a 1=?", a: "0" },
        { q: "a^(log_a x)=?", a: "x" },
        { q: "lg(ab)=?", a: "lga+lgb" }
      ],
      practiceEn: [
        { q: "log_a 1 = ?", a: "0" },
        { q: "a^(log_a x) = ?", a: "x" },
        { q: "lg(ab) = ?", a: "lga+lgb" }
      ],
      hasContent: true,
      ibMap: "IB 指数对数覆盖，CSCA 更重题型",
      ibMapEn: "IB covers exponentials and logarithms; CSCA emphasizes problem types",
      apMap: "AP Precalc 指数对数全覆盖",
      apMapEn: "AP Precalc fully covers exponentials and logarithms",
      aLevelMap: "A-Level 指数对数为必考",
      aLevelMapEn: "A-Level exponentials and logarithms are mandatory"
    },
    { id: "math-trig", name: "三角函数", nameEn: "Trigonometry", module: "三角函数", moduleEn: "Trigonometry", weight: "8%", difficulty: "medium", timeMinutes: 170,
      subs: [{ name: "诱导公式", nameEn: "Reduction" }, { name: "正弦余弦定理", nameEn: "Sine & cosine rules" }],
      concept: "<p>三角函数描述周期现象。CSCA 重诱导公式、图像性质与解三角形。</p>\n<p><b>核心思维：</b>解三角形用正弦定理 a/sinA=2R 与余弦定理；求边用余弦，求角用正弦或余弦。</p>",
      conceptEn: "<p>Trigonometric functions describe periodic phenomena. CSCA emphasizes reduction formulas, graph properties, and solving triangles.</p>\n<p><b>Core thinking:</b> solve triangles with the sine rule a/sinA=2R and the cosine rule; use cosine to find a side, sine or cosine to find an angle.</p>",
      formulas: [
        { left: "平方", right: "\\sin^2 x + \\cos^2 x = 1" },
        { left: "正弦定理", right: "\\frac{a}{\\sin A} = 2R" },
        { left: "余弦定理", right: "c^2 = a^2 + b^2 - 2ab\\cos C" }
      ],
      example: {
        problem: "直角 a=3, b=4，求斜边 c。",
        steps: [
          "c²=3²+4²=25",
          "c=5"
        ],
        answer: "5",
        tip: "勾股定理是余弦定理 C=90° 的特例。"
      },
      exampleEn: {
        problem: "Right triangle with a=3, b=4; find hypotenuse c.",
        steps: [
          "c²=3²+4²=25",
          "c=5"
        ],
        answer: "5",
        tip: "The Pythagorean theorem is the special case C=90° of the cosine rule."
      },
      practice: [
        { q: "sin²x+cos²x=?", a: "1" },
        { q: "sin(π−x)=?", a: "sinx" },
        { q: "余弦定理求角用？", a: "cosC" }
      ],
      practiceEn: [
        { q: "sin²x+cos²x = ?", a: "1" },
        { q: "sin(π−x) = ?", a: "sinx" },
        { q: "To find an angle with the cosine rule, use?", a: "cosC" }
      ],
      hasContent: true,
      ibMap: "IB 三角恒等偏证明，CSCA 重算",
      ibMapEn: "IB trig identities lean toward proof; CSCA emphasizes calculation",
      apMap: "AP Precalc 三角恒等覆盖",
      apMapEn: "AP Precalc covers trig identities",
      aLevelMap: "A-Level 三角公式为核心",
      aLevelMapEn: "A-Level trig formulas are core"
    },
    { id: "math-seq", name: "数列", nameEn: "Sequences", module: "数列", moduleEn: "Sequences", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "等差", nameEn: "Arithmetic" }, { name: "等比", nameEn: "Geometric" }],
      concept: "<p>数列是按次序排列的一列数。CSCA 重等差、等比通项与求和。</p>\n<p><b>核心思维：</b>等差看差 d，等比看比 q；求和公式与中项性质结合使用。</p>",
      conceptEn: "<p>A sequence is an ordered list of numbers. CSCA emphasizes arithmetic/geometric general terms and sums.</p>\n<p><b>Core thinking:</b> for arithmetic look at difference d, for geometric look at ratio q; combine the sum formula with the middle-term property.</p>",
      formulas: [
        { left: "等差通", right: "a_n = a_1 + (n-1)d" },
        { left: "等差和", right: "S_n = \\frac{n(a_1+a_n)}{2}" },
        { left: "等比通", right: "a_n = a_1 q^{n-1}" },
        { left: "等比和", right: "S_n = \\frac{a_1(1-q^n)}{1-q}" }
      ],
      example: {
        problem: "等差 2,5,8,… 求第 10 项。",
        steps: [
          "a₁=2, d=3",
          "a₁₀=2+9×3=29"
        ],
        answer: "29",
        tip: "先定首项与公差/公比再代公式。"
      },
      exampleEn: {
        problem: "Arithmetic sequence 2,5,8,…; find the 10th term.",
        steps: [
          "a₁=2, d=3",
          "a₁₀=2+9×3=29"
        ],
        answer: "29",
        tip: "First fix the first term and common difference/ratio, then plug into the formula."
      },
      practice: [
        { q: "等比 2,4,8 公比？", a: "2" },
        { q: "等差 1,3,5 第5项？", a: "9" },
        { q: "等差求和需？", a: "首末与项数" }
      ],
      practiceEn: [
        { q: "Geometric sequence 2,4,8; common ratio?", a: "2" },
        { q: "5th term of arithmetic 1,3,5?", a: "9" },
        { q: "For an arithmetic sum you need?", a: "first, last, and count" }
      ],
      hasContent: true,
      ibMap: "IB 数列浅，CSCA 求和题型多",
      ibMapEn: "IB sequences are shallow; CSCA has many summation problem types",
      apMap: "AP Precalc 数列内容较浅",
      apMapEn: "AP Precalc sequence content is shallow",
      aLevelMap: "A-Level 数列为 Pure1 考点",
      aLevelMapEn: "A-Level sequences are a Pure1 examined topic"
    },
    { id: "math-calc", name: "微积分初步", nameEn: "Calculus", module: "微积分", moduleEn: "Calculus", weight: "8%", difficulty: "hard", timeMinutes: 180,
      subs: [{ name: "导数", nameEn: "Derivative" }, { name: "积分", nameEn: "Integral" }],
      concept: "<p>导数是变化率，积分是累积。CSCA 重基本公式与简单应用。</p>\n<p><b>核心思维：</b>求导用基本公式与四则；积分是求导逆运算；复合函数用链式法则。</p>",
      conceptEn: "<p>The derivative is a rate of change; the integral is accumulation. CSCA emphasizes basic formulas and simple applications.</p>\n<p><b>Core thinking:</b> differentiate using basic formulas and the four rules; integration is the inverse of differentiation; use the chain rule for composite functions.</p>",
      formulas: [
        { left: "幂导数", right: "(x^n)' = n x^{n-1}" },
        { left: "指数导数", right: "(e^x)' = e^x" },
        { left: "积分", right: "\\int x^n dx = \\frac{x^{n+1}}{n+1}" }
      ],
      example: {
        problem: "f(x)=x³ 的导数？",
        steps: [
          "(x³)'=3x²"
        ],
        answer: "3x²",
        tip: "常数导数为 0；和差分别求导。"
      },
      exampleEn: {
        problem: "Derivative of f(x)=x³?",
        steps: [
          "(x³)'=3x²"
        ],
        answer: "3x²",
        tip: "Derivative of a constant is 0; differentiate sums/differences term by term."
      },
      practice: [
        { q: "(x²)'=?", a: "2x" },
        { q: "∫1 dx=?", a: "x+C" },
        { q: "导数几何意义？", a: "切线斜率" }
      ],
      practiceEn: [
        { q: "(x²)' = ?", a: "2x" },
        { q: "∫1 dx = ?", a: "x+C" },
        { q: "Geometric meaning of derivative?", a: "slope of tangent" }
      ],
      hasContent: true,
      ibMap: "IB/AP 微积分强，CSCA 偏应用",
      ibMapEn: "IB/AP calculus is strong; CSCA leans toward application",
      apMap: "AP Calculus 导数完全覆盖",
      apMapEn: "AP Calculus fully covers derivatives",
      aLevelMap: "A-Level 微积分为核心强项",
      aLevelMapEn: "A-Level calculus is a core strength"
    },
    { id: "math-vectors", name: "向量", nameEn: "Vectors", module: "向量", moduleEn: "Vectors", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "线性运算", nameEn: "Operations" }, { name: "点积", nameEn: "Dot product" }],
      concept: "<p>向量有大小有方向。CSCA 重坐标运算、点积与几何应用。</p>\n<p><b>核心思维：</b>坐标法化向量运算为实数运算；点积判垂直（为 0）、求夹角。</p>",
      conceptEn: "<p>A vector has magnitude and direction. CSCA emphasizes coordinate operations, dot product, and geometric applications.</p>\n<p><b>Core thinking:</b> the coordinate method turns vector operations into real-number operations; the dot product tests perpendicularity (zero) and finds angles.</p>",
      formulas: [
        { left: "点积", right: "\\mathbf{a}\\cdot\\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta" },
        { left: "坐标点积", right: "\\mathbf{a}\\cdot\\mathbf{b} = a_x b_x + a_y b_y" },
        { left: "模", right: "|\\mathbf{a}| = \\sqrt{a_x^2+a_y^2}" }
      ],
      example: {
        problem: "a=(1,2), b=(3,4)，求 a·b。",
        steps: [
          "a·b=1×3+2×4=11"
        ],
        answer: "11",
        tip: "点积为 0 则两向量垂直。"
      },
      exampleEn: {
        problem: "a=(1,2), b=(3,4); find a·b.",
        steps: [
          "a·b=1×3+2×4=11"
        ],
        answer: "11",
        tip: "A dot product of 0 means the two vectors are perpendicular."
      },
      practice: [
        { q: "a=(1,0) 模？", a: "1" },
        { q: "a·b=0 说明？", a: "垂直" },
        { q: "向量加法满足？", a: "交换律" }
      ],
      practiceEn: [
        { q: "Magnitude of a=(1,0)?", a: "1" },
        { q: "a·b=0 means?", a: "perpendicular" },
        { q: "Vector addition satisfies?", a: "commutativity" }
      ],
      hasContent: true,
      ibMap: "IB 向量考，CSCA 重坐标运算",
      ibMapEn: "IB examines vectors; CSCA emphasizes coordinate operations",
      apMap: "AP 向量内容较少偏几何",
      apMapEn: "AP vector content is limited and geometry-oriented",
      aLevelMap: "A-Level 向量为 Pure 核心",
      aLevelMapEn: "A-Level vectors are core to Pure"
    },
    { id: "math-complex", name: "复数", nameEn: "Complex Numbers", module: "复数", moduleEn: "Complex Numbers", weight: "4%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "四则运算", nameEn: "Arithmetic" }, { name: "模与共轭", nameEn: "Modulus" }],
      concept: "<p>复数 z=a+bi（i²=−1）。CSCA 重四则运算与几何意义（IB HL、A-Level FM 考）。</p>\n<p><b>核心思维：</b>运算时把 i 当字母、遇 i² 换 −1；共轭 z*=a−bi 用于分母实数化。</p>",
      conceptEn: "<p>Complex number z=a+bi (i²=−1). CSCA emphasizes arithmetic and geometric meaning (tested in IB HL, A-Level FM).</p>\n<p><b>Core thinking:</b> treat i as a letter in operations, replace i² with −1; the conjugate z*=a−bi is used to rationalize the denominator.</p>",
      formulas: [
        { left: "加法", right: "(a+bi)+(c+di)=(a+c)+(b+d)i" },
        { left: "模", right: "|z| = \\sqrt{a^2+b^2}" },
        { left: "共轭", right: "\\overline{a+bi} = a-bi" }
      ],
      example: {
        problem: "计算 (1+2i)(1−2i)。",
        steps: [
          "=1²−(2i)²=1−4i²=1+4=5"
        ],
        answer: "5",
        tip: "共轭相乘得实数 a²+b²。"
      },
      exampleEn: {
        problem: "Compute (1+2i)(1−2i).",
        steps: [
          "=1²−(2i)²=1−4i²=1+4=5"
        ],
        answer: "5",
        tip: "Multiplying conjugates gives the real number a²+b²."
      },
      practice: [
        { q: "i²=?", a: "−1" },
        { q: "z=3+4i 模？", a: "5" },
        { q: "复数平面横轴是？", a: "实部" }
      ],
      practiceEn: [
        { q: "i² = ?", a: "−1" },
        { q: "Modulus of z=3+4i?", a: "5" },
        { q: "The horizontal axis of the complex plane is?", a: "the real part" }
      ],
      hasContent: true,
      ibMap: "IB HL 学复数，SL 不考",
      ibMapEn: "IB HL studies complex numbers; SL does not examine them",
      apMap: "AP 不考复数",
      apMapEn: "AP does not examine complex numbers",
      aLevelMap: "A-Level FM 学复数，Math 轻",
      aLevelMapEn: "A-Level FM studies complex numbers; Math covers them lightly"
    },
    { id: "math-solid", name: "立体几何", nameEn: "Solid Geometry", module: "立体几何", moduleEn: "Solid Geometry", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "柱锥球体积", nameEn: "Volumes" }, { name: "表面积", nameEn: "Surface area" }],
      concept: "<p>立体几何研究空间图形。CSCA 重柱、锥、球的体积与表面积及空间位置关系。</p>\n<p><b>核心思维：</b>熟记公式；锥体体积是等底等高柱体的 1/3；球用半径。</p>",
      conceptEn: "<p>Solid geometry studies spatial figures. CSCA emphasizes volumes and surface areas of prisms, pyramids, and spheres, plus spatial position relations.</p>\n<p><b>Core thinking:</b> memorize the formulas; a pyramid's volume is 1/3 of a prism with the same base and height; for a sphere use the radius.</p>",
      formulas: [
        { left: "球体积", right: "V = \\frac{4}{3}\\pi R^3" },
        { left: "球面积", right: "S = 4\\pi R^2" },
        { left: "柱", right: "V = Sh" },
        { left: "锥", right: "V = \\frac{1}{3}Sh" }
      ],
      example: {
        problem: "球半径 R=1，求体积。",
        steps: [
          "V=4/3·π·1³=4π/3"
        ],
        answer: "4π/3",
        tip: "注意区分半径与直径。"
      },
      exampleEn: {
        problem: "Sphere radius R=1; find the volume.",
        steps: [
          "V=4/3·π·1³=4π/3"
        ],
        answer: "4π/3",
        tip: "Distinguish radius from diameter."
      },
      practice: [
        { q: "圆柱 V=?", a: "Sh" },
        { q: "锥体积是柱的？", a: "1/3" },
        { q: "球直径 d 时 R=", a: "d/2" }
      ],
      practiceEn: [
        { q: "Cylinder volume V?", a: "Sh" },
        { q: "Pyramid volume is what fraction of a prism's?", a: "1/3" },
        { q: "Sphere diameter d → R = ?", a: "d/2" }
      ],
      hasContent: true,
      ibMap: "IB 立体几何浅，CSCA 重空间",
      ibMapEn: "IB solid geometry is shallow; CSCA emphasizes spatial reasoning",
      apMap: "AP 立体几何仅基础体积",
      apMapEn: "AP solid geometry only covers basic volume",
      aLevelMap: "A-Level 立体几何体系较弱",
      aLevelMapEn: "A-Level solid geometry system is weaker"
    },
    { id: "math-prob", name: "概率", nameEn: "Probability", module: "概率与统计", moduleEn: "Probability & Statistics", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "古典概型", nameEn: "Classical" }, { name: "排列组合", nameEn: "Counting" }],
      concept: "<p>概率是随机事件发生可能性的度量。CSCA 重计数（排列组合）与古典概型。</p>\n<p><b>核心思维：</b>先数总基本事件数，再数有利事件数；独立事件概率相乘，互斥事件相加。</p>",
      conceptEn: "<p>Probability is a measure of how likely a random event is. CSCA emphasizes counting (permutations/combinations) and the classical probability model.</p>\n<p><b>Core thinking:</b> first count total elementary events, then favorable ones; multiply probabilities of independent events, add mutually exclusive ones.</p>",
      formulas: [
        { left: "概率", right: "P(A) = \\frac{m}{n}" },
        { left: "组合", right: "C_n^k = \\frac{n!}{k!(n-k)!}" },
        { left: "独立", right: "P(AB)=P(A)P(B)" }
      ],
      example: {
        problem: "掷一枚公平骰子，出现偶数点的概率？",
        steps: [
          "总 6 种，偶数 3 种",
          "P=3/6=1/2"
        ],
        answer: "1/2",
        tip: "古典概型默认等可能。"
      },
      exampleEn: {
        problem: "Rolling a fair die, probability of an even point?",
        steps: [
          "6 total outcomes, 3 even",
          "P=3/6=1/2"
        ],
        answer: "1/2",
        tip: "The classical model assumes equally likely outcomes."
      },
      practice: [
        { q: "C(4,2)=?", a: "6" },
        { q: "P(A)=0.5,P(B)=0.4 独立，P(AB)=?", a: "0.2" },
        { q: "互斥 P(A∪B)=?", a: "P(A)+P(B)" }
      ],
      practiceEn: [
        { q: "C(4,2) = ?", a: "6" },
        { q: "P(A)=0.5, P(B)=0.4 independent; P(AB)?", a: "0.2" },
        { q: "For mutually exclusive events, P(A∪B)?", a: "P(A)+P(B)" }
      ],
      hasContent: true,
      ibMap: "IB/AP 概率强，CSCA 重计数",
      ibMapEn: "IB/AP probability is strong; CSCA emphasizes counting",
      apMap: "AP 概率统计内容充分",
      apMapEn: "AP probability and statistics content is adequate",
      aLevelMap: "A-Level 概率为独立模块",
      aLevelMapEn: "A-Level probability is a standalone module"
    },
    { id: "math-stats", name: "统计", nameEn: "Statistics", module: "概率与统计", moduleEn: "Probability & Statistics", weight: "6%", difficulty: "medium", timeMinutes: 180,
      subs: [{ name: "数字特征", nameEn: "Characteristics" }, { name: "频率直方图", nameEn: "Histogram" }, { name: "正态分布", nameEn: "Normal dist." }],
      concept: "<p>统计用数字特征概括数据分布。CSCA 考均值、方差、标准差、频率直方图和正态分布。</p>\n<p><b>核心思维：</b>均值描述中心，方差/标准差描述离散程度。标准差是方差平方根。正态分布约 68% 落在 ±1 个标准差内。</p>",
      conceptEn: "<p>Statistics uses numerical characteristics to summarize data distribution. CSCA tests mean, variance, standard deviation, frequency histograms, and the normal distribution.</p>\n<p><b>Core thinking:</b> the mean describes the center, variance/standard deviation describe dispersion. The standard deviation is the square root of variance. In a normal distribution about 68% lies within ±1 standard deviation.</p>",
      formulas: [
        { left: "均值", right: "\\bar{x} = \\frac{1}{n}\\sum x_i" },
        { left: "方差", right: "s^2 = \\frac{1}{n}\\sum (x_i-\\bar{x})^2" },
        { left: "标准差", right: "s = \\sqrt{s^2}" },
        { left: "正态", right: "X \\sim N(\\mu,\\sigma^2)" }
      ],
      example: {
        problem: "数据 2,4,4,4,6 的均值与方差？",
        steps: [
          "均值=20/5=4",
          "离差平方和=4+0+4=8",
          "方差=8/5=1.6"
        ],
        answer: "均值4，方差1.6",
        tip: "标准差记得开方；CSCA 一般除以 n。"
      },
      exampleEn: {
        problem: "Mean and variance of data 2,4,4,4,6?",
        steps: [
          "mean=20/5=4",
          "sum of squared deviations=4+0+4=8",
          "variance=8/5=1.6"
        ],
        answer: "mean 4, variance 1.6",
        tip: "Remember to take the square root for std dev; CSCA usually divides by n."
      },
      practice: [
        { q: "数据 3,3,3 方差？", a: "0" },
        { q: "数据 1,3 均值？", a: "2" },
        { q: "N(μ,σ²) 对称轴？", a: "x=μ" }
      ],
      practiceEn: [
        { q: "Variance of data 3,3,3?", a: "0" },
        { q: "Mean of data 1,3?", a: "2" },
        { q: "Axis of symmetry of N(μ,σ²)?", a: "x=μ" }
      ],
      hasContent: true,
      ibMap: "IB 统计强，CSCA 偏概念判断",
      ibMapEn: "IB statistics are strong; CSCA leans toward conceptual judgment",
      apMap: "AP Stats 统计内容充分",
      apMapEn: "AP Stats statistics content is adequate",
      aLevelMap: "A-Level 统计为独立考卷",
      aLevelMapEn: "A-Level statistics is a separate exam paper"
    }
  ],
  physics: [
    { id: "phys-kinematics", name: "运动学基础", nameEn: "Kinematics Basics", module: "力学", moduleEn: "Mechanics", weight: "8%", difficulty: "easy", timeMinutes: 150,
      subs: [{ name: "位移、速度、加速度", nameEn: "Displacement, velocity, acceleration" }, { name: "匀变速直线运动", nameEn: "Uniform acceleration" }, { name: "自由落体", nameEn: "Free fall" }],
      concept: "<p>运动学研究物体位置随时间的变化，用位移 s、速度 v、加速度 a 描述。CSCA 重点考匀变速直线运动。</p>\n<p><b>核心思维：</b>做题前先规定正方向，再选公式。匀变速三大公式「知三求二」：缺时间用 v²−v₀²=2as，缺末速用 s=v₀t+½at²。自由落体是 a=g 的特例。</p>",
      conceptEn: "<p>Kinematics studies how an object's position changes with time, described by displacement s, velocity v, and acceleration a. CSCA focuses on uniformly accelerated linear motion.</p>\n<p><b>Core thinking:</b> first define a positive direction, then choose a formula. The three uniformly-accelerated formulas let you 'find two from three': lacking time use v²−v₀²=2as, lacking final speed use s=v₀t+½at². Free fall is the special case a=g.</p>",
      formulas: [
        { left: "速度公式", right: "v = v_0 + at" },
        { left: "位移公式", right: "s = v_0 t + \\frac{1}{2}at^2" },
        { left: "速度-位移", right: "v^2 - v_0^2 = 2as" },
        { left: "平均速度", right: "\\bar{v} = \\frac{v_0+v}{2} = \\frac{s}{t}" },
        { left: "自由落体", right: "v = gt,\\; h = \\frac{1}{2}gt^2", note: "g≈9.8，常取 10" }
      ],
      example: {
        problem: "汽车以 10 m/s 匀速行驶，遇情况刹车，加速度 −2 m/s²，多久停下？",
        steps: [
          "取运动方向为正，v₀=10, v=0, a=−2",
          "用 v=v₀+at → 0=10−2t",
          "t=5 s"
        ],
        answer: "5 s",
        tip: "刹车问题末速为 0；先判断加速度正负再套公式。"
      },
      exampleEn: {
        problem: "A car moves at 10 m/s, then brakes with acceleration −2 m/s². How long until it stops?",
        steps: [
          "Take motion direction as positive: v₀=10, v=0, a=−2",
          "Use v=v₀+at → 0=10−2t",
          "t=5 s"
        ],
        answer: "5 s",
        tip: "In braking problems final speed is 0; decide the sign of acceleration before plugging in."
      },
      practice: [
        { q: "匀变速 v₀=0, a=4, t=3 的位移？", a: "18" },
        { q: "自由落体 2 s 下落高度（g=10）？", a: "20" },
        { q: "v₀=5,a=0 是何运动？", a: "匀速直线运动" }
      ],
      practiceEn: [
        { q: "Uniform acceleration v₀=0, a=4, t=3; displacement?", a: "18" },
        { q: "Free-fall height after 2 s (g=10)?", a: "20" },
        { q: "v₀=5, a=0 — what motion?", a: "uniform linear motion" }
      ],
      hasContent: true,
      ibMap: "IB 运动学覆盖，CSCA 重计算",
      ibMapEn: "IB covers kinematics; CSCA emphasizes calculation",
      apMap: "AP Physics1 运动学覆盖",
      apMapEn: "AP Physics1 covers kinematics",
      aLevelMap: "A-Level 运动学为核心基础",
      aLevelMapEn: "A-Level kinematics is core foundational"
    },
    { id: "phys-newton", name: "牛顿运动定律", nameEn: "Newton’s Laws", module: "力学", moduleEn: "Mechanics", weight: "10%", difficulty: "medium", timeMinutes: 180,
      subs: [{ name: "牛顿三定律", nameEn: "Three laws" }, { name: "受力分析", nameEn: "Force analysis" }, { name: "摩擦力", nameEn: "Friction" }],
      concept: "<p>牛顿三定律是经典力学基础：惯性定律、F=ma、作用力反作用力。</p>\n<p><b>核心思维：</b>受力分析是第一步——先重力，再弹力（接触面/绳），后摩擦力。合外力决定加速度方向。连接体问题用整体法求 a，隔离法求内力。</p>",
      conceptEn: "<p>Newton's three laws are the basis of classical mechanics: the law of inertia, F=ma, and action-reaction.</p>\n<p><b>Core thinking:</b> force analysis is step one — first gravity, then elastic force (contact/rope), then friction. Net force determines the acceleration direction. For connected bodies use the whole-system method for a, isolation for internal forces.</p>",
      formulas: [
        { left: "第二定律", right: "F_{\\text{合}} = ma" },
        { left: "滑动摩擦", right: "f = \\mu N" },
        { left: "重力", right: "G = mg" },
        { left: "第三定律", right: "F_{12} = -F_{21}" }
      ],
      example: {
        problem: "质量 2 kg 物体受 10 N 水平力，摩擦不计，求加速度。",
        steps: [
          "受力：重力、支持力（竖直平衡），水平 10 N",
          "F合=10 N",
          "a=F/m=10/2=5 m/s²"
        ],
        answer: "5 m/s²",
        tip: "先在垂直方向判断 N，水平方向列 F合=ma。"
      },
      exampleEn: {
        problem: "A 2 kg object under a 10 N horizontal force, no friction; find acceleration.",
        steps: [
          "Forces: gravity, normal (vertical balance), 10 N horizontal",
          "F_net=10 N",
          "a=F/m=10/2=5 m/s²"
        ],
        answer: "5 m/s²",
        tip: "First judge N vertically, then write F_net=ma horizontally."
      },
      practice: [
        { q: "牛顿第一定律说明什么？", a: "惯性" },
        { q: "μ=0.2, N=50 的滑动摩擦力？", a: "10" },
        { q: "F=ma 中 F 指什么？", a: "合外力" }
      ],
      practiceEn: [
        { q: "What does Newton's first law state?", a: "inertia" },
        { q: "Sliding friction for μ=0.2, N=50?", a: "10" },
        { q: "In F=ma, what is F?", a: "net force" }
      ],
      hasContent: true,
      ibMap: "IB/AP 牛顿定律全覆盖，CSCA 重受力分析",
      ibMapEn: "IB/AP fully cover Newton's laws; CSCA emphasizes force analysis",
      apMap: "AP Physics1 牛顿定律核心",
      apMapEn: "AP Physics1 Newton's laws are core",
      aLevelMap: "A-Level 力学为基础重点",
      aLevelMapEn: "A-Level mechanics is a foundational focus"
    },
    { id: "phys-momentum", name: "动量与冲量", nameEn: "Momentum & Impulse", module: "力学", moduleEn: "Mechanics", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "动量定理", nameEn: "Impulse-momentum" }, { name: "动量守恒", nameEn: "Conservation" }],
      concept: "<p>动量 p=mv，冲量 I=Ft。动量定理：合外力冲量等于动量变化。系统不受外力时动量守恒。</p>\n<p><b>核心思维：</b>碰撞、爆炸优先用动量守恒；涉及力的时间作用（缓冲）用动量定理。注意矢量方向，设正方向后带符号运算。</p>",
      conceptEn: "<p>Momentum p=mv, impulse I=Ft. Impulse-momentum theorem: net external impulse equals momentum change. Momentum is conserved when the system feels no external force.</p>\n<p><b>Core thinking:</b> for collisions/explosions prefer conservation of momentum; for force-over-time (cushioning) use the impulse-momentum theorem. Mind the vector direction — set a positive direction and carry signs.</p>",
      formulas: [
        { left: "动量", right: "p = mv" },
        { left: "冲量", right: "I = Ft = \\Delta p" },
        { left: "守恒", right: "m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2'" }
      ],
      example: {
        problem: "m=1 kg 小球以 6 m/s 撞墙后以 4 m/s 反弹，求动量变化。",
        steps: [
          "设初速方向为正",
          "Δp = m(v₂−v₁)=1×(−4−6)=−10 kg·m/s",
          "大小 10，方向反向"
        ],
        answer: "10 kg·m/s（反向）",
        tip: "反弹速度方向与初速相反，务必带符号。"
      },
      exampleEn: {
        problem: "A 1 kg ball hits a wall at 6 m/s and rebounds at 4 m/s; find the momentum change.",
        steps: [
          "Take initial direction as positive",
          "Δp = m(v₂−v₁)=1×(−4−6)=−10 kg·m/s",
          "magnitude 10, opposite direction"
        ],
        answer: "10 kg·m/s (reversed)",
        tip: "Rebound velocity is opposite to initial — always carry the sign."
      },
      practice: [
        { q: "动量守恒条件？", a: "系统合外力为零" },
        { q: "p=mv 中 p 的方向？", a: "与速度同向" },
        { q: "缓冲延长作用时间对力的影响？", a: "减小力" }
      ],
      practiceEn: [
        { q: "Condition for momentum conservation?", a: "net external force on system is zero" },
        { q: "Direction of p in p=mv?", a: "same as velocity" },
        { q: "Cushioning lengthens action time — effect on force?", a: "reduces force" }
      ],
      hasContent: true,
      ibMap: "IB 动量覆盖，CSCA 重守恒",
      ibMapEn: "IB covers momentum; CSCA emphasizes conservation",
      apMap: "AP Physics1 动量覆盖",
      apMapEn: "AP Physics1 covers momentum",
      aLevelMap: "A-Level 动量为力学考点",
      aLevelMapEn: "A-Level momentum is a mechanics examined topic"
    },
    { id: "phys-energy", name: "功与能", nameEn: "Work & Energy", module: "力学", moduleEn: "Mechanics", weight: "8%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "功与功率", nameEn: "Work & power" }, { name: "动能定理", nameEn: "Work-energy" }, { name: "机械能守恒", nameEn: "Conservation" }],
      concept: "<p>功 W=Fs·cosθ，功率 P=W/t。动能定理：合外力做功等于动能变化。只有重力/弹力做功时机械能守恒。</p>\n<p><b>核心思维：</b>求速度变化优先用动能定理（不用管路径）；判断守恒看是否只有保守力做功。斜面问题常结合机械能守恒。</p>",
      conceptEn: "<p>Work W=Fs·cosθ, power P=W/t. Work-energy theorem: net work equals kinetic-energy change. Mechanical energy is conserved when only gravity/elastic forces do work.</p>\n<p><b>Core thinking:</b> to find a speed change prefer the work-energy theorem (path-independent); to judge conservation check whether only conservative forces do work. Incline problems often use conservation of mechanical energy.</p>",
      formulas: [
        { left: "功", right: "W = Fs\\cos\\theta" },
        { left: "动能", right: "E_k = \\frac{1}{2}mv^2" },
        { left: "重力势能", right: "E_p = mgh" },
        { left: "功率", right: "P = \\frac{W}{t} = Fv" },
        { left: "动能定理", right: "W_{\\text{合}} = \\Delta E_k" }
      ],
      example: {
        problem: "质量 1 kg 物体从静止下落 5 m（g=10），求末速。",
        steps: [
          "只有重力做功，机械能守恒",
          "mgh = ½mv²",
          "v=√(2gh)=√(2×10×5)=10 m/s"
        ],
        answer: "10 m/s",
        tip: "机械能守恒避开了加速度与时间，直接求速度。"
      },
      exampleEn: {
        problem: "A 1 kg object falls 5 m from rest (g=10); find final speed.",
        steps: [
          "Only gravity does work, so mechanical energy conserved",
          "mgh = ½mv²",
          "v=√(2gh)=√(2×10×5)=10 m/s"
        ],
        answer: "10 m/s",
        tip: "Conservation of mechanical energy avoids acceleration and time — solve speed directly."
      },
      practice: [
        { q: "力与位移垂直时做功？", a: "0" },
        { q: "Ek=½mv²，v 加倍动能变几倍？", a: "4 倍" },
        { q: "保守力做功与路径？", a: "无关" }
      ],
      practiceEn: [
        { q: "Work when force is perpendicular to displacement?", a: "0" },
        { q: "Ek=½mv²; if v doubles, kinetic energy becomes how many times?", a: "4×" },
        { q: "Work by a conservative force vs. path?", a: "independent" }
      ],
      hasContent: true,
      ibMap: "IB 功与能覆盖，概念深",
      ibMapEn: "IB covers work and energy with deep concepts",
      apMap: "AP Physics1 能量守恒覆盖",
      apMapEn: "AP Physics1 covers energy conservation",
      aLevelMap: "A-Level 功与能为力学核心",
      aLevelMapEn: "A-Level work and energy are mechanics core"
    },
    { id: "phys-circular", name: "圆周运动", nameEn: "Circular Motion", module: "力学", moduleEn: "Mechanics", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "向心加速度", nameEn: "Centripetal accel." }, { name: "向心力", nameEn: "Centripetal force" }, { name: "万有引力", nameEn: "Gravity" }],
      concept: "<p>匀速圆周运动加速度指向圆心，a=v²/r=ω²r，向心力 F=mv²/r。</p>\n<p><b>核心思维：</b>向心力是「效果力」不是新力，由重力、支持力、摩擦力或引力提供。竖直圆周最高点临界速度 v=√(gr)。天体运动由万有引力提供向心力。</p>",
      conceptEn: "<p>In uniform circular motion the acceleration points to the center: a=v²/r=ω²r, centripetal force F=mv²/r.</p>\n<p><b>Core thinking:</b> centripetal force is a 'resultant-effect force,' not a new one; it is provided by gravity, normal force, friction, or gravity (attraction). Critical speed at the top of a vertical circle is v=√(gr). Celestial motion gets centripetal force from universal gravitation.</p>",
      formulas: [
        { left: "向心加速度", right: "a = \\frac{v^2}{r} = \\omega^2 r" },
        { left: "向心力", right: "F = m\\frac{v^2}{r}" },
        { left: "线速度", right: "v = \\omega r" },
        { left: "万有引力", right: "F = G\\frac{m_1m_2}{r^2}" }
      ],
      example: {
        problem: "m=0.5 kg 物体绕 r=2 m 圆周以 v=4 m/s 运动，求向心力。",
        steps: [
          "F=mv²/r",
          "F=0.5×16/2=4 N"
        ],
        answer: "4 N",
        tip: "向心力由实际受力合成，方向始终指向圆心。"
      },
      exampleEn: {
        problem: "A 0.5 kg object moves in a circle r=2 m at v=4 m/s; find centripetal force.",
        steps: [
          "F=mv²/r",
          "F=0.5×16/2=4 N"
        ],
        answer: "4 N",
        tip: "Centripetal force is the resultant of actual forces, always pointing to the center."
      },
      practice: [
        { q: "匀速圆周运动速度大小变吗？", a: "不变（方向变）" },
        { q: "ω 单位？", a: "rad/s" },
        { q: "最高点临界速度？", a: "√(gr)" }
      ],
      practiceEn: [
        { q: "Does speed magnitude change in uniform circular motion?", a: "no (direction changes)" },
        { q: "Unit of ω?", a: "rad/s" },
        { q: "Critical speed at the top?", a: "√(gr)" }
      ],
      hasContent: true,
      ibMap: "IB 圆周运动覆盖，含引力",
      ibMapEn: "IB covers circular motion including gravitation",
      apMap: "AP Physics1 圆周运动覆盖",
      apMapEn: "AP Physics1 covers circular motion",
      aLevelMap: "A-Level 圆周与引力为考点",
      aLevelMapEn: "A-Level circular motion and gravitation are examined topics"
    },
    { id: "phys-shm", name: "简谐振动与机械波", nameEn: "SHM & Mechanical Waves", module: "力学", moduleEn: "Mechanics", weight: "6%", difficulty: "hard", timeMinutes: 160,
      subs: [{ name: "简谐振动", nameEn: "SHM" }, { name: "单摆", nameEn: "Pendulum" }, { name: "波的性质", nameEn: "Wave properties" }],
      concept: "<p>简谐振动回复力 F=−kx，位移 x=Acos(ωt)。单摆周期 T=2π√(l/g)。波传播振动形式和能量。</p>\n<p><b>核心思维：</b>SHM 是周期性运动，加速度与位移反向且正比。波的干涉看相位差，衍射明显条件：障碍物尺寸≈波长。</p>",
      conceptEn: "<p>Simple harmonic motion has restoring force F=−kx and displacement x=Acos(ωt). A pendulum's period is T=2π√(l/g). A wave transmits vibration form and energy.</p>\n<p><b>Core thinking:</b> SHM is periodic; acceleration is opposite to and proportional to displacement. Wave interference depends on phase difference; diffraction is noticeable when obstacle size ≈ wavelength.</p>",
      formulas: [
        { left: "回复力", right: "F = -kx" },
        { left: "位移", right: "x = A\\cos(\\omega t)" },
        { left: "单摆周期", right: "T = 2\\pi\\sqrt{\\frac{l}{g}}" },
        { left: "波速", right: "v = \\lambda f" }
      ],
      example: {
        problem: "单摆长 1 m（g=10），求周期。",
        steps: [
          "T=2π√(l/g)",
          "T=2π√(1/10)≈2×3.14×0.316≈1.99 s"
        ],
        answer: "约 2 s",
        tip: "单摆周期与摆球质量无关。"
      },
      exampleEn: {
        problem: "Pendulum length 1 m (g=10); find the period.",
        steps: [
          "T=2π√(l/g)",
          "T=2π√(1/10)≈2×3.14×0.316≈1.99 s"
        ],
        answer: "≈ 2 s",
        tip: "Pendulum period is independent of bob mass."
      },
      practice: [
        { q: "SHM 加速度方向？", a: "指向平衡位置" },
        { q: "波速公式？", a: "v=λf" },
        { q: "振幅越大周期越大？", a: "否（与振幅无关）" }
      ],
      practiceEn: [
        { q: "Direction of SHM acceleration?", a: "toward equilibrium position" },
        { q: "Wave-speed formula?", a: "v=λf" },
        { q: "Larger amplitude → larger period?", a: "no (independent of amplitude)" }
      ],
      hasContent: true,
      ibMap: "IB 波与SHM覆盖，偏概念",
      ibMapEn: "IB covers waves and SHM, concept-oriented",
      apMap: "AP Physics1 波覆盖，SHM浅",
      apMapEn: "AP Physics1 covers waves; SHM is shallow",
      aLevelMap: "A-Level SHM 与波为考点",
      aLevelMapEn: "A-Level SHM and waves are examined topics"
    },
    { id: "phys-electrostatics", name: "静电场", nameEn: "Electrostatics", module: "电磁学", moduleEn: "Electromagnetism", weight: "8%", difficulty: "hard", timeMinutes: 170,
      subs: [{ name: "库仑定律", nameEn: "Coulomb" }, { name: "电场强度", nameEn: "Field" }, { name: "电势与电势能", nameEn: "Potential" }],
      concept: "<p>库仑力 F=kQ₁Q₂/r²，电场 E=F/q=kQ/r²。电势 φ=kQ/r，电势能 Ep=qφ。</p>\n<p><b>核心思维：</b>场强是矢量（叠加用平行四边形），电势是标量（直接代数加）。正电荷电场向外，负电荷向内。</p>",
      conceptEn: "<p>Coulomb force F=kQ₁Q₂/r², field E=F/q=kQ/r². Potential φ=kQ/r, potential energy Ep=qφ.</p>\n<p><b>Core thinking:</b> field strength is a vector (superpose by the parallelogram rule), potential is a scalar (add algebraically). A positive charge's field points outward, a negative charge's inward.</p>",
      formulas: [
        { left: "库仑定律", right: "F = k\\frac{Q_1Q_2}{r^2}" },
        { left: "场强", right: "E = \\frac{F}{q} = k\\frac{Q}{r^2}" },
        { left: "电势", right: "\\varphi = k\\frac{Q}{r}" },
        { left: "电容", right: "C = \\frac{Q}{U}" }
      ],
      example: {
        problem: "两点电荷各 +1×10⁻⁶ C，相距 0.1 m，求库仑力（k=9×10⁹）。",
        steps: [
          "F=kQ₁Q₂/r²",
          "F=9e9×1e-12/0.01=9e-1=0.9 N",
          "同种电荷相斥"
        ],
        answer: "0.9 N（斥力）",
        tip: "代入前先统一单位到 SI。"
      },
      exampleEn: {
        problem: "Two charges each +1×10⁻⁶ C, 0.1 m apart; find Coulomb force (k=9×10⁹).",
        steps: [
          "F=kQ₁Q₂/r²",
          "F=9e9×1e-12/0.01=9e-1=0.9 N",
          "like charges repel"
        ],
        answer: "0.9 N (repulsive)",
        tip: "Unify units to SI before substituting."
      },
      practice: [
        { q: "电场强度方向定义？", a: "正电荷受力方向" },
        { q: "等量同种电荷中点场强？", a: "0" },
        { q: "电容单位？", a: "F（法拉）" }
      ],
      practiceEn: [
        { q: "Definition of field-strength direction?", a: "direction of force on a positive charge" },
        { q: "Field at midpoint between equal like charges?", a: "0" },
        { q: "Unit of capacitance?", a: "F (farad)" }
      ],
      hasContent: true,
      ibMap: "IB 电场覆盖，CSCA 重计算",
      ibMapEn: "IB covers electric fields; CSCA emphasizes calculation",
      apMap: "AP Physics2 电场覆盖",
      apMapEn: "AP Physics2 covers electric fields",
      aLevelMap: "A-Level 电场为模块考点",
      aLevelMapEn: "A-Level electric fields are a module examined topic"
    },
    { id: "phys-dc", name: "直流电路", nameEn: "DC Circuits", module: "电磁学", moduleEn: "Electromagnetism", weight: "8%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "欧姆定律", nameEn: "Ohm" }, { name: "串并联", nameEn: "Series/parallel" }, { name: "电功率", nameEn: "Power" }],
      concept: "<p>欧姆定律 I=U/R。串联 R=R₁+R₂，并联 1/R=1/R₁+1/R₂。电功率 P=UI。</p>\n<p><b>核心思维：</b>复杂电路先化简等效电阻；分压、分流按比例；实际电源考虑内阻时端电压 U=E−Ir。</p>",
      conceptEn: "<p>Ohm's law I=U/R. Series R=R₁+R₂, parallel 1/R=1/R₁+1/R₂. Electric power P=UI.</p>\n<p><b>Core thinking:</b> simplify complex circuits to equivalent resistance first; voltage/current division is proportional; for a real source with internal resistance, terminal voltage U=E−Ir.</p>",
      formulas: [
        { left: "欧姆定律", right: "I = \\frac{U}{R}" },
        { left: "串联", right: "R = R_1 + R_2" },
        { left: "并联", right: "\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2}" },
        { left: "功率", right: "P = UI = I^2R = \\frac{U^2}{R}" }
      ],
      example: {
        problem: "R₁=4Ω, R₂=6Ω 串联接 10 V，求电流。",
        steps: [
          "R=4+6=10 Ω",
          "I=U/R=10/10=1 A"
        ],
        answer: "1 A",
        tip: "串联电流相等，并联电压相等。"
      },
      exampleEn: {
        problem: "R₁=4Ω, R₂=6Ω in series across 10 V; find current.",
        steps: [
          "R=4+6=10 Ω",
          "I=U/R=10/10=1 A"
        ],
        answer: "1 A",
        tip: "Series: equal current; parallel: equal voltage."
      },
      practice: [
        { q: "两 10Ω 并联等效电阻？", a: "5Ω" },
        { q: "R 加倍 I 如何变（U 不变）？", a: "减半" },
        { q: "电源内阻消耗的是？", a: "功率" }
      ],
      practiceEn: [
        { q: "Equivalent resistance of two 10Ω in parallel?", a: "5Ω" },
        { q: "If R doubles (U fixed), how does I change?", a: "halves" },
        { q: "What does a source's internal resistance consume?", a: "power" }
      ],
      hasContent: true,
      ibMap: "IB 电路覆盖，CSCA 重分析",
      ibMapEn: "IB covers circuits; CSCA emphasizes analysis",
      apMap: "AP Physics2 电路覆盖",
      apMapEn: "AP Physics2 covers circuits",
      aLevelMap: "A-Level 直流电路为考点",
      aLevelMapEn: "A-Level DC circuits are an examined topic"
    },
    { id: "phys-magnetism", name: "磁场", nameEn: "Magnetic Fields", module: "电磁学", moduleEn: "Electromagnetism", weight: "6%", difficulty: "hard", timeMinutes: 160,
      subs: [{ name: "安培力", nameEn: "Ampere force" }, { name: "洛伦兹力", nameEn: "Lorentz force" }, { name: "磁场中的运动", nameEn: "Motion in B" }],
      concept: "<p>电流在磁场受安培力 F=BIL·sinθ；运动电荷受洛伦兹力 F=qvB。洛伦兹力不做功，只改变速度方向。</p>\n<p><b>核心思维：</b>用左手定则判力方向。垂直磁场中带电粒子做匀速圆周运动，半径 r=mv/qB。</p>",
      conceptEn: "<p>A current in a magnetic field feels Ampere force F=BIL·sinθ; a moving charge feels Lorentz force F=qvB. The Lorentz force does no work, only changing the velocity direction.</p>\n<p><b>Core thinking:</b> use the left-hand rule to judge force direction. A charged particle in a perpendicular field moves in uniform circular motion, radius r=mv/qB.</p>",
      formulas: [
        { left: "安培力", right: "F = BIL\\sin\\theta" },
        { left: "洛伦兹力", right: "F = qvB" },
        { left: "轨道半径", right: "r = \\frac{mv}{qB}" },
        { left: "周期", right: "T = \\frac{2\\pi m}{qB}" }
      ],
      example: {
        problem: "q=1.6×10⁻¹⁹ C, v=10⁶ m/s 垂直入 B=0.1 T，求洛伦兹力。",
        steps: [
          "F=qvB",
          "F=1.6e-19×1e6×0.1=1.6e-14 N"
        ],
        answer: "1.6×10⁻¹⁴ N",
        tip: "速度垂直磁场时力最大且充当向心力。"
      },
      exampleEn: {
        problem: "q=1.6×10⁻¹⁹ C, v=10⁶ m/s entering perpendicularly B=0.1 T; find Lorentz force.",
        steps: [
          "F=qvB",
          "F=1.6e-19×1e6×0.1=1.6e-14 N"
        ],
        answer: "1.6×10⁻¹⁴ N",
        tip: "Force is maximal when velocity is perpendicular to the field and acts as centripetal force."
      },
      practice: [
        { q: "洛伦兹力做功？", a: "不做功" },
        { q: "左手定则判什么方向？", a: "受力方向" },
        { q: "B 单位？", a: "T（特斯拉）" }
      ],
      practiceEn: [
        { q: "Does the Lorentz force do work?", a: "no work" },
        { q: "What direction does the left-hand rule give?", a: "force direction" },
        { q: "Unit of B?", a: "T (tesla)" }
      ],
      hasContent: true,
      ibMap: "IB 磁场覆盖，CSCA 重洛伦兹",
      ibMapEn: "IB covers magnetic fields; CSCA emphasizes Lorentz force",
      apMap: "AP Physics2 磁场覆盖",
      apMapEn: "AP Physics2 covers magnetic fields",
      aLevelMap: "A-Level 磁场为模块考点",
      aLevelMapEn: "A-Level magnetic fields are a module examined topic"
    },
    { id: "phys-induction", name: "电磁感应", nameEn: "Electromagnetic Induction", module: "电磁学", moduleEn: "Electromagnetism", weight: "6%", difficulty: "hard", timeMinutes: 160,
      subs: [{ name: "法拉第定律", nameEn: "Faraday" }, { name: "楞次定律", nameEn: "Lenz" }],
      concept: "<p>磁通变化产生感应电动势 ε=−dΦ/dt（负号即楞次定律：阻碍变化）。</p>\n<p><b>核心思维：</b>先判磁通如何变，再由楞次定律定感应电流方向（阻碍变化）。导体切割磁感线 ε=BLv。</p>",
      conceptEn: "<p>A changing magnetic flux induces an emf ε=−dΦ/dt (the minus sign is Lenz's law: oppose the change).</p>\n<p><b>Core thinking:</b> first judge how the flux changes, then use Lenz's law to set the induced-current direction (opposing the change). A conductor cutting field lines gives ε=BLv.</p>",
      formulas: [
        { left: "法拉第", right: "\\varepsilon = -\\frac{d\\Phi}{dt}" },
        { left: "切割", right: "\\varepsilon = BLv" },
        { left: "磁通", right: "\\Phi = BS\\cos\\theta" }
      ],
      example: {
        problem: "B=0.5 T, L=0.4 m 导体以 v=2 m/s 垂直切割，求 ε。",
        steps: [
          "ε=BLv",
          "ε=0.5×0.4×2=0.4 V"
        ],
        answer: "0.4 V",
        tip: "速度垂直磁场和导体时感应电动势最大。"
      },
      exampleEn: {
        problem: "B=0.5 T, L=0.4 m conductor moving perpendicularly at v=2 m/s; find ε.",
        steps: [
          "ε=BLv",
          "ε=0.5×0.4×2=0.4 V"
        ],
        answer: "0.4 V",
        tip: "Induced emf is maximal when velocity is perpendicular to both field and conductor."
      },
      practice: [
        { q: "楞次定律核心？", a: "阻碍磁通变化" },
        { q: "磁通单位？", a: "Wb（韦伯）" },
        { q: "互感属于？", a: "电磁感应" }
      ],
      practiceEn: [
        { q: "Core of Lenz's law?", a: "oppose the flux change" },
        { q: "Unit of magnetic flux?", a: "Wb (weber)" },
        { q: "Mutual inductance belongs to?", a: "electromagnetic induction" }
      ],
      hasContent: true,
      ibMap: "IB 物理涵盖，CSCA 更重速度",
      ibMapEn: "IB physics covers it; CSCA emphasizes rate of change",
      apMap: "AP Physics2 电磁感应覆盖",
      apMapEn: "AP Physics2 covers electromagnetic induction",
      aLevelMap: "A-Level 电磁感应为模块考点",
      aLevelMapEn: "A-Level electromagnetic induction is a module examined topic"
    },
    { id: "phys-kinetic", name: "气体动理论", nameEn: "Kinetic Theory", module: "热学", moduleEn: "Thermodynamics", weight: "4%", difficulty: "medium", timeMinutes: 140,
      subs: [{ name: "分子运动", nameEn: "Molecular motion" }, { name: "压强势源", nameEn: "Pressure origin" }],
      concept: "<p>气体由大量无规则运动的分子组成，压强来自分子对器壁的碰撞。温度反映分子平均动能。</p>\n<p><b>核心思维：</b>温度是分子平均动能的标志；绝对零度时分子热运动停止（理想情况）。</p>",
      conceptEn: "<p>A gas consists of many randomly moving molecules; pressure comes from molecular collisions with the walls. Temperature reflects average molecular kinetic energy.</p>\n<p><b>Core thinking:</b> temperature is a sign of average molecular kinetic energy; at absolute zero molecular thermal motion stops (ideally).</p>",
      formulas: [
        { left: "压强", right: "p = \\frac{1}{3}\\frac{Nm\\overline{v^2}}{V}" },
        { left: "平均动能", right: "\\overline{E_k} = \\frac{3}{2}kT" }
      ],
      example: {
        problem: "温度升高，分子平均动能如何变？",
        steps: [
          "平均动能∝T",
          "升高→增大"
        ],
        answer: "增大",
        tip: "同一温度下不同气体分子平均动能相同。"
      },
      exampleEn: {
        problem: "How does average molecular kinetic energy change when temperature rises?",
        steps: [
          "average KE ∝ T",
          "rises → increases"
        ],
        answer: "increases",
        tip: "At the same temperature, different gases have the same average molecular KE."
      },
      practice: [
        { q: "温度是何标志？", a: "分子平均动能" },
        { q: "压强微观来源？", a: "分子碰撞器壁" },
        { q: "T→0 分子运动？", a: "停止（理想）" }
      ],
      practiceEn: [
        { q: "What does temperature signify?", a: "average molecular kinetic energy" },
        { q: "Microscopic source of pressure?", a: "molecular collisions with walls" },
        { q: "As T→0, molecular motion?", a: "stops (ideal)" }
      ],
      hasContent: true,
      ibMap: "IB 气体动理论覆盖，偏概念",
      ibMapEn: "IB covers kinetic theory of gases, concept-oriented",
      apMap: "AP Physics2 热学覆盖",
      apMapEn: "AP Physics2 covers thermodynamics",
      aLevelMap: "A-Level 分子动理论为考点",
      aLevelMapEn: "A-Level kinetic theory of molecules is an examined topic"
    },
    { id: "phys-ideal-gas", name: "理想气体", nameEn: "Ideal Gas", module: "热学", moduleEn: "Thermodynamics", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "状态方程", nameEn: "Equation of state" }, { name: "等温/等压/等容", nameEn: "Processes" }],
      concept: "<p>理想气体状态方程 pV=nRT。一定质量气体 pV/T=常量。</p>\n<p><b>核心思维：</b>分析气体变化先固定不变量：等温(pV=const)、等压(V/T=const)、等容(p/T=const)。</p>",
      conceptEn: "<p>Ideal gas law pV=nRT. For a fixed mass of gas, pV/T = constant.</p>\n<p><b>Core thinking:</b> analyze gas changes by fixing the invariant: isothermal (pV=const), isobaric (V/T=const), isochoric (p/T=const).</p>",
      formulas: [
        { left: "状态方程", right: "pV = nRT" },
        { left: "过程", right: "\\frac{pV}{T} = \\text{常量}" },
        { left: "等温", right: "p_1V_1 = p_2V_2" }
      ],
      example: {
        problem: "一定质量气体等温压缩，体积减半，压强如何变？",
        steps: [
          "等温 pV=const",
          "V减半→p加倍"
        ],
        answer: "加倍",
        tip: "等温过程温度不变，p 与 V 反比。"
      },
      exampleEn: {
        problem: "A fixed-mass gas is compressed isothermally to half volume; how does pressure change?",
        steps: [
          "isothermal: pV=const",
          "V halves → p doubles"
        ],
        answer: "doubles",
        tip: "In an isothermal process temperature is constant, p and V are inversely related."
      },
      practice: [
        { q: "R 是？", a: "气体常量" },
        { q: "n 单位？", a: "mol" },
        { q: "等压升温体积？", a: "增大" }
      ],
      practiceEn: [
        { q: "What is R?", a: "gas constant" },
        { q: "Unit of n?", a: "mol" },
        { q: "Isobaric heating — volume?", a: "increases" }
      ],
      hasContent: true,
      ibMap: "IB 理想气体 pV=nRT 覆盖",
      ibMapEn: "IB covers ideal gas pV=nRT",
      apMap: "AP Physics2 气体定律覆盖",
      apMapEn: "AP Physics2 covers gas laws",
      aLevelMap: "A-Level 气体定律为考点",
      aLevelMapEn: "A-Level gas laws are an examined topic"
    },
    { id: "phys-thermo1", name: "热力学第一定律", nameEn: "First Law of Thermodynamics", module: "热学", moduleEn: "Thermodynamics", weight: "5%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "内能", nameEn: "Internal energy" }, { name: "做功与传热", nameEn: "Work & heat" }],
      concept: "<p>热力学第一定律 ΔU=Q+W（Q 吸热为正，W 外界对气体做功为正）。能量守恒在热学中的体现。</p>\n<p><b>核心思维：</b>气体膨胀对外做功 W 为负；等容过程 W=0（Q 全变内能）；绝热 Q=0。</p>",
      conceptEn: "<p>The first law of thermodynamics ΔU=Q+W (Q positive when heat is absorbed, W positive when work is done on the gas). It is energy conservation in thermodynamics.</p>\n<p><b>Core thinking:</b> when a gas expands it does work on the outside, W is negative; isochoric W=0 (all Q becomes internal energy); adiabatic Q=0.</p>",
      formulas: [
        { left: "第一定律", right: "\\Delta U = Q + W" },
        { left: "等容", right: "W = 0,\\; \\Delta U = Q" }
      ],
      example: {
        problem: "气体吸热 100 J 同时对外做功 40 J，内能变化？",
        steps: [
          "W 对外做功为负：W=−40",
          "ΔU=Q+W=100−40=60 J"
        ],
        answer: "+60 J",
        tip: "明确符号约定：吸热正、外界对气体做功正。"
      },
      exampleEn: {
        problem: "A gas absorbs 100 J of heat while doing 40 J of work on the outside; change in internal energy?",
        steps: [
          "work done by gas is negative: W=−40",
          "ΔU=Q+W=100−40=60 J"
        ],
        answer: "+60 J",
        tip: "Fix the sign convention: heat absorbed positive, work done on gas positive."
      },
      practice: [
        { q: "绝热过程 Q？", a: "0" },
        { q: "等容过程 W？", a: "0" },
        { q: "ΔU 含义？", a: "内能变化" }
      ],
      practiceEn: [
        { q: "In an adiabatic process Q?", a: "0" },
        { q: "In an isochoric process W?", a: "0" },
        { q: "Meaning of ΔU?", a: "change in internal energy" }
      ],
      hasContent: true,
      ibMap: "IB 热力学覆盖，CSCA 重应用",
      ibMapEn: "IB covers thermodynamics; CSCA emphasizes application",
      apMap: "AP Physics2 热力学覆盖",
      apMapEn: "AP Physics2 covers thermodynamics",
      aLevelMap: "A-Level 热力学为模块考点",
      aLevelMapEn: "A-Level thermodynamics is a module examined topic"
    },
    { id: "phys-geom-optics", name: "几何光学", nameEn: "Geometric Optics", module: "光学", moduleEn: "Optics", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "折射定律", nameEn: "Refraction" }, { name: "透镜成像", nameEn: "Lenses" }],
      concept: "<p>折射 n₁sinθ₁=n₂sinθ₂。薄透镜成像 1/u+1/v=1/f，放大率 m=v/u。</p>\n<p><b>核心思维：</b>实物实像用实线，虚像用虚线。凸透镜焦距正、凹透镜负；成像规律记 u>2f、f<u<2f 两区间。</p>",
      conceptEn: "<p>Refraction n₁sinθ₁=n₂sinθ₂. Thin-lens imaging 1/u+1/v=1/f, magnification m=v/u.</p>\n<p><b>Core thinking:</b> real objects/images use solid lines, virtual images dashed. Convex lens focal length positive, concave negative; remember the two regimes u>2f and f<u<2f.</p>",
      formulas: [
        { left: "折射", right: "n_1\\sin\\theta_1 = n_2\\sin\\theta_2" },
        { left: "透镜", right: "\\frac{1}{u} + \\frac{1}{v} = \\frac{1}{f}" },
        { left: "放大率", right: "m = \\frac{v}{u}" }
      ],
      example: {
        problem: "u=30 cm, f=10 cm 凸透镜，求像距。",
        steps: [
          "1/v=1/f−1/u=1/10−1/30=2/30",
          "v=15 cm"
        ],
        answer: "15 cm",
        tip: "实像 v 正，虚像 v 负；放大率绝对值>1 为放大。"
      },
      exampleEn: {
        problem: "u=30 cm, f=10 cm convex lens; find image distance.",
        steps: [
          "1/v=1/f−1/u=1/10−1/30=2/30",
          "v=15 cm"
        ],
        answer: "15 cm",
        tip: "Real image v positive, virtual v negative; |m|>1 means magnified."
      },
      practice: [
        { q: "凸透镜 f 符号？", a: "正" },
        { q: "全反射条件？", a: "光密→光疏且角大" },
        { q: "m>1 表示？", a: "放大" }
      ],
      practiceEn: [
        { q: "Sign of convex-lens f?", a: "positive" },
        { q: "Condition for total internal reflection?", a: "dense→rare medium with large angle" },
        { q: "m>1 means?", a: "magnified" }
      ],
      hasContent: true,
      ibMap: "IB 几何光学覆盖，偏实验",
      ibMapEn: "IB covers geometric optics, experiment-oriented",
      apMap: "AP Physics2 光学覆盖",
      apMapEn: "AP Physics2 covers optics",
      aLevelMap: "A-Level 几何光学为考点",
      aLevelMapEn: "A-Level geometric optics is an examined topic"
    },
    { id: "phys-wave-optics", name: "波动光学", nameEn: "Wave Optics", module: "光学", moduleEn: "Optics", weight: "4%", difficulty: "hard", timeMinutes: 150,
      subs: [{ name: "干涉", nameEn: "Interference" }, { name: "衍射", nameEn: "Diffraction" }],
      concept: "<p>双缝干涉条纹间距 Δx=Lλ/d。光的波动性体现于干涉与衍射。</p>\n<p><b>核心思维：</b>干涉加强条件光程差 kλ，减弱 (k+½)λ。波长越长、缝距越小，条纹越宽。</p>",
      conceptEn: "<p>Double-slit fringe spacing Δx=Lλ/d. Light's wave nature shows in interference and diffraction.</p>\n<p><b>Core thinking:</b> constructive interference when path difference kλ, destructive (k+½)λ. Longer wavelength or smaller slit spacing → wider fringes.</p>",
      formulas: [
        { left: "条纹间距", right: "\\Delta x = \\frac{L\\lambda}{d}" },
        { left: "加强", right: "\\delta = k\\lambda" },
        { left: "减弱", right: "\\delta = (k+\\tfrac{1}{2})\\lambda" }
      ],
      example: {
        problem: "双缝 L=1 m, d=1 mm, λ=500 nm，求条纹间距。",
        steps: [
          "Δx=Lλ/d=1×5e-7/1e-3=5e-4 m=0.5 mm"
        ],
        answer: "0.5 mm",
        tip: "统一单位到米再算。"
      },
      exampleEn: {
        problem: "Double slit L=1 m, d=1 mm, λ=500 nm; find fringe spacing.",
        steps: [
          "Δx=Lλ/d=1×5e-7/1e-3=5e-4 m=0.5 mm"
        ],
        answer: "0.5 mm",
        tip: "Unify units to meters before calculating."
      },
      practice: [
        { q: "干涉是波什么性质体现？", a: "叠加性" },
        { q: "波长增大条纹间距？", a: "增大" },
        { q: "衍射明显条件？", a: "障碍物≈波长" }
      ],
      practiceEn: [
        { q: "Interference reflects which wave property?", a: "superposition" },
        { q: "Longer wavelength → fringe spacing?", a: "increases" },
        { q: "Condition for noticeable diffraction?", a: "obstacle ≈ wavelength" }
      ],
      hasContent: true,
      ibMap: "IB 波动光学覆盖，偏概念",
      ibMapEn: "IB covers wave optics, concept-oriented",
      apMap: "AP Physics2 波动光学覆盖",
      apMapEn: "AP Physics2 covers wave optics",
      aLevelMap: "A-Level 物理光学为考点",
      aLevelMapEn: "A-Level physical optics is an examined topic"
    },
    { id: "phys-photoelectric", name: "光电效应", nameEn: "Photoelectric Effect", module: "近代物理", moduleEn: "Modern Physics", weight: "4%", difficulty: "hard", timeMinutes: 150,
      subs: [{ name: "光子能量", nameEn: "Photon" }, { name: "截止频率", nameEn: "Threshold" }],
      concept: "<p>光子能量 E=hν。光电效应方程 hν=W+E_k，仅当 ν>ν₀（截止频率）才逸出电子。</p>\n<p><b>核心思维：</b>光强只增加光电子数，不改变最大初动能；初动能由频率决定。这是光的粒子性证据。</p>",
      conceptEn: "<p>Photon energy E=hν. Photoelectric equation hν=W+E_k; electrons are emitted only if ν>ν₀ (threshold frequency).</p>\n<p><b>Core thinking:</b> intensity only increases the number of photoelectrons, not their max initial kinetic energy; the initial KE is set by frequency. This is evidence of light's particle nature.</p>",
      formulas: [
        { left: "光子能量", right: "E = h\\nu" },
        { left: "光电方程", right: "h\\nu = W + E_k" },
        { left: "截止", right: "\\nu_0 = \\frac{W}{h}" }
      ],
      example: {
        problem: "ν=8×10¹⁴ Hz, W=2 eV (hν≈3.3 eV)，求 E_k。",
        steps: [
          "hν=3.3 eV",
          "E_k=hν−W=3.3−2=1.3 eV"
        ],
        answer: "1.3 eV",
        tip: "E_k 不能为负；ν<ν₀ 无电子逸出。"
      },
      exampleEn: {
        problem: "ν=8×10¹⁴ Hz, W=2 eV (hν≈3.3 eV); find E_k.",
        steps: [
          "hν=3.3 eV",
          "E_k=hν−W=3.3−2=1.3 eV"
        ],
        answer: "1.3 eV",
        tip: "E_k cannot be negative; if ν<ν₀ no electron is emitted."
      },
      practice: [
        { q: "光强增大影响？", a: "光电子数增多" },
        { q: "截止频率意义？", a: "能发生光电效应的下限" },
        { q: "h 是？", a: "普朗克常量" }
      ],
      practiceEn: [
        { q: "Increasing intensity affects?", a: "more photoelectrons" },
        { q: "Meaning of threshold frequency?", a: "lower limit for the effect to occur" },
        { q: "h is?", a: "Planck constant" }
      ],
      hasContent: true,
      ibMap: "IB 光电效应覆盖，偏概念",
      ibMapEn: "IB covers photoelectric effect, concept-oriented",
      apMap: "AP Physics2 光电效应覆盖",
      apMapEn: "AP Physics2 covers photoelectric effect",
      aLevelMap: "A-Level 光电效应部分覆盖",
      aLevelMapEn: "A-Level partially covers photoelectric effect"
    },
    { id: "phys-atom", name: "原子物理", nameEn: "Atomic Physics", module: "近代物理", moduleEn: "Modern Physics", weight: "5%", difficulty: "hard", timeMinutes: 150,
      subs: [{ name: "玻尔模型", nameEn: "Bohr model" }, { name: "能级", nameEn: "Energy levels" }],
      concept: "<p>玻尔模型：氢原子能级 Eₙ=−13.6/n² eV，跃迁辐射/吸收光子 hν=ΔE。</p>\n<p><b>核心思维：</b>n 越大能级越高（负得少）、轨道半径越大；从高能级到低能级发光。基态 n=1 最稳定。</p>",
      conceptEn: "<p>Bohr model: hydrogen energy level Eₙ=−13.6/n² eV; transition emits/absorbs a photon hν=ΔE.</p>\n<p><b>Core thinking:</b> larger n → higher level (less negative) and larger orbit radius; light is emitted going from high to low level. Ground state n=1 is most stable.</p>",
      formulas: [
        { left: "能级", right: "E_n = -\\frac{13.6}{n^2}\\text{ eV}" },
        { left: "跃迁", right: "h\\nu = |E_{n_2}-E_{n_1}|" },
        { left: "轨道", right: "r_n = n^2 a_0" }
      ],
      example: {
        problem: "氢原子从 n=2 跃迁到 n=1，求辐射光子能量。",
        steps: [
          "E₁=−13.6, E₂=−3.4",
          "ΔE=10.2 eV"
        ],
        answer: "10.2 eV",
        tip: "高能级减式注意负号，辐射取正值。"
      },
      exampleEn: {
        problem: "Hydrogen atom transitions from n=2 to n=1; find emitted photon energy.",
        steps: [
          "E₁=−13.6, E₂=−3.4",
          "ΔE=10.2 eV"
        ],
        answer: "10.2 eV",
        tip: "Watch the negative sign in the higher level; emission takes the positive value."
      },
      practice: [
        { q: "基态 n？", a: "1" },
        { q: "n 增大半径？", a: "增大" },
        { q: "电离能约？", a: "13.6 eV" }
      ],
      practiceEn: [
        { q: "Ground-state n?", a: "1" },
        { q: "As n increases, radius?", a: "increases" },
        { q: "Approx. ionization energy?", a: "13.6 eV" }
      ],
      hasContent: true,
      ibMap: "IB 原子物理覆盖，玻尔模型",
      ibMapEn: "IB covers atomic physics including the Bohr model",
      apMap: "AP Physics2 原子物理覆盖",
      apMapEn: "AP Physics2 covers atomic physics",
      aLevelMap: "A-Level 原子结构为考点",
      aLevelMapEn: "A-Level atomic structure is an examined topic"
    },
    { id: "phys-nuclear", name: "核物理", nameEn: "Nuclear Physics", module: "近代物理", moduleEn: "Modern Physics", weight: "5%", difficulty: "hard", timeMinutes: 150,
      subs: [{ name: "质能方程", nameEn: "Mass-energy" }, { name: "衰变与半衰期", nameEn: "Decay" }],
      concept: "<p>质能方程 E=mc²，质量亏损转化为核能。放射性衰变 N=N₀(½)^{t/T}，半衰期 T 与元素种类有关。</p>\n<p><b>核心思维：</b>衰变是概率过程，半衰期不受温度压强影响；α、β、γ 各自穿透能力不同。</p>",
      conceptEn: "<p>Mass-energy equation E=mc²; mass defect converts to nuclear energy. Radioactive decay N=N₀(½)^{t/T}; half-life T depends on the nuclide.</p>\n<p><b>Core thinking:</b> decay is probabilistic; half-life is unaffected by temperature or pressure; α, β, γ have different penetrating abilities.</p>",
      formulas: [
        { left: "质能", right: "E = mc^2" },
        { left: "衰变", right: "N = N_0\\left(\\tfrac{1}{2}\\right)^{t/T}" },
        { left: "活度", right: "A = \\lambda N" }
      ],
      example: {
        problem: "某核素半衰期 2 h，初始 8 g，6 h 后剩余？",
        steps: [
          "t/T=6/2=3 个半衰期",
          "m=8×(½)³=1 g"
        ],
        answer: "1 g",
        tip: "每过一个半衰期质量减半。"
      },
      exampleEn: {
        problem: "A nuclide with half-life 2 h, initial 8 g; remaining after 6 h?",
        steps: [
          "t/T=6/2=3 half-lives",
          "m=8×(½)³=1 g"
        ],
        answer: "1 g",
        tip: "Each half-life halves the mass."
      },
      practice: [
        { q: "半衰期受温度影响？", a: "否" },
        { q: "γ 射线穿透性？", a: "最强" },
        { q: "α 粒子是？", a: "氦核" }
      ],
      practiceEn: [
        { q: "Is half-life affected by temperature?", a: "no" },
        { q: "Penetrating power of γ rays?", a: "strongest" },
        { q: "An α particle is?", a: "helium nucleus" }
      ],
      hasContent: true,
      ibMap: "IB 核物理覆盖，偏概念",
      ibMapEn: "IB covers nuclear physics, concept-oriented",
      apMap: "AP Physics2 核物理覆盖",
      apMapEn: "AP Physics2 covers nuclear physics",
      aLevelMap: "A-Level 核物理为考点",
      aLevelMapEn: "A-Level nuclear physics is an examined topic"
    },
    { id: "phys-relativity", name: "相对论简介", nameEn: "Introduction to Relativity", module: "近代物理", moduleEn: "Modern Physics", weight: "3%", difficulty: "hard", timeMinutes: 140,
      subs: [{ name: "时间膨胀", nameEn: "Time dilation" }, { name: "质能关系", nameEn: "Mass-energy" }],
      concept: "<p>狭义相对论：光速不变，运动参考系中时间变慢、长度缩短，质量与能量等价 E=mc²。</p>\n<p><b>核心思维：</b>相对论效应在速度接近 c 才显著；质能方程说明质量即能量。</p>",
      conceptEn: "<p>Special relativity: light speed is constant; in a moving frame time slows and length contracts, and mass equals energy E=mc².</p>\n<p><b>Core thinking:</b> relativistic effects are significant only near c; the mass-energy equation says mass is energy.</p>",
      formulas: [
        { left: "时间膨胀", right: "t' = \\frac{t}{\\sqrt{1-v^2/c^2}}" },
        { left: "长度收缩", right: "L' = L\\sqrt{1-v^2/c^2}" },
        { left: "质能", right: "E = mc^2" }
      ],
      example: {
        problem: "v=0.8c 时，本征时间 t=1 s 的运动系观测时间？",
        steps: [
          "√(1−0.64)=0.6",
          "t′=1/0.6≈1.67 s"
        ],
        answer: "约 1.67 s",
        tip: "速度越大时间膨胀越明显。"
      },
      exampleEn: {
        problem: "At v=0.8c, observed time in the moving frame for proper time t=1 s?",
        steps: [
          "√(1−0.64)=0.6",
          "t′=1/0.6≈1.67 s"
        ],
        answer: "≈ 1.67 s",
        tip: "The greater the speed, the more pronounced time dilation."
      },
      practice: [
        { q: "光速在任何参考系？", a: "不变" },
        { q: "v≪c 相对论效应？", a: "可忽略" },
        { q: "E=mc² 说明？", a: "质能等价" }
      ],
      practiceEn: [
        { q: "Light speed in any frame?", a: "constant" },
        { q: "For v≪c, relativistic effects?", a: "negligible" },
        { q: "E=mc² means?", a: "mass-energy equivalence" }
      ],
      hasContent: true,
      ibMap: "IB 相对论为选修，覆盖",
      ibMapEn: "IB relativity is an elective and is covered",
      apMap: "AP 不考相对论",
      apMapEn: "AP does not examine relativity",
      aLevelMap: "A-Level 一般不考相对论",
      aLevelMapEn: "A-Level generally does not examine relativity"
    },
    { id: "phys-measurement", name: "物理实验与测量", nameEn: "Experiments & Measurement", module: "实验", moduleEn: "Experiments", weight: "4%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "误差", nameEn: "Errors" }, { name: "有效数字", nameEn: "Significant figures" }],
      concept: "<p>测量有系统误差与偶然误差；用多次测量取平均减小偶然误差。有效数字反映测量精度。</p>\n<p><b>核心思维：</b>计算结果的精度不超过原始数据；相对误差 = 绝对误差/真值。作图法可求斜率。</p>",
      conceptEn: "<p>Measurements have systematic and random errors; repeated averaging reduces random error. Significant figures reflect measurement precision.</p>\n<p><b>Core thinking:</b> a result's precision should not exceed the raw data; relative error = absolute error / true value. The graphing method can find a slope.</p>",
      formulas: [
        { left: "平均值", right: "\\bar{x} = \\frac{1}{n}\\sum x_i" },
        { left: "相对误差", right: "\\delta = \\frac{|\\Delta x|}{x}\\times 100\\%" }
      ],
      example: {
        problem: "三次测得 9.8, 10.0, 10.2，求平均。",
        steps: [
          "平均=(9.8+10.0+10.2)/3=10.0"
        ],
        answer: "10.0",
        tip: "平均值保留与测量值相同有效数字。"
      },
      exampleEn: {
        problem: "Three measurements 9.8, 10.0, 10.2; find the average.",
        steps: [
          "average=(9.8+10.0+10.2)/3=10.0"
        ],
        answer: "10.0",
        tip: "Keep the same number of significant figures as the measurements."
      },
      practice: [
        { q: "减小偶然误差方法？", a: "多次测量取平均" },
        { q: "系统误差能平均消除？", a: "不能" },
        { q: "有效数字反映？", a: "测量精度" }
      ],
      practiceEn: [
        { q: "Way to reduce random error?", a: "repeated measurement and average" },
        { q: "Can averaging eliminate systematic error?", a: "no" },
        { q: "What do significant figures reflect?", a: "measurement precision" }
      ],
      hasContent: true,
      ibMap: "IB 实验误差处理充分覆盖",
      ibMapEn: "IB adequately covers experimental error handling",
      apMap: "AP 实验误差处理覆盖",
      apMapEn: "AP covers experimental error handling",
      aLevelMap: "A-Level 测量误差为实验考点",
      aLevelMapEn: "A-Level measurement error is an experimental examined topic"
    }
  ],
  chemistry: [
    { id: "chem-mole", name: "物质的量", nameEn: "The Mole", module: "基本概念", moduleEn: "Basic Concepts", weight: "10%", difficulty: "medium", timeMinutes: 180,
      subs: [{ name: "摩尔与阿伏伽德罗常数", nameEn: "Mole & Avogadro" }, { name: "气体摩尔体积", nameEn: "Molar volume" }, { name: "物质的量浓度", nameEn: "Molarity" }],
      concept: "<p>物质的量是联系微观粒子与宏观质量、体积的桥梁。n=m/M=N/Nₐ=cV=V/Vₘ。</p>\n<p><b>核心思维：</b>化学计算先统一到「物质的量」再转换。标况下气体 Vₘ≈22.4 L/mol。配平方程式后按计量数之比计算。</p>",
      conceptEn: "<p>The amount of substance is the bridge linking microscopic particles to macroscopic mass and volume. n=m/M=N/Nₐ=cV=V/Vₘ.</p>\n<p><b>Core thinking:</b> in chemical calculations first unify to 'amount of substance' then convert. At STP gas Vₘ≈22.4 L/mol. After balancing, compute by the stoichiometric ratio.</p>",
      formulas: [
        { left: "由质量", right: "n = \\frac{m}{M}" },
        { left: "由粒子数", right: "n = \\frac{N}{N_A}" },
        { left: "由体积", right: "n = \\frac{V}{V_m}" },
        { left: "由浓度", right: "n = cV" }
      ],
      example: {
        problem: "求 18 g 水的物质的量（M=18 g/mol）。",
        steps: [
          "n=m/M=18/18=1 mol"
        ],
        answer: "1 mol",
        tip: "先求摩尔质量再换算；标况指 0℃、101 kPa。"
      },
      exampleEn: {
        problem: "Find the amount of substance of 18 g water (M=18 g/mol).",
        steps: [
          "n=m/M=18/18=1 mol"
        ],
        answer: "1 mol",
        tip: "Find molar mass first, then convert; STP means 0℃, 101 kPa."
      },
      practice: [
        { q: "Nₐ 数值约？", a: "6.02×10²³" },
        { q: "标况 22.4 L 任何气体物质的量？", a: "1 mol" },
        { q: "c=n/V 中 V 单位？", a: "L" }
      ],
      practiceEn: [
        { q: "Approx. value of Nₐ?", a: "6.02×10²³" },
        { q: "At STP, 22.4 L of any gas = ?", a: "1 mol" },
        { q: "In c=n/V, unit of V?", a: "L" }
      ],
      hasContent: true,
      ibMap: "IB/AP 物质的量全覆盖，CSCA 重计算",
      ibMapEn: "IB/AP fully cover amount of substance; CSCA emphasizes calculation",
      apMap: "AP Chem 摩尔与浓度覆盖",
      apMapEn: "AP Chem covers moles and concentration",
      aLevelMap: "A-Level 物质的量为计算基础",
      aLevelMapEn: "A-Level amount of substance is the calculational foundation"
    },
    { id: "chem-matter", name: "物质分类与变化", nameEn: "Classification of Matter", module: "基本概念", moduleEn: "Basic Concepts", weight: "6%", difficulty: "easy", timeMinutes: 140,
      subs: [{ name: "纯净物与混合物", nameEn: "Pure & mixture" }, { name: "物理变化与化学变化", nameEn: "Physical & chemical" }],
      concept: "<p>物质分纯净物（单质、化合物）和混合物。变化分物理变化（无新物质）和化学变化（有新物质生成）。</p>\n<p><b>核心思维：</b>判断化学变化的唯一标准是「有没有新物质生成」。发光、放热、变色只是现象。</p>",
      conceptEn: "<p>Matter divides into pure substances (elements, compounds) and mixtures. Changes divide into physical (no new substance) and chemical (new substance formed).</p>\n<p><b>Core thinking:</b> the only criterion for a chemical change is 'whether a new substance is formed.' Glowing, heating, color change are merely phenomena.</p>",
      formulas: [
        { left: "纯净物", right: "\\text{单质} + \\text{化合物}" },
        { left: "化合物", right: "\\text{氧化物、酸、碱、盐}" },
        { left: "分散系", right: "\\text{溶液} < 100\\,\\text{nm} < \\text{胶体} < \\text{浊液}" }
      ],
      example: {
        problem: "判断：①冰融化 ②铁生锈 ③酒精挥发",
        steps: [
          "①无新物质→物理",
          "②新物质→化学",
          "③分子未变→物理"
        ],
        answer: "①③物理，②化学",
        tip: "三态变化、溶解、挥发都是物理变化。"
      },
      exampleEn: {
        problem: "Classify: ① ice melting ② iron rusting ③ alcohol evaporating",
        steps: [
          "① no new substance → physical",
          "② new substance → chemical",
          "③ molecules unchanged → physical"
        ],
        answer: "①③ physical, ② chemical",
        tip: "Phase changes, dissolution, evaporation are all physical changes."
      },
      practice: [
        { q: "水结冰属于？", a: "物理变化" },
        { q: "H₂O 是单质还是化合物？", a: "化合物" },
        { q: "空气是？", a: "混合物" }
      ],
      practiceEn: [
        { q: "Water freezing is?", a: "physical change" },
        { q: "Is H₂O an element or compound?", a: "compound" },
        { q: "What is air?", a: "mixture" }
      ],
      hasContent: true,
      ibMap: "IB 物质分类覆盖，CSCA 重体系",
      ibMapEn: "IB covers substance classification; CSCA emphasizes the system",
      apMap: "AP 物质分类基础覆盖",
      apMapEn: "AP covers basic substance classification",
      aLevelMap: "A-Level 物质分类为考点",
      aLevelMapEn: "A-Level substance classification is an examined topic"
    },
    { id: "chem-nomenclature", name: "化学用语与方程式", nameEn: "Chemical Nomenclature & Equations", module: "基本概念", moduleEn: "Basic Concepts", weight: "8%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "化学式书写", nameEn: "Formula writing" }, { name: "方程式配平", nameEn: "Balancing" }],
      concept: "<p>化学用语是化学的「语言」：元素符号、化学式、化学方程式。写化学式靠化合价，配平靠质量守恒。</p>\n<p><b>核心思维：</b>写化学式用「交叉法」：正负化合价数字交叉写到对方右下角再约分。配平从最复杂元素入手，最后配氢氧。</p>",
      conceptEn: "<p>Chemical notation is chemistry's 'language': element symbols, formulas, equations. Write formulas from valence, balance from mass conservation.</p>\n<p><b>Core thinking:</b> use the 'cross method' for formulas: cross the positive/negative valence numbers to the opposite subscript, then reduce. Start balancing from the most complex element, finish with H and O.</p>",
      formulas: [
        { left: "交叉法", right: "\\text{Al}^{3+}\\text{O}^{2-} \\to \\text{Al}_2\\text{O}_3" },
        { left: "质量守恒", right: "\\text{反应前后原子数相等}" },
        { left: "常见根", right: "\\text{SO}_4^{2-},\\, \\text{NO}_3^-,\\, \\text{CO}_3^{2-},\\, \\text{OH}^-" }
      ],
      example: {
        problem: "配平：Al + O₂ → Al₂O₃",
        steps: [
          "右侧 O=3，取 2Al₂O₃→6 O",
          "需 3 O₂；Al 需 4",
          "4Al+3O₂→2Al₂O₃"
        ],
        answer: "4Al + 3O₂ → 2Al₂O₃",
        tip: "先配出现次数少且复杂的元素。"
      },
      exampleEn: {
        problem: "Balance: Al + O₂ → Al₂O₃",
        steps: [
          "right side O=3, take 2Al₂O₃→6 O",
          "need 3 O₂; Al needs 4",
          "4Al+3O₂→2Al₂O₃"
        ],
        answer: "4Al + 3O₂ → 2Al₂O₃",
        tip: "First balance the least frequent and most complex element."
      },
      practice: [
        { q: "H₂O 中 H 化合价？", a: "+1" },
        { q: "配平依据？", a: "质量守恒" },
        { q: "SO₄²⁻ 名称？", a: "硫酸根" }
      ],
      practiceEn: [
        { q: "Valence of H in H₂O?", a: "+1" },
        { q: "Basis for balancing?", a: "mass conservation" },
        { q: "Name of SO₄²⁻?", a: "sulfate" }
      ],
      hasContent: true,
      ibMap: "IB 方程式书写覆盖，CSCA 重配平",
      ibMapEn: "IB covers equation writing; CSCA emphasizes balancing",
      apMap: "AP 方程式覆盖，配平重",
      apMapEn: "AP covers equations with emphasis on balancing",
      aLevelMap: "A-Level 方程式配平为考点",
      aLevelMapEn: "A-Level equation balancing is an examined topic"
    },
    { id: "chem-solution", name: "溶液与胶体", nameEn: "Solutions & Colloids", module: "基本概念", moduleEn: "Basic Concepts", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "溶解度", nameEn: "Solubility" }, { name: "浓度计算", nameEn: "Concentration" }, { name: "胶体", nameEn: "Colloid" }],
      concept: "<p>溶液是均一稳定的混合物。质量分数 w=溶质质量/溶液质量，物质的量浓度 c=n/V。</p>\n<p><b>核心思维：</b>稀释前后溶质物质的量不变（c₁V₁=c₂V₂）。胶体粒子直径 1–100 nm，有丁达尔效应。</p>",
      conceptEn: "<p>A solution is a homogeneous, stable mixture. Mass fraction w=mass solute/mass solution; molarity c=n/V.</p>\n<p><b>Core thinking:</b> on dilution the amount of solute is unchanged (c₁V₁=c₂V₂). Colloid particles are 1–100 nm and show the Tyndall effect.</p>",
      formulas: [
        { left: "质量分数", right: "w = \\frac{m_{溶质}}{m_{溶液}}" },
        { left: "浓度", right: "c = \\frac{n}{V}" },
        { left: "稀释", right: "c_1V_1 = c_2V_2" },
        { left: "pH", right: "\\text{pH} = -\\lg[H^+]" }
      ],
      example: {
        problem: "将 1 mol/L 盐酸 100 mL 稀释到 500 mL，求 c。",
        steps: [
          "c₁V₁=c₂V₂",
          "1×100=c₂×500",
          "c₂=0.2 mol/L"
        ],
        answer: "0.2 mol/L",
        tip: "稀释只加溶剂，溶质物质的量不变。"
      },
      exampleEn: {
        problem: "Dilute 100 mL of 1 mol/L HCl to 500 mL; find c.",
        steps: [
          "c₁V₁=c₂V₂",
          "1×100=c₂×500",
          "c₂=0.2 mol/L"
        ],
        answer: "0.2 mol/L",
        tip: "Dilution only adds solvent; the amount of solute stays the same."
      },
      practice: [
        { q: "胶体粒子直径？", a: "1–100 nm" },
        { q: "丁达尔效应说明？", a: "胶体粒子散射光" },
        { q: "pH<7 溶液？", a: "酸性" }
      ],
      practiceEn: [
        { q: "Colloid particle diameter?", a: "1–100 nm" },
        { q: "What does the Tyndall effect indicate?", a: "colloid particles scatter light" },
        { q: "Solution with pH<7?", a: "acidic" }
      ],
      hasContent: true,
      ibMap: "IB 浓度与pH覆盖，CSCA 重计算",
      ibMapEn: "IB covers concentration and pH; CSCA emphasizes calculation",
      apMap: "AP 溶液与pH覆盖",
      apMapEn: "AP covers solutions and pH",
      aLevelMap: "A-Level 溶液pH为考点",
      aLevelMapEn: "A-Level solution pH is an examined topic"
    },
    { id: "chem-inorganic", name: "无机元素与化合物", nameEn: "Inorganic Chemistry", module: "元素化学", moduleEn: "Element Chemistry", weight: "10%", difficulty: "hard", timeMinutes: 180,
      subs: [{ name: "金属及其化合物", nameEn: "Metals" }, { name: "非金属及其化合物", nameEn: "Non-metals" }],
      concept: "<p>无机化学按元素族学习性质：钠、铝、铁等金属，氯、硫、氮等非金属及其化合物。</p>\n<p><b>核心思维：</b>用「价态—性质」主线：金属多显正价、具还原性；非金属高低价态兼氧化还原性。分类记忆典型反应。</p>",
      conceptEn: "<p>Inorganic chemistry studies properties by element group: metals like Na, Al, Fe, and non-metals like Cl, S, N and their compounds.</p>\n<p><b>Core thinking:</b> use the 'valence–property' thread: metals mostly show positive valence and reducing character; non-metals in high/low valence show both redox behavior. Memorize typical reactions by category.</p>",
      formulas: [
        { left: "两性", right: "\\text{Al}_2\\text{O}_3 + 6H^+ \\to 2Al^{3+} + 3H_2O" },
        { left: "氯气", right: "\\text{Cl}_2 + 2NaBr \\to 2NaCl + Br_2" }
      ],
      example: {
        problem: "Al₂O₃ 与盐酸反应产物？",
        steps: [
          "两性氧化物与酸生成盐和水",
          "Al₂O₃+6HCl→2AlCl₃+3H₂O"
        ],
        answer: "AlCl₃ 和 H₂O",
        tip: "两性氧化物既与酸也与碱反应。"
      },
      exampleEn: {
        problem: "Products of Al₂O₃ reacting with HCl?",
        steps: [
          "amphoteric oxide + acid gives salt and water",
          "Al₂O₃+6HCl→2AlCl₃+3H₂O"
        ],
        answer: "AlCl₃ and H₂O",
        tip: "Amphoteric oxides react with both acids and bases."
      },
      practice: [
        { q: "Na 与水反应气体？", a: "H₂" },
        { q: "Fe 常见价态？", a: "+2、+3" },
        { q: "Cl₂ 颜色？", a: "黄绿色" }
      ],
      practiceEn: [
        { q: "Gas from Na reacting with water?", a: "H₂" },
        { q: "Common valences of Fe?", a: "+2, +3" },
        { q: "Color of Cl₂?", a: "yellow-green" }
      ],
      hasContent: true,
      ibMap: "IB 无机分类较浅，CSCA 重体系",
      ibMapEn: "IB inorganic classification is shallow; CSCA emphasizes the system",
      apMap: "AP 无机分类体系不足",
      apMapEn: "AP inorganic classification system is insufficient",
      aLevelMap: "A-Level 无机分类需补体系",
      aLevelMapEn: "A-Level inorganic classification needs system reinforcement"
    },
    { id: "chem-reactions", name: "离子反应", nameEn: "Ionic Reactions", module: "元素化学", moduleEn: "Element Chemistry", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "离子方程式", nameEn: "Ionic equations" }, { name: "离子共存", nameEn: "Coexistence" }],
      concept: "<p>电解质在溶液中以离子形式反应，写离子方程式时难溶、弱电解质、气体保留化学式。</p>\n<p><b>核心思维：</b>判断能否共存看是否生成沉淀、气体、弱电解质或发生氧化还原。复分解反应向难溶/难电离方向进行。</p>",
      conceptEn: "<p>Electrolytes react in solution as ions; in ionic equations keep insoluble substances, weak electrolytes, and gases as formulas.</p>\n<p><b>Core thinking:</b> to judge coexistence, see whether a precipitate, gas, weak electrolyte forms, or redox occurs. Double decomposition proceeds toward the less soluble/less ionized product.</p>",
      formulas: [
        { left: "沉淀", right: "\\text{Ag}^+ + \\text{Cl}^- \\to \\text{AgCl}\\downarrow" },
        { left: "气体", right: "2H^+ + \\text{CO}_3^{2-} \\to H_2O + CO_2\\uparrow" }
      ],
      example: {
        problem: "NaCl 与 AgNO₃ 反应的离子方程式？",
        steps: [
          "实际反应 Ag⁺+Cl⁻→AgCl↓",
          "Na⁺、NO₃⁻为旁观离子"
        ],
        answer: "Ag⁺ + Cl⁻ → AgCl↓",
        tip: "删去不变化的旁观离子。"
      },
      exampleEn: {
        problem: "Ionic equation for NaCl + AgNO₃?",
        steps: [
          "actual reaction Ag⁺+Cl⁻→AgCl↓",
          "Na⁺, NO₃⁻ are spectator ions"
        ],
        answer: "Ag⁺ + Cl⁻ → AgCl↓",
        tip: "Delete the unchanged spectator ions."
      },
      practice: [
        { q: "写离子方程式删去？", a: "旁观离子" },
        { q: "Ba²⁺与SO₄²⁻生成？", a: "BaSO₄沉淀" },
        { q: "强酸完全？", a: "电离" }
      ],
      practiceEn: [
        { q: "What is deleted when writing ionic equations?", a: "spectator ions" },
        { q: "Ba²⁺ + SO₄²⁻ gives?", a: "BaSO₄ precipitate" },
        { q: "Strong acids fully?", a: "ionize" }
      ],
      hasContent: true,
      ibMap: "IB 离子反应覆盖，CSCA 重判断",
      ibMapEn: "IB covers ionic reactions; CSCA emphasizes judgment",
      apMap: "AP 离子方程式覆盖",
      apMapEn: "AP covers ionic equations",
      aLevelMap: "A-Level 离子反应为考点",
      aLevelMapEn: "A-Level ionic reactions are an examined topic"
    },
    { id: "chem-acidbase", name: "酸碱平衡", nameEn: "Acids & Bases", module: "反应原理", moduleEn: "Reaction Principles", weight: "8%", difficulty: "hard", timeMinutes: 170,
      subs: [{ name: "酸碱理论", nameEn: "Theories" }, { name: "pH 与滴定", nameEn: "pH & titration" }],
      concept: "<p>酸碱中和生成盐和水。强酸完全电离，弱酸部分电离。滴定用于测定未知浓度。</p>\n<p><b>核心思维：</b>中和滴定关键在终点判断（指示剂变色）。pH=−lg[H⁺]；稀释强酸 pH 升得慢、弱酸升得快。</p>",
      conceptEn: "<p>Acid-base neutralization gives salt and water. Strong acids fully ionize, weak acids partially. Titration measures unknown concentration.</p>\n<p><b>Core thinking:</b> the key in neutralization titration is endpoint judgment (indicator color change). pH=−lg[H⁺]; diluting a strong acid raises pH slowly, a weak acid quickly.</p>",
      formulas: [
        { left: "pH", right: "\\text{pH} = -\\lg[H^+]" },
        { left: "中和", right: "c_aV_a = c_bV_b\\ (\\text{一元})" },
        { left: "Ka", right: "K_a = \\frac{[H^+][A^-]}{[HA]}" }
      ],
      example: {
        problem: "0.1 mol/L 强酸（完全电离）的 pH？",
        steps: [
          "[H⁺]=0.1",
          "pH=−lg(0.1)=1"
        ],
        answer: "1",
        tip: "强酸直接取浓度算 pH；弱酸需 Ka。"
      },
      exampleEn: {
        problem: "pH of 0.1 mol/L strong acid (fully ionized)?",
        steps: [
          "[H⁺]=0.1",
          "pH=−lg(0.1)=1"
        ],
        answer: "1",
        tip: "For strong acid take concentration directly; weak acid needs Ka."
      },
      practice: [
        { q: "pH=7 是？", a: "中性（25℃）" },
        { q: "滴定指示剂作用？", a: "指示终点" },
        { q: "弱酸部分？", a: "电离" }
      ],
      practiceEn: [
        { q: "pH=7 is?", a: "neutral (25℃)" },
        { q: "Role of titration indicator?", a: "indicate endpoint" },
        { q: "Weak acid partially?", a: "ionizes" }
      ],
      hasContent: true,
      ibMap: "IB 酸碱理论覆盖，CSCA 重滴定",
      ibMapEn: "IB covers acid-base theory; CSCA emphasizes titration",
      apMap: "AP 酸碱与滴定覆盖",
      apMapEn: "AP covers acids/bases and titration",
      aLevelMap: "A-Level 酸碱滴定为核心",
      aLevelMapEn: "A-Level acid-base titration is core"
    },
    { id: "chem-redox", name: "氧化还原反应", nameEn: "Redox Reactions", module: "反应原理", moduleEn: "Reaction Principles", weight: "8%", difficulty: "hard", timeMinutes: 170,
      subs: [{ name: "化合价与电子转移", nameEn: "Oxidation states" }, { name: "配平", nameEn: "Balancing" }],
      concept: "<p>氧化还原的本质是电子转移：升价失电子被氧化，降价得电子被还原。</p>\n<p><b>核心思维：</b>标化合价定升降，用「得失电子相等」配平。氧化性强弱：氧化剂>氧化产物。</p>",
      conceptEn: "<p>The essence of redox is electron transfer: rising valence loses electrons (oxidation), falling gains (reduction).</p>\n<p><b>Core thinking:</b> mark valences to find rises/falls, balance by 'equal electrons gained and lost.' Oxidizing strength: oxidant > oxidation product.</p>",
      formulas: [
        { left: "本质", right: "\\text{升价失e}^- \\to \\text{氧化}" },
        { left: "配平", right: "\\text{得e}^- = \\text{失e}^-" }
      ],
      example: {
        problem: "Zn + Cu²⁺→Zn²⁺ + Cu 中谁被氧化？",
        steps: [
          "Zn 价 0→+2 失电子",
          "Zn 被氧化"
        ],
        answer: "Zn",
        tip: "升价=氧化，降价=还原，记「还降得」谐音。"
      },
      exampleEn: {
        problem: "In Zn + Cu²⁺→Zn²⁺ + Cu, who is oxidized?",
        steps: [
          "Zn valence 0→+2 loses electrons",
          "Zn is oxidized"
        ],
        answer: "Zn",
        tip: "Rise=oxidation, fall=reduction; remember 'reduction falls, gains'."
      },
      practice: [
        { q: "氧化剂发生？", a: "还原（降价）" },
        { q: "失电子叫？", a: "氧化" },
        { q: "氧化还原本质？", a: "电子转移" }
      ],
      practiceEn: [
        { q: "What happens to the oxidizing agent?", a: "reduced (valence drops)" },
        { q: "Losing electrons is called?", a: "oxidation" },
        { q: "Essence of redox?", a: "electron transfer" }
      ],
      hasContent: true,
      ibMap: "IB 氧化还原覆盖，CSCA 重配平",
      ibMapEn: "IB covers redox; CSCA emphasizes balancing",
      apMap: "AP 氧化还原覆盖",
      apMapEn: "AP covers redox",
      aLevelMap: "A-Level 氧化还原为考点",
      aLevelMapEn: "A-Level redox is an examined topic"
    },
    { id: "chem-organic", name: "有机化学", nameEn: "Organic Chemistry", module: "有机化学", moduleEn: "Organic", weight: "12%", difficulty: "hard", timeMinutes: 190,
      subs: [{ name: "官能团", nameEn: "Functional groups" }, { name: "同分异构", nameEn: "Isomers" }, { name: "烃与衍生物", nameEn: "Hydrocarbons" }],
      concept: "<p>有机化合物以碳为骨架，按官能团分类：烷、烯、炔、醇、醛、羧酸等。</p>\n<p><b>核心思维：</b>抓官能团定性质：双键能加成、羟基能酯化、羧基显酸性。同分异构重点在碳链与官能团位置。</p>",
      conceptEn: "<p>Organic compounds use carbon as a skeleton, classified by functional group: alkanes, alkenes, alkynes, alcohols, aldehydes, carboxylic acids, etc.</p>\n<p><b>Core thinking:</b> the functional group determines properties: double bonds add, hydroxyl groups esterify, carboxyl groups are acidic. Isomerism focuses on carbon chain and functional-group position.</p>",
      formulas: [
        { left: "烷通式", right: "C_nH_{2n+2}" },
        { left: "烯通式", right: "C_nH_{2n}" },
        { left: "酯化", right: "RCOOH + R'OH \\to RCOOR' + H_2O" }
      ],
      example: {
        problem: "乙烯与溴水反应类型？",
        steps: [
          "C=C 双键打开加 Br₂",
          "加成反应"
        ],
        answer: "加成反应",
        tip: "双键、三键、苯环可发生加成；羟基酯化脱水的。"
      },
      exampleEn: {
        problem: "Type of reaction between ethylene and bromine water?",
        steps: [
          "C=C double bond opens to add Br₂",
          "addition reaction"
        ],
        answer: "addition reaction",
        tip: "Double/triple bonds and benzene rings can add; hydroxyl groups esterify with dehydration."
      },
      practice: [
        { q: "甲烷通式？", a: "CnH2n+2" },
        { q: "醇的官能团？", a: "−OH" },
        { q: "取代反应例子？", a: "烷烃卤代" }
      ],
      practiceEn: [
        { q: "General formula of methane/alkanes?", a: "CnH2n+2" },
        { q: "Functional group of alcohols?", a: "−OH" },
        { q: "Example of substitution reaction?", a: "alkane halogenation" }
      ],
      hasContent: true,
      ibMap: "IB 有机覆盖，CSCA 重官能团",
      ibMapEn: "IB covers organic chemistry; CSCA emphasizes functional groups",
      apMap: "AP 不考有机化学",
      apMapEn: "AP does not examine organic chemistry",
      aLevelMap: "A-Level 有机为核心强项",
      aLevelMapEn: "A-Level organic chemistry is a core strength"
    },
    { id: "chem-electrochem", name: "电化学", nameEn: "Electrochemistry", module: "反应原理", moduleEn: "Reaction Principles", weight: "6%", difficulty: "hard", timeMinutes: 170,
      subs: [{ name: "原电池", nameEn: "Galvanic cell" }, { name: "电解池", nameEn: "Electrolytic cell" }],
      concept: "<p>原电池把化学能变电能（自发氧化还原），电解池耗电能驱动非自发反应。</p>\n<p><b>核心思维：</b>原电池负极氧化、正极还原；电解池阳极氧化、阴极还原。阳离子向阴极移动。</p>",
      conceptEn: "<p>A galvanic cell turns chemical energy into electricity (spontaneous redox); an electrolytic cell consumes electricity to drive non-spontaneous reactions.</p>\n<p><b>Core thinking:</b> in a galvanic cell the negative electrode is oxidized, positive reduced; in an electrolytic cell the anode is oxidized, cathode reduced. Cations move toward the cathode.</p>",
      formulas: [
        { left: "电动势", right: "E = E_+ - E_-" },
        { left: "法拉第", right: "Q = nFN" }
      ],
      example: {
        problem: "铜锌原电池中 Zn 作什么极？",
        steps: [
          "Zn 活泼易失电子",
          "Zn 为负极（氧化）"
        ],
        answer: "负极",
        tip: "较活泼金属作负极。"
      },
      exampleEn: {
        problem: "In a Cu-Zn galvanic cell, what electrode is Zn?",
        steps: [
          "Zn is active, easily loses electrons",
          "Zn is the negative electrode (oxidation)"
        ],
        answer: "negative electrode",
        tip: "The more active metal is the negative electrode."
      },
      practice: [
        { q: "原电池能量转化？", a: "化学→电" },
        { q: "电解池阳极发生？", a: "氧化" },
        { q: "阳离子移向？", a: "阴极" }
      ],
      practiceEn: [
        { q: "Galvanic cell energy conversion?", a: "chemical → electrical" },
        { q: "At the electrolytic anode occurs?", a: "oxidation" },
        { q: "Cations move toward?", a: "cathode" }
      ],
      hasContent: true,
      ibMap: "IB 电化学覆盖，CSCA 重原电池",
      ibMapEn: "IB covers electrochemistry; CSCA emphasizes galvanic cells",
      apMap: "AP 电化学覆盖",
      apMapEn: "AP covers electrochemistry",
      aLevelMap: "A-Level 电化学为模块考点",
      aLevelMapEn: "A-Level electrochemistry is a module examined topic"
    },
    { id: "chem-atom", name: "原子结构", nameEn: "Atomic Structure", module: "结构理论", moduleEn: "Structure", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "核外电子排布", nameEn: "Electron config" }, { name: "同位素", nameEn: "Isotopes" }],
      concept: "<p>原子由原子核（质子+中子）和核外电子组成。电子分层排布，第 n 层最多 2n² 个。</p>\n<p><b>核心思维：</b>原子序数=质子数=核外电子数。同位素质子同、中子异，化学性质几乎相同。</p>",
      conceptEn: "<p>An atom consists of a nucleus (protons+neutrons) and orbital electrons. Electrons are arranged in shells; the nth shell holds at most 2n².</p>\n<p><b>Core thinking:</b> atomic number = proton count = electron count. Isotopes share protons but differ in neutrons, with nearly identical chemical properties.</p>",
      formulas: [
        { left: "质量数", right: "A = Z + N" },
        { left: "每层最多", right: "2n^2" },
        { left: "最外层", right: "\\leq 8" }
      ],
      example: {
        problem: "¹⁶O 的质子、中子数？",
        steps: [
          "Z=8（氧）",
          "N=A−Z=16−8=8"
        ],
        answer: "质子8，中子8",
        tip: "左上角质量数 A，左下角质子数 Z。"
      },
      exampleEn: {
        problem: "Proton and neutron counts of ¹⁶O?",
        steps: [
          "Z=8 (oxygen)",
          "N=A−Z=16−8=8"
        ],
        answer: "protons 8, neutrons 8",
        tip: "Upper-left is mass number A, lower-left is proton number Z."
      },
      practice: [
        { q: "原子序数=？", a: "质子数" },
        { q: "同位素差异在？", a: "中子数" },
        { q: "第 2 层最多几电子？", a: "8" }
      ],
      practiceEn: [
        { q: "Atomic number = ?", a: "proton count" },
        { q: "Isotopes differ in?", a: "neutron count" },
        { q: "Max electrons in the 2nd shell?", a: "8" }
      ],
      hasContent: true,
      ibMap: "IB 原子结构覆盖，CSCA 重排布",
      ibMapEn: "IB covers atomic structure; CSCA emphasizes electron configuration",
      apMap: "AP 原子结构覆盖",
      apMapEn: "AP covers atomic structure",
      aLevelMap: "A-Level 原子结构为考点",
      aLevelMapEn: "A-Level atomic structure is an examined topic"
    },
    { id: "chem-periodic", name: "元素周期律", nameEn: "Periodic Trends", module: "结构理论", moduleEn: "Structure", weight: "6%", difficulty: "medium", timeMinutes: 150,
      subs: [{ name: "周期与族", nameEn: "Periods & groups" }, { name: "性质递变", nameEn: "Trends" }],
      concept: "<p>元素性质随原子序数递增呈周期性变化。同周期从左到右金属性减弱、非金属性增强；同主族从上到下金属性增强。</p>\n<p><b>核心思维：</b>用「电子层数」和「核电荷数」解释递变：层数多→半径大→易失电子；核电荷大→引力强→半径小。</p>",
      conceptEn: "<p>Element properties change periodically with increasing atomic number. Across a period left→right metallicity weakens, non-metallicity strengthens; down a group metallicity strengthens.</p>\n<p><b>Core thinking:</b> explain trends with 'shell count' and 'nuclear charge': more shells → larger radius → easier to lose electrons; larger charge → stronger pull → smaller radius.</p>",
      formulas: [
        { left: "半径", right: "\\text{同周期左}>\\text{右}" },
        { left: "金属性", right: "\\text{同主族上}<\\text{下}" }
      ],
      example: {
        problem: "比较 Na、Mg、Al 原子半径。",
        steps: [
          "同周期，核电荷 Na<Mg<Al",
          "引力增大半径减小",
          "Na>Mg>Al"
        ],
        answer: "Na > Mg > Al",
        tip: "同周期比核电荷，同主族比电子层数。"
      },
      exampleEn: {
        problem: "Compare atomic radii of Na, Mg, Al.",
        steps: [
          "same period, nuclear charge Na<Mg<Al",
          "stronger pull → smaller radius",
          "Na>Mg>Al"
        ],
        answer: "Na > Mg > Al",
        tip: "Same period: compare nuclear charge; same group: compare shell count."
      },
      practice: [
        { q: "同主族从上到下半径？", a: "增大" },
        { q: "非金属性最强区？", a: "右上" },
        { q: "周期数=？", a: "电子层数" }
      ],
      practiceEn: [
        { q: "Down a group, radius?", a: "increases" },
        { q: "Region of strongest non-metallicity?", a: "upper right" },
        { q: "Period number = ?", a: "shell count" }
      ],
      hasContent: true,
      ibMap: "IB 周期律覆盖，CSCA 重性质",
      ibMapEn: "IB covers periodic law; CSCA emphasizes properties",
      apMap: "AP 周期律覆盖",
      apMapEn: "AP covers periodic law",
      aLevelMap: "A-Level 周期律为考点",
      aLevelMapEn: "A-Level periodic law is an examined topic"
    },
    { id: "chem-bonding", name: "化学键与分子构型", nameEn: "Chemical Bonding", module: "结构理论", moduleEn: "Structure", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "离子键与共价键", nameEn: "Ionic & covalent" }, { name: "VSEPR 构型", nameEn: "VSEPR" }],
      concept: "<p>化学键分离子键（电子转移）、共价键（共用电子对）和金属键。</p>\n<p><b>核心思维：</b>活泼金属+活泼非金属→离子键；非金属间→共价键。VSEPR：数中心原子周围电子对总数定构型，孤对电子压小键角。</p>",
      conceptEn: "<p>Chemical bonds divide into ionic (electron transfer), covalent (shared pairs), and metallic.</p>\n<p><b>Core thinking:</b> active metal + active non-metal → ionic bond; between non-metals → covalent. VSEPR: count total electron pairs around the central atom to set geometry; lone pairs compress bond angles.</p>",
      formulas: [
        { left: "VSEPR 2", right: "\\text{直线形 } 180^\\circ" },
        { left: "VSEPR 3", right: "\\text{平面三角 } 120^\\circ" },
        { left: "VSEPR 4", right: "\\text{四面体 } 109.5^\\circ" }
      ],
      example: {
        problem: "NH₃ 分子构型与键角？",
        steps: [
          "N 5e，与3H成键余1对孤对",
          "电子对4→四面体电子构型",
          "分子为三角锥，键角≈107°"
        ],
        answer: "三角锥形，约107°",
        tip: "孤对越多键角越小。"
      },
      exampleEn: {
        problem: "Geometry and bond angle of NH₃?",
        steps: [
          "N has 5e, bonds with 3H leaving 1 lone pair",
          "4 electron pairs → tetrahedral electron geometry",
          "molecule is trigonal pyramidal, angle ≈107°"
        ],
        answer: "trigonal pyramidal, ≈107°",
        tip: "More lone pairs → smaller bond angle."
      },
      practice: [
        { q: "NaCl 键型？", a: "离子键" },
        { q: "CH₄ 构型？", a: "正四面体" },
        { q: "CO₂ 键角？", a: "180°" }
      ],
      practiceEn: [
        { q: "Bond type of NaCl?", a: "ionic bond" },
        { q: "Geometry of CH₄?", a: "regular tetrahedron" },
        { q: "Bond angle of CO₂?", a: "180°" }
      ],
      hasContent: true,
      ibMap: "IB 化学键覆盖，CSCA 重构型",
      ibMapEn: "IB covers chemical bonding; CSCA emphasizes structures",
      apMap: "AP 化学键覆盖",
      apMapEn: "AP covers chemical bonding",
      aLevelMap: "A-Level 化学键为考点",
      aLevelMapEn: "A-Level chemical bonding is an examined topic"
    },
    { id: "chem-kinetics", name: "化学反应速率", nameEn: "Reaction Rates", module: "反应原理", moduleEn: "Reaction Principles", weight: "6%", difficulty: "medium", timeMinutes: 160,
      subs: [{ name: "速率影响因素", nameEn: "Factors" }, { name: "催化剂", nameEn: "Catalyst" }],
      concept: "<p>反应速率 v=Δc/Δt。升温、增浓度/压强、用正催化剂、增大固体表面积都加快反应。</p>\n<p><b>核心思维：</b>催化剂降低活化能但不改变平衡位置。这是常考易错点。</p>",
      conceptEn: "<p>Reaction rate v=Δc/Δt. Raising temperature, concentration/pressure, using a positive catalyst, or increasing solid surface area all speed up a reaction.</p>\n<p><b>Core thinking:</b> a catalyst lowers activation energy but does not change the equilibrium position. This is a frequently tested trap.</p>",
      formulas: [
        { left: "速率", right: "v = \\frac{\\Delta c}{\\Delta t}" },
        { left: "与计量数", right: "v_A:v_B = \\nu_A:\\nu_B" },
        { left: "催化剂", right: "\\text{降低 } E_a" }
      ],
      example: {
        problem: "A 浓度 10 s 内由 2.0 降到 0.5 mol/L，求平均速率。",
        steps: [
          "Δc=1.5",
          "v=1.5/10=0.15"
        ],
        answer: "0.15 mol/(L·s)",
        tip: "速率取绝对值，恒为正。"
      },
      exampleEn: {
        problem: "A's concentration drops from 2.0 to 0.5 mol/L in 10 s; find average rate.",
        steps: [
          "Δc=1.5",
          "v=1.5/10=0.15"
        ],
        answer: "0.15 mol/(L·s)",
        tip: "Rate is the absolute value, always positive."
      },
      practice: [
        { q: "升温速率？", a: "增大" },
        { q: "催化剂改变化学平衡？", a: "不能" },
        { q: "增大固体量加快速率？", a: "不能" }
      ],
      practiceEn: [
        { q: "Raising temperature — rate?", a: "increases" },
        { q: "Does a catalyst change equilibrium?", a: "no" },
        { q: "Adding more solid speeds the reaction?", a: "no" }
      ],
      hasContent: true,
      ibMap: "IB 速率覆盖，CSCA 重因素",
      ibMapEn: "IB covers reaction rates; CSCA emphasizes factors",
      apMap: "AP 速率与平衡覆盖",
      apMapEn: "AP covers rates and equilibrium",
      aLevelMap: "A-Level 速率与平衡为考点",
      aLevelMapEn: "A-Level rates and equilibrium are examined topics"
    },
    { id: "chem-equilibrium", name: "化学平衡", nameEn: "Chemical Equilibrium", module: "反应原理", moduleEn: "Reaction Principles", weight: "8%", difficulty: "hard", timeMinutes: 180,
      subs: [{ name: "平衡常数 K", nameEn: "Equilibrium constant" }, { name: "勒夏特列原理", nameEn: "Le Chatelier" }],
      concept: "<p>可逆反应达平衡时正逆速率相等、各组分浓度不变。平衡常数 K 定量描述平衡位置。</p>\n<p><b>核心思维：</b>勒夏特列原理：改变条件，平衡向「减弱改变」方向移动。升温有利于吸热方向；增压有利于气体分子数减少方向；催化剂不改平衡位置。</p>",
      conceptEn: "<p>At equilibrium of a reversible reaction forward and reverse rates are equal and component concentrations are constant. Equilibrium constant K quantitatively describes the position.</p>\n<p><b>Core thinking:</b> Le Chatelier's principle: on a change, equilibrium shifts to 'counter the change.' Heating favors the endothermic direction; raising pressure favors fewer gas molecules; a catalyst does not shift equilibrium.</p>",
      formulas: [
        { left: "Kc", right: "K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}" },
        { left: "勒夏特列", right: "\\text{平衡向减弱改变方向移动}" },
        { left: "转化率", right: "\\alpha = \\frac{\\text{已转化}}{\\text{初始}}" }
      ],
      example: {
        problem: "N₂+3H₂⇌2NH₃ 平衡后增压，平衡移向？",
        steps: [
          "左气体4，右气体2",
          "增压向气体减少方向",
          "向右移动"
        ],
        answer: "向右（生成NH₃）",
        tip: "只比气态物质分子数。"
      },
      exampleEn: {
        problem: "After N₂+3H₂⇌2NH₃ reaches equilibrium, raise pressure; which way does it shift?",
        steps: [
          "left has 4 gas molecules, right has 2",
          "raising pressure favors fewer gas molecules",
          "shifts right"
        ],
        answer: "right (toward NH₃)",
        tip: "Compare only gaseous molecule counts."
      },
      practice: [
        { q: "升温对吸热方向？", a: "促进" },
        { q: "催化剂改变化学平衡？", a: "不能" },
        { q: "K 增大说明偏向？", a: "正向" }
      ],
      practiceEn: [
        { q: "Heating — effect on endothermic direction?", a: "promotes" },
        { q: "Does a catalyst change equilibrium?", a: "no" },
        { q: "K increasing means shift toward?", a: "forward" }
      ],
      hasContent: true,
      ibMap: "IB 平衡覆盖，CSCA 重常数",
      ibMapEn: "IB covers equilibrium; CSCA emphasizes constants",
      apMap: "AP 化学平衡覆盖",
      apMapEn: "AP covers chemical equilibrium",
      aLevelMap: "A-Level 平衡为模块考点",
      aLevelMapEn: "A-Level equilibrium is a module examined topic"
    }
  ]
};
const CHINESE_TERMS = {
  science: [
    { zh: "函数", en: "function", pinyin: "hán shù", example: "这是函数", exampleEn: "This is a function" },
    { zh: "导数", en: "derivative", pinyin: "dǎo shù", example: "求函数的导数", exampleEn: "Find the derivative" },
    { zh: "极限", en: "limit", pinyin: "jí xiàn", example: "求极限值", exampleEn: "Find the limit" },
    { zh: "集合", en: "set", pinyin: "jí hé", example: "定义集合A", exampleEn: "Define set A" },
    { zh: "子集", en: "subset", pinyin: "zǐ jí", example: "A是B的子集", exampleEn: "A is a subset of B" },
    { zh: "交集", en: "intersection", pinyin: "jiāo jí", example: "求两集交集", exampleEn: "Find the intersection" },
    { zh: "并集", en: "union", pinyin: "bìng jí", example: "求两集并集", exampleEn: "Find the union" },
    { zh: "补集", en: "complement", pinyin: "bǔ jí", example: "求A的补集", exampleEn: "Find the complement" },
    { zh: "不等式", en: "inequality", pinyin: "bù děng shì", example: "解不等式", exampleEn: "Solve the inequality" },
    { zh: "向量", en: "vector", pinyin: "xiàng liáng", example: "求向量积", exampleEn: "Compute the vector product" },
    { zh: "数量积", en: "dot product", pinyin: "shù liàng jī", example: "求数量积", exampleEn: "Find the dot product" },
    { zh: "数列", en: "sequence", pinyin: "shù liè", example: "等差是数列", exampleEn: "Arithmetic is a sequence" },
    { zh: "等差数列", en: "arithmetic sequence", pinyin: "děng chā shù liè", example: "求通项公式", exampleEn: "Find the general term" },
    { zh: "等比数列", en: "geometric sequence", pinyin: "děng bǐ shù liè", example: "求公比", exampleEn: "Find the ratio" },
    { zh: "通项公式", en: "general term", pinyin: "tōng xiàng gōng shì", example: "写通项", exampleEn: "Write the general term" },
    { zh: "求和公式", en: "summation formula", pinyin: "qiú hé gōng shì", example: "求和", exampleEn: "Sum the terms" },
    { zh: "椭圆", en: "ellipse", pinyin: "tuǒ yuán", example: "椭圆方程", exampleEn: "Equation of ellipse" },
    { zh: "双曲线", en: "hyperbola", pinyin: "shuāng qū xiàn", example: "双曲线方程", exampleEn: "Equation of hyperbola" },
    { zh: "抛物线", en: "parabola", pinyin: "pāo wù xiàn", example: "抛物线开口", exampleEn: "Parabola opens up" },
    { zh: "圆锥曲线", en: "conic section", pinyin: "yuán zhuī qū xiàn", example: "圆锥曲线", exampleEn: "Conic sections" },
    { zh: "焦距", en: "focal length", pinyin: "jiāo jù", example: "求焦距", exampleEn: "Find the focal length" },
    { zh: "离心率", en: "eccentricity", pinyin: "lí xīn lǜ", example: "求离心率", exampleEn: "Find eccentricity" },
    { zh: "准线", en: "directrix", pinyin: "zhǔn xiàn", example: "求准线", exampleEn: "Find the directrix" },
    { zh: "矩阵", en: "matrix", pinyin: "jǔ zhèn", example: "求矩阵", exampleEn: "Compute the matrix" },
    { zh: "行列式", en: "determinant", pinyin: "háng liè shì", example: "求行列式", exampleEn: "Find the determinant" },
    { zh: "复数", en: "complex number", pinyin: "fù shù", example: "复数运算", exampleEn: "Complex arithmetic" },
    { zh: "实部", en: "real part", pinyin: "shí bù", example: "取实部", exampleEn: "Take the real part" },
    { zh: "虚部", en: "imaginary part", pinyin: "xū bù", example: "取虚部", exampleEn: "Take imaginary part" },
    { zh: "共轭复数", en: "conjugate complex", pinyin: "gòng è fù shù", example: "求共轭", exampleEn: "Find conjugate" },
    { zh: "虚数单位", en: "imaginary unit", pinyin: "xū shù dān wèi", example: "i的平方", exampleEn: "i squared is -1" },
    { zh: "极坐标", en: "polar coordinates", pinyin: "jí zuò biāo", example: "转极坐标", exampleEn: "Convert to polar" },
    { zh: "参数方程", en: "parametric equation", pinyin: "cān shù fāng chéng", example: "写参数式", exampleEn: "Write parametric form" },
    { zh: "对数函数", en: "logarithmic function", pinyin: "duì shù hán shù", example: "求对数值", exampleEn: "Find the log value" },
    { zh: "指数函数", en: "exponential function", pinyin: "zhǐ shù hán shù", example: "指数增长", exampleEn: "Exponential growth" },
    { zh: "三角函数", en: "trigonometric function", pinyin: "sān jiǎo hán shù", example: "三角变换", exampleEn: "Trig transformation" },
    { zh: "正弦", en: "sine", pinyin: "zhèng xián", example: "求正弦值", exampleEn: "Find the sine" },
    { zh: "余弦", en: "cosine", pinyin: "yú xián", example: "求余弦值", exampleEn: "Find the cosine" },
    { zh: "正切", en: "tangent", pinyin: "zhèng qiē", example: "求正切值", exampleEn: "Find the tangent" },
    { zh: "余切", en: "cotangent", pinyin: "yú qiē", example: "求余切值", exampleEn: "Find the cotangent" },
    { zh: "反函数", en: "inverse function", pinyin: "fǎn hán shù", example: "求反函数", exampleEn: "Find inverse function" },
    { zh: "单调性", en: "monotonicity", pinyin: "dān diào xìng", example: "判单调性", exampleEn: "Test monotonicity" },
    { zh: "奇偶性", en: "parity", pinyin: "jī ǒu xìng", example: "判奇偶", exampleEn: "Test parity" },
    { zh: "周期性", en: "periodicity", pinyin: "zhōu qī xìng", example: "求周期", exampleEn: "Find the period" },
    { zh: "最大值", en: "maximum", pinyin: "zuì dà zhí", example: "求最大值", exampleEn: "Find the maximum" },
    { zh: "最小值", en: "minimum", pinyin: "zuì xiǎo zhí", example: "求最小值", exampleEn: "Find the minimum" },
    { zh: "极值", en: "extremum", pinyin: "jí zhí", example: "求极值", exampleEn: "Find extremum" },
    { zh: "微分", en: "differential", pinyin: "wēi fēn", example: "求微分", exampleEn: "Find the differential" },
    { zh: "积分", en: "integral", pinyin: "jī fēn", example: "求积分", exampleEn: "Compute the integral" },
    { zh: "定积分", en: "definite integral", pinyin: "dìng jī fēn", example: "算定积分", exampleEn: "Evaluate definite integral" },
    { zh: "不定积分", en: "indefinite integral", pinyin: "bú dìng jī fēn", example: "求原函数", exampleEn: "Find antiderivative" },
    { zh: "微分方程", en: "differential equation", pinyin: "wēi fēn fāng chéng", example: "解微分方程", exampleEn: "Solve diff eq" },
    { zh: "级数", en: "series", pinyin: "jí shù", example: "求级数和", exampleEn: "Sum the series" },
    { zh: "阶乘", en: "factorial", pinyin: "jiē chéng", example: "算阶乘", exampleEn: "Compute factorial" },
    { zh: "排列", en: "permutation", pinyin: "pái liè", example: "求排列数", exampleEn: "Find permutations" },
    { zh: "组合", en: "combination", pinyin: "zǔ hé", example: "求组合数", exampleEn: "Find combinations" },
    { zh: "二项式定理", en: "binomial theorem", pinyin: "èr xiàng shì dìng lǐ", example: "展开式", exampleEn: "Expand binomial" },
    { zh: "概率", en: "probability", pinyin: "gài lǜ", example: "求概率", exampleEn: "Find probability" },
    { zh: "统计", en: "statistics", pinyin: "tǒng jì", example: "做统计", exampleEn: "Do statistics" },
    { zh: "正态分布", en: "normal distribution", pinyin: "zhèng tài fēn bù", example: "正态曲线", exampleEn: "Normal curve" },
    { zh: "二项分布", en: "binomial distribution", pinyin: "èr xiàng fēn bù", example: "二项概率", exampleEn: "Binomial prob" },
    { zh: "方差", en: "variance", pinyin: "fāng chà", example: "求方差", exampleEn: "Find variance" },
    { zh: "标准差", en: "standard deviation", pinyin: "biāo zhǔn chà", example: "求标准差", exampleEn: "Find std dev" },
    { zh: "期望值", en: "expected value", pinyin: "qī wàng zhí", example: "求期望", exampleEn: "Find expectation" },
    { zh: "样本", en: "sample", pinyin: "yàng běn", example: "取样本", exampleEn: "Take a sample" },
    { zh: "总体", en: "population", pinyin: "zǒng tǐ", example: "总体均值", exampleEn: "Population mean" },
    { zh: "中位数", en: "median", pinyin: "zhōng wèi shù", example: "求中位数", exampleEn: "Find median" },
    { zh: "众数", en: "mode", pinyin: "zhòng shù", example: "求众数", exampleEn: "Find mode" },
    { zh: "相关系数", en: "correlation coefficient", pinyin: "xiāng guān xì shù", example: "算相关", exampleEn: "Compute correlation" },
    { zh: "回归", en: "regression", pinyin: "huí guī", example: "回归分析", exampleEn: "Regression analysis" },
    { zh: "线性规划", en: "linear programming", pinyin: "xiàn xìng guī huà", example: "求最优解", exampleEn: "Find optimum" },
    { zh: "棱柱", en: "prism", pinyin: "léng zhù", example: "直棱柱", exampleEn: "Right prism" },
    { zh: "棱锥", en: "pyramid", pinyin: "léng zhuī", example: "求体积", exampleEn: "Find the volume" },
    { zh: "圆柱", en: "cylinder", pinyin: "yuán zhù", example: "圆柱体积", exampleEn: "Cylinder volume" },
    { zh: "圆锥", en: "cone", pinyin: "yuán zhuī", example: "圆锥体积", exampleEn: "Cone volume" },
    { zh: "球体", en: "sphere", pinyin: "qiú tǐ", example: "球表面积", exampleEn: "Sphere surface area" },
    { zh: "体积", en: "volume", pinyin: "tǐ jī", example: "算体积", exampleEn: "Compute volume" },
    { zh: "表面积", en: "surface area", pinyin: "biǎo miàn jī", example: "算表面积", exampleEn: "Compute surface area" },
    { zh: "三视图", en: "three views", pinyin: "sān shì tú", example: "画三视图", exampleEn: "Draw three views" },
    { zh: "空间向量", en: "space vector", pinyin: "kōng jiān xiàng liáng", example: "空间坐标", exampleEn: "Space coordinates" },
    { zh: "法向量", en: "normal vector", pinyin: "fǎ xiàng liáng", example: "求法向", exampleEn: "Find normal vector" },
    { zh: "二面角", en: "dihedral angle", pinyin: "èr miàn jiǎo", example: "求二面角", exampleEn: "Find dihedral angle" },
    { zh: "解析几何", en: "analytic geometry", pinyin: "jiě xī jǐ hé", example: "解析法", exampleEn: "Analytic method" },
    { zh: "斜率", en: "slope", pinyin: "xié lǜ", example: "求斜率", exampleEn: "Find the slope" },
    { zh: "截距", en: "intercept", pinyin: "jié jù", example: "求截距", exampleEn: "Find the intercept" },
    { zh: "距离公式", en: "distance formula", pinyin: "jù lí gōng shì", example: "算距离", exampleEn: "Compute distance" },
    { zh: "中点公式", en: "midpoint formula", pinyin: "zhōng diǎn gōng shì", example: "求中点", exampleEn: "Find midpoint" },
    { zh: "单位向量", en: "unit vector", pinyin: "dān wèi xiàng liáng", example: "单位化", exampleEn: "Normalize vector" },
    { zh: "线性代数", en: "linear algebra", pinyin: "xiàn xìng dài shù", example: "解线性方程组", exampleEn: "Solve linear system" },
    { zh: "特征值", en: "eigenvalue", pinyin: "tè zhēng zhí", example: "求特征", exampleEn: "Find eigenvalue" },
    { zh: "高斯消元", en: "Gaussian elimination", pinyin: "gāo sī xiāo yuán", example: "消元求解", exampleEn: "Eliminate to solve" },
    { zh: "有理数", en: "rational number", pinyin: "yǒu lǐ shù", example: "有理数集", exampleEn: "Set of rationals" },
    { zh: "无理数", en: "irrational number", pinyin: "wú lǐ shù", example: "是无理数", exampleEn: "Is irrational" },
    { zh: "整数", en: "integer", pinyin: "zhěng shù", example: "整数集", exampleEn: "Set of integers" },
    { zh: "自然数", en: "natural number", pinyin: "zì rán shù", example: "自然数", exampleEn: "Natural numbers" },
    { zh: "实数", en: "real number", pinyin: "shí shù", example: "实数轴", exampleEn: "Real number line" },
    { zh: "绝对值", en: "absolute value", pinyin: "jué duì zhí", example: "求绝对值", exampleEn: "Find absolute value" },
    { zh: "区间", en: "interval", pinyin: "qū jiān", example: "写区间", exampleEn: "Write the interval" },
    { zh: "定义域", en: "domain", pinyin: "dìng yì yù", example: "求定义域", exampleEn: "Find domain" },
    { zh: "值域", en: "range", pinyin: "zhí yù", example: "求值域", exampleEn: "Find range" },
    { zh: "映射", en: "mapping", pinyin: "yìng shè", example: "是映射", exampleEn: "Is a mapping" },
    { zh: "原函数", en: "antiderivative", pinyin: "yuán hán shù", example: "求原函数", exampleEn: "Find antiderivative" },
    { zh: "微积分", en: "calculus", pinyin: "wēi jī fēn", example: "学微积分", exampleEn: "Study calculus" },
    { zh: "无穷大", en: "infinity", pinyin: "wú qióng dà", example: "趋于无穷", exampleEn: "Tends to infinity" },
    { zh: "收敛", en: "converge", pinyin: "shōu liǎn", example: "级数收敛", exampleEn: "Series converges" },
    { zh: "发散", en: "diverge", pinyin: "fā sàn", example: "级数发散", exampleEn: "Series diverges" },
    { zh: "递推公式", en: "recurrence", pinyin: "dì tuī gōng shì", example: "写递推", exampleEn: "Write recurrence" },
    { zh: "数学归纳法", en: "induction", pinyin: "shù xué guī nà fǎ", example: "归纳证明", exampleEn: "Proof by induction" },
    { zh: "容斥原理", en: "inclusion-exclusion", pinyin: "róng chì yuán lǐ", example: "容斥算", exampleEn: "Count by inclusion" },
    { zh: "力学", en: "mechanics", pinyin: "lì xué", example: "牛顿力学", exampleEn: "Newtonian mechanics" },
    { zh: "运动学", en: "kinematics", pinyin: "yùn dòng xué", example: "运动分析", exampleEn: "Kinematic analysis" },
    { zh: "位移", en: "displacement", pinyin: "wèi yí", example: "求位移", exampleEn: "Find displacement" },
    { zh: "速度", en: "velocity", pinyin: "sù dù", example: "瞬时速度", exampleEn: "Instantaneous velocity" },
    { zh: "加速度", en: "acceleration", pinyin: "jiā sù dù", example: "求加速度", exampleEn: "Find acceleration" },
    { zh: "匀变速", en: "uniform acceleration", pinyin: "yún biàn sù", example: "匀加速", exampleEn: "Uniform accel" },
    { zh: "自由落体", en: "free fall", pinyin: "zì yóu luò tǐ", example: "自由下落", exampleEn: "Falling freely" },
    { zh: "重力加速度", en: "gravity acceleration", pinyin: "zhòng lì jiā sù dù", example: "g取十", exampleEn: "g is ten" },
    { zh: "惯性", en: "inertia", pinyin: "guàn xìng", example: "惯性定律", exampleEn: "Law of inertia" },
    { zh: "质量", en: "mass", pinyin: "zhì liàng", example: "物体质量", exampleEn: "Mass of object" },
    { zh: "重量", en: "weight", pinyin: "zhòng liàng", example: "称重量", exampleEn: "Weigh the object" },
    { zh: "摩擦力", en: "friction", pinyin: "mó cā lì", example: "滑动摩擦", exampleEn: "Sliding friction" },
    { zh: "静摩擦", en: "static friction", pinyin: "jìng mó cā", example: "静摩擦", exampleEn: "Static friction" },
    { zh: "摩擦系数", en: "friction coeff", pinyin: "mó cā xì shù", example: "查系数", exampleEn: "Look up coeff" },
    { zh: "张力", en: "tension", pinyin: "zhāng lì", example: "绳张力", exampleEn: "Tension in rope" },
    { zh: "浮力", en: "buoyancy", pinyin: "fú lì", example: "求浮力", exampleEn: "Find buoyancy" },
    { zh: "阿基米德", en: "Archimedes", pinyin: "ā jī mǐ dé", example: "浮力原理", exampleEn: "Buoyancy principle" },
    { zh: "压强", en: "pressure", pinyin: "yā qiáng", example: "求压强", exampleEn: "Find pressure" },
    { zh: "液体压强", en: "liquid pressure", pinyin: "yè tǐ yā qiáng", example: "液压强", exampleEn: "Liquid pressure" },
    { zh: "大气压", en: "atmospheric pressure", pinyin: "dà qì yā", example: "大气压", exampleEn: "Atmospheric pressure" },
    { zh: "帕斯卡", en: "Pascal", pinyin: "pà sī kǎ", example: "帕单位", exampleEn: "Pascal unit" },
    { zh: "功", en: "work", pinyin: "gōng", example: "求功", exampleEn: "Find work" },
    { zh: "功率", en: "power", pinyin: "gōng lǜ", example: "求功率", exampleEn: "Find power" },
    { zh: "动能", en: "kinetic energy", pinyin: "dòng néng", example: "动能定", exampleEn: "Kinetic energy" },
    { zh: "势能", en: "potential energy", pinyin: "shì néng", example: "重力势", exampleEn: "Gravitational PE" },
    { zh: "机械能", en: "mechanical energy", pinyin: "jī xiè néng", example: "机械能", exampleEn: "Mechanical energy" },
    { zh: "机械能守恒", en: "energy conservation", pinyin: "jī xiè néng shǒu héng", example: "守恒律", exampleEn: "Conservation law" },
    { zh: "动量", en: "momentum", pinyin: "dòng liàng", example: "求动量", exampleEn: "Find momentum" },
    { zh: "冲量", en: "impulse", pinyin: "chōng liàng", example: "求冲量", exampleEn: "Find impulse" },
    { zh: "动量守恒", en: "momentum conservation", pinyin: "dòng liàng shǒu héng", example: "守恒", exampleEn: "Conserved" },
    { zh: "碰撞", en: "collision", pinyin: "pèng zhuàng", example: "弹性碰", exampleEn: "Elastic collision" },
    { zh: "圆周运动", en: "circular motion", pinyin: "yuán zhōu yùn dòng", example: "圆周转", exampleEn: "Circular motion" },
    { zh: "向心力", en: "centripetal force", pinyin: "xiàng xīn lì", example: "向心力的", exampleEn: "Centripetal force" },
    { zh: "向心加速度", en: "centripetal accel", pinyin: "xiàng xīn jiā sù dù", example: "向心加速", exampleEn: "Centripetal accel" },
    { zh: "角速度", en: "angular velocity", pinyin: "jiǎo sù dù", example: "角速度", exampleEn: "Angular velocity" },
    { zh: "线速度", en: "linear velocity", pinyin: "xiàn sù dù", example: "线速度", exampleEn: "Linear speed" },
    { zh: "周期", en: "period", pinyin: "zhōu qī", example: "求周期", exampleEn: "Find period" },
    { zh: "频率", en: "frequency", pinyin: "pín lǜ", example: "求频率", exampleEn: "Find frequency" },
    { zh: "万有引力", en: "gravity", pinyin: "wàn yǒu yǐn lì", example: "万有引力", exampleEn: "Universal gravity" },
    { zh: "引力常量", en: "grav constant", pinyin: "yǐn lì cháng liáng", example: "G的值", exampleEn: "Value of G" },
    { zh: "开普勒", en: "Kepler", pinyin: "kāi pǔ lè", example: "开普勒律", exampleEn: "Kepler's law" },
    { zh: "卫星", en: "satellite", pinyin: "wèi xīng", example: "绕地卫", exampleEn: "Orbiting satellite" },
    { zh: "第一宇宙速度", en: "first cosmic vel", pinyin: "dì yī yǔ zhòu sù dù", example: "求速度", exampleEn: "Find velocity" },
    { zh: "简谐振动", en: "SHM", pinyin: "jiǎn xié zhèn dòng", example: "简谐运", exampleEn: "Simple harmonic" },
    { zh: "振幅", en: "amplitude", pinyin: "zhèn fú", example: "求振幅", exampleEn: "Find amplitude" },
    { zh: "相位", en: "phase", pinyin: "xiàng wèi", example: "相位差", exampleEn: "Phase difference" },
    { zh: "机械波", en: "mechanical wave", pinyin: "jī xiè bō", example: "机械波", exampleEn: "Mechanical wave" },
    { zh: "横波", en: "transverse wave", pinyin: "héng bō", example: "横波传", exampleEn: "Transverse wave" },
    { zh: "纵波", en: "longitudinal wave", pinyin: "zòng bō", example: "纵波传", exampleEn: "Longitudinal wave" },
    { zh: "波长", en: "wavelength", pinyin: "bō cháng", example: "求波长", exampleEn: "Find wavelength" },
    { zh: "波速", en: "wave speed", pinyin: "bō sù", example: "波速等", exampleEn: "Wave speed" },
    { zh: "干涉", en: "interference", pinyin: "gān shè", example: "波的干", exampleEn: "Wave interference" },
    { zh: "衍射", en: "diffraction", pinyin: "yǎn shè", example: "光的衍", exampleEn: "Diffraction" },
    { zh: "驻波", en: "standing wave", pinyin: "zhù bō", example: "驻波形", exampleEn: "Standing wave" },
    { zh: "多普勒", en: "Doppler", pinyin: "duō pǔ lè", example: "多普勒效", exampleEn: "Doppler effect" },
    { zh: "声速", en: "sound speed", pinyin: "shēng sù", example: "声速", exampleEn: "Speed of sound" },
    { zh: "库仑定律", en: "Coulomb's law", pinyin: "kù lún dìng lǜ", example: "库仑律", exampleEn: "Coulomb's law" },
    { zh: "电场", en: "electric field", pinyin: "diàn chǎng", example: "电场强", exampleEn: "Electric field" },
    { zh: "电场强度", en: "field strength", pinyin: "diàn chǎng qiáng dù", example: "求场强", exampleEn: "Find field strength" },
    { zh: "电场线", en: "field line", pinyin: "diàn chǎng xiàn", example: "画场线", exampleEn: "Draw field lines" },
    { zh: "电势", en: "electric potential", pinyin: "diàn shì", example: "求电势", exampleEn: "Find potential" },
    { zh: "电势差", en: "potential diff", pinyin: "diàn shì chà", example: "求电压", exampleEn: "Find voltage" },
    { zh: "电容", en: "capacitance", pinyin: "diàn róng", example: "求电容", exampleEn: "Find capacitance" },
    { zh: "电容器", en: "capacitor", pinyin: "diàn róng qì", example: "并联容", exampleEn: "Parallel capacitor" },
    { zh: "电荷", en: "electric charge", pinyin: "diàn hè", example: "带正电", exampleEn: "Positively charged" },
    { zh: "正电荷", en: "positive charge", pinyin: "zhèng diàn hè", example: "正电荷", exampleEn: "Positive charge" },
    { zh: "负电荷", en: "negative charge", pinyin: "fù diàn hè", example: "负电荷", exampleEn: "Negative charge" },
    { zh: "电流", en: "electric current", pinyin: "diàn liú", example: "测电流", exampleEn: "Measure current" },
    { zh: "电阻", en: "resistance", pinyin: "diàn zǔ", example: "求电阻", exampleEn: "Find resistance" },
    { zh: "欧姆定律", en: "Ohm's law", pinyin: "ōu mǔ dìng lǜ", example: "欧姆律", exampleEn: "Ohm's law" },
    { zh: "电阻率", en: "resistivity", pinyin: "diàn zǔ lǜ", example: "查阻率", exampleEn: "Resistivity" },
    { zh: "串联", en: "series", pinyin: "chuàn lián", example: "串联路", exampleEn: "Series circuit" },
    { zh: "并联", en: "parallel", pinyin: "bìng lián", example: "并联路", exampleEn: "Parallel circuit" },
    { zh: "电功率", en: "electric power", pinyin: "diàn gōng lǜ", example: "求功率", exampleEn: "Find power" },
    { zh: "焦耳定律", en: "Joule's law", pinyin: "jiāo ěr dìng lǜ", example: "焦耳热", exampleEn: "Joule heating" },
    { zh: "电动势", en: "EMF", pinyin: "diàn dòng shì", example: "求电动势", exampleEn: "Find EMF" },
    { zh: "电源", en: "power source", pinyin: "diàn yuán", example: "内阻", exampleEn: "Internal resistance" },
    { zh: "磁场", en: "magnetic field", pinyin: "cí chǎng", example: "磁场强", exampleEn: "Magnetic field" },
    { zh: "磁感应强度", en: "magnetic induction", pinyin: "cí gǎn yìng qiáng dù", example: "求磁感", exampleEn: "Find B field" },
    { zh: "磁感线", en: "magnetic line", pinyin: "cí gǎn xiàn", example: "画磁线", exampleEn: "Draw B lines" },
    { zh: "安培力", en: "Ampere force", pinyin: "ān péi lì", example: "安培力", exampleEn: "Ampere force" },
    { zh: "洛伦兹力", en: "Lorentz force", pinyin: "luò lún zī lì", example: "洛伦兹", exampleEn: "Lorentz force" },
    { zh: "磁通量", en: "magnetic flux", pinyin: "cí tōng liàng", example: "求磁通", exampleEn: "Find flux" },
    { zh: "电磁感应", en: "electromagnetic induction", pinyin: "diàn cí gǎn yìng", example: "感应电", exampleEn: "Induced current" },
    { zh: "法拉第定律", en: "Faraday's law", pinyin: "fǎ lā dì dìng lǜ", example: "法拉第", exampleEn: "Faraday's law" },
    { zh: "楞次定律", en: "Lenz's law", pinyin: "léng cì dìng lǜ", example: "楞次律", exampleEn: "Lenz's law" },
    { zh: "感应电动势", en: "induced EMF", pinyin: "gǎn yìng diàn dòng shì", example: "求感应", exampleEn: "Find induced EMF" },
    { zh: "自感", en: "self-induction", pinyin: "zì gǎn", example: "自感系", exampleEn: "Self-inductance" },
    { zh: "变压器", en: "transformer", pinyin: "biàn yā qì", example: "变压比", exampleEn: "Transformer ratio" },
    { zh: "交流电", en: "AC", pinyin: "jiāo liú diàn", example: "交流电", exampleEn: "Alternating current" },
    { zh: "有效值", en: "effective value", pinyin: "yǒu xiào zhí", example: "有效值", exampleEn: "RMS value" },
    { zh: "峰值", en: "peak value", pinyin: "fēng zhí", example: "峰值电", exampleEn: "Peak value" },
    { zh: "分子动理论", en: "kinetic theory", pinyin: "fēn zǐ dòng lǐ lùn", example: "分子动", exampleEn: "Kinetic theory" },
    { zh: "理想气体", en: "ideal gas", pinyin: "lǐ xiǎng qì tǐ", example: "理想气", exampleEn: "Ideal gas" },
    { zh: "气体压强", en: "gas pressure", pinyin: "qì tǐ yā qiáng", example: "气压", exampleEn: "Gas pressure" },
    { zh: "热力学第一定律", en: "first law thermo", pinyin: "rè lì xué dì yī dìng lǜ", example: "热力学一", exampleEn: "First law thermo" },
    { zh: "内能", en: "internal energy", pinyin: "nèi néng", example: "求内能", exampleEn: "Find internal energy" },
    { zh: "热量", en: "heat", pinyin: "rè liàng", example: "传热", exampleEn: "Transfer heat" },
    { zh: "热力学第二定律", en: "second law thermo", pinyin: "rè lì xué dì èr dìng lǜ", example: "熵增", exampleEn: "Entropy increases" },
    { zh: "熵", en: "entropy", pinyin: "shāng", example: "熵变", exampleEn: "Entropy change" },
    { zh: "温度", en: "temperature", pinyin: "wēn dù", example: "摄氏温", exampleEn: "Celsius temp" },
    { zh: "热膨胀", en: "thermal expansion", pinyin: "rè péng zhàng", example: "热膨胀", exampleEn: "Thermal expansion" },
    { zh: "热传导", en: "heat conduction", pinyin: "rè chuán dǎo", example: "导热", exampleEn: "Heat conduction" },
    { zh: "反射", en: "reflection", pinyin: "fǎn shè", example: "反射律", exampleEn: "Law of reflection" },
    { zh: "折射", en: "refraction", pinyin: "zhé shè", example: "折射率", exampleEn: "Refractive index" },
    { zh: "折射率", en: "refractive index", pinyin: "zhé shè lǜ", example: "求折射", exampleEn: "Find index" },
    { zh: "全反射", en: "total reflection", pinyin: "quán fǎn shè", example: "全反射", exampleEn: "Total reflection" },
    { zh: "临界角", en: "critical angle", pinyin: "lín jiè jiǎo", example: "临界角", exampleEn: "Critical angle" },
    { zh: "透镜", en: "lens", pinyin: "tòu jìng", example: "凸透镜", exampleEn: "Convex lens" },
    { zh: "凸透镜", en: "convex lens", pinyin: "tū tòu jìng", example: "会聚", exampleEn: "Converging" },
    { zh: "凹透镜", en: "concave lens", pinyin: "āo tòu jìng", example: "发散", exampleEn: "Diverging" },
    { zh: "焦距透镜", en: "lens focal", pinyin: "jiāo jù tòu jìng", example: "求焦距", exampleEn: "Find focal length" },
    { zh: "放大率", en: "magnification", pinyin: "fàng dà lǜ", example: "放大率", exampleEn: "Magnification" },
    { zh: "光的干涉", en: "light interference", pinyin: "guāng de gān shè", example: "双缝干", exampleEn: "Double-slit" },
    { zh: "薄膜干涉", en: "thin film interfer", pinyin: "báo mó gān shè", example: "薄膜干", exampleEn: "Thin film" },
    { zh: "光的衍射", en: "light diffraction", pinyin: "guāng de yǎn shè", example: "单缝衍", exampleEn: "Single slit" },
    { zh: "偏振", en: "polarization", pinyin: "piān zhèn", example: "偏振光", exampleEn: "Polarized light" },
    { zh: "光电效应", en: "photoelectric", pinyin: "guāng diàn xiào yìng", example: "光电效", exampleEn: "Photoelectric" },
    { zh: "光子", en: "photon", pinyin: "guāng zǐ", example: "光子能", exampleEn: "Photon energy" },
    { zh: "普朗克常量", en: "Planck constant", pinyin: "pǔ lǎng kè cháng liáng", example: "h的值", exampleEn: "Value of h" },
    { zh: "逸出功", en: "work function", pinyin: "yì chū gōng", example: "逸出功", exampleEn: "Work function" },
    { zh: "截止频率", en: "threshold freq", pinyin: "jié zhǐ pín lǜ", example: "截止频", exampleEn: "Threshold freq" },
    { zh: "波粒二象性", en: "duality", pinyin: "bō lì èr xiàng xìng", example: "二象性", exampleEn: "Wave-particle" },
    { zh: "物质波", en: "matter wave", pinyin: "wù zhì bō", example: "德布罗", exampleEn: "de Broglie" },
    { zh: "原子结构", en: "atomic structure", pinyin: "yuán zǐ jié gòu", example: "原子模", exampleEn: "Atomic model" },
    { zh: "原子核", en: "nucleus", pinyin: "yuán zǐ hé", example: "原子核", exampleEn: "Atomic nucleus" },
    { zh: "电子", en: "electron", pinyin: "diàn zǐ", example: "电子转", exampleEn: "Electron" },
    { zh: "质子", en: "proton", pinyin: "zhì zǐ", example: "质子数", exampleEn: "Proton number" },
    { zh: "中子", en: "neutron", pinyin: "zhōng zǐ", example: "中子数", exampleEn: "Neutron number" },
    { zh: "玻尔模型", en: "Bohr model", pinyin: "bō ěr mó xíng", example: "玻尔模", exampleEn: "Bohr model" },
    { zh: "能级", en: "energy level", pinyin: "néng jí", example: "能级跃", exampleEn: "Energy level" },
    { zh: "跃迁", en: "transition", pinyin: "yuè qiān", example: "能级跃", exampleEn: "Transition" },
    { zh: "量子数", en: "quantum number", pinyin: "liàng zǐ shù", example: "主量子", exampleEn: "Quantum number" },
    { zh: "核反应", en: "nuclear reaction", pinyin: "hé fǎn yìng", example: "核反应", exampleEn: "Nuclear reaction" },
    { zh: "衰变", en: "decay", pinyin: "shuāi biàn", example: "阿尔法", exampleEn: "Alpha decay" },
    { zh: "半衰期", en: "half-life", pinyin: "bàn shuāi qī", example: "半衰", exampleEn: "Half-life" },
    { zh: "放射性", en: "radioactivity", pinyin: "fàng shè xìng", example: "放射性", exampleEn: "Radioactivity" },
    { zh: "核裂变", en: "fission", pinyin: "hé liè biàn", example: "核裂", exampleEn: "Fission" },
    { zh: "核聚变", en: "fusion", pinyin: "hé jù biàn", example: "核聚", exampleEn: "Fusion" },
    { zh: "质能方程", en: "mass-energy", pinyin: "zhì néng fāng chéng", example: "质能方", exampleEn: "Mass-energy" },
    { zh: "结合能", en: "binding energy", pinyin: "jié hé néng", example: "结合能", exampleEn: "Binding energy" },
    { zh: "狭义相对论", en: "special relativity", pinyin: "xiá yì xiāng duì lùn", example: "相对论", exampleEn: "Relativity" },
    { zh: "时间膨胀", en: "time dilation", pinyin: "shí jiān péng zhàng", example: "钟慢", exampleEn: "Time dilation" },
    { zh: "长度收缩", en: "length contraction", pinyin: "cháng dù shōu suō", example: "尺缩", exampleEn: "Length contraction" },
    { zh: "光速不变", en: "const speed light", pinyin: "guāng sù bú biàn", example: "光速恒", exampleEn: "Const speed" },
    { zh: "物质", en: "matter", pinyin: "wù zhì", example: "纯净物质", exampleEn: "Pure substance" },
    { zh: "纯净物", en: "pure substance", pinyin: "chún jìng wù", example: "是纯的", exampleEn: "Is pure" },
    { zh: "混合物", en: "mixture", pinyin: "hùn hé wù", example: "是混合", exampleEn: "Is mixture" },
    { zh: "元素", en: "element", pinyin: "yuán sù", example: "化学元", exampleEn: "Element" },
    { zh: "化合物", en: "compound", pinyin: "huà hé wù", example: "化合物", exampleEn: "Compound" },
    { zh: "单质", en: "simple substance", pinyin: "dān zhì", example: "氧单质", exampleEn: "Elemental O2" },
    { zh: "氧化物", en: "oxide", pinyin: "yǎng huà wù", example: "金属氧", exampleEn: "Metal oxide" },
    { zh: "酸", en: "acid", pinyin: "suān", example: "强酸", exampleEn: "Strong acid" },
    { zh: "碱", en: "base", pinyin: "jiǎn", example: "强碱", exampleEn: "Strong base" },
    { zh: "盐", en: "salt", pinyin: "yán", example: "氯化盐", exampleEn: "Chloride salt" },
    { zh: "电解质", en: "electrolyte", pinyin: "diàn jiě zhì", example: "是电解", exampleEn: "Is electrolyte" },
    { zh: "非电解质", en: "non-electrolyte", pinyin: "fēi diàn jiě zhì", example: "非电解", exampleEn: "Non-electrolyte" },
    { zh: "离子", en: "ion", pinyin: "lí zǐ", example: "阴离", exampleEn: "Anion" },
    { zh: "原子", en: "atom", pinyin: "yuán zǐ", example: "原子量", exampleEn: "Atomic mass" },
    { zh: "分子", en: "molecule", pinyin: "fēn zǐ", example: "水分子", exampleEn: "Water molecule" },
    { zh: "化学键", en: "chemical bond", pinyin: "huà xué jiàn", example: "化学键", exampleEn: "Chemical bond" },
    { zh: "离子键", en: "ionic bond", pinyin: "lí zǐ jiàn", example: "离子键", exampleEn: "Ionic bond" },
    { zh: "共价键", en: "covalent bond", pinyin: "gòng jià jiàn", example: "共价键", exampleEn: "Covalent bond" },
    { zh: "金属键", en: "metallic bond", pinyin: "jīn shǔ jiàn", example: "金属键", exampleEn: "Metallic bond" },
    { zh: "极性键", en: "polar bond", pinyin: "jí xìng jiàn", example: "极性键", exampleEn: "Polar bond" },
    { zh: "非极性键", en: "nonpolar bond", pinyin: "fēi jí xìng jiàn", example: "非极性", exampleEn: "Nonpolar bond" },
    { zh: "氢键", en: "hydrogen bond", pinyin: "qīng jiàn", example: "氢键作", exampleEn: "Hydrogen bond" },
    { zh: "分子间力", en: "intermolecular", pinyin: "fēn zǐ jiān lì", example: "范德华", exampleEn: "Van der Waals" },
    { zh: "电子式", en: "electron dot", pinyin: "diàn zǐ shì", example: "写电式", exampleEn: "Electron dot" },
    { zh: "结构式", en: "structural formula", pinyin: "jié gòu shì", example: "写结式", exampleEn: "Structural formula" },
    { zh: "结构简式", en: "condensed formula", pinyin: "jié gòu jiǎn shì", example: "简式", exampleEn: "Condensed" },
    { zh: "化学式", en: "chemical formula", pinyin: "huà xué shì", example: "写式的", exampleEn: "Write formula" },
    { zh: "化学方程式", en: "equation", pinyin: "huà xué fāng chéng shì", example: "配平", exampleEn: "Balance eq" },
    { zh: "离子方程式", en: "ionic equation", pinyin: "lí zǐ fāng chéng shì", example: "写离方", exampleEn: "Ionic eq" },
    { zh: "配平", en: "balancing", pinyin: "pèi píng", example: "配系数", exampleEn: "Balance coeff" },
    { zh: "质量守恒", en: "mass conservation", pinyin: "zhì liàng shǒu héng", example: "守恒成立", exampleEn: "Mass conserved" },
    { zh: "物质的量", en: "amount of substance", pinyin: "wù zhì de liáng", example: "摩尔量", exampleEn: "Amount mol" },
    { zh: "摩尔", en: "mole", pinyin: "mó ěr", example: "一摩尔", exampleEn: "One mole" },
    { zh: "摩尔质量", en: "molar mass", pinyin: "mó ěr zhì liàng", example: "求摩尔", exampleEn: "Molar mass" },
    { zh: "气体摩尔体积", en: "molar volume", pinyin: "qì tǐ mó ěr tǐ jī", example: "标况积", exampleEn: "Molar vol" },
    { zh: "阿伏伽德罗", en: "Avogadro", pinyin: "ā fú jiā dé luó", example: "常数", exampleEn: "Constant" },
    { zh: "物质的量浓度", en: "molarity", pinyin: "wù zhì de liáng nóng dù", example: "求浓度", exampleEn: "Molarity" },
    { zh: "质量分数", en: "mass fraction", pinyin: "zhì liàng fēn shù", example: "质分", exampleEn: "Mass fraction" },
    { zh: "溶解度", en: "solubility", pinyin: "róng jiě dù", example: "求溶解", exampleEn: "Solubility" },
    { zh: "饱和溶液", en: "saturated soln", pinyin: "bǎo hé róng yè", example: "已饱和", exampleEn: "Saturated" },
    { zh: "不饱和", en: "unsaturated", pinyin: "bù bǎo hé", example: "未饱和", exampleEn: "Unsaturated" },
    { zh: "结晶", en: "crystallize", pinyin: "jié jīng", example: "析出晶", exampleEn: "Crystallize" },
    { zh: "溶液", en: "solution", pinyin: "róng yè", example: "水溶", exampleEn: "Aqueous" },
    { zh: "溶质", en: "solute", pinyin: "róng zhì", example: "溶质的", exampleEn: "Solute" },
    { zh: "溶剂", en: "solvent", pinyin: "róng jì", example: "水溶剂", exampleEn: "Solvent" },
    { zh: "胶体", en: "colloid", pinyin: "jiāo tǐ", example: "丁达尔", exampleEn: "Tyndall" },
    { zh: "分散系", en: "dispersion", pinyin: "fēn sàn xì", example: "分散系", exampleEn: "Dispersion" },
    { zh: "酸碱度", en: "pH", pinyin: "suān jiǎn dù", example: "测酸碱", exampleEn: "Measure pH" },
    { zh: "酸碱指示剂", en: "indicator", pinyin: "suān jiǎn zhǐ shì jì", example: "石蕊变", exampleEn: "Indicator" },
    { zh: "中和反应", en: "neutralization", pinyin: "zhōng hé fǎn yìng", example: "中和滴", exampleEn: "Neutralize" },
    { zh: "滴定", en: "titration", pinyin: "dī dìng", example: "滴定管", exampleEn: "Burette" },
    { zh: "强酸", en: "strong acid", pinyin: "qiáng suān", example: "盐酸强", exampleEn: "HCl strong" },
    { zh: "弱酸", en: "weak acid", pinyin: "ruò suān", example: "醋酸弱", exampleEn: "Acetic weak" },
    { zh: "强碱", en: "strong base", pinyin: "qiáng jiǎn", example: "氢氧化钠", exampleEn: "NaOH strong" },
    { zh: "弱碱", en: "weak base", pinyin: "ruò jiǎn", example: "氨水弱", exampleEn: "Ammonia weak" },
    { zh: "盐类水解", en: "hydrolysis", pinyin: "yán lèi shuǐ jiě", example: "水解显", exampleEn: "Hydrolysis" },
    { zh: "缓冲溶液", en: "buffer", pinyin: "huǎn chōng róng yè", example: "缓冲液", exampleEn: "Buffer" },
    { zh: "氧化还原反应", en: "redox", pinyin: "yǎng huà huán yuán fǎn yìng", example: "氧化还", exampleEn: "Redox" },
    { zh: "氧化数", en: "oxidation number", pinyin: "yǎng huà shù", example: "求氧数", exampleEn: "Ox number" },
    { zh: "氧化剂", en: "oxidizer", pinyin: "yǎng huà jì", example: "作氧化", exampleEn: "Oxidizing" },
    { zh: "还原剂", en: "reducer", pinyin: "huán yuán jì", example: "作还原", exampleEn: "Reducing" },
    { zh: "氧化反应", en: "oxidation", pinyin: "yǎng huà fǎn yìng", example: "被氧化", exampleEn: "Oxidized" },
    { zh: "还原反应", en: "reduction", pinyin: "huán yuán fǎn yìng", example: "被还原", exampleEn: "Reduced" },
    { zh: "电子转移", en: "electron transfer", pinyin: "diàn zǐ zhuǎn yí", example: "失电", exampleEn: "Lose e" },
    { zh: "歧化反应", en: "disproportionation", pinyin: "qí huà fǎn yìng", example: "歧化", exampleEn: "Disproportion" },
    { zh: "电化学", en: "electrochemistry", pinyin: "diàn huà xué", example: "电化学", exampleEn: "Electrochem" },
    { zh: "原电池", en: "galvanic cell", pinyin: "yuán diàn chí", example: "原电池", exampleEn: "Galvanic cell" },
    { zh: "电解池", en: "electrolytic cell", pinyin: "diàn jiě chí", example: "电解池", exampleEn: "Electrolytic" },
    { zh: "阳极", en: "anode", pinyin: "yáng jí", example: "阳极氧", exampleEn: "Anode oxid" },
    { zh: "阴极", en: "cathode", pinyin: "yīn jí", example: "阴极还", exampleEn: "Cathode red" },
    { zh: "正极", en: "positive pole", pinyin: "zhèng jí", example: "正极性", exampleEn: "Positive" },
    { zh: "负极", en: "negative pole", pinyin: "fù jí", example: "负极性", exampleEn: "Negative" },
    { zh: "电极反应", en: "electrode reaction", pinyin: "diàn jí fǎn yìng", example: "写电极", exampleEn: "Electrode rxn" },
    { zh: "电镀", en: "electroplating", pinyin: "diàn dù", example: "电镀层", exampleEn: "Electroplate" },
    { zh: "金属腐蚀", en: "corrosion", pinyin: "jīn shǔ fǔ shí", example: "生锈", exampleEn: "Corrosion" },
    { zh: "金属活动性", en: "activity series", pinyin: "jīn shǔ huó dòng xìng", example: "活顺", exampleEn: "Activity" },
    { zh: "周期表", en: "periodic table", pinyin: "zhōu qī biǎo", example: "周期表", exampleEn: "Periodic table" },
    { zh: "周期律", en: "periodic law", pinyin: "zhōu qī lǜ", example: "周期律", exampleEn: "Periodic law" },
    { zh: "族", en: "group", pinyin: "zú", example: "主族", exampleEn: "Main group" },
    { zh: "主族", en: "main group", pinyin: "zhǔ zú", example: "主族元", exampleEn: "Main group" },
    { zh: "副族", en: "subgroup", pinyin: "fù zú", example: "副族元", exampleEn: "Subgroup" },
    { zh: "过渡金属", en: "transition metal", pinyin: "guò dù jīn shǔ", example: "过渡金", exampleEn: "Transition" },
    { zh: "原子半径", en: "atomic radius", pinyin: "yuán zǐ bàn jìng", example: "半径", exampleEn: "Atomic radius" },
    { zh: "离子半径", en: "ionic radius", pinyin: "lí zǐ bàn jìng", example: "离半", exampleEn: "Ionic radius" },
    { zh: "电负性", en: "electronegativity", pinyin: "diàn fù xìng", example: "电负", exampleEn: "Electroneg" },
    { zh: "金属性", en: "metallic character", pinyin: "jīn shǔ xìng", example: "金属性", exampleEn: "Metallic" },
    { zh: "非金属性", en: "nonmetallic", pinyin: "fēi jīn shǔ xìng", example: "非金性", exampleEn: "Nonmetallic" },
    { zh: "第一电离能", en: "ionization energy", pinyin: "dì yī diàn lí néng", example: "电离能", exampleEn: "Ionization" },
    { zh: "电子排布", en: "electron config", pinyin: "diàn zǐ pái bù", example: "排布", exampleEn: "Config" },
    { zh: "能层", en: "shell", pinyin: "néng céng", example: "能层", exampleEn: "Shell" },
    { zh: "轨道", en: "orbital", pinyin: "guǐ dào", example: "轨域", exampleEn: "Orbital" },
    { zh: "泡利原理", en: "Pauli principle", pinyin: "pào lì yuán lǐ", example: "泡利不", exampleEn: "Pauli" },
    { zh: "洪特规则", en: "Hund's rule", pinyin: "hóng tè guī zé", example: "洪特规", exampleEn: "Hund" },
    { zh: "价电子", en: "valence electron", pinyin: "jià diàn zǐ", example: "价电", exampleEn: "Valence e" },
    { zh: "化学平衡", en: "equilibrium", pinyin: "huà xué píng héng", example: "平衡移", exampleEn: "Equilibrium" },
    { zh: "平衡常数", en: "equilibrium const", pinyin: "píng héng cháng shù", example: "求常数", exampleEn: "Eq const" },
    { zh: "勒夏特列", en: "Le Chatelier", pinyin: "lè xià tè liè", example: "平衡移", exampleEn: "Le Chatelier" },
    { zh: "转化率", en: "conversion rate", pinyin: "zhuǎn huà lǜ", example: "转率", exampleEn: "Conversion" },
    { zh: "反应速率", en: "reaction rate", pinyin: "fǎn yìng sù lǜ", example: "求速率", exampleEn: "Rate" },
    { zh: "活化能", en: "activation energy", pinyin: "huó huà néng", example: "活化能", exampleEn: "Activation" },
    { zh: "催化剂", en: "catalyst", pinyin: "cuī huà jì", example: "加催化", exampleEn: "Catalyst" },
    { zh: "有效碰撞", en: "effective collision", pinyin: "yǒu xiào pèng zhuàng", example: "有效碰", exampleEn: "Effective" },
    { zh: "吸热反应", en: "endothermic", pinyin: "xī rè fǎn yìng", example: "吸热", exampleEn: "Endothermic" },
    { zh: "放热反应", en: "exothermic", pinyin: "fàng rè fǎn yìng", example: "放热", exampleEn: "Exothermic" },
    { zh: "焓变", en: "enthalpy change", pinyin: "hán biàn", example: "焓变", exampleEn: "Enthalpy" },
    { zh: "熵变", en: "entropy change", pinyin: "shāng biàn", example: "熵变", exampleEn: "Entropy chg" },
    { zh: "吉布斯自由能", en: "Gibbs free energy", pinyin: "jí bù sī zì yóu néng", example: "自由能", exampleEn: "Gibbs G" },
    { zh: "燃烧热", en: "heat of combustion", pinyin: "rán shāo rè", example: "燃热", exampleEn: "Combustion" },
    { zh: "中和热", en: "heat of neutralization", pinyin: "zhōng hé rè", example: "中热", exampleEn: "Neutrn heat" },
    { zh: "盖斯定律", en: "Hess's law", pinyin: "gài sī dìng lǜ", example: "盖斯律", exampleEn: "Hess law" },
    { zh: "烃", en: "hydrocarbon", pinyin: "tīng", example: "烷烃", exampleEn: "Hydrocarbon" },
    { zh: "烷烃", en: "alkane", pinyin: "wán tīng", example: "甲烷", exampleEn: "Methane" },
    { zh: "烯烃", en: "alkene", pinyin: "xī tīng", example: "乙烯", exampleEn: "Ethene" },
    { zh: "炔烃", en: "alkyne", pinyin: "quē tīng", example: "乙炔", exampleEn: "Ethyne" },
    { zh: "芳香烃", en: "aromatic", pinyin: "fāng xiāng tīng", example: "苯环", exampleEn: "Benzene" },
    { zh: "苯", en: "benzene", pinyin: "běn", example: "苯分", exampleEn: "Benzene" },
    { zh: "官能团", en: "functional group", pinyin: "guān néng tuán", example: "官团", exampleEn: "Functional grp" },
    { zh: "羟基", en: "hydroxyl", pinyin: "qiǎng jī", example: "醇羟基", exampleEn: "Hydroxyl" },
    { zh: "羧基", en: "carboxyl", pinyin: "suō jī", example: "羧酸", exampleEn: "Carboxyl" },
    { zh: "醛基", en: "aldehyde", pinyin: "quán jī", example: "醛基", exampleEn: "Aldehyde" },
    { zh: "羰基", en: "carbonyl", pinyin: "tāng jī", example: "酮羰", exampleEn: "Carbonyl" },
    { zh: "氨基", en: "amino", pinyin: "ān jī", example: "氨基", exampleEn: "Amino" },
    { zh: "卤代烃", en: "haloalkane", pinyin: "lǔ dài tīng", example: "氯代", exampleEn: "Haloalkane" },
    { zh: "醇", en: "alcohol", pinyin: "chún", example: "乙醇", exampleEn: "Alcohol" },
    { zh: "醛", en: "aldehyde", pinyin: "quán", example: "乙醛", exampleEn: "Aldehyde" },
    { zh: "酮", en: "ketone", pinyin: "tóng", example: "丙酮", exampleEn: "Ketone" },
    { zh: "羧酸", en: "carboxylic acid", pinyin: "suō suān", example: "乙酸", exampleEn: "Carboxylic" },
    { zh: "酯", en: "ester", pinyin: "zhǐ", example: "乙酸乙", exampleEn: "Ester" },
    { zh: "醚", en: "ether", pinyin: "mí", example: "乙醚", exampleEn: "Ether" },
    { zh: "同分异构", en: "isomerism", pinyin: "tóng fēn yì gòu", example: "同分异", exampleEn: "Isomer" },
    { zh: "同系物", en: "homolog", pinyin: "tóng xì wù", example: "同系", exampleEn: "Homolog" },
    { zh: "取代反应", en: "substitution", pinyin: "qǔ dài fǎn yìng", example: "取反", exampleEn: "Substitution" },
    { zh: "加成反应", en: "addition", pinyin: "jiā chéng fǎn yìng", example: "加成", exampleEn: "Addition" },
    { zh: "消去反应", en: "elimination", pinyin: "xiāo qù fǎn yìng", example: "消去", exampleEn: "Elimination" },
    { zh: "聚合反应", en: "polymerization", pinyin: "jù hé fǎn yìng", example: "聚合", exampleEn: "Polymerize" },
    { zh: "酯化反应", en: "esterification", pinyin: "zhǐ huà fǎn yìng", example: "酯化", exampleEn: "Esterify" },
    { zh: "皂化反应", en: "saponification", pinyin: "zào huà fǎn yìng", example: "皂化", exampleEn: "Saponify" },
    { zh: "水解反应", en: "hydrolysis rxn", pinyin: "shuǐ jiě fǎn yìng", example: "水反应", exampleEn: "Hydrolyze" },
    { zh: "氨基酸", en: "amino acid", pinyin: "ān jī suān", example: "氨基", exampleEn: "Amino acid" },
    { zh: "蛋白质", en: "protein", pinyin: "dàn bái zhì", example: "蛋白", exampleEn: "Protein" },
    { zh: "肽键", en: "peptide bond", pinyin: "tài jiàn", example: "肽键", exampleEn: "Peptide" },
    { zh: "核酸", en: "nucleic acid", pinyin: "hé suān", example: "核酸", exampleEn: "Nucleic acid" },
    { zh: "糖类", en: "carbohydrate", pinyin: "táng lèi", example: "葡萄", exampleEn: "Carbohydrate" },
    { zh: "油脂", en: "lipid", pinyin: "yóu zhī", example: "油脂", exampleEn: "Lipid" },
    { zh: "高分子", en: "polymer", pinyin: "gāo fēn zǐ", example: "高分", exampleEn: "Polymer" },
    { zh: "塑料", en: "plastic", pinyin: "sù liào", example: "塑料", exampleEn: "Plastic" },
    { zh: "合成纤维", en: "synthetic fiber", pinyin: "hé chéng xiān wéi", example: "纤维", exampleEn: "Fiber" },
    { zh: "细胞", en: "cell", pinyin: "xì bāo", example: "是细胞", exampleEn: "Is a cell" },
    { zh: "细胞膜", en: "cell membrane", pinyin: "xì bāo mó", example: "膜流动", exampleEn: "Membrane" },
    { zh: "细胞质", en: "cytoplasm", pinyin: "xì bāo zhì", example: "细胞质", exampleEn: "Cytoplasm" },
    { zh: "细胞核", en: "nucleus", pinyin: "xì bāo hé", example: "核遗传", exampleEn: "Nucleus" },
    { zh: "线粒体", en: "mitochondria", pinyin: "xiàn lì tǐ", example: "供能", exampleEn: "Mitochondria" },
    { zh: "叶绿体", en: "chloroplast", pinyin: "yè lǜ tǐ", example: "光合", exampleEn: "Chloroplast" },
    { zh: "核糖体", en: "ribosome", pinyin: "hé táng tǐ", example: "合蛋白", exampleEn: "Ribosome" },
    { zh: "内质网", en: "ER", pinyin: "nèi zhì wǎng", example: "内质", exampleEn: "ER" },
    { zh: "高尔基体", en: "Golgi", pinyin: "gāo ěr jī tǐ", example: "高尔基", exampleEn: "Golgi" },
    { zh: "溶酶体", en: "lysosome", pinyin: "róng méi tǐ", example: "溶酶", exampleEn: "Lysosome" },
    { zh: "染色体", en: "chromosome", pinyin: "rǎn sè tǐ", example: "染色体", exampleEn: "Chromosome" },
    { zh: "染色质", en: "chromatin", pinyin: "rǎn sè zhì", example: "染色质", exampleEn: "Chromatin" },
    { zh: "基因", en: "gene", pinyin: "jī yīn", example: "基因表", exampleEn: "Gene" },
    { zh: "蛋白质合成", en: "protein synth", pinyin: "dàn bái zhì hé chéng", example: "翻译", exampleEn: "Protein synth" },
    { zh: "转录", en: "transcription", pinyin: "zhuǎn lù", example: "转过程", exampleEn: "Transcription" },
    { zh: "翻译", en: "translation", pinyin: "fān yì", example: "翻译", exampleEn: "Translation" },
    { zh: "有丝分裂", en: "mitosis", pinyin: "yǒu sī fēn liè", example: "分均等", exampleEn: "Mitosis" },
    { zh: "减数分裂", en: "meiosis", pinyin: "jiǎn shù fēn liè", example: "减分裂", exampleEn: "Meiosis" },
    { zh: "光合作用", en: "photosynthesis", pinyin: "guāng hé zuò yòng", example: "光合", exampleEn: "Photosynthesis" },
    { zh: "呼吸作用", en: "respiration", pinyin: "hū xī zuò yòng", example: "呼吸", exampleEn: "Respiration" },
    { zh: "酶", en: "enzyme", pinyin: "méi", example: "酶的活", exampleEn: "Enzyme" },
    { zh: "主动运输", en: "active transport", pinyin: "zhǔ dòng yùn shū", example: "主运输", exampleEn: "Active transport" },
    { zh: "被动运输", en: "passive transport", pinyin: "bèi dòng yùn shū", example: "被运输", exampleEn: "Passive" },
    { zh: "自由扩散", en: "simple diffusion", pinyin: "zì yóu kuò sàn", example: "自由扩", exampleEn: "Diffusion" },
    { zh: "协助扩散", en: "facilitated diff", pinyin: "xié zhù kuò sàn", example: "协助", exampleEn: "Facilitated" },
    { zh: "内环境", en: "internal env", pinyin: "nèi huán jìng", example: "内稳态", exampleEn: "Internal env" },
    { zh: "稳态", en: "homeostasis", pinyin: "wěn tài", example: "稳态", exampleEn: "Homeostasis" },
    { zh: "神经系统", en: "nervous system", pinyin: "shén jīng xì tǒng", example: "神经", exampleEn: "Nervous" },
    { zh: "突触", en: "synapse", pinyin: "tū chù", example: "突触", exampleEn: "Synapse" },
    { zh: "激素", en: "hormone", pinyin: "jī sù", example: "激素调", exampleEn: "Hormone" },
    { zh: "免疫", en: "immunity", pinyin: "miǎn yì", example: "免疫", exampleEn: "Immunity" },
    { zh: "抗体", en: "antibody", pinyin: "kàng tǐ", example: "抗体", exampleEn: "Antibody" },
    { zh: "抗原", en: "antigen", pinyin: "kàng yuán", example: "抗原", exampleEn: "Antigen" },
    { zh: "种群", en: "population", pinyin: "zhǒng qún", example: "种群密", exampleEn: "Population" },
    { zh: "群落", en: "community", pinyin: "qún luò", example: "群落", exampleEn: "Community" },
    { zh: "生态系统", en: "ecosystem", pinyin: "shēng tài xì tǒng", example: "生态系", exampleEn: "Ecosystem" },
    { zh: "食物链", en: "food chain", pinyin: "shí wù liàn", example: "食物链", exampleEn: "Food chain" },
    { zh: "食物网", en: "food web", pinyin: "shí wù wǎng", example: "食物网", exampleEn: "Food web" },
    { zh: "生物多样性", en: "biodiversity", pinyin: "shēng wù duō yàng xìng", example: "多样性", exampleEn: "Biodiversity" },
    { zh: "进化", en: "evolution", pinyin: "jìn huà", example: "进化", exampleEn: "Evolution" },
    { zh: "自然选择", en: "natural selection", pinyin: "zì rán xuǎn zé", example: "选择", exampleEn: "Selection" },
    { zh: "遗传", en: "heredity", pinyin: "yí chuán", example: "遗传", exampleEn: "Heredity" },
    { zh: "变异", en: "variation", pinyin: "biàn yì", example: "变异", exampleEn: "Variation" },
    { zh: "分离定律", en: "law of segregation", pinyin: "fēn lí dìng lǜ", example: "分离", exampleEn: "Segregation" },
    { zh: "自由组合", en: "independent assort", pinyin: "zì yóu zǔ hé", example: "组合", exampleEn: "Assortment" },
    { zh: "伴性遗传", en: "sex-linked", pinyin: "bàn xìng yí chuán", example: "伴性", exampleEn: "Sex-linked" },
    { zh: "细胞分化", en: "differentiation", pinyin: "xì bāo fēn huà", example: "分化", exampleEn: "Differentiation" },
    { zh: "细胞凋亡", en: "apoptosis", pinyin: "xì bāo diāo wáng", example: "凋亡", exampleEn: "Apoptosis" },
    { zh: "癌变", en: "carcinogenesis", pinyin: "ái biàn", example: "癌变", exampleEn: "Cancer" },
    { zh: "病毒", en: "virus", pinyin: "bìng dú", example: "病毒", exampleEn: "Virus" },
    { zh: "细菌", en: "bacteria", pinyin: "xì jūn", example: "细杆", exampleEn: "Bacteria" },
    { zh: "真菌", en: "fungus", pinyin: "zhēn jūn", example: "真菌", exampleEn: "Fungus" },
    { zh: "蒸腾作用", en: "transpiration", pinyin: "zhēng téng zuò yòng", example: "蒸腾", exampleEn: "Transpiration" },
    { zh: "物质循环", en: "matter cycle", pinyin: "wù zhì xún huán", example: "碳循", exampleEn: "Matter cycle" },
    { zh: "能量流动", en: "energy flow", pinyin: "néng liàng liú dòng", example: "能量流", exampleEn: "Energy flow" },
    { zh: "碳循环", en: "carbon cycle", pinyin: "tàn xún huán", example: "碳循", exampleEn: "Carbon cycle" },
    { zh: "氮循环", en: "nitrogen cycle", pinyin: "dàn xún huán", example: "氮循", exampleEn: "Nitrogen cycle" },
    { zh: "群落演替", en: "succession", pinyin: "qún luò yǎn tì", example: "演替", exampleEn: "Succession" },
    { zh: "生态位", en: "niche", pinyin: "shēng tài wèi", example: "生态位", exampleEn: "Niche" },
    { zh: "基因工程", en: "gene engineering", pinyin: "jī yīn gōng chéng", example: "基因工", exampleEn: "Gene eng" },
    { zh: "克隆", en: "clone", pinyin: "kè lóng", example: "克隆", exampleEn: "Clone" },
    { zh: "发酵", en: "fermentation", pinyin: "fā jiào", example: "发酵", exampleEn: "Fermentation" },
    { zh: "渗透", en: "osmosis", pinyin: "shèn tòu", example: "渗透", exampleEn: "Osmosis" },
    { zh: "质壁分离", en: "plasmolysis", pinyin: "zhì bì fēn lí", example: "壁分离", exampleEn: "Plasmolysis" },
    { zh: "同源染色体", en: "homologous", pinyin: "tóng yuán rǎn sè tǐ", example: "同源", exampleEn: "Homologous" },
    { zh: "四分体", en: "tetrad", pinyin: "sì fēn tǐ", example: "四分", exampleEn: "Tetrad" },
    { zh: "受精作用", en: "fertilization", pinyin: "shòu jīng zuò yòng", example: "受精", exampleEn: "Fertilize" },
    { zh: "显性", en: "dominant", pinyin: "xiǎn xìng", example: "显性状", exampleEn: "Dominant" },
    { zh: "隐性", en: "recessive", pinyin: "yǐn xìng", example: "隐性状", exampleEn: "Recessive" },
    { zh: "基因型", en: "genotype", pinyin: "jī yīn xíng", example: "基因", exampleEn: "Genotype" },
    { zh: "表现型", en: "phenotype", pinyin: "biǎo xiàn xíng", example: "表现", exampleEn: "Phenotype" },
    { zh: "中心法则", en: "central dogma", pinyin: "zhōng xīn fǎ zé", example: "中心法", exampleEn: "Central dogma" },
    { zh: "三联体密码", en: "codon", pinyin: "sān lián tǐ mì mǎ", example: "密码", exampleEn: "Codon" },
    { zh: "自主神经", en: "autonomic nerve", pinyin: "zì zhǔ shén jīng", example: "自主神", exampleEn: "Autonomic nerve" },
    { zh: "反射弧", en: "reflex arc", pinyin: "fǎn shè hú", example: "反射弧", exampleEn: "Reflex arc" },
    { zh: "神经递质", en: "neurotransmitter", pinyin: "shén jīng dì zhì", example: "递质", exampleEn: "Neurotransmitter" },
    { zh: "非特异性免疫", en: "innate immunity", pinyin: "fēi tè yì xìng miǎn yì", example: "非特异", exampleEn: "Innate" },
    { zh: "特异性免疫", en: "adaptive immunity", pinyin: "tè yì xìng miǎn yì", example: "特异性", exampleEn: "Adaptive" },
    { zh: "体液免疫", en: "humoral immunity", pinyin: "tǐ yè miǎn yì", example: "体液", exampleEn: "Humoral" },
    { zh: "细胞免疫", en: "cell-mediated", pinyin: "xì bāo miǎn yì", example: "细胞免", exampleEn: "Cell-mediated" },
    { zh: "组织液", en: "interstitial fluid", pinyin: "zǔ zhī yè", example: "组织", exampleEn: "Interstitial" },
    { zh: "淋巴", en: "lymph", pinyin: "lín bā", example: "淋巴", exampleEn: "Lymph" },
    { zh: "种群密度", en: "population density", pinyin: "zhǒng qún mì dù", example: "种群密", exampleEn: "Pop density" },
    { zh: "年龄结构", en: "age structure", pinyin: "nián líng jié gòu", example: "年龄", exampleEn: "Age struct" },
    { zh: "性别比例", en: "sex ratio", pinyin: "xìng bié bǐ lì", example: "性比", exampleEn: "Sex ratio" },
    { zh: "出生率", en: "birth rate", pinyin: "chū shēng lǜ", example: "出生", exampleEn: "Birth rate" },
    { zh: "死亡率", en: "death rate", pinyin: "sǐ wáng lǜ", example: "死亡", exampleEn: "Death rate" },
    { zh: "群落结构", en: "community struct", pinyin: "qún luò jié gòu", example: "垂直", exampleEn: "Vertical" },
    { zh: "捕食", en: "predation", pinyin: "bǔ shí", example: "捕食", exampleEn: "Predation" },
    { zh: "竞争", en: "competition", pinyin: "jìng zhēng", example: "竞争", exampleEn: "Competition" },
    { zh: "共生", en: "symbiosis", pinyin: "gòng shēng", example: "共生", exampleEn: "Symbiosis" },
    { zh: "寄生", en: "parasitism", pinyin: "jì shēng", example: "寄生", exampleEn: "Parasitism" },
    { zh: "生物圈", en: "biosphere", pinyin: "shēng wù quān", example: "生物圈", exampleEn: "Biosphere" },
    { zh: "自然保护区", en: "reserve", pinyin: "zì rán bǎo hù qū", example: "保护", exampleEn: "Reserve" },
    { zh: "就地保护", en: "in-situ", pinyin: "jiù dì bǎo hù", example: "就地", exampleEn: "In-situ" },
    { zh: "迁地保护", en: "ex-situ", pinyin: "qiān dì bǎo hù", example: "迁地", exampleEn: "Ex-situ" },
    { zh: "几何平均", en: "geometric mean", pinyin: "jǐ hé píng jūn", example: "几均", exampleEn: "Geometric mean" },
    { zh: "算术平均", en: "arithmetic mean", pinyin: "suàn shù píng jūn", example: "算均", exampleEn: "Arithmetic mean" },
    { zh: "可信区间", en: "confidence interval", pinyin: "kě xìn qū jiān", example: "置信", exampleEn: "Confidence" },
    { zh: "假设检验", en: "hypothesis test", pinyin: "jiǎ shè jiǎn yàn", example: "检验", exampleEn: "Hypothesis test" },
    { zh: "卡方检验", en: "chi-square", pinyin: "kǎ fāng jiǎn yàn", example: "卡方", exampleEn: "Chi-square" },
    { zh: "回归系数", en: "regression coeff", pinyin: "huí guī xì shù", example: "回归系", exampleEn: "Reg coeff" },
    { zh: "残差", en: "residual", pinyin: "cán chà", example: "残差", exampleEn: "Residual" },
    { zh: "光照强度", en: "light intensity", pinyin: "guāng zhào qiáng dù", example: "光强", exampleEn: "Light intensity" },
    { zh: "温度系数", en: "temperature coeff", pinyin: "wēn dù xì shù", example: "温系", exampleEn: "Temp coeff" },
    { zh: "渗透压", en: "osmotic pressure", pinyin: "shèn tòu yā", example: "渗透", exampleEn: "Osmotic" },
    { zh: "质子守恒", en: "proton balance", pinyin: "zhì zǐ shǒu héng", example: "质子守", exampleEn: "Proton bal" },
    { zh: "物料守恒", en: "material balance", pinyin: "wù liào shǒu héng", example: "物料守", exampleEn: "Mass bal" },
    { zh: "电荷守恒", en: "charge balance", pinyin: "diàn hè shǒu héng", example: "电荷守", exampleEn: "Charge bal" },
    { zh: "盐桥", en: "salt bridge", pinyin: "yán qiáo", example: "盐桥", exampleEn: "Salt bridge" },
    { zh: "参比电极", en: "reference electrode", pinyin: "cān bǐ diàn jí", example: "参比", exampleEn: "Reference" }
  ],
  liberal: [
    { zh: "市场经济", en: "market economy", pinyin: "shì chǎng jīng jì", example: "市场配", exampleEn: "Market allocates" },
    { zh: "计划经济", en: "planned economy", pinyin: "jì huà jīng jì", example: "计划配", exampleEn: "Planned economy" },
    { zh: "供求关系", en: "supply and demand", pinyin: "gōng qiú guān xì", example: "供需", exampleEn: "Supply and demand" },
    { zh: "供给", en: "supply", pinyin: "gōng jǐ", example: "增供给", exampleEn: "Increase supply" },
    { zh: "需求", en: "demand", pinyin: "xū qiú", example: "降需求", exampleEn: "Lower demand" },
    { zh: "通货膨胀", en: "inflation", pinyin: "tōng huò péng zhàng", example: "通胀", exampleEn: "Inflation" },
    { zh: "通货紧缩", en: "deflation", pinyin: "tōng huò jǐn suō", example: "通缩", exampleEn: "Deflation" },
    { zh: "货币政策", en: "monetary policy", pinyin: "huò bì zhèng cè", example: "降准", exampleEn: "Cut reserve" },
    { zh: "财政政策", en: "fiscal policy", pinyin: "cái zhèng zhèng cè", example: "扩财政", exampleEn: "Expand fiscal" },
    { zh: "国内生产总值", en: "GDP", pinyin: "guó nèi shēng chǎn zǒng zhí", example: "算GDP", exampleEn: "Compute GDP" },
    { zh: "失业率", en: "unemployment rate", pinyin: "shī yè lǜ", example: "失业率", exampleEn: "Unemployment" },
    { zh: "边际效用", en: "marginal utility", pinyin: "biān jì xiào yòng", example: "边际用", exampleEn: "Marginal utility" },
    { zh: "机会成本", en: "opportunity cost", pinyin: "jī huì chéng běn", example: "机会本", exampleEn: "Opportunity cost" },
    { zh: "比较优势", en: "comparative adv", pinyin: "bǐ jiào yōu shì", example: "比较优", exampleEn: "Comparative adv" },
    { zh: "绝对优势", en: "absolute advantage", pinyin: "jué duì yōu shì", example: "绝对优", exampleEn: "Absolute adv" },
    { zh: "自由贸易", en: "free trade", pinyin: "zì yóu mào yì", example: "自由贸", exampleEn: "Free trade" },
    { zh: "贸易保护", en: "protectionism", pinyin: "mào yì bǎo hù", example: "关税", exampleEn: "Tariff" },
    { zh: "关税", en: "tariff", pinyin: "guān shuì", example: "征关税", exampleEn: "Impose tariff" },
    { zh: "汇率", en: "exchange rate", pinyin: "huì lǜ", example: "汇率", exampleEn: "Exchange rate" },
    { zh: "利率", en: "interest rate", pinyin: "lì lǜ", example: "降息", exampleEn: "Cut rate" },
    { zh: "资本市场", en: "capital market", pinyin: "zī běn shì chǎng", example: "资本市", exampleEn: "Capital market" },
    { zh: "股票市场", en: "stock market", pinyin: "gǔ piào shì chǎng", example: "股市", exampleEn: "Stock market" },
    { zh: "垄断", en: "monopoly", pinyin: "lǒng duàn", example: "垄断", exampleEn: "Monopoly" },
    { zh: "寡头", en: "oligopoly", pinyin: "guǎ tóu", example: "寡头", exampleEn: "Oligopoly" },
    { zh: "完全竞争", en: "perfect competition", pinyin: "wán quán jìng zhēng", example: "竞争", exampleEn: "Perfect comp" },
    { zh: "消费者剩余", en: "consumer surplus", pinyin: "xiāo fèi zhě shèng yú", example: "消剩", exampleEn: "Consumer surp" },
    { zh: "生产者剩余", en: "producer surplus", pinyin: "shēng chǎn zhě shèng yú", example: "生剩", exampleEn: "Producer surp" },
    { zh: "恩格尔系数", en: "Engel coefficient", pinyin: "ēn gé ěr xì shù", example: "恩格", exampleEn: "Engel coeff" },
    { zh: "基尼系数", en: "Gini coefficient", pinyin: "jī ní xì shù", example: "基尼", exampleEn: "Gini coeff" },
    { zh: "宏观经济", en: "macro economy", pinyin: "hóng guān jīng jì", example: "宏观", exampleEn: "Macro" },
    { zh: "微观经济", en: "micro economy", pinyin: "wēi guān jīng jì", example: "微观", exampleEn: "Micro" },
    { zh: "经济周期", en: "business cycle", pinyin: "jīng jì zhōu qī", example: "周期", exampleEn: "Business cycle" },
    { zh: "经济衰退", en: "recession", pinyin: "jīng jì shuāi tuì", example: "衰退", exampleEn: "Recession" },
    { zh: "工业化", en: "industrialization", pinyin: "gōng yè huà", example: "工业化", exampleEn: "Industrialize" },
    { zh: "城市化", en: "urbanization", pinyin: "chéng shì huà", example: "城市化", exampleEn: "Urbanize" },
    { zh: "产业升级", en: "upgrading", pinyin: "chǎn yè shēng jí", example: "升级", exampleEn: "Upgrade" },
    { zh: "供给侧改革", en: "supply-side reform", pinyin: "gōng jǐ cè gǎi gé", example: "供改", exampleEn: "Supply reform" },
    { zh: "财政赤字", en: "fiscal deficit", pinyin: "cái zhèng chì zì", example: "赤字", exampleEn: "Deficit" },
    { zh: "国债", en: "national debt", pinyin: "guó zhài", example: "发国债", exampleEn: "Issue debt" },
    { zh: "税收", en: "taxation", pinyin: "shuì shōu", example: "征税", exampleEn: "Taxation" },
    { zh: "累进税", en: "progressive tax", pinyin: "lěi jìn shuì", example: "累进", exampleEn: "Progressive" },
    { zh: "增值税", en: "VAT", pinyin: "zēng zhí shuì", example: "增值税", exampleEn: "Value-added" },
    { zh: "个人所得税", en: "income tax", pinyin: "gè rén suǒ dé shuì", example: "个税", exampleEn: "Income tax" },
    { zh: "国有企业", en: "SOE", pinyin: "guó yǒu qǐ yè", example: "国企", exampleEn: "State firm" },
    { zh: "民营企业", en: "private firm", pinyin: "mín yíng qǐ yè", example: "民企", exampleEn: "Private firm" },
    { zh: "外资企业", en: "foreign firm", pinyin: "wài zī qǐ yè", example: "外企", exampleEn: "Foreign firm" },
    { zh: "股份制", en: "joint-stock", pinyin: "gǔ fèn zhì", example: "股份", exampleEn: "Joint-stock" },
    { zh: "产权", en: "property rights", pinyin: "chǎn quán", example: "产权", exampleEn: "Property" },
    { zh: "知识产权", en: "IP rights", pinyin: "zhī shi chǎn quán", example: "专利", exampleEn: "IP rights" },
    { zh: "专利", en: "patent", pinyin: "zhuān lì", example: "申请专", exampleEn: "Patent" },
    { zh: "商标", en: "trademark", pinyin: "shāng biāo", example: "注册商标", exampleEn: "Trademark" },
    { zh: "竞争力", en: "competitiveness", pinyin: "jìng zhēng lì", example: "竞争", exampleEn: "Compete" },
    { zh: "资源配置", en: "allocation", pinyin: "zī yuán pèi zhì", example: "配置", exampleEn: "Allocate" },
    { zh: "效率", en: "efficiency", pinyin: "xiào lǜ", example: "提效", exampleEn: "Efficiency" },
    { zh: "公平", en: "equity", pinyin: "gōng píng", example: "公平", exampleEn: "Equity" },
    { zh: "贫富差距", en: "inequality", pinyin: "pín fù chā jù", example: "差距", exampleEn: "Gap" },
    { zh: "社会保障", en: "social security", pinyin: "shè huì bǎo zhàng", example: "社保", exampleEn: "Social sec" },
    { zh: "养老保险", en: "pension", pinyin: "yǎng lǎo bǎo xiǎn", example: "养老", exampleEn: "Pension" },
    { zh: "医疗保险", en: "health insurance", pinyin: "yī liáo bǎo xiǎn", example: "医保", exampleEn: "Health ins" },
    { zh: "失业保险", en: "unemployment ins", pinyin: "shī yè bǎo xiǎn", example: "失业", exampleEn: "Unemp ins" },
    { zh: "最低生活保障", en: "minimum living", pinyin: "zuì dī shēng huó bǎo zhàng", example: "低保", exampleEn: "Min living" },
    { zh: "扶贫", en: "poverty relief", pinyin: "fú pín", example: "脱贫", exampleEn: "Poverty relief" },
    { zh: "乡村振兴", en: "rural revitalize", pinyin: "xiāng cūn zhèn xīng", example: "振乡", exampleEn: "Revitalize" },
    { zh: "土地流转", en: "land transfer", pinyin: "tǔ dì liú zhuǎn", example: "流转", exampleEn: "Land transfer" },
    { zh: "新型城镇化", en: "new urbanization", pinyin: "xīn xíng chéng zhèn huà", example: "城镇化", exampleEn: "Urbanize" },
    { zh: "一带一路", en: "Belt and Road", pinyin: "yí dài yí lù", example: "一带", exampleEn: "Belt Road" },
    { zh: "经济全球化", en: "economic global", pinyin: "jīng jì quán qiú huà", example: "全球化", exampleEn: "Globalization" },
    { zh: "区域一体化", en: "regional integ", pinyin: "qū yù yì tǐ huà", example: "一体化", exampleEn: "Integration" },
    { zh: "欧盟", en: "EU", pinyin: "ōu méng", example: "欧盟", exampleEn: "European Union" },
    { zh: "东盟", en: "ASEAN", pinyin: "dōng méng", example: "东盟", exampleEn: "ASEAN" },
    { zh: "世贸组织", en: "WTO", pinyin: "shì mào zǔ zhī", example: "入世", exampleEn: "Join WTO" },
    { zh: "货币基金组织", en: "IMF", pinyin: "huò bì jī jīn zǔ zhī", example: "货币", exampleEn: "IMF" },
    { zh: "世界银行", en: "World Bank", pinyin: "shì jiè yín háng", example: "世行", exampleEn: "World Bank" },
    { zh: "布雷顿森林", en: "Bretton Woods", pinyin: "bù léi dùn sēn lín", example: "布雷", exampleEn: "Bretton" },
    { zh: "美元霸权", en: "dollar hegemony", pinyin: "měi yuán bà quán", example: "美元", exampleEn: "Dollar" },
    { zh: "石油危机", en: "oil crisis", pinyin: "shí yóu wēi jī", example: "油危", exampleEn: "Oil crisis" },
    { zh: "金融危机", en: "financial crisis", pinyin: "jīn róng wēi jī", example: "金危", exampleEn: "Fin crisis" },
    { zh: "次贷危机", en: "subprime crisis", pinyin: "cì dài wēi jī", example: "次贷", exampleEn: "Subprime" },
    { zh: "量化宽松", en: "quantitative easing", pinyin: "liáng huà kuān sōng", example: "量宽", exampleEn: "QE" },
    { zh: "存款准备金", en: "reserve ratio", pinyin: "cún kuǎn zhǔn bèi jīn", example: "准率", exampleEn: "Reserve ratio" },
    { zh: "公开市场", en: "open market", pinyin: "gōng kāi shì chǎng", example: "公开", exampleEn: "Open market" },
    { zh: "宏观调控", en: "macro-control", pinyin: "hóng guān tiáo kòng", example: "调控", exampleEn: "Macro-control" },
    { zh: "看不见的手", en: "invisible hand", pinyin: "kàn bú jiàn de shǒu", example: "无形", exampleEn: "Invisible hand" },
    { zh: "凯恩斯主义", en: "Keynesianism", pinyin: "kǎi ēn sī zhǔ yì", example: "凯恩", exampleEn: "Keynesian" },
    { zh: "自由放任", en: "laissez-faire", pinyin: "zì yóu fàng rèn", example: "放任", exampleEn: "Laissez-faire" },
    { zh: "新自由主义", en: "neoliberalism", pinyin: "xīn zì yóu zhǔ yì", example: "新自", exampleEn: "Neoliberal" },
    { zh: "双循环", en: "dual circulation", pinyin: "shuāng xún huán", example: "双循", exampleEn: "Dual circ" },
    { zh: "内需", en: "domestic demand", pinyin: "nèi xū", example: "扩内需", exampleEn: "Domestic dem" },
    { zh: "外需", en: "external demand", pinyin: "wài xū", example: "外需", exampleEn: "External dem" },
    { zh: "出口导向", en: "export-led", pinyin: "chū kǒu dǎo xiàng", example: "出口", exampleEn: "Export-led" },
    { zh: "进口替代", en: "import substit", pinyin: "jìn kǒu tì dài", example: "进口", exampleEn: "Import sub" },
    { zh: "外商直接投资", en: "FDI", pinyin: "wài shāng zhí jiē tóu zī", example: "引资", exampleEn: "FDI" },
    { zh: "国际分工", en: "intl division", pinyin: "guó jì fēn gōng", example: "分工", exampleEn: "Division" },
    { zh: "产业链", en: "industry chain", pinyin: "chǎn yè liàn", example: "产业", exampleEn: "Industry chain" },
    { zh: "供应链", en: "supply chain", pinyin: "gōng yìng liàn", example: "供链", exampleEn: "Supply chain" },
    { zh: "价值链", en: "value chain", pinyin: "jià zhí liàn", example: "价链", exampleEn: "Value chain" },
    { zh: "数字经济", en: "digital economy", pinyin: "shù zì jīng jì", example: "数字", exampleEn: "Digital" },
    { zh: "平台经济", en: "platform economy", pinyin: "píng tái jīng jì", example: "平台", exampleEn: "Platform" },
    { zh: "共享经济", en: "sharing economy", pinyin: "gòng xiǎng jīng jì", example: "共享", exampleEn: "Sharing" },
    { zh: "绿色金融", en: "green finance", pinyin: "lǜ sè jīn róng", example: "绿色", exampleEn: "Green fin" },
    { zh: "碳达峰", en: "carbon peak", pinyin: "tàn dá fēng", example: "达峰", exampleEn: "Carbon peak" },
    { zh: "碳中和", en: "carbon neutral", pinyin: "tàn zhōng hé", example: "中和", exampleEn: "Carbon neutral" },
    { zh: "可持续发展", en: "sustainable dev", pinyin: "kě chí xù fā zhǎn", example: "可持", exampleEn: "Sustainable" },
    { zh: "外资利用", en: "foreign capital", pinyin: "wài zī lì yòng", example: "引外", exampleEn: "Use foreign" },
    { zh: "营商环境", en: "business env", pinyin: "yíng shāng huán jìng", example: "营商", exampleEn: "Biz env" },
    { zh: "工业革命", en: "industrial revolution", pinyin: "gōng yè gé mìng", example: "工业革", exampleEn: "Industrial rev" },
    { zh: "启蒙运动", en: "Enlightenment", pinyin: "qǐ méng yùn dòng", example: "启蒙", exampleEn: "Enlightenment" },
    { zh: "文艺复兴", en: "Renaissance", pinyin: "wén yì fù xīng", example: "文艺复", exampleEn: "Renaissance" },
    { zh: "宗教改革", en: "Reformation", pinyin: "zōng jiào gǎi gé", example: "宗教改", exampleEn: "Reformation" },
    { zh: "法国大革命", en: "French Rev", pinyin: "fǎ guó dà gé mìng", example: "法国大", exampleEn: "French Rev" },
    { zh: "美国独立", en: "US indep", pinyin: "měi guó dú lì", example: "独立", exampleEn: "Independence" },
    { zh: "光荣革命", en: "Glorious Rev", pinyin: "guāng róng gé mìng", example: "光荣", exampleEn: "Glorious" },
    { zh: "君主立宪", en: "constitutional monarch", pinyin: "jūn zhǔ lì xiàn", example: "君主立", exampleEn: "Constitutional" },
    { zh: "资产阶级革命", en: "bourgeois rev", pinyin: "zī chǎn jiē jí gé mìng", example: "资产革", exampleEn: "Bourgeois rev" },
    { zh: "资本主义", en: "capitalism", pinyin: "zī běn zhǔ yì", example: "资本", exampleEn: "Capitalism" },
    { zh: "社会主义", en: "socialism", pinyin: "shè huì zhǔ yì", example: "社会", exampleEn: "Socialism" },
    { zh: "共产主义", en: "communism", pinyin: "gòng chǎn zhǔ yì", example: "共产", exampleEn: "Communism" },
    { zh: "马克思主义", en: "Marxism", pinyin: "mǎ kè sī zhǔ yì", example: "马克", exampleEn: "Marxism" },
    { zh: "十月革命", en: "Oct Revolution", pinyin: "shí yuè gé mìng", example: "十月", exampleEn: "Oct Rev" },
    { zh: "第一次世界大战", en: "WWI", pinyin: "dì yī cì shì jiè dà zhàn", example: "一战", exampleEn: "WWI" },
    { zh: "第二次世界大战", en: "WWII", pinyin: "dì èr cì shì jiè dà zhàn", example: "二战", exampleEn: "WWII" },
    { zh: "冷战", en: "Cold War", pinyin: "lěng zhàn", example: "冷战", exampleEn: "Cold War" },
    { zh: "殖民主义", en: "colonialism", pinyin: "zhí mín zhǔ yì", example: "殖民", exampleEn: "Colonialism" },
    { zh: "殖民扩张", en: "colonial expansion", pinyin: "zhí mín kuò zhāng", example: "扩张", exampleEn: "Expansion" },
    { zh: "民族解放", en: "national liberation", pinyin: "mín zú jiě fàng", example: "解放", exampleEn: "Liberation" },
    { zh: "民族主义", en: "nationalism", pinyin: "mín zú zhǔ yì", example: "民族", exampleEn: "Nationalism" },
    { zh: "民族国家", en: "nation-state", pinyin: "mín zú guó jiā", example: "民族国", exampleEn: "Nation-state" },
    { zh: "帝国主义", en: "imperialism", pinyin: "dì guó zhǔ yì", example: "帝国", exampleEn: "Imperialism" },
    { zh: "法西斯主义", en: "fascism", pinyin: "fǎ xī sī zhǔ yì", example: "法西", exampleEn: "Fascism" },
    { zh: "军国主义", en: "militarism", pinyin: "jūn guó zhǔ yì", example: "军国", exampleEn: "Militarism" },
    { zh: "抗日战争", en: "War of Resistance", pinyin: "kàng rì zhàn zhēng", example: "抗战", exampleEn: "Resistance" },
    { zh: "解放战争", en: "Liberation War", pinyin: "jiě fàng zhàn zhēng", example: "解放", exampleEn: "Liberation" },
    { zh: "新中国成立", en: "founding PRC", pinyin: "xīn zhōng guó chéng lì", example: "建国", exampleEn: "Founding" },
    { zh: "改革开放", en: "reform open", pinyin: "gǎi gé kāi fàng", example: "改革", exampleEn: "Reform open" },
    { zh: "丝绸之路", en: "Silk Road", pinyin: "sī chóu zhī lù", example: "丝绸", exampleEn: "Silk Road" },
    { zh: "张骞出使", en: "Zhang Qian", pinyin: "zhāng qiān chū shǐ", example: "出使", exampleEn: "Zhang Qian" },
    { zh: "郑和下西洋", en: "Zheng He", pinyin: "zhèng hé xià xī yáng", example: "下西", exampleEn: "Zheng He" },
    { zh: "洋务运动", en: "Self-Strengthening", pinyin: "yáng wù yùn dòng", example: "洋务", exampleEn: "Self-Strength" },
    { zh: "戊戌变法", en: "Hundred Days", pinyin: "wù xū biàn fǎ", example: "戊戌", exampleEn: "Reform 1898" },
    { zh: "辛亥革命", en: "Xinhai Rev", pinyin: "xīn hài gé mìng", example: "辛亥", exampleEn: "Xinhai" },
    { zh: "新文化运动", en: "New Culture", pinyin: "xīn wén huà yùn dòng", example: "新文", exampleEn: "New Culture" },
    { zh: "五四运动", en: "May Fourth", pinyin: "wǔ sì yùn dòng", example: "五四", exampleEn: "May Fourth" },
    { zh: "中共成立", en: "CCP founded", pinyin: "zhōng gòng chéng lì", example: "建党", exampleEn: "CCP founded" },
    { zh: "长征", en: "Long March", pinyin: "cháng zhēng", example: "长征", exampleEn: "Long March" },
    { zh: "文化大革命", en: "Cultural Rev", pinyin: "wén huà dà gé mìng", example: "文革", exampleEn: "Cultural Rev" },
    { zh: "大跃进", en: "Great Leap", pinyin: "dà yuè jìn", example: "跃进", exampleEn: "Great Leap" },
    { zh: "家庭联产", en: "household contract", pinyin: "jiā tíng lián chǎn", example: "包产", exampleEn: "Contract" },
    { zh: "经济特区", en: "SEZ", pinyin: "jīng jì tè qū", example: "特区", exampleEn: "SEZ" },
    { zh: "一国两制", en: "one country two sys", pinyin: "yì guó liǎng zhì", example: "一国", exampleEn: "One country" },
    { zh: "九二共识", en: "1992 Consensus", pinyin: "jiǔ èr gòng shí", example: "九二", exampleEn: "1992 Consensus" },
    { zh: "贞观之治", en: "Zhenguan", pinyin: "zhēn guān zhī zhì", example: "贞观", exampleEn: "Zhenguan" },
    { zh: "开元盛世", en: "Kaiyuan", pinyin: "kāi yuán shèng shì", example: "开元", exampleEn: "Kaiyuan" },
    { zh: "闭关锁国", en: "isolation", pinyin: "bì guān suǒ guó", example: "闭关", exampleEn: "Isolation" },
    { zh: "鸦片战争", en: "Opium War", pinyin: "yā piàn zhàn zhēng", example: "鸦片", exampleEn: "Opium War" },
    { zh: "南京条约", en: "Nanjing Treaty", pinyin: "nán jīng tiáo yuē", example: "南京", exampleEn: "Nanjing Treaty" },
    { zh: "辛丑条约", en: "Boxer Protocol", pinyin: "xīn chǒu tiáo yuē", example: "辛丑", exampleEn: "Boxer Protocol" },
    { zh: "马关条约", en: "Shimonoseki", pinyin: "mǎ guān tiáo yuē", example: "马关", exampleEn: "Shimonoseki" },
    { zh: "中体西用", en: "Chinese essence", pinyin: "zhōng tǐ xī yòng", example: "中体", exampleEn: "Essence" },
    { zh: "师夷长技", en: "learn from West", pinyin: "shī yí cháng jì", example: "师夷", exampleEn: "Learn West" },
    { zh: "救亡图存", en: "save the nation", pinyin: "jiù wáng tú cún", example: "救亡", exampleEn: "Save nation" },
    { zh: "维新变法", en: "reform movement", pinyin: "wéi xīn biàn fǎ", example: "维新", exampleEn: "Reform mov" },
    { zh: "民主共和", en: "republicanism", pinyin: "mín zhǔ gòng hé", example: "共和", exampleEn: "Republican" },
    { zh: "三民主义", en: "Three Principles", pinyin: "sān mín zhǔ yì", example: "三民", exampleEn: "Three Principles" },
    { zh: "农村包围城市", en: "rural surround", pinyin: "nóng cūn bāo wéi chéng shì", example: "农村", exampleEn: "Rural surr" },
    { zh: "土地革命", en: "land revolution", pinyin: "tǔ dì gé mìng", example: "土改", exampleEn: "Land rev" },
    { zh: "土地改革", en: "land reform", pinyin: "tǔ dì gǎi gé", example: "土改", exampleEn: "Land reform" },
    { zh: "三大改造", en: "three reforms", pinyin: "sān dà gǎi zào", example: "改造", exampleEn: "Three reforms" },
    { zh: "一五计划", en: "First Five-Year", pinyin: "yī wǔ jì huà", example: "一五", exampleEn: "First plan" },
    { zh: "人民公社", en: "people's commune", pinyin: "rén mín gōng shè", example: "公社", exampleEn: "Commune" },
    { zh: "十一届三中全会", en: "Third Plenum", pinyin: "shí yī jiè sān zhōng quán huì", example: "三中", exampleEn: "Third Plenum" },
    { zh: "市场经济体制", en: "market system", pinyin: "shì chǎng jīng jì tǐ zhì", example: "体制", exampleEn: "Market system" },
    { zh: "加入世贸", en: "WTO entry", pinyin: "jiā rù shì mào", example: "入世", exampleEn: "WTO entry" },
    { zh: "全面深化改革", en: "deepen reform", pinyin: "quán miàn shēn huà gǎi gé", example: "深改", exampleEn: "Deepen reform" },
    { zh: "伟大复兴", en: "great rejuvenation", pinyin: "wěi dà fù xīng", example: "复兴", exampleEn: "Rejuvenation" },
    { zh: "中国梦", en: "Chinese Dream", pinyin: "zhōng guó mèng", example: "梦中", exampleEn: "Chinese Dream" },
    { zh: "脱贫攻坚", en: "poverty conquer", pinyin: "tuō pín gōng jiān", example: "脱贫", exampleEn: "Conquer poverty" },
    { zh: "小康社会", en: "moderately prosperous", pinyin: "xiǎo kāng shè huì", example: "小康", exampleEn: "Mod prosperous" },
    { zh: "生态文明", en: "eco civilization", pinyin: "shēng tài wén míng", example: "生态", exampleEn: "Eco civ" },
    { zh: "明治维新", en: "Meiji Restor", pinyin: "míng zhì wéi xīn", example: "明治", exampleEn: "Meiji" },
    { zh: "农奴制改革", en: "serfdom reform", pinyin: "nóng nú zhì gǎi gé", example: "农改", exampleEn: "Serf reform" },
    { zh: "美国内战", en: "US Civil War", pinyin: "měi guó nèi zhàn", example: "内战", exampleEn: "Civil War" },
    { zh: "罗斯福新政", en: "New Deal", pinyin: "luó sī fú xīn zhèng", example: "新政", exampleEn: "New Deal" },
    { zh: "新经济政策", en: "NEP", pinyin: "xīn jīng jì zhèng cè", example: "新经", exampleEn: "NEP" },
    { zh: "斯大林模式", en: "Stalin model", pinyin: "sī dà lín mó shì", example: "斯大", exampleEn: "Stalin model" },
    { zh: "苏联解体", en: "USSR collapse", pinyin: "sū lián jiě tǐ", example: "解体", exampleEn: "Collapse" },
    { zh: "东欧剧变", en: "East Europe", pinyin: "dōng ōu jù biàn", example: "剧变", exampleEn: "East Eur" },
    { zh: "柏林墙", en: "Berlin Wall", pinyin: "bó lín qiáng", example: "柏林", exampleEn: "Berlin Wall" },
    { zh: "两德统一", en: "reunification", pinyin: "liǎng dé tǒng yī", example: "统一", exampleEn: "Reunification" },
    { zh: "欧元", en: "euro", pinyin: "ōu yuán", example: "欧元", exampleEn: "Euro" },
    { zh: "联合国", en: "UN", pinyin: "lián hé guó", example: "联大", exampleEn: "UN" },
    { zh: "北约", en: "NATO", pinyin: "běi yuē", example: "北约", exampleEn: "NATO" },
    { zh: "不结盟", en: "non-aligned", pinyin: "bù jié méng", example: "不结", exampleEn: "Non-aligned" },
    { zh: "万隆会议", en: "Bandung", pinyin: "wàn lóng huì yì", example: "万隆", exampleEn: "Bandung" },
    { zh: "第三世界", en: "Third World", pinyin: "dì sān shì jiè", example: "第三", exampleEn: "Third World" },
    { zh: "和平共处", en: "peaceful coexist", pinyin: "hé píng gòng chǔ", example: "共处", exampleEn: "Coexist" },
    { zh: "霸权主义", en: "hegemonism", pinyin: "bà quán zhǔ yì", example: "霸权", exampleEn: "Hegemonism" },
    { zh: "辩证法", en: "dialectics", pinyin: "biàn zhèng fǎ", example: "辩证", exampleEn: "Dialectics" },
    { zh: "形而上学", en: "metaphysics", pinyin: "xíng ér shàng xué", example: "形而", exampleEn: "Metaphysics" },
    { zh: "唯心主义", en: "idealism", pinyin: "wéi xīn zhǔ yì", example: "唯心", exampleEn: "Idealism" },
    { zh: "唯物主义", en: "materialism", pinyin: "wéi wù zhǔ yì", example: "唯物", exampleEn: "Materialism" },
    { zh: "辩证唯物", en: "dialectical material", pinyin: "biàn zhèng wéi wù", example: "辩唯", exampleEn: "Dial material" },
    { zh: "历史唯物", en: "historical material", pinyin: "lì shǐ wéi wù", example: "历唯", exampleEn: "Hist material" },
    { zh: "矛盾", en: "contradiction", pinyin: "máo dùn", example: "矛盾", exampleEn: "Contradiction" },
    { zh: "对立统一", en: "unity of opposites", pinyin: "duì lì tǒng yī", example: "对立", exampleEn: "Unity opp" },
    { zh: "量变", en: "quantitative change", pinyin: "liàng biàn", example: "量变", exampleEn: "Quant change" },
    { zh: "质变", en: "qualitative change", pinyin: "zhì biàn", example: "质变", exampleEn: "Qual change" },
    { zh: "否定之否定", en: "negation of negation", pinyin: "fǒu dìng zhī fǒu dìng", example: "否定", exampleEn: "Negation" },
    { zh: "实践", en: "practice", pinyin: "shí jiàn", example: "实践", exampleEn: "Practice" },
    { zh: "认识", en: "cognition", pinyin: "rèn shi", example: "认识", exampleEn: "Cognition" },
    { zh: "感性认识", en: "perceptual know", pinyin: "gǎn xìng rèn shi", example: "感性", exampleEn: "Perceptual" },
    { zh: "理性认识", en: "rational know", pinyin: "lǐ xìng rèn shi", example: "理性", exampleEn: "Rational" },
    { zh: "真理", en: "truth", pinyin: "zhēn lǐ", example: "真理", exampleEn: "Truth" },
    { zh: "价值", en: "value", pinyin: "jià zhí", example: "价值", exampleEn: "Value" },
    { zh: "主观能动性", en: "subjectivity", pinyin: "zhǔ guān néng dòng xìng", example: "主观", exampleEn: "Subjectivity" },
    { zh: "客观规律", en: "objective law", pinyin: "kè guān guī lǜ", example: "规律", exampleEn: "Objective law" },
    { zh: "联系", en: "connection", pinyin: "lián xì", example: "联系", exampleEn: "Connection" },
    { zh: "发展", en: "development", pinyin: "fā zhǎn", example: "发展", exampleEn: "Development" },
    { zh: "全面", en: "comprehensive", pinyin: "quán miàn", example: "全面", exampleEn: "Comprehensive" },
    { zh: "中庸", en: "golden mean", pinyin: "zhōng yōng", example: "中庸", exampleEn: "Golden mean" },
    { zh: "儒家", en: "Confucianism", pinyin: "rú jiā", example: "儒家", exampleEn: "Confucianism" },
    { zh: "道家", en: "Taoism", pinyin: "dào jiā", example: "道家", exampleEn: "Taoism" },
    { zh: "佛教", en: "Buddhism", pinyin: "fó jiào", example: "佛教", exampleEn: "Buddhism" },
    { zh: "法家", en: "Legalism", pinyin: "fǎ jiā", example: "法家", exampleEn: "Legalism" },
    { zh: "墨家", en: "Mohism", pinyin: "mò jiā", example: "墨家", exampleEn: "Mohism" },
    { zh: "孔子", en: "Confucius", pinyin: "kǒng zǐ", example: "孔子", exampleEn: "Confucius" },
    { zh: "孟子", en: "Mencius", pinyin: "mèng zǐ", example: "孟子", exampleEn: "Mencius" },
    { zh: "荀子", en: "Xunzi", pinyin: "xún zǐ", example: "荀子", exampleEn: "Xunzi" },
    { zh: "老子", en: "Laozi", pinyin: "lǎo zǐ", example: "老子", exampleEn: "Laozi" },
    { zh: "庄子", en: "Zhuangzi", pinyin: "zhuāng zǐ", example: "庄子", exampleEn: "Zhuangzi" },
    { zh: "韩非子", en: "Hanfeizi", pinyin: "hán fēi zǐ", example: "韩非", exampleEn: "Hanfeizi" },
    { zh: "朱熹", en: "Zhu Xi", pinyin: "zhū xī", example: "朱熹", exampleEn: "Zhu Xi" },
    { zh: "王阳明", en: "Wang Yangming", pinyin: "wáng yáng míng", example: "阳明", exampleEn: "Wang Yangming" },
    { zh: "心学", en: "mind school", pinyin: "xīn xué", example: "心学", exampleEn: "Mind school" },
    { zh: "理学", en: "neo-Confucian", pinyin: "lǐ xué", example: "理学", exampleEn: "Neo-Conf" },
    { zh: "天人合一", en: "unity of heaven", pinyin: "tiān rén hé yī", example: "合一", exampleEn: "Heaven-human" },
    { zh: "格物致知", en: "investigate things", pinyin: "gé wù zhì zhī", example: "格物", exampleEn: "Investigate" },
    { zh: "知行合一", en: "unity know act", pinyin: "zhī xíng hé yī", example: "知行", exampleEn: "Know-act" },
    { zh: "仁义礼智信", en: "virtues", pinyin: "rén yì lǐ zhì xìn", example: "仁义", exampleEn: "Virtues" },
    { zh: "三纲五常", en: "three bonds", pinyin: "sān gāng wǔ cháng", example: "纲常", exampleEn: "Bonds" },
    { zh: "无为而治", en: "govern by non-action", pinyin: "wú wéi ér zhì", example: "无为", exampleEn: "Non-action" },
    { zh: "兼爱非攻", en: "universal love", pinyin: "jiān ài fēi gōng", example: "兼爱", exampleEn: "Universal love" },
    { zh: "民贵君轻", en: "people first", pinyin: "mín guì jūn qīng", example: "民贵", exampleEn: "People first" },
    { zh: "法治哲学", en: "rule of law phil", pinyin: "fǎ zhì zhé xué", example: "法治", exampleEn: "Rule of law" },
    { zh: "德治", en: "rule by virtue", pinyin: "dé zhì", example: "德治", exampleEn: "Rule by virtue" },
    { zh: "礼治", en: "rule by ritual", pinyin: "lǐ zhì", example: "礼治", exampleEn: "Ritual rule" },
    { zh: "存在主义", en: "existentialism", pinyin: "cún zài zhǔ yì", example: "存在", exampleEn: "Existentialism" },
    { zh: "实用主义", en: "pragmatism", pinyin: "shí yòng zhǔ yì", example: "实用", exampleEn: "Pragmatism" },
    { zh: "功利主义", en: "utilitarianism", pinyin: "gōng lì zhǔ yì", example: "功利", exampleEn: "Utilitarianism" },
    { zh: "自由主义", en: "liberalism", pinyin: "zì yóu zhǔ yì", example: "自由", exampleEn: "Liberalism" },
    { zh: "理性主义", en: "rationalism", pinyin: "lǐ xìng zhǔ yì", example: "理性", exampleEn: "Rationalism" },
    { zh: "经验主义", en: "empiricism", pinyin: "jīng yàn zhǔ yì", example: "经验", exampleEn: "Empiricism" },
    { zh: "不可知论", en: "agnosticism", pinyin: "bù kě zhī lùn", example: "不可", exampleEn: "Agnosticism" },
    { zh: "相对主义", en: "relativism", pinyin: "xiāng duì zhǔ yì", example: "相对", exampleEn: "Relativism" },
    { zh: "绝对精神", en: "absolute spirit", pinyin: "jué duì jīng shén", example: "绝对", exampleEn: "Absolute" },
    { zh: "异化", en: "alienation", pinyin: "yì huà", example: "异化", exampleEn: "Alienation" },
    { zh: "意识形态", en: "ideology", pinyin: "yì shí xíng tài", example: "意识", exampleEn: "Ideology" },
    { zh: "上层建筑", en: "superstructure", pinyin: "shàng céng jiàn zhù", example: "上层", exampleEn: "Superstructure" },
    { zh: "经济基础", en: "economic base", pinyin: "jīng jì jī chǔ", example: "基础", exampleEn: "Economic base" },
    { zh: "生产力", en: "productive forces", pinyin: "shēng chǎn lì", example: "生产", exampleEn: "Productive" },
    { zh: "生产关系", en: "relations of prod", pinyin: "shēng chǎn guān xì", example: "生产关", exampleEn: "Relations" },
    { zh: "社会存在", en: "social being", pinyin: "shè huì cún zài", example: "存在", exampleEn: "Social being" },
    { zh: "社会意识", en: "social consciousness", pinyin: "shè huì yì shí", example: "意识", exampleEn: "Social consc" },
    { zh: "必然", en: "necessity", pinyin: "bì rán", example: "必然", exampleEn: "Necessity" },
    { zh: "自由意志", en: "free will", pinyin: "zì yóu yì zhì", example: "自由", exampleEn: "Free will" },
    { zh: "正义", en: "justice", pinyin: "zhèng yì", example: "正义", exampleEn: "Justice" },
    { zh: "良知", en: "conscience", pinyin: "liáng zhī", example: "良知", exampleEn: "Conscience" },
    { zh: "文化自信", en: "cultural confidence", pinyin: "wén huà zì xìn", example: "自信", exampleEn: "Confidence" },
    { zh: "文化自觉", en: "cultural awareness", pinyin: "wén huà zì jué", example: "自觉", exampleEn: "Awareness" },
    { zh: "西学东渐", en: "West learning east", pinyin: "xī xué dōng jiàn", example: "西学", exampleEn: "West east" },
    { zh: "民主", en: "democracy", pinyin: "mín zhǔ", example: "民主", exampleEn: "Democracy" },
    { zh: "法治", en: "rule of law", pinyin: "fǎ zhì", example: "法治", exampleEn: "Rule of law" },
    { zh: "人权", en: "human rights", pinyin: "rén quán", example: "人权", exampleEn: "Human rights" },
    { zh: "主权", en: "sovereignty", pinyin: "zhǔ quán", example: "主权", exampleEn: "Sovereignty" },
    { zh: "国家", en: "state", pinyin: "guó jiā", example: "国家", exampleEn: "State" },
    { zh: "政府", en: "government", pinyin: "zhèng fǔ", example: "政府", exampleEn: "Government" },
    { zh: "立法", en: "legislation", pinyin: "lì fǎ", example: "立法", exampleEn: "Legislation" },
    { zh: "行政", en: "executive", pinyin: "xíng zhèng", example: "行政", exampleEn: "Executive" },
    { zh: "司法", en: "judiciary", pinyin: "sī fǎ", example: "司法", exampleEn: "Judiciary" },
    { zh: "三权分立", en: "separation of powers", pinyin: "sān quán fēn lì", example: "分权", exampleEn: "Separ powers" },
    { zh: "制衡", en: "checks balances", pinyin: "zhì héng", example: "制衡", exampleEn: "Checks" },
    { zh: "宪法", en: "constitution", pinyin: "xiàn fǎ", example: "宪法定", exampleEn: "Constitution" },
    { zh: "公民", en: "citizen", pinyin: "gōng mín", example: "公民权", exampleEn: "Citizen" },
    { zh: "权利", en: "right", pinyin: "quán lì", example: "享权利", exampleEn: "Rights" },
    { zh: "义务", en: "duty", pinyin: "yì wù", example: "尽义务", exampleEn: "Duties" },
    { zh: "选举", en: "election", pinyin: "xuǎn jǔ", example: "选举行", exampleEn: "Election" },
    { zh: "议会", en: "parliament", pinyin: "yì huì", example: "议会议", exampleEn: "Parliament" },
    { zh: "多党制", en: "multi-party", pinyin: "duō dǎng zhì", example: "多党", exampleEn: "Multi-party" },
    { zh: "两党制", en: "two-party", pinyin: "liǎng dǎng zhì", example: "两党", exampleEn: "Two-party" },
    { zh: "人大制度", en: "people's congress", pinyin: "rén dà zhì dù", example: "人大", exampleEn: "Congress" },
    { zh: "政协", en: "CPPCC", pinyin: "zhèng xié", example: "政协", exampleEn: "CPPCC" },
    { zh: "区域自治", en: "autonomy", pinyin: "qū yù zì zhì", example: "自治", exampleEn: "Autonomy" },
    { zh: "基层自治", en: "grassroots autonomy", pinyin: "jī céng zì zhì", example: "基层", exampleEn: "Grassroots" },
    { zh: "人民民主", en: "people's democracy", pinyin: "rén mín mín zhǔ", example: "民主专", exampleEn: "People's dem" },
    { zh: "依法治国", en: "rule by law", pinyin: "yī fǎ zhì guó", example: "依法", exampleEn: "By law" },
    { zh: "以德治国", en: "rule by virtue", pinyin: "yǐ dé zhì guó", example: "以德", exampleEn: "By virtue" },
    { zh: "治理", en: "governance", pinyin: "zhì lǐ", example: "治理", exampleEn: "Governance" },
    { zh: "善治", en: "good governance", pinyin: "shàn zhì", example: "善治", exampleEn: "Good gov" },
    { zh: "政治参与", en: "political partic", pinyin: "zhèng zhì cān yù", example: "参与", exampleEn: "Participation" },
    { zh: "政治文化", en: "political culture", pinyin: "zhèng zhì wén huà", example: "文化", exampleEn: "Culture" },
    { zh: "政治改革", en: "political reform", pinyin: "zhèng zhì gǎi gé", example: "改革", exampleEn: "Reform" },
    { zh: "政治体制", en: "political system", pinyin: "zhèng zhì tǐ zhì", example: "体制", exampleEn: "System" },
    { zh: "合法性", en: "legitimacy", pinyin: "hé fǎ xìng", example: "合法", exampleEn: "Legitimacy" },
    { zh: "政治权力", en: "political power", pinyin: "zhèng zhì quán lì", example: "权力", exampleEn: "Power" },
    { zh: "政治秩序", en: "political order", pinyin: "zhèng zhì zhì xù", example: "秩序", exampleEn: "Order" },
    { zh: "民主化", en: "democratization", pinyin: "mín zhǔ huà", example: "民主", exampleEn: "Democratize" },
    { zh: "威权主义", en: "authoritarianism", pinyin: "wēi quán zhǔ yì", example: "威权", exampleEn: "Authoritarian" },
    { zh: "极权主义", en: "totalitarianism", pinyin: "jí quán zhǔ yì", example: "极权", exampleEn: "Totalitarian" },
    { zh: "政治极化", en: "polarization", pinyin: "zhèng zhì jí huà", example: "极化", exampleEn: "Polarization" },
    { zh: "民粹主义", en: "populism", pinyin: "mín cuì zhǔ yì", example: "民粹", exampleEn: "Populism" },
    { zh: "爱国主义", en: "patriotism", pinyin: "ài guó zhǔ yì", example: "爱国", exampleEn: "Patriotism" },
    { zh: "国际政治", en: "intl politics", pinyin: "guó jì zhèng zhì", example: "国际", exampleEn: "Intl politics" },
    { zh: "地缘政治", en: "geopolitics", pinyin: "dì yuán zhèng zhì", example: "地缘", exampleEn: "Geopolitics" },
    { zh: "多边主义", en: "multilateralism", pinyin: "duō biān zhǔ yì", example: "多边", exampleEn: "Multilateral" },
    { zh: "单边主义", en: "unilateralism", pinyin: "dān biān zhǔ yì", example: "单边", exampleEn: "Unilateral" },
    { zh: "国际组织", en: "intl org", pinyin: "guó jì zǔ zhī", example: "组织", exampleEn: "Org" },
    { zh: "不干涉", en: "non-interference", pinyin: "bù gān shè", example: "不干", exampleEn: "Non-interfere" },
    { zh: "人类命运共同体", en: "community of fate", pinyin: "rén lèi mìng yùn gòng tóng tǐ", example: "命运", exampleEn: "Community" },
    { zh: "全球治理", en: "global governance", pinyin: "quán qiú zhì lǐ", example: "治理", exampleEn: "Global gov" },
    { zh: "国家安全", en: "national security", pinyin: "guó jiā ān quán", example: "安全", exampleEn: "Security" },
    { zh: "领土完整", en: "territorial integ", pinyin: "lǐng tǔ wán zhěng", example: "领土", exampleEn: "Territory" },
    { zh: "国家统一", en: "national unity", pinyin: "guó jiā tǒng yī", example: "统一", exampleEn: "Unity" },
    { zh: "国防", en: "national defense", pinyin: "guó fáng", example: "国防", exampleEn: "Defense" },
    { zh: "外交", en: "diplomacy", pinyin: "wài jiāo", example: "外交", exampleEn: "Diplomacy" },
    { zh: "独立自主", en: "independence", pinyin: "dú lì zì zhǔ", example: "独立", exampleEn: "Independence" },
    { zh: "求同存异", en: "seek common", pinyin: "qiú tóng cún yì", example: "求同", exampleEn: "Seek common" },
    { zh: "韬光养晦", en: "hide strengths", pinyin: "tāo guāng yǎng huì", example: "韬光", exampleEn: "Hide strengths" },
    { zh: "和平崛起", en: "peaceful rise", pinyin: "hé píng jué qǐ", example: "崛起", exampleEn: "Peaceful rise" },
    { zh: "大国关系", en: "major power rel", pinyin: "dà guó guān xì", example: "大国", exampleEn: "Major power" },
    { zh: "周边外交", en: "peripheral dipl", pinyin: "zhōu biān wài jiāo", example: "周边", exampleEn: "Peripheral" },
    { zh: "发展中国家", en: "developing country", pinyin: "fā zhǎn zhōng guó jiā", example: "发展", exampleEn: "Developing" },
    { zh: "南南合作", en: "South-South", pinyin: "nán nán hé zuò", example: "南南", exampleEn: "South-South" },
    { zh: "南北对话", en: "North-South", pinyin: "nán běi duì huà", example: "南北", exampleEn: "North-South" },
    { zh: "软实力", en: "soft power", pinyin: "ruǎn shí lì", example: "软实", exampleEn: "Soft power" },
    { zh: "硬实力", en: "hard power", pinyin: "yìng shí lì", example: "硬实", exampleEn: "Hard power" },
    { zh: "综合国力", en: "comprehensive power", pinyin: "zōng hé guó lì", example: "国力", exampleEn: "Power" },
    { zh: "政治安全", en: "political security", pinyin: "zhèng zhì ān quán", example: "政安", exampleEn: "Pol security" },
    { zh: "社会分层", en: "social stratification", pinyin: "shè huì fēn céng", example: "分层", exampleEn: "Stratification" },
    { zh: "社会流动", en: "social mobility", pinyin: "shè huì liú dòng", example: "流动", exampleEn: "Mobility" },
    { zh: "社会结构", en: "social structure", pinyin: "shè huì jié gòu", example: "结构", exampleEn: "Structure" },
    { zh: "社会群体", en: "social group", pinyin: "shè huì qún tǐ", example: "群体", exampleEn: "Group" },
    { zh: "社会组织", en: "social org", pinyin: "shè huì zǔ zhī", example: "组织", exampleEn: "Org" },
    { zh: "社会制度", en: "social institution", pinyin: "shè huì zhì dù", example: "制度", exampleEn: "Institution" },
    { zh: "社会化", en: "socialization", pinyin: "shè huì huà", example: "社会", exampleEn: "Socialization" },
    { zh: "社会角色", en: "social role", pinyin: "shè huì jué sè", example: "角色", exampleEn: "Role" },
    { zh: "社会互动", en: "social interaction", pinyin: "shè huì hù dòng", example: "互动", exampleEn: "Interaction" },
    { zh: "社会网络", en: "social network", pinyin: "shè huì wǎng luò", example: "网络", exampleEn: "Network" },
    { zh: "社会资本", en: "social capital", pinyin: "shè huì zī běn", example: "资本", exampleEn: "Capital" },
    { zh: "社会规范", en: "social norm", pinyin: "shè huì guī fàn", example: "规范", exampleEn: "Norm" },
    { zh: "社会控制", en: "social control", pinyin: "shè huì kòng zhì", example: "控制", exampleEn: "Control" },
    { zh: "社会变迁", en: "social change", pinyin: "shè huì biàn qiān", example: "变迁", exampleEn: "Change" },
    { zh: "社会越轨", en: "deviance", pinyin: "shè huì yuè guǐ", example: "越轨", exampleEn: "Deviance" },
    { zh: "社会失范", en: "anomie", pinyin: "shè huì shī fàn", example: "失范", exampleEn: "Anomie" },
    { zh: "社会问题", en: "social problem", pinyin: "shè huì wèn tí", example: "问题", exampleEn: "Problem" },
    { zh: "社会排斥", en: "social exclusion", pinyin: "shè huì pái chì", example: "排斥", exampleEn: "Exclusion" },
    { zh: "社会包容", en: "social inclusion", pinyin: "shè huì bāo róng", example: "包容", exampleEn: "Inclusion" },
    { zh: "社会公平", en: "social justice", pinyin: "shè huì gōng píng", example: "公平", exampleEn: "Justice" },
    { zh: "社会政策", en: "social policy", pinyin: "shè huì zhèng cè", example: "政策", exampleEn: "Policy" },
    { zh: "社会福利", en: "social welfare", pinyin: "shè huì fú lì", example: "福利", exampleEn: "Welfare" },
    { zh: "社会运动", en: "social movement", pinyin: "shè huì yùn dòng", example: "运动", exampleEn: "Movement" },
    { zh: "集体行动", en: "collective action", pinyin: "jí tǐ xíng dòng", example: "集体", exampleEn: "Collective" },
    { zh: "社区", en: "community", pinyin: "shè qū", example: "社区", exampleEn: "Community" },
    { zh: "城市化社会", en: "urbanization", pinyin: "chéng shì huà shè huì", example: "城市", exampleEn: "Urban" },
    { zh: "农民工", en: "migrant worker", pinyin: "nóng mín gōng", example: "农民", exampleEn: "Migrant" },
    { zh: "留守儿童", en: "left-behind", pinyin: "liú shǒu ér tóng", example: "留守", exampleEn: "Left-behind" },
    { zh: "空巢老人", en: "empty-nest elder", pinyin: "kōng cháo lǎo rén", example: "空巢", exampleEn: "Empty-nest" },
    { zh: "老龄化", en: "aging", pinyin: "lǎo líng huà", example: "老龄", exampleEn: "Aging" },
    { zh: "少子化", en: "low fertility", pinyin: "shǎo zǐ huà", example: "少子", exampleEn: "Low fertility" },
    { zh: "人口红利", en: "demographic div", pinyin: "rén kǒu hóng lì", example: "红利", exampleEn: "Dividend" },
    { zh: "人口结构", en: "population struct", pinyin: "rén kǒu jié gòu", example: "结构", exampleEn: "Struct" },
    { zh: "家庭结构", en: "family struct", pinyin: "jiā tíng jié gòu", example: "家庭", exampleEn: "Family" },
    { zh: "婚姻", en: "marriage", pinyin: "hūn yīn", example: "婚姻", exampleEn: "Marriage" },
    { zh: "代际", en: "intergenerational", pinyin: "dài jì", example: "代际", exampleEn: "Generational" },
    { zh: "代沟", en: "generation gap", pinyin: "dài gōu", example: "代沟", exampleEn: "Gen gap" },
    { zh: "阶级", en: "class", pinyin: "jiē jí", example: "阶级", exampleEn: "Class" },
    { zh: "阶层", en: "stratum", pinyin: "jiē céng", example: "阶层", exampleEn: "Stratum" },
    { zh: "中产阶级", en: "middle class", pinyin: "zhōng chǎn jiē jí", example: "中产", exampleEn: "Middle class" },
    { zh: "工人阶级", en: "working class", pinyin: "gōng rén jiē jí", example: "工人", exampleEn: "Working" },
    { zh: "农民阶级", en: "peasant class", pinyin: "nóng mín jiē jí", example: "农民", exampleEn: "Peasant" },
    { zh: "精英", en: "elite", pinyin: "jīng yīng", example: "精英", exampleEn: "Elite" },
    { zh: "草根", en: "grassroots", pinyin: "cǎo gēn", example: "草根", exampleEn: "Grassroots" },
    { zh: "相对贫困", en: "relative poverty", pinyin: "xiāng duì pín kùn", example: "相对贫", exampleEn: "Relative poverty" },
    { zh: "歧视", en: "discrimination", pinyin: "qí shì", example: "歧视", exampleEn: "Discrimination" },
    { zh: "偏见", en: "prejudice", pinyin: "piān jiàn", example: "偏见", exampleEn: "Prejudice" },
    { zh: "污名", en: "stigma", pinyin: "wū míng", example: "污名", exampleEn: "Stigma" },
    { zh: "符号互动", en: "symbolic interact", pinyin: "fú hào hù dòng", example: "符号", exampleEn: "Symbolic" },
    { zh: "结构功能", en: "structural func", pinyin: "jié gòu gōng néng", example: "功能", exampleEn: "Function" },
    { zh: "冲突理论", en: "conflict theory", pinyin: "chōng tū lǐ lùn", example: "冲突", exampleEn: "Conflict" },
    { zh: "社会信任", en: "social trust", pinyin: "shè huì xìn rèn", example: "信任", exampleEn: "Trust" },
    { zh: "社会凝聚", en: "social cohesion", pinyin: "shè huì níng jù", example: "凝聚", exampleEn: "Cohesion" },
    { zh: "有机团结", en: "organic solidarity", pinyin: "yǒu jī tuán jié", example: "有机", exampleEn: "Organic" },
    { zh: "机械团结", en: "mechanical solidarity", pinyin: "jī xiè tuán jié", example: "机械", exampleEn: "Mechanical" },
    { zh: "集体意识", en: "collective conscious", pinyin: "jí tǐ yì shí", example: "集体", exampleEn: "Collective" },
    { zh: "社会事实", en: "social fact", pinyin: "shè huì shì shí", example: "事实", exampleEn: "Fact" },
    { zh: "自杀论", en: "suicide study", pinyin: "zì shā lùn", example: "自杀", exampleEn: "Suicide" },
    { zh: "社会整合", en: "social integration", pinyin: "shè huì zhěng hé", example: "整合", exampleEn: "Integration" },
    { zh: "法律", en: "law", pinyin: "fǎ lǜ", example: "法律", exampleEn: "Law" },
    { zh: "法制", en: "legal system", pinyin: "fǎ zhì", example: "法制", exampleEn: "Legal sys" },
    { zh: "立法法", en: "legislation", pinyin: "lì fǎ fǎ", example: "立法", exampleEn: "Legislate" },
    { zh: "司法独立", en: "judicial indep", pinyin: "sī fǎ dú lì", example: "独立", exampleEn: "Independence" },
    { zh: "执法", en: "law enforcement", pinyin: "zhí fǎ", example: "执法", exampleEn: "Enforce" },
    { zh: "守法", en: "compliance", pinyin: "shǒu fǎ", example: "守法", exampleEn: "Comply" },
    { zh: "法律关系", en: "legal relation", pinyin: "fǎ lǜ guān xì", example: "关系", exampleEn: "Relation" },
    { zh: "法律主体", en: "legal subject", pinyin: "fǎ lǜ zhǔ tǐ", example: "主体", exampleEn: "Subject" },
    { zh: "权利能力", en: "capacity", pinyin: "quán lì néng lì", example: "权利能", exampleEn: "Capacity" },
    { zh: "行为能力", en: "capacity to act", pinyin: "xíng wéi néng lì", example: "行为", exampleEn: "Act capacity" },
    { zh: "法律责任", en: "legal liability", pinyin: "fǎ lǜ zé rèn", example: "责任", exampleEn: "Liability" },
    { zh: "违法行为", en: "illegal act", pinyin: "wéi fǎ xíng wéi", example: "违法", exampleEn: "Illegal" },
    { zh: "犯罪", en: "crime", pinyin: "fàn zuì", example: "犯罪", exampleEn: "Crime" },
    { zh: "刑罚", en: "penalty", pinyin: "xíng fá", example: "刑罚", exampleEn: "Penalty" },
    { zh: "民法", en: "civil law", pinyin: "mín fǎ", example: "民法", exampleEn: "Civil law" },
    { zh: "刑法", en: "criminal law", pinyin: "xíng fǎ", example: "刑法", exampleEn: "Criminal law" },
    { zh: "行政法", en: "admin law", pinyin: "xíng zhèng fǎ", example: "行政", exampleEn: "Admin law" },
    { zh: "国际法", en: "intl law", pinyin: "guó jì fǎ", example: "国际", exampleEn: "Intl law" },
    { zh: "经济法", en: "economic law", pinyin: "jīng jì fǎ", example: "经济", exampleEn: "Economic law" },
    { zh: "商法", en: "commercial law", pinyin: "shāng fǎ", example: "商法", exampleEn: "Commercial" },
    { zh: "婚姻法", en: "marriage law", pinyin: "hūn yīn fǎ", example: "婚姻", exampleEn: "Marriage law" },
    { zh: "继承法", en: "inheritance law", pinyin: "jì chéng fǎ", example: "继承", exampleEn: "Inheritance" },
    { zh: "合同法", en: "contract law", pinyin: "hé tong fǎ", example: "合同", exampleEn: "Contract" },
    { zh: "侵权法", en: "tort law", pinyin: "qīn quán fǎ", example: "侵权", exampleEn: "Tort" },
    { zh: "物权法", en: "property law", pinyin: "wù quán fǎ", example: "物权", exampleEn: "Property law" },
    { zh: "知识产权法", en: "IP law", pinyin: "zhī shi chǎn quán fǎ", example: "知识", exampleEn: "IP law" },
    { zh: "公司法", en: "company law", pinyin: "gōng sī fǎ", example: "公司", exampleEn: "Company" },
    { zh: "证券法", en: "securities law", pinyin: "zhèng quàn fǎ", example: "证券", exampleEn: "Securities" },
    { zh: "反垄断法", en: "antitrust", pinyin: "fǎn lǒng duàn fǎ", example: "反垄断", exampleEn: "Antitrust" },
    { zh: "消费者权益", en: "consumer rights", pinyin: "xiāo fèi zhě quán yì", example: "消费", exampleEn: "Consumer" },
    { zh: "劳动法", en: "labor law", pinyin: "láo dòng fǎ", example: "劳动", exampleEn: "Labor" },
    { zh: "社会保障法", en: "social sec law", pinyin: "shè huì bǎo zhàng fǎ", example: "社保", exampleEn: "Social sec" },
    { zh: "环境保护法", en: "env law", pinyin: "huán jìng bǎo hù fǎ", example: "环保", exampleEn: "Env law" },
    { zh: "刑事诉讼法", en: "crim proc law", pinyin: "xíng shì sù sòng fǎ", example: "刑诉", exampleEn: "Crim proc" },
    { zh: "民事诉讼法", en: "civil proc law", pinyin: "mín shì sù sòng fǎ", example: "民诉", exampleEn: "Civil proc" },
    { zh: "行政诉讼法", en: "admin proc law", pinyin: "xíng zhèng sù sòng fǎ", example: "行诉", exampleEn: "Admin proc" },
    { zh: "证据", en: "evidence", pinyin: "zhèng jù", example: "取证", exampleEn: "Evidence" },
    { zh: "举证责任", en: "burden of proof", pinyin: "jǔ zhèng zé rèn", example: "举证", exampleEn: "Burden" },
    { zh: "无罪推定", en: "presumption innoc", pinyin: "wú zuì tuī dìng", example: "无罪", exampleEn: "Innocent" },
    { zh: "罪刑法定", en: "nullum crimen", pinyin: "zuì xíng fǎ dìng", example: "法定", exampleEn: "No crime" },
    { zh: "罪刑相适应", en: "proportionality", pinyin: "zuì xíng xiāng shì yìng", example: "相适", exampleEn: "Proportion" },
    { zh: "管制", en: "control", pinyin: "guǎn zhì", example: "管制的", exampleEn: "Control" },
    { zh: "拘役", en: "detention", pinyin: "jū yì", example: "拘役", exampleEn: "Detention" },
    { zh: "有期徒刑", en: "fixed-term", pinyin: "yǒu qī tú xíng", example: "有期", exampleEn: "Fixed term" },
    { zh: "无期徒刑", en: "life imprison", pinyin: "wú qī tú xíng", example: "无期", exampleEn: "Life" },
    { zh: "死刑", en: "death penalty", pinyin: "sǐ xíng", example: "死刑", exampleEn: "Death" },
    { zh: "缓刑", en: "probation", pinyin: "huǎn xíng", example: "缓刑", exampleEn: "Probation" },
    { zh: "假释", en: "parole", pinyin: "jiǎ shì", example: "假释", exampleEn: "Parole" },
    { zh: "累犯", en: "recidivist", pinyin: "lèi fàn", example: "累犯", exampleEn: "Recidivist" },
    { zh: "正当防卫", en: "self-defense", pinyin: "zhèng dàng fáng wèi", example: "防卫", exampleEn: "Defense" },
    { zh: "紧急避险", en: "necessity", pinyin: "jǐn jí bì xiǎn", example: "避险", exampleEn: "Necessity" },
    { zh: "代理", en: "agency", pinyin: "dài lǐ", example: "代理", exampleEn: "Agency" },
    { zh: "诉讼时效", en: "limitation", pinyin: "sù sòng shí xiào", example: "时效", exampleEn: "Limitation" },
    { zh: "仲裁", en: "arbitration", pinyin: "zhòng cái", example: "仲裁", exampleEn: "Arbitration" },
    { zh: "调解", en: "mediation", pinyin: "tiáo jiě", example: "调解", exampleEn: "Mediation" },
    { zh: "法律援助", en: "legal aid", pinyin: "fǎ lǜ yuán zhù", example: "援助", exampleEn: "Legal aid" },
    { zh: "律师", en: "lawyer", pinyin: "lǜ shī", example: "律师", exampleEn: "Lawyer" },
    { zh: "陪审团", en: "jury", pinyin: "péi shěn tuán", example: "陪审", exampleEn: "Jury" },
    { zh: "大陆法系", en: "civil law system", pinyin: "dà lù fǎ xì", example: "大陆", exampleEn: "Civil sys" },
    { zh: "英美法系", en: "common law", pinyin: "yīng měi fǎ xì", example: "英美", exampleEn: "Common law" },
    { zh: "判例法", en: "case law", pinyin: "pàn lì fǎ", example: "判例", exampleEn: "Case law" },
    { zh: "成文法", en: "statutory law", pinyin: "chéng wén fǎ", example: "成文", exampleEn: "Statutory" },
    { zh: "习惯法", en: "customary law", pinyin: "xí guàn fǎ", example: "习惯", exampleEn: "Customary" },
    { zh: "自然法", en: "natural law", pinyin: "zì rán fǎ", example: "自然", exampleEn: "Natural law" },
    { zh: "宪法监督", en: "constitutional rev", pinyin: "xiàn fǎ jiān dū", example: "监督", exampleEn: "Review" },
    { zh: "违宪审查", en: "judicial review", pinyin: "wéi xiàn shěn chá", example: "审查", exampleEn: "Review" },
    { zh: "行政复议", en: "admin review", pinyin: "xíng zhèng fù yì", example: "复议", exampleEn: "Review" },
    { zh: "国家赔偿", en: "state comp", pinyin: "guó jiā péi cháng", example: "赔偿", exampleEn: "Compensation" },
    { zh: "国际公法", en: "public intl law", pinyin: "guó jì gōng fǎ", example: "公法", exampleEn: "Public intl" },
    { zh: "国际私法", en: "private intl law", pinyin: "guó jì sī fǎ", example: "私法", exampleEn: "Private intl" },
    { zh: "国际经济法", en: "intl econ law", pinyin: "guó jì jīng jì fǎ", example: "经法", exampleEn: "Econ law" },
    { zh: "条约", en: "treaty", pinyin: "tiáo yuē", example: "缔约", exampleEn: "Treaty" },
    { zh: "主权豁免", en: "sovereign immunity", pinyin: "zhǔ quán huō miǎn", example: "豁免", exampleEn: "Immunity" },
    { zh: "引渡", en: "extradition", pinyin: "yǐn dù", example: "引渡", exampleEn: "Extradition" },
    { zh: "庇护", en: "asylum", pinyin: "bì hù", example: "庇护", exampleEn: "Asylum" },
    { zh: "人权法", en: "human rights law", pinyin: "rén quán fǎ", example: "人法", exampleEn: "HR law" },
    { zh: "儿童权利", en: "child rights", pinyin: "ér tóng quán lì", example: "儿童", exampleEn: "Child rights" },
    { zh: "政治权利", en: "political rights", pinyin: "zhèng zhì quán lì", example: "政权", exampleEn: "Political" },
    { zh: "弱势群体", en: "vulnerable group", pinyin: "ruò shì qún tǐ", example: "弱势", exampleEn: "Vulnerable" }
  ]
};

// ─── MENTAL MATH TECHNIQUES ────────────────────────────────────────
const MATH_TECHNIQUES = [
  {
    id: "sqrt-approx", title: "开方近似", en: "Square root approximation",
    desc: "对于 √S，找到最近的完全平方数 n²，则 √S ≈ n + (S - n²) / (2n)",
    example: "√37 ≈ 6 + (37-36)/(2×6) = 6 + 1/12 ≈ 6.083（实际 6.0828）",
    tip: "误差通常 < 0.1%，对于 CSCA 选择题绰绰有余",
    descEn: "For √S, find the nearest perfect square n², then √S ≈ n + (S - n²) / (2n)",
    exampleEn: "√37 ≈ 6 + (37-36)/(2×6) = 6 + 1/12 ≈ 6.083 (actual 6.0828)",
    tipEn: "Error is usually < 0.1%, more than enough for CSCA multiple-choice"
  },
  {
    id: "log-estimate", title: "对数心算", en: "Logarithm estimation",
    desc: "记住 lg2 ≈ 0.301, lg3 ≈ 0.477, lg7 ≈ 0.845。利用 lg(ab)=lga+lgb 和 lg(a/b)=lga-lgb 推算其他值",
    example: "lg6 = lg2 + lg3 ≈ 0.301 + 0.477 = 0.778",
    tip: "只需记 lg2 / lg3 / lg7 三个值",
    descEn: "Remember lg2 ≈ 0.301, lg3 ≈ 0.477, lg7 ≈ 0.845. Use lg(ab)=lga+lgb and lg(a/b)=lga-lgb to derive other values",
    exampleEn: "lg6 = lg2 + lg3 ≈ 0.301 + 0.477 = 0.778",
    tipEn: "Only need to memorize lg2 / lg3 / lg7"
  },
  {
    id: "trig-special", title: "三角函数特殊值", en: "Special trig values",
    desc: "记住 0°、30°、45°、60°、90° 的 sin/cos/tan 值（记忆口诀：sin 0→90 是 √0/2, √1/2, √2/2, √3/2, √4/2）",
    example: "sin60° = √3/2 ≈ 0.866; cos45° = √2/2 ≈ 0.707",
    tip: "CSCA 不考复杂角度，特殊角的值是必须刻入肌肉记忆的",
    descEn: "Memorize sin/cos/tan values for 0°, 30°, 45°, 60°, 90° (mnemonic: sin 0→90 is √0/2, √1/2, √2/2, √3/2, √4/2)",
    exampleEn: "sin60° = √3/2 ≈ 0.866; cos45° = √2/2 ≈ 0.707",
    tipEn: "CSCA doesn't test complex angles; special-angle values must be memorized"
  },
  {
    id: "quadratic-check", title: "二次方程速判", en: "Quadratic quick-check",
    desc: "对于 ax²+bx+c=0，判别式 Δ=b²-4ac：Δ>0 两不等实根，Δ=0 重根，Δ<0 无实根。求根用因式分解，不行再用求根公式 x=(-b±√Δ)/2a",
    example: "x²-5x+6=0 → 因式分解 (x-2)(x-3)=0 → x=2 或 3",
    tip: "CSCA 的二次方程大多可以因式分解，优先尝试",
    descEn: "For ax²+bx+c=0, discriminant Δ=b²-4ac: Δ>0 two distinct real roots, Δ=0 repeated root, Δ<0 no real root. Factor to solve, otherwise use formula x=(-b±√Δ)/2a",
    exampleEn: "x²-5x+6=0 → factor (x-2)(x-3)=0 → x=2 or 3",
    tipEn: "Most CSCA quadratics factor nicely; try factoring first"
  },
  {
    id: "percent-ratio", title: "百分比与比例", en: "Percentages & ratios",
    desc: "a 是 b 的 a/b × 100%。从 b 变到 a 的变化率 = (a-b)/b × 100%。记住 1/3≈33.3%, 1/6≈16.7%, 1/8=12.5%",
    example: "200 的 15% = 200 × 0.15 = 30；或 200 × 10% + 200 × 5% = 20 + 10 = 30",
    tip: "拆分百分比计算更不容易错：37% = 25% + 10% + 2%",
    descEn: "a is a/b × 100% of b. Rate of change from b to a = (a-b)/b × 100%. Remember 1/3≈33.3%, 1/6≈16.7%, 1/8=12.5%",
    exampleEn: "15% of 200 = 200 × 0.15 = 30; or 200 × 10% + 200 × 5% = 20 + 10 = 30",
    tipEn: "Splitting percentages makes calculation less error-prone: 37% = 25% + 10% + 2%"
  }
];

// ─── CURRICULUM MAPS (IB / AP / A-Level → CSCA gaps) ─────────────
const MATH_QUESTIONS = [
  { q: "用近似法估算 √37（取最近平方数）", a: "6.08", hint: "√36=6，增量≈(37-36)/(2×6)=1/12≈0.083" , diff: "medium", qEn: "Estimate √37 using the approximation method (nearest square)", hintEn: "√36=6, increment≈(37-36)/(2×6)=1/12≈0.083" },
  { q: "估算 √50", a: "7.07", hint: "√49=7，增量≈(50-49)/(2×7)=1/14≈0.071" , diff: "medium", qEn: "Estimate √50", hintEn: "√49=7, increment≈(50-49)/(2×7)=1/14≈0.071" },
  { q: "估算 √82", a: "9.06", hint: "√81=9，增量≈(82-81)/(2×9)=1/18≈0.056" , diff: "medium", qEn: "Estimate √82", hintEn: "√81=9, increment≈(82-81)/(2×9)=1/18≈0.056" },
  { q: "估算 √10", a: "3.16", hint: "√9=3，增量≈(10-9)/(2×3)=1/6≈0.167" , diff: "medium", qEn: "Estimate √10", hintEn: "√9=3, increment≈(10-9)/(2×3)=1/6≈0.167" },
  { q: "估算 √200", a: "14.14", hint: "√196=14，增量≈(200-196)/(2×14)=4/28≈0.143" , diff: "medium", qEn: "Estimate √200", hintEn: "√196=14, increment≈(200-196)/(2×14)=4/28≈0.143" },
  { q: "估算 √130", a: "11.40", hint: "√121=11，增量≈(130-121)/(2×11)=9/22≈0.41" , diff: "medium", qEn: "Estimate √130", hintEn: "√121=11, increment≈(130-121)/(2×11)=9/22≈0.41" },
  { q: "√2 的近似值（留两位）", a: "1.41", hint: "记住 √2≈1.414，√3≈1.732" , diff: "easy", qEn: "Approximate value of √2 (2 decimals)", hintEn: "Remember √2≈1.414, √3≈1.732" },
  { q: "√3 的近似值（留两位）", a: "1.73", hint: "√3≈1.732" , diff: "easy", qEn: "Approximate value of √3 (2 decimals)", hintEn: "√3≈1.732" },
  { q: "已知 lg2≈0.301, lg3≈0.477，求 lg6", a: "0.778", hint: "lg6=lg(2×3)=lg2+lg3" , diff: "hard", qEn: "Given lg2≈0.301, lg3≈0.477, find lg6", hintEn: "lg6=lg(2×3)=lg2+lg3" },
  { q: "求 lg5（lg2≈0.301）", a: "0.699", hint: "lg5=lg(10/2)=1-lg2=1-0.301" , diff: "hard", qEn: "Find lg5 (lg2≈0.301)", hintEn: "lg5=lg(10/2)=1-lg2=1-0.301" },
  { q: "求 lg14（lg2≈0.301, lg7≈0.845）", a: "1.146", hint: "lg14=lg(2×7)=lg2+lg7" , diff: "hard", qEn: "Find lg14 (lg2≈0.301, lg7≈0.845)", hintEn: "lg14=lg(2×7)=lg2+lg7" },
  { q: "求 lg21（lg3≈0.477, lg7≈0.845）", a: "1.322", hint: "lg21=lg(3×7)=lg3+lg7" , diff: "hard", qEn: "Find lg21 (lg3≈0.477, lg7≈0.845)", hintEn: "lg21=lg(3×7)=lg3+lg7" },
  { q: "求 lg(3/2)（lg2≈0.301, lg3≈0.477）", a: "0.176", hint: "lg(3/2)=lg3-lg2" , diff: "hard", qEn: "Find lg(3/2) (lg2≈0.301, lg3≈0.477)", hintEn: "lg(3/2)=lg3-lg2" },
  { q: "求 lg8（lg2≈0.301）", a: "0.903", hint: "lg8=lg(2³)=3lg2" , diff: "hard", qEn: "Find lg8 (lg2≈0.301)", hintEn: "lg8=lg(2³)=3lg2" },
  { q: "求 lg(1/2)（lg2≈0.301）", a: "-0.301", hint: "lg(1/2)=-lg2" , diff: "hard", qEn: "Find lg(1/2) (lg2≈0.301)", hintEn: "lg(1/2)=-lg2" },
  { q: "求 lg12（lg2≈0.301, lg3≈0.477）", a: "1.079", hint: "lg12=lg(4×3)=2lg2+lg3" , diff: "hard", qEn: "Find lg12 (lg2≈0.301, lg3≈0.477)", hintEn: "lg12=lg(4×3)=2lg2+lg3" },
  { q: "求 lg(4/3)（lg2≈0.301, lg3≈0.477）", a: "0.125", hint: "lg(4/3)=2lg2-lg3=0.602-0.477" , diff: "hard", qEn: "Find lg(4/3) (lg2≈0.301, lg3≈0.477)", hintEn: "lg(4/3)=2lg2-lg3=0.602-0.477" },
  { q: "求 lg(10) 与 lg(100)", a: "1,2", hint: "lg(10^k)=k" , diff: "hard", qEn: "Find lg(10) and lg(100)", hintEn: "lg(10^k)=k" },
  { q: "sin30° 的值", a: "0.5", hint: "sin30°=1/2=0.5" , diff: "easy", qEn: "Value of sin30°", hintEn: "sin30°=1/2=0.5" },
  { q: "cos60° 的值", a: "0.5", hint: "cos60°=1/2=0.5" , diff: "easy", qEn: "Value of cos60°", hintEn: "cos60°=1/2=0.5" },
  { q: "sin45° 的值（留三位）", a: "0.707", hint: "sin45°=√2/2≈0.707" , diff: "easy", qEn: "Value of sin45° (3 decimals)", hintEn: "sin45°=√2/2≈0.707" },
  { q: "cos45° 的值（留三位）", a: "0.707", hint: "cos45°=√2/2≈0.707" , diff: "easy", qEn: "Value of cos45° (3 decimals)", hintEn: "cos45°=√2/2≈0.707" },
  { q: "sin60° 的值（留三位）", a: "0.866", hint: "sin60°=√3/2≈0.866" , diff: "easy", qEn: "Value of sin60° (3 decimals)", hintEn: "sin60°=√3/2≈0.866" },
  { q: "cos30° 的值（留三位）", a: "0.866", hint: "cos30°=√3/2≈0.866" , diff: "easy", qEn: "Value of cos30° (3 decimals)", hintEn: "cos30°=√3/2≈0.866" },
  { q: "tan45° 的值", a: "1", hint: "tan45°=1" , diff: "easy", qEn: "Value of tan45°", hintEn: "tan45°=1" },
  { q: "tan30° 的值（留三位）", a: "0.577", hint: "tan30°=1/√3≈0.577" , diff: "easy", qEn: "Value of tan30° (3 decimals)", hintEn: "tan30°=1/√3≈0.577" },
  { q: "tan60° 的值（留三位）", a: "1.732", hint: "tan60°=√3≈1.732" , diff: "easy", qEn: "Value of tan60° (3 decimals)", hintEn: "tan60°=√3≈1.732" },
  { q: "sin90° 与 cos0°", a: "1,1", hint: "sin90°=cos0°=1" , diff: "easy", qEn: "sin90° and cos0°", hintEn: "sin90°=cos0°=1" },
  { q: "sin0° 与 cos90°", a: "0,0", hint: "sin0°=cos90°=0" , diff: "easy", qEn: "sin0° and cos90°", hintEn: "sin0°=cos90°=0" },
  { q: "解 x²-5x+6=0", a: "2,3", hint: "因式分解为 (x-2)(x-3)=0" , diff: "medium", qEn: "Solve x²-5x+6=0", hintEn: "Factor: (x-2)(x-3)=0" },
  { q: "解 x²-3x+2=0", a: "1,2", hint: "因式分解 (x-1)(x-2)=0" , diff: "medium", qEn: "Solve x²-3x+2=0", hintEn: "Factor: (x-1)(x-2)=0" },
  { q: "解 x²+x-6=0", a: "-3,2", hint: "因式分解 (x+3)(x-2)=0" , diff: "medium", qEn: "Solve x²+x-6=0", hintEn: "Factor: (x+3)(x-2)=0" },
  { q: "解 x²-4=0", a: "-2,2", hint: "平方差: (x-2)(x+2)=0" , diff: "medium", qEn: "Solve x²-4=0", hintEn: "Difference of squares: (x-2)(x+2)=0" },
  { q: "用判别式解 x²-4x+4=0", a: "2", hint: "Δ=16-16=0，重根 x=2" , diff: "medium", qEn: "Solve x²-4x+4=0 using the discriminant", hintEn: "Δ=16-16=0, repeated root x=2" },
  { q: "解 x²+1=0（实数范围）", a: "无实根", hint: "Δ=0-4=-4<0，无实根" , diff: "medium", qEn: "Solve x²+1=0 (real numbers)", hintEn: "Δ=0-4=-4<0, no real root" },
  { q: "解 2x²-7x+3=0", a: "0.5,3", hint: "因式分解 (2x-1)(x-3)=0" , diff: "medium", qEn: "Solve 2x²-7x+3=0", hintEn: "Factor: (2x-1)(x-3)=0" },
  { q: "解 3x²-5x+2=0", a: "1,0.667", hint: "因式分解 (3x-2)(x-1)=0 → x=1, 2/3" , diff: "medium", qEn: "Solve 3x²-5x+2=0", hintEn: "Factor: (3x-2)(x-1)=0 → x=1, 2/3" },
  { q: "求 x²-6x+5=0 两根之和", a: "6", hint: "韦达定理: 和=-b/a=6" , diff: "medium", qEn: "Sum of roots of x²-6x+5=0", hintEn: "Vieta's formula: sum=-b/a=6" },
  { q: "求 x²-6x+5=0 两根之积", a: "5", hint: "韦达定理: 积=c/a=5" , diff: "medium", qEn: "Product of roots of x²-6x+5=0", hintEn: "Vieta's formula: product=c/a=5" },
  { q: "200 的 15% 是多少", a: "30", hint: "200×10%+200×5%=20+10" , diff: "medium", qEn: "What is 15% of 200", hintEn: "200×10%+200×5%=20+10" },
  { q: "80 的 25% 是多少", a: "20", hint: "25%=1/4，80/4=20" , diff: "medium", qEn: "What is 25% of 80", hintEn: "25%=1/4, 80/4=20" },
  { q: "成本 80 售价 100，利润率多少", a: "25%", hint: "(100-80)/80=0.25" , diff: "medium", qEn: "Cost 80, price 100, what is the profit margin?", hintEn: "(100-80)/80=0.25" },
  { q: "从 50 增加 20% 得多少", a: "60", hint: "50×1.2=60" , diff: "medium", qEn: "Increase 50 by 20%", hintEn: "50×1.2=60" },
  { q: "从 200 减少 15% 得多少", a: "170", hint: "200×0.85=170" , diff: "medium", qEn: "Decrease 200 by 15%", hintEn: "200×0.85=170" },
  { q: "120 是 150 的百分之几", a: "80%", hint: "120/150=0.8" , diff: "medium", qEn: "What percent of 150 is 120", hintEn: "120/150=0.8" },
  { q: "按比例 2:3 分 50，两份各多少", a: "20,30", hint: "50×2/5=20，50×3/5=30" , diff: "medium", qEn: "Divide 50 in the ratio 2:3", hintEn: "50×2/5=20, 50×3/5=30" },
  { q: "37% 约等于多少分数", a: "3/8", hint: "37.5%=3/8，近似取" , diff: "medium", qEn: "What fraction is 37% approximately equal to", hintEn: "37.5%=3/8, take approximate" },
  { q: "C(5,2) = ?", a: "10", hint: "5×4/2=10" , diff: "medium", qEn: "C(5,2) = ?", hintEn: "5×4/2=10" },
  { q: "C(6,2) = ?", a: "15", hint: "6×5/2=15" , diff: "medium", qEn: "C(6,2) = ?", hintEn: "6×5/2=15" },
  { q: "C(6,3) = ?", a: "20", hint: "6×5×4/(3×2×1)=20" , diff: "medium", qEn: "C(6,3) = ?", hintEn: "6×5×4/(3×2×1)=20" },
  { q: "C(8,3) = ?", a: "56", hint: "8×7×6/6=56" , diff: "medium", qEn: "C(8,3) = ?", hintEn: "8×7×6/6=56" },
  { q: "C(7,2) = ?", a: "21", hint: "7×6/2=21" , diff: "medium", qEn: "C(7,2) = ?", hintEn: "7×6/2=21" },
  { q: "C(10,3) = ?", a: "120", hint: "10×9×8/6=120" , diff: "medium", qEn: "C(10,3) = ?", hintEn: "10×9×8/6=120" },
  { q: "C(4,2) = ?", a: "6", hint: "4×3/2=6" , diff: "medium", qEn: "C(4,2) = ?", hintEn: "4×3/2=6" },
  { q: "C(9,2) = ?", a: "36", hint: "9×8/2=36" , diff: "medium", qEn: "C(9,2) = ?", hintEn: "9×8/2=36" },
  { q: "5! = ?", a: "120", hint: "5×4×3×2×1=120" , diff: "medium", qEn: "5! = ?", hintEn: "5×4×3×2×1=120" },
  { q: "6! = ?", a: "720", hint: "6×120=720" , diff: "medium", qEn: "6! = ?", hintEn: "6×120=720" },
  { q: "4! = ?", a: "24", hint: "4×3×2×1=24" , diff: "medium", qEn: "4! = ?", hintEn: "4×3×2×1=24" },
  { q: "7! = ?", a: "5040", hint: "7×720=5040" , diff: "medium", qEn: "7! = ?", hintEn: "7×720=5040" },
  { q: "3! = ?", a: "6", hint: "3×2×1=6" , diff: "medium", qEn: "3! = ?", hintEn: "3×2×1=6" },
  { q: "1+2+...+100 = ?", a: "5050", hint: "n(n+1)/2=100×101/2" , diff: "medium", qEn: "1+2+...+100 = ?", hintEn: "n(n+1)/2=100×101/2" },
  { q: "2+4+...+20 = ?", a: "110", hint: "10项等差，和=10×(2+20)/2" , diff: "medium", qEn: "2+4+...+20 = ?", hintEn: "10 terms arithmetic, sum=10×(2+20)/2" },
  { q: "等差数列 3,7,11,... 第10项", a: "39", hint: "a10=3+9×4=39" , diff: "medium", qEn: "10th term of arithmetic sequence 3,7,11,...", hintEn: "a10=3+9×4=39" },
  { q: "1+3+...+99 = ?", a: "2500", hint: "50项，和=50×(1+99)/2" , diff: "medium", qEn: "1+3+...+99 = ?", hintEn: "50 terms, sum=50×(1+99)/2" },
  { q: "等差数列前n项和公式", a: "n(a1+an)/2", hint: "Sn=n(a1+an)/2 或 n·a1+n(n-1)d/2" , diff: "medium", qEn: "Sum formula for first n terms of arithmetic sequence", hintEn: "Sn=n(a1+an)/2 or n·a1+n(n-1)d/2" },
  { q: "1/2 + 1/3 = ?", a: "5/6", hint: "通分 3/6+2/6=5/6" , diff: "medium", qEn: "1/2 + 1/3 = ?", hintEn: "Common denom: 3/6+2/6=5/6" },
  { q: "3/4 - 1/2 = ?", a: "1/4", hint: "3/4-2/4=1/4" , diff: "medium", qEn: "3/4 - 1/2 = ?", hintEn: "3/4-2/4=1/4" },
  { q: "2/3 × 3/4 = ?", a: "1/2", hint: "约去3，2/4=1/2" , diff: "medium", qEn: "2/3 × 3/4 = ?", hintEn: "Cancel 3, 2/4=1/2" },
  { q: "1/2 ÷ 1/4 = ?", a: "2", hint: "1/2×4=2" , diff: "medium", qEn: "1/2 ÷ 1/4 = ?", hintEn: "1/2×4=2" },
  { q: "5/6 + 1/3 = ?", a: "7/6", hint: "5/6+2/6=7/6" , diff: "medium", qEn: "5/6 + 1/3 = ?", hintEn: "5/6+2/6=7/6" },
  { q: "2^10 = ?", a: "1024", hint: "2^10=1024（常用）" , diff: "easy", qEn: "2^10 = ?", hintEn: "2^10=1024 (common)" },
  { q: "3^4 = ?", a: "81", hint: "3×3×3×3=81" , diff: "easy", qEn: "3^4 = ?", hintEn: "3×3×3×3=81" },
  { q: "2^5 = ?", a: "32", hint: "32" , diff: "easy", qEn: "2^5 = ?", hintEn: "32" },
  { q: "5^3 = ?", a: "125", hint: "5×5×5=125" , diff: "easy", qEn: "5^3 = ?", hintEn: "5×5×5=125" },
  { q: "(2^3)^2 = ?", a: "64", hint: "2^6=64" , diff: "easy", qEn: "(2^3)^2 = ?", hintEn: "2^6=64" },
  { q: "2^(-3) = ?", a: "1/8", hint: "负指数取倒数" , diff: "easy", qEn: "2^(-3) = ?", hintEn: "Negative exponent: take reciprocal" },
  { q: "9^(1/2) = ?", a: "3", hint: "平方根" , diff: "easy", qEn: "9^(1/2) = ?", hintEn: "Square root" },
  { q: "8^(2/3) = ?", a: "4", hint: "(³√8)²=2²=4" , diff: "easy", qEn: "8^(2/3) = ?", hintEn: "(³√8)²=2²=4" },
  { q: "1 km = ? m", a: "1000", hint: "千=1000" , diff: "easy", qEn: "1 km = ? m", hintEn: "kilo=1000" },
  { q: "1 小时 = ? 秒", a: "3600", hint: "60×60" , diff: "easy", qEn: "1 hour = ? seconds", hintEn: "60×60" },
  { q: "1 m = ? cm", a: "100", hint: "百=100" , diff: "easy", qEn: "1 m = ? cm", hintEn: "hecto=100" },
  { q: "1 吨 = ? kg", a: "1000", hint: "吨=1000千克" , diff: "easy", qEn: "1 ton = ? kg", hintEn: "ton=1000 kg" },
  { q: "72 km/h = ? m/s", a: "20", hint: "72×1000/3600=20" , diff: "easy", qEn: "72 km/h = ? m/s", hintEn: "72×1000/3600=20" },
  { q: "1 m² = ? cm²", a: "10000", hint: "100×100" , diff: "easy", qEn: "1 m² = ? cm²", hintEn: "100×100" },
  { q: "(3+2)^2 = ?", a: "25", hint: "25" , diff: "easy", qEn: "(3+2)^2 = ?", hintEn: "25" },
  { q: "展开 (x+5)^2", a: "x^2+10x+25", hint: "x²+2·5x+25" , diff: "medium", qEn: "Expand (x+5)^2", hintEn: "x²+2·5x+25" },
  { q: "展开 (2a+3)^2", a: "4a^2+12a+9", hint: "(2a)²+2·2a·3+9" , diff: "medium", qEn: "Expand (2a+3)^2", hintEn: "(2a)²+2·2a·3+9" },
  { q: "展开 (10+1)^2", a: "121", hint: "100+20+1=121" , diff: "easy", qEn: "Expand (10+1)^2", hintEn: "100+20+1=121" },
  { q: "|-7| = ?", a: "7", hint: "绝对值非负" , diff: "easy", qEn: "|-7| = ?", hintEn: "Absolute value is non-negative" },
  { q: "|3-8| = ?", a: "5", hint: "|-5|=5" , diff: "easy", qEn: "|3-8| = ?", hintEn: "|-5|=5" },
  { q: "|-4| + |3| = ?", a: "7", hint: "4+3=7" , diff: "easy", qEn: "|-4| + |3| = ?", hintEn: "4+3=7" },
  { q: "|x|=5 的解", a: "5,-5", hint: "x=±5" , diff: "easy", qEn: "Solution to |x|=5", hintEn: "x=±5" },
  { q: "||-3|-5| = ?", a: "2", hint: "|3-5|=|-2|=2" , diff: "easy", qEn: "||-3|-5| = ?", hintEn: "|3-5|=|-2|=2" },
  { q: "x+3<10 的解", a: "x<7", hint: "x<10-3" , diff: "easy", qEn: "Solution to x+3<10", hintEn: "x<10-3" },
  { q: "2x>8 的解", a: "x>4", hint: "x>4" , diff: "easy", qEn: "Solution to 2x>8", hintEn: "x>4" },
  { q: "3x-1≤5 的解", a: "x≤2", hint: "3x≤6 → x≤2" , diff: "easy", qEn: "Solution to 3x-1≤5", hintEn: "3x≤6 → x≤2" },
  { q: "-2x<6 的解", a: "x>-3", hint: "除以负数，不等号翻转" , diff: "medium", qEn: "Solution to -2x<6", hintEn: "Divide by negative, flip inequality sign" },
  { q: "π 取 3.14，求 2π", a: "6.28", hint: "2×3.14" , diff: "easy", qEn: "π≈3.14, find 2π", hintEn: "2×3.14" },
  { q: "√2×√3 约等于多少", a: "2.45", hint: "√6≈2.449" , diff: "medium", qEn: "Approximately how much is √2×√3", hintEn: "√6≈2.449" },
  { q: "π² 约等于多少（π≈3.14）", a: "9.86", hint: "3.14²≈9.86" , diff: "medium", qEn: "Approximately how much is π² (π≈3.14)", hintEn: "3.14²≈9.86" },
  { q: "e 的近似值", a: "2.72", hint: "自然对数底 e≈2.718" , diff: "easy", qEn: "Approximate value of e", hintEn: "Base of natural log e≈2.718" }
];

const CURRICULUM_MAPS = {
  "ib-math-aa": {
    name: "IB Math AA", strengths: ["Functions", "Calculus", "Trigonometry", "Proof-based reasoning"],
    gaps: ["平面解析几何（圆锥曲线不在 IB 考纲中）", "复数不在 SL 中", "不等式解法比 IB 深（尤其是绝对值不等式和分式不等式）"],
    tips: "IB 学生的微积分基础好，但解析几何是盲区。优先补圆锥曲线和不等式，然后大量做 60 分钟 48 题的计时训练——IB 考试时间宽裕，CSCA 对阅读速度要求极高。",
    gapsEn: ["Plane analytic geometry (conic sections are not in the IB syllabus)", "Complex numbers are not in SL", "Inequality solving is deeper than IB (especially absolute-value and rational inequalities)"],
    tipsEn: "IB students have strong calculus foundations, but analytic geometry is a blind spot. Prioritize conics and inequalities, then do lots of timed practice with 48 questions in 60 minutes — IB exams are generous with time, while CSCA demands very high reading speed."
  },
  "ib-math-ai": {
    name: "IB Math AI", strengths: ["Statistics", "Probability", "Data analysis"],
    gaps: ["微积分基础较弱（AI 重应用轻理论）", "圆锥曲线完全不涉及", "不等式解法深度不足"],
    tips: "统计数据是强项，但纯数学推导（圆锥曲线、复杂不等式）需要从头补。建议从不等式模块开始，再到解析几何。",
    gapsEn: ["Weak calculus foundation (AI emphasizes application over theory)", "Conic sections are completely absent", "Insufficient depth in inequality solving"],
    tipsEn: "Statistics is a strength, but pure math derivations (conics, complex inequalities) need to be built from scratch. Start with the inequalities module, then move to analytic geometry."
  },
  "ap-precalc": {
    name: "AP Precalculus", strengths: ["Functions", "Trigonometric modeling", "Polynomial analysis"],
    gaps: ["圆锥曲线只涉及抛物线和椭圆（不考双曲线和离心率）", "复数和向量深度不足", "立体几何几乎不考"],
    tips: "函数的底子不错，但几何弱。补立体几何（三视图 → 体积/表面积）和圆锥曲线参数方程，再做计时训练。",
    gapsEn: ["Conic sections only cover parabola and ellipse (no hyperbola or eccentricity)", "Insufficient depth in complex numbers and vectors", "Solid geometry is barely tested"],
    tipsEn: "Function foundations are decent, but geometry is weak. Build solid geometry (three-view drawings → volume/surface area) and conic section parametric equations, then do timed practice."
  },
  "ap-calc-ab": {
    name: "AP Calculus AB", strengths: ["Derivatives", "Integrals", "Function analysis"],
    gaps: ["不考平面解析几何（直线和圆以外）", "不等式和集合不是 AP 重点", "复数和空间几何完全不在考纲"],
    tips: "微积分是强项，但 CSCA 的几何和不等式部分需要从头补。优先集合→不等式→解析几何路径。",
    gapsEn: ["No plane analytic geometry (except lines and circles)", "Inequalities and sets are not AP focus", "Complex numbers and spatial geometry are completely outside the syllabus"],
    tipsEn: "Calculus is a strength, but CSCA's geometry and inequality sections need to be built from scratch. Follow the path: sets → inequalities → analytic geometry."
  },
  "alevel-math": {
    name: "A-Level Mathematics", strengths: ["Calculus (Pure 1-3)", "Trigonometry", "Algebraic manipulation"],
    gaps: ["圆锥曲线在 Pure 3/FM 但深度低于 CSCA", "立体几何不如 CSCA 体系化", "统计部分的题型不同（A-Level 偏计算，CSCA 偏概念判断）"],
    tips: "A-Level 学生整体最接近 CSCA 水平。补圆锥曲线的标准方程→参数互推和立体几何的空间坐标运算，然后大量刷 CSCA 风格的 48 题套卷适应 60 分钟节奏。",
    gapsEn: ["Conic sections appear in Pure 3/FM but at lower depth than CSCA", "Solid geometry is less systematic than CSCA", "Stats question types differ (A-Level leans computational, CSCA leans conceptual judgment)"],
    tipsEn: "A-Level students are overall closest to CSCA level. Build the conic-section standard equation → parameter conversion and spatial coordinate operations in solid geometry, then do plenty of CSCA-style 48-question sets to adapt to the 60-minute pace."
  },
  "ib-physics": {
    name: "IB Physics", strengths: ["Conceptual depth", "Lab methodology", "Energy analysis"],
    gaps: ["无计算器环境下的手算训练（IB 允许图形计算器）", "题目阅读量大但运算量小——CSCA 相反", "电磁学题目数多于 IB"],
    tips: "IB 学生的物理直觉好，但需要适应 CSCA 的定量计算节奏。重点练无计算器手算（尤其是开方、对数估算），以及 75 秒/题的答题速度。",
    gapsEn: ["Mental arithmetic without a calculator (IB allows graphic calculators)", "Questions have large reading load but small computation — the opposite of CSCA", "More electromagnetism questions than IB"],
    tipsEn: "IB students have good physics intuition but need to adapt to CSCA's quantitative computation pace. Focus on calculator-free mental arithmetic (especially square roots, logarithm estimation), and 75 seconds/question answering speed."
  },
  "ap-physics-1": {
    name: "AP Physics 1", strengths: ["Newtonian mechanics", "Energy conservation", "Algebra-based problem solving"],
    gaps: ["不考电磁学", "不考热力学第一定律", "波动物理覆盖不足"],
    tips: "力学底子好，但需要补电磁学、热学和近代物理模块。无计算器的环境对 AP 学生不陌生（AP 也只允许四功能计算器），重点补知识范围。",
    gapsEn: ["No electromagnetism", "No first law of thermodynamics", "Insufficient coverage of wave physics"],
    tipsEn: "Mechanics foundation is good, but electromagnetism, thermodynamics, and modern physics modules need to be added. The no-calculator environment is not unfamiliar to AP students (AP also allows only four-function calculators); focus on expanding knowledge coverage."
  },
  "alevel-physics": {
    name: "A-Level Physics", strengths: ["Comprehensive syllabus coverage", "Quantitative problem-solving", "EM and thermal physics depth"],
    gaps: ["阅读速度要求（A-Level 题干短，CSCA 题干可能长）", "选择题答题策略（A-Level 多用结构化大题）", "近代物理（光电效应等）不在所有 A-Level 考纲中"],
    tips: "A-Level 学生知识面最全。重点练 CSCA 选择题格式的 60 分钟计时训练，适应快速题干阅读。",
    gapsEn: ["Reading speed requirement (A-Level stems are short, CSCA stems may be long)", "Multiple-choice strategy (A-Level uses structured long questions)", "Modern physics (photoelectric effect, etc.) not in all A-Level syllabi"],
    tipsEn: "A-Level students have the broadest knowledge. Focus on CSCA multiple-choice format timed practice of 60 minutes to adapt to fast stem reading."
  },
  "ib-chem": {
    name: "IB Chemistry", strengths: ["Stoichiometry", "Bonding", "Organic chemistry"],
    gaps: ["摩尔计算只到中等深度，CSCA 可能有更复杂的多步计算", "无机物分类不如 CSCA 体系化", "电化学深度不足"],
    tips: "IB 学生的化学思维好，但 CSCA 有更多定量计算题（多步摩尔→浓度→pH 链）。练无计算器手算，尤其是摩尔相关。",
    gapsEn: ["Mole calculations only reach medium depth; CSCA may have more complex multi-step calculations", "Inorganic classification is less systematic than CSCA", "Insufficient electrochemistry depth"],
    tipsEn: "IB students have good chemistry thinking, but CSCA has more quantitative calculation questions (multi-step mole → concentration → pH chains). Practice calculator-free mental arithmetic, especially mole-related."
  },
  "ap-chem": {
    name: "AP Chemistry", strengths: ["Stoichiometry", "Thermochemistry", "Equilibrium"],
    gaps: ["有机化学不在 AP 考纲中", "无机物分类体系不足", "题量少（AP 60 题/90 分钟）→ CSCA（48 题/60 分钟）比 AP 更快"],
    tips: "AP 和 CSCA 最接近的知识覆盖。补有机化学基础和无机物分类，然后练 CSCA 的 60 分钟计时节奏（比 AP 更快）。",
    gapsEn: ["Organic chemistry is not in the AP syllabus", "Insufficient inorganic classification system", "Lower question count (AP 60 questions/90 min) → CSCA (48 questions/60 min) is faster than AP"],
    tipsEn: "AP has the closest knowledge coverage to CSCA. Build organic chemistry basics and inorganic classification, then practice CSCA's 60-minute timed pace (faster than AP)."
  },
  "alevel-chem": {
    name: "A-Level Chemistry", strengths: ["Comprehensive organic & physical chemistry", "Quantitative calculations", "Redox depth"],
    gaps: ["选择题答题速度（A-Level 多结构化答题，思维节奏不同）", "无机物分类部分不如中国体系化"],
    tips: "A-Level 化学接近 CSCA 水平。补无机物分类体系，练 CSCA 风格的多选一 60 分钟套卷。",
    gapsEn: ["Multiple-choice answering speed (A-Level uses structured answers, different thinking pace)", "Inorganic classification is less systematic than the Chinese system"],
    tipsEn: "A-Level chemistry is close to CSCA level. Build the inorganic classification system, and practice CSCA-style single-choice 60-minute sets."
  }
};

// ─────────────────────────────────────────────────────────────────────
// FOUNDATION FLOOR (地基) — the prerequisite layer BELOW the 48 exam topics.
// Differentiator vs csca.app (topic drill) & csca.id (past papers):
// this builds the Chinese high-school "floor" that IB/AP/A-Level students
// never got, and bridges each learner's existing curriculum to that floor.
// ─────────────────────────────────────────────────────────────────────
const FOUNDATION = {
  intro: `CSCA 的考点（圆锥曲线、导数、电磁学）都建在一层「中国高中数理地基」之上。IB / AP / A-Level 学生的课程路径不同，这层地板往往是缺的——他们的教材不会重复讲<b>实数分类、代数式手算、矢量分量、仪器读数</b>这些「基本功」。本模块专门补这层地板，并标注：你已学的 X 对应 CSCA 的哪块地基。这是 csca.app（直接讲考点）和 csca.id（刷真题）都没碰的空白。`,
  introEn: `CSCA's exam topics (conic sections, derivatives, electromagnetism) are all built on a layer of "Chinese high-school math and science foundations." IB / AP / A-Level students follow different curricula, so this floor is often missing — their textbooks don't re-teach the "basics" such as <b>number classification, by-hand algebra, vector components, and instrument reading</b>. This module is dedicated to patching that floor, and marks how what you've already learned (X) maps to which part of CSCA's foundation. This is the gap that csca.app (which teaches exam topics directly) and csca.id (which drills past papers) never touch.`,
  subjects: {
    math: {
      name: "数学", nameEn: "Mathematics", icon: "∑", color: "#002147",
      tagline: "在你碰 CSCA 圆锥曲线、导数之前，这层地板必须稳。",
      taglineEn: "Before you tackle CSCA conic sections and derivatives, this foundation must be solid.",
      floorSkills: [
        { id: "fm-realnum", name: "实数与数轴", nameEn: "Real numbers & number line", why: "CSCA 默认你一眼判断数的分类、区间、绝对值几何意义。", bridge: "IB/AP/A-Level 学生这块通常 OK；坑在绝对值不等式，需补充几何意义。", whyEn: "CSCA assumes you can instantly classify numbers, read intervals, and grasp the geometric meaning of absolute value.", bridgeEn: "IB/AP/A-Level students are usually fine here; the pitfall is absolute-value inequalities, where you need to add the geometric interpretation." },
        { id: "fm-algebra", name: "代数式与运算", nameEn: "Algebraic fluency", why: "展开、因式分解、分式化简——CSCA 全程手算，禁用计算器。", bridge: "IB/AP 学生最弱一环：长期依赖图形计算器，手算代数生疏。", lesson: true, whyEn: "Expanding, factoring, and simplifying fractions — CSCA requires by-hand calculation throughout; calculators are forbidden.", bridgeEn: "This is the weakest link for IB/AP students: long reliance on graphing calculators leaves their by-hand algebra rusty." },
        { id: "fm-coord", name: "平面直角坐标系", nameEn: "Coordinate system", why: "两点距离、中点、斜率、直线方程——解析几何的入口。", bridge: "A-Level 学生扎实（坐标几何强项）；AP 学生需习惯「横坐标/纵坐标」中文表述。", lesson: true, whyEn: "Distance between two points, midpoint, slope, line equations — the gateway to analytic geometry.", bridgeEn: "A-Level students are solid here (coordinate geometry is a strength); AP students need to get used to the Chinese x-/y-coordinate terms." },
        { id: "fm-func", name: "函数概念（定义域/值域/图像）", nameEn: "Function basics", why: "单调性、奇偶性、反函数靠它。", bridge: "IB/AP 学生函数底子好，但中文「单调性」「奇偶性」术语需对齐。", whyEn: "Monotonicity, parity (odd/even), and inverse functions all rest on this.", bridgeEn: "IB/AP students have a good function foundation, but the Chinese terms for monotonicity and parity need to be aligned." },
        { id: "fm-eq", name: "方程与不等式", nameEn: "Equations & inequalities", why: "一元二次、分式、绝对值不等式是高频题。", bridge: "IB 学生绝对值/分式不等式深度不足；AP 学生有理不等式 OK。", whyEn: "Quadratic, rational, and absolute-value inequalities are high-frequency problems.", bridgeEn: "IB students lack depth on absolute-value/rational inequalities; AP students handle rational inequalities fine." },
        { id: "fm-exp", name: "指数与对数基础", nameEn: "Exponents & logs", why: "log 运算、换底公式、指数方程。", bridge: "IB/AP 学生 log 概念有，但 CSCA 要求无计算器手算（记 lg2/lg3/lg7）。", whyEn: "Logarithm operations, the change-of-base formula, and exponential equations.", bridgeEn: "IB/AP students know the log concept, but CSCA demands calculator-free mental math (memorize lg2/lg3/lg7)." },
        { id: "fm-num", name: "数与式估算", nameEn: "Estimation", why: "75 秒/题节奏下，估算比精确算更保命。", bridge: "所有国际课程学生都需「去计算器」再训练——见手算训练模块。", whyEn: "At the CSCA pace of ~75 seconds per question, estimation saves more than exact calculation.", bridgeEn: "All international-curriculum students need 'calculator-detox' retraining — see the by-hand training module." }
      ],
      lessons: [
        {
          id: "fml-algebra", name: "代数式与运算", nameEn: "Algebraic Fluency",
          concept: `<p>CSCA 全程无计算器。任何化简、展开、因式分解必须<b>手算熟练</b>。核心心法：先看结构（完全平方？平方差？提取公因式？），再动手——不要盲目展开。</p>
          <p><b>为什么这是 IB/AP 学生的命门：</b>他们长期用图形计算器化简，手算因式分解和分式极易出错。CSCA 一上来就考纯代数，这块不稳，后面全塌。</p>`,
          conceptEn: `<p>CSCA uses no calculators at all. Any simplification, expansion, or factoring must be <b>fluent by hand</b>. Core principle: first read the structure (perfect square? difference of squares? common factor?), then act — don't blindly expand.</p>
          <p><b>Why this is the Achilles' heel of IB/AP students:</b> they have long relied on graphing calculators to simplify, so by-hand factoring and fractions are error-prone. CSCA opens with pure algebra; if this is shaky, everything after collapses.</p>`,
          formulas: [
            { left: "完全平方公式", right: "(a \\pm b)^2 = a^2 \\pm 2ab + b^2" },
            { left: "平方差公式", right: "a^2 - b^2 = (a-b)(a+b)" },
            { left: "提取公因式", right: "ax + ay = a(x + y)" },
            { left: "通分", right: "\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}" }
          ],
          example: {
            problem: "化简 (x+3)² − (x−1)(x+1)",
            steps: [
              "展开 (x+3)² = x² + 6x + 9",
              "展开 (x−1)(x+1) = x² − 1（平方差）",
              "相减：x² + 6x + 9 − (x² − 1) = x² + 6x + 9 − x² + 1",
              "合并：6x + 10",
              "答案：6x + 10"
            ],
            answer: "6x + 10",
            tip: "先分别展开再合并，别跳步。平方差 (x−1)(x+1) 直接出 x²−1 是基本功。"
          },
          exampleEn: {
            problem: "Simplify (x+3)² − (x−1)(x+1)",
            steps: [
              "Expand (x+3)² = x² + 6x + 9",
              "Expand (x−1)(x+1) = x² − 1 (difference of squares)",
              "Subtract: x² + 6x + 9 − (x² − 1) = x² + 6x + 9 − x² + 1",
              "Combine: 6x + 10",
              "Answer: 6x + 10"
            ],
            answer: "6x + 10",
            tip: "Expand each part first, then combine — don't skip steps. Recognizing (x−1)(x+1) = x²−1 directly is basic skill."
          },
          practice: [
            { q: "因式分解 x² − 5x + 6", a: "(x−2)(x−3)" },
            { q: "展开 (2x−1)²", a: "4x² − 4x + 1" },
            { q: "化简 (x²−4)/(x+2)", a: "x−2" }
          ],
          practiceEn: [
            { q: "Factor x² − 5x + 6", a: "(x−2)(x−3)" },
            { q: "Expand (2x−1)²", a: "4x² − 4x + 1" },
            { q: "Simplify (x²−4)/(x+2)", a: "x−2" }
          ],
          bridge: "IB AA 学生：习惯图形计算器化简，手算因式分解易错。AP 学生：多项式还行，分式化简节奏慢。建议每天 5 道纯手算代数题热手。",
          bridgeEn: "IB AA students: used to graphing calculators for simplification, prone to by-hand factoring errors. AP students: polynomials are okay, but fraction simplification is slow. Suggest 5 by-hand algebra problems daily as warm-up."
        },
        {
          id: "fml-coord", name: "平面直角坐标系", nameEn: "Coordinate System",
          concept: `<p>平面上点用 (x, y) 表示。这是解析几何的地基——后面所有直线、圆、圆锥曲线都从这里长出来。</p>
          <p><b>核心三件套：</b>距离公式、中点公式、斜率公式。看到「求直线方程」先想斜率，再想点斜式。</p>`,
          conceptEn: `<p>A point on the plane is written as (x, y). This is the foundation of analytic geometry — every line, circle, and conic section later grows from here.</p>
          <p><b>The core trio:</b> the distance formula, the midpoint formula, and the slope formula. When you see "find the line equation," think slope first, then point-slope form.</p>`,
          formulas: [
            { left: "两点距离", right: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}" },
            { left: "中点坐标", right: "M = \\left( \\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2} \\right)" },
            { left: "斜率", right: "k = \\frac{y_2-y_1}{x_2-x_1}" },
            { left: "点斜式直线方程", right: "y - y_1 = k(x - x_1)" }
          ],
          example: {
            problem: "点 A(1, 2), B(4, 6)，求 AB 距离与斜率。",
            steps: [
              "距离：d = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5",
              "斜率：k = (6−2)/(4−1) = 4/3",
              "答案：距离 5，斜率 4/3"
            ],
            answer: "距离 5，斜率 4/3",
            tip: "横坐标 = x，纵坐标 = y。中文题干常用「横坐标/纵坐标」，别搞反。"
          },
          exampleEn: {
            problem: "Points A(1, 2), B(4, 6); find distance AB and the slope.",
            steps: [
              "Distance: d = √((4−1)² + (6−2)²) = √(9 + 16) = √25 = 5",
              "Slope: k = (6−2)/(4−1) = 4/3",
              "Answer: distance 5, slope 4/3"
            ],
            answer: "distance 5, slope 4/3",
            tip: "x-coordinate = x, y-coordinate = y. Chinese problems often say '横坐标/纵坐标' (horizontal/vertical coordinate) — don't reverse them."
          },
          practice: [
            { q: "(0,0) 与 (2,4) 的中点？", a: "(1,2)" },
            { q: "(1,1) 与 (3,5) 的斜率？", a: "2" },
            { q: "(0,0) 与 (3,4) 的距离？", a: "5" }
          ],
          practiceEn: [
            { q: "Midpoint of (0,0) and (2,4)?", a: "(1,2)" },
            { q: "Slope of (1,1) and (3,5)?", a: "2" },
            { q: "Distance between (0,0) and (3,4)?", a: "5" }
          ],
          bridge: "A-Level 学生这块最扎实（坐标几何是强项）。IB 学生偏应用。AP Precalc 学生：坐标系 OK，但需习惯中文「横坐标/纵坐标」表述和「点斜式」写法。",
          bridgeEn: "A-Level students are most solid here (coordinate geometry is a strength). IB students lean applied. AP Precalc students: the coordinate system is fine, but they need to get used to the Chinese x-/y-coordinate wording and the point-slope form."
        },
        {
          id: "fml-realnum", name: "实数与数轴", nameEn: "Real Numbers & Number Line",
          concept: `<p>实数 = 有理数（整数、分数）+ 无理数（√2、π 等无限不循环小数）。绝对值 |a| 是数到原点的距离，永远非负。</p>
          <p><b>CSCA 常用：</b>区间表示 [ ] 闭、 ( ) 开；绝对值几何意义（|x−a| 表示 x 到 a 的距离）。</p>`,
          conceptEn: `<p>Real numbers = rational numbers (integers, fractions) + irrational numbers (√2, π, etc., non-terminating non-repeating decimals). The absolute value |a| is the distance from the number to the origin, always non-negative.</p>
          <p><b>Commonly used in CSCA:</b> interval notation [ ] for closed, ( ) for open; the geometric meaning of absolute value (|x−a| means the distance from x to a).</p>`,
          formulas: [
            { left: "绝对值", right: "|a| = a \\;(a\\ge0),\\; -a \\;(a<0)" },
            { left: "有理数", right: "\\text{可写为 }\\frac{p}{q}\\;(q\\neq0)" },
            { left: "无理数", right: "\\text{无限不循环小数}" },
            { left: "区间", right: "(a,b)\\text{ 开},\\[a,b]\\text{ 闭},\\[a,b)\\text{ 半开}" }
          ],
          example: {
            problem: "比较大小：√3, 1.7, 5/3",
            steps: [
              "√3 ≈ 1.732",
              "1.7",
              "5/3 ≈ 1.667",
              "所以 5/3 < 1.7 < √3"
            ],
            answer: "5/3 < 1.7 < √3",
            tip: "无理数的大小比较，常平方或取近似。记住 √3≈1.732, √2≈1.414 是肌肉记忆。"
          },
          exampleEn: {
            problem: "Compare: √3, 1.7, 5/3",
            steps: [
              "√3 ≈ 1.732",
              "1.7",
              "5/3 ≈ 1.667",
              "So 5/3 < 1.7 < √3"
            ],
            answer: "5/3 < 1.7 < √3",
            tip: "To compare irrationals, often square them or take approximations. Memorizing √3≈1.732, √2≈1.414 is muscle memory."
          },
          practice: [
            { q: "|-4| + |3| = ?", a: "7" },
            { q: "√2 是有理数还是无理数？", a: "无理数" },
            { q: "区间 (1,3] 包含 3 吗？", a: "包含" }
          ],
          practiceEn: [
            { q: "|-4| + |3| = ?", a: "7" },
            { q: "Is √2 rational or irrational?", a: "irrational" },
            { q: "Does the interval (1,3] include 3?", a: "yes" }
          ],
          bridge: "IB/AP/A-Level 学生这块都还好。CSCA 真正的坑在「绝对值不等式 |x−2|<3 的解集」——顺手复习绝对值几何意义。",
          bridgeEn: "IB/AP/A-Level students are generally fine here. CSCA's real trap is the 'absolute-value inequality |x−2|<3 solution set' — brush up on the geometric meaning of absolute value."
        }
      ]



    },
    physics: {
      name: "物理", nameEn: "Physics", icon: "atom", color: "#4a6fa5",
      tagline: "力学、电磁学都建在矢量、单位、仪器读数这三块地板上。",
      taglineEn: "Mechanics and electromagnetism are both built on three floors: vectors, units, and instrument reading.",
      floorSkills: [
        { id: "fp-vector", name: "矢量运算", nameEn: "Vector algebra", why: "力、速度、位移都是矢量，分量加减、点积必须手算。", bridge: "IB/AP 学生习惯计算器做矢量，分量手算易错。", lesson: true, whyEn: "Force, velocity, and displacement are all vectors; component-wise addition/subtraction and the dot product must be done by hand.", bridgeEn: "IB/AP students are used to calculators for vectors, so by-hand components are error-prone." },
        { id: "fp-unit", name: "单位与量纲", nameEn: "Units & dimensions", why: "SI 单位换算 + 量纲分析检验公式，CSCA 选择题常考。", bridge: "量纲分析是中国物理「招牌技能」，IB/AP 几乎不练。", lesson: true, whyEn: "SI unit conversion plus dimensional analysis to check formulas — a common CSCA multiple-choice topic.", bridgeEn: "Dimensional analysis is a 'signature skill' of Chinese physics; IB/AP almost never practice it." },
        { id: "fp-instrument", name: "仪器读数", nameEn: "Instrument reading", why: "游标卡尺、螺旋测微器、电表读数——中国实验必考。", bridge: "「中国特色」考点，IB/AP/A-Level 基本不考，共同盲区。", lesson: true, whyEn: "Vernier caliper, micrometer screw gauge, and meter reading — mandatory in Chinese lab exams.", bridgeEn: "A 'China-specific' topic that IB/AP/A-Level basically never test — a shared blind spot." },
        { id: "fp-kinematics", name: "运动学基础", nameEn: "Kinematics", why: "位移/速度/加速度定义 + 匀变速公式。", bridge: "IB/AP/A-Level 都覆盖，但中文「位移/路程」区分需留意。", whyEn: "Definitions of displacement/velocity/acceleration plus uniformly accelerated motion formulas.", bridgeEn: "Covered by IB/AP/A-Level, but watch the Chinese distinction between displacement and distance." },
        { id: "fp-newton", name: "受力分析与牛顿定律", nameEn: "Forces & Newton", why: "画受力图 → 列 F=ma 是力学地基。", bridge: "AP Physics 1 学生最强；IB 学生偏概念，定量需练。", whyEn: "Drawing a free-body diagram → writing F=ma is the foundation of mechanics.", bridgeEn: "AP Physics 1 students are strongest here; IB students lean conceptual and need quantitative practice." },
        { id: "fp-energy", name: "功与能", nameEn: "Work & energy", why: "W=Fs、动能定理、机械能守恒。", bridge: "IB 学生能量分析好；A-Level 学生最全。", whyEn: "W=Fs, the work-energy theorem, and conservation of mechanical energy.", bridgeEn: "IB students are good at energy analysis; A-Level students cover it most completely." },
        { id: "fp-graph", name: "图像法（v-t 图、F-x 图）", nameEn: "Graph methods", why: "斜率、面积代表的物理量——CSCA 高频。", bridge: "国际课程都画图像，但中文「图线的斜率/截距」表述要熟悉。", whyEn: "What slope and area represent physically — a high-frequency CSCA topic.", bridgeEn: "International curricula all draw graphs, but you must get familiar with the Chinese phrasing for slope/intercept of the graph." }
      ],
      lessons: [
        {
          id: "fpl-vector", name: "矢量运算", nameEn: "Vector Algebra",
          concept: `<p>矢量是<b>带方向</b>的量（力、速度、位移）。运算：加减用分量相加；点积 a·b = |a||b|cosθ，也等于分量乘积之和。</p>
          <p><b>为什么是 IB/AP 命门：</b>他们习惯用计算器做矢量，无计算器时分量加减、点积极易算错。CSCA 全程手算。</p>`,
          conceptEn: `<p>A vector is a quantity <b>with direction</b> (force, velocity, displacement). Operations: add/subtract by components; dot product a·b = |a||b|cosθ, also equal to the sum of component products.</p>
          <p><b>Why it's the Achilles' heel of IB/AP:</b> they are used to calculators for vectors, so without one, component addition and dot products are easily miscalculated. CSCA is by-hand throughout.</p>`,
          formulas: [
            { left: "矢量大小", right: "|\\vec{a}| = \\sqrt{a_x^2 + a_y^2}" },
            { left: "加减（分量）", right: "\\vec{a} \\pm \\vec{b} = (a_x\\pm b_x,\\; a_y\\pm b_y)" },
            { left: "点积", right: "\\vec{a}\\cdot\\vec{b} = a_x b_x + a_y b_y = |a||b|\\cos\\theta" },
            { left: "单位矢量", right: "\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|}" }
          ],
          example: {
            problem: "矢量 a=(3,4), b=(1,2)，求 a+b 与 |a|。",
            steps: [
              "a+b = (3+1, 4+2) = (4, 6)",
              "|a| = √(3² + 4²) = √(9+16) = √25 = 5",
              "答案：a+b=(4,6)，|a|=5"
            ],
            answer: "a+b=(4,6)，|a|=5",
            tip: "矢量题先写成分量，再逐项算。勾股数 (3,4,5) 要一眼认出。"
          },
          exampleEn: {
            problem: "Vectors a=(3,4), b=(1,2); find a+b and |a|.",
            steps: [
              "a+b = (3+1, 4+2) = (4, 6)",
              "|a| = √(3² + 4²) = √(9+16) = √25 = 5",
              "Answer: a+b=(4,6), |a|=5"
            ],
            answer: "a+b=(4,6), |a|=5",
            tip: "Write vectors in components first, then compute term by term. Recognize Pythagorean triples like (3,4,5) at a glance."
          },
          practice: [
            { q: "a=(3,4) 的大小？", a: "5" },
            { q: "a=(1,0), b=(0,1) 的点积？", a: "0" },
            { q: "2a, 其中 a=(2,3)？", a: "(4,6)" }
          ],
          practiceEn: [
            { q: "Magnitude of a=(3,4)?", a: "5" },
            { q: "Dot product of a=(1,0), b=(0,1)?", a: "0" },
            { q: "2a, where a=(2,3)?", a: "(4,6)" }
          ],
          bridge: "IB/AP 学生习惯计算器做矢量；A-Level 学生矢量运算较熟。重点练：无计算器下的分量加减与点积。",
          bridgeEn: "IB/AP students are used to calculators for vectors; A-Level students are more practiced. Focus on: component addition and dot products without a calculator."
        },
        {
          id: "fpl-unit", name: "单位与量纲", nameEn: "Units & Dimensions",
          concept: `<p>SI 七个基本单位：米 m、千克 kg、秒 s、安 A、开 K、摩 mol、坎 cd。量纲分析（用 [M][L][T] 表示）可<b>检验公式对错</b>——CSCA 选择题常考。</p>
          <p><b>为什么是中国物理招牌：</b>IB/AP 学生几乎不练量纲，但 CSCA 很爱考「下列哪个单位正确」。</p>`,
          conceptEn: `<p>The seven SI base units: meter m, kilogram kg, second s, ampere A, kelvin K, mole mol, candela cd. Dimensional analysis (using [M][L][T]) can <b>check whether a formula is right</b> — a common CSCA multiple-choice topic.</p>
          <p><b>Why it's a hallmark of Chinese physics:</b> IB/AP students almost never practice dimensions, but CSCA loves asking 'which of the following units is correct.'</p>`,
          formulas: [
            { left: "速度", right: "v = \\frac{s}{t} \\; [LT^{-1}]" },
            { left: "加速度", right: "a = \\frac{v}{t} \\; [LT^{-2}]" },
            { left: "力", right: "F = ma \\; [MLT^{-2}]" },
            { left: "功", right: "W = Fs \\; [ML^2T^{-2}]" }
          ],
          example: {
            problem: "检验动能公式 ½mv² 的量纲是否正确。",
            steps: [
              "m 的量纲 [M]",
              "v² 的量纲 [L/T]² = [L²T⁻²]",
              "½mv² 的量纲 = [M][L²T⁻²] = [ML²T⁻²]",
              "与功 W=Fs 量纲一致，正确"
            ],
            answer: "量纲正确 [ML²T⁻²]",
            tip: "量纲对了公式不一定对（系数可能错），但量纲错公式必错——这是快速排除选项的法宝。"
          },
          exampleEn: {
            problem: "Check whether the dimensional formula of kinetic energy ½mv² is correct.",
            steps: [
              "Dimension of m is [M]",
              "Dimension of v² is [L/T]² = [L²T⁻²]",
              "Dimension of ½mv² = [M][L²T⁻²] = [ML²T⁻²]",
              "Matches the dimension of work W=Fs, so correct"
            ],
            answer: "Dimension correct: [ML²T⁻²]",
            tip: "Correct dimensions don't guarantee a correct formula (the coefficient may be wrong), but wrong dimensions guarantee a wrong formula — a great way to eliminate options fast."
          },
          practice: [
            { q: "加速度的单位？", a: "m/s²" },
            { q: "力的单位 kg·m/s² 叫做？", a: "牛顿 N" },
            { q: "功率的单位 J/s 叫做？", a: "瓦特 W" }
          ],
          practiceEn: [
            { q: "Unit of acceleration?", a: "m/s²" },
            { q: "The unit kg·m/s² is called?", a: "newton N" },
            { q: "The unit J/s is called?", a: "watt W" }
          ],
          bridge: "量纲分析是中国物理招牌技能，IB/AP 学生很少用。CSCA 选择题常考单位换算与量纲判断，建议背熟 7 个基本单位。",
          bridgeEn: "Dimensional analysis is a signature skill of Chinese physics, rarely used by IB/AP students. CSCA multiple-choice often tests unit conversion and dimension checks — memorize the 7 base units."
        },
        {
          id: "fpl-instrument", name: "仪器读数", nameEn: "Instrument Reading",
          concept: `<p>游标卡尺、螺旋测微器、刻度尺、秒表、电表——中国物理实验必考。铁律：<b>估读到最小分度下一位</b>。</p>
          <p><b>这是所有国际课程学生的共同盲区</b>：IB/AP/A-Level 几乎不考仪器读数，中国教材却把它当基本功。</p>`,
          conceptEn: `<p>Vernier caliper, micrometer screw gauge, ruler, stopwatch, meter — all mandatory in Chinese physics lab exams. Iron rule: <b>estimate one digit beyond the smallest division</b>.</p>
          <p><b>This is a shared blind spot for all international-curriculum students:</b> IB/AP/A-Level almost never test instrument reading, yet Chinese textbooks treat it as basic skill.</p>`,
          formulas: [
            { left: "刻度尺", right: "\\text{估读到 mm 下一位 (0.1 mm)}" },
            { left: "游标卡尺 (50分度)", right: "\\text{主尺} + \\text{对齐格}\\times 0.02\\,\\text{mm}" },
            { left: "螺旋测微器", right: "\\text{主尺} + \\text{可动刻度}\\times 0.01\\,\\text{mm}" },
            { left: "秒表", right: "\\text{小盘分钟} + \\text{大盘秒}" }
          ],
          example: {
            problem: "50 分度游标卡尺，主尺 12 mm，游标第 8 格对齐，读数为？",
            steps: [
              "精度 = 1/50 mm = 0.02 mm",
              "主尺读数 = 12 mm",
              "游标读数 = 8 × 0.02 = 0.16 mm",
              "总读数 = 12 + 0.16 = 12.16 mm",
              "答案：12.16 mm"
            ],
            answer: "12.16 mm",
            tip: "游标卡尺<b>不估读</b>（精度即末位）；螺旋测微器<b>要估读</b>到 0.001 mm。"
          },
          exampleEn: {
            problem: "A 50-division vernier caliper: main scale reads 12 mm, the 8th vernier division aligns. What is the reading?",
            steps: [
              "Precision = 1/50 mm = 0.02 mm",
              "Main scale reading = 12 mm",
              "Vernier reading = 8 × 0.02 = 0.16 mm",
              "Total reading = 12 + 0.16 = 12.16 mm",
              "Answer: 12.16 mm"
            ],
            answer: "12.16 mm",
            tip: "A vernier caliper <b>is not estimated</b> (precision equals the last digit); a micrometer screw gauge <b>must be estimated</b> to 0.001 mm."
          },
          practice: [
            { q: "螺旋测微器主尺 5 mm，可动 23.5 格，读数？", a: "5.235 mm" },
            { q: "10 分度游标主尺 20 mm，第 3 格对齐，读数？", a: "20.3 mm" },
            { q: "刻度尺读 3.45 cm，末位 5 表示？", a: "估读位" }
          ],
          practiceEn: [
            { q: "Micrometer: main scale 5 mm, thimble 23.5 divisions, reading?", a: "5.235 mm" },
            { q: "10-division vernier: main scale 20 mm, 3rd division aligns, reading?", a: "20.3 mm" },
            { q: "Ruler reads 3.45 cm; what does the final 5 represent?", a: "estimated digit" }
          ],
          bridge: "仪器读数是「中国特色」考点，几乎不在 IB/AP/A-Level 中。所有国际课程学生的共同盲区，必须专门练——这是 CSCA 物理最容易白丢分的地方。",
          bridgeEn: "Instrument reading is a 'China-specific' topic, barely present in IB/AP/A-Level. A shared blind spot for all international students — it must be practiced specifically, since it's where CSCA physics points are easiest to lose for free."
        }
      ],
      ibMap: "IB 平衡覆盖，CSCA 重常数",
      ibMapEn: "IB covers equilibrium; CSCA emphasizes constants",
      apMap: "AP 化学平衡覆盖",
      apMapEn: "AP covers chemical equilibrium",
      aLevelMap: "A-Level 平衡为模块考点",
      aLevelMapEn: "A-Level equilibrium is a module examined topic"
    },
    chemistry: {
      name: "化学", nameEn: "Chemistry", icon: "flask", color: "#0f766e",
      tagline: "原子结构、化学键、方程式配平——摩尔计算的前三块砖。",
      taglineEn: "Atomic structure, chemical bonding, equation balancing — the first three bricks before mole calculations.",
      floorSkills: [
        { id: "fc-atom", name: "原子结构", nameEn: "Atomic structure", why: "核素符号 ᴬZX、质子/中子/电子数关系。", bridge: "IB/AP/A-Level 都覆盖，但中文「核素符号」「能层能级」表述不同。", lesson: true, whyEn: "Nuclide notation ᴬZX, and the relationships among proton/neutron/electron counts.", bridgeEn: "Covered by IB/AP/A-Level, but the Chinese terms for nuclide notation and shells/sub-shells differ." },
        { id: "fc-bond", name: "化学键与分子构型", nameEn: "Bonding & VSEPR", why: "离子键/共价键 + VSEPR 判断构型。", bridge: "VSEPR 是共有内容，但中文「σ键/π键」「极性」术语需对齐。", lesson: true, whyEn: "Ionic/covalent bonds plus VSEPR for predicting geometry.", bridgeEn: "VSEPR is common content, but the Chinese terms for sigma/pi bonds and polarity need alignment." },
        { id: "fc-balance", name: "化学方程式配平", nameEn: "Equation balancing", why: "质量守恒，氧化还原用电子守恒法。", bridge: "IB/AP 用半反应法，中国教材用电子守恒法，结果一致。", lesson: true, whyEn: "Conservation of mass; redox uses the electron-conservation method.", bridgeEn: "IB/AP use the half-reaction method; Chinese textbooks use the electron-conservation method — same result." },
        { id: "fc-periodic", name: "元素周期律", nameEn: "Periodic law", why: "周期表结构 + 半径/金属性/非金属性递变。", bridge: "IB/AP/A-Level 都覆盖，递变规律表述一致。", whyEn: "Periodic table structure plus trends in radius, metallicity, and non-metallicity.", bridgeEn: "Covered by IB/AP/A-Level; the trend descriptions agree." },
        { id: "fc-equiv", name: "电解质与离子反应", nameEn: "Electrolytes & ions", why: "离子方程式、沉淀/气体/水生成。", bridge: "中文「离子方程式」写法需熟悉；AP 学生离子反应 OK。", whyEn: "Ionic equations, and formation of precipitate/gas/water.", bridgeEn: "Get familiar with the Chinese ionic-equation notation; AP students are fine with ionic reactions." },
        { id: "fc-mole", name: "物质的量（摩尔）", nameEn: "Mole concept", why: "n=m/M=cV，化学计算的通用货币。", bridge: "IB/AP/A-Level 都扎实，见 CSCA 基础课 chem-mole 主题。", whyEn: "n=m/M=cV — the universal currency of chemical calculation.", bridgeEn: "Solid for IB/AP/A-Level; see the CSCA basics chem-mole topic." },
        { id: "fc-redox", name: "氧化还原反应", nameEn: "Redox", why: "氧化数、电子转移、配平。", bridge: "A-Level 学生 redox 最深；IB/AP 用半反应法。", whyEn: "Oxidation numbers, electron transfer, and balancing.", bridgeEn: "A-Level students go deepest on redox; IB/AP use the half-reaction method." }
      ],
      lessons: [
        {
          id: "fcl-atom", name: "原子结构", nameEn: "Atomic Structure",
          concept: `<p>原子 = 原子核（质子 + 中子）+ 核外电子。中性原子：<b>原子序数 = 质子数 = 核电荷数 = 核外电子数</b>。质量数 A = 质子数 Z + 中子数 N。</p>
          <p>核素符号记作 ᴬZX（X 为元素符号，A 左上，Z 左下）。</p>`,
          conceptEn: `<p>An atom = the nucleus (protons + neutrons) + orbital electrons. For a neutral atom: <b>atomic number = proton count = nuclear charge = electron count</b>. Mass number A = proton number Z + neutron number N.</p>
          <p>Nuclide notation is written ᴬZX (X is the element symbol, A upper-left, Z lower-left).</p>`,
          formulas: [
            { left: "核素符号", right: "{}^{A}_{Z}X" },
            { left: "中子数", right: "N = A - Z" },
            { left: "中性原子电子数", right: "e^- = Z" },
            { left: "相对原子质量", right: "\\sum (\\text{同位素质量} \\times \\text{丰度})" }
          ],
          example: {
            problem: "¹⁶O 的质子数、中子数、电子数各是多少？",
            steps: [
              "氧原子序数 Z = 8 → 质子数 = 8",
              "质量数 A = 16",
              "中子数 = A − Z = 16 − 8 = 8",
              "中性原子电子数 = 质子数 = 8",
              "答案：8, 8, 8"
            ],
            answer: "质子 8，中子 8，电子 8",
            tip: "看到 ᴬZX，A 是左上（质量数），Z 是左下（质子数）。别搞反。"
          },
          exampleEn: {
            problem: "For ¹⁶O, what are the proton, neutron, and electron counts?",
            steps: [
              "Oxygen atomic number Z = 8 → protons = 8",
              "Mass number A = 16",
              "Neutrons = A − Z = 16 − 8 = 8",
              "Electrons in a neutral atom = protons = 8",
              "Answer: 8, 8, 8"
            ],
            answer: "protons 8, neutrons 8, electrons 8",
            tip: "In ᴬZX, A is upper-left (mass number), Z is lower-left (proton number). Don't reverse them."
          },
          practice: [
            { q: "¹²C 的中子数？", a: "6" },
            { q: "²³⁵U 的质子数？", a: "92" },
            { q: "Cl⁻ 的电子数？（Cl 原子序数 17）", a: "18" }
          ],
          practiceEn: [
            { q: "Neutron count of ¹²C?", a: "6" },
            { q: "Proton count of ²³⁵U?", a: "92" },
            { q: "Electron count of Cl⁻? (Cl atomic number 17)", a: "18" }
          ],
          bridge: "IB/AP/A-Level 都覆盖原子结构，但中国教材强调「核素符号」写法和电子排布（能层/能级/轨道）。建议复习电子排布式与轨道表示。",
          bridgeEn: "IB/AP/A-Level all cover atomic structure, but Chinese textbooks stress the nuclide-notation form and electron configuration (shells/sub-shells/orbitals). Review electron configuration notation and orbital diagrams."
        },
        {
          id: "fcl-bond", name: "化学键与分子构型", nameEn: "Bonding & VSEPR",
          concept: `<p>三种化学键：<b>离子键</b>（金属+非金属，电子转移）、<b>共价键</b>（非金属间，电子共用）、<b>金属键</b>。VSEPR 模型按中心原子周围「电子对总数」判断构型。</p>
          <p>电子对总数 = 成键电子对 + 孤对电子。2→直线，3→平面三角，4→四面体。</p>`,
          conceptEn: `<p>Three types of chemical bonds: <b>ionic</b> (metal + non-metal, electron transfer), <b>covalent</b> (between non-metals, electron sharing), and <b>metallic</b>. The VSEPR model predicts geometry from the 'total electron pairs' around the central atom.</p>
          <p>Total electron pairs = bonding pairs + lone pairs. 2 → linear, 3 → trigonal planar, 4 → tetrahedral.</p>`,
          formulas: [
            { left: "离子键", right: "\\text{静电吸引（电子转移）}" },
            { left: "共价键", right: "\\text{共用电子对}" },
            { left: "VSEPR: 2 对", right: "\\text{直线形}" },
            { left: "VSEPR: 4 对", right: "\\text{四面体}" }
          ],
          example: {
            problem: "CO₂ 的分子构型是什么？",
            steps: [
              "C 为中心原子，与 2 个 O 形成双键",
              "中心原子周围电子对总数 = 2（无孤对电子）",
              "sp 杂化 → 直线形",
              "答案：直线形"
            ],
            answer: "直线形",
            tip: "先数中心原子电子对（成键+孤对），再看构型。H₂O 有 2 孤对→折线形，CH₄ 无孤对→正四面体。"
          },
          exampleEn: {
            problem: "What is the molecular geometry of CO₂?",
            steps: [
              "C is the central atom, forming double bonds with 2 O atoms",
              "Total electron pairs around the central atom = 2 (no lone pairs)",
              "sp hybridization → linear",
              "Answer: linear"
            ],
            answer: "linear",
            tip: "First count the central atom's electron pairs (bonding + lone), then read the geometry. H₂O has 2 lone pairs → bent; CH₄ has none → regular tetrahedron."
          },
          practice: [
            { q: "H₂O 的分子构型？", a: "折线形 / V 形" },
            { q: "CH₄ 的分子构型？", a: "正四面体" },
            { q: "NaCl 的化学键类型？", a: "离子键" }
          ],
          practiceEn: [
            { q: "Molecular geometry of H₂O?", a: "bent / V-shaped" },
            { q: "Molecular geometry of CH₄?", a: "regular tetrahedron" },
            { q: "Type of chemical bond in NaCl?", a: "ionic bond" }
          ],
          bridge: "分子构型（VSEPR）是 IB/AP/A-Level 共有内容，但中文「极性/非极性」「σ键/π键」术语表述不同。建议建一张中英术语对照表。",
          bridgeEn: "Molecular geometry (VSEPR) is common to IB/AP/A-Level, but the Chinese terms for polar/non-polar and sigma/pi bonds differ. Build a Chinese-English terminology table."
        },
        {
          id: "fcl-balance", name: "化学方程式配平", nameEn: "Equation Balancing",
          concept: `<p>质量守恒——反应前后各元素原子数相等。方法：<b>观察法</b>、<b>最小公倍数法</b>；氧化还原反应用<b>电子得失守恒</b>（升价总数 = 降价总数）。</p>
          <p>配平是化学基本功，CSCA 所有计算题的前提。</p>`,
          conceptEn: `<p>Conservation of mass — the number of each element's atoms is equal before and after the reaction. Methods: <b>inspection</b>, <b>least-common-multiple</b>; redox uses <b>electron gain-loss conservation</b> (total oxidation gain = total reduction loss).</p>
          <p>Balancing is basic chemical skill and the prerequisite for all CSCA calculation problems.</p>`,
          formulas: [
            { left: "质量守恒", right: "\\text{各元素原子数 LHS = RHS}" },
            { left: "氧化还原", right: "\\text{升价总数} = \\text{降价总数}" },
            { left: "离子方程式", right: "\\text{保留离子，删旁观离子}" }
          ],
          example: {
            problem: "配平 Fe + O₂ → Fe₃O₄",
            steps: [
              "右边 Fe₃O₄ 含 3 个 Fe、4 个 O",
              "左边 O 来自 O₂，需 2 个 O₂ 提供 4 个 O",
              "左边 Fe 需 3 个匹配右边 3 个 Fe",
              "结果：3Fe + 2O₂ → Fe₃O₄"
            ],
            answer: "3Fe + 2O₂ → Fe₃O₄",
            tip: "先配氧原子（常出现在 O₂ 中成双），再回头配金属。配平后检查各元素左右相等。"
          },
          exampleEn: {
            problem: "Balance Fe + O₂ → Fe₃O₄",
            steps: [
              "Right side Fe₃O₄ contains 3 Fe and 4 O",
              "Left-side O comes from O₂, so 2 O₂ supply 4 O",
              "Left-side Fe needs 3 to match the 3 Fe on the right",
              "Result: 3Fe + 2O₂ → Fe₃O₄"
            ],
            answer: "3Fe + 2O₂ → Fe₃O₄",
            tip: "Balance oxygen first (it often comes in pairs from O₂), then go back to the metal. After balancing, check each element is equal on both sides."
          },
          practice: [
            { q: "H₂ + O₂ → H₂O 配平？", a: "2H₂ + O₂ → 2H₂O" },
            { q: "C + O₂ → CO₂ 配平？", a: "已配平" },
            { q: "Zn + HCl → ZnCl₂ + H₂ 配平？", a: "Zn + 2HCl → ZnCl₂ + H₂" }
          ],
          practiceEn: [
            { q: "Balance H₂ + O₂ → H₂O?", a: "2H₂ + O₂ → 2H₂O" },
            { q: "Balance C + O₂ → CO₂?", a: "already balanced" },
            { q: "Balance Zn + HCl → ZnCl₂ + H₂?", a: "Zn + 2HCl → ZnCl₂ + H₂" }
          ],
          bridge: "配平是化学基本功，所有课程都练，但中文题干「配平」「系数」需熟悉。氧化还原配平 IB/AP 用半反应法，中国教材用电子守恒法，方法不同结果一致。",
          bridgeEn: "Balancing is basic chemistry practiced in all curricula, but get familiar with the Chinese terms for balance and coefficient. Redox balancing uses the half-reaction method in IB/AP and the electron-conservation method in Chinese textbooks — different methods, same result."
        }
      ]
    }
  }
};

// ── Reading training passages (Level 2 short academic + Level 3 real scenarios) ──
const READING = [
  {
    id: "l2-method",
    level: 2,
    scene: "短篇学术 · 科学方法",
    title: "好的科学问题",
    text: "科学研究的第一步是提出问题。一个好的科学问题必须是可测量的、可验证的。例如，植物的生长速度受光照强度影响吗？就是一个典型的科学问题。实验设计需要考虑三个要素：自变量（研究者主动改变的量，如光照强度）、因变量（随自变量变化而被测量的量，如植物高度）和控制变量（需要保持相同的条件，如温度、湿度、土壤类型）。只有严格控制所有无关变量，实验结论才具有可靠性。",
    qs: [
      { q: "文中认为好的科学问题应具备什么特征？", opts: ["可测量、可验证", "复杂、深奥", "简单、直接", "有趣、流行"], ans: 0 },
      { q: "实验设计的三个要素是什么？", opts: ["自变量、因变量、控制变量", "温度、湿度、土壤", "光照、水分、时间", "实验、数据、结论"], ans: 0 },
      { q: "控制变量是指？", opts: ["需要保持相同的条件", "研究者主动改变的量", "被测量的量", "实验的最终结果"], ans: 0 },
      { q: "控制无关变量的目的是？", opts: ["保证结论的可靠性", "提高实验速度", "降低成本", "简化设计"], ans: 0 },
      { q: "文中植物的生长速度受光照强度影响吗属于？", opts: ["典型的科学问题", "实验结论", "控制变量", "因变量"], ans: 0 }
    ],
    sceneEn: "Short academic · Scientific method",
    titleEn: "Good scientific questions",
    textEn: "The first step of scientific research is to ask a question. A good scientific question must be measurable and verifiable. For example, 'Does the growth rate of plants depend on light intensity?' is a typical scientific question. Experimental design requires consideration of three elements: the independent variable (the quantity the researcher deliberately changes, such as light intensity), the dependent variable (the quantity measured as it changes with the independent variable, such as plant height), and the controlled variable (conditions that must be kept the same, such as temperature, humidity, and soil type). Only by strictly controlling all irrelevant variables can the experimental conclusion be considered reliable.",
    qsEn: [
      { q: "According to the passage, what characteristics should a good scientific question have?", opts: ["Measurable and verifiable", "Complex and profound", "Simple and direct", "Interesting and popular"], ans: 0 },
      { q: "What are the three elements of experimental design?", opts: ["Independent, dependent, and controlled variables", "Temperature, humidity, soil", "Light, water, time", "Experiment, data, conclusion"], ans: 0 },
      { q: "What is a controlled variable?", opts: ["A condition that must be kept the same", "The quantity the researcher deliberately changes", "The quantity being measured", "The final result of the experiment"], ans: 0 },
      { q: "What is the purpose of controlling irrelevant variables?", opts: ["To ensure the reliability of the conclusion", "To speed up the experiment", "To reduce cost", "To simplify the design"], ans: 0 },
      { q: "In the passage, 'Does the growth rate of plants depend on light intensity?' is an example of?", opts: ["A typical scientific question", "An experimental conclusion", "A controlled variable", "A dependent variable"], ans: 0 }
    ]
  },
  {
    id: "l2-energy",
    level: 2,
    scene: "短篇学术 · 能量",
    title: "能量守恒",
    text: "能量既不会凭空产生，也不会凭空消失，它只能从一种形式转化为另一种形式，这就是能量守恒定律。例如，举高的重物具有重力势能；当它下落时，势能转化为动能。在转化过程中，能量的总量保持不变。摩擦会使一部分机械能转化为内能（热能），但总能量依然守恒。理解能量守恒，有助于预测物体在不同状态下的能量大小。",
    qs: [
      { q: "能量守恒定律的核心意思是？", opts: ["能量总量保持不变，只转化形式", "能量可以凭空产生", "能量会越用越多", "动能永远大于势能"], ans: 0 },
      { q: "举高的重物具有？", opts: ["重力势能", "动能", "内能", "热能"], ans: 0 },
      { q: "物体下落时，势能转化为？", opts: ["动能", "光能", "电能", "化学能"], ans: 0 },
      { q: "摩擦使机械能转化为？", opts: ["内能（热能）", "重力势能", "动能", "光能"], ans: 0 }
    ],
    sceneEn: "Short academic · Energy",
    titleEn: "Conservation of energy",
    textEn: "Energy is neither created nor destroyed out of nothing; it can only be transformed from one form into another. This is the law of conservation of energy. For example, a raised weight possesses gravitational potential energy; when it falls, that potential energy is converted into kinetic energy. During the transformation, the total amount of energy remains unchanged. Friction converts part of the mechanical energy into internal energy (heat), yet the total energy is still conserved. Understanding energy conservation helps predict how much energy an object has in different states.",
    qsEn: [
      { q: "What is the core meaning of the law of conservation of energy?", opts: ["Total energy stays constant; only its form changes", "Energy can be created out of nothing", "Energy grows the more it is used", "Kinetic energy is always greater than potential energy"], ans: 0 },
      { q: "A raised weight possesses?", opts: ["Gravitational potential energy", "Kinetic energy", "Internal energy", "Heat"], ans: 0 },
      { q: "When an object falls, potential energy is converted into?", opts: ["Kinetic energy", "Light energy", "Electrical energy", "Chemical energy"], ans: 0 },
      { q: "Friction converts mechanical energy into?", opts: ["Internal energy (heat)", "Gravitational potential energy", "Kinetic energy", "Light energy"], ans: 0 }
    ]
  },
  {
    id: "l2-cell",
    level: 2,
    scene: "短篇学术 · 细胞",
    title: "细胞与物质运输",
    text: "细胞是生命活动的基本单位。细胞膜具有选择透过性，控制物质进出细胞。物质跨膜运输分为两种方式：被动运输不需要消耗能量，包括自由扩散（如水、氧气）和协助扩散（需要载体蛋白，如葡萄糖进入红细胞）；主动运输则需要消耗能量，并且可以逆浓度梯度进行，如离子进入细胞。理解这些方式，有助于解释细胞如何维持内部环境稳定。",
    qs: [
      { q: "细胞膜的主要功能是？", opts: ["控制物质进出细胞", "储存遗传信息", "制造蛋白质", "提供能量"], ans: 0 },
      { q: "自由扩散的例子是？", opts: ["水、氧气", "葡萄糖进入红细胞", "离子进入细胞", "蛋白质合成"], ans: 0 },
      { q: "协助扩散与自由扩散的共同点是？", opts: ["都不消耗能量", "都需要载体蛋白", "都逆浓度梯度", "都消耗能量"], ans: 0 },
      { q: "主动运输的特点是？", opts: ["消耗能量且可逆浓度梯度", "不消耗能量", "只能顺浓度梯度", "不需要载体"], ans: 0 }
    ],
    sceneEn: "Short academic · Cells",
    titleEn: "Cells and transport of substances",
    textEn: "The cell is the basic unit of life activities. The cell membrane is selectively permeable and controls the movement of substances into and out of the cell. Transport across the membrane is divided into two main types: passive transport does not require energy and includes simple diffusion (such as water and oxygen) and facilitated diffusion (which needs carrier proteins, such as glucose entering red blood cells); active transport requires energy and can move substances against the concentration gradient, such as ions entering the cell. Understanding these mechanisms helps explain how cells maintain a stable internal environment.",
    qsEn: [
      { q: "What is the main function of the cell membrane?", opts: ["Controls the movement of substances into and out of the cell", "Stores genetic information", "Manufactures proteins", "Provides energy"], ans: 0 },
      { q: "An example of simple diffusion is?", opts: ["Water, oxygen", "Glucose entering red blood cells", "Ions entering the cell", "Protein synthesis"], ans: 0 },
      { q: "What do facilitated diffusion and simple diffusion have in common?", opts: ["Neither consumes energy", "Both require carrier proteins", "Both go against the concentration gradient", "Both consume energy"], ans: 0 },
      { q: "The characteristic of active transport is?", opts: ["Consumes energy and can go against the concentration gradient", "Does not consume energy", "Can only follow the concentration gradient", "Does not require a carrier"], ans: 0 }
    ]
  },
  {
    id: "l2-chart",
    level: 2,
    scene: "短篇学术 · 数据",
    title: "数据与图表",
    text: "科学实验的数据常以图表呈现。折线图适合表示随时间变化的趋势，如温度随时间升高；柱状图适合比较不同类别的数量，如三种植物的高度；饼图适合表示各部分在总体中的比例。读图时，先看标题、坐标轴和单位，再观察数据点的变化趋势。准确读图，是科学研究和考试中的基础能力。",
    qs: [
      { q: "表示随时间变化的趋势，最适合用？", opts: ["折线图", "柱状图", "饼图", "表格"], ans: 0 },
      { q: "比较不同类别的数量，适合用？", opts: ["柱状图", "折线图", "饼图", "散点图"], ans: 0 },
      { q: "读图的第一步通常是？", opts: ["看标题、坐标轴和单位", "直接看数据点", "计算平均值", "画趋势线"], ans: 0 },
      { q: "饼图适合表示？", opts: ["各部分在总体中的比例", "时间趋势", "类别数量比较", "精确数值"], ans: 0 }
    ],
    sceneEn: "Short academic · Data",
    titleEn: "Data and charts",
    textEn: "Data from scientific experiments are often presented in charts. A line chart is suitable for showing trends that change over time, such as temperature rising with time; a bar chart is suitable for comparing quantities across different categories, such as the heights of three kinds of plants; a pie chart is suitable for showing the proportion of each part within the whole. When reading a chart, first look at the title, the axes, and the units, then observe the trend of the data points. Reading charts accurately is a fundamental skill in scientific research and in exams.",
    qsEn: [
      { q: "To show a trend that changes over time, which is most suitable?", opts: ["Line chart", "Bar chart", "Pie chart", "Table"], ans: 0 },
      { q: "To compare quantities across different categories, which is suitable?", opts: ["Bar chart", "Line chart", "Pie chart", "Scatter plot"], ans: 0 },
      { q: "What is usually the first step when reading a chart?", opts: ["Look at the title, axes, and units", "Look directly at the data points", "Calculate the average", "Draw a trend line"], ans: 0 },
      { q: "A pie chart is suitable for showing?", opts: ["The proportion of each part within the whole", "Time trends", "Comparison of category quantities", "Exact numerical values"], ans: 0 }
    ]
  },
  {
    id: "l2-ph",
    level: 2,
    scene: "短篇学术 · 酸碱",
    title: "酸碱与 pH",
    text: "溶液的酸碱性用 pH 表示。pH = 7 为中性，如纯水；pH 小于 7 为酸性，数值越小酸性越强，如柠檬汁；pH 大于 7 为碱性，数值越大碱性越强，如肥皂水。测定 pH 常用 pH 试纸或 pH 计。酸碱中和反应指酸与碱反应生成盐和水，例如盐酸与氢氧化钠反应生成氯化钠和水。理解 pH，有助于解释生活中的许多现象。",
    qs: [
      { q: "pH = 7 表示？", opts: ["中性", "强酸性", "强碱性", "无效"], ans: 0 },
      { q: "柠檬汁 pH 小于 7，说明它？", opts: ["呈酸性", "呈碱性", "中性", "是盐"], ans: 0 },
      { q: "盐酸与氢氧化钠反应生成的产物是？", opts: ["盐和水", "氢气和氧气", "二氧化碳", "金属"], ans: 0 },
      { q: "测定 pH 常用？", opts: ["pH 试纸或 pH 计", "天平", "量筒", "显微镜"], ans: 0 }
    ],
    sceneEn: "Short academic · Acids and bases",
    titleEn: "Acids, bases, and pH",
    textEn: "The acidity or alkalinity of a solution is expressed by pH. A pH of 7 is neutral, as in pure water; a pH below 7 is acidic, and the smaller the value, the stronger the acidity, as in lemon juice; a pH above 7 is alkaline, and the larger the value, the stronger the alkalinity, as in soapy water. pH is commonly measured with pH test paper or a pH meter. A neutralization reaction between an acid and a base produces a salt and water—for example, hydrochloric acid reacting with sodium hydroxide yields sodium chloride and water. Understanding pH helps explain many phenomena in everyday life.",
    qsEn: [
      { q: "A pH of 7 indicates?", opts: ["Neutral", "Strongly acidic", "Strongly alkaline", "Invalid"], ans: 0 },
      { q: "Lemon juice has a pH below 7, which means it is?", opts: ["Acidic", "Alkaline", "Neutral", "A salt"], ans: 0 },
      { q: "The products of the reaction between hydrochloric acid and sodium hydroxide are?", opts: ["A salt and water", "Hydrogen and oxygen", "Carbon dioxide", "A metal"], ans: 0 },
      { q: "pH is commonly measured with?", opts: ["pH test paper or a pH meter", "A balance", "A graduated cylinder", "A microscope"], ans: 0 }
    ]
  },
  {
    id: "l3-safety",
    level: 3,
    scene: "应用场景 · 实验室安全规程",
    title: "化学实验室安全规则",
    text: "进入化学实验室前，须穿戴实验服和护目镜，长发应束起。严禁在实验室内饮食、吸烟或嬉戏。使用强酸、强碱时，应在通风橱内操作，并佩戴耐酸碱手套。若试剂溅到皮肤，立即用大量流动清水冲洗至少 15 分钟，再报告老师。加热液体时，试管口不能对着人或自己。实验结束，须按分类回收废液，清洗仪器，并洗手离开。安全规则不是束缚，而是保护每一位实验者。",
    qs: [
      { q: "进入化学实验室前必须？", opts: ["穿戴实验服和护目镜", "先吃东西补充体力", "点燃酒精灯", "独自操作"], ans: 0 },
      { q: "使用强酸强碱应在？", opts: ["通风橱内操作", "普通桌面", "水槽边", "窗台"], ans: 0 },
      { q: "试剂溅到皮肤，首先应？", opts: ["用大量流动清水冲洗至少 15 分钟", "擦拭后继续实验", "报告老师再处理", "涂药膏"], ans: 0 },
      { q: "加热液体时试管口？", opts: ["不能对着人或自己", "可对着同伴", "朝上即可", "贴近眼睛观察"], ans: 0 },
      { q: "实验废液应？", opts: ["按分类回收", "直接倒入水槽", "倒进垃圾桶", "带出实验室"], ans: 0 }
    ],
    sceneEn: "Real scenario · Laboratory safety rules",
    titleEn: "Chemical laboratory safety rules",
    textEn: "Before entering a chemistry laboratory, you must put on a lab coat and safety goggles, and tie back long hair. Eating, drinking, smoking, or playing around is strictly forbidden in the laboratory. When using strong acids or strong bases, work inside a fume hood and wear acid- and alkali-resistant gloves. If a reagent splashes onto the skin, immediately rinse with plenty of running water for at least 15 minutes, then report to the teacher. When heating a liquid, the mouth of the test tube must not point at anyone or at yourself. At the end of the experiment, waste liquids must be sorted and collected, the apparatus cleaned, and you should wash your hands before leaving. Safety rules are not a constraint, but protection for every experimenter.",
    qsEn: [
      { q: "Before entering a chemistry laboratory, you must?", opts: ["Put on a lab coat and safety goggles", "Eat first to build up strength", "Light the alcohol lamp", "Work alone"], ans: 0 },
      { q: "When using strong acids and bases, you should work?", opts: ["Inside a fume hood", "On an ordinary desk", "By the sink", "On the windowsill"], ans: 0 },
      { q: "If a reagent splashes onto the skin, what should you do first?", opts: ["Rinse with plenty of running water for at least 15 minutes", "Wipe it off and continue the experiment", "Report to the teacher before dealing with it", "Apply ointment"], ans: 0 },
      { q: "When heating a liquid, the mouth of the test tube?", opts: ["Must not point at anyone or yourself", "May point at a companion", "Just needs to face upward", "Be brought close to the eyes to observe"], ans: 0 },
      { q: "Laboratory waste liquids should be?", opts: ["Collected by category", "Poured directly down the sink", "Poured into the trash bin", "Taken out of the laboratory"], ans: 0 }
    ]
  },
  {
    id: "l3-nameplate",
    level: 3,
    scene: "应用场景 · 仪器铭牌解读",
    title: "电流表铭牌怎么读",
    text: "某数字电流表铭牌标注如下：型号 DT-9205A；量程 0–3 A（此档精度 ±0.1 A）；内阻约 0.5 Ω；工作温度 0–40 ℃；供电 9 V 电池。读数与记录时，应注意：一、选择量程须使指针或数字不超过上限；二、读数精确到分度值的下一位；三、记录单位。若被测电流约 2.4 A，选 0–3 A 量程合适；若约 0.3 A，则选更小量程以提高精度。",
    qs: [
      { q: "该电流表 0–3 A 档的精度是？", opts: ["±0.1 A", "±0.5 A", "±0.01 A", "±1 A"], ans: 0 },
      { q: "被测电流约 0.3 A，应？", opts: ["选更小量程以提高精度", "仍用 0–3 A 档", "换电压表", "不用量程"], ans: 0 },
      { q: "铭牌上的内阻约 0.5 Ω 说明？", opts: ["电流表自身有电阻", "被测电路电阻", "电源电压", "精度范围"], ans: 0 },
      { q: "读数时应？", opts: ["精确到分度值下一位", "只估整数", "忽略单位", "取最大值"], ans: 0 }
    ],
    sceneEn: "Real scenario · Reading an instrument nameplate",
    titleEn: "How to read an ammeter nameplate",
    textEn: "The nameplate of a certain digital ammeter is marked as follows: model DT-9205A; range 0–3 A (accuracy ±0.1 A on this range); internal resistance about 0.5 Ω; operating temperature 0–40 ℃; powered by a 9 V battery. When reading and recording, note the following: first, choose a range such that the needle or digits do not exceed the upper limit; second, read to one place beyond the smallest scale division; third, record the unit. If the measured current is about 2.4 A, the 0–3 A range is appropriate; if it is about 0.3 A, choose a smaller range to improve accuracy.",
    qsEn: [
      { q: "What is the accuracy of this ammeter on the 0–3 A range?", opts: ["±0.1 A", "±0.5 A", "±0.01 A", "±1 A"], ans: 0 },
      { q: "If the measured current is about 0.3 A, you should?", opts: ["Choose a smaller range to improve accuracy", "Still use the 0–3 A range", "Switch to a voltmeter", "Not use a range"], ans: 0 },
      { q: "What does the nameplate's internal resistance of about 0.5 Ω indicate?", opts: ["The ammeter itself has resistance", "The resistance of the circuit under test", "The power supply voltage", "The accuracy range"], ans: 0 },
      { q: "When reading the value, you should?", opts: ["Read to one place beyond the smallest division", "Only estimate whole numbers", "Ignore the unit", "Take the maximum value"], ans: 0 }
    ]
  },
  {
    id: "l3-titration",
    level: 3,
    scene: "应用场景 · 实验操作步骤",
    title: "酸碱滴定操作要点",
    text: "用已知浓度的盐酸滴定未知浓度的氢氧化钠，步骤如下：一、用 NaOH 溶液润洗滴定管后，装入待测液，调零并记录初读数；二、用移液管取 25.00 mL NaOH 于锥形瓶，加 2 滴酚酞，溶液变红；三、左手控制酸式滴定管活塞，右手摇动锥瓶，眼睛注视溶液颜色变化；四、当溶液由红恰变无色且半分钟不恢复，为滴定终点，记录末读数；五、重复 2–3 次取平均。计算时，c(NaOH)·V(NaOH) = c(HCl)·V(HCl)。",
    qs: [
      { q: "滴定前用待测液润洗滴定管的目的是？", opts: ["避免稀释待测液", "清洗油污", "校准刻度", "加快反应"], ans: 0 },
      { q: "酚酞在 NaOH 溶液中呈？", opts: ["红色", "无色", "蓝色", "黄色"], ans: 0 },
      { q: "滴定终点现象是？", opts: ["由红恰变无色且半分钟不恢复", "一直红色", "突变为黑色", "产生气泡"], ans: 0 },
      { q: "计算依据的关系是？", opts: ["c(NaOH)·V(NaOH) = c(HCl)·V(HCl)", "质量守恒", "能量守恒", "压强相等"], ans: 0 }
    ],
    sceneEn: "Real scenario · Experimental procedure",
    titleEn: "Key points of acid–base titration",
    textEn: "Titrating sodium hydroxide of unknown concentration with hydrochloric acid of known concentration proceeds as follows: first, rinse the burette with the NaOH solution, then fill it with the solution to be tested, zero it, and record the initial reading; second, use a pipette to transfer 25.00 mL of NaOH into an Erlenmeyer flask, add 2 drops of phenolphthalein, and the solution turns red; third, use the left hand to control the burette stopcock and the right hand to swirl the flask, watching the color change of the solution; fourth, when the solution just turns from red to colorless and does not return within half a minute, that is the endpoint—record the final reading; fifth, repeat 2–3 times and take the average. For calculation, c(NaOH)·V(NaOH) = c(HCl)·V(HCl).",
    qsEn: [
      { q: "Before titration, what is the purpose of rinsing the burette with the solution to be tested?", opts: ["To avoid diluting the solution to be tested", "To clean off grease", "To calibrate the scale", "To speed up the reaction"], ans: 0 },
      { q: "In an NaOH solution, phenolphthalein appears?", opts: ["Red", "Colorless", "Blue", "Yellow"], ans: 0 },
      { q: "The endpoint phenomenon of the titration is?", opts: ["Just turning from red to colorless and not returning within half a minute", "Remaining red throughout", "Suddenly turning black", "Producing bubbles"], ans: 0 },
      { q: "The relationship used as the basis for calculation is?", opts: ["c(NaOH)·V(NaOH) = c(HCl)·V(HCl)", "Conservation of mass", "Conservation of energy", "Equal pressure"], ans: 0 }
    ]
  },
  {
    id: "l3-abstract",
    level: 3,
    scene: "应用场景 · 科学方法论摘要",
    title: "论文摘要速读",
    text: "摘要：为探究光照强度对菠菜光合作用速率的影响，本研究设置 0、2000、4000、6000 lux 四组，测定单位时间氧气释放量。结果显示，氧气释放量随光照增强而上升，在 6000 lux 时达到最大；超过该值后增速放缓，推测受酶数量限制。结论：在实验范围内，光照强度与光合速率正相关，但存在饱和点。本研究为温室补光提供了参考。",
    qs: [
      { q: "本研究的自变量是？", opts: ["光照强度", "氧气释放量", "温度", "菠菜品种"], ans: 0 },
      { q: "因变量是？", opts: ["单位时间氧气释放量", "光照强度", "酶数量", "温度"], ans: 0 },
      { q: "6000 lux 后增速放缓说明存在？", opts: ["饱和点", "误差", "对照组", "重复组"], ans: 0 },
      { q: "结论中正相关指？", opts: ["光照增强，光合速率上升", "两者无关", "相反变化", "恒定不变"], ans: 0 }
    ],
    sceneEn: "Real scenario · Scientific-method abstract",
    titleEn: "Quick reading of a paper abstract",
    textEn: "Abstract: To investigate the effect of light intensity on the photosynthetic rate of spinach, this study set up four groups at 0, 2000, 4000, and 6000 lux and measured the amount of oxygen released per unit time. The results show that oxygen release increased with stronger light, reaching a maximum at 6000 lux; beyond that value the rate of increase slowed, presumably limited by the number of enzymes. Conclusion: within the experimental range, light intensity is positively correlated with the photosynthetic rate, but there is a saturation point. This study provides a reference for supplemental lighting in greenhouses.",
    qsEn: [
      { q: "The independent variable of this study is?", opts: ["Light intensity", "Oxygen release", "Temperature", "Spinach variety"], ans: 0 },
      { q: "The dependent variable is?", opts: ["Amount of oxygen released per unit time", "Light intensity", "Number of enzymes", "Temperature"], ans: 0 },
      { q: "The slowing of the increase after 6000 lux indicates the existence of?", opts: ["A saturation point", "An error", "A control group", "A repeat group"], ans: 0 },
      { q: "In the conclusion, 'positive correlation' means?", opts: ["As light increases, the photosynthetic rate rises", "The two are unrelated", "They change in opposite directions", "They remain constant"], ans: 0 }
    ]
  },
  {
    id: "l3-sds",
    level: 3,
    scene: "应用场景 · 化学品安全说明书",
    title: "浓硫酸 SDS 摘录",
    text: "浓硫酸 SDS 摘录：危险说明 H314——造成严重皮肤灼伤和眼损伤。预防措施 P280——戴防护手套、防护眼镜。事故响应 P303+P361+P353——如皮肤（或头发）沾染：立即脱掉所有沾染的衣物，用大量水冲洗皮肤。P305+P351+P338——如进入眼睛：用水小心冲洗数分钟，如戴隐形眼镜并可方便地取出，取出隐形眼镜，继续冲洗。安全储存 P405——上锁保管。请严格按说明操作。",
    qs: [
      { q: "浓硫酸的危险说明 H314 指？", opts: ["严重皮肤灼伤和眼损伤", "易燃", "剧毒吸入", "爆炸风险"], ans: 0 },
      { q: "预防措施 P280 要求？", opts: ["戴防护手套和眼镜", "通风", "远离火源", "戴口罩"], ans: 0 },
      { q: "皮肤沾染浓硫酸，首先应？", opts: ["立即脱掉沾染衣物并用大量水冲洗", "用布擦干", "涂油", "等待"], ans: 0 },
      { q: "安全储存 P405 要求？", opts: ["上锁保管", "敞开放置", "靠近水源", "阳光下"], ans: 0 }
    ],
    sceneEn: "Real scenario · Chemical safety data sheet",
    titleEn: "Excerpt from concentrated sulfuric acid SDS",
    textEn: "Excerpt from the concentrated sulfuric acid SDS: Hazard statement H314 — causes severe skin burns and eye damage. Prevention P280 — wear protective gloves and protective eyewear. Response P303+P361+P353 — if on skin (or hair): remove all contaminated clothing immediately and rinse skin with plenty of water. P305+P351+P338 — if in eyes: rinse cautiously with water for several minutes; if wearing contact lenses and they can be easily removed, remove the lenses and continue rinsing. Safe storage P405 — keep locked up. Please strictly follow the instructions.",
    qsEn: [
      { q: "What does hazard statement H314 for concentrated sulfuric acid mean?", opts: ["Severe skin burns and eye damage", "Flammable", "Highly toxic if inhaled", "Risk of explosion"], ans: 0 },
      { q: "Prevention P280 requires?", opts: ["Wear protective gloves and eyewear", "Ventilation", "Keep away from fire sources", "Wear a mask"], ans: 0 },
      { q: "If skin is contaminated with concentrated sulfuric acid, what should you do first?", opts: ["Remove contaminated clothing immediately and rinse with plenty of water", "Wipe it dry with a cloth", "Apply oil", "Wait"], ans: 0 },
      { q: "Safe storage P405 requires?", opts: ["Keep locked up", "Leave it open", "Keep it near a water source", "In sunlight"], ans: 0 }
    ]
  },
  {
    id: "l3-news",
    level: 3,
    scene: "应用场景 · 科技新闻速读",
    title: "钠离子电池新进展",
    text: "本报讯：某高校团队开发出一种新型钠离子电池，能量密度达到 160 Wh/kg，接近主流磷酸铁锂电池水平，且原料钠资源丰度高、成本低。研究人员表示，该电池在低温下性能稳定，适合储能与两轮车场景。目前仍处于中试阶段，距大规模商用还需解决循环寿命问题。业内认为，钠电有望在储能领域与锂电形成互补。",
    qs: [
      { q: "新型钠离子电池的优势是？", opts: ["原料丰度高、成本低", "能量密度远超锂电", "已大规模商用", "无需充电"], ans: 0 },
      { q: "文中中试阶段意味着？", opts: ["尚未大规模商用", "已量产", "已淘汰", "仅理论"], ans: 0 },
      { q: "钠电适合的场景是？", opts: ["储能与两轮车", "航天飞机", "深海潜水", "手机快充"], ans: 0 },
      { q: "业内认为钠电将？", opts: ["与锂电形成互补", "完全取代锂电", "被淘汰", "仅用于实验"], ans: 0 }
    ],
    sceneEn: "Real scenario · Quick reading of tech news",
    titleEn: "New progress in sodium-ion batteries",
    textEn: "Our report: a university team has developed a new type of sodium-ion battery with an energy density of 160 Wh/kg, close to that of mainstream lithium iron phosphate batteries, and its raw material sodium is abundant and low-cost. The researchers say the battery performs stably at low temperatures and is suitable for energy storage and two-wheeled vehicle applications. It is still at the pilot stage, and solving cycle-life issues remains before large-scale commercialization. Industry observers believe sodium batteries are expected to complement lithium batteries in the energy storage sector.",
    qsEn: [
      { q: "The advantage of the new sodium-ion battery is?", opts: ["Abundant raw material and low cost", "Energy density far exceeding lithium batteries", "Already in large-scale commercial use", "Requires no charging"], ans: 0 },
      { q: "In the text, the 'pilot stage' means?", opts: ["Not yet in large-scale commercial use", "Already in mass production", "Already phased out", "Only theoretical"], ans: 0 },
      { q: "The scenarios suited to sodium batteries are?", opts: ["Energy storage and two-wheeled vehicles", "Space shuttles", "Deep-sea diving", "Fast phone charging"], ans: 0 },
      { q: "Industry observers believe sodium batteries will?", opts: ["Complement lithium batteries", "Completely replace lithium batteries", "Be phased out", "Be used only in experiments"], ans: 0 }
    ]
  }
];
