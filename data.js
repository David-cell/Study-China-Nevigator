// StudyChina Navigator — university dataset.
// Every `applyUrl` / `isoUrl` was verified against the school's official
// international-students office (or its official application platform) during
// research in Aug 2026. The `csca` / `cscaSubjects` fields reflect what each
// school published in its 2026 undergraduate admission guide. Where a school
// only states "required by national policy" without naming subjects, we apply
// the standard subject pattern for its discipline and mark `csca` accordingly.
// Treat all figures as indicative — the official yearly admission guide
// overrides everything here. Add entries to grow the directory; no code changes.

// CSCA subject vocabulary used in `cscaSubjects` / `majors[].cscaSubjects`:
//   "数学"  = Mathematics (compulsory for every undergrad applicant)
//   "物理"  = Physics
//   "化学"  = Chemistry
//   "理科中文" = Science/Professional Chinese (science, engineering, medicine)
//   "文科中文" = Liberal-Arts Chinese (humanities, social science, economics)
// minScore holds a school's CSCA requirement when one is known, else null.
// scoreSource: "official" (school's own admissions doc/PDF) | "reported"
//   (admissions-office reply aggregated by a third party, NOT on the school's
//   public site) | undefined (not published — most schools).
// scoreBasis: short human-readable explanation of the number/source.
// Most schools have NOT published numeric cut-offs, so treat these as indicative.

