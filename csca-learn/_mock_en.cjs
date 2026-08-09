const fs = require("fs");
let src = fs.readFileSync("mock.js", "utf8");
if (src.includes("qEn:")) {
  console.log("mock.js already contains English fields; skipping to avoid duplication.");
  process.exit(0);
}

// ---- ordered translations (file order: math 0-19, physics 20-39, chem 40-59, cn 60-79) ----
const math = [
  { q: "12 × 8 = ?", o: ["96","84","108","92"] },
  { q: "145 + 267 = ?", o: ["412","402","422","392"] },
  { q: "0.25 × 40 = ?", o: ["10","8","1","100"] },
  { q: "3/4 + 1/2 = ?", o: ["5/4","1","4/6","7/4"] },
  { q: "2⁵ = ?", o: ["32","16","64","24"] },
  { q: "√144 = ?", o: ["12","11","14","10"] },
  { q: "15% of 200 = ?", o: ["30","25","35","300"] },
  { q: "Solve 2x + 5 = 17", o: ["x = 6","x = 5","x = 7","x = 11"] },
  { q: "Factor x² − 9", o: ["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","(x+9)(x−1)"] },
  { q: "Area of a triangle (base 10, height 6)", o: ["30","60","16","26"] },
  { q: "Circumference = 2πr, r = 7 (π≈3), circumference ≈ ?", o: ["42","44","21","14"] },
  { q: "log₁₀ 1000 = ?", o: ["3","2","4","1"] },
  { q: "10th term of arithmetic sequence 3, 7, 11, …", o: ["39","43","35","47"] },
  { q: "Rolling a fair die, probability of an even number", o: ["1/2","1/3","2/3","1/6"] },
  { q: "Simplify (2x)³", o: ["8x³","6x³","2x³","8x"] },
  { q: "Travel 240 km in 4 h, average speed", o: ["60 km/h","50","80","24"] },
  { q: "What percent of 200 is 50?", o: ["25%","20%","30%","40%"] },
  { q: "1 USD = 7 CNY, 35 CNY ≈ ? USD", o: ["5","4","6","7"] },
  { q: "Median of data 3, 1, 7, 5, 9", o: ["5","3","7","9"] },
  { q: "Supplement of a 30° angle (180°−θ)", o: ["150°","60°","120°","90°"] }
];
const physics = [
  { q: "30 m distance in 10 s, average speed", o: ["3 m/s","300","0.3","20"] },
  { q: "Speed 0→20 m/s in 5 s, acceleration", o: ["4 m/s²","5","100","0.25"] },
  { q: "Uniform acceleration s = ½at², a=2, t=3, distance", o: ["9 m","18","6","3"] },
  { q: "Force F = ma, m=10 kg, a=3, force", o: ["30 N","13","3.3","7"] },
  { q: "g≈10 m/s², weight of 5 kg mass", o: ["50 N","0.5","5","500"] },
  { q: "Work W = Fs, F=20 N, s=5 m", o: ["100 J","25","4","1000"] },
  { q: "Power P = W/t, 200 J in 10 s", o: ["20 W","2000","2","190"] },
  { q: "Density ρ = m/V, m=200 g, V=40 cm³", o: ["5 g/cm³","8","0.2","160"] },
  { q: "1 km = ? m", o: ["1000","100","10000","10"] },
  { q: "1 hour = ? seconds", o: ["3600","60","600","360"] },
  { q: "Wave speed v = fλ, f=10 Hz, λ=2 m", o: ["20 m/s","5","12","0.2"] },
  { q: "Frequency = 1/period, T=0.2 s", o: ["5 Hz","0.2","2","50"] },
  { q: "Series resistance R = R₁+R₂, 4 Ω + 6 Ω", o: ["10 Ω","2.4 Ω","24 Ω","0"] },
  { q: "Ohm's law V = IR, I=2 A, R=5 Ω", o: ["10 V","2.5","7","0.4"] },
  { q: "Parallel 1/R = 1/2 + 1/2, total resistance", o: ["1 Ω","4 Ω","2 Ω","0.5 Ω"] },
  { q: "Free fall h = ½gt², g=10, t=2 s", o: ["20 m","10","40","5"] },
  { q: "Pressure P = F/A, F=100 N, A=5 m²", o: ["20 Pa","500","0.05","95"] },
  { q: "Kinetic energy Ek = ½mv², m=2 kg, v=3 m/s", o: ["9 J","6","3","18"] },
  { q: "Momentum p = mv, m=4 kg, v=5 m/s", o: ["20","0.8","9","1"] },
  { q: "Speed of light in vacuum ≈ 3×10⁸ m/s, i.e.", o: ["300 million meters per second","3 meters per second","3 km/s","3 million meters per second"] }
];
const chem = [
  { q: "Relative molecular mass of H₂O (H=1, O=16)", o: ["18","16","20","17"] },
  { q: "Number of particles in 1 mol of gas", o: ["6.02×10²³","12","1","22.4"] },
  { q: "Relative molecular mass of NaCl (Na=23, Cl=35.5)", o: ["58.5","58","59","35.5"] },
  { q: "Relative molecular mass of CO₂ (C=12, O=16)", o: ["44","28","32","12"] },
  { q: "Balanced 2H₂ + O₂ → 2H₂O, number of water molecules formed", o: ["2","1","4","3"] },
  { q: "pH of an acid", o: ["< 7","> 7","= 7","= 0"] },
  { q: "pH of a base", o: ["> 7","< 7","= 7","14"] },
  { q: "pH of a neutral solution", o: ["7","0","14","1"] },
  { q: "How many elements are in the first period of the periodic table?", o: ["2","1","8","18"] },
  { q: "Metals conduct electricity mainly due to", o: ["free electrons","ions","protons","neutrons"] },
  { q: "Main products of water electrolysis", o: ["H₂ + O₂","H₂ + Cl₂","O₂ + N₂","H₂ + CO₂"] },
  { q: "Which is NOT one of the three elements of combustion?", o: ["catalyst","combustible material","oxidizer (oxygen)","temperature at ignition point"] },
  { q: "Molar mass of O₂", o: ["32 g/mol","16","8","24"] },
  { q: "Mass of 2 mol H₂O", o: ["36 g","18","20","9"] },
  { q: "Density of water at room temperature is about", o: ["1 g/cm³","10","0.1","100"] },
  { q: "Precipitate formed by AgNO₃ + NaCl", o: ["AgCl↓","NaCl","AgNO₃","H₂O"] },
  { q: "An oxidizing agent gains in a reaction", o: ["electrons","protons","neutrons","loses electrons"] },
  { q: "Which of the following is a common greenhouse gas?", o: ["CO₂","O₂","N₂","He"] },
  { q: "Isotopes refer to the same element with different", o: ["numbers of neutrons","numbers of protons","numbers of electrons","same mass"] },
  { q: "In a salt-water solution, the solute is", o: ["NaCl","water","H","Cl"] }
];
const cn = [
  { q: "What does 'experiment' mean?", o: ["conduct a scientific test to verify","compute a numerical result","write a written report","read literature"] },
  { q: "In research, 'hypothesis' refers to?", o: ["a conjecture to be tested","a proven conclusion","raw data","experimental apparatus"] },
  { q: "In an experiment, 'variable' refers to?", o: ["a factor that can be changed","a constant held fixed","the final answer","a measuring instrument"] },
  { q: "A 'conclusion' is the ___ of research?", o: ["final judgment","opening question","materials list","intermediate step"] },
  { q: "What does 'error' refer to?", o: ["deviation between measured and true value","the correct answer","a unit of measurement","a calculation formula"] },
  { q: "What does 'sample' refer to?", o: ["a part of the studied population","the entire population","experimental apparatus","written report"] },
  { q: "The purpose of setting a 'control group' is?", o: ["to serve as a comparison baseline","to increase the number of variables","to reduce sample size","to speed up the experiment"] },
  { q: "Data 'trend' refers to?", o: ["the direction or pattern of change","a single isolated value","a calculation error","a unit of measurement"] },
  { q: "Order the research steps: ① record experimental data ② propose hypothesis ③ analyze data to conclude ④ design experiment", o: ["②④①③","①②③④","④②①③","②①④③"] },
  { q: "Order: ① heat solution ② observe precipitate ③ mix two reagents ④ record phenomenon", o: ["③①②④","①②③④","④③②①","②①④③"] },
  { q: "Order: ① draw conclusion ② collect data ③ propose hypothesis ④ design plan", o: ["③④②①","①②③④","④③①②","②④③①"] },
  { q: "Order: ① clean apparatus ② perform titration ③ prepare solution ④ record endpoint", o: ["①③②④","③①②④","④③②①","②①④③"] },
  { q: "According to this passage, oil's density is ___ water's", o: ["smaller","greater","equal","unrelated"] },
  { q: "(Continued) An iron block placed in water will", o: ["sink to the bottom","float on the surface","stay suspended in the middle","dissolve"] },
  { q: "(Continued) The key factor determining float or sink is", o: ["comparison of object and liquid densities","the object's color","the object's shape","the surrounding temperature"] },
  { q: "(Continued) This passage mainly explains", o: ["the relation between density and float/sink","how to smelt steel","types of edible oil","the chemical composition of water"] },
  { q: "The main purpose of controlling variables is", o: ["ensure differences come from a single factor","speed up the experiment","reduce sample size","increase instrument use"] },
  { q: "(Continued) Keeping 'water, temperature, soil the same' is to", o: ["control irrelevant variables","add new variables","reduce light","speed up the reaction"] },
  { q: "(Continued) The group receiving different light treatment is called", o: ["experimental group","control group","sample","population"] },
  { q: "(Continued) The group kept under standard conditions is called", o: ["control group","experimental group","variable","data"] }
];
const ALL = [...math, ...physics, ...chem, ...cn];

