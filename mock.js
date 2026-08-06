// CSCA Basics — Level 4 full mock exam (80 questions).
// Honest practice material: original questions styled after the CSCA undergrad
// aptitude format. We do NOT claim these are official past papers or fixed cut scores.
const MOCK_EXAM = {
  title: "CSCA 全真模拟考 · Level 4", titleEn: "CSCA Full Mock Exam · Level 4",
  subtitle: "无计算器 · 80 题 · 90 分钟 · 成绩为自我诊断参考，非官方分数线", subtitleEn: "No calculator · 80 questions · 90 minutes · Score is for self-diagnosis only, not an official cutoff",
  timeLimit: 90 * 60, // seconds
  sections: [
    {
      id: "math",
      name: "数学", nameEn: "Mathematics",
      qs: [
        { q: "12 × 8 = ?", qEn: "12 × 8 = ?", opts: ["96", "84", "108", "92"], optsEn: ["96","84","108","92"], ans: 0 },
        { q: "145 + 267 = ?", qEn: "145 + 267 = ?", opts: ["412", "402", "422", "392"], optsEn: ["412","402","422","392"], ans: 0 },
        { q: "0.25 × 40 = ?", qEn: "0.25 × 40 = ?", opts: ["10", "8", "1", "100"], optsEn: ["10","8","1","100"], ans: 0 },
        { q: "3/4 + 1/2 = ?", qEn: "3/4 + 1/2 = ?", opts: ["5/4", "1", "4/6", "7/4"], optsEn: ["5/4","1","4/6","7/4"], ans: 0 },
        { q: "2⁵ = ?", qEn: "2⁵ = ?", opts: ["32", "16", "64", "24"], optsEn: ["32","16","64","24"], ans: 0 },
        { q: "√144 = ?", qEn: "√144 = ?", opts: ["12", "11", "14", "10"], optsEn: ["12","11","14","10"], ans: 0 },
        { q: "15% of 200 = ?", qEn: "15% of 200 = ?", opts: ["30", "25", "35", "300"], optsEn: ["30","25","35","300"], ans: 0 },
        { q: "解 2x + 5 = 17", qEn: "Solve 2x + 5 = 17", opts: ["x = 6", "x = 5", "x = 7", "x = 11"], optsEn: ["x = 6","x = 5","x = 7","x = 11"], ans: 0 },
        { q: "因式分解 x² − 9", qEn: "Factor x² − 9", opts: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "(x+9)(x−1)"], optsEn: ["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","(x+9)(x−1)"], ans: 0 },
        { q: "三角形面积（底 10，高 6）", qEn: "Area of a triangle (base 10, height 6)", opts: ["30", "60", "16", "26"], optsEn: ["30","60","16","26"], ans: 0 },
        { q: "圆周长 = 2πr，r = 7（π≈3），周长≈？", qEn: "Circumference = 2πr, r = 7 (π≈3), circumference ≈ ?", opts: ["42", "44", "21", "14"], optsEn: ["42","44","21","14"], ans: 0 },
        { q: "log₁₀ 1000 = ?", qEn: "log₁₀ 1000 = ?", opts: ["3", "2", "4", "1"], optsEn: ["3","2","4","1"], ans: 0 },
        { q: "等差数列 3, 7, 11, … 的第 10 项", qEn: "10th term of arithmetic sequence 3, 7, 11, …", opts: ["39", "43", "35", "47"], optsEn: ["39","43","35","47"], ans: 0 },
        { q: "掷一枚公平骰子，得到偶数的概率", qEn: "Rolling a fair die, probability of an even number", opts: ["1/2", "1/3", "2/3", "1/6"], optsEn: ["1/2","1/3","2/3","1/6"], ans: 0 },
        { q: "化简 (2x)³", qEn: "Simplify (2x)³", opts: ["8x³", "6x³", "2x³", "8x"], optsEn: ["8x³","6x³","2x³","8x"], ans: 0 },
        { q: "走 240 km 用 4 h，平均速度", qEn: "Travel 240 km in 4 h, average speed", opts: ["60 km/h", "50", "80", "24"], optsEn: ["60 km/h","50","80","24"], ans: 0 },
        { q: "50 是 200 的百分之几？", qEn: "What percent of 200 is 50?", opts: ["25%", "20%", "30%", "40%"], optsEn: ["25%","20%","30%","40%"], ans: 0 },
        { q: "1 美元 = 7 元，35 元 ≈ ? 美元", qEn: "1 USD = 7 CNY, 35 CNY ≈ ? USD", opts: ["5", "4", "6", "7"], optsEn: ["5","4","6","7"], ans: 0 },
        { q: "数据 3, 1, 7, 5, 9 的中位数", qEn: "Median of data 3, 1, 7, 5, 9", opts: ["5", "3", "7", "9"], optsEn: ["5","3","7","9"], ans: 0 },
        { q: "30° 角的补角（180°−θ）", qEn: "Supplement of a 30° angle (180°−θ)", opts: ["150°", "60°", "120°", "90°"], optsEn: ["150°","60°","120°","90°"], ans: 0 }
      ]
    },
    {
      id: "physics",
      name: "物理", nameEn: "Physics",
      qs: [
        { q: "30 m 路程用 10 s，平均速度", qEn: "30 m distance in 10 s, average speed", opts: ["3 m/s", "300", "0.3", "20"], optsEn: ["3 m/s","300","0.3","20"], ans: 0 },
        { q: "速度 0→20 m/s 用时 5 s，加速度", qEn: "Speed 0→20 m/s in 5 s, acceleration", opts: ["4 m/s²", "5", "100", "0.25"], optsEn: ["4 m/s²","5","100","0.25"], ans: 0 },
        { q: "匀加速 s = ½at²，a=2, t=3，距离", qEn: "Uniform acceleration s = ½at², a=2, t=3, distance", opts: ["9 m", "18", "6", "3"], optsEn: ["9 m","18","6","3"], ans: 0 },
        { q: "力 F = ma，m=10 kg, a=3，力", qEn: "Force F = ma, m=10 kg, a=3, force", opts: ["30 N", "13", "3.3", "7"], optsEn: ["30 N","13","3.3","7"], ans: 0 },
        { q: "g≈10 m/s²，质量 5 kg 的重力", qEn: "g≈10 m/s², weight of 5 kg mass", opts: ["50 N", "0.5", "5", "500"], optsEn: ["50 N","0.5","5","500"], ans: 0 },
        { q: "功 W = Fs，F=20 N, s=5 m", qEn: "Work W = Fs, F=20 N, s=5 m", opts: ["100 J", "25", "4", "1000"], optsEn: ["100 J","25","4","1000"], ans: 0 },
        { q: "功率 P = W/t，200 J 用 10 s", qEn: "Power P = W/t, 200 J in 10 s", opts: ["20 W", "2000", "2", "190"], optsEn: ["20 W","2000","2","190"], ans: 0 },
        { q: "密度 ρ = m/V，m=200 g, V=40 cm³", qEn: "Density ρ = m/V, m=200 g, V=40 cm³", opts: ["5 g/cm³", "8", "0.2", "160"], optsEn: ["5 g/cm³","8","0.2","160"], ans: 0 },
        { q: "1 km = ? m", qEn: "1 km = ? m", opts: ["1000", "100", "10000", "10"], optsEn: ["1000","100","10000","10"], ans: 0 },
        { q: "1 小时 = ? 秒", qEn: "1 hour = ? seconds", opts: ["3600", "60", "600", "360"], optsEn: ["3600","60","600","360"], ans: 0 },
        { q: "波速 v = fλ，f=10 Hz, λ=2 m", qEn: "Wave speed v = fλ, f=10 Hz, λ=2 m", opts: ["20 m/s", "5", "12", "0.2"], optsEn: ["20 m/s","5","12","0.2"], ans: 0 },
        { q: "频率 = 1/周期，T=0.2 s", qEn: "Frequency = 1/period, T=0.2 s", opts: ["5 Hz", "0.2", "2", "50"], optsEn: ["5 Hz","0.2","2","50"], ans: 0 },
        { q: "串联电阻 R = R₁+R₂，4 Ω + 6 Ω", qEn: "Series resistance R = R₁+R₂, 4 Ω + 6 Ω", opts: ["10 Ω", "2.4 Ω", "24 Ω", "0"], optsEn: ["10 Ω","2.4 Ω","24 Ω","0"], ans: 0 },
        { q: "欧姆定律 V = IR，I=2 A, R=5 Ω", qEn: "Ohm's law V = IR, I=2 A, R=5 Ω", opts: ["10 V", "2.5", "7", "0.4"], optsEn: ["10 V","2.5","7","0.4"], ans: 0 },
        { q: "并联 1/R = 1/2 + 1/2，总电阻", qEn: "Parallel 1/R = 1/2 + 1/2, total resistance", opts: ["1 Ω", "4 Ω", "2 Ω", "0.5 Ω"], optsEn: ["1 Ω","4 Ω","2 Ω","0.5 Ω"], ans: 0 },
        { q: "自由落体 h = ½gt²，g=10, t=2 s", qEn: "Free fall h = ½gt², g=10, t=2 s", opts: ["20 m", "10", "40", "5"], optsEn: ["20 m","10","40","5"], ans: 0 },
        { q: "压强 P = F/A，F=100 N, A=5 m²", qEn: "Pressure P = F/A, F=100 N, A=5 m²", opts: ["20 Pa", "500", "0.05", "95"], optsEn: ["20 Pa","500","0.05","95"], ans: 0 },
        { q: "动能 Ek = ½mv²，m=2 kg, v=3 m/s", qEn: "Kinetic energy Ek = ½mv², m=2 kg, v=3 m/s", opts: ["9 J", "6", "3", "18"], optsEn: ["9 J","6","3","18"], ans: 0 },
        { q: "动量 p = mv，m=4 kg, v=5 m/s", qEn: "Momentum p = mv, m=4 kg, v=5 m/s", opts: ["20", "0.8", "9", "1"], optsEn: ["20","0.8","9","1"], ans: 0 },
        { q: "光在真空速度约 3×10⁸ m/s，即", qEn: "Speed of light in vacuum ≈ 3×10⁸ m/s, i.e.", opts: ["每秒 3 亿米", "每秒 3 米", "3 千米/秒", "300 万米/秒"], optsEn: ["300 million meters per second","3 meters per second","3 km/s","3 million meters per second"], ans: 0 }
      ]
    },
    {
      id: "chem",
      name: "化学", nameEn: "Chemistry",
      qs: [
        { q: "H₂O 的相对分子质量（H=1, O=16）", qEn: "Relative molecular mass of H₂O (H=1, O=16)", opts: ["18", "16", "20", "17"], optsEn: ["18","16","20","17"], ans: 0 },
        { q: "1 mol 气体约含粒子数", qEn: "Number of particles in 1 mol of gas", opts: ["6.02×10²³", "12", "1", "22.4"], optsEn: ["6.02×10²³","12","1","22.4"], ans: 0 },
        { q: "NaCl 的相对分子质量（Na=23, Cl=35.5）", qEn: "Relative molecular mass of NaCl (Na=23, Cl=35.5)", opts: ["58.5", "58", "59", "35.5"], optsEn: ["58.5","58","59","35.5"], ans: 0 },
        { q: "CO₂ 的相对分子质量（C=12, O=16）", qEn: "Relative molecular mass of CO₂ (C=12, O=16)", opts: ["44", "28", "32", "12"], optsEn: ["44","28","32","12"], ans: 0 },
        { q: "配平 2H₂ + O₂ → 2H₂O，生成水分子数", qEn: "Balanced 2H₂ + O₂ → 2H₂O, number of water molecules formed", opts: ["2", "1", "4", "3"], optsEn: ["2","1","4","3"], ans: 0 },
        { q: "酸的 pH 值", qEn: "pH of an acid", opts: ["< 7", "> 7", "= 7", "= 0"], optsEn: ["< 7","> 7","= 7","= 0"], ans: 0 },
        { q: "碱的 pH 值", qEn: "pH of a base", opts: ["> 7", "< 7", "= 7", "14"], optsEn: ["> 7","< 7","= 7","14"], ans: 0 },
        { q: "中性溶液的 pH", qEn: "pH of a neutral solution", opts: ["7", "0", "14", "1"], optsEn: ["7","0","14","1"], ans: 0 },
        { q: "元素周期表第一周期有几个元素？", qEn: "How many elements are in the first period of the periodic table?", opts: ["2", "1", "8", "18"], optsEn: ["2","1","8","18"], ans: 0 },
        { q: "金属能导电，主要依靠", qEn: "Metals conduct electricity mainly due to", opts: ["自由电子", "离子", "质子", "中子"], optsEn: ["free electrons","ions","protons","neutrons"], ans: 0 },
        { q: "电解水的主要产物", qEn: "Main products of water electrolysis", opts: ["H₂ + O₂", "H₂ + Cl₂", "O₂ + N₂", "H₂ + CO₂"], optsEn: ["H₂ + O₂","H₂ + Cl₂","O₂ + N₂","H₂ + CO₂"], ans: 0 },
        { q: "燃烧三要素中不包含", qEn: "Which is NOT one of the three elements of combustion?", opts: ["催化剂", "可燃物", "助燃物(氧)", "温度达着火点"], optsEn: ["catalyst","combustible material","oxidizer (oxygen)","temperature at ignition point"], ans: 0 },
        { q: "O₂ 的摩尔质量", qEn: "Molar mass of O₂", opts: ["32 g/mol", "16", "8", "24"], optsEn: ["32 g/mol","16","8","24"], ans: 0 },
        { q: "2 mol H₂O 的质量", qEn: "Mass of 2 mol H₂O", opts: ["36 g", "18", "20", "9"], optsEn: ["36 g","18","20","9"], ans: 0 },
        { q: "常温下水的密度约为", qEn: "Density of water at room temperature is about", opts: ["1 g/cm³", "10", "0.1", "100"], optsEn: ["1 g/cm³","10","0.1","100"], ans: 0 },
        { q: "AgNO₃ + NaCl 反应生成的沉淀", qEn: "Precipitate formed by AgNO₃ + NaCl", opts: ["AgCl↓", "NaCl", "AgNO₃", "H₂O"], optsEn: ["AgCl↓","NaCl","AgNO₃","H₂O"], ans: 0 },
        { q: "氧化剂在反应中得到", qEn: "An oxidizing agent gains in a reaction", opts: ["电子", "质子", "中子", "失去电子"], optsEn: ["electrons","protons","neutrons","loses electrons"], ans: 0 },
        { q: "下列常见温室气体是", qEn: "Which of the following is a common greenhouse gas?", opts: ["CO₂", "O₂", "N₂", "He"], optsEn: ["CO₂","O₂","N₂","He"], ans: 0 },
        { q: "同位素指同种元素的", qEn: "Isotopes refer to the same element with different", opts: ["中子数不同", "质子数不同", "电子数不同", "质量相同"], optsEn: ["numbers of neutrons","numbers of protons","numbers of electrons","same mass"], ans: 0 },
        { q: "食盐水溶液中，溶质是", qEn: "In a salt-water solution, the solute is", opts: ["NaCl", "水", "H", "Cl"], optsEn: ["NaCl","water","H","Cl"], ans: 0 }
      ]
    },
    {
      id: "cn",
      name: "学术中文", nameEn: "Academic Chinese",
      qs: [
        { q: "“实验”的意思是？", qEn: "What does 'experiment' mean?", opts: ["做科学测试以验证", "计算数值结果", "撰写书面报告", "阅读文献"], optsEn: ["conduct a scientific test to verify","compute a numerical result","write a written report","read literature"], ans: 0 },
        { q: "科研中的“假设”指？", qEn: "In research, 'hypothesis' refers to?", opts: ["待验证的推测", "已证明的结论", "原始数据", "实验仪器"], optsEn: ["a conjecture to be tested","a proven conclusion","raw data","experimental apparatus"], ans: 0 },
        { q: "“变量”在实验中指？", qEn: "In an experiment, 'variable' refers to?", opts: ["可被改变的因素", "保持不变的常数", "最终答案", "测量仪器"], optsEn: ["a factor that can be changed","a constant held fixed","the final answer","a measuring instrument"], ans: 0 },
        { q: "“结论”是研究的？", qEn: "A 'conclusion' is the ___ of research?", opts: ["最终判断", "开头问题", "材料清单", "中间步骤"], optsEn: ["final judgment","opening question","materials list","intermediate step"], ans: 0 },
        { q: "“误差”指？", qEn: "What does 'error' refer to?", opts: ["测量值与真实值的偏差", "正确答案", "计量单位", "计算公式"], optsEn: ["deviation between measured and true value","the correct answer","a unit of measurement","a calculation formula"], ans: 0 },
        { q: "“样本”指？", qEn: "What does 'sample' refer to?", opts: ["被研究总体中的一部分", "全部总体", "实验仪器", "书面报告"], optsEn: ["a part of the studied population","the entire population","experimental apparatus","written report"], ans: 0 },
        { q: "设置“对照组”的目的是？", qEn: "The purpose of setting a 'control group' is?", opts: ["作为比较基准", "增加变量数量", "减少样本量", "加快实验速度"], optsEn: ["to serve as a comparison baseline","to increase the number of variables","to reduce sample size","to speed up the experiment"], ans: 0 },
        { q: "数据“趋势”指？", qEn: "Data 'trend' refers to?", opts: ["变化的方向或规律", "单个孤立数值", "计算错误", "计量单位"], optsEn: ["the direction or pattern of change","a single isolated value","a calculation error","a unit of measurement"], ans: 0 },
        { q: "按科研步骤排序：①记录实验数据 ②提出假设 ③分析数据得结论 ④设计实验", qEn: "Order the research steps: ① record experimental data ② propose hypothesis ③ analyze data to conclude ④ design experiment", opts: ["②④①③", "①②③④", "④②①③", "②①④③"], optsEn: ["②④①③","①②③④","④②①③","②①④③"], ans: 0 },
        { q: "排序：①加热溶液 ②观察到沉淀 ③混合两种试剂 ④记录现象", qEn: "Order: ① heat solution ② observe precipitate ③ mix two reagents ④ record phenomenon", opts: ["③①②④", "①②③④", "④③②①", "②①④③"], optsEn: ["③①②④","①②③④","④③②①","②①④③"], ans: 0 },
        { q: "排序：①得出结论 ②收集数据 ③提出假设 ④设计方案", qEn: "Order: ① draw conclusion ② collect data ③ propose hypothesis ④ design plan", opts: ["③④②①", "①②③④", "④③①②", "②④③①"], optsEn: ["③④②①","①②③④","④③①②","②④③①"], ans: 0 },
        { q: "排序：①清洗仪器 ②进行滴定 ③配制溶液 ④记录终点", qEn: "Order: ① clean apparatus ② perform titration ③ prepare solution ④ record endpoint", opts: ["①③②④", "③①②④", "④③②①", "②①④③"], optsEn: ["①③②④","③①②④","④③②①","②①④③"], ans: 0 },
        {
          passage: "水的密度约为 1 g/cm³。油的密度比水小，约为 0.9 g/cm³。把油倒入水中，油会浮在水面上。铁的密度约为 7.8 g/cm³，远大于水，因此铁块会沉入水底。物体的浮沉由它的密度与液体密度的相对大小决定。", passageEn: "The density of water is about 1 g/cm³. Oil has a lower density than water, about 0.9 g/cm³. When oil is poured into water, it floats on the surface. The density of iron is about 7.8 g/cm³, far greater than water, so an iron block sinks to the bottom. Whether an object floats or sinks is determined by the relative sizes of its density and the liquid's density.",
          q: "根据这段文字，油的密度比水", qEn: "According to this passage, oil's density is ___ water's", opts: ["小", "大", "相等", "无关"], optsEn: ["smaller","greater","equal","unrelated"], ans: 0
        },
        { q: "（接上段）铁块放入水中会", qEn: "(Continued) An iron block placed in water will", opts: ["沉入水底", "浮在水面", "悬浮在中层", "溶解"], optsEn: ["sink to the bottom","float on the surface","stay suspended in the middle","dissolve"], ans: 0 },
        { q: "（接上段）决定物体浮沉的关键是", qEn: "(Continued) The key factor determining float or sink is", opts: ["物体与液体密度的比较", "物体的颜色", "物体的形状", "周围的温度"], optsEn: ["comparison of object and liquid densities","the object's color","the object's shape","the surrounding temperature"], ans: 0 },
        { q: "（接上段）这段文字主要说明", qEn: "(Continued) This passage mainly explains", opts: ["密度与浮沉的关系", "如何冶炼钢铁", "食用油的种类", "水的化学成分"], optsEn: ["the relation between density and float/sink","how to smelt steel","types of edible oil","the chemical composition of water"], ans: 0 },
        {
          passage: "科学实验常需要控制变量。例如研究“光照时间是否影响植物生长”时，除光照时间外，水分、温度、土壤都应保持一致。这样，若两组植物高度不同，才能归因于光照时间的差异。这类实验中，接受不同光照处理的一组叫实验组，保持标准条件的一组叫对照组。", passageEn: "Scientific experiments often require controlling variables. For example, when studying 'whether light duration affects plant growth', aside from light duration, water, temperature, and soil should all be kept the same. This way, if the two groups of plants differ in height, the difference can be attributed to light duration. In such experiments, the group receiving different light treatment is called the experimental group, and the group kept under standard conditions is called the control group.",
          q: "控制变量的主要目的是", qEn: "The main purpose of controlling variables is", opts: ["确保差异来自单一因素", "加快实验进度", "减少样本数量", "增加仪器使用"], optsEn: ["ensure differences come from a single factor","speed up the experiment","reduce sample size","increase instrument use"], ans: 0
        },
        { q: "（接上段）让“水分、温度、土壤保持一致”是为了", qEn: "(Continued) Keeping 'water, temperature, soil the same' is to", opts: ["控制无关变量", "增加新的变量", "减少光照", "加快反应"], optsEn: ["control irrelevant variables","add new variables","reduce light","speed up the reaction"], ans: 0 },
        { q: "（接上段）接受不同光照处理的一组叫", qEn: "(Continued) The group receiving different light treatment is called", opts: ["实验组", "对照组", "样本", "总体"], optsEn: ["experimental group","control group","sample","population"], ans: 0 },
        { q: "（接上段）保持标准条件的一组叫", qEn: "(Continued) The group kept under standard conditions is called", opts: ["对照组", "实验组", "变量", "数据"], optsEn: ["control group","experimental group","variable","data"], ans: 0 }
      ]
    }
  ]
};