const UNIVERSITIES = [
  {
    "id": "thu",
    "nameEn": "Tsinghua University",
    "nameZh": "清华大学",
    "badge": "清",
    "color": "#A52019",
    "city": "Beijing",
    "region": "North",
    "types": [
      "C9",
      "Comprehensive"
    ],
    "blurb": "China's #1 ranked university; strongest in engineering, CS, and business.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Very limited — most programs are Chinese-taught. A few English-taught grad programs exist.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5–6 for Chinese-taught; English proof for English-taught grad programs.",
    "deadline": "Undergrad: rolling batches Dec–May. Grad: ~Dec–Mar.",
    "tuition": "Self-funded undergrad ~¥30k–50k/yr (varies by school).",
    "applyUrl": "https://apply.join-tsinghua.edu.cn/international",
    "isoUrl": "https://is.tsinghua.edu.cn/",
    "highlights": [
      "Undergrad apply portal: apply.join-tsinghua.edu.cn",
      "Grad apply portal: yzbm.tsinghua.edu.cn/intlLogin",
      "Entrance exam / comprehensive test for undergrad"
    ],
    "tier": "985",
    "strongSubjects": [
      "计算机科学",
      "电气工程",
      "建筑学",
      "经济管理"
    ],
    "strongSubjectsEn": [
      "Computer Science",
      "Electrical Engineering",
      "Architecture",
      "Economics & Management",
    ],
    "strengths": [
      "工程学科全球领先",
      "国际声誉卓著",
      "科研实力雄厚"
    ],
    "strengthsEn": [
      "Globally leading engineering disciplines",
      "Outstanding international reputation",
      "Strong research capability",
    ],},
  {
    "id": "pku",
    "nameEn": "Peking University",
    "nameZh": "北京大学",
    "badge": "北",
    "color": "#1A4C8B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "C9",
      "Comprehensive"
    ],
    "blurb": "China's top liberal-arts and sciences university; oldest national university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad is Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 6 (writing ≥65) for Chinese-taught; TOEFL 100+ / GRE 315+ for English-taught.",
    "deadline": "Undergrad entrance exam cycle ~Mar–May. Grad ~Dec–Mar.",
    "tuition": "Self-funded ~¥28k–40k/yr.",
    "applyUrl": "https://www.studyatpku.com",
    "isoUrl": "https://isd.pku.edu.cn/",
    "highlights": [
      "Unified undergraduate entrance examination",
      "Apply portal: studyatpku.com",
      "Strong scholarships: CSC Type B, Beijing Gov, PKU scholarships"
    ],
    "tier": "985",
    "strongSubjects": [
      "中国语言文学",
      "经济学",
      "物理学",
      "临床医学"
    ],
    "strongSubjectsEn": [
      "Chinese Language & Literature",
      "Economics",
      "Physics",
      "Clinical Medicine",
    ],
    "strengths": [
      "人文社科顶尖",
      "综合实力强",
      "国际交流广泛"
    ],
    "strengthsEn": [
      "Top-tier humanities & social sciences",
      "Strong comprehensive strength",
      "Extensive international exchange",
    ],},
  {
    "id": "blcu",
    "nameEn": "Beijing Language and Culture University",
    "nameZh": "北京语言大学",
    "badge": "北语",
    "color": "#C8442A",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Language",
      "Chinese Studies"
    ],
    "blurb": "The premier school for learning Chinese as a foreign language — the 'professional Chinese' gap.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught: Finance, Int'l Economics & Trade, Accounting, Sinology.",
    "csca": "Explicitly required for ALL undergraduate applicants from Fall 2026 (per 2026 admission guide).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (180+) for Chinese-taught; IELTS 5.5 / TOEFL 80 for English-taught.",
    "deadline": "March intake: Jan 12. September intake: Jun 30.",
    "tuition": "¥25,800–39,000/yr.",
    "applyUrl": "https://apply.blcu.edu.cn",
    "isoUrl": "https://admission.blcu.edu.cn/",
    "highlights": [
      "Only int'l university focused on teaching Chinese to foreigners",
      "Best fit for students whose bottleneck is Chinese proficiency",
      "CSCA requirement written into the 2026 undergraduate guide"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "汉语国际教育",
      "语言学",
      "汉语言文学"
    ],
    "strongSubjectsEn": [
      "Teaching Chinese to Speakers of Other Languages",
      "Linguistics",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "汉语教学权威",
      "国际学生众多",
      "语言环境优越"
    ],
    "strengthsEn": [
      "Authoritative Chinese-language teaching",
      "Large international student body",
      "Superior language environment",
    ],},
  {
    "id": "ruc",
    "nameEn": "Renmin University of China",
    "nameZh": "中国人民大学",
    "badge": "人",
    "color": "#9E1B32",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Humanities",
      "Social Sciences"
    ],
    "blurb": "China's leading university for humanities, social sciences, economics and law.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; some English-taught grad programs (e.g. Silk Road School).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5–6 for Chinese-taught programs.",
    "deadline": "Undergrad unified exam ~Nov–Mar. Grad ~Sep intake Mar–Apr.",
    "tuition": "Self-funded; application fee ¥800.",
    "applyUrl": "https://international.ruc.edu.cn/application",
    "isoUrl": "https://iso.ruc.edu.cn/",
    "highlights": [
      "Apply portal: international.ruc.edu.cn/application",
      "Top choice for economics, law, public administration",
      "Silk Road School (Suzhou) English-taught master's"
    ],
    "tier": "985",
    "strongSubjects": [
      "经济学",
      "法学",
      "新闻传播学",
      "社会学"
    ],
    "strongSubjectsEn": [
      "Economics",
      "Law",
      "Journalism & Communication",
      "Sociology",
    ],
    "strengths": [
      "社科人文顶尖",
      "经管法强势",
      "就业前景良好"
    ],
    "strengthsEn": [
      "Top-tier social sciences & humanities",
      "Strong economics, management & law",
      "Good career prospects",
    ],},
  {
    "id": "fudan",
    "nameEn": "Fudan University",
    "nameZh": "复旦大学",
    "badge": "复",
    "color": "#1B5E3F",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "C9",
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Elite Shanghai university; strong medicine (MBBS), management, and social sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS, UIPE, and many master's/PhD programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": 80,
    "scoreSource": "reported",
    "scoreBasis": "优先录取 ≥80（招办复函；面试看重数理基础）",
    "language": "HSK for Chinese-taught; TOEFL 90 / IELTS 6.5 / Duolingo 110 for English-taught.",
    "deadline": "Phase I Oct–Dec; Phase II Mar (self-supported).",
    "tuition": "English-taught undergrad ¥69,000/yr; app fee ¥800.",
    "applyUrl": "https://istudent.fudan.edu.cn/apply",
    "isoUrl": "https://iso.fudan.edu.cn/isoenglish/",
    "highlights": [
      "MBBS (Bachelor of Medicine) taught in English",
      "Apply portal: istudent.fudan.edu.cn/apply",
      "Shanghai Government & CSC scholarships available"
    ],
    "tier": "985",
    "strongSubjects": [
      "新闻学",
      "经济学",
      "临床医学",
      "基础医学"
    ],
    "strongSubjectsEn": [
      "Journalism",
      "Economics",
      "Clinical Medicine",
      "Basic Medicine",
    ],
    "strengths": [
      "综合实力强",
      "医学声誉高",
      "上海区位优越"
    ],
    "strengthsEn": [
      "Strong comprehensive strength",
      "High medical reputation",
      "Prime Shanghai location",
    ],},
  {
    "id": "sjtu",
    "nameEn": "Shanghai Jiao Tong University",
    "nameZh": "上海交通大学",
    "badge": "交",
    "color": "#3A6EA5",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "C9",
      "Engineering",
      "Medical"
    ],
    "blurb": "Top engineering and tech university in Shanghai; strong med school affiliation.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught: Engineering cluster, Civil Eng, Sustainable Energy, Health Sci & Tech.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "scoreSource": "reported",
    "scoreBasis": "分数线保密（招办复函）；面试极看重口语",
    "language": "HSK for Chinese-taught; English proof for English-taught programs.",
    "deadline": "Early batch Dec–Feb; Regular batch Feb–Mar.",
    "tuition": "Degree programs ¥65,000/yr; app fee ¥800.",
    "applyUrl": "https://apply.sjtu.cn",
    "isoUrl": "https://isc.sjtu.cn/EN",
    "highlights": [
      "Apply portal: apply.sjtu.cn",
      "English-taught engineering clusters",
      "Med school (SHSMU) affiliated"
    ],
    "tier": "985",
    "strongSubjects": [
      "机械工程",
      "船舶与海洋工程",
      "临床医学",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Mechanical Engineering",
      "Naval Architecture & Ocean Engineering",
      "Clinical Medicine",
      "Computer Science",
    ],
    "strengths": [
      "工程医学强势",
      "就业前景好",
      "上海区位优越"
    ],
    "strengthsEn": [
      "Strong engineering & medicine",
      "Excellent career prospects",
      "Prime Shanghai location",
    ],},
  {
    "id": "tongji",
    "nameEn": "Tongji University",
    "nameZh": "同济大学",
    "badge": "同",
    "color": "#7A1F2B",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Engineering",
      "Architecture"
    ],
    "blurb": "Renowned for architecture, civil engineering, and design; English-taught civil engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught Civil Engineering (¥35,000/yr) and selected grad programs.",
    "csca": "Explicitly required for undergrad — e.g. Civil Eng needs CSCA Math + Physics.",
    "cscaSubjects": [
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 preferred; IELTS 6.5 / TOEFL 85 / GRE 310 for English-taught.",
    "deadline": "Undergrad: Jan 10 – Mar 31.",
    "tuition": "English-taught undergrad ¥35,000/yr; app fee ¥600.",
    "applyUrl": "http://study-info.tongji.edu.cn",
    "isoUrl": "https://study.tongji.edu.cn/English/HOME.htm",
    "highlights": [
      "CSCA subjects spelled out per major (Math/Physics etc.)",
      "World-class architecture & urban planning",
      "Apply portal: study-info.tongji.edu.cn"
    ],
    "tier": "985",
    "strongSubjects": [
      "土木工程",
      "建筑学",
      "城乡规划",
      "艺术设计"
    ],
    "strongSubjectsEn": [
      "Civil Engineering",
      "Architecture",
      "Urban & Rural Planning",
      "Art & Design",
    ],
    "strengths": [
      "土木建筑顶尖",
      "中德交流深入",
      "上海区位优越"
    ],
    "strengthsEn": [
      "Top-tier civil engineering & architecture",
      "Deep China-Germany exchange",
      "Prime Shanghai location",
    ],},
  {
    "id": "zju",
    "nameEn": "Zhejiang University",
    "nameZh": "浙江大学",
    "badge": "浙",
    "color": "#B23A2E",
    "city": "Hangzhou",
    "region": "East",
    "types": [
      "C9",
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Top comprehensive university; popular MBBS (medicine) program for int'l students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergraduate programs available; MBBS in English.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English test for English-taught programs.",
    "deadline": "Dec 1 – Feb 28 (some majors May 31).",
    "tuition": "MBBS ¥42,800/yr; varies by program.",
    "applyUrl": "https://isinfosys.zju.edu.cn/recruit/login.shtml",
    "isoUrl": "https://iczu.zju.edu.cn/",
    "highlights": [
      "MBBS (Bachelor of Medicine) in English",
      "Apply portal: isinfosys.zju.edu.cn",
      "Strong in engineering, agronomy, and medicine"
    ],
    "tier": "985",
    "strongSubjects": [
      "农业工程",
      "计算机科学",
      "光学工程",
      "临床医学"
    ],
    "strongSubjectsEn": [
      "Agricultural Engineering",
      "Computer Science",
      "Optical Engineering",
      "Clinical Medicine",
    ],
    "strengths": [
      "综合实力强",
      "工科农医均衡",
      "创新创业活跃"
    ],
    "strengthsEn": [
      "Strong comprehensive strength",
      "Balanced engineering, agriculture & medicine",
      "Active innovation & entrepreneurship",
    ],},
  {
    "id": "nju",
    "nameEn": "Nanjing University",
    "nameZh": "南京大学",
    "badge": "南",
    "color": "#1F4E79",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "C9",
      "Comprehensive"
    ],
    "blurb": "Historic elite university; clear, student-friendly international admissions site.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Undergrad mostly Chinese-taught; English-taught grad programs exist.",
    "csca": "Explicitly required from 2026/27 — 'submit CSCA test report' stated in the guide.",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 (180+) for Chinese-taught undergrad.",
    "deadline": "Undergrad: Mar 1 – May 15.",
    "tuition": "¥21,000–42,000/yr (liberal arts to medical).",
    "applyUrl": "http://istudy.nju.edu.cn/",
    "isoUrl": "https://hwxy.nju.edu.cn/",
    "highlights": [
      "CSCA deadline to NJU: May 15",
      "Apply portal: istudy.nju.edu.cn",
      "One of the clearest int'l admissions sites to navigate"
    ],
    "tier": "985",
    "strongSubjects": [
      "天文学",
      "物理学",
      "地质学",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Astronomy",
      "Physics",
      "Geology",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "基础学科强",
      "学术氛围浓厚",
      "国际声誉卓著"
    ],
    "strengthsEn": [
      "Strong basic disciplines",
      "Strong academic atmosphere",
      "Outstanding international reputation",
    ],},
  {
    "id": "xjtu",
    "nameEn": "Xi'an Jiaotong University",
    "nameZh": "西安交通大学",
    "badge": "西",
    "color": "#2E6B4F",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "C9",
      "Engineering"
    ],
    "blurb": "Elite engineering university in western China; affordable foundation programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for undergrad; English proof for English-taught grad.",
    "deadline": "Self-funded undergrad until May 15.",
    "tuition": "Foundation ¥25,800/yr; degree varies; app fee ¥500.",
    "applyUrl": "http://isso.xjtu.edu.cn/recruit/login",
    "isoUrl": "https://sie.xjtu.edu.cn/",
    "highlights": [
      "Pre-university foundation program (HSK bridging)",
      "Apply portal: isso.xjtu.edu.cn",
      "Lower cost of living in Xi'an"
    ],
    "tier": "985",
    "strongSubjects": [
      "电气工程",
      "机械工程",
      "管理科学与工程",
      "能源动力"
    ],
    "strongSubjectsEn": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Management Science & Engineering",
      "Energy & Power",
    ],
    "strengths": [
      "工科实力强",
      "西部枢纽区位",
      "求学性价比高"
    ],
    "strengthsEn": [
      "Strong engineering strength",
      "Western hub location",
      "High cost-effectiveness for study",
    ],},
  {
    "id": "hit",
    "nameEn": "Harbin Institute of Technology",
    "nameZh": "哈尔滨工业大学",
    "badge": "哈",
    "color": "#8C2D2D",
    "city": "Harbin",
    "region": "Northeast",
    "types": [
      "C9",
      "Engineering"
    ],
    "blurb": "Top engineering/tech university (C9); strong English-taught graduate school.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many English-taught master's & PhD programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (210+) for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught.",
    "deadline": "Grad Mar–Apr; undergrad varies by intake.",
    "tuition": "App fee ¥400; tuition varies by program.",
    "applyUrl": "https://hit.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "http://en.hit.cn/",
    "highlights": [
      "Apply portal: hit.at0086.cn",
      "Three campuses: Harbin, Weihai, Shenzhen",
      "Heavy English-taught graduate offerings"
    ],
    "tier": "985",
    "strongSubjects": [
      "航天工程",
      "机械工程",
      "材料科学",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Aerospace Engineering",
      "Mechanical Engineering",
      "Materials Science",
      "Computer Science",
    ],
    "strengths": [
      "航空航天顶尖",
      "工科实力强",
      "国际声誉高"
    ],
    "strengthsEn": [
      "Top-tier aerospace",
      "Strong engineering strength",
      "High international reputation",
    ],},
  {
    "id": "whu",
    "nameEn": "Wuhan University",
    "nameZh": "武汉大学",
    "badge": "武",
    "color": "#5A3E85",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Prestigious comprehensive university; MBBS and clinical medicine in English.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS, Clinical Medicine, and several engineering programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English proof for English-taught programs.",
    "deadline": "Dec 1 – Jun 15 (autumn intake).",
    "tuition": "MBBS ¥35,000/yr; medicine up to ¥42,000; varies.",
    "applyUrl": "http://admission.whu.edu.cn",
    "isoUrl": "https://admission.whu.edu.cn/",
    "highlights": [
      "English-taught MBBS & Clinical Medicine",
      "Apply portal: admission.whu.edu.cn",
      "Beautiful campus, lower living costs"
    ],
    "tier": "985",
    "strongSubjects": [
      "测绘科学与技术",
      "法学",
      "水利水电工程",
      "遥感科学"
    ],
    "strongSubjectsEn": [
      "Surveying & Mapping Science & Technology",
      "Law",
      "Water Conservancy & Hydropower Engineering",
      "Remote Sensing Science",
    ],
    "strengths": [
      "校园环境优美",
      "综合声誉良好",
      "法学强势"
    ],
    "strengthsEn": [
      "Beautiful campus environment",
      "Good comprehensive reputation",
      "Strong law",
    ],},
  {
    "id": "sysu",
    "nameEn": "Sun Yat-sen University",
    "nameZh": "中山大学",
    "badge": "中",
    "color": "#0F6E4F",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Leading university in South China; strong medicine and business, Guangzhou/Shenzhen/Zhuhai.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English proof for English-taught programs.",
    "deadline": "Undergrad: Jan 1 – Apr 30 (two rounds).",
    "tuition": "Varies by program; scholarships available.",
    "applyUrl": "https://apply.sysu.edu.cn",
    "isoUrl": "https://iso.sysu.edu.cn/",
    "highlights": [
      "Apply portal: apply.sysu.edu.cn",
      "Strong in South China job market",
      "Canton (Guangzhou) location — gateway to the Greater Bay Area"
    ],
    "tier": "985",
    "strongSubjects": [
      "临床医学",
      "工商管理",
      "哲学",
      "生物学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Business Administration",
      "Philosophy",
      "Biology",
    ],
    "strengths": [
      "华南区位优越",
      "医学声誉高",
      "就业前景良好"
    ],
    "strengthsEn": [
      "Prime South China location",
      "High medical reputation",
      "Good career prospects",
    ],},
  {
    "id": "buaa",
    "nameEn": "Beihang University",
    "nameZh": "北京航空航天大学",
    "badge": "航",
    "color": "#1B3A6B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Aerospace"
    ],
    "blurb": "Top aeronautics, astronautics and computer-science university in Beijing.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; some English-taught grad programs.",
    "csca": "Required for undergraduate applicants (理科中文 + 数学 + subject per major).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "scoreSource": "reported",
    "scoreBasis": "无硬性最低分（招办复函；奖学金看 GPA/科研）",
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Dec – May (per guide).",
    "tuition": "¥24,000–35,000/yr typical.",
    "applyUrl": "http://admission.buaa.edu.cn/",
    "isoUrl": "https://ev.buaa.edu.cn/",
    "highlights": [
      "CSCA required: 理科中文 + 数学 + subject by major",
      "Strength in aerospace, CS, mechanical",
      "Apply portal: admission.buaa.edu.cn"
    ],
    "tier": "985",
    "strongSubjects": [
      "航空宇航科学",
      "计算机科学",
      "仪器科学",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Aeronautics & Astronautics Science",
      "Computer Science",
      "Instrumentation Science",
      "Materials Science",
    ],
    "strengths": [
      "航空航天顶尖",
      "工科就业好",
      "北京区位优越"
    ],
    "strengthsEn": [
      "Top-tier aerospace",
      "Good engineering employment",
      "Prime Beijing location",
    ],},
  {
    "id": "bit",
    "nameEn": "Beijing Institute of Technology",
    "nameZh": "北京理工大学",
    "badge": "理",
    "color": "#7A1F2B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Defense"
    ],
    "blurb": "Strong in mechanical, automotive, aerospace and information engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergrad: Aero, Automation, CS, Mechanical, Electronics, Int'l Economics.",
    "csca": "Required for undergraduate applicants; subjects named per English-taught program.",
    "cscaSubjects": [
      "数学",
      "物理"
    ],
    "minScore": 70,
    "scoreSource": "reported",
    "scoreBasis": "奖学金硬性 ≥70（招办复函，非官网公示）；珠海校区新生奖学金 ≥75",
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "English-taught undergrad ~¥28,000–35,000/yr.",
    "applyUrl": "https://apply.isc.bit.edu.cn",
    "isoUrl": "https://isc.bit.edu.cn/",
    "highlights": [
      "English-taught: Aero/Automation/CS/Mech/Electronics = 数学+物理",
      "International Economics = 数学",
      "Apply portal: apply.isc.bit.edu.cn"
    ],
    "majors": [
      {
        "name": "Aerospace / Automation / CS / Mechanical / Electronics (English)",
        "cscaSubjects": [
          "数学",
          "物理"
        ],
        "note": "CSCA Math + Physics"
      },
      {
        "name": "International Economics (English)",
        "cscaSubjects": [
          "数学"
        ],
        "note": "CSCA Math"
      },
      {
        "name": "Chinese-taught engineering",
        "cscaSubjects": [
          "理科中文",
          "数学",
          "物理"
        ],
        "note": "Adds Professional Chinese"
      }
    ],
    "tier": "985",
    "strongSubjects": [
      "兵器科学",
      "机械工程",
      "光学工程",
      "车辆工程"
    ],
    "strongSubjectsEn": [
      "Ordnance Science",
      "Mechanical Engineering",
      "Optical Engineering",
      "Vehicle Engineering",
    ],
    "strengths": [
      "国防特色鲜明",
      "工科就业好",
      "北京区位优越"
    ],
    "strengthsEn": [
      "Distinctive national-defense focus",
      "Good engineering employment",
      "Prime Beijing location",
    ],},
  {
    "id": "bnu",
    "nameEn": "Beijing Normal University",
    "nameZh": "北京师范大学",
    "badge": "师",
    "color": "#1A4C8B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "China's top normal (teacher-training) university; strong education and sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27) — subjects per guide.",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for Chinese-taught undergrad.",
    "deadline": "Undergrad: ~Dec – Apr.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "https://admission-is.bnu.edu.cn/",
    "isoUrl": "https://international.bnu.edu.cn/",
    "highlights": [
      "Top choice for education, psychology, geography",
      "Apply portal: admission-is.bnu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "教育学",
      "心理学",
      "地理学",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Psychology",
      "Geography",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "师范教育顶尖",
      "人文社科强",
      "北京区位优越"
    ],
    "strengthsEn": [
      "Top-tier teacher education",
      "Strong humanities & social sciences",
      "Prime Beijing location",
    ],},
  {
    "id": "bfsu",
    "nameEn": "Beijing Foreign Studies University",
    "nameZh": "北京外国语大学",
    "badge": "外",
    "color": "#C8442A",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Language",
      "International Studies"
    ],
    "blurb": "China's premier foreign-language and diplomacy university (101 languages).",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught: International Economics & Trade, Diplomacy, Sinology.",
    "csca": "Required for undergraduate applicants (e.g. 丝绸之路 program: 中文 + 数学).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–32,000/yr.",
    "applyUrl": "https://study.bfsu.edu.cn/",
    "isoUrl": "https://www.bfsu.edu.cn/",
    "highlights": [
      "101 languages taught — diplomacy & translation focus",
      "丝绸之路 scholarship program requires CSCA 中文+数学",
      "Apply portal: study.bfsu.edu.cn"
    ],
    "tier": "211",
    "strongSubjects": [
      "外国语言文学",
      "翻译学",
      "国际政治"
    ],
    "strongSubjectsEn": [
      "Foreign Languages & Literature",
      "Translation Studies",
      "International Politics",
    ],
    "strengths": [
      "外语教学权威",
      "外交就业优",
      "国际交流广"
    ],
    "strengthsEn": [
      "Authoritative foreign-language teaching",
      "Excellent diplomacy career prospects",
      "Extensive international exchange",
    ],},
  {
    "id": "bjtu",
    "nameEn": "Beijing Jiaotong University",
    "nameZh": "北京交通大学",
    "badge": "交",
    "color": "#2E6B4F",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Transport"
    ],
    "blurb": "Leading transport, logistics and information-systems engineering university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "https://bjtu.17gz.org",
    "isoUrl": "https://study.bjtu.edu.cn/",
    "highlights": [
      "Strength in rail, transport, CS",
      "Apply portal: bjtu.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "交通运输工程",
      "系统科学",
      "信息与通信",
      "土木工程"
    ],
    "strongSubjectsEn": [
      "Transportation Engineering",
      "Systems Science",
      "Information & Communication",
      "Civil Engineering",
    ],
    "strengths": [
      "交通学科强",
      "北京区位优越",
      "就业前景好"
    ],
    "strengthsEn": [
      "Strong transportation discipline",
      "Prime Beijing location",
      "Excellent career prospects",
    ],},
  {
    "id": "ustb",
    "nameEn": "University of Science and Technology Beijing",
    "nameZh": "北京科技大学",
    "badge": "科",
    "color": "#3A6EA5",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Materials"
    ],
    "blurb": "Strong in materials, metallurgy, and mineral engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "http://onlineapply.ustb.edu.cn/",
    "isoUrl": "https://isp.ustb.edu.cn/",
    "highlights": [
      "Materials & metallurgy strength",
      "Apply portal: onlineapply.ustb.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "冶金工程",
      "材料科学",
      "矿业工程",
      "科学技术史"
    ],
    "strongSubjectsEn": [
      "Metallurgical Engineering",
      "Materials Science",
      "Mining Engineering",
      "History of Science & Technology",
    ],
    "strengths": [
      "材料冶金顶尖",
      "工科就业好",
      "北京区位优越"
    ],
    "strengthsEn": [
      "Top-tier materials & metallurgy",
      "Good engineering employment",
      "Prime Beijing location",
    ],},
  {
    "id": "muc",
    "nameEn": "Minzu University of China",
    "nameZh": "中央民族大学",
    "badge": "民",
    "color": "#9E1B32",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Ethnic Studies",
      "Comprehensive"
    ],
    "blurb": "Premier university for ethnic/minority studies, humanities and social sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; some English-taught programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27) — subjects per guide.",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥20,000–28,000/yr typical.",
    "applyUrl": "http://muc.admissions.cn/",
    "isoUrl": "https://cie.muc.edu.cn/",
    "highlights": [
      "Ethnic culture, anthropology, arts strength",
      "Apply portal: muc.admissions.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "民族学",
      "社会学",
      "中国少数民族语言文学",
      "人类学"
    ],
    "strongSubjectsEn": [
      "Ethnology",
      "Sociology",
      "Chinese Ethnic Minority Languages & Literature",
      "Anthropology",
    ],
    "strengths": [
      "民族研究权威",
      "校园文化多元",
      "北京区位优越"
    ],
    "strengthsEn": [
      "Authoritative ethnic-studies research",
      "Diverse campus culture",
      "Prime Beijing location",
    ],},
  {
    "id": "nankai",
    "nameEn": "Nankai University",
    "nameZh": "南开大学",
    "badge": "南",
    "color": "#5A2A82",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "C9",
      "Comprehensive"
    ],
    "blurb": "Historic elite university; strong chemistry, economics, and mathematics.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Explicitly required for ALL undergraduate applicants (文科中文 / 数学 etc.).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for Chinese-taught undergrad.",
    "deadline": "Undergrad: ~Dec – Apr.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "https://nankai.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://study.nankai.edu.cn/",
    "highlights": [
      "CSCA required for all undergrad applicants",
      "Apply portal: nankai.at0086.cn",
      "Strong chemistry, economics, math"
    ],
    "tier": "985",
    "strongSubjects": [
      "数学",
      "化学",
      "经济学",
      "历史学"
    ],
    "strongSubjectsEn": [
      "Mathematics",
      "Chemistry",
      "Economics",
      "History",
    ],
    "strengths": [
      "基础学科强",
      "综合声誉好",
      "天津区位便利"
    ],
    "strengthsEn": [
      "Strong basic disciplines",
      "Good overall reputation",
      "Convenient Tianjin location",
    ],},
  {
    "id": "tju",
    "nameEn": "Tianjin University",
    "nameZh": "天津大学",
    "badge": "天",
    "color": "#0F6E4F",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "C9",
      "Engineering"
    ],
    "blurb": "China's oldest university; premier chemical, civil and mechanical engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": 65,
    "scoreSource": "reported",
    "scoreBasis": "CSC 奖学金资格线：数学 ≥70 / 物理 ≥65（招办邮件）",
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "https://tju.at0086.cn/student",
    "isoUrl": "https://study.tju.edu.cn/",
    "highlights": [
      "Oldest university in China (est. 1895)",
      "Apply portal: tju.at0086.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "化学工程",
      "建筑学",
      "仪器科学",
      "水利工程"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering",
      "Architecture",
      "Instrumentation Science",
      "Hydraulic Engineering",
    ],
    "strengths": [
      "工科实力强",
      "化工建筑顶尖",
      "天津区位优"
    ],
    "strengthsEn": [
      "Strong engineering strength",
      "Top-tier chemical engineering & architecture",
      "Advantageous Tianjin location",
    ],},
  {
    "id": "ecnu",
    "nameEn": "East China Normal University",
    "nameZh": "华东师范大学",
    "badge": "华师",
    "color": "#1B5E3F",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Top normal university; strong education, psychology and basic sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27) — subjects per guide.",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for Chinese-taught undergrad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "http://lxsapply.ecnu.edu.cn/",
    "isoUrl": "https://io.ecnu.edu.cn/",
    "highlights": [
      "Top education & teacher training in East China",
      "Apply portal: lxsapply.ecnu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "教育学",
      "地理学",
      "心理学",
      "软件工程"
    ],
    "strongSubjectsEn": [
      "Education",
      "Geography",
      "Psychology",
      "Software Engineering",
    ],
    "strengths": [
      "师范教育强",
      "上海区位优越",
      "人文社科优"
    ],
    "strengthsEn": [
      "Strong teacher education",
      "Prime Shanghai location",
      "Excellent humanities & social sciences",
    ],},
  {
    "id": "shu",
    "nameEn": "Shanghai University",
    "nameZh": "上海大学",
    "badge": "上大",
    "color": "#B23A2E",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Large comprehensive university; strong materials, film, and business.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Dec – May.",
    "tuition": "¥22,000–32,000/yr typical.",
    "applyUrl": "https://apply.shu.edu.cn/",
    "isoUrl": "https://iec.shu.edu.cn/",
    "highlights": [
      "Comprehensive with strong materials & film",
      "Apply portal: apply.shu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "机械工程",
      "社会学",
      "美术学",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Mechanical Engineering",
      "Sociology",
      "Fine Arts",
      "Materials Science",
    ],
    "strengths": [
      "上海区位优越",
      "综合实力上升",
      "就业前景好"
    ],
    "strengthsEn": [
      "Prime Shanghai location",
      "Rising comprehensive strength",
      "Excellent career prospects",
    ],},
  {
    "id": "ecust",
    "nameEn": "East China University of Science and Technology",
    "nameZh": "华东理工大学",
    "badge": "华理",
    "color": "#1F4E79",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Chemical",
      "Engineering"
    ],
    "blurb": "Leading chemical-engineering and materials-science university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "http://apply.ecust.edu.cn",
    "isoUrl": "https://ies.ecust.edu.cn/",
    "highlights": [
      "Strength in chemical engineering, materials",
      "Apply portal: apply.ecust.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "化学工程",
      "材料科学",
      "生物工程",
      "制药工程"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering",
      "Materials Science",
      "Bioengineering",
      "Pharmaceutical Engineering",
    ],
    "strengths": [
      "化工学科顶尖",
      "工科就业好",
      "上海区位优越"
    ],
    "strengthsEn": [
      "Top-tier chemical engineering",
      "Good engineering employment",
      "Prime Shanghai location",
    ],},
  {
    "id": "sisu",
    "nameEn": "Shanghai International Studies University",
    "nameZh": "上海外国语大学",
    "badge": "上外",
    "color": "#0F6E4F",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Language",
      "International Studies"
    ],
    "blurb": "Elite foreign-language university; diplomacy, translation, area studies.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught: Int'l Economics & Trade, Int'l Politics, MTCSOL.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "http://apply.shisu.edu.cn",
    "isoUrl": "https://english.shanghai.gov.cn/",
    "highlights": [
      "101 languages & diplomacy focus",
      "Apply portal: apply.shisu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "外国语言文学",
      "翻译学",
      "国际关系",
      "区域国别研究"
    ],
    "strongSubjectsEn": [
      "Foreign Languages & Literature",
      "Translation Studies",
      "International Relations",
      "Area Studies",
    ],
    "strengths": [
      "语言类专业顶尖",
      "上海区位优势",
      "国际交流机会多"
    ],
    "strengthsEn": [
      "Top-tier language programs",
      "Shanghai location advantage",
      "Many international exchange opportunities",
    ],},
  {
    "id": "seu",
    "nameEn": "Southeast University",
    "nameZh": "东南大学",
    "badge": "东",
    "color": "#7A1F2B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Engineering",
      "Architecture"
    ],
    "blurb": "Elite engineering university; architecture, EE, transport strength.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "http://fs.seu.edu.cn/",
    "isoUrl": "https://iec.seu.edu.cn/",
    "highlights": [
      "Architecture & EE strength",
      "Apply portal: fs.seu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "建筑学",
      "土木工程",
      "电子科学与技术",
      "生物医学工程"
    ],
    "strongSubjectsEn": [
      "Architecture",
      "Civil Engineering",
      "Electronic Science & Technology",
      "Biomedical Engineering",
    ],
    "strengths": [
      "建筑土木全国领先",
      "地处长三角",
      "工科实力强"
    ],
    "strengthsEn": [
      "Nationally leading architecture & civil engineering",
      "Located in the Yangtze River Delta",
      "Strong engineering strength",
    ],},
  {
    "id": "suda",
    "nameEn": "Soochow University",
    "nameZh": "苏州大学",
    "badge": "苏",
    "color": "#0F6E4F",
    "city": "Suzhou",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Fast-rising comprehensive university in Suzhou; strong textiles, optoelectronics.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "https://suda.17gz.org",
    "isoUrl": "https://iaa.suda.edu.cn/",
    "highlights": [
      "Located in Suzhou (Yangtze Delta)",
      "Apply portal: suda.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "材料科学",
      "放射医学",
      "纺织工程",
      "法学"
    ],
    "strongSubjectsEn": [
      "Materials Science",
      "Radiation Medicine",
      "Textile Engineering",
      "Law",
    ],
    "strengths": [
      "地处苏州经济发达",
      "学科门类齐全",
      "区位优势明显"
    ],
    "strengthsEn": [
      "Located in economically developed Suzhou",
      "Comprehensive range of disciplines",
      "Strong location advantage",
    ],},
  {
    "id": "ustc",
    "nameEn": "University of Science and Technology of China",
    "nameZh": "中国科学技术大学",
    "badge": "中科",
    "color": "#A52019",
    "city": "Hefei",
    "region": "East",
    "types": [
      "C9",
      "Science"
    ],
    "blurb": "Elite science & tech university (C9); frontier research in physics, chem, CS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Explicitly required: 必考 理科中文 + 数学; 选考 物理 / 化学.",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: ~Dec – Apr. Grad: ~Dec – Mar.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "http://isa.ustc.edu.cn/",
    "isoUrl": "https://en.ustc.edu.cn/",
    "highlights": [
      "CSCA: 理科中文 + 数学 (必考), 物理/化学 (选考)",
      "Apply portal: isa.ustc.edu.cn",
      "Top-tier basic-science research"
    ],
    "majors": [
      {
        "name": "All undergraduate science/engineering",
        "cscaSubjects": [
          "理科中文",
          "数学"
        ],
        "note": "必考 (compulsory)"
      },
      {
        "name": "Physics / Chemistry / related",
        "cscaSubjects": [
          "物理",
          "化学"
        ],
        "note": "选考 (elective)"
      }
    ],
    "tier": "985",
    "strongSubjects": [
      "物理学",
      "化学",
      "天文学",
      "量子信息科学"
    ],
    "strongSubjectsEn": [
      "Physics",
      "Chemistry",
      "Astronomy",
      "Quantum Information Science",
    ],
    "strengths": [
      "理科实力顶尖",
      "科研氛围浓厚",
      "国际声誉高"
    ],
    "strengthsEn": [
      "Top-tier science strength",
      "Strong research atmosphere",
      "High international reputation",
    ],},
  {
    "id": "xmu",
    "nameEn": "Xiamen University",
    "nameZh": "厦门大学",
    "badge": "厦",
    "color": "#1B5E3F",
    "city": "Xiamen",
    "region": "East",
    "types": [
      "Comprehensive",
      "Marine"
    ],
    "blurb": "Picturesque coastal comprehensive university; strong economics, chem, marine.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs (incl. Malaysia campus); undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for Chinese-taught undergrad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–32,000/yr typical.",
    "applyUrl": "http://application.xmu.edu.cn",
    "isoUrl": "https://admissions.xmu.edu.cn/",
    "highlights": [
      "Scenic coastal campus; Malaysia campus",
      "Apply portal: application.xmu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "会计学",
      "海洋科学",
      "化学",
      "金融学"
    ],
    "strongSubjectsEn": [
      "Accounting",
      "Marine Science",
      "Chemistry",
      "Finance",
    ],
    "strengths": [
      "校园环境优美",
      "经济学科强",
      "临海区位优越"
    ],
    "strengthsEn": [
      "Beautiful campus environment",
      "Strong economics discipline",
      "Prime coastal location",
    ],},
  {
    "id": "sdu",
    "nameEn": "Shandong University",
    "nameZh": "山东大学",
    "badge": "山",
    "color": "#1A4C8B",
    "city": "Jinan",
    "region": "East",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Large comprehensive university; popular English-taught MBBS program.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS; other programs mostly Chinese-taught.",
    "csca": "Required for MBBS undergrad: CSCA 数学 + 化学.",
    "cscaSubjects": [
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 for MBBS.",
    "deadline": "MBBS: Jan – Jun. Other: Jan – May.",
    "tuition": "MBBS ¥38,000/yr typical.",
    "applyUrl": "http://www.apply.sdu.edu.cn",
    "isoUrl": "https://www.istudy.sdu.edu.cn/",
    "highlights": [
      "MBBS in English (数学 + 化学 required)",
      "Apply portal: apply.sdu.edu.cn",
      "Multiple campuses: Jinan, Qingdao, Weihai"
    ],
    "tier": "985",
    "strongSubjects": [
      "数学",
      "临床医学",
      "中国语言文学",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Mathematics",
      "Clinical Medicine",
      "Chinese Language & Literature",
      "Materials Science",
    ],
    "strengths": [
      "学科门类齐全",
      "文史底蕴深厚",
      "医学实力强"
    ],
    "strengthsEn": [
      "Comprehensive range of disciplines",
      "Deep literature & history heritage",
      "Strong medical strength",
    ],},
  {
    "id": "jlu",
    "nameEn": "Jilin University",
    "nameZh": "吉林大学",
    "badge": "吉",
    "color": "#5A3E85",
    "city": "Changchun",
    "region": "Northeast",
    "types": [
      "Comprehensive"
    ],
    "blurb": "One of China's largest comprehensive universities; strong medicine, law, autos.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "http://apply.jlu.edu.cn",
    "isoUrl": "https://cie.jlu.edu.cn/",
    "highlights": [
      "Among China's largest campuses",
      "Apply portal: apply.jlu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "车辆工程",
      "法学",
      "化学",
      "地质资源与地质工程"
    ],
    "strongSubjectsEn": [
      "Vehicle Engineering",
      "Law",
      "Chemistry",
      "Geological Resources & Geological Engineering",
    ],
    "strengths": [
      "规模宏大学科全",
      "汽车工程知名",
      "法学实力强"
    ],
    "strengthsEn": [
      "Vast scale with comprehensive disciplines",
      "Renowned for automotive engineering",
      "Strong law strength",
    ],},
  {
    "id": "hust",
    "nameEn": "Huazhong University of Science and Technology",
    "nameZh": "华中科技大学",
    "badge": "华科",
    "color": "#3A6EA5",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Engineering",
      "Medical"
    ],
    "blurb": "Elite engineering & med university; strong CS, EE, and Tongji Medical School.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Dec – May.",
    "tuition": "¥24,000–34,000/yr typical.",
    "applyUrl": "http://admission.hust.edu.cn/",
    "isoUrl": "https://admission.hust.edu.cn/",
    "highlights": [
      "Strong CS/EE + Tongji Medical School",
      "Apply portal: admission.hust.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "机械工程",
      "光学工程",
      "临床医学",
      "电气工程"
    ],
    "strongSubjectsEn": [
      "Mechanical Engineering",
      "Optical Engineering",
      "Clinical Medicine",
      "Electrical Engineering",
    ],
    "strengths": [
      "工科医科双强",
      "光电子领先",
      "就业前景好"
    ],
    "strengthsEn": [
      "Dual strength in engineering & medicine",
      "Leading optoelectronics",
      "Excellent career prospects",
    ],},
  {
    "id": "scu",
    "nameEn": "Sichuan University",
    "nameZh": "四川大学",
    "badge": "川",
    "color": "#B23A2E",
    "city": "Chengdu",
    "region": "Central-West",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Large comprehensive university; top dental and medical school (West China).",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": 70,
    "scoreSource": "reported",
    "scoreBasis": "综合 <70 高风险劝退（非公开内部数据）",
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–34,000/yr typical.",
    "applyUrl": "https://scu.17gz.org/member/login.do",
    "isoUrl": "https://global.scu.edu.cn/",
    "highlights": [
      "West China Medical/Dental School",
      "Apply portal: scu.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "口腔医学",
      "临床医学",
      "高分子材料",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Stomatology",
      "Clinical Medicine",
      "Polymer Materials",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "口腔医学全国领先",
      "华西医学知名",
      "学科门类齐全"
    ],
    "strengthsEn": [
      "Nationally leading stomatology",
      "Renowned West China medicine",
      "Comprehensive range of disciplines",
    ],},
  {
    "id": "uestc",
    "nameEn": "University of Electronic Science and Technology of China",
    "nameZh": "电子科技大学",
    "badge": "电",
    "color": "#1F4E79",
    "city": "Chengdu",
    "region": "Central-West",
    "types": [
      "Engineering",
      "EE"
    ],
    "blurb": "China's top electronics / ICT university; strong CS, EE, AI.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Explicitly required for undergraduate applicants (submit CSCA report).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "http://admission.uestc.edu.cn",
    "isoUrl": "https://www.international.uestc.edu.cn/",
    "highlights": [
      "Submit CSCA report for undergrad",
      "Apply portal: admission.uestc.edu.cn",
      "Top electronics / ICT in China"
    ],
    "tier": "985",
    "strongSubjects": [
      "电子科学与技术",
      "信息与通信工程",
      "计算机科学",
      "集成电路"
    ],
    "strongSubjectsEn": [
      "Electronic Science & Technology",
      "Information & Communication Engineering",
      "Computer Science",
      "Integrated Circuits",
    ],
    "strengths": [
      "电子信息顶尖",
      "行业就业热门",
      "地处成都"
    ],
    "strengthsEn": [
      "Top-tier electronics & information",
      "Popular for industry employment",
      "Located in Chengdu",
    ],},
  {
    "id": "scut",
    "nameEn": "South China University of Technology",
    "nameZh": "华南理工大学",
    "badge": "华工",
    "color": "#0F6E4F",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Engineering"
    ],
    "blurb": "Leading engineering university in South China; strong materials, food, architecture.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "http://www.scut.edu.cn/apply",
    "isoUrl": "https://sie.scut.edu.cn/",
    "highlights": [
      "Engineering strength in GBA",
      "Apply portal: scut.edu.cn/apply",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "轻工技术与工程",
      "食品科学",
      "材料科学",
      "化学工程"
    ],
    "strongSubjectsEn": [
      "Light Industry Technology & Engineering",
      "Food Science",
      "Materials Science",
      "Chemical Engineering",
    ],
    "strengths": [
      "轻工食品领先",
      "地处粤港澳大湾区",
      "工科就业强"
    ],
    "strengthsEn": [
      "Leading light industry & food",
      "Located in the Greater Bay Area",
      "Strong engineering employment",
    ],},
  {
    "id": "jnu",
    "nameEn": "Jinan University",
    "nameZh": "暨南大学",
    "badge": "暨",
    "color": "#9E1B32",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Comprehensive",
      "Overseas Chinese"
    ],
    "blurb": "Historic university serving overseas Chinese; strong journalism, business, medicine.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (submit CSCA score report).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": 50,
    "scoreSource": "reported",
    "scoreBasis": "丝绸之路奖学金 CSCA ≥50（招办复函）",
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–32,000/yr typical.",
    "applyUrl": "https://lxlz.jnu.edu.cn",
    "isoUrl": "https://sites.jnu.edu.cn/",
    "highlights": [
      "CSCA score report required for undergrad",
      "Apply portal: lxlz.jnu.edu.cn",
      "Strong overseas-Chinese network"
    ],
    "tier": "211",
    "strongSubjects": [
      "新闻传播学",
      "应用经济学",
      "工商管理",
      "药学"
    ],
    "strongSubjectsEn": [
      "Journalism & Communication",
      "Applied Economics",
      "Business Administration",
      "Pharmacy",
    ],
    "strengths": [
      "华侨最高学府",
      "国际学生多元",
      "广州区位优势"
    ],
    "strengthsEn": [
      "Premier institution for overseas Chinese",
      "Diverse international student body",
      "Guangzhou location advantage",
    ],},
  {
    "id": "cqu",
    "nameEn": "Chongqing University",
    "nameZh": "重庆大学",
    "badge": "重",
    "color": "#7A1F2B",
    "city": "Chongqing",
    "region": "Central-West",
    "types": [
      "Engineering",
      "Comprehensive"
    ],
    "blurb": "Major comprehensive university in Chongqing; strong architecture, mechanical, EE.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "https://cqu.17gz.org/member/login.do",
    "isoUrl": "https://cqu.admissions.cn/",
    "highlights": [
      "Architecture & mechanical strength",
      "Apply portal: cqu.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "电气工程",
      "机械工程",
      "建筑学",
      "土木工程"
    ],
    "strongSubjectsEn": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Architecture",
      "Civil Engineering",
    ],
    "strengths": [
      "工科实力强",
      "新兴直辖市",
      "电气土木突出"
    ],
    "strengthsEn": [
      "Strong engineering strength",
      "Emerging municipality (Chongqing)",
      "Outstanding electrical & civil engineering",
    ],},
  {
    "id": "npu",
    "nameEn": "Northwestern Polytechnical University",
    "nameZh": "西北工业大学",
    "badge": "西工",
    "color": "#1B3A6B",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Aerospace",
      "Engineering"
    ],
    "blurb": "Elite aerospace, marine and materials engineering university in Xi'an.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": 50,
    "scoreSource": "reported",
    "scoreBasis": "奖学金建议 ≥50（招办复函）",
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "http://admission.nwpu.edu.cn/",
    "isoUrl": "https://en.nwpu.edu.cn/",
    "highlights": [
      "Aerospace, marine, materials strength",
      "Apply portal: admission.nwpu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "航空宇航科学与技术",
      "材料科学",
      "计算机科学",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Aeronautics & Astronautics Science & Technology",
      "Materials Science",
      "Computer Science",
      "Mechanical Engineering",
    ],
    "strengths": [
      "航空航天顶尖",
      "三航特色鲜明",
      "国防军工强"
    ],
    "strengthsEn": [
      "Top-tier aerospace",
      "Distinctive aviation, aerospace & nautical focus",
      "Strong national defense & military industry",
    ],},
  {
    "id": "neu",
    "nameEn": "Northeastern University",
    "nameZh": "东北大学",
    "badge": "东大",
    "color": "#5A3E85",
    "city": "Shenyang",
    "region": "Northeast",
    "types": [
      "Engineering"
    ],
    "blurb": "Strong in metallurgy, automation, CS and materials; main campus Shenyang.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "http://neu.17gz.org",
    "isoUrl": "https://studyinneu.neu.edu.cn/",
    "highlights": [
      "Automation & metallurgy strength",
      "Apply portal: neu.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "控制科学与工程",
      "计算机科学",
      "冶金工程",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Control Science & Engineering",
      "Computer Science",
      "Metallurgical Engineering",
      "Materials Science",
    ],
    "strengths": [
      "自动化控制强",
      "东北老牌工科",
      "计算机实力好"
    ],
    "strengthsEn": [
      "Strong automation & control",
      "Long-established engineering school in the Northeast",
      "Strong computer-science strength",
    ],},
  {
    "id": "hnu",
    "nameEn": "Hunan University",
    "nameZh": "湖南大学",
    "badge": "湖",
    "color": "#C8442A",
    "city": "Changsha",
    "region": "Central",
    "types": [
      "Comprehensive",
      "Engineering"
    ],
    "blurb": "Historic comprehensive university; strong civil engineering, design, business.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27) — confirm portal.",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥22,000–32,000/yr typical.",
    "applyUrl": "http://hnu.ciss.org.cn",
    "isoUrl": "https://international.hnu.edu.cn/",
    "highlights": [
      "Civil engineering & design strength",
      "Portal listed via ciss.org.cn — verify official link before publishing",
      "CSCA required per national policy"
    ],
    "tier": "985",
    "strongSubjects": [
      "化学",
      "机械工程",
      "土木工程",
      "设计学"
    ],
    "strongSubjectsEn": [
      "Chemistry",
      "Mechanical Engineering",
      "Civil Engineering",
      "Design",
    ],
    "strengths": [
      "千年学府底蕴",
      "化学机械强",
      "岳麓山环境"
    ],
    "strengthsEn": [
      "Heritage of a millennium-old academy",
      "Strong chemistry & mechanical engineering",
      "Yuelu Mountain environment",
    ],},
  {
    "id": "csu",
    "nameEn": "Central South University",
    "nameZh": "中南大学",
    "badge": "中",
    "color": "#1A4C8B",
    "city": "Changsha",
    "region": "Central",
    "types": [
      "Medical",
      "Engineering",
      "Comprehensive"
    ],
    "blurb": "Strong in medicine (Xiangya), materials, transport; comprehensive research university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught programs exempt the Professional-Chinese portion.",
    "csca": "Explicitly required; subjects differ by track (see majors).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学",
      "文科中文"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–34,000/yr typical.",
    "applyUrl": "https://csu.17gz.org/",
    "isoUrl": "https://intl.csu.edu.cn/",
    "highlights": [
      "Xiangya Medical School (top-tier)",
      "CSCA subjects spelled out per track",
      "Apply portal: csu.17gz.org"
    ],
    "majors": [
      {
        "name": "Chinese-taught Science/Engineering",
        "cscaSubjects": [
          "理科中文",
          "数学",
          "化学"
        ],
        "note": "物理 or 化学 任选"
      },
      {
        "name": "Medicine (Chinese-taught)",
        "cscaSubjects": [
          "理科中文",
          "数学",
          "化学"
        ],
        "note": "专业中文 + 数学 + 化学"
      },
      {
        "name": "Liberal Arts (Chinese-taught)",
        "cscaSubjects": [
          "文科中文",
          "数学"
        ],
        "note": "文科中文 + 数学"
      },
      {
        "name": "English-taught programs",
        "cscaSubjects": [
          "数学"
        ],
        "note": "免专业中文 (Professional Chinese exempt)"
      }
    ],
    "tier": "985",
    "strongSubjects": [
      "冶金工程",
      "材料科学",
      "临床医学",
      "交通运输工程"
    ],
    "strongSubjectsEn": [
      "Metallurgical Engineering",
      "Materials Science",
      "Clinical Medicine",
      "Transportation Engineering",
    ],
    "strengths": [
      "冶金材料顶尖",
      "湘雅医学知名",
      "工科实力强"
    ],
    "strengthsEn": [
      "Top-tier metallurgy & materials",
      "Renowned Xiangya medicine",
      "Strong engineering strength",
    ],},
  {
    "id": "zzu",
    "nameEn": "Zhengzhou University",
    "nameZh": "郑州大学",
    "badge": "郑",
    "color": "#3A6EA5",
    "city": "Zhengzhou",
    "region": "Central",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Largest university in Henan; comprehensive with growing medical and materials.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (submit CSCA report).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": 50,
    "scoreSource": "official",
    "scoreBasis": "每科最低 50/100（官方申请附件 PDF）",
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥20,000–30,000/yr typical.",
    "applyUrl": "https://zzu.17gz.org/member/login.do",
    "isoUrl": "https://www5.zzu.edu.cn/gjxy/",
    "highlights": [
      "CSCA report required for undergrad",
      "Apply portal: zzu.17gz.org",
      "Largest campus in Henan"
    ],
    "tier": "211",
    "strongSubjects": [
      "临床医学",
      "材料科学",
      "化学",
      "法学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Materials Science",
      "Chemistry",
      "Law",
    ],
    "strengths": [
      "河南省龙头高校",
      "规模大学科全",
      "医学实力较强"
    ],
    "strengthsEn": [
      "Leading university in Henan Province",
      "Large scale with complete disciplines",
      "Relatively strong medical strength",
    ],},
  {
    "id": "dlut",
    "nameEn": "Dalian University of Technology",
    "nameZh": "大连理工大学",
    "badge": "大工",
    "color": "#2E6B4F",
    "city": "Dalian",
    "region": "Northeast",
    "types": [
      "Engineering"
    ],
    "blurb": "Elite engineering university on the coast; strong chem-eng, mechanics, shipbuilding.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; undergrad Chinese-taught.",
    "csca": "Explicitly required for undergraduate applicants from 2026/27.",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught grad.",
    "deadline": "Undergrad: Jan – May.",
    "tuition": "¥24,000–32,000/yr typical.",
    "applyUrl": "http://iso.dlut.edu.cn",
    "isoUrl": "https://en.dlut.edu.cn/",
    "highlights": [
      "CSCA required from 2026/27",
      "Apply portal: iso.dlut.edu.cn",
      "Coastal Dalian campus"
    ],
    "tier": "985",
    "strongSubjects": [
      "化学工程",
      "机械工程",
      "力学",
      "管理科学"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering",
      "Mechanical Engineering",
      "Mechanics",
      "Management Science",
    ],
    "strengths": [
      "化工机械强",
      "沿海开放城市",
      "工科底蕴厚"
    ],
    "strengthsEn": [
      "Strong chemical & mechanical engineering",
      "Coastal open city",
      "Deep engineering heritage",
    ],},
  {
    "id": "ccmu",
    "nameEn": "Capital Medical University",
    "nameZh": "首都医科大学",
    "badge": "首医",
    "color": "#C8442A",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Medical"
    ],
    "blurb": "Top medical university in Beijing; strong clinical medicine and affiliated hospitals.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught Clinical Medicine (MBBS).",
    "csca": "Required for MBBS: 数学 (必考) + 物理 or 化学 (选考).",
    "cscaSubjects": [
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "TOEFL 80 / IELTS 6.0 for English-taught MBBS.",
    "deadline": "MBBS: Jan – Jun.",
    "tuition": "MBBS ¥50,000/yr.",
    "applyUrl": "https://admissions.ccmu.edu.cn",
    "isoUrl": "https://gjxy.ccmu.edu.cn/",
    "highlights": [
      "MBBS English: 数学 必考 + 物理/化学 选考",
      "Apply portal: admissions.ccmu.edu.cn",
      "Many top affiliated hospitals in Beijing"
    ],
    "majors": [
      {
        "name": "Clinical Medicine (MBBS, English)",
        "cscaSubjects": [
          "数学"
        ],
        "note": "数学 必考；物理 or 化学 选考"
      }
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "临床医学",
      "神经科学",
      "儿科学",
      "眼科学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Neuroscience",
      "Pediatrics",
      "Ophthalmology",
    ],
    "strengths": [
      "北京优质医疗",
      "临床实力强",
      "附属医院多"
    ],
    "strengthsEn": [
      "High-quality medical care in Beijing",
      "Strong clinical strength",
      "Many affiliated hospitals",
    ],},
  {
    "id": "cmu",
    "nameEn": "China Medical University",
    "nameZh": "中国医科大学",
    "badge": "医大",
    "color": "#1B5E3F",
    "city": "Shenyang",
    "region": "Northeast",
    "types": [
      "Medical"
    ],
    "blurb": "Historic medical university in Shenyang; long-running English-taught MBBS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS & Stomatology (BDS).",
    "csca": "Required for MBBS: 数学 (必考); 化学 recommended elective.",
    "cscaSubjects": [
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "IELTS 6.0 / TOEFL 85 (or equiv) for English-taught; HSK 4 for Chinese-taught.",
    "deadline": "MBBS: Feb – Aug.",
    "tuition": "MBBS ¥40,000/yr (English).",
    "applyUrl": "https://ies.cmu.edu.cn",
    "isoUrl": "https://www.cmu.edu.cn/intleduschool/",
    "highlights": [
      "MBBS English since 2005; 数学 必考, 化学 recommended",
      "Apply portal: ies.cmu.edu.cn",
      "Large South-Asian student community"
    ],
    "majors": [
      {
        "name": "Clinical Medicine / Stomatology (MBBS, English)",
        "cscaSubjects": [
          "数学"
        ],
        "note": "数学 必考；化学 recommended"
      }
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "临床医学",
      "法医学",
      "医学影像学",
      "预防医学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Forensic Medicine",
      "Medical Imaging",
      "Preventive Medicine",
    ],
    "strengths": [
      "红色医学名校",
      "临床法医强",
      "沈阳区位"
    ],
    "strengthsEn": [
      "Renowned 'red' medical university",
      "Strong clinical & forensic medicine",
      "Shenyang location",
    ],},
  {
    "id": "sustech",
    "nameEn": "Southern University of Science and Technology",
    "nameZh": "南方科技大学",
    "badge": "南科",
    "color": "#1B3A6B",
    "city": "Shenzhen",
    "region": "South",
    "types": [
      "Science",
      "Research"
    ],
    "blurb": "Young, fast-rising research university in Shenzhen; fully English-taught grad school.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "All postgraduate programs in English; undergrad bilingual/English.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "IELTS 6.0 / TOEFL 75 / Duolingo 95 (undergrad); higher for grad.",
    "deadline": "Undergrad: Dec – Mar; Grad: Nov – Apr.",
    "tuition": "Undergrad ~¥40,000/yr typical.",
    "applyUrl": "https://sustech.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://global.sustech.edu.cn/en/international_students",
    "highlights": [
      "English-taught; research-intensive",
      "Apply portal: sustech.at0086.cn",
      "Located in Shenzhen tech hub"
    ],
    "tier": "双一流",
    "strongSubjects": [
      "物理学",
      "材料科学",
      "计算机科学",
      "生物医学工程"
    ],
    "strongSubjectsEn": [
      "Physics",
      "Materials Science",
      "Computer Science",
      "Biomedical Engineering",
    ],
    "strengths": [
      "高起点研究型",
      "深圳创新环境",
      "师资国际化"
    ],
    "strengthsEn": [
      "High-starting-point research university",
      "Shenzhen innovation environment",
      "Internationalized faculty",
    ],},
  {
    "id": "szu",
    "nameEn": "Shenzhen University",
    "nameZh": "深圳大学",
    "badge": "深大",
    "color": "#B23A2E",
    "city": "Shenzhen",
    "region": "South",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Rapidly growing comprehensive university backed by Shenzhen's tech economy.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "数学",
      "文科中文"
    ],
    "minScore": null,
    "language": "HSK 4 (sci/eng) / HSK 5 (arts, med) for Chinese-taught; IELTS 5.5 / TOEFL 80 for English-taught.",
    "deadline": "Undergrad: Jan 1 – May 31 (two rounds).",
    "tuition": "Liberal arts ¥26,000; Sci/Eng ¥30,000; Medicine/Arts ¥40,000/yr.",
    "applyUrl": "https://lxs.szu.edu.cn",
    "isoUrl": "https://en.szu.edu.cn/",
    "highlights": [
      "Two application rounds (Jan–Mar, Mar–May)",
      "Apply portal: lxs.szu.edu.cn",
      "Strong Shenzhen industry links"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "光学工程",
      "计算机科学",
      "经济学",
      "建筑学"
    ],
    "strongSubjectsEn": [
      "Optical Engineering",
      "Computer Science",
      "Economics",
      "Architecture",
    ],
    "strengths": [
      "地处深圳活力强",
      "工程学科进步快",
      "就业环境好"
    ],
    "strengthsEn": [
      "Located in vibrant Shenzhen",
      "Rapidly advancing engineering disciplines",
      "Favorable employment environment",
    ],},
  {
    "id": "lzu",
    "nameEn": "Lanzhou University",
    "nameZh": "兰州大学",
    "badge": "兰",
    "color": "#5A2A82",
    "city": "Lanzhou",
    "region": "Central-West",
    "types": [
      "C9",
      "Comprehensive"
    ],
    "blurb": "Elite C9 university in Northwest China; strong chemistry, physics, ecology.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants; per-major CSCA test subjects published (see note).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: ~Dec – May.",
    "tuition": "Liberal arts ¥20,000; Sci ¥25,000; Medicine/Arts ¥35,000/yr.",
    "applyUrl": "https://lzu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "http://sice.lzu.edu.cn/",
    "highlights": [
      "Publishes 本科招生专业及CSCA测试科目.xlsx per major",
      "Apply portal: lzu.at0086.cn",
      "C9 league; lower cost of living"
    ],
    "tier": "985",
    "strongSubjects": [
      "化学",
      "物理学",
      "草学",
      "生态学"
    ],
    "strongSubjectsEn": [
      "Chemistry",
      "Physics",
      "Grassland Science",
      "Ecology",
    ],
    "strengths": [
      "C9联盟成员",
      "基础学科扎实",
      "西部科研特色"
    ],
    "strengthsEn": [
      "C9 League member",
      "Solid basic disciplines",
      "Western-region research specialization",
    ],},
  {
    "id": "xidian",
    "nameEn": "Xidian University",
    "nameZh": "西安电子科技大学",
    "badge": "西电",
    "color": "#3A6EA5",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Engineering",
      "EE"
    ],
    "blurb": "Top electronics, information-security and communications engineering university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; undergrad mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; TOEFL 75 / IELTS 5.5 for English-taught.",
    "deadline": "Undergrad: Dec – May.",
    "tuition": "¥14,000–24,000/yr (lower-cost).",
    "applyUrl": "http://xdgjxs.xidian.edu.cn/internationalEducationStudent/2026/1",
    "isoUrl": "https://sie.xidian.edu.cn/",
    "highlights": [
      "Info-security & EE strength",
      "Apply portal: xdgjxs.xidian.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "电子科学与技术",
      "信息与通信工程",
      "计算机科学",
      "网络安全"
    ],
    "strongSubjectsEn": [
      "Electronic Science & Technology",
      "Information & Communication Engineering",
      "Computer Science",
      "Network Security",
    ],
    "strengths": [
      "电子信息强校",
      "行业就业热门",
      "地处西安"
    ],
    "strengthsEn": [
      "Strong electronics & information university",
      "Popular for industry employment",
      "Located in Xi'an",
    ],},
  {
    "id": "ynu",
    "nameEn": "Yunnan University",
    "nameZh": "云南大学",
    "badge": "云",
    "color": "#0F6E4F",
    "city": "Kunming",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Major comprehensive university in Southwest China; strong ecology, biology, SE-Asia studies.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught undergrad programs; mostly Chinese-taught.",
    "csca": "Explicitly required: liberal arts = 文科中文+数学; science/eng/med = 理科中文+数学+物理+化学.",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "文科中文"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: ~Dec – Apr.",
    "tuition": "¥18,000–28,000/yr typical.",
    "applyUrl": "https://ynu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "http://www.iep.ynu.edu.cn/",
    "highlights": [
      "CSCA 必考科目 published by discipline",
      "Apply portal: ynu.at0086.cn",
      "Gateway to South & Southeast Asia"
    ],
    "tier": "211",
    "strongSubjects": [
      "民族学",
      "生态学",
      "政治学",
      "生物学"
    ],
    "strongSubjectsEn": [
      "Ethnology",
      "Ecology",
      "Political Science",
      "Biology",
    ],
    "strengths": [
      "民族生态特色",
      "面向南亚东南亚",
      "气候环境宜人"
    ],
    "strengthsEn": [
      "Ethnic & ecological specialization",
      "Oriented toward South & Southeast Asia",
      "Pleasant climate & environment",
    ],},
  {
    "id": "wmu",
    "nameEn": "Wenzhou Medical University",
    "nameZh": "温州医科大学",
    "badge": "温医",
    "color": "#1B5E3F",
    "city": "Wenzhou",
    "region": "East",
    "types": [
      "Medical"
    ],
    "blurb": "Strong clinical-medicine university on the southeast coast; popular English MBBS/BDS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS, BDS, Pharmacy, Nursing, Biotechnology.",
    "csca": "Required for MBBS/BDS: English 数学 + English 化学.",
    "cscaSubjects": [
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "IELTS 6.0 / TOEFL 70 / Duolingo 105 (or HS diploma in English) for English-taught.",
    "deadline": "MBBS/BDS: ~Apr – Jul.",
    "tuition": "MBBS/BDS ¥33,000/yr (English).",
    "applyUrl": "https://wmu.at0086.cn/student",
    "isoUrl": "https://sis.wmu.edu.cn/",
    "highlights": [
      "MBBS/BDS: English 数学 + English 化学",
      "Apply portal: wmu.at0086.cn",
      "Strong optometry & ophthalmology"
    ],
    "majors": [
      {
        "name": "MBBS / BDS (English)",
        "cscaSubjects": [
          "数学",
          "化学"
        ],
        "note": "English-medium 数学 + 化学"
      }
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "眼科学",
      "临床医学",
      "药学",
      "医学检验技术"
    ],
    "strongSubjectsEn": [
      "Ophthalmology",
      "Clinical Medicine",
      "Pharmacy",
      "Medical Laboratory Technology",
    ],
    "strengths": [
      "眼科学全国领先",
      "临床医学实力强",
      "留学生教育成熟"
    ],
    "strengthsEn": [
      "Nationally leading ophthalmology",
      "Strong clinical medicine",
      "Mature international-student education",
    ],},
  {
    "id": "hrbmu",
    "nameEn": "Harbin Medical University",
    "nameZh": "哈尔滨医科大学",
    "badge": "哈医",
    "color": "#9E1B32",
    "city": "Harbin",
    "region": "Northeast",
    "types": [
      "Medical"
    ],
    "blurb": "Established medical university in Northeast China; English-taught MBBS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS (60 seats/yr).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27) — medical pattern.",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "IELTS / TOEFL for English-taught; HSK 4 for Chinese-taught.",
    "deadline": "MBBS: Mar – Aug.",
    "tuition": "MBBS ¥30,000–40,000/yr typical.",
    "applyUrl": "https://cie.hrbmu.edu.cn/",
    "isoUrl": "https://www.hrbmu.edu.cn/",
    "highlights": [
      "English-taught MBBS (60 seats/yr)",
      "Apply via cie.hrbmu.edu.cn",
      "CSCA required per national policy"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "公共卫生与预防医学",
      "临床医学",
      "药学",
      "麻醉学"
    ],
    "strongSubjectsEn": [
      "Public Health & Preventive Medicine",
      "Clinical Medicine",
      "Pharmacy",
      "Anesthesiology",
    ],
    "strengths": [
      "公共卫生学科强劲",
      "临床医学底蕴深厚",
      "对俄交流便利"
    ],
    "strengthsEn": [
      "Strong public health discipline",
      "Deep-rooted clinical medicine heritage",
      "Convenient exchange with Russia",
    ],},
  {
    "id": "bupt",
    "nameEn": "Beijing University of Posts and Telecommunications",
    "nameZh": "北京邮电大学",
    "badge": "邮",
    "color": "#1A4C8B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "IT"
    ],
    "blurb": "China's top information & communications technology university.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergrad: CS, Telecom Eng, IoT, E-commerce Eng.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (Chinese-taught) / TOEFL 80 (English-taught) undergrad.",
    "deadline": "Undergrad: Dec – May.",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "https://bupt.17gz.org/",
    "isoUrl": "https://ois.bupt.edu.cn/",
    "highlights": [
      "ICT / telecom leadership",
      "Apply portal: bupt.17gz.org",
      "CSCA required per national policy"
    ],
    "tier": "211",
    "strongSubjects": [
      "信息与通信工程",
      "计算机科学",
      "电子科学与技术",
      "网络空间安全"
    ],
    "strongSubjectsEn": [
      "Information & Communication Engineering",
      "Computer Science",
      "Electronic Science & Technology",
      "Cyberspace Security",
    ],
    "strengths": [
      "信息与通信全国顶尖",
      "互联网就业强势",
      "地处北京"
    ],
    "strengthsEn": [
      "Nationally top-tier information & communication",
      "Strong internet-sector employment",
      "Located in Beijing",
    ],},
  {
    "id": "dhu",
    "nameEn": "Donghua University",
    "nameZh": "东华大学",
    "badge": "东华",
    "color": "#7A1F2B",
    "city": "Shanghai",
    "region": "East",
    "types": [
      "Engineering",
      "Textile",
      "Design"
    ],
    "blurb": "Leading textile, materials and fashion-design university in Shanghai.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught programs incl. fashion design (SCF) & some engineering.",
    "csca": "Explicitly required for bachelor applicants (2026 guide: 申请本科必须提供 CSCA 成绩).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (Chinese-taught) / IELTS 5.5 / TOEFL 72 (English-taught).",
    "deadline": "Undergrad: Dec – Apr (15).",
    "tuition": "¥24,000–30,000/yr typical.",
    "applyUrl": "https://admissions.dhu.edu.cn",
    "isoUrl": "https://english.dhu.edu.cn/",
    "highlights": [
      "Bachelor applicants MUST submit CSCA score",
      "Apply portal: admissions.dhu.edu.cn",
      "Textile & fashion-design strength"
    ],
    "tier": "211",
    "strongSubjects": [
      "纺织科学与工程",
      "服装设计",
      "材料科学",
      "设计学"
    ],
    "strongSubjectsEn": [
      "Textile Science & Engineering",
      "Fashion Design",
      "Materials Science",
      "Design",
    ],
    "strengths": [
      "纺织学科全国第一",
      "服装设计知名",
      "地处上海"
    ],
    "strengthsEn": [
      "No. 1 in textile discipline nationwide",
      "Renowned for fashion design",
      "Located in Shanghai",
    ],},
  {
    "id": "tmu",
    "nameEn": "Tianjin Medical University",
    "nameZh": "天津医科大学",
    "badge": "天医",
    "color": "#C8442A",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Medical",
      "211"
    ],
    "blurb": "Top municipal medical university (211 / Double-First-Class); English-taught MBBS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught Clinical Medicine, Dentistry, Nursing (MBBS).",
    "csca": "Required: Chinese-taught = 专业中文+数学+物理/化学; English-taught = 数学+物理/化学.",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": 50,
    "scoreSource": "reported",
    "scoreBasis": "医学类建议 ≥50（第三方整理；以官方通知为准）",
    "language": "IELTS 6.0 / TOEFL 80 (English-taught); HSK 5 (Chinese-taught).",
    "deadline": "Undergrad: until Jul 30.",
    "tuition": "Clinical/Dentistry/Nursing ¥48,000/yr.",
    "applyUrl": "https://www.imstmu.edu.cn/archives/254",
    "isoUrl": "https://www.imstmu.edu.cn/",
    "highlights": [
      "中文授课: 专业中文+数学+物理/化学; 英文授课: 数学+物理/化学",
      "Apply via imstmu.edu.cn E-form",
      "Double-First-Class medical university"
    ],
    "majors": [
      {
        "name": "Chinese-taught medicine",
        "cscaSubjects": [
          "理科中文",
          "数学"
        ],
        "note": "专业中文 + 数学 + 物理/化学"
      },
      {
        "name": "English-taught MBBS",
        "cscaSubjects": [
          "数学"
        ],
        "note": "数学 + 物理/化学 (Professional Chinese exempt)"
      }
    ],
    "tier": "211",
    "strongSubjects": [
      "临床医学",
      "基础医学",
      "护理学",
      "肿瘤学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Basic Medicine",
      "Nursing",
      "Oncology",
    ],
    "strengths": [
      "211医科名校",
      "临床医学实力强",
      "肿瘤医院全国知名"
    ],
    "strengthsEn": [
      "Prestigious 211 medical university",
      "Strong clinical medicine",
      "Nationally renowned cancer hospital",
    ],},
  {
    "id": "buct",
    "nameEn": "Beijing University of Chemical Technology",
    "nameZh": "北京化工大学",
    "badge": "北化",
    "color": "#1F6F54",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Chemical"
    ],
    "blurb": "Leading chemical-engineering university; strong in materials, chemistry and process engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many master's and PhD programs are English-taught (Chemical Engineering, Materials, etc.); Chinese-taught programs require HSK 4.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (score ≥180) for Chinese-taught; TOEFL ≥85 / IELTS ≥6.0 for English-taught.",
    "deadline": "Degree programs: Nov – Jun (2026 deadline 30 Jun).",
    "tuition": "¥25,000–30,000/yr typical (self-funded).",
    "applyUrl": "https://study.buct.edu.cn/",
    "isoUrl": "https://sie.buct.edu.cn/",
    "highlights": [
      "Online application via study.buct.edu.cn",
      "Many English-taught graduate programs",
      "School of International Education (sie.buct.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "化学工程与技术",
      "材料科学",
      "化学",
      "生物工程"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering & Technology",
      "Materials Science",
      "Chemistry",
      "Bioengineering",
    ],
    "strengths": [
      "化工学科全国顶尖",
      "材料研究突出",
      "地处北京"
    ],
    "strengthsEn": [
      "Nationally top-tier chemical engineering",
      "Outstanding materials research",
      "Located in Beijing",
    ],},
  {
    "id": "cupl",
    "nameEn": "China University of Political Science and Law",
    "nameZh": "中国政法大学",
    "badge": "法大",
    "color": "#8C1D2C",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Law"
    ],
    "blurb": "China's premier law university; top-ranked in jurisprudence, political science and administration.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Primarily Chinese-taught (HSK 4); limited English-taught options. CUCAS listings note CSCA required for undergrad.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught undergraduate programs.",
    "deadline": "Undergrad: Mar – Jul; non-degree: year-round.",
    "tuition": "¥20,000/yr (undergrad Chinese-taught).",
    "applyUrl": "https://sis.cupl.edu.cn/",
    "isoUrl": "https://sis.cupl.edu.cn/",
    "highlights": [
      "College of International Students administers admissions",
      "Top law school in China (Law #1)",
      "CSCA required for undergraduate applicants",
      "(链接待核实：https://sis.cupl.edu.cn (CUPL College of International Students); official online application portal not confirmed — CUPL's admissions guide references http://cupl.admissions.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "法学",
      "政治学",
      "马克思主义理论",
      "社会学"
    ],
    "strongSubjectsEn": [
      "Law",
      "Political Science",
      "Marxist Theory",
      "Sociology",
    ],
    "strengths": [
      "法学全国顶尖",
      "政法界人脉广",
      "地处北京"
    ],
    "strengthsEn": [
      "Nationally top-tier law",
      "Wide networks in politics & law",
      "Located in Beijing",
    ],},
  {
    "id": "uibe",
    "nameEn": "University of International Business and Economics",
    "nameZh": "对外经济贸易大学",
    "badge": "贸大",
    "color": "#15457A",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Economics",
      "International"
    ],
    "blurb": "Top Beijing university for international business, trade, finance and economics.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many graduate programs are fully English-taught (medium of instruction English); Chinese-taught programs require HSK.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "English-taught: TOEFL/IELTS or proof of English instruction; Chinese-taught: HSK.",
    "deadline": "Fall intake: 30 Jun; Spring: 30 Nov.",
    "tuition": "¥24,000–30,000/yr typical (self-funded).",
    "applyUrl": "https://isa.uibe.edu.cn/",
    "isoUrl": "https://sie.uibe.edu.cn/",
    "highlights": [
      "Online application via isa.uibe.edu.cn",
      "Strong English-taught graduate programs",
      "School of International Education (sie.uibe.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "国际经济与贸易",
      "金融学",
      "国际法",
      "商务外语"
    ],
    "strongSubjectsEn": [
      "International Economics & Trade",
      "Finance",
      "International Law",
      "Business Foreign Languages",
    ],
    "strengths": [
      "国际贸易领先",
      "涉外财经名校",
      "国际化程度高"
    ],
    "strengthsEn": [
      "Leading international trade",
      "Renowned university for international finance & economics",
      "Highly internationalized",
    ],},
  {
    "id": "cufe",
    "nameEn": "Central University of Finance and Economics",
    "nameZh": "中央财经大学",
    "badge": "中财",
    "color": "#9A6A00",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Economics"
    ],
    "blurb": "Elite finance and economics university; applied economics rated A+ nationally.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught BSc in Finance available; most programs Chinese-taught (HSK 5).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught undergrad: HSK 5 (≥180); English-taught: TOEFL/IELTS/Duolingo.",
    "deadline": "Round 1: Nov 1 – Mar 25; Round 2: Apr 1 – Jun 25.",
    "tuition": "¥24,000/yr typical (self-funded); finance English program higher.",
    "applyUrl": "https://cufe.17gz.org/",
    "isoUrl": "https://sice.cufe.edu.cn/",
    "highlights": [
      "CUFE requires CSCA Humanities Chinese + Mathematics (published)",
      "Online application via cufe.17gz.org",
      "English-taught BSc Finance"
    ],
    "tier": "211",
    "strongSubjects": [
      "应用经济学",
      "金融学",
      "会计学",
      "统计学"
    ],
    "strongSubjectsEn": [
      "Applied Economics",
      "Finance",
      "Accounting",
      "Statistics",
    ],
    "strengths": [
      "财经学科顶尖",
      "金融就业强劲",
      "地处北京"
    ],
    "strengthsEn": [
      "Top-tier finance & economics",
      "Strong finance employment",
      "Located in Beijing",
    ],},
  {
    "id": "bjut",
    "nameEn": "Beijing University of Technology",
    "nameZh": "北京工业大学",
    "badge": "北工",
    "color": "#C0392B",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering"
    ],
    "blurb": "Beijing municipal Double-First-Class university strong in engineering, materials and science.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Chinese-taught bachelor's; some English-taught graduate programs; preparatory option available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "New HSK 4 for undergrad Chinese-taught; CSCA required.",
    "deadline": "Nov 1 – Jan 16; Feb 23 – May 31.",
    "tuition": "¥24,000/yr typical (undergrad Chinese-taught).",
    "applyUrl": "https://bjut.17gz.org/",
    "isoUrl": "https://isa.bjut.edu.cn/",
    "highlights": [
      "Online application via bjut.17gz.org",
      "Requires CSCA for undergrad",
      "School of International Education (isa.bjut.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "土木工程",
      "环境科学与工程",
      "材料科学",
      "光学工程"
    ],
    "strongSubjectsEn": [
      "Civil Engineering",
      "Environmental Science & Engineering",
      "Materials Science",
      "Optical Engineering",
    ],
    "strengths": [
      "工科实力扎实",
      "地理位置优越",
      "土木环境见长"
    ],
    "strengthsEn": [
      "Solid engineering strength",
      "Favorable geographic location",
      "Strength in civil engineering & environment",
    ],},
  {
    "id": "bfu",
    "nameEn": "Beijing Forestry University",
    "nameZh": "北京林业大学",
    "badge": "北林",
    "color": "#2E7D32",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Agriculture",
      "Environmental"
    ],
    "blurb": "Top forestry and ecological-environment university under the Ministry of Education.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MLA (Landscape Architecture) master's; most programs Chinese-taught (HSK).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK (HSK 6 for degree in older guides); English-taught MLA needs no HSK.",
    "deadline": "Degree programs: Feb 1 – May 31.",
    "tuition": "Undergrad ¥24,800/yr; master's ¥29,800/yr.",
    "applyUrl": "https://bjfu.17gz.org/",
    "isoUrl": "https://gjxy.bjfu.edu.cn/",
    "highlights": [
      "Online application via bjfu.17gz.org",
      "English-taught MLA in Landscape Architecture",
      "International School (gjxy.bjfu.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "林学",
      "风景园林学",
      "林业工程",
      "生态学"
    ],
    "strongSubjectsEn": [
      "Forestry",
      "Landscape Architecture",
      "Forestry Engineering",
      "Ecology",
    ],
    "strengths": [
      "林学风景园林顶尖",
      "生态环境特色强",
      "地处北京"
    ],
    "strengthsEn": [
      "Top-tier forestry & landscape architecture",
      "Strong ecological & environmental specialization",
      "Located in Beijing",
    ],},
  {
    "id": "cuc",
    "nameEn": "Communication University of China",
    "nameZh": "中国传媒大学",
    "badge": "中传",
    "color": "#D81B60",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Media",
      "Arts"
    ],
    "blurb": "China's top media and communication university; Journalism & Communication ranked #1.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Primarily Chinese-taught (HSK 4–5); few English-taught options.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 depending on program; CSCA required for undergrad.",
    "deadline": "Undergrad: Jan – Apr/May (2024 example Jan 26 – Apr 26).",
    "tuition": "Undergrad general ¥24,000/yr, art ¥30,000/yr; Chinese Language ¥21,200/yr.",
    "applyUrl": "https://cuc.17gz.org/",
    "isoUrl": "https://icuc.cuc.edu.cn/",
    "highlights": [
      "Online application via cuc.17gz.org",
      "Journalism & Communication #1 in China",
      "International Student Affairs Center (icuc.cuc.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "新闻传播学",
      "戏剧与影视学",
      "广播电视艺术",
      "动画"
    ],
    "strongSubjectsEn": [
      "Journalism & Communication",
      "Theater & Film Studies",
      "Radio & Television Arts",
      "Animation",
    ],
    "strengths": [
      "传媒影视顶尖",
      "播音主持知名",
      "地处北京"
    ],
    "strengthsEn": [
      "Top-tier media & film",
      "Renowned for broadcasting & hosting",
      "Located in Beijing",
    ],},
  {
    "id": "ncepu",
    "nameEn": "North China Electric Power University",
    "nameZh": "华北电力大学",
    "badge": "华电",
    "color": "#1B5E9E",
    "city": "Beijing",
    "region": "North",
    "types": [
      "Engineering",
      "Energy"
    ],
    "blurb": "Key university for electric power, energy and engineering; affiliated with the Ministry of Education.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught bachelor's (Electrical Engineering & Automation) and master's/PhD (Renewable Energy, etc.).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4–5; English-taught: TOEFL ≥86 / IELTS ≥6.0.",
    "deadline": "Degree programs: until 30 May.",
    "tuition": "English-taught bachelor ¥22,000/yr; master ¥30,000/yr; PhD ¥35,000/yr.",
    "applyUrl": "http://study.ncepu.edu.cn/",
    "isoUrl": "https://studyatncepu.ncepu.edu.cn/",
    "highlights": [
      "Online application via study.ncepu.edu.cn",
      "English-taught Electrical Engineering & Renewable Energy",
      "International Education Institute (studyatncepu.ncepu.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "电气工程",
      "动力工程",
      "能源动力",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Electrical Engineering",
      "Power Engineering",
      "Energy & Power",
      "Control Science",
    ],
    "strengths": [
      "电力学科全国领先",
      "电网就业优势",
      "能源特色鲜明"
    ],
    "strengthsEn": [
      "Nationally leading electrical-power disciplines",
      "Advantage in power-grid employment",
      "Distinctive energy focus",
    ],},
  {
    "id": "tjpu",
    "nameEn": "Tiangong University",
    "nameZh": "天津工业大学",
    "badge": "天工",
    "color": "#6A4C93",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Engineering",
      "Textile"
    ],
    "blurb": "Double-First-Class university famed for world-class Textile Science & Engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; mainly Chinese-taught (HSK).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK; English-taught: TOEFL/IELTS.",
    "deadline": "Generally Jan – May.",
    "tuition": "¥25,000/yr typical (self-funded).",
    "applyUrl": "https://tjpu.17gz.org/",
    "isoUrl": "https://en.tiangong.edu.cn/",
    "highlights": [
      "Online application via tjpu.17gz.org (tiangong.17gz.org also works)",
      "World-class Textile Science & Engineering",
      "English/Chinese-taught programs"
    ],
    "tier": "211",
    "strongSubjects": [
      "纺织科学与工程",
      "材料科学",
      "机械工程",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Textile Science & Engineering",
      "Materials Science",
      "Mechanical Engineering",
      "Computer Science",
    ],
    "strengths": [
      "纺织双一流学科",
      "膜材料研究突出",
      "地处天津"
    ],
    "strengthsEn": [
      "Textile Double First-Class discipline",
      "Outstanding membrane-materials research",
      "Located in Tianjin",
    ],},
  {
    "id": "tufe",
    "nameEn": "Tianjin University of Finance and Economics",
    "nameZh": "天津财经大学",
    "badge": "天财",
    "color": "#B5651D",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Economics"
    ],
    "blurb": "Leading Tianjin finance and economics university; strong in applied economics and accounting.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught (HSK 4 undergrad, HSK 5/6 grad); limited English options.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (undergrad) / HSK 5–6 (grad); CSCA required for undergrad.",
    "deadline": "Degree programs: until 30 May (PhD example).",
    "tuition": "Undergrad ~¥16,600/yr; PhD ¥30,000/yr.",
    "applyUrl": "https://tufe.at0086.cn/student",
    "isoUrl": "https://inter.tjufe.edu.cn/",
    "highlights": [
      "Online application via tufe.at0086.cn",
      "CSCA required for undergrad",
      "College of International Education (inter.tjufe.edu.cn)"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "应用经济学",
      "会计学",
      "金融学",
      "统计学"
    ],
    "strongSubjectsEn": [
      "Applied Economics",
      "Accounting",
      "Finance",
      "Statistics",
    ],
    "strengths": [
      "财经学科扎实",
      "会计金融强势",
      "地处天津"
    ],
    "strengthsEn": [
      "Solid finance & economics disciplines",
      "Strong accounting & finance",
      "Located in Tianjin",
    ],},
  {
    "id": "tfsu",
    "nameEn": "Tianjin Foreign Studies University",
    "nameZh": "天津外国语大学",
    "badge": "天外",
    "color": "#00798C",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Language"
    ],
    "blurb": "Tianjin's foreign-studies university; strong in languages, literature and international studies.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught majors available (IELTS 6.0 / TOEFL 80); Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4 (undergrad) / HSK 5 (grad); English-taught: IELTS 6.0 / TOEFL 80.",
    "deadline": "Undergrad: until 30 Jun; CSCA by 30 Jun.",
    "tuition": "Undergrad ¥15,400/yr; master ¥19,400/yr.",
    "applyUrl": "https://tfsu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://isa.tjfsu.edu.cn/",
    "highlights": [
      "Online application via tfsu.at0086.cn",
      "English & Chinese-taught programs",
      "International Students' Office (isa.tjfsu.edu.cn)"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "外国语言文学",
      "日语",
      "英语",
      "翻译"
    ],
    "strongSubjectsEn": [
      "Foreign Languages & Literature",
      "Japanese",
      "English",
      "Translation",
    ],
    "strengths": [
      "外语学科齐全",
      "日语韩语突出",
      "地处天津"
    ],
    "strengthsEn": [
      "Complete range of foreign-language disciplines",
      "Outstanding Japanese & Korean",
      "Located in Tianjin",
    ],},
  {
    "id": "hbu",
    "nameEn": "Hebei University",
    "nameZh": "河北大学",
    "badge": "河大",
    "color": "#5C4033",
    "city": "Baoding",
    "region": "North",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive university in Baoding; strong in humanities, sciences and medicine.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Several English-taught programs (International Economics & Trade, Accounting); most Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4 (≥180); English-taught: IELTS 6.0 / TOEFL 85.",
    "deadline": "Jan 1 – May 31.",
    "tuition": "Undergrad ¥16,000–18,000/yr; English-taught ¥18,000/yr.",
    "applyUrl": "https://hebu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://ciee.hbu.edu.cn/",
    "highlights": [
      "Online application via hebu.at0086.cn",
      "English-taught bachelor's programs",
      "College of International Exchange (ciee.hbu.edu.cn)"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "中国语言文学",
      "历史学",
      "新闻传播学",
      "化学"
    ],
    "strongSubjectsEn": [
      "Chinese Language & Literature",
      "History",
      "Journalism & Communication",
      "Chemistry",
    ],
    "strengths": [
      "综合学科齐全",
      "人文底蕴深厚",
      "宋史研究知名"
    ],
    "strengthsEn": [
      "Complete range of disciplines",
      "Deep humanities heritage",
      "Renowned for Song-dynasty history research",
    ],},
  {
    "id": "ysu",
    "nameEn": "Yanshan University",
    "nameZh": "燕山大学",
    "badge": "燕大",
    "color": "#34495E",
    "city": "Qinhuangdao",
    "region": "North",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-focused comprehensive university in Qinhuangdao; strong in mechanical and materials engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Chinese-taught (HSK 4); some English-taught programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4; CSCA for undergrad.",
    "deadline": "Undergrad: until 30 Jun.",
    "tuition": "Undergrad ¥15,700/yr (Chinese medium).",
    "applyUrl": "http://admission.ysu.edu.cn",
    "isoUrl": "https://ies.ysu.edu.cn/",
    "highlights": [
      "Online application via admission.ysu.edu.cn",
      "Engineering-focused comprehensive university",
      "School of International Education (ies.ysu.edu.cn)"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "机械工程",
      "材料科学",
      "控制科学",
      "车辆工程"
    ],
    "strongSubjectsEn": [
      "Mechanical Engineering",
      "Materials Science",
      "Control Science",
      "Vehicle Engineering",
    ],
    "strengths": [
      "机械工程强劲",
      "重型机械特色",
      "材料研究突出"
    ],
    "strengthsEn": [
      "Strong mechanical engineering",
      "Heavy-machinery specialization",
      "Outstanding materials research",
    ],},
  {
    "id": "sxu",
    "nameEn": "Shanxi University",
    "nameZh": "山西大学",
    "badge": "山大",
    "color": "#C1121F",
    "city": "Taiyuan",
    "region": "North",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Historic comprehensive university in Taiyuan; strong in philosophy, physics and sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught (HSK 4, ≥180); some English-taught graduate programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4 (≥180); CSCA required for undergrad.",
    "deadline": "Dec 1 – Jun 30.",
    "tuition": "Undergrad ¥20,000/yr.",
    "applyUrl": "https://sxu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://siee.sxu.edu.cn/",
    "highlights": [
      "Online application via sxu.at0086.cn",
      "Requires CSCA for undergrad (scholarship thresholds published)",
      "School of International Education (siee.sxu.edu.cn)"
    ],
    "tier": "双一流",
    "strongSubjects": [
      "物理学",
      "哲学",
      "化学",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Physics",
      "Philosophy",
      "Chemistry",
      "Computer Science",
    ],
    "strengths": [
      "物理学双一流学科",
      "科研实力强劲",
      "综合底蕴深厚"
    ],
    "strengthsEn": [
      "Physics Double First-Class discipline",
      "Strong research capability",
      "Deep comprehensive heritage",
    ],},
  {
    "id": "tyut",
    "nameEn": "Taiyuan University of Technology",
    "nameZh": "太原理工大学",
    "badge": "太理",
    "color": "#E07A1F",
    "city": "Taiyuan",
    "region": "North",
    "types": [
      "Engineering"
    ],
    "blurb": "Shanxi's 211/Double-First-Class engineering university; strong in mechanical, materials and electrical engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught programs available (IELTS 6.0/TOEFL 80 undergrad; IELTS 6.5/TOEFL 85 grad); Chinese-taught HSK 4.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4 (≥200); English-taught: IELTS 6.0 / TOEFL 80.",
    "deadline": "Dec – May (undergrad until May).",
    "tuition": "Undergrad ¥10,000/yr; master ¥12,000/yr; PhD ¥15,000/yr.",
    "applyUrl": "http://is.tyut.edu.cn",
    "isoUrl": "https://ciee.tyut.edu.cn/",
    "highlights": [
      "Online application via is.tyut.edu.cn",
      "English-taught engineering programs",
      "College of International Education Exchange (ciee.tyut.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "化学工程与技术",
      "材料科学",
      "矿业工程",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering & Technology",
      "Materials Science",
      "Mining Engineering",
      "Mechanical Engineering",
    ],
    "strengths": [
      "化工矿业见长",
      "211工科名校",
      "能源材料特色"
    ],
    "strengthsEn": [
      "Strength in chemical engineering & mining",
      "Prestigious 211 engineering university",
      "Energy & materials specialization",
    ],},
  {
    "id": "heu",
    "nameEn": "Harbin Engineering University",
    "nameZh": "哈尔滨工程大学",
    "badge": "哈工程",
    "color": "#005B9F",
    "city": "Harbin",
    "region": "Northeast",
    "types": [
      "Engineering",
      "Naval"
    ],
    "blurb": "Defense/marine engineering university; flagship in naval architecture, ocean and nuclear engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many English-taught programs (Naval Architecture, Nuclear Science, etc.); TOEFL 90 / IELTS 6.0 for English.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4; English-taught: TOEFL 90 / IELTS 6.0; CSCA Math & Physics.",
    "deadline": "Undergrad rounds; generally until Jun.",
    "tuition": "Application fee ¥400; engineering undergrad ~¥25,000/yr typical.",
    "applyUrl": "https://hrbeu.at0086.cn/student",
    "isoUrl": "https://heucice.hrbeu.edu.cn/",
    "highlights": [
      "Online application via hrbeu.at0086.cn",
      "CSCA Math & Physics (English or Chinese)",
      "Flagship Naval Architecture & Ocean Engineering"
    ],
    "tier": "211",
    "strongSubjects": [
      "船舶与海洋工程",
      "水声工程",
      "动力工程",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Naval Architecture & Ocean Engineering",
      "Underwater Acoustic Engineering",
      "Power Engineering",
      "Control Science",
    ],
    "strengths": [
      "船舶海洋工程强",
      "海军装备特色",
      "国防背景深厚"
    ],
    "strengthsEn": [
      "Strong naval architecture & ocean engineering",
      "Naval-equipment specialization",
      "Deep national-defense background",
    ],},
  {
    "id": "nenu",
    "nameEn": "Northeast Normal University",
    "nameZh": "东北师范大学",
    "badge": "东师",
    "color": "#2A7F3E",
    "city": "Changchun",
    "region": "Northeast",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Elite normal (teacher-training) university; strong in education, sciences and liberal arts.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Chinese-taught (HSK); some English-taught graduate programs. Chinese Language major exempt from Humanities Chinese CSCA with HSK 4.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4–5; English-taught: TOEFL/IELTS; CSCA required for undergrad.",
    "deadline": "Undergrad: until ~Jun; grad: 30 Jun.",
    "tuition": "Undergrad ¥16,000–19,600/yr; grad ¥22,000–29,000/yr.",
    "applyUrl": "https://nenu.17gz.org",
    "isoUrl": "https://iso.nenu.edu.cn/",
    "highlights": [
      "Online application via nenu.17gz.org (or studyatnenu.nenu.edu.cn)",
      "CSCA required for undergrad",
      "International Students Office (iso.nenu.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "世界史",
      "马克思主义理论",
      "生态学"
    ],
    "strongSubjectsEn": [
      "Education",
      "World History",
      "Marxist Theory",
      "Ecology",
    ],
    "strengths": [
      "师范教育顶尖",
      "世界史闻名",
      "公费留学机会多"
    ],
    "strengthsEn": [
      "Top-tier teacher education",
      "Renowned for world history",
      "Many fully-funded study-abroad opportunities",
    ],},
  {
    "id": "dlmu",
    "nameEn": "Dalian Maritime University",
    "nameZh": "大连海事大学",
    "badge": "海事",
    "color": "#0B6E6E",
    "city": "Dalian",
    "region": "Northeast",
    "types": [
      "Engineering",
      "Maritime"
    ],
    "blurb": "China's key maritime university under the Ministry of Transport; IMO-recognized shipping education.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught master's/PhD programs (TOEFL/IELTS); Chinese-taught undergrad (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "Chinese-taught: HSK 4 (undergrad) / HSK 5 (grad); English-taught: TOEFL/IELTS.",
    "deadline": "Degree: 30 Jun (undergrad); 10 Jul (language).",
    "tuition": "Undergrad ¥22,000/yr.",
    "applyUrl": "https://dlmu.17gz.org",
    "isoUrl": "https://iec.dlmu.edu.cn/",
    "highlights": [
      "Online application via dlmu.17gz.org",
      "English-taught graduate programs",
      "International Education College (iec.dlmu.edu.cn)"
    ],
    "tier": "211",
    "strongSubjects": [
      "交通运输工程",
      "轮机工程",
      "航海技术",
      "海商法"
    ],
    "strongSubjectsEn": [
      "Transportation Engineering",
      "Marine Engineering",
      "Navigation Technology",
      "Maritime Law",
    ],
    "strengths": [
      "海事领域权威",
      "航海专业领先",
      "地处大连"
    ],
    "strengthsEn": [
      "Authoritative in maritime fields",
      "Leading navigation programs",
      "Located in Dalian",
    ],},
  {
    "id": "nuaa",
    "nameEn": "Nanjing University of Aeronautics and Astronautics",
    "nameZh": "南京航空航天大学",
    "badge": "南航",
    "color": "#1B3A6B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Engineering",
      "Aerospace"
    ],
    "blurb": "Aerospace and engineering-focused university; strong in aeronautics, mechanical, and computer science.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited English-taught bachelor programs (e.g., International Business); most degrees are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 70+ for English-taught.",
    "deadline": "Undergrad: Nov 15 – May 30.",
    "tuition": "¥18,000–30,000/yr typical.",
    "applyUrl": "https://nj.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://cie.nuaa.edu.cn/",
    "highlights": [
      "Apply via NJUAA portal nj.at0086.cn.",
      "CSC / Nanjing Gov / Fly-High scholarships.",
      "Top aeronautics & astronautics strengths."
    ],
    "tier": "211",
    "strongSubjects": [
      "航空宇航科学与技术",
      "力学",
      "机械工程",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Aeronautics & Astronautics Science & Technology",
      "Mechanics",
      "Mechanical Engineering",
      "Control Science",
    ],
    "strengths": [
      "航空航天领先",
      "无人机研究突出",
      "地处南京"
    ],
    "strengthsEn": [
      "Leading aerospace",
      "Outstanding UAV research",
      "Located in Nanjing",
    ],},
  {
    "id": "njust",
    "nameEn": "Nanjing University of Science and Technology",
    "nameZh": "南京理工大学",
    "badge": "南理",
    "color": "#9E2A2B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "blurb": "Defense and engineering university strong in mechanical, chemical, and optical engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergrad programs available (¥19,800/yr); CSCA mandatory for undergrad.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4/5 for Chinese-taught; IELTS 6.0 / TOEFL 85+ for English-taught.",
    "deadline": "Undergrad: Jan – May (CSCA required).",
    "tuition": "¥18,000–19,800/yr undergrad.",
    "applyUrl": "https://njust.17gz.org/",
    "isoUrl": "https://study.njust.edu.cn/",
    "highlights": [
      "2026 guide: CSCA mandatory for all undergrad applicants.",
      "Apply via njust.17gz.org.",
      "Lanshan Scholarship for intl students."
    ],
    "tier": "211",
    "strongSubjects": [
      "兵器科学与技术",
      "化学工程",
      "机械工程",
      "光学工程"
    ],
    "strongSubjectsEn": [
      "Ordnance Science & Technology",
      "Chemical Engineering",
      "Mechanical Engineering",
      "Optical Engineering",
    ],
    "strengths": [
      "兵器科学全国第一",
      "军工背景深厚",
      "地处南京"
    ],
    "strengthsEn": [
      "No. 1 in ordnance science nationwide",
      "Deep military-industry background",
      "Located in Nanjing",
    ],},
  {
    "id": "hhu",
    "nameEn": "Hohai University",
    "nameZh": "河海大学",
    "badge": "河海",
    "color": "#1F6F8B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Engineering",
      "Water"
    ],
    "blurb": "Premier water resources and hydropower engineering university; also strong in civil and environment.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught graduate programs; mostly Chinese-taught (HSK 4+).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Grad (high-level): Jan 1 – Feb 15; undergrad per guide.",
    "tuition": "¥20,000–28,000/yr typical.",
    "applyUrl": "https://admission.hhu.edu.cn/",
    "isoUrl": "https://ie.hhu.edu.cn/",
    "highlights": [
      "Apply via admission.hhu.edu.cn or hhu.17gz.org.",
      "Top-ranked hydraulic engineering.",
      "Silk Road Scholarship (CSC) available."
    ],
    "tier": "211",
    "strongSubjects": [
      "水利工程",
      "环境科学与工程",
      "土木工程",
      "港口航道与海岸工程"
    ],
    "strongSubjectsEn": [
      "Hydraulic Engineering",
      "Environmental Science & Engineering",
      "Civil Engineering",
      "Port, Waterway & Coastal Engineering",
    ],
    "strengths": [
      "水利工程全国第一",
      "水利就业强势",
      "地处南京"
    ],
    "strengthsEn": [
      "No. 1 in hydraulic engineering nationwide",
      "Strong water-conservancy employment",
      "Located in Nanjing",
    ],},
  {
    "id": "nau",
    "nameEn": "Nanjing Agricultural University",
    "nameZh": "南京农业大学",
    "badge": "南农",
    "color": "#2E7D32",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Agriculture"
    ],
    "blurb": "Leading agricultural university strong in crop science, veterinary medicine, and agronomy.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught (HSK 4); limited English options at grad level.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – Jun (varies by year).",
    "tuition": "¥18,000–24,000/yr typical.",
    "applyUrl": "https://njau.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://coieen.njau.edu.cn/",
    "highlights": [
      "Apply via njau.at0086.cn.",
      "Jiangsu Government Scholarship eligible.",
      "Strong in agriculture & life sciences."
    ],
    "tier": "211",
    "strongSubjects": [
      "作物学",
      "植物保护",
      "农业资源与环境",
      "兽医学"
    ],
    "strongSubjectsEn": [
      "Crop Science",
      "Plant Protection",
      "Agricultural Resources & Environment",
      "Veterinary Medicine",
    ],
    "strengths": [
      "农业学科全国顶尖",
      "农林经济管理强",
      "国际交流广泛"
    ],
    "strengthsEn": [
      "Nationally top-tier agricultural discipline",
      "Strong agricultural & forestry economics & management",
      "Extensive international exchange",
    ],},
  {
    "id": "cpu",
    "nameEn": "China Pharmaceutical University",
    "nameZh": "中国药科大学",
    "badge": "药",
    "color": "#6A4C93",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Pharmacy"
    ],
    "blurb": "China's premier pharmaceutical university; strong in pharmacy, TCM, and life sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught grad programs (IELTS 6.5 / TOEFL 90+); Chinese-taught undergrad (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.5 / TOEFL 90+ for English-taught.",
    "deadline": "Undergrad: Mar 1 – Jun 30; grad scholarship Nov 1 – Feb 28.",
    "tuition": "¥22,000–30,000/yr typical.",
    "applyUrl": "http://admission.cpu.edu.cn/member/login.do",
    "isoUrl": "https://international.cpu.edu.cn/",
    "highlights": [
      "Apply via admission.cpu.edu.cn.",
      "CSC High-level Postgraduate (Agency 10316).",
      "Nanjing Government Scholarship available."
    ],
    "tier": "211",
    "strongSubjects": [
      "药学",
      "中药学",
      "药物化学"
    ],
    "strongSubjectsEn": [
      "Pharmacy",
      "Traditional Chinese Pharmacy",
      "Medicinal Chemistry",
    ],
    "strengths": [
      "药学全国领先",
      "药学教育摇篮",
      "行业就业好"
    ],
    "strengthsEn": [
      "Nationally leading pharmacy",
      "Cradle of pharmaceutical education",
      "Good industry employment",
    ],},
  {
    "id": "nnu",
    "nameEn": "Nanjing Normal University",
    "nameZh": "南京师范大学",
    "badge": "南师",
    "color": "#C2185B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Key normal (teacher-training) university with broad strengths in humanities, education, and sciences.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught majors include Int'l Econ & Trade, Chemistry, Biology, Env. Sci, etc.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (≥210) for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Mar 1 – May 30 (2026).",
    "tuition": "¥16,600–21,000/yr Chinese-taught; higher for English/lab.",
    "applyUrl": "https://njnu.17gz.org/",
    "isoUrl": "https://gjy.njnu.edu.cn/",
    "highlights": [
      "2026 undergrad guide: CSCA mandatory.",
      "Apply via njnu.17gz.org.",
      "Nanjing Municipal & Jiangsu Gov Scholarships."
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "地理学",
      "中国语言文学",
      "美术学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Geography",
      "Chinese Language & Literature",
      "Fine Arts",
    ],
    "strengths": [
      "师范教育实力强",
      "人文社科优势",
      "地处南京区位优"
    ],
    "strengthsEn": [
      "Strong teacher-education capability",
      "Strength in humanities & social sciences",
      "Located in Nanjing with advantageous location",
    ],},
  {
    "id": "yzu",
    "nameEn": "Yangzhou University",
    "nameZh": "扬州大学",
    "badge": "扬",
    "color": "#D9822B",
    "city": "Yangzhou",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive university strong in agriculture, veterinary medicine, and engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught grad programs; mostly Chinese-taught (HSK 4+).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof (IELTS/TOEFL) for English-taught.",
    "deadline": "Undergrad: Jan – Jun 15.",
    "tuition": "¥16,000–22,000/yr typical.",
    "applyUrl": "https://yzu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://coe.yzu.edu.cn/",
    "highlights": [
      "Apply via yzu.at0086.cn (also yzu.17gz.org).",
      "YZU International Degree Students' Scholarship.",
      "Strength in agronomy & veterinary medicine."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "兽医学",
      "作物学",
      "水利工程",
      "化学"
    ],
    "strongSubjectsEn": [
      "Veterinary Medicine",
      "Crop Science",
      "Hydraulic Engineering",
      "Chemistry",
    ],
    "strengths": [
      "兽医学实力突出",
      "综合学科齐全",
      "生活成本低"
    ],
    "strengthsEn": [
      "Outstanding veterinary medicine strength",
      "Complete range of disciplines",
      "Low living costs",
    ],},
  {
    "id": "zjut",
    "nameEn": "Zhejiang University of Technology",
    "nameZh": "浙江工业大学",
    "badge": "浙工",
    "color": "#2C6E49",
    "city": "Hangzhou",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-focused university strong in chemical, mechanical, and computer engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Chinese-taught main; some English-taught options at grad level.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan 1 – May 31.",
    "tuition": "¥17,000–24,000/yr typical.",
    "applyUrl": "https://zjut.at0086.cn/student",
    "isoUrl": "https://www.gjxy.zjut.edu.cn/",
    "highlights": [
      "Apply via zjut.at0086.cn.",
      "Zhejiang Government Scholarship eligible.",
      "Strong in chemical & mechanical engineering."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "化学工程",
      "机械工程",
      "制药工程",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering",
      "Mechanical Engineering",
      "Pharmaceutical Engineering",
      "Control Science",
    ],
    "strengths": [
      "化工实力雄厚",
      "地处浙江经济活跃",
      "就业前景好"
    ],
    "strengthsEn": [
      "Strong chemical engineering capability",
      "Located in economically active Zhejiang",
      "Excellent career prospects",
    ],},
  {
    "id": "nbu",
    "nameEn": "Ningbo University",
    "nameZh": "宁波大学",
    "badge": "宁",
    "color": "#0E7C7B",
    "city": "Ningbo",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Coastal comprehensive university with MBBS, aquaculture, and business strengths.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS and several bachelor/master programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; no HSK for English-taught (proof of English if non-native).",
    "deadline": "Undergrad: rolling; approx Jan – Aug (2026 guide).",
    "tuition": "¥16,000–30,000/yr (MBBS higher).",
    "applyUrl": "https://icnbu.nbu.edu.cn/",
    "isoUrl": "https://is.nbu.edu.cn/",
    "highlights": [
      "Apply via icnbu.nbu.edu.cn (2026 system).",
      "English-taught MBBS program.",
      "Ningbo & Zhejiang Government Scholarships."
    ],
    "tier": "双一流",
    "strongSubjects": [
      "力学",
      "水产",
      "信息与通信工程"
    ],
    "strongSubjectsEn": [
      "Mechanics",
      "Fisheries",
      "Information & Communication Engineering",
    ],
    "strengths": [
      "双一流建设高校",
      "地处港口城市宁波",
      "国际化程度高"
    ],
    "strengthsEn": [
      "Double First-Class university",
      "Located in the port city Ningbo",
      "Highly internationalized",
    ],},
  {
    "id": "hdu",
    "nameEn": "Hangzhou Dianzi University",
    "nameZh": "杭州电子科技大学",
    "badge": "杭电",
    "color": "#1565C0",
    "city": "Hangzhou",
    "region": "East",
    "types": [
      "Engineering",
      "EE"
    ],
    "blurb": "Electronics and information-engineering focused university; strong in EE, CS, and automation.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught bachelor programs (Business Mgmt, Telecom, Int'l Econ) and some grad.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4/5 for Chinese-taught; TOEFL 80 / IELTS 5.5+ for English-taught.",
    "deadline": "Undergrad: Jan – Jun.",
    "tuition": "¥18,000–22,000/yr typical.",
    "applyUrl": "https://lxsgl.hdu.edu.cn/",
    "isoUrl": "https://intedu.hdu.edu.cn/",
    "highlights": [
      "Apply via lxsgl.hdu.edu.cn.",
      "English-taught telecom & business programs.",
      "Strong in electronics & information tech."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "电子科学与技术",
      "计算机科学",
      "控制科学",
      "通信工程"
    ],
    "strongSubjectsEn": [
      "Electronic Science & Technology",
      "Computer Science",
      "Control Science",
      "Communication Engineering",
    ],
    "strengths": [
      "IT电子学科强",
      "地处杭州互联网之都",
      "就业前景好"
    ],
    "strengthsEn": [
      "Strong IT & electronics disciplines",
      "Located in Hangzhou, the internet capital",
      "Excellent career prospects",
    ],},
  {
    "id": "hfut",
    "nameEn": "Hefei University of Technology",
    "nameZh": "合肥工业大学",
    "badge": "合工",
    "color": "#5C4033",
    "city": "Hefei",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "blurb": "Project 211 / Double First-Class engineering university; strong in mechanical, electrical, and materials.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergrad programs (IELTS 6.0 / TOEFL 85+); mostly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 85+ for English-taught.",
    "deadline": "Undergrad: Jan – May (2026 guide).",
    "tuition": "¥18,000–24,000/yr typical.",
    "applyUrl": "http://admission.hfut.edu.cn/",
    "isoUrl": "https://iec.hfut.edu.cn/",
    "highlights": [
      "2026 undergrad guide: CSCA mandatory.",
      "Apply via admission.hfut.edu.cn.",
      "CSC High-level Graduate (Agency 10359)."
    ],
    "tier": "211",
    "strongSubjects": [
      "管理科学与工程",
      "机械工程",
      "车辆工程",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Management Science & Engineering",
      "Mechanical Engineering",
      "Vehicle Engineering",
      "Computer Science",
    ],
    "strengths": [
      "工科实力雄厚",
      "管理科学突出",
      "211平台"
    ],
    "strengthsEn": [
      "Strong engineering capability",
      "Outstanding management science",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "ahu",
    "nameEn": "Anhui University",
    "nameZh": "安徽大学",
    "badge": "安",
    "color": "#C0392B",
    "city": "Hefei",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive university (Project 211) strong in humanities, sciences, and economics.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught (HSK 4); limited English options.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – May (varies).",
    "tuition": "¥13,000–20,000/yr typical.",
    "applyUrl": "https://admission.sie.ahu.edu.cn/",
    "isoUrl": "https://sie.ahu.edu.cn/",
    "highlights": [
      "Apply via admission.sie.ahu.edu.cn.",
      "Anhui (Hefei) Government Scholarship eligible.",
      "Comprehensive with strong humanities."
    ],
    "tier": "211",
    "strongSubjects": [
      "材料科学",
      "计算机科学",
      "中国语言文学",
      "法学"
    ],
    "strongSubjectsEn": [
      "Materials Science",
      "Computer Science",
      "Chinese Language & Literature",
      "Law",
    ],
    "strengths": [
      "211综合大学",
      "文科基础扎实",
      "学费较低"
    ],
    "strengthsEn": [
      "Comprehensive 211 university",
      "Solid liberal-arts foundation",
      "Relatively low tuition",
    ],},
  {
    "id": "fzu",
    "nameEn": "Fuzhou University",
    "nameZh": "福州大学",
    "badge": "福",
    "color": "#1A5276",
    "city": "Fuzhou",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "blurb": "Double First-Class engineering university strong in chemical, electrical, and civil engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught (HSK 4/5); some English-taught grad options.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (sciences) / 5 (liberal arts) for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – Jun (varies).",
    "tuition": "¥18,000–24,000/yr typical.",
    "applyUrl": "https://oce.fzu.edu.cn/",
    "isoUrl": "https://oce.fzu.edu.cn/",
    "highlights": [
      "Intl applications handled by Office of Cooperation & Exchange (email-based).",
      "Double First-Class, strong in engineering.",
      "Fujian Provincial Government Scholarship.",
      "(链接待核实：https://oce.fzu.edu.cn (official intl office); FZU processes intl applications by email to faomail@fzu.edu.cn — no public online application portal confirmed.)"
    ],
    "tier": "211",
    "strongSubjects": [
      "化学",
      "化学工程",
      "材料科学",
      "电气工程"
    ],
    "strongSubjectsEn": [
      "Chemistry",
      "Chemical Engineering",
      "Materials Science",
      "Electrical Engineering",
    ],
    "strengths": [
      "211理工强校",
      "化学学科突出",
      "地处福州海西"
    ],
    "strengthsEn": [
      "Strong 211 science & engineering university",
      "Outstanding chemistry discipline",
      "Located in Fuzhou, Haixi region",
    ],},
  {
    "id": "fjnu",
    "nameEn": "Fujian Normal University",
    "nameZh": "福建师范大学",
    "badge": "福师",
    "color": "#7D3C98",
    "city": "Fuzhou",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Century-old normal (teacher-training) university; strong in languages, education, and humanities.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; undergrad requires HSK 5 (180+) except Chinese-language majors.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 (≥180) for most undergrad; HSK 4/210 + HSKK for Chinese-language majors; English proof for English-taught.",
    "deadline": "Undergrad: Mar 11 – May 30 (2026).",
    "tuition": "¥15,000–19,000/yr (arts/sci/lab).",
    "applyUrl": "https://iccs.fjnu.edu.cn/",
    "isoUrl": "https://iccs.fjnu.edu.cn/",
    "highlights": [
      "Apply online via iccs.fjnu.edu.cn (or email jwszs@fjnu.edu.cn).",
      "2026 undergrad guide: CSCA mandatory.",
      "Strong in language education & humanities."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "音乐与舞蹈学",
      "体育学",
      "中国语言文学",
      "地理学"
    ],
    "strongSubjectsEn": [
      "Music & Dance Studies",
      "Physical Education",
      "Chinese Language & Literature",
      "Geography",
    ],
    "strengths": [
      "师范教育优良",
      "艺术体育见长",
      "环境宜居"
    ],
    "strengthsEn": [
      "Excellent teacher education",
      "Strength in arts & sports",
      "Livable environment",
    ],},
  {
    "id": "hqu",
    "nameEn": "Huaqiao University",
    "nameZh": "华侨大学",
    "badge": "华大",
    "color": "#B9770E",
    "city": "Xiamen",
    "region": "East",
    "types": [
      "Comprehensive",
      "Overseas Chinese"
    ],
    "blurb": "University serving overseas Chinese; comprehensive with engineering, business, and architecture strengths.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; mostly Chinese-taught (HSK 4+).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jan – Jun (varies).",
    "tuition": "¥16,000–22,000/yr typical.",
    "applyUrl": "https://admissions.hqu.edu.cn/",
    "isoUrl": "https://zsc.hqu.edu.cn/",
    "highlights": [
      "Apply via admissions.hqu.edu.cn.",
      "Generous overseas-Chinese & Silk Road scholarships.",
      "Campuses in Xiamen and Quanzhou."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "工商管理",
      "土木工程",
      "华文教育",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Business Administration",
      "Civil Engineering",
      "Chinese-language Education",
      "Materials Science",
    ],
    "strengths": [
      "面向华侨国际化",
      "对华友好氛围",
      "土木建筑强"
    ],
    "strengthsEn": [
      "Overseas-Chinese-oriented internationalization",
      "China-friendly atmosphere",
      "Strong civil engineering & architecture",
    ],},
  {
    "id": "ncu",
    "nameEn": "Nanchang University",
    "nameZh": "南昌大学",
    "badge": "昌",
    "color": "#6B8E23",
    "city": "Nanchang",
    "region": "East",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Comprehensive university strong in medicine, materials, and food science; English-taught MBBS.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught MBBS and some grad programs; Chinese-taught (HSK 4/5) for others.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (pre-study) / 5 (graduation) for Chinese-taught; IELTS 6.0 / TOEFL 82+ for English-taught.",
    "deadline": "Undergrad: Jan – Jun (varies).",
    "tuition": "¥18,000–20,000/yr (arts/sci/medicine).",
    "applyUrl": "http://apply.ncu.edu.cn",
    "isoUrl": "https://iec.ncu.edu.cn/",
    "highlights": [
      "Apply via apply.ncu.edu.cn (also lxnd.ncu.edu.cn).",
      "English-taught MBBS program.",
      "Jiangxi Government Scholarship eligible."
    ],
    "tier": "211",
    "strongSubjects": [
      "食品科学",
      "材料科学",
      "临床医学",
      "化学"
    ],
    "strongSubjectsEn": [
      "Food Science",
      "Materials Science",
      "Clinical Medicine",
      "Chemistry",
    ],
    "strengths": [
      "211综合大学",
      "食品科学领先",
      "医学实力强"
    ],
    "strengthsEn": [
      "Comprehensive 211 university",
      "Leading food science",
      "Strong medical strength",
    ],},
  {
    "id": "jxufe",
    "nameEn": "Jiangxi University of Finance and Economics",
    "nameZh": "江西财经大学",
    "badge": "江财",
    "color": "#0B6E4F",
    "city": "Nanchang",
    "region": "East",
    "types": [
      "Economics"
    ],
    "blurb": "Finance and economics university strong in accounting, finance, and international business.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught Master of International Business (MOFCOM); Chinese-taught undergrad (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80+ for English-taught.",
    "deadline": "Undergrad: Jan – Jun; MOFCOM master per circular.",
    "tuition": "¥14,000/yr undergrad; ¥18,000/yr grad.",
    "applyUrl": "https://onlineapplication.jxufe.edu.cn/",
    "isoUrl": "https://oes.jxufe.edu.cn/",
    "highlights": [
      "Apply via onlineapplication.jxufe.edu.cn.",
      "MOFCOM English-taught Int'l Business master.",
      "Overseas Education School handles admissions."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "应用经济学",
      "会计学",
      "金融学",
      "统计学"
    ],
    "strongSubjectsEn": [
      "Applied Economics",
      "Accounting",
      "Finance",
      "Statistics",
    ],
    "strengths": [
      "财经类强校",
      "会计金融突出",
      "就业前景好"
    ],
    "strengthsEn": [
      "Strong university for finance & economics",
      "Outstanding accounting & finance",
      "Excellent career prospects",
    ],},
  {
    "id": "ouc",
    "nameEn": "Ocean University of China",
    "nameZh": "中国海洋大学",
    "badge": "海大",
    "color": "#0E7C9B",
    "city": "Qingdao",
    "region": "East",
    "types": [
      "Ocean",
      "Comprehensive"
    ],
    "blurb": "Ocean science and fisheries leader; 985/211 and Double First-Class university on the coast of Qingdao.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught programs: International Economics & Trade (BA), International Business (MA), China Studies (MA), Marine Biology, Applied Oceanography, Environmental & Resource Protection Law (MA); most degrees are Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught degree programs; English proficiency proof (IELTS/TOEFL or MOI) for English-taught programs.",
    "deadline": "Undergrad self-funded: typically Mar–May (check yearly); CSC scholarships earlier (Dec–Feb).",
    "tuition": "¥18,000–31,000/yr by level (e.g. ¥18,000 BA; ¥20,500–25,000 MA; ¥31,000 PhD).",
    "applyUrl": "https://ouc.at0086.cn/student",
    "isoUrl": "https://sie.ouc.edu.cn/english/",
    "highlights": [
      "985/211 & Double First-Class university",
      "Strong in oceanography, fisheries, marine science",
      "Over 1,300 international students from 50+ countries"
    ],
    "tier": "985",
    "strongSubjects": [
      "海洋科学",
      "水产",
      "食品科学",
      "环境科学"
    ],
    "strongSubjectsEn": [
      "Marine Science",
      "Fisheries",
      "Food Science",
      "Environmental Science",
    ],
    "strengths": [
      "985海洋领域顶尖",
      "海洋学科全球领先",
      "地处青岛"
    ],
    "strengthsEn": [
      "Top-tier 985 in marine fields",
      "Globally leading marine disciplines",
      "Located in Qingdao",
    ],},
  {
    "id": "upc",
    "nameEn": "China University of Petroleum (East China)",
    "nameZh": "中国石油大学(华东)",
    "badge": "石大",
    "color": "#C77F33",
    "city": "Qingdao",
    "region": "East",
    "types": [
      "Engineering",
      "Energy"
    ],
    "blurb": "China's cradle of petroleum science and technology; 211 and Double First-Class, energy-focused.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergraduate programs: Petroleum Engineering, Mechanical Engineering, Civil Engineering, Architecture, Big Data Management, New Energy Materials, Software Engineering, Geology, Resource Exploration. Most graduate programs Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 5 (≥180) for Chinese-taught; IELTS/TOEFL for English-taught; some programs require an online interview.",
    "deadline": "Fall intake: application Mar 15 – Jul 15; Spring: Oct 15 – Jan 15.",
    "tuition": "¥17,000–20,000/yr undergraduate; ~¥20,000 master's typical.",
    "applyUrl": "https://admission.upc.edu.cn",
    "isoUrl": "https://cie.upc.edu.cn/",
    "highlights": [
      "211 & Double First-Class, energy/petroleum focus",
      "English-taught petroleum & engineering degrees",
      "Qingdao coastal campus"
    ],
    "tier": "211",
    "strongSubjects": [
      "石油与天然气工程",
      "地质资源与地质工程",
      "化学工程",
      "油气储运"
    ],
    "strongSubjectsEn": [
      "Petroleum & Natural Gas Engineering",
      "Geological Resources & Geological Engineering",
      "Chemical Engineering",
      "Oil & Gas Storage & Transportation",
    ],
    "strengths": [
      "石油工程顶尖",
      "能源行业就业好",
      "211平台"
    ],
    "strengthsEn": [
      "Top-tier petroleum engineering",
      "Good energy-industry employment",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "sdnu",
    "nameEn": "Shandong Normal University",
    "nameZh": "山东师范大学",
    "badge": "山师",
    "color": "#3E6B9C",
    "city": "Jinan",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Provincial flagship normal university in Jinan; strong in education, teacher training, and Chinese language.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; some programs and scholarships available. English-taught options limited—confirm with IEC.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 depending on program for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: consult yearly admissions (typically spring–summer).",
    "tuition": "Registration ¥415; degree tuition per university schedule (contact IEC).",
    "applyUrl": "https://sdnu.17gz.org/member/login.do",
    "isoUrl": "https://cie.sdnu.edu.cn/",
    "highlights": [
      "Key provincial normal university",
      "Strong in education, Chinese language & teacher training",
      "Jinan campus"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "教育学",
      "中国语言文学",
      "化学",
      "马克思主义理论"
    ],
    "strongSubjectsEn": [
      "Education",
      "Chinese Language & Literature",
      "Chemistry",
      "Marxist Theory",
    ],
    "strengths": [
      "师范教育扎实",
      "文科基础好",
      "地处济南"
    ],
    "strengthsEn": [
      "Solid teacher education",
      "Good foundation in liberal arts",
      "Located in Jinan",
    ],},
  {
    "id": "qdu",
    "nameEn": "Qingdao University",
    "nameZh": "青岛大学",
    "badge": "青大",
    "color": "#1D8A70",
    "city": "Qingdao",
    "region": "East",
    "types": [
      "Comprehensive",
      "Medical"
    ],
    "blurb": "Comprehensive university in Qingdao with a notable medical school (MBBS) and growing international programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "MBBS (English-taught), MIB (English-taught), plus some other English-taught graduate programs; many Chinese-taught degrees.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proficiency (IELTS 6.0/TOEFL 75 or MOI) for English-taught (MBBS, MIB).",
    "deadline": "Undergrad: before May 31 (2026); language program Apr 1 – Jun 1.",
    "tuition": "¥18,000–20,500/yr degree; MBBS higher; application fee ¥400.",
    "applyUrl": "https://admission.qdu.edu.cn/",
    "isoUrl": "https://istudy.qdu.edu.cn/",
    "highlights": [
      "English-taught MBBS program",
      "Comprehensive with strong medical school",
      "Coastal Qingdao location"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "临床医学",
      "材料科学",
      "纺织工程",
      "系统科学"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Materials Science",
      "Textile Engineering",
      "Systems Science",
    ],
    "strengths": [
      "医学实力强",
      "地处青岛宜居",
      "综合学科全"
    ],
    "strengthsEn": [
      "Strong medical strength",
      "Located in livable Qingdao",
      "Comprehensive range of disciplines",
    ],},
  {
    "id": "sdust",
    "nameEn": "Shandong University of Science and Technology",
    "nameZh": "山东科技大学",
    "badge": "山科",
    "color": "#4A6FA5",
    "city": "Qingdao",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-focused university in Qingdao with strengths in mining, mechanics, computer, and geoscience.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergraduate & graduate programs available (IELTS/TOEFL required for non-native English speakers: IELTS 6.0 UG / 6.5 PG, TOEFL 80 UG / 90 PG).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (engineering/economics/law/mgmt/education) or HSK 5 (Chinese lang/philosophy) for Chinese-taught; English test for English-taught.",
    "deadline": "Consult IEC; typically spring–summer for fall intake.",
    "tuition": "Application fee ¥600/US$95; tuition per program.",
    "applyUrl": "http://sdust.at0086.cn/student",
    "isoUrl": "http://cie.sdust.edu.cn/",
    "highlights": [
      "Engineering & mining strengths",
      "English-taught degree programs",
      "Qingdao campus"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "矿业工程",
      "安全科学与工程",
      "测绘",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Mining Engineering",
      "Safety Science & Engineering",
      "Geomatics",
      "Control Science",
    ],
    "strengths": [
      "矿业安全见长",
      "工科实用强",
      "地处青岛"
    ],
    "strengthsEn": [
      "Strength in mining & safety",
      "Strongly practical engineering",
      "Located in Qingdao",
    ],},
  {
    "id": "ccnu",
    "nameEn": "Central China Normal University",
    "nameZh": "华中师范大学",
    "badge": "华师",
    "color": "#6A4C93",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "211/Double First-Class normal university in Wuhan; a national base for international Chinese education and teacher training.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught graduate programs; many Chinese-taught. Chinese Language programs at multiple HSK levels.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 by program for Chinese-taught; English proof for English-taught.",
    "deadline": "Fall: Mar 1 – Jul 15; Spring (language only): Oct 1 – Jan 15.",
    "tuition": "Per program; Chinese language short courses ~¥2,200; degree tuition on request.",
    "applyUrl": "http://ccnu2.ciss.org.cn/StuLogin",
    "isoUrl": "https://is.ccnu.edu.cn/",
    "highlights": [
      "211 & Double First-Class normal university",
      "National base for Chinese language education",
      "Wuhan location, ~2,750 international students"
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "政治学",
      "中国语言文学",
      "心理学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Political Science",
      "Chinese Language & Literature",
      "Psychology",
    ],
    "strengths": [
      "师范教育顶尖",
      "人文社科强",
      "地处武汉"
    ],
    "strengthsEn": [
      "Top-tier teacher education",
      "Strong humanities & social sciences",
      "Located in Wuhan",
    ],},
  {
    "id": "whut",
    "nameEn": "Wuhan University of Technology",
    "nameZh": "武汉理工大学",
    "badge": "武理",
    "color": "#2E7D5B",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Engineering"
    ],
    "blurb": "211/Double First-Class engineering university in Wuhan; top in materials, transportation, and automotive engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many English-taught programs (Materials Science, Engineering, Chemistry, Management, Economics, Law). Pre-university/CSCA prep program available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English proficiency for English-taught; application fee ¥500.",
    "deadline": "Consult SIE; fall intake typically spring–summer.",
    "tuition": "Application fee ¥500; tuition per program.",
    "applyUrl": "http://admission.whut.edu.cn",
    "isoUrl": "https://sie.whut.edu.cn/english/",
    "highlights": [
      "211 & Double First-Class, materials & engineering",
      "Extensive English-taught programs",
      "Wuhan, ~1,700 international students"
    ],
    "tier": "211",
    "strongSubjects": [
      "材料科学",
      "船舶与海洋工程",
      "交通运输",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Materials Science",
      "Naval Architecture & Ocean Engineering",
      "Transportation",
      "Mechanical Engineering",
    ],
    "strengths": [
      "材料学科顶尖",
      "理工科强",
      "211平台"
    ],
    "strengthsEn": [
      "Top-tier materials discipline",
      "Strong science & engineering",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "cug",
    "nameEn": "China University of Geosciences (Wuhan)",
    "nameZh": "中国地质大学(武汉)",
    "badge": "地大",
    "color": "#8A6D3B",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Geosciences",
      "Engineering"
    ],
    "blurb": "211/Double First-Class university in Wuhan specializing in geosciences, geology, and earth-resources engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many English-taught master's (Geology, Geological Engineering, Petroleum Eng, CS, Environmental, Materials, MBA, etc.); all PhD programs can be English-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (≥200) for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught.",
    "deadline": "Application open Jan 1 – Jun 15; admission by Jul 10.",
    "tuition": "¥18,000–28,000/yr undergraduate (arts/science); graduate higher.",
    "applyUrl": "http://admission.cug.edu.cn/member/login.do",
    "isoUrl": "http://iec.cug.edu.cn/",
    "highlights": [
      "211 & Double First-Class, geosciences focus",
      "English-taught master's & all PhD programs",
      "Wuhan campus"
    ],
    "tier": "211",
    "strongSubjects": [
      "地质学",
      "地质资源与地质工程",
      "地球物理学",
      "珠宝首饰设计"
    ],
    "strongSubjectsEn": [
      "Geology",
      "Geological Resources & Geological Engineering",
      "Geophysics",
      "Jewelry Design",
    ],
    "strengths": [
      "地学领域顶尖",
      "地质工程强",
      "211平台"
    ],
    "strengthsEn": [
      "Top-tier in geosciences",
      "Strong geological engineering",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "hzau",
    "nameEn": "Huazhong Agricultural University",
    "nameZh": "华中农业大学",
    "badge": "华农",
    "color": "#4C9A2A",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Agriculture"
    ],
    "blurb": "211/Double First-Class agricultural university in Wuhan; life sciences, crop science, and veterinary medicine.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught graduate programs in horticulture, forestry, etc.; most degrees Chinese-taught (HSK for Chinese-taught, IELTS 6.0/TOEFL 80 for English-taught).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; IELTS 6.0/TOEFL 80 or MOI for English-taught.",
    "deadline": "CSC: Dec 1 – Mar 31; HZAU & self-funded: Dec 1 – May 31.",
    "tuition": "Per program; application via hzau.at0086.cn.",
    "applyUrl": "https://hzau.at0086.cn/student",
    "isoUrl": "https://ic.hzau.edu.cn/",
    "highlights": [
      "211 & Double First-Class, agriculture & life sciences",
      "English-taught graduate programs",
      "Wuhan green campus"
    ],
    "tier": "211",
    "strongSubjects": [
      "园艺学",
      "畜牧学",
      "兽医学",
      "作物学"
    ],
    "strongSubjectsEn": [
      "Horticulture",
      "Animal Husbandry",
      "Veterinary Medicine",
      "Crop Science",
    ],
    "strengths": [
      "农业学科顶尖",
      "生命科学强",
      "211平台"
    ],
    "strengthsEn": [
      "Top-tier agricultural discipline",
      "Strong life sciences",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "zuel",
    "nameEn": "Zhongnan University of Economics and Law",
    "nameZh": "中南财经政法大学",
    "badge": "财大",
    "color": "#2C3E66",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Economics",
      "Law"
    ],
    "blurb": "211/Double First-Class university in Wuhan specializing in economics, finance, law, and management.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught bachelor's (¥20,000/yr), master's (¥30,000/yr), doctoral (¥34,000/yr); Chinese-taught also available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 or MOI for English-taught.",
    "deadline": "Consult IES admission guide (typically spring for fall intake).",
    "tuition": "Chinese-taught BA ¥16,000/yr; English-taught BA ¥20,000; MA ¥20,000–30,000; PhD ¥24,000–34,000; application fee ¥500.",
    "applyUrl": "http://iesmis.zuel.edu.cn/member/login.do",
    "isoUrl": "https://ies-en.zuel.edu.cn/",
    "highlights": [
      "211 & Double First-Class, economics & law",
      "Dedicated English-taught degree tracks",
      "Wuhan, Nanhu campus"
    ],
    "tier": "211",
    "strongSubjects": [
      "法学",
      "应用经济学",
      "会计学",
      "财政学"
    ],
    "strongSubjectsEn": [
      "Law",
      "Applied Economics",
      "Accounting",
      "Public Finance",
    ],
    "strengths": [
      "财经政法名校",
      "法学经济双强",
      "就业前景好"
    ],
    "strengthsEn": [
      "Renowned university for finance, economics & law",
      "Dual strength in law & economics",
      "Excellent career prospects",
    ],},
  {
    "id": "henu",
    "nameEn": "Henan University",
    "nameZh": "河南大学",
    "badge": "河大",
    "color": "#4A6D7C",
    "city": "Kaifeng",
    "region": "Central",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Founded 1912, Double First-Class comprehensive university in Kaifeng/Zhengzhou; 13 disciplines, broad undergraduate & graduate offerings.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergraduate & graduate programs available (catalog published); most degrees Chinese-taught (HSK 4–5).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 (Chinese-taught graduates) / HSK 4 (English-taught graduates) at graduation; HSK 4 entry for Chinese-taught; English proof for English-taught.",
    "deadline": "Undergrad: Jun 1 (2025); check yearly.",
    "tuition": "Per program; application via henu.17gz.org.",
    "applyUrl": "https://henu.17gz.org/",
    "isoUrl": "https://isclc.henu.edu.cn/",
    "highlights": [
      "Founded 1912, Double First-Class",
      "Comprehensive with 13 disciplines",
      "Kaifeng (Minglun) & Zhengzhou campuses"
    ],
    "tier": "双一流",
    "strongSubjects": [
      "生物学",
      "教育学",
      "中国语言文学",
      "历史学"
    ],
    "strongSubjectsEn": [
      "Biology",
      "Education",
      "Chinese Language & Literature",
      "History",
    ],
    "strengths": [
      "双一流综合大学",
      "人文底蕴深厚",
      "学费较低"
    ],
    "strengthsEn": [
      "Comprehensive Double First-Class university",
      "Deep humanities heritage",
      "Relatively low tuition",
    ],},
  {
    "id": "hnnu",
    "nameEn": "Hunan Normal University",
    "nameZh": "湖南师范大学",
    "badge": "湖师",
    "color": "#3A8FB7",
    "city": "Changsha",
    "region": "Central",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Key normal university in Changsha; strong in education, liberal arts, and Chinese language; 211/Double First-Class.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mostly Chinese-taught; some programs available. English-taught limited—confirm with OIEC.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Fall: ~Jun 15; Spring: ~Nov 30 (varies yearly).",
    "tuition": "Per program; application via hunnu.at0086.cn.",
    "applyUrl": "https://hunnu.at0086.cn/student",
    "isoUrl": "https://oiec.hunnu.edu.cn/",
    "highlights": [
      "211 & Double First-Class normal university",
      "Strong education & Chinese language",
      "Changsha location"
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "外国语言文学",
      "化学",
      "伦理学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Foreign Languages & Literature",
      "Chemistry",
      "Ethics",
    ],
    "strengths": [
      "师范教育强",
      "人文社科优势",
      "地处长沙"
    ],
    "strengthsEn": [
      "Strong teacher education",
      "Strength in humanities & social sciences",
      "Located in Changsha",
    ],},
  {
    "id": "xtu",
    "nameEn": "Xiangtan University",
    "nameZh": "湘潭大学",
    "badge": "湘大",
    "color": "#00796B",
    "city": "Xiangtan",
    "region": "Central",
    "types": [
      "Comprehensive",
      "Law"
    ],
    "blurb": "Comprehensive national-key university in Xiangtan (Mao's hometown); strengths in law, economics, materials, chemistry.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught programs available; Chinese-taught require HSK 4; English-taught require IELTS 6.0/TOEFL 80 or MOI.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 80 or MOI for English-taught.",
    "deadline": "Degree (self-funded): Apr 30; non-degree (language): May 31 (2026).",
    "tuition": "Per program; application via xtu.at0086.cn.",
    "applyUrl": "https://xtu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://gjjlc.xtu.edu.cn/",
    "highlights": [
      "National-key comprehensive university",
      "Strength in law, economics, materials",
      "Located in Mao's hometown, Xiangtan"
    ],
    "tier": "双一流",
    "strongSubjects": [
      "数学",
      "法学",
      "马克思主义理论"
    ],
    "strongSubjectsEn": [
      "Mathematics",
      "Law",
      "Marxist Theory",
    ],
    "strengths": [
      "数学学科实力雄厚",
      "法学声誉高",
      "双一流建设高校"
    ],
    "strengthsEn": [
      "Strong mathematics discipline",
      "High legal reputation",
      "Double First-Class university",
    ],},
  {
    "id": "csust",
    "nameEn": "Changsha University of Science and Technology",
    "nameZh": "长沙理工大学",
    "badge": "长理",
    "color": "#B5651D",
    "city": "Changsha",
    "region": "Central",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-centered multidisciplinary university in Changsha with strengths in transportation, electric power, water conservancy, and civil engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Many English-taught programs (CS, Road/Bridge, Transportation, Hydraulic, Civil, New Energy, Architecture, Urban Planning, etc.); Chinese-taught also available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 (≥180) UG / HSK 5 PG for Chinese-taught; TOEFL 68 / IELTS 5.5 / Duolingo 85 for English-taught.",
    "deadline": "Rolling until filled; scholarships earlier (check yearly).",
    "tuition": "Application fee ¥500; tuition per program; English-taught available.",
    "applyUrl": "https://csust.17gz.org/",
    "isoUrl": "https://www.csust.edu.cn/gjxy/",
    "highlights": [
      "Engineering in transport, power, water, civil",
      "Many English-taught degree programs",
      "Changsha location"
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "交通运输工程",
      "土木工程",
      "电气工程"
    ],
    "strongSubjectsEn": [
      "Transportation Engineering",
      "Civil Engineering",
      "Electrical Engineering",
    ],
    "strengths": [
      "交通土建特色鲜明",
      "电力学科优势",
      "就业前景好"
    ],
    "strengthsEn": [
      "Distinctive transportation & civil-engineering focus",
      "Strength in electrical-power disciplines",
      "Excellent career prospects",
    ],},
  {
    "id": "scnu",
    "nameEn": "South China Normal University",
    "nameZh": "华南师范大学",
    "badge": "华师",
    "color": "#1B5E3F",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Project 211 / Double First-Class normal university in Guangzhou with a large international student body.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited English-taught graduate programs; most undergraduate programs are Chinese-taught (HSK 5 required for undergrad per 2025 notice).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for undergrad, HSK 5+ for grad; English proof for English-taught programs.",
    "deadline": "Undergrad: Feb 1 – Jun 10.",
    "tuition": "¥29,000–30,000/yr (2026 grad fees; undergrad similar).",
    "applyUrl": "http://istudy.scnu.edu.cn",
    "isoUrl": "https://io.scnu.edu.cn",
    "highlights": [
      "Apply via the SCNU international student service system (istudy.scnu.edu.cn).",
      "Double First-Class university with strong teacher-education programs.",
      "Guangdong Government Outstanding International Student Scholarship available."
    ],
    "tier": "211",
    "strongSubjects": [
      "心理学",
      "教育学",
      "物理学"
    ],
    "strongSubjectsEn": [
      "Psychology",
      "Education",
      "Physics",
    ],
    "strengths": [
      "心理学全国顶尖",
      "师范实力强",
      "地处广州区位优"
    ],
    "strengthsEn": [
      "Nationally top-tier psychology",
      "Strong teacher-education strength",
      "Located in Guangzhou with advantageous location",
    ],},
  {
    "id": "gdufs",
    "nameEn": "Guangdong University of Foreign Studies",
    "nameZh": "广东外语外贸大学",
    "badge": "广外",
    "color": "#0A5C8C",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Language",
      "International"
    ],
    "blurb": "Language and international-studies university in Guangzhou, a regional hub for Chinese-language and business programs for foreigners.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught degree programs (e.g., MIB, Business Chinese at HSK 5+); most programs Chinese-taught with strong language preparation.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–5 for Chinese-taught; IELTS/TOEFL for English-taught.",
    "deadline": "Degree programs (2026 fall): typically Mar–Jun; check the IIE notice.",
    "tuition": "See iie.gdufs.edu.cn fee schedule; approx. ¥20,000–26,000/yr typical.",
    "applyUrl": "http://gdufs.17gz.org/",
    "isoUrl": "https://iie.gdufs.edu.cn",
    "highlights": [
      "Institute for International Education (IIE) manages all degree and language admissions.",
      "Explicit CSCA (China Scholastic Competency Assessment) guidance published for 2026 intake.",
      "GDUFS and Guangdong Government international student scholarships offered."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "外国语言文学",
      "国际贸易",
      "翻译"
    ],
    "strongSubjectsEn": [
      "Foreign Languages & Literature",
      "International Trade",
      "Translation",
    ],
    "strengths": [
      "外语外贸特色",
      "国际化程度高",
      "广州就业前景好"
    ],
    "strengthsEn": [
      "Foreign-language & foreign-trade specialization",
      "Highly internationalized",
      "Good career prospects in Guangzhou",
    ],},
  {
    "id": "scau",
    "nameEn": "South China Agricultural University",
    "nameZh": "华南农业大学",
    "badge": "华农",
    "color": "#2E7D32",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Agriculture"
    ],
    "blurb": "Major agricultural and life-sciences university in Guangzhou with broad degree programs for international students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught graduate programs (HSK 3 accepted for English-taught); most programs Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS/TOEFL for English-taught programs.",
    "deadline": "Self-funded: Mar 1 – Jun 30.",
    "tuition": "¥15,000–22,500/yr (undergrad; arts/social ¥15,000, art/music ¥22,500).",
    "applyUrl": "http://scau.studyinchina.top/member/login.do",
    "isoUrl": "https://cie.scau.edu.cn",
    "highlights": [
      "College of International Education (cie.scau.edu.cn) is the official international office.",
      "Self-funded portal on the school's own StudyInChina platform.",
      "Guangdong Government 'Study in Guangdong' scholarship available."
    ],
    "tier": "双一流",
    "strongSubjects": [
      "兽医学",
      "作物学",
      "农业工程"
    ],
    "strongSubjectsEn": [
      "Veterinary Medicine",
      "Crop Science",
      "Agricultural Engineering",
    ],
    "strengths": [
      "兽医学全国领先",
      "农业学科实力强",
      "地处广州"
    ],
    "strengthsEn": [
      "Nationally leading veterinary medicine",
      "Strong agricultural discipline",
      "Located in Guangzhou",
    ],},
  {
    "id": "gzhu",
    "nameEn": "Guangzhou University",
    "nameZh": "广州大学",
    "badge": "广大",
    "color": "#B23A2E",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive Guangzhou university offering undergraduate and graduate programs for international students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Few English-taught programs; mainly Chinese-taught (e.g., Public Administration, Smart Governance).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4+ for Chinese-taught; English proof for English-taught programs.",
    "deadline": "International student admission: typically Jan–Jun.",
    "tuition": "Approx. ¥20,000/yr typical; confirm on gjjyxy.gzhu.edu.cn.",
    "applyUrl": "http://gjjyxy.gzhu.edu.cn/English/Admission.htm",
    "isoUrl": "https://gjjyxy.gzhu.edu.cn",
    "highlights": [
      "School of International Education (gjjyxy.gzhu.edu.cn) handles admissions.",
      "2026 international student admission brochure published.",
      "Located in Guangzhou Higher Education Mega Center."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "土木工程",
      "数学",
      "网络空间安全"
    ],
    "strongSubjectsEn": [
      "Civil Engineering",
      "Mathematics",
      "Cyberspace Security",
    ],
    "strengths": [
      "地处广州区位好",
      "土木学科较强",
      "发展势头好"
    ],
    "strengthsEn": [
      "Located in Guangzhou with good location",
      "Relatively strong civil engineering",
      "Strong growth momentum",
    ],},
  {
    "id": "smu",
    "nameEn": "Southern Medical University",
    "nameZh": "南方医科大学",
    "badge": "南医",
    "color": "#1565C0",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Medical"
    ],
    "blurb": "Leading medical university in Guangzhou, well known for its English-taught MBBS program.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "MBBS is fully English-taught; other programs are Chinese-taught (HSK required).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; IELTS 6.0 / TOEFL 80 for English-taught (MBBS).",
    "deadline": "Self-funded: Dec 1 – Jun 30.",
    "tuition": "¥30,000–45,000/yr (medical programs); confirm on istudy.smu.edu.cn.",
    "applyUrl": "https://fimmu.at0086.cn/Student",
    "isoUrl": "http://istudy.smu.edu.cn",
    "highlights": [
      "International Student Service System (fimmu.at0086.cn) for online application.",
      "English-medium MBBS listed by China's Ministry of Education.",
      "International Education College manages admissions and scholarships."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "临床医学",
      "基础医学",
      "生物医学工程"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Basic Medicine",
      "Biomedical Engineering",
    ],
    "strengths": [
      "原第一军医大底蕴",
      "临床医学实力强",
      "地处广州"
    ],
    "strengthsEn": [
      "Heritage of the former First Military Medical University",
      "Strong clinical medicine",
      "Located in Guangzhou",
    ],},
  {
    "id": "gxu",
    "nameEn": "Guangxi University",
    "nameZh": "广西大学",
    "badge": "西大",
    "color": "#6A1B9A",
    "city": "Nanning",
    "region": "South",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Nanning and a major host for ASEAN-region international students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "A few English-taught science/engineering programs; mainly Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS/TOEFL for English-taught.",
    "deadline": "CSC: before Feb 15; self-funded degree: before Jun 30.",
    "tuition": "¥15,000–25,000/yr typical.",
    "applyUrl": "https://gxu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://gjxy.gxu.edu.cn",
    "highlights": [
      "International Student Service & Management Center (gjxy.gxu.edu.cn).",
      "Online application via gxu.at0086.cn.",
      "Strong ASEAN student community; Guangxi government scholarships."
    ],
    "tier": "211",
    "strongSubjects": [
      "土木工程",
      "电气工程",
      "化学工程"
    ],
    "strongSubjectsEn": [
      "Civil Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
    ],
    "strengths": [
      "广西唯一211",
      "土木水利优势",
      "面向东盟区位"
    ],
    "strengthsEn": [
      "Guangxi's only 211 university",
      "Strength in civil engineering & water conservancy",
      "ASEAN-oriented location",
    ],},
  {
    "id": "hainu",
    "nameEn": "Hainan University",
    "nameZh": "海南大学",
    "badge": "海大",
    "color": "#00838F",
    "city": "Haikou",
    "region": "South",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university on tropical Hainan, with a full bachelor–master–PhD international pipeline.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs (IELTS 6.0 / TOEFL 78); mainly Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 6.0 / TOEFL 78 for English-taught.",
    "deadline": "Undergrad: before Jun 30.",
    "tuition": "¥16,000–22,000/yr typical.",
    "applyUrl": "https://hainanu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://sie.hainanu.edu.cn",
    "highlights": [
      "School of International Education (sie.hainanu.edu.cn) is the official office.",
      "Apply via hainanu.at0086.cn international student service system.",
      "Hainan Provincial Government International Student Scholarship available."
    ],
    "tier": "211",
    "strongSubjects": [
      "作物学",
      "食品科学",
      "法学"
    ],
    "strongSubjectsEn": [
      "Crop Science",
      "Food Science",
      "Law",
    ],
    "strengths": [
      "热带农业特色",
      "海南自贸港区位",
      "211平台"
    ],
    "strengthsEn": [
      "Tropical-agriculture specialization",
      "Hainan Free Trade Port location",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "cqupt",
    "nameEn": "Chongqing University of Posts and Telecommunications",
    "nameZh": "重庆邮电大学",
    "badge": "重邮",
    "color": "#C2185B",
    "city": "Chongqing",
    "region": "Central-West",
    "types": [
      "Engineering",
      "IT"
    ],
    "blurb": "IT and communications-focused university in Chongqing with several English-taught undergraduate majors.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Several English-taught undergrad majors (Computer Science, Marketing, English, etc.); others Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 5.5 / TOEFL 70 for English-taught.",
    "deadline": "Self-funded: May 30; scholarship: Apr 30.",
    "tuition": "¥15,000–22,000/yr (undergrad); English-taught higher.",
    "applyUrl": "https://cqupt.17gz.org/",
    "isoUrl": "https://gjc.cqupt.edu.cn",
    "highlights": [
      "Office of International Cooperation & Exchange (gjc.cqupt.edu.cn).",
      "Apply via cqupt.17gz.org international student system.",
      "19 English/Chinese-taught undergraduate programs for international students."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "通信工程",
      "计算机科学",
      "信息与通信工程"
    ],
    "strongSubjectsEn": [
      "Communication Engineering",
      "Computer Science",
      "Information & Communication Engineering",
    ],
    "strengths": [
      "信息通信特色",
      "邮电行业背景",
      "重庆区位优"
    ],
    "strengthsEn": [
      "Information & communication specialization",
      "Posts & telecommunications background",
      "Advantageous Chongqing location",
    ],},
  {
    "id": "swu",
    "nameEn": "Southwest University",
    "nameZh": "西南大学",
    "badge": "西大",
    "color": "#EF6C00",
    "city": "Chongqing",
    "region": "Central-West",
    "types": [
      "Education",
      "Agriculture"
    ],
    "blurb": "Double First-Class comprehensive university in Chongqing with strengths in education and agricultural science.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught undergraduate and graduate programs available (e.g., Education); also Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (score ≥200) undergrad; TOEFL 80 / IELTS 6.0 / Duolingo 115 for English-taught.",
    "deadline": "Undergrad / self-funded: Jan 1 – Jun 15.",
    "tuition": "¥16,000–26,000/yr typical.",
    "applyUrl": "https://swu.17gz.org/",
    "isoUrl": "https://gjxy.swu.edu.cn",
    "highlights": [
      "International School (gjxy.swu.edu.cn) manages admissions.",
      "Apply via swu.17gz.org; CSCA transcript required for undergrad.",
      "Chongqing Mayor, SWU President and New Silk Road scholarships available."
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "作物学",
      "心理学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Crop Science",
      "Psychology",
    ],
    "strengths": [
      "师范农业并重",
      "心理学教育学强",
      "211平台"
    ],
    "strengthsEn": [
      "Equal emphasis on teacher education & agriculture",
      "Strong psychology & education",
      "211 Platform (national initiative)",
    ],},
  {
    "id": "ynnu",
    "nameEn": "Yunnan Normal University",
    "nameZh": "云南师范大学",
    "badge": "云师",
    "color": "#4527A0",
    "city": "Kunming",
    "region": "Central-West",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Normal university in Kunming with a long tradition in Chinese-language education for international students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Chinese-taught main; some English-taught graduate programs by supervisor; foundation year available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (undergrad) / HSK 5 (grad) for Chinese-taught.",
    "deadline": "Self-funded: Dec 1 – Jun 10.",
    "tuition": "¥15,000–16,000/yr (undergrad); graduate higher.",
    "applyUrl": "http://ynnu.at0086.cn/student",
    "isoUrl": "http://lx.ynnu.edu.cn",
    "highlights": [
      "International Student Office (lx.ynnu.edu.cn) is the official site.",
      "Apply via ynnu.at0086.cn student portal.",
      "No application fee; strong Chinese-language and teacher-training programs."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "教育学",
      "地理学",
      "历史学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Geography",
      "History",
    ],
    "strengths": [
      "云南师范龙头",
      "面向南亚东南亚",
      "气候宜居"
    ],
    "strengthsEn": [
      "Leading normal university in Yunnan",
      "Oriented toward South & Southeast Asia",
      "Livable climate",
    ],},
  {
    "id": "kust",
    "nameEn": "Kunming University of Science and Technology",
    "nameZh": "昆明理工大学",
    "badge": "昆工",
    "color": "#37474F",
    "city": "Kunming",
    "region": "Central-West",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-focused university in Kunming with broad science, engineering and technology programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Selected English-taught programs; mainly Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for degree programs; English proof for English-taught.",
    "deadline": "Typically Jan–Mar (scholarship); Jun 30 (degree).",
    "tuition": "¥15,000–20,000/yr typical.",
    "applyUrl": "http://kmust.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://gjxy.kust.edu.cn",
    "highlights": [
      "School of International Education (gjxy.kust.edu.cn) is the official office.",
      "Apply via kmust.at0086.cn.",
      "Yunnan Government Scholarship host institution."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "冶金工程",
      "材料科学",
      "矿业工程"
    ],
    "strongSubjectsEn": [
      "Metallurgical Engineering",
      "Materials Science",
      "Mining Engineering",
    ],
    "strengths": [
      "冶金材料强势",
      "工科实力雄厚",
      "昆明区位"
    ],
    "strengthsEn": [
      "Strong metallurgy & materials",
      "Strong engineering capability",
      "Kunming location",
    ],},
  {
    "id": "gzu",
    "nameEn": "Guizhou University",
    "nameZh": "贵州大学",
    "badge": "贵大",
    "color": "#558B2F",
    "city": "Guiyang",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Guiyang covering 13 discipline fields.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs (IELTS 6.0 / TOEFL 80); mainly Chinese-taught (HSK 4, score ≥230).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (score ≥230) Chinese-taught; IELTS 6.0 / TOEFL 80 English-taught.",
    "deadline": "Undergrad: Jun 15 (GZU scholarship); Jun 30 (degree).",
    "tuition": "¥14,000–22,000/yr (undergrad; arts ~¥14,000, art ~¥21,000).",
    "applyUrl": "http://gzu.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://cie.gzu.edu.cn",
    "highlights": [
      "College of International Education (cie.gzu.edu.cn) is the official office.",
      "Apply via gzu.at0086.cn.",
      "CSCA exam subjects published per major in the 2026 undergrad brochure."
    ],
    "tier": "211",
    "strongSubjects": [
      "植物保护",
      "材料科学",
      "农林经济"
    ],
    "strongSubjectsEn": [
      "Plant Protection",
      "Materials Science",
      "Agricultural & Forestry Economics",
    ],
    "strengths": [
      "贵州唯一211",
      "植物保护特色",
      "大数据产业区位"
    ],
    "strengthsEn": [
      "Guizhou's only 211 university",
      "Plant-protection specialization",
      "Big-data industry location",
    ],},
  {
    "id": "nwu",
    "nameEn": "Northwest University",
    "nameZh": "西北大学",
    "badge": "西北",
    "color": "#283593",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive university in Xi'an with strengths in history, geology, chemistry and economics.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught programs; mainly Chinese-taught (HSK 4/5 by level).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4/5 by level for Chinese-taught; IELTS/TOEFL for English-taught.",
    "deadline": "Typically Mar–May; CSC Feb.",
    "tuition": "¥15,000/yr (undergrad); graduate ¥19,800–36,000.",
    "applyUrl": "http://nwu.17gz.org",
    "isoUrl": "http://sie.nwu.edu.cn",
    "highlights": [
      "School of International Education (sie.nwu.edu.cn) handles admissions.",
      "Apply via nwu.17gz.org international student system.",
      "Silk Road Scholarship and Shaanxi government scholarships available."
    ],
    "tier": "211",
    "strongSubjects": [
      "地质学",
      "考古学",
      "经济学"
    ],
    "strongSubjectsEn": [
      "Geology",
      "Archaeology",
      "Economics",
    ],
    "strengths": [
      "地质考古顶尖",
      "文史学科强",
      "211名校"
    ],
    "strengthsEn": [
      "Top-tier geology & archaeology",
      "Strong literature & history disciplines",
      "Prestigious 211 university",
    ],},
  {
    "id": "snnu",
    "nameEn": "Shaanxi Normal University",
    "nameZh": "陕西师范大学",
    "badge": "陕师",
    "color": "#AD1457",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Education",
      "Normal"
    ],
    "blurb": "Double First-Class normal university in Xi'an, a key teacher-education institution directly under the Ministry of Education.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught available for some graduate majors (IELTS 6.0 / TOEFL 80); mainly Chinese-taught (HSK 5 for grad).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 (grad) / HSK 4 (some) Chinese-taught; IELTS 6.0 / TOEFL 80 English-taught.",
    "deadline": "Master: Apr 20 – Jun 20; scholarship May.",
    "tuition": "¥19,800–36,000/yr (grad); undergrad ~¥16,000–22,000.",
    "applyUrl": "https://snnu.17gz.org/",
    "isoUrl": "http://study.snnu.edu.cn",
    "highlights": [
      "Official international student site 'Study at SNNU' (study.snnu.edu.cn).",
      "Apply via snnu.17gz.org online service system.",
      "Silk Road and Shaanxi/Xi'an government scholarships offered."
    ],
    "tier": "211",
    "strongSubjects": [
      "教育学",
      "中国语言文学",
      "历史学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Chinese Language & Literature",
      "History",
    ],
    "strengths": [
      "部属师范名校",
      "文史教育强",
      "西安区位"
    ],
    "strengthsEn": [
      "Renowned ministry-affiliated normal university",
      "Strong literature, history & education",
      "Xi'an location",
    ],},
  {
    "id": "xut",
    "nameEn": "Xi'an University of Technology",
    "nameZh": "西安理工大学",
    "badge": "西理",
    "color": "#00695C",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Engineering"
    ],
    "blurb": "Engineering-oriented university in Xi'an with strong mechanical, electrical and civil programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mainly Chinese-taught (HSK 4); some English-taught engineering via the International Engineering College (JCU joint).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "物理"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Mar – May 31.",
    "tuition": "¥18,000–22,000/yr (undergrad, per third-party); confirm on office.",
    "applyUrl": "http://xaut.at0086.cn/",
    "isoUrl": "https://oice.xaut.edu.cn",
    "highlights": [
      "Office of International Cooperation & Exchange (oice.xaut.edu.cn).",
      "Apply via xaut.at0086.cn international student platform.",
      "Joint PhD programs with James Cook University (Australia)."
    ],
    "tier": "省属重点",
    "strongSubjects": [
      "水利工程",
      "机械工程",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Hydraulic Engineering",
      "Mechanical Engineering",
      "Materials Science",
    ],
    "strengths": [
      "水利水电特色",
      "工科扎实",
      "西安区位"
    ],
    "strengthsEn": [
      "Water-conservancy & hydropower specialization",
      "Solid engineering",
      "Xi'an location",
    ],},
  {
    "id": "xju",
    "nameEn": "Xinjiang University",
    "nameZh": "新疆大学",
    "badge": "新大",
    "color": "#C62828",
    "city": "Urumqi",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Urumqi, a major host for Central-Asia international students.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "English-taught master's/PhD in selected fields; undergrad mainly Chinese-taught (HSK 4 undergrad / HSK 5 grad).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (undergrad) / HSK 5 (grad) Chinese-taught; IELTS 6.0 / TOEFL 80 English-taught.",
    "deadline": "Mar 1 – May 15 (2026).",
    "tuition": "¥14,000–24,000/yr typical (Chinese-taught undergrad ~¥15,000).",
    "applyUrl": "http://xju.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://gjjl.xju.edu.cn",
    "highlights": [
      "College of International Cultural Exchange (gjjl.xju.edu.cn) is the official office.",
      "Apply via xju.at0086.cn international student management platform.",
      "Xinjiang Government Scholarship and CSCA Chinese+Math required for undergrad."
    ],
    "tier": "211",
    "strongSubjects": [
      "马克思主义理论",
      "化学",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Marxist Theory",
      "Chemistry",
      "Computer Science",
    ],
    "strengths": [
      "211双一流高校",
      "中亚区位",
      "多民族友好氛围"
    ],
    "strengthsEn": [
      "211 & Double First-Class university",
      "Central Asia location",
      "Friendly multi-ethnic atmosphere",
    ],},
  {
    "id": "shzu",
    "nameEn": "Shihezi University",
    "nameZh": "石河子大学",
    "badge": "石大",
    "color": "#0277BD",
    "city": "Shihezi",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Xinjiang, well known for its English-taught MBBS program.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "MBBS is fully English-taught; other programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 5.5 / TOEFL 70 for English-taught; MBBS no IELTS required.",
    "deadline": "Mar 1 – Jun 30.",
    "tuition": "¥20,000–30,000/yr typical (MBBS higher); confirm.",
    "applyUrl": "http://wsbm.shzu.edu.cn/",
    "isoUrl": "http://wsbm.shzu.edu.cn/",
    "highlights": [
      "International Education Center admissions platform (wsbm.shzu.edu.cn).",
      "English-medium MBBS program since 2002.",
      "Belt-and-Road International Education Center host."
    ],
    "tier": "211",
    "strongSubjects": [
      "作物学",
      "临床医学",
      "化学工程"
    ],
    "strongSubjectsEn": [
      "Crop Science",
      "Clinical Medicine",
      "Chemical Engineering",
    ],
    "strengths": [
      "兵团背景",
      "211平台",
      "援疆政策支持"
    ],
    "strengthsEn": [
      "Production & Construction Corps background",
      "211 Platform (national initiative)",
      "Xinjiang support policy",
    ],},
  {
    "id": "nxu",
    "nameEn": "Ningxia University",
    "nameZh": "宁夏大学",
    "badge": "宁大",
    "color": "#F57F17",
    "city": "Yinchuan",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Comprehensive university in Yinchuan and a Double First-Class institution in Ningxia.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mainly Chinese-taught (HSK 4); some English support; Chinese language prep year available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 or Chinese learning certificate; English proof for English-taught.",
    "deadline": "May 30 (autumn); Dec 30 (spring language).",
    "tuition": "¥12,800/yr (undergrad); ¥16,000 (master); ¥18,000 (PhD).",
    "applyUrl": "http://www.apply.nxu.cucas.cn/",
    "isoUrl": "http://sie.nxu.edu.cn",
    "highlights": [
      "School of International Education (sie.nxu.edu.cn) is the official office.",
      "Apply via the CUCAS Ningxia University portal (apply.nxu.cucas.cn).",
      "Ningxia Government and Ningxia University scholarships available."
    ],
    "tier": "211",
    "strongSubjects": [
      "草业科学",
      "民族学",
      "农学"
    ],
    "strongSubjectsEn": [
      "Grassland Science",
      "Ethnology",
      "Agriculture",
    ],
    "strengths": [
      "211平台",
      "回族文化区位",
      "西部特色"
    ],
    "strengthsEn": [
      "211 Platform (national initiative)",
      "Hui culture location",
      "Western-region specialization",
    ],},
  {
    "id": "qhu",
    "nameEn": "Qinghai University",
    "nameZh": "青海大学",
    "badge": "青大",
    "color": "#00897B",
    "city": "Xining",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Xining with strengths in plateau medicine, agriculture and engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited English-taught programs (MBBS sometimes listed by aggregators—verify); mainly Chinese-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学",
      "化学"
    ],
    "minScore": null,
    "language": "HSK 4+ for Chinese-taught; English proof for English-taught.",
    "deadline": "Typically Mar–Jun; confirm on the international office.",
    "tuition": "¥15,000–42,000/yr (program-dependent); confirm.",
    "applyUrl": "https://international.qhu.edu.cn",
    "isoUrl": "https://international.qhu.edu.cn",
    "highlights": [
      "Office of Global Cooperation & Exchange (international.qhu.edu.cn) is the official international office.",
      "Accepts CSCA results for undergraduate admission (per third-party summaries).",
      "Primarily Chinese-taught programs; plateau medicine is a signature strength.",
      "(链接待核实：No clearly identified official online application portal in sources. Official international office is https://international.qhu.edu.cn ; application likely via CUCAS/StudyInChina or a school portal (e.g., qhu.at0086.cn) — confirm with the office before publishing.)"
    ],
    "tier": "211",
    "strongSubjects": [
      "生态学",
      "畜牧学",
      "高原医学"
    ],
    "strongSubjectsEn": [
      "Ecology",
      "Animal Husbandry",
      "High-altitude Medicine",
    ],
    "strengths": [
      "三江源生态特色",
      "211平台",
      "高原研究优势"
    ],
    "strengthsEn": [
      "Sanjiangyuan ecological focus",
      "211 Platform (national initiative)",
      "Plateau-research advantage",
    ],},
  {
    "id": "tdu",
    "nameEn": "Tibet University",
    "nameZh": "西藏大学",
    "badge": "藏大",
    "color": "#5E35B1",
    "city": "Lhasa",
    "region": "Central-West",
    "types": [
      "Comprehensive"
    ],
    "blurb": "Double First-Class comprehensive university in Lhasa, the leading higher-education institution in Tibet.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Mainly Chinese-taught; Tibetan/Chinese language and cultural programs; verify English-taught availability.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; Tibetan/Chinese language focus for non-degree study.",
    "deadline": "Not clearly published in sources; contact the international office.",
    "tuition": "Not published in sources; consult the official site.",
    "applyUrl": "http://www.utibet.edu.cn",
    "isoUrl": "http://www.utibet.edu.cn",
    "highlights": [
      "Double First-Class university and the top comprehensive institution in Tibet.",
      "Strengths in Tibetan studies, ecology, and plateau science.",
      "International student admissions handled by the Office of International Cooperation & Exchange.",
      "(链接待核实：Official site is http://www.utibet.edu.cn ; neither a dedicated international student online application portal nor a clearly identified international-student office (国际交流合作处 / 留学生部) page was published in sources. Use the main site and contact the Office of International Cooperation & Exchange directly to confirm the correct admissions URL.)"
    ],
    "tier": "211",
    "strongSubjects": [
      "生态学",
      "藏学",
      "藏族艺术"
    ],
    "strongSubjectsEn": [
      "Ecology",
      "Tibetology",
      "Tibetan Art",
    ],
    "strengths": [
      "高原生态藏学特色",
      "211平台",
      "藏族文化氛围"
    ],
    "strengthsEn": [
      "Plateau ecology & Tibetology specialization",
      "211 Platform (national initiative)",
      "Tibetan cultural atmosphere",
    ],},
  {
    "id": "tjut",
    "nameEn": "Tianjin University of Technology",
    "nameZh": "天津理工大学",
    "badge": "天理",
    "color": "#2E6E8E",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Engineering-focused municipal university in Tianjin with strong engineering, science and technology programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: Nov – Jun (2026 intake: Nov 20 – May 31).",
    "tuition": "Undergrad ¥16,400/yr; master's ¥20,500/yr; PhD ¥32,000/yr (self-funded).",
    "applyUrl": "https://tjut.at0086.cn/",
    "isoUrl": "https://chinese.tjut.edu.cn/",
    "highlights": [
      "International Student Management Platform on at0086",
      "Tianjin City and Government scholarships available",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "材料科学",
      "计算机科学",
      "电气工程"
    ],
    "strongSubjectsEn": [
      "Materials Science",
      "Computer Science",
      "Electrical Engineering",
    ],
    "strengths": [
      "理工特色",
      "天津区位优",
      "材料学科较强"
    ],
    "strengthsEn": [
      "Science & engineering specialization",
      "Advantageous Tianjin location",
      "Relatively strong materials discipline",
    ],},
  {
    "id": "tust",
    "nameEn": "Tianjin University of Science and Technology",
    "nameZh": "天津科技大学",
    "badge": "天科",
    "color": "#1F7A5C",
    "city": "Tianjin",
    "region": "North",
    "types": [
      "Engineering",
      "Chemical"
    ],
    "tier": "普通本科",
    "blurb": "Key Tianjin science-and-technology university strong in light industry, food science, chemical and marine engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; mostly Chinese-taught (HSK 4). Language requirements relaxed for some English-taught tracks.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Mar – Jun (2026 intake deadline Jun 30).",
    "tuition": "Undergrad ¥16,000/yr typical (self-funded).",
    "applyUrl": "https://tust.cucas.cn/",
    "isoUrl": "http://gjjl.tust.edu.cn/",
    "highlights": [
      "International Exchange Office handles admissions",
      "Online application via CUCAS school portal",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "轻工技术与工程",
      "食品科学",
      "化学工程"
    ],
    "strongSubjectsEn": [
      "Light Industry Technology & Engineering",
      "Food Science",
      "Chemical Engineering",
    ],
    "strengths": [
      "轻工食品特色",
      "天津滨海区位",
      "行业底蕴深厚"
    ],
    "strengthsEn": [
      "Light-industry & food specialization",
      "Tianjin Binhai location",
      "Deep industry heritage",
    ],},
  {
    "id": "zbu",
    "nameEn": "North University of China",
    "nameZh": "中北大学",
    "badge": "中北",
    "color": "#B5651D",
    "city": "Taiyuan",
    "region": "North",
    "types": [
      "Engineering",
      "Defense"
    ],
    "tier": "普通本科",
    "blurb": "Defense-oriented engineering university in Taiyuan with strengths in ordnance, materials, mechanics and instrumentation.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: check yearly (grad intake spring/autumn).",
    "tuition": "Master's ¥20,000/yr; PhD ¥25,000/yr (self-funded).",
    "applyUrl": "https://nuc.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "http://international.nuc.edu.cn/",
    "highlights": [
      "School of International Education",
      "Online application via at0086 platform",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "兵器科学与技术",
      "仪器科学与技术",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Ordnance Science & Technology",
      "Instrumentation Science & Technology",
      "Mechanical Engineering",
    ],
    "strengths": [
      "军工特色鲜明",
      "仪器学科强",
      "太原区位"
    ],
    "strengthsEn": [
      "Distinctive military-industry focus",
      "Strong instrumentation discipline",
      "Taiyuan location",
    ],},
  {
    "id": "cjust",
    "nameEn": "Changchun University of Science and Technology",
    "nameZh": "长春理工大学",
    "badge": "长理",
    "color": "#6A4C93",
    "city": "Changchun",
    "region": "Northeast",
    "types": [
      "Engineering",
      "Optics"
    ],
    "tier": "普通本科",
    "blurb": "Known as the 'cradle of Chinese optical talent', strong in optics, instruments, mechanical and electronic engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught master's programs (MBA, Mechanical Engineering, Computer Application, Information & Communication) at ¥22,000/yr.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4/5 for Chinese-taught; IELTS/TOEFL for English-taught.",
    "deadline": "Degree programs: rolling; 2026 spring intake deadline Dec 20, 2026 autumn extended to Jul 5.",
    "tuition": "English-taught master's ¥22,000/yr; Chinese-taught varies (self-funded).",
    "applyUrl": "http://cust.apply.cucas.cn/",
    "isoUrl": "http://sie.cust.edu.cn/",
    "highlights": [
      "'Cradle of Chinese optical talent'",
      "English-taught master's available",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "光学工程",
      "仪器科学与技术",
      "电子科学"
    ],
    "strongSubjectsEn": [
      "Optical Engineering",
      "Instrumentation Science & Technology",
      "Electronics Science",
    ],
    "strengths": [
      "光学工程顶尖",
      "光电特色鲜明",
      "行业声誉高"
    ],
    "strengthsEn": [
      "Top-tier optical engineering",
      "Distinctive optoelectronics focus",
      "High industry reputation",
    ],},
  {
    "id": "hrbust",
    "nameEn": "Harbin University of Science and Technology",
    "nameZh": "哈尔滨理工大学",
    "badge": "哈理",
    "color": "#2C7A4B",
    "city": "Harbin",
    "region": "Northeast",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Largest provincial science-and-technology university in Heilongjiang, strong in electrical, mechanical and materials engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (general) / HSK 5 (economics & management) for Chinese-taught.",
    "deadline": "Undergrad: Mar 1 – Jun 15; language students: Jan 10 / Jul 10 by semester.",
    "tuition": "Undergrad ¥15,000/yr typical; language ¥12,000/yr (self-funded).",
    "applyUrl": "https://studyinhust.hrbust.edu.cn/",
    "isoUrl": "https://gjhz.hrbust.edu.cn/",
    "highlights": [
      "Office of International Cooperation & Exchange",
      "Online application via international student portal",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "电气工程",
      "机械工程",
      "材料科学与工程",
      "计算机科学"
    ],
    "strongSubjectsEn": [
      "Electrical Engineering",
      "Mechanical Engineering",
      "Materials Science & Engineering",
      "Computer Science",
    ],
    "strengths": [
      "电气工程特色鲜明",
      "工科实力扎实",
      "东北就业市场稳定"
    ],
    "strengthsEn": [
      "Distinctive electrical-engineering focus",
      "Solid engineering strength",
      "Stable job market in Northeast China",
    ],},
  {
    "id": "jsu",
    "nameEn": "Jiangsu University",
    "nameZh": "江苏大学",
    "badge": "江大",
    "color": "#1B6CA8",
    "city": "Zhenjiang",
    "region": "East",
    "types": [
      "Engineering",
      "Agriculture"
    ],
    "tier": "普通本科",
    "blurb": "Comprehensive research university in Zhenjiang strong in engineering, agriculture, medical and transport, with a large international community.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught programs available; English proof (IELTS/TOEFL or university letter) required.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: Apr – Jul (2026 spring intake also offered).",
    "tuition": "Application fee ¥200; tuition varies by program (self-funded).",
    "applyUrl": "http://admission.ujs.edu.cn/",
    "isoUrl": "http://oec.ujs.edu.cn/",
    "highlights": [
      "Overseas Education College manages admissions",
      "Dedicated online application system",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "农业工程",
      "机械工程",
      "食品科学",
      "车辆工程"
    ],
    "strongSubjectsEn": [
      "Agricultural Engineering",
      "Mechanical Engineering",
      "Food Science",
      "Vehicle Engineering",
    ],
    "strengths": [
      "农业工程全国领先",
      "工科基础扎实",
      "地处长三角区位优"
    ],
    "strengthsEn": [
      "Nationally leading agricultural engineering",
      "Solid engineering foundation",
      "Located in the Yangtze River Delta with advantageous location",
    ],},
  {
    "id": "njtech",
    "nameEn": "Nanjing Tech University",
    "nameZh": "南京工业大学",
    "badge": "南工",
    "color": "#D6893B",
    "city": "Nanjing",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Research-intensive engineering university and 2011 Plan member, strong in chemical, materials, civil and environmental engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English/Chinese-taught programs; TOEFL 80 / IELTS 6.0 preferred for English-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; TOEFL 80 / IELTS 6.0 for English-taught.",
    "deadline": "Degree programs: Feb 28 – Jun 20 (2026 intake).",
    "tuition": "Undergrad ¥16,000/yr; master's ¥22,000/yr; PhD ¥28,000/yr (self-funded).",
    "applyUrl": "http://njtech.17gz.org/member/login.do",
    "isoUrl": "https://coe.njtech.edu.cn/",
    "highlights": [
      "College of Overseas Education",
      "Online application via 17gz.org",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "化学工程与技术",
      "材料科学与工程",
      "安全科学与工程",
      "土木工程"
    ],
    "strongSubjectsEn": [
      "Chemical Engineering & Technology",
      "Materials Science & Engineering",
      "Safety Science & Engineering",
      "Civil Engineering",
    ],
    "strengths": [
      "化工材料实力强",
      "位于南京区位优",
      "工科就业前景好"
    ],
    "strengthsEn": [
      "Strong chemical & materials engineering",
      "Advantageous Nanjing location",
      "Good engineering career prospects",
    ],},
  {
    "id": "zjgsu",
    "nameEn": "Zhejiang Gongshang University",
    "nameZh": "浙江工商大学",
    "badge": "浙商",
    "color": "#0E7C7B",
    "city": "Hangzhou",
    "region": "East",
    "types": [
      "Economics",
      "Business"
    ],
    "tier": "普通本科",
    "blurb": "Business-and-economics focused university in Hangzhou with strong food science, tourism, finance and management disciplines.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — both English-taught and Chinese-taught bachelor's/master's programs offered.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; IELTS 5.5 / TOEFL 80 / Duolingo 90 (undergrad) for English-taught.",
    "deadline": "Degree programs: Mar – Jun 15 (2026 intake); scholarships advised before May 1.",
    "tuition": "Undergrad ¥18,000–25,000/yr; master's ¥25,000–30,000/yr; PhD ¥30,000–33,000/yr.",
    "applyUrl": "http://hzic.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "http://sie.zjgsu.edu.cn/",
    "highlights": [
      "School of International Education",
      "Online application via at0086 (hzic)",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "统计学",
      "工商管理",
      "应用经济学",
      "食品科学"
    ],
    "strongSubjectsEn": [
      "Statistics",
      "Business Administration",
      "Applied Economics",
      "Food Science",
    ],
    "strengths": [
      "统计学实力突出",
      "地处杭州电商之都",
      "商科就业前景好"
    ],
    "strengthsEn": [
      "Outstanding statistics strength",
      "Located in Hangzhou, the e-commerce capital",
      "Good business career prospects",
    ],},
  {
    "id": "hznu",
    "nameEn": "Hangzhou Normal University",
    "nameZh": "杭州师范大学",
    "badge": "杭师",
    "color": "#C2185B",
    "city": "Hangzhou",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "tier": "普通本科",
    "blurb": "Key Zhejiang normal university with strengths in teacher education, humanities and sciences, and a strong international-student program.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught programs available; English proficiency assessed by interview.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (210+) for Chinese-taught undergrad; HSK 5 for grad; English interview for English-taught.",
    "deadline": "Undergrad: Mar 9 – Jun 30 (2026 intake).",
    "tuition": "Application fee ¥400; tuition per program catalogue (self-funded).",
    "applyUrl": "https://international.hznu.edu.cn/",
    "isoUrl": "https://gjjyxy.hznu.edu.cn/",
    "highlights": [
      "International Education College",
      "Dedicated online application site",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "教育学",
      "音乐学",
      "化学",
      "心理学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Musicology",
      "Chemistry",
      "Psychology",
    ],
    "strengths": [
      "师范教育基础好",
      "位于杭州区位优",
      "艺术学科有特色"
    ],
    "strengthsEn": [
      "Solid teacher-education foundation",
      "Advantageous Hangzhou location",
      "Distinctive arts disciplines",
    ],},
  {
    "id": "wzu",
    "nameEn": "Wenzhou University",
    "nameZh": "温州大学",
    "badge": "温大",
    "color": "#2E8B57",
    "city": "Wenzhou",
    "region": "East",
    "types": [
      "Comprehensive"
    ],
    "tier": "普通本科",
    "blurb": "Comprehensive coastal university offering English-taught bachelor's and master's programs across 11 disciplines.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — dedicated English-taught undergraduate and postgraduate programs offered.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; TOEFL/IELTS/Duolingo for English-taught.",
    "deadline": "Degree programs: Jan – Jul (2026 intake: Jan 10 – Jul 31).",
    "tuition": "Tuition per program; application fee applies (self-funded).",
    "applyUrl": "http://study.wzu.edu.cn/",
    "isoUrl": "https://cie.wzu.edu.cn/",
    "highlights": [
      "College of International Education",
      "Online application via study.wzu.edu.cn",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "化学",
      "电气工程",
      "创业管理",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Chemistry",
      "Electrical Engineering",
      "Entrepreneurship Management",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "创业氛围浓厚",
      "温州商帮资源",
      "地理位置优越"
    ],
    "strengthsEn": [
      "Vibrant entrepreneurship atmosphere",
      "Wenzhou business-network resources",
      "Favorable geographic location",
    ],},
  {
    "id": "ahut",
    "nameEn": "Anhui University of Technology",
    "nameZh": "安徽工业大学",
    "badge": "安工",
    "color": "#4A6FA5",
    "city": "Ma'anshan",
    "region": "East",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "University in Ma'anshan strong in metallurgy, materials, chemistry and engineering, with English-taught degree programs.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught bachelor's (International Economics & Trade), master's (International Trade) and doctoral programs.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK for Chinese-taught; English-taught programs available.",
    "deadline": "Degree programs: Jun 15 (2026 intake).",
    "tuition": "Application fee ¥400; tuition varies by program (self-funded).",
    "applyUrl": "http://admission.ahut.edu.cn/",
    "isoUrl": "https://gjc.ahut.edu.cn/",
    "highlights": [
      "School of International Education",
      "Dedicated online application system",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "冶金工程",
      "材料科学与工程",
      "化学工程",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Metallurgical Engineering",
      "Materials Science & Engineering",
      "Chemical Engineering",
      "Mechanical Engineering",
    ],
    "strengths": [
      "冶金材料特色鲜明",
      "工科基础扎实",
      "学费生活成本低"
    ],
    "strengthsEn": [
      "Distinctive metallurgy & materials focus",
      "Solid engineering foundation",
      "Low tuition & living costs",
    ],},
  {
    "id": "fafu",
    "nameEn": "Fujian Agriculture and Forestry University",
    "nameZh": "福建农林大学",
    "badge": "福农",
    "color": "#5B8C3E",
    "city": "Fuzhou",
    "region": "East",
    "types": [
      "Agriculture"
    ],
    "tier": "普通本科",
    "blurb": "University in Fuzhou strong in agriculture, forestry, horticulture, biosciences and environmental science.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught master's/PhD programs; IELTS 6.5 / TOEFL 85 for non-native English speakers.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 5 for Chinese-taught; IELTS 6.5 / TOEFL 85 for English-taught.",
    "deadline": "Degree programs: Apr 30 (2026 intake); CGS high-level pg: Feb 15.",
    "tuition": "Application fee ¥500/US$80; tuition varies (self-funded).",
    "applyUrl": "https://admission.fafu.edu.cn/",
    "isoUrl": "https://gjxy.fafu.edu.cn/",
    "highlights": [
      "International College (Overseas Education)",
      "Online application system admission.fafu.edu.cn",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "植物保护",
      "林学",
      "园艺学",
      "生态学"
    ],
    "strongSubjectsEn": [
      "Plant Protection",
      "Forestry",
      "Horticulture",
      "Ecology",
    ],
    "strengths": [
      "农林学科扎实",
      "地处福州区位优",
      "生态研究方向多"
    ],
    "strengthsEn": [
      "Solid agriculture & forestry disciplines",
      "Located in Fuzhou with advantageous location",
      "Diverse ecological-research directions",
    ],},
  {
    "id": "jmu",
    "nameEn": "Jimei University",
    "nameZh": "集美大学",
    "badge": "集美",
    "color": "#1A8FE3",
    "city": "Xiamen",
    "region": "East",
    "types": [
      "Comprehensive",
      "Marine"
    ],
    "tier": "普通本科",
    "blurb": "Comprehensive university in Xiamen with marine, engineering, business and teacher-education strengths built on the Tan Kah Kee legacy.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught programs available; TOEFL 80 / IELTS 6.0 for English-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; TOEFL 80 / IELTS 6.0 for English-taught.",
    "deadline": "Degree programs: Mar 1 – May 31 (2026 intake).",
    "tuition": "Liberal arts ¥14,000/yr; science & engineering ¥15,400/yr; master's/PhD higher (self-funded).",
    "applyUrl": "http://applyonline.jmu.edu.cn/",
    "isoUrl": "https://oec.jmu.edu.cn/",
    "highlights": [
      "Overseas Education College",
      "Online application via applyonline.jmu.edu.cn",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "航海技术",
      "水产学",
      "船舶与海洋工程",
      "食品科学"
    ],
    "strongSubjectsEn": [
      "Navigation Technology",
      "Fisheries Science",
      "Naval Architecture & Ocean Engineering",
      "Food Science",
    ],
    "strengths": [
      "海洋水产特色",
      "位于厦门环境美",
      "就业面向沿海"
    ],
    "strengthsEn": [
      "Marine & fisheries specialization",
      "Beautiful Xiamen environment",
      "Employment oriented toward coastal regions",
    ],},
  {
    "id": "jxnu",
    "nameEn": "Jiangxi Normal University",
    "nameZh": "江西师范大学",
    "badge": "江师",
    "color": "#B5532E",
    "city": "Nanchang",
    "region": "East",
    "types": [
      "Education",
      "Normal"
    ],
    "tier": "普通本科",
    "blurb": "Major normal university in Nanchang strong in education, humanities, sciences and teacher training.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Yes — English-taught programs available; IELTS 6 / TOEFL 80 for non-native English speakers.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4–6 by discipline for Chinese-taught; IELTS 6 / TOEFL 80 for English-taught.",
    "deadline": "Degree programs: usually to Jun 1 (fall intake); check yearly.",
    "tuition": "Tuition per program; application fee applies (self-funded).",
    "applyUrl": "https://jxnu.17gz.org/",
    "isoUrl": "https://laihua.jxnu.edu.cn/",
    "highlights": [
      "Office of International Programs",
      "Online application via 17gz.org",
      "CSCA required for undergrad from 2026/27"
    ],
    "strongSubjects": [
      "化学",
      "教育学",
      "心理学",
      "马克思主义理论"
    ],
    "strongSubjectsEn": [
      "Chemistry",
      "Education",
      "Psychology",
      "Marxist Theory",
    ],
    "strengths": [
      "师范教育实力强",
      "位于南昌成本低",
      "生活成本较低"
    ],
    "strengthsEn": [
      "Strong teacher-education capability",
      "Low living costs in Nanchang",
      "Relatively low living costs",
    ],},
  {
    "id": "wust",
    "nameEn": "Wuhan University of Science and Technology",
    "nameZh": "武汉科技大学",
    "badge": "武科",
    "color": "#2E6F95",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Metallurgy, materials and engineering-focused university in Wuhan; strong in steel and refractory-materials research.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). A few English-taught options (e.g. Computer Science) may be available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Nov – Jun.",
    "tuition": "¥18,000–25,000/yr typical (self-funded); English-taught up to ~¥21,800/yr.",
    "applyUrl": "https://wis.wust.edu.cn/",
    "isoUrl": "https://wis.wust.edu.cn/",
    "highlights": [
      "Strong in metallurgy, materials and engineering",
      "Over 400 international students; CSC/Hubei provincial scholarships",
      "Three campuses in Wuhan"
    ],
    "strongSubjects": [
      "冶金工程",
      "材料科学与工程",
      "机械工程",
      "控制科学与工程"
    ],
    "strongSubjectsEn": [
      "Metallurgical Engineering",
      "Materials Science & Engineering",
      "Mechanical Engineering",
      "Control Science & Engineering",
    ],
    "strengths": [
      "冶金材料特色",
      "位于武汉区位优",
      "工科就业稳定"
    ],
    "strengthsEn": [
      "Metallurgy & materials specialization",
      "Advantageous Wuhan location",
      "Stable engineering employment",
    ],},
  {
    "id": "hubu",
    "nameEn": "Hubei University",
    "nameZh": "湖北大学",
    "badge": "湖",
    "color": "#6A4C93",
    "city": "Wuhan",
    "region": "Central",
    "types": [
      "Comprehensive"
    ],
    "tier": "普通本科",
    "blurb": "Provincial comprehensive university in Wuhan with strengths in liberal arts, history, journalism and teacher education.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4–5). Some graduate programs may be English-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 (science/engineering/economics) or HSK 5 (literature/history/philosophy) for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: generally Nov – Jun.",
    "tuition": "¥18,000–25,000/yr typical (self-funded).",
    "applyUrl": "http://hubu.at0086.cn/student",
    "isoUrl": "https://eng.hubu.edu.cn/",
    "highlights": [
      "Comprehensive programs across arts and sciences",
      "English site with online application (hubu.at0086.cn)",
      "Wuhan location, central China hub"
    ],
    "strongSubjects": [
      "生物学",
      "材料科学",
      "化学",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Biology",
      "Materials Science",
      "Chemistry",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "综合性学科齐全",
      "位于武汉区位优",
      "文理基础扎实"
    ],
    "strengthsEn": [
      "Complete range of comprehensive disciplines",
      "Advantageous Wuhan location",
      "Solid foundation in arts & sciences",
    ],},
  {
    "id": "nhu",
    "nameEn": "University of South China",
    "nameZh": "南华大学",
    "badge": "南华",
    "color": "#1F8A70",
    "city": "Hengyang",
    "region": "Central",
    "types": [
      "Engineering",
      "Medical"
    ],
    "tier": "普通本科",
    "blurb": "University in Hengyang known for nuclear science, medicine and engineering, with affiliated hospitals.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). Medical programs may offer some English-taught tracks.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: Mar 20 – Aug 10 (per 2025 guide).",
    "tuition": "¥18,000–25,000/yr typical (self-funded).",
    "applyUrl": "http://apply.usc.edu.cn/",
    "isoUrl": "https://gjxy.usc.edu.cn/",
    "highlights": [
      "Strengths in nuclear technology, medicine and engineering",
      "Self-built apply.usc.edu.cn portal",
      "Located in Hengyang, Hunan"
    ],
    "strongSubjects": [
      "核科学与技术",
      "临床医学",
      "矿业工程",
      "安全科学与工程"
    ],
    "strongSubjectsEn": [
      "Nuclear Science & Technology",
      "Clinical Medicine",
      "Mining Engineering",
      "Safety Science & Engineering",
    ],
    "strengths": [
      "核科学特色独树",
      "医学实力较强",
      "工科医学兼备"
    ],
    "strengthsEn": [
      "Unique nuclear-science specialization",
      "Relatively strong medical strength",
      "Combining engineering & medicine",
    ],},
  {
    "id": "haust",
    "nameEn": "Henan University of Science and Technology",
    "nameZh": "河南科技大学",
    "badge": "河科",
    "color": "#D9822B",
    "city": "Luoyang",
    "region": "Central",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Comprehensive science-and-technology university in Luoyang with engineering, agriculture and medical strengths; 'cradle of the bearing industry'.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Jan – Jun.",
    "tuition": "¥18,000–25,000/yr typical (self-funded).",
    "applyUrl": "http://haust.at0086.cn/student",
    "isoUrl": "https://gjb.haust.edu.cn/",
    "highlights": [
      "Strong in mechanical, materials and engineering",
      "at0086 application system (haust.at0086.cn)",
      "Luoyang, ancient capital of Henan"
    ],
    "strongSubjects": [
      "机械工程",
      "材料科学",
      "车辆工程",
      "农业工程"
    ],
    "strongSubjectsEn": [
      "Mechanical Engineering",
      "Materials Science",
      "Vehicle Engineering",
      "Agricultural Engineering",
    ],
    "strengths": [
      "轴承研究闻名",
      "位于洛阳古都",
      "工科基础扎实"
    ],
    "strengthsEn": [
      "Renowned for bearing research",
      "Located in the ancient capital Luoyang",
      "Solid engineering foundation",
    ],},
  {
    "id": "hpu",
    "nameEn": "Henan Polytechnic University",
    "nameZh": "河南理工大学",
    "badge": "河理",
    "color": "#8E44AD",
    "city": "Jiaozuo",
    "region": "Central",
    "types": [
      "Engineering",
      "Mining"
    ],
    "tier": "普通本科",
    "blurb": "China's first mining higher-education institution (founded 1909); strengths in safety, mining, geomatics and engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Some English-taught undergraduate/graduate majors (civil, computer, mechanical, automation, mining, economics).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught majors.",
    "deadline": "Degree programs: typically Jan – Jun.",
    "tuition": "¥16,000–22,000/yr typical (self-funded).",
    "applyUrl": "https://gjc.hpu.edu.cn/",
    "isoUrl": "https://gjc.hpu.edu.cn/",
    "highlights": [
      "First mining university in China",
      "English-taught majors available",
      "Jiaozuo, Henan"
    ],
    "strongSubjects": [
      "安全科学与工程",
      "采矿工程",
      "测绘科学与技术",
      "地质资源"
    ],
    "strongSubjectsEn": [
      "Safety Science & Engineering",
      "Mining Engineering",
      "Surveying & Mapping Science & Technology",
      "Geological Resources",
    ],
    "strengths": [
      "安全采矿特色",
      "百年工科底蕴",
      "学费生活成本低"
    ],
    "strengthsEn": [
      "Safe-mining specialization",
      "Century-old engineering heritage",
      "Low tuition & living costs",
    ],},
  {
    "id": "gdut",
    "nameEn": "Guangdong University of Technology",
    "nameZh": "广东工业大学",
    "badge": "广工",
    "color": "#16A085",
    "city": "Guangzhou",
    "region": "South",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Engineering-focused university in Guangzhou; strong in mechanical, electrical, materials and IT; rising research profile.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Undergraduate English-taught programs available (¥23,000/yr); most graduate programs Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: application deadline 30 June (per 2026 guide).",
    "tuition": "¥18,000–25,000/yr; English-taught undergrad ¥23,000/yr.",
    "applyUrl": "https://apply.gdut.edu.cn/",
    "isoUrl": "https://iec.gdut.edu.cn/",
    "highlights": [
      "Self-hosted apply.gdut.edu.cn portal",
      "English-taught undergraduate options",
      "Guangzhou, Greater Bay Area"
    ],
    "strongSubjects": [
      "控制科学与工程",
      "机械工程",
      "化学工程",
      "材料科学"
    ],
    "strongSubjectsEn": [
      "Control Science & Engineering",
      "Mechanical Engineering",
      "Chemical Engineering",
      "Materials Science",
    ],
    "strengths": [
      "控制工程实力强",
      "地处广州区位优",
      "就业前景好"
    ],
    "strengthsEn": [
      "Strong control engineering",
      "Located in Guangzhou with advantageous location",
      "Excellent career prospects",
    ],},
  {
    "id": "stu",
    "nameEn": "Shantou University",
    "nameZh": "汕头大学",
    "badge": "汕大",
    "color": "#2C7FB8",
    "city": "Shantou",
    "region": "South",
    "types": [
      "Comprehensive"
    ],
    "tier": "普通本科",
    "blurb": "Privately supported comprehensive university in Shantou; well-known English-taught MBBS program and liberal arts.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Strong English-taught MBBS (medicine) program; other programs mostly Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for MBBS/English-taught.",
    "deadline": "Degree programs: typically Mar – Jun.",
    "tuition": "¥20,000–34,000/yr typical (self-funded); MBBS higher.",
    "applyUrl": "https://sie.stu.edu.cn/",
    "isoUrl": "https://sie.stu.edu.cn/",
    "highlights": [
      "Renowned English-taught MBBS program",
      "Generous scholarships for international students",
      "Shantou, Guangdong coastal city"
    ],
    "strongSubjects": [
      "临床医学",
      "工商管理",
      "艺术设计",
      "新闻传播"
    ],
    "strongSubjectsEn": [
      "Clinical Medicine",
      "Business Administration",
      "Art & Design",
      "Journalism & Communication",
    ],
    "strengths": [
      "医学院实力强",
      "国际化精英教育",
      "基金会支持"
    ],
    "strengthsEn": [
      "Strong medical school",
      "International elite education",
      "Foundation support",
    ],},
  {
    "id": "guet",
    "nameEn": "Guilin University of Electronic Technology",
    "nameZh": "桂林电子科技大学",
    "badge": "桂电",
    "color": "#E67E22",
    "city": "Guilin",
    "region": "South",
    "types": [
      "Engineering",
      "EE"
    ],
    "tier": "普通本科",
    "blurb": "One of China's four electronics/science-tech universities; strengths in electronic engineering, IT and communications.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). Some graduate programs may be English-taught.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Jan – Jun.",
    "tuition": "¥18,000–22,000/yr typical (self-funded).",
    "applyUrl": "https://www.guet.edu.cn/internationaleng/",
    "isoUrl": "https://www.guet.edu.cn/internationaleng/",
    "highlights": [
      "Strong in electronics, IT and communications",
      "Scenic Guilin campus",
      "Guangxi government / ASEAN scholarships"
    ],
    "strongSubjects": [
      "信息与通信工程",
      "计算机科学",
      "电子科学与技术",
      "机械工程"
    ],
    "strongSubjectsEn": [
      "Information & Communication Engineering",
      "Computer Science",
      "Electronic Science & Technology",
      "Mechanical Engineering",
    ],
    "strengths": [
      "电子信息特色",
      "位于桂林环境美",
      "工科就业稳定"
    ],
    "strengthsEn": [
      "Electronics & information specialization",
      "Beautiful Guilin environment",
      "Stable engineering employment",
    ],},
  {
    "id": "gxmu",
    "nameEn": "Guangxi Minzu University",
    "nameZh": "广西民族大学",
    "badge": "广民",
    "color": "#C2185B",
    "city": "Nanning",
    "region": "South",
    "types": [
      "Humanities",
      "Minority"
    ],
    "tier": "普通本科",
    "blurb": "Ethnic/minzu university in Nanning focusing on humanities, languages, ASEAN studies and minority cultures.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 3–4). Some English-taught majors (English proof required).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 3–4 for Chinese-taught (HSK 4 for most); English proof for English-taught.",
    "deadline": "Degree programs: Apr 1 – Sep 1 (per 2024 guide).",
    "tuition": "¥12,000–18,000/yr typical (self-funded; lower than engineering schools).",
    "applyUrl": "http://gxmzu.liuguanbao.com/Account/Login/",
    "isoUrl": "http://gjjy.gxmzu.edu.cn/",
    "highlights": [
      "Strengths in languages, ASEAN & minority studies",
      "Lower tuition; Nanning, Guangxi",
      "Close to ASEAN countries"
    ],
    "strongSubjects": [
      "民族学",
      "东南亚语言",
      "外国语言文学",
      "法学"
    ],
    "strongSubjectsEn": [
      "Ethnology",
      "Southeast Asian Languages",
      "Foreign Languages & Literature",
      "Law",
    ],
    "strengths": [
      "东盟语言特色",
      "位于南宁区位优",
      "面向东南亚交流"
    ],
    "strengthsEn": [
      "ASEAN language specialization",
      "Advantageous Nanning location",
      "Exchange oriented toward Southeast Asia",
    ],},
  {
    "id": "hnsf",
    "nameEn": "Hainan Normal University",
    "nameZh": "海南师范大学",
    "badge": "海师",
    "color": "#009688",
    "city": "Haikou",
    "region": "South",
    "types": [
      "Education",
      "Normal"
    ],
    "tier": "普通本科",
    "blurb": "Provincial normal (teacher-training) university in Haikou; strengths in education, Chinese language and humanities.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). International Chinese Language Teachers Scholarship available.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: two intakes – Mar–May and Sep–Dec (per 2026 guide).",
    "tuition": "¥14,000–20,000/yr typical (self-funded).",
    "applyUrl": "http://study.hainnu.edu.cn/",
    "isoUrl": "http://gjwh.hainnu.edu.cn/",
    "highlights": [
      "Teacher-training focus; Hainan Normal",
      "Self-hosted study.hainnu.edu.cn portal",
      "Explicitly references the 2026 CSCA policy"
    ],
    "strongSubjects": [
      "教育学",
      "化学",
      "生态学",
      "中国语言文学"
    ],
    "strongSubjectsEn": [
      "Education",
      "Chemistry",
      "Ecology",
      "Chinese Language & Literature",
    ],
    "strengths": [
      "师范教育基础好",
      "热带海岛环境",
      "位于海口生活宜"
    ],
    "strengthsEn": [
      "Solid teacher-education foundation",
      "Tropical island environment",
      "Livable Haikou",
    ],},
  {
    "id": "cqtu",
    "nameEn": "Chongqing Jiaotong University",
    "nameZh": "重庆交通大学",
    "badge": "渝交",
    "color": "#5D4037",
    "city": "Chongqing",
    "region": "Central-West",
    "types": [
      "Engineering",
      "Transport"
    ],
    "tier": "普通本科",
    "blurb": "Transport and civil-engineering oriented university in Chongqing; strengths in bridge/tunnel, highways and water transport.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). Some English-taught graduate options.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Mar – Jul.",
    "tuition": "¥15,000–20,000/yr typical (self-funded).",
    "applyUrl": "https://cqjtu.17gz.org/",
    "isoUrl": "http://international.cqjtu.edu.cn/",
    "highlights": [
      "Strengths in transport, civil & hydraulic engineering",
      "17gz.org application system (cqjtu.17gz.org)",
      "Chongqing, mega-city in west China"
    ],
    "strongSubjects": [
      "交通运输工程",
      "土木工程",
      "水利工程",
      "桥梁与隧道"
    ],
    "strongSubjectsEn": [
      "Transportation Engineering",
      "Civil Engineering",
      "Hydraulic Engineering",
      "Bridge & Tunnel Engineering",
    ],
    "strengths": [
      "交通土建特色",
      "位于重庆区位优",
      "工科就业前景好"
    ],
    "strengthsEn": [
      "Transportation & civil-engineering focus",
      "Advantageous Chongqing location",
      "Good engineering career prospects",
    ],},
  {
    "id": "xupt",
    "nameEn": "Xi'an University of Posts and Telecommunications",
    "nameZh": "西安邮电大学",
    "badge": "西邮",
    "color": "#00796B",
    "city": "Xi'an",
    "region": "Central-West",
    "types": [
      "Engineering",
      "IT"
    ],
    "tier": "普通本科",
    "blurb": "Information-and-communications focused university in Xi'an; strengths in telecom, IT, electronics and computer science.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). Separate English-taught classes possible when enough applicants.",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: application deadline 15 Jun (per admission guide).",
    "tuition": "¥16,000–22,000/yr typical (self-funded).",
    "applyUrl": "https://fao.xupt.edu.cn/",
    "isoUrl": "https://fao.xupt.edu.cn/",
    "highlights": [
      "Strengths in telecom, IT and electronics",
      "Located in historic Xi'an",
      "Application by email (International_office@xupt.edu.cn)"
    ],
    "strongSubjects": [
      "信息与通信工程",
      "计算机科学",
      "电子科学与技术",
      "网络空间安全"
    ],
    "strongSubjectsEn": [
      "Information & Communication Engineering",
      "Computer Science",
      "Electronic Science & Technology",
      "Cyberspace Security",
    ],
    "strengths": [
      "信息通信特色",
      "位于西安古都",
      "IT就业前景好"
    ],
    "strengthsEn": [
      "Information & communication specialization",
      "Located in the ancient capital Xi'an",
      "Strong IT career prospects",
    ],},
  {
    "id": "ynmu",
    "nameEn": "Yunnan Minzu University",
    "nameZh": "云南民族大学",
    "badge": "云民",
    "color": "#8D6E63",
    "city": "Kunming",
    "region": "Central-West",
    "types": [
      "Humanities",
      "Minority"
    ],
    "tier": "普通本科",
    "blurb": "Ethnic/minzu university in Kunming focusing on humanities, minority languages, pharmacy and Southeast Asian studies.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; most programs are Chinese-taught (HSK 4). Some English-medium master's (e.g. Pharmacy).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "文科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof for English-taught.",
    "deadline": "Degree programs: typically Jan 1 – Apr 1 (scholarship); self-funded similar windows.",
    "tuition": "¥14,000–18,000/yr typical (self-funded).",
    "applyUrl": "https://ynni.at0086.cn/StuApplication/login.aspx",
    "isoUrl": "https://web.ymu.edu.cn/gjxy/",
    "highlights": [
      "Strengths in minority studies & pharmacy",
      "at0086 application system (ynni.at0086.cn)",
      "Kunming, gateway to Southeast Asia"
    ],
    "strongSubjects": [
      "民族学",
      "东南亚语言",
      "社会学",
      "法学"
    ],
    "strongSubjectsEn": [
      "Ethnology",
      "Southeast Asian Languages",
      "Sociology",
      "Law",
    ],
    "strengths": [
      "东南亚语言特色",
      "位于昆明气候好",
      "面向南亚东南亚"
    ],
    "strengthsEn": [
      "Southeast Asian language specialization",
      "Pleasant Kunming climate",
      "Oriented toward South & Southeast Asia",
    ],},
  {
    "id": "lzut",
    "nameEn": "Lanzhou University of Technology",
    "nameZh": "兰州理工大学",
    "badge": "兰理",
    "color": "#37474F",
    "city": "Lanzhou",
    "region": "Central-West",
    "types": [
      "Engineering"
    ],
    "tier": "普通本科",
    "blurb": "Engineering university in Lanzhou with strengths in mechanical, material, hydraulic and energy engineering.",
    "undergrad": true,
    "graduate": true,
    "englishTaught": "Limited; programs are Chinese-taught (HSK 4).",
    "csca": "Required for undergraduate applicants (national policy, from 2026/27).",
    "cscaSubjects": [
      "理科中文",
      "数学"
    ],
    "minScore": null,
    "language": "HSK 4 for Chinese-taught; English proof considered.",
    "deadline": "Degree programs: Jan 1 – Jun 15 (per 2026 guide).",
    "tuition": "¥14,000–20,000/yr typical (self-funded).",
    "applyUrl": "https://lut.at0086.cn/StuApplication/Login.aspx",
    "isoUrl": "https://international.lut.edu.cn/",
    "highlights": [
      "Strengths in mechanical, materials & hydraulic engineering",
      "at0086 application system (lut.at0086.cn)",
      "Lanzhou, gateway to northwest China"
    ],
    "strongSubjects": [
      "流体机械",
      "材料科学与工程",
      "机械工程",
      "控制科学"
    ],
    "strongSubjectsEn": [
      "Fluid Machinery",
      "Materials Science & Engineering",
      "Mechanical Engineering",
      "Control Science",
    ],
    "strengths": [
      "流体机械闻名",
      "工科基础扎实",
      "学费生活成本低"
    ],
    "strengthsEn": [
      "Renowned for fluid machinery",
      "Solid engineering foundation",
      "Low tuition & living costs",
    ],}
];