const nameMap = {
  "数学 Math": "Mathematics",
  "物理 Physics": "Physics",
  "化学 Chemistry": "Chemistry",
  "学术中文 Academic Chinese": "Academic Chinese"
};
const titleEn = "CSCA Full Mock Exam · Level 4";
const subtitleEn = "No calculator · 80 questions · 90 minutes · Score is for self-diagnosis only, not an official cutoff";
const passageEns = [
  "The density of water is about 1 g/cm³. Oil has a lower density than water, about 0.9 g/cm³. When oil is poured into water, it floats on the surface. The density of iron is about 7.8 g/cm³, far greater than water, so an iron block sinks to the bottom. Whether an object floats or sinks is determined by the relative sizes of its density and the liquid's density.",
  "Scientific experiments often require controlling variables. For example, when studying 'whether light duration affects plant growth', aside from light duration, water, temperature, and soil should all be kept the same. This way, if the two groups of plants differ in height, the difference can be attributed to light duration. In such experiments, the group receiving different light treatment is called the experimental group, and the group kept under standard conditions is called the control group."
];

// ---- helpers ----
function parseStr(s, qIdx) {
  let i = qIdx + 1;
  while (i < s.length) {
    if (s[i] === "\\") { i += 2; continue; }
    if (s[i] === '"') return i;
    i++;
  }
  throw new Error("unterminated string at " + qIdx);
}
function findArrEnd(s, bIdx) {
  let depth = 0, i = bIdx, inStr = false;
  while (i < s.length) {
    const c = s[i];
    if (inStr) {
      if (c === "\\") { i += 2; continue; }
      if (c === '"') inStr = false;
      i++; continue;
    }
    if (c === '"') { inStr = true; i++; continue; }
    if (c === "[") depth++;
    else if (c === "]") { depth--; if (depth === 0) return i; }
    i++;
  }
  throw new Error("unterminated array");
}
function q(s) { return '"' + s + '"'; }