// Home exam

// ─────────────────────────────────────────────────────────────────────────
// CSCA note (used by the directory banner). Figures everywhere are indicative —
// the official yearly admission guide overrides everything here.
const CSCA_NOTE = "From the 2026/27 admissions cycle, most undergraduate applicants to Chinese universities sit the CSCA aptitude assessment — Mathematics plus a subject-appropriate Chinese paper (Science/Professional Chinese for STEM & medicine, Liberal-Arts Chinese for humanities & social science). Each school publishes its own required subjects and indicative cut-offs in its undergraduate admission guide; always confirm on the official site.";

// ───────────────────── Exam-day preparation (online proctoring) ─────────────────────
const EXAM_PREP = [
  {
    id: "tech",
    title: "设备与网络",
    en: "Device & network",
    color: "#1F6F54",
    icon: "computer",
    summary: "开考前确认摄像头、麦克风与网络稳定，避免考试中段断线。",
    before: [
      "测试摄像头与麦克风可被监考软件正常调用",
      "用测速工具确认上传/下载带宽达标",
      "准备一台备用设备（手机/平板）应急",
      "关闭无关程序与弹窗通知"
    ],
    fix: "一旦断线，立即按监考指引重连；若无法恢复，保存截图并联系考务邮箱/电话报备。",
    tip: "有线网络优先于 Wi-Fi，路由器放在手边。"
  },
  {
    id: "idcheck",
    title: "身份核验",
    en: "Identity verification",
    color: "#A52019",
    icon: "badge",
    summary: "准备好证件并按监考要求完成身份核验。",
    before: [
      "护照/身份证放在手边",
      "提前完成人脸识别或上传证件",
      "清理桌面，仅保留被允许的物品",
      "确认证件在有效期内"
    ],
    fix: "证件信息不符时，立即举起证件面向摄像头并联系监考。",
    tip: "证件姓名拼写须与报名信息完全一致。"
  },
  {
    id: "env",
    title: "考试环境",
    en: "Exam environment",
    color: "#2E6E8E",
    icon: "room",
    summary: "选择安静、独立、光线充足的房间，避免被打扰。",
    before: [
      "独立安静房间，提前告知家人勿打扰",
      "光线从正面打在脸上",
      "手机等电子设备移出视线范围",
      "桌面整洁，仅留准考证与文具"
    ],
    fix: "环境突发噪音或他人闯入，举手示意监考并说明情况。",
    tip: "提前 30 分钟进入考场调试环境。"
  },
  {
    id: "software",
    title: "考试软件",
    en: "Proctoring software",
    color: "#6A4C93",
    icon: "apps",
    summary: "提前安装并熟悉监考/考试客户端。",
    before: [
      "按通知提前下载并安装客户端",
      "用准考证号测试登录",
      "熟悉作答、标记、提交等操作",
      "关闭可能与客户端冲突的录屏/安全软件"
    ],
    fix: "软件闪退或无法启动，截图报错并联系技术支持。",
    tip: "考试前一日完成一次全流程模拟。"
  },
  {
    id: "time",
    title: "时间与时区",
    en: "Time & timezone",
    color: "#D9822B",
    icon: "schedule",
    summary: "核对开考时间与所在时区，避免错过考试。",
    before: [
      "确认考试当地时间与你的时区",
      "在日历中设置开考提醒",
      "提前 30–45 分钟登录候考",
      "留意准考证上的时区说明"
    ],
    fix: "误判时区导致迟到，立即联系考务说明情况。",
    tip: "以准考证标注的北京时间/当地时间为准。"
  },
  {
    id: "docs",
    title: "证件与材料",
    en: "Documents & materials",
    color: "#00796B",
    icon: "description",
    summary: "备齐准考证、身份证件与允许携带的草稿纸。",
    before: [
      "打印或备好电子准考证",
      "身份证件与报名信息一致",
      "草稿纸提前向监考报备",
      "禁止携带书籍、手机等违禁品"
    ],
    fix: "缺失材料，立即告知监考并按指引处理。",
    tip: "把允许物品清单贴在桌面提醒自己。"
  }
];

// ───────────────────── School profile stats (indicative; QS/THE ~2024) ─────────────────────
const SCHOOL_STATS = {
  thu: { qs: "25", the: "12", founded: "1911", acceptance: "—" },
  pku: { qs: "17", the: "14", founded: "1898", acceptance: "—" },
  ruc: { qs: "556", the: "601", founded: "1937", acceptance: "—" },
  fudan: { qs: "50", the: "44", founded: "1905", acceptance: "—" },
  sjtu: { qs: "51", the: "43", founded: "1896", acceptance: "—" },
  tongji: { qs: "216", the: "251", founded: "1907", acceptance: "—" },
  zju: { qs: "44", the: "67", founded: "1897", acceptance: "—" },
  nju: { qs: "141", the: "133", founded: "1902", acceptance: "—" },
  xjtu: { qs: "291", the: "251", founded: "1896", acceptance: "—" },
  hit: { qs: "257", the: "168", founded: "1920", acceptance: "—" },
  whu: { qs: "194", the: "173", founded: "1893", acceptance: "—" },
  sysu: { qs: "323", the: "251", founded: "1924", acceptance: "—" },
  buaa: { qs: "473", the: "401", founded: "1952", acceptance: "—" },
  bit: { qs: "340", the: "601", founded: "1940", acceptance: "—" },
  bnu: { qs: "272", the: "201", founded: "1902", acceptance: "—" },
  bfsu: { qs: "—", the: "—", founded: "1941", acceptance: "—" },
  bjtu: { qs: "901", the: "801", founded: "1896", acceptance: "—" },
  ustb: { qs: "801", the: "801", founded: "1952", acceptance: "—" },
  muc: { qs: "1201", the: "—", founded: "1941", acceptance: "—" },
  nankai: { qs: "384", the: "301", founded: "1919", acceptance: "—" },
  tju: { qs: "285", the: "201", founded: "1895", acceptance: "—" },
  ecnu: { qs: "511", the: "251", founded: "1951", acceptance: "—" },
  shu: { qs: "514", the: "601", founded: "1994", acceptance: "—" },
  ecust: { qs: "801", the: "801", founded: "1952", acceptance: "—" },
  sisu: { qs: "—", the: "—", founded: "1949", acceptance: "—" },
  seu: { qs: "458", the: "301", founded: "1902", acceptance: "—" },
  suda: { qs: "801", the: "601", founded: "1900", acceptance: "—" },
  ustc: { qs: "137", the: "73", founded: "1958", acceptance: "—" },
  xmu: { qs: "392", the: "301", founded: "1921", acceptance: "—" },
  sdu: { qs: "360", the: "351", founded: "1901", acceptance: "—" },
  jlu: { qs: "502", the: "401", founded: "1946", acceptance: "—" },
  hust: { qs: "307", the: "158", founded: "1952", acceptance: "—" },
  scu: { qs: "355", the: "196", founded: "1896", acceptance: "—" },
  uestc: { qs: "561", the: "601", founded: "1956", acceptance: "—" },
  scut: { qs: "392", the: "251", founded: "1952", acceptance: "—" },
  jnu: { qs: "631", the: "801", founded: "1906", acceptance: "—" },
  cqu: { qs: "561", the: "401", founded: "1929", acceptance: "—" },
  npu: { qs: "621", the: "401", founded: "1938", acceptance: "—" },
  neu: { qs: "491", the: "401", founded: "1923", acceptance: "—" },
  hnu: { qs: "656", the: "401", founded: "1903", acceptance: "—" },
  csu: { qs: "452", the: "351", founded: "2000", acceptance: "—" },
  zzu: { qs: "621", the: "601", founded: "1956", acceptance: "—" },
  dlut: { qs: "491", the: "401", founded: "1949", acceptance: "—" },
  ccmu: { qs: "—", the: "—", founded: "1960", acceptance: "—" },
  cmu: { qs: "—", the: "—", founded: "1931", acceptance: "—" },
  sustech: { qs: "301", the: "201", founded: "2011", acceptance: "—" },
  szu: { qs: "508", the: "601", founded: "1983", acceptance: "—" },
  lzu: { qs: "791", the: "601", founded: "1909", acceptance: "—" },
  xidian: { qs: "801", the: "801", founded: "1931", acceptance: "—" },
  ynu: { qs: "801", the: "801", founded: "1922", acceptance: "—" },
  wmu: { qs: "—", the: "—", founded: "1912", acceptance: "—" },
  hrbmu: { qs: "—", the: "—", founded: "1926", acceptance: "—" },
  bupt: { qs: "901", the: "801", founded: "1955", acceptance: "—" },
  dhu: { qs: "901", the: "801", founded: "1951", acceptance: "—" },
  tmu: { qs: "—", the: "—", founded: "1951", acceptance: "—" },
  blcu: { qs: "—", the: "—", founded: "1962", acceptance: "—" }
};