const ops = [];
let pos = 0, qi = 0, passCount = 0;
let cntTitle = 0, cntSub = 0, cntName = 0, cntPassage = 0, cntQ = 0, cntOpts = 0;

const markers = ["title: \"", "subtitle: \"", "name: \"", "passage: \"", " q: \"", "opts: ["];

while (pos < src.length) {
  let best = -1, bestType = null;
  for (const m of markers) {
    const idx = src.indexOf(m, pos);
    if (idx !== -1 && (best === -1 || idx < best)) { best = idx; bestType = m; }
  }
  if (best === -1) break;
  const qIdx = best + bestType.length - 1; // index of the opening quote (for string markers) OR for opts the '['
  if (bestType === "opts: [") {
    const open = src.indexOf("[", best);
    const end = findArrEnd(src, open);
    const arr = JSON.stringify(ALL[qi - 1].o);
    ops.push({ at: end + 1, text: ", optsEn: " + arr });
    cntOpts++;
    pos = end + 1;
  } else {
    const close = parseStr(src, qIdx);
    const value = src.slice(qIdx + 1, close);
    if (bestType === "title: \"") { ops.push({ at: close + 1, text: ", titleEn: " + q(titleEn) }); cntTitle++; }
    else if (bestType === "subtitle: \"") { ops.push({ at: close + 1, text: ", subtitleEn: " + q(subtitleEn) }); cntSub++; }
    else if (bestType === "name: \"") {
      const ne = nameMap[value];
      if (!ne) throw new Error("unknown name: " + value);
      ops.push({ at: close + 1, text: ", nameEn: " + q(ne) }); cntName++;
    }
    else if (bestType === "passage: \"") {
      const pe = passageEns[passCount];
      if (!pe) throw new Error("too many passages");
      ops.push({ at: close + 1, text: ", passageEn: " + q(pe) }); cntPassage++; passCount++;
    }
    else if (bestType === " q: \"") {
      const e = ALL[qi].q;
      ops.push({ at: close + 1, text: ", qEn: " + q(e) }); cntQ++; qi++;
    }
    pos = close + 1;
  }
}

if (qi !== 80) throw new Error("expected 80 questions, got " + qi);
if (passCount !== 2) throw new Error("expected 2 passages, got " + passCount);
if (cntName !== 4) throw new Error("expected 4 names, got " + cntName);
if (cntTitle !== 1 || cntSub !== 1) throw new Error("title/subtitle count wrong");
if (cntOpts !== 80) throw new Error("expected 80 opts, got " + cntOpts);

// apply right-to-left
ops.sort((a, b) => b.at - a.at);
for (const op of ops) src = src.slice(0, op.at) + op.text + src.slice(op.at);
fs.writeFileSync("mock.js", src);
console.log("Inserted: title", cntTitle, "subtitle", cntSub, "names", cntName, "passages", cntPassage, "questions", cntQ, "opts", cntOpts);