// ───────────────────── Scholarships ─────────────────────
const SCHOLARSHIPS = [
  { id: "csc_bilateral", name: "Chinese Government Scholarship — Bilateral", provider: "China Scholarship Council (CSC)", category: "csc", funding: "full", degree: ["ug","master","phd"], region: "", deadline: "Jan – Apr (via Chinese embassy)", gpaMin: 3.0, link: "https://www.campuschina.org", blurb: "Full funding (tuition, accommodation, monthly stipend, insurance) for degree students; apply through the Chinese embassy in your home country." },
  { id: "csc_university", name: "CSC University Postgraduate Scholarship", provider: "CSC / Host Universities", category: "csc", funding: "full", degree: ["master","phd"], region: "", deadline: "Dec – Apr", gpaMin: 3.0, link: "https://www.campuschina.org", blurb: "Postgraduate (Master's / PhD) full scholarships nominated by Chinese universities under the CSC 'High Level University' program." },
  { id: "csc_excellence", name: "CSC Silk Road / Excellence PhD", provider: "China Scholarship Council", category: "csc", funding: "full", degree: ["phd"], region: "", deadline: "Nov – Mar", gpaMin: 3.5, link: "https://www.campuschina.org", blurb: "Targeted at outstanding PhD candidates, especially from Belt & Road countries; full funding plus research support." },
  { id: "beijing_gov", name: "Beijing Government Scholarship", provider: "Beijing Municipal Education Commission", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "North", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://www.bjedu.gov.cn", blurb: "Partial tuition waiver for international students studying at Beijing universities." },
  { id: "shanghai_gov", name: "Shanghai Government Scholarship", provider: "Shanghai Municipal Education Commission", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "East", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://edu.sh.gov.cn", blurb: "Merit-based partial / full tuition awards for international students at Shanghai institutions." },
  { id: "jiangsu_gov", name: "Jiangsu Provincial Government Scholarship", provider: "Jiangsu Provincial Education Dept", category: "provincial", funding: "partial", degree: ["master","phd"], region: "East", deadline: "Apr – Jul", gpaMin: 2.5, link: "https://www.jiangsu.gov.cn", blurb: "Tuition support for degree students at Jiangsu universities; stronger at provincial-flagship schools." },
  { id: "zhejiang_gov", name: "Zhejiang Government Scholarship", provider: "Zhejiang Provincial Education Dept", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "East", deadline: "Apr – Jul", gpaMin: 2.5, link: "https://www.zj.gov.cn", blurb: "Partial scholarship for international students enrolled in Zhejiang universities." },
  { id: "guangdong_gov", name: "Guangdong Government Outstanding International Student Scholarship", provider: "Guangdong Provincial Education Dept", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "South", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://edu.gd.gov.cn", blurb: "Awards for outstanding international students at Guangdong universities, including in the Greater Bay Area." },
  { id: "hubei_gov", name: "Hubei Provincial Government Scholarship", provider: "Hubei Provincial Education Dept", category: "provincial", funding: "partial", degree: ["master","phd"], region: "Central", deadline: "Apr – Jul", gpaMin: 2.5, link: "https://jyt.hubei.gov.cn", blurb: "Tuition support for international degree students at Hubei universities." },
  { id: "sichuan_gov", name: "Sichuan Government Scholarship", provider: "Sichuan Provincial Education Dept", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "Central-West", deadline: "Apr – Jul", gpaMin: 2.5, link: "https://edu.sc.gov.cn", blurb: "Partial funding for international students at Sichuan universities." },
  { id: "chongqing_gov", name: "Chongqing Government Scholarship", provider: "Chongqing Municipal Education Commission", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "Central-West", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://jw.cq.gov.cn", blurb: "Merit-based awards for international students at Chongqing institutions." },
  { id: "shaanxi_gov", name: "Shaanxi Government Scholarship", provider: "Shaanxi Provincial Education Dept", category: "provincial", funding: "partial", degree: ["master","phd"], region: "Central-West", deadline: "Apr – Jul", gpaMin: 2.5, link: "https://jyt.shaanxi.gov.cn", blurb: "Support for international graduate students at Shaanxi universities (Xi'an hub)." },
  { id: "liaoning_gov", name: "Liaoning Government Scholarship", provider: "Liaoning Provincial Education Dept", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "Northeast", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://jyt.ln.gov.cn", blurb: "Partial tuition awards for international students at Liaoning universities." },
  { id: "tianjin_gov", name: "Tianjin Government Scholarship", provider: "Tianjin Municipal Education Commission", category: "provincial", funding: "partial", degree: ["ug","master","phd"], region: "North", deadline: "Mar – Jun", gpaMin: 2.5, link: "https://jw.tj.gov.cn", blurb: "Awards for international students enrolled in Tianjin universities." },
  { id: "tsinghua_intl", name: "Tsinghua University International Student Scholarship", provider: "Tsinghua University", category: "university", funding: "partial", degree: ["ug","master","phd"], region: "North", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.tsinghua.edu.cn", blurb: "University-funded partial / full awards for admitted international students at Tsinghua." },
  { id: "pku_intl", name: "Peking University International Student Scholarship", provider: "Peking University", category: "university", funding: "partial", degree: ["ug","master","phd"], region: "North", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.pku.edu.cn", blurb: "Merit and need-based awards for international students at PKU." },
  { id: "fudan_intl", name: "Fudan University Scholarship for International Students", provider: "Fudan University", category: "university", funding: "partial", degree: ["ug","master","phd"], region: "East", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.fudan.edu.cn", blurb: "Partial tuition waivers and stipends for outstanding international students at Fudan." },
  { id: "sjtu_intl", name: "SJTU International Graduate Scholarship", provider: "Shanghai Jiao Tong University", category: "university", funding: "partial", degree: ["master","phd"], region: "East", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.sjtu.edu.cn", blurb: "Graduate scholarships (tuition + stipend) for international master's and PhD students at SJTU." },
  { id: "zju_intl", name: "Zhejiang University Scholarship", provider: "Zhejiang University", category: "university", funding: "partial", degree: ["ug","master","phd"], region: "East", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.zju.edu.cn", blurb: "University scholarships for international degree students at Zhejiang University." },
  { id: "scut_intl", name: "SCUT International Student Scholarship", provider: "South China University of Technology", category: "university", funding: "partial", degree: ["ug","master","phd"], region: "South", deadline: "Dec – Mar", gpaMin: 3.0, link: "https://www.scut.edu.cn", blurb: "Partial / full awards for international students at SCUT, strong in engineering." },
  { id: "mofcom_sch", name: "MOFCOM Scholarship", provider: "China's Ministry of Commerce (MOFCOM)", category: "csc", funding: "full", degree: ["master","phd"], region: "", deadline: "Sep – Oct", gpaMin: 3.0, link: "https://www.mofcom.gov.cn", blurb: "Full scholarships for degree students from developing countries, administered through MOFCOM; priority for economics, trade & engineering fields. Application dates vary by year — confirm on the official notice." },
  { id: "csc_autumn", name: "CSC High-Level University Program (Autumn round)", provider: "CSC / Host Universities", category: "csc", funding: "full", degree: ["master","phd"], region: "", deadline: "Oct – Nov", gpaMin: 3.0, link: "https://www.campuschina.org", blurb: "University-nominated CSC postgraduate round with an autumn application window for the following academic year. Dates are indicative — confirm on the official site." }
];

