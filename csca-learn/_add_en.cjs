// One-shot script: add English siblings (conceptEn, exampleEn, practiceEn)
// to every TOPICS topic that has hasContent. Chinese fields are untouched.
// Insertion is string/brace aware so embedded { } [ ] inside values are respected.
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "data.js");
let text = fs.readFileSync(file, "utf8");

const BASE = "      "; // 6 spaces, matches example:/practice: indentation

// ---- English translations keyed by topic id ----
const EN = {
  "math-sets": {
    conceptEn: "<p>A set is a collection of objects sharing some common attribute. CSCA focuses on set operations (intersection, union, complement) and compound set problems involving inequalities.</p>\n<p><b>Core thinking:</b> visualize with Venn diagrams or the number line; for parameter-containing set problems, first fix the value intervals, then operate.</p>",
    exampleEn: { problem: "Given A={x|x²−3x+2<0}, B={x|x<1}, find A∩B.", steps: ["Solve x²−3x+2<0 → 1<x<2, so A=(1,2)", "B=(−∞,1)", "A∩B=∅"], answer: "∅", tip: "For set problems with inequalities, first convert to intervals, then take intersection/union on the number line." },
    practiceEn: [{ q: "A={1,2,3}, B={2,3,4}; find A∪B.", a: "{1,2,3,4}" }, { q: "A={x|x>0}, B={x|x<5}; find A∩B.", a: "(0,5)" }, { q: "U={1,2,3,4}, A={1,2}; find ∁U A.", a: "{3,4}" }]
  },
  "math-inequalities": {
    conceptEn: "<p>An inequality expresses an order relation. CSCA focuses on quadratic/linear inequalities, parameter-containing inequalities, and absolute-value inequalities.</p>\n<p><b>Core thinking:</b> make the quadratic coefficient positive; for parameters discuss the opening and roots; |x|<a ⇔ −a<x<a; multiplying/dividing by a negative flips the sign.</p>",
    exampleEn: { problem: "Solve the inequality 2x−1 > 3.", steps: ["2x > 4", "x > 2"], answer: "(2, +∞)", tip: "Move terms and combine, then make the coefficient 1 (no sign flip for positive)." },
    practiceEn: [{ q: "Solution set of |x|<3?", a: "−3<x<3" }, { q: "Solve x−5≤0?", a: "x≤5" }, { q: "If the quadratic coefficient is negative, first?", a: "make it positive" }]
  },
  "math-conics": {
    conceptEn: "<p>Conic sections are obtained by cutting a cone with a plane. CSCA focuses on standard equations and geometric properties (foci, eccentricity).</p>\n<p><b>Core thinking:</b> determine the type first, then write the equation; for an ellipse a²=b²+c² with e=c/a<1; for a hyperbola c²=a²+b² with e>1.</p>",
    exampleEn: { problem: "Foci of the ellipse x²/25 + y²/16 = 1?", steps: ["a²=25, b²=16", "c²=25−16=9 → c=3", "foci (±3,0)"], answer: "(±3, 0)", tip: "Foci lie on the major-axis; first compare a and b." },
    practiceEn: [{ q: "Range of ellipse eccentricity?", a: "0<e<1" }, { q: "Focus of parabola y²=4x?", a: "(1,0)" }, { q: "Hyperbola: c²=?", a: "a²+b²" }]
  },
  "math-func": {
    conceptEn: "<p>Three elements of a function: domain, range, and mapping rule. CSCA emphasizes monotonicity, parity (odd/even), and inverse functions.</p>\n<p><b>Core thinking:</b> domain first (denominator ≠ 0, radicand ≥ 0); odd functions are symmetric about the origin, even functions about the y-axis.</p>",
    exampleEn: { problem: "Determine the parity of f(x)=x².", steps: ["f(−x)=(−x)²=x²=f(x)", "even function"], answer: "even function", tip: "First verify the domain is symmetric about the origin." },
    practiceEn: [{ q: "Parity of f(x)=x³?", a: "odd" }, { q: "What to consider for domain?", a: "denominator, radical, etc." }, { q: "Meaning of increasing function?", a: "larger x → larger y" }]
  },
  "math-elemfn": {
    conceptEn: "<p>Exponential and logarithmic functions are inverses of each other. CSCA emphasizes operational properties, graphs, and simple equations.</p>\n<p><b>Core thinking:</b> logarithms turn multiplication/division into addition/subtraction; solve exponential equations by taking logs. Base a>0 and a≠1.</p>",
    exampleEn: { problem: "Solve 2^x = 8.", steps: ["8=2³", "2^x=2³ → x=3"], answer: "3", tip: "Rewrite with the same base, then compare exponents." },
    practiceEn: [{ q: "log_a 1 = ?", a: "0" }, { q: "a^(log_a x) = ?", a: "x" }, { q: "lg(ab) = ?", a: "lga+lgb" }]
  },
  "math-trig": {
    conceptEn: "<p>Trigonometric functions describe periodic phenomena. CSCA emphasizes reduction formulas, graph properties, and solving triangles.</p>\n<p><b>Core thinking:</b> solve triangles with the sine rule a/sinA=2R and the cosine rule; use cosine to find a side, sine or cosine to find an angle.</p>",
    exampleEn: { problem: "Right triangle with a=3, b=4; find hypotenuse c.", steps: ["c²=3²+4²=25", "c=5"], answer: "5", tip: "The Pythagorean theorem is the special case C=90° of the cosine rule." },
    practiceEn: [{ q: "sin²x+cos²x = ?", a: "1" }, { q: "sin(π−x) = ?", a: "sinx" }, { q: "To find an angle with the cosine rule, use?", a: "cosC" }]
  },
  "math-seq": {
    conceptEn: "<p>A sequence is an ordered list of numbers. CSCA emphasizes arithmetic/geometric general terms and sums.</p>\n<p><b>Core thinking:</b> for arithmetic look at difference d, for geometric look at ratio q; combine the sum formula with the middle-term property.</p>",
    exampleEn: { problem: "Arithmetic sequence 2,5,8,…; find the 10th term.", steps: ["a₁=2, d=3", "a₁₀=2+9×3=29"], answer: "29", tip: "First fix the first term and common difference/ratio, then plug into the formula." },
    practiceEn: [{ q: "Geometric sequence 2,4,8; common ratio?", a: "2" }, { q: "5th term of arithmetic 1,3,5?", a: "9" }, { q: "For an arithmetic sum you need?", a: "first, last, and count" }]
  },
  "math-calc": {
    conceptEn: "<p>The derivative is a rate of change; the integral is accumulation. CSCA emphasizes basic formulas and simple applications.</p>\n<p><b>Core thinking:</b> differentiate using basic formulas and the four rules; integration is the inverse of differentiation; use the chain rule for composite functions.</p>",
    exampleEn: { problem: "Derivative of f(x)=x³?", steps: ["(x³)'=3x²"], answer: "3x²", tip: "Derivative of a constant is 0; differentiate sums/differences term by term." },
    practiceEn: [{ q: "(x²)' = ?", a: "2x" }, { q: "∫1 dx = ?", a: "x+C" }, { q: "Geometric meaning of derivative?", a: "slope of tangent" }]
  },
  "math-vectors": {
    conceptEn: "<p>A vector has magnitude and direction. CSCA emphasizes coordinate operations, dot product, and geometric applications.</p>\n<p><b>Core thinking:</b> the coordinate method turns vector operations into real-number operations; the dot product tests perpendicularity (zero) and finds angles.</p>",
    exampleEn: { problem: "a=(1,2), b=(3,4); find a·b.", steps: ["a·b=1×3+2×4=11"], answer: "11", tip: "A dot product of 0 means the two vectors are perpendicular." },
    practiceEn: [{ q: "Magnitude of a=(1,0)?", a: "1" }, { q: "a·b=0 means?", a: "perpendicular" }, { q: "Vector addition satisfies?", a: "commutativity" }]
  },
  "math-complex": {
    conceptEn: "<p>Complex number z=a+bi (i²=−1). CSCA emphasizes arithmetic and geometric meaning (tested in IB HL, A-Level FM).</p>\n<p><b>Core thinking:</b> treat i as a letter in operations, replace i² with −1; the conjugate z*=a−bi is used to rationalize the denominator.</p>",
    exampleEn: { problem: "Compute (1+2i)(1−2i).", steps: ["=1²−(2i)²=1−4i²=1+4=5"], answer: "5", tip: "Multiplying conjugates gives the real number a²+b²." },
    practiceEn: [{ q: "i² = ?", a: "−1" }, { q: "Modulus of z=3+4i?", a: "5" }, { q: "The horizontal axis of the complex plane is?", a: "the real part" }]
  },
  "math-solid": {
    conceptEn: "<p>Solid geometry studies spatial figures. CSCA emphasizes volumes and surface areas of prisms, pyramids, and spheres, plus spatial position relations.</p>\n<p><b>Core thinking:</b> memorize the formulas; a pyramid's volume is 1/3 of a prism with the same base and height; for a sphere use the radius.</p>",
    exampleEn: { problem: "Sphere radius R=1; find the volume.", steps: ["V=4/3·π·1³=4π/3"], answer: "4π/3", tip: "Distinguish radius from diameter." },
    practiceEn: [{ q: "Cylinder volume V?", a: "Sh" }, { q: "Pyramid volume is what fraction of a prism's?", a: "1/3" }, { q: "Sphere diameter d → R = ?", a: "d/2" }]
  },
  "math-prob": {
    conceptEn: "<p>Probability is a measure of how likely a random event is. CSCA emphasizes counting (permutations/combinations) and the classical probability model.</p>\n<p><b>Core thinking:</b> first count total elementary events, then favorable ones; multiply probabilities of independent events, add mutually exclusive ones.</p>",
    exampleEn: { problem: "Rolling a fair die, probability of an even point?", steps: ["6 total outcomes, 3 even", "P=3/6=1/2"], answer: "1/2", tip: "The classical model assumes equally likely outcomes." },
    practiceEn: [{ q: "C(4,2) = ?", a: "6" }, { q: "P(A)=0.5, P(B)=0.4 independent; P(AB)?", a: "0.2" }, { q: "For mutually exclusive events, P(A∪B)?", a: "P(A)+P(B)" }]
  },
  "math-stats": {
    conceptEn: "<p>Statistics uses numerical characteristics to summarize data distribution. CSCA tests mean, variance, standard deviation, frequency histograms, and the normal distribution.</p>\n<p><b>Core thinking:</b> the mean describes the center, variance/standard deviation describe dispersion. The standard deviation is the square root of variance. In a normal distribution about 68% lies within ±1 standard deviation.</p>",
    exampleEn: { problem: "Mean and variance of data 2,4,4,4,6?", steps: ["mean=20/5=4", "sum of squared deviations=4+0+4=8", "variance=8/5=1.6"], answer: "mean 4, variance 1.6", tip: "Remember to take the square root for std dev; CSCA usually divides by n." },
    practiceEn: [{ q: "Variance of data 3,3,3?", a: "0" }, { q: "Mean of data 1,3?", a: "2" }, { q: "Axis of symmetry of N(μ,σ²)?", a: "x=μ" }]
  },
  "phys-kinematics": {
    conceptEn: "<p>Kinematics studies how an object's position changes with time, described by displacement s, velocity v, and acceleration a. CSCA focuses on uniformly accelerated linear motion.</p>\n<p><b>Core thinking:</b> first define a positive direction, then choose a formula. The three uniformly-accelerated formulas let you 'find two from three': lacking time use v²−v₀²=2as, lacking final speed use s=v₀t+½at². Free fall is the special case a=g.</p>",
    exampleEn: { problem: "A car moves at 10 m/s, then brakes with acceleration −2 m/s². How long until it stops?", steps: ["Take motion direction as positive: v₀=10, v=0, a=−2", "Use v=v₀+at → 0=10−2t", "t=5 s"], answer: "5 s", tip: "In braking problems final speed is 0; decide the sign of acceleration before plugging in." },
    practiceEn: [{ q: "Uniform acceleration v₀=0, a=4, t=3; displacement?", a: "18" }, { q: "Free-fall height after 2 s (g=10)?", a: "20" }, { q: "v₀=5, a=0 — what motion?", a: "uniform linear motion" }]
  },
  "phys-newton": {
    conceptEn: "<p>Newton's three laws are the basis of classical mechanics: the law of inertia, F=ma, and action-reaction.</p>\n<p><b>Core thinking:</b> force analysis is step one — first gravity, then elastic force (contact/rope), then friction. Net force determines the acceleration direction. For connected bodies use the whole-system method for a, isolation for internal forces.</p>",
    exampleEn: { problem: "A 2 kg object under a 10 N horizontal force, no friction; find acceleration.", steps: ["Forces: gravity, normal (vertical balance), 10 N horizontal", "F_net=10 N", "a=F/m=10/2=5 m/s²"], answer: "5 m/s²", tip: "First judge N vertically, then write F_net=ma horizontally." },
    practiceEn: [{ q: "What does Newton's first law state?", a: "inertia" }, { q: "Sliding friction for μ=0.2, N=50?", a: "10" }, { q: "In F=ma, what is F?", a: "net force" }]
  },
  "phys-momentum": {
    conceptEn: "<p>Momentum p=mv, impulse I=Ft. Impulse-momentum theorem: net external impulse equals momentum change. Momentum is conserved when the system feels no external force.</p>\n<p><b>Core thinking:</b> for collisions/explosions prefer conservation of momentum; for force-over-time (cushioning) use the impulse-momentum theorem. Mind the vector direction — set a positive direction and carry signs.</p>",
    exampleEn: { problem: "A 1 kg ball hits a wall at 6 m/s and rebounds at 4 m/s; find the momentum change.", steps: ["Take initial direction as positive", "Δp = m(v₂−v₁)=1×(−4−6)=−10 kg·m/s", "magnitude 10, opposite direction"], answer: "10 kg·m/s (reversed)", tip: "Rebound velocity is opposite to initial — always carry the sign." },
    practiceEn: [{ q: "Condition for momentum conservation?", a: "net external force on system is zero" }, { q: "Direction of p in p=mv?", a: "same as velocity" }, { q: "Cushioning lengthens action time — effect on force?", a: "reduces force" }]
  },
  "phys-energy": {
    conceptEn: "<p>Work W=Fs·cosθ, power P=W/t. Work-energy theorem: net work equals kinetic-energy change. Mechanical energy is conserved when only gravity/elastic forces do work.</p>\n<p><b>Core thinking:</b> to find a speed change prefer the work-energy theorem (path-independent); to judge conservation check whether only conservative forces do work. Incline problems often use conservation of mechanical energy.</p>",
    exampleEn: { problem: "A 1 kg object falls 5 m from rest (g=10); find final speed.", steps: ["Only gravity does work, so mechanical energy conserved", "mgh = ½mv²", "v=√(2gh)=√(2×10×5)=10 m/s"], answer: "10 m/s", tip: "Conservation of mechanical energy avoids acceleration and time — solve speed directly." },
    practiceEn: [{ q: "Work when force is perpendicular to displacement?", a: "0" }, { q: "Ek=½mv²; if v doubles, kinetic energy becomes how many times?", a: "4×" }, { q: "Work by a conservative force vs. path?", a: "independent" }]
  },
  "phys-circular": {
    conceptEn: "<p>In uniform circular motion the acceleration points to the center: a=v²/r=ω²r, centripetal force F=mv²/r.</p>\n<p><b>Core thinking:</b> centripetal force is a 'resultant-effect force,' not a new one; it is provided by gravity, normal force, friction, or gravity (attraction). Critical speed at the top of a vertical circle is v=√(gr). Celestial motion gets centripetal force from universal gravitation.</p>",
    exampleEn: { problem: "A 0.5 kg object moves in a circle r=2 m at v=4 m/s; find centripetal force.", steps: ["F=mv²/r", "F=0.5×16/2=4 N"], answer: "4 N", tip: "Centripetal force is the resultant of actual forces, always pointing to the center." },
    practiceEn: [{ q: "Does speed magnitude change in uniform circular motion?", a: "no (direction changes)" }, { q: "Unit of ω?", a: "rad/s" }, { q: "Critical speed at the top?", a: "√(gr)" }]
  },
  "phys-shm": {
    conceptEn: "<p>Simple harmonic motion has restoring force F=−kx and displacement x=Acos(ωt). A pendulum's period is T=2π√(l/g). A wave transmits vibration form and energy.</p>\n<p><b>Core thinking:</b> SHM is periodic; acceleration is opposite to and proportional to displacement. Wave interference depends on phase difference; diffraction is noticeable when obstacle size ≈ wavelength.</p>",
    exampleEn: { problem: "Pendulum length 1 m (g=10); find the period.", steps: ["T=2π√(l/g)", "T=2π√(1/10)≈2×3.14×0.316≈1.99 s"], answer: "≈ 2 s", tip: "Pendulum period is independent of bob mass." },
    practiceEn: [{ q: "Direction of SHM acceleration?", a: "toward equilibrium position" }, { q: "Wave-speed formula?", a: "v=λf" }, { q: "Larger amplitude → larger period?", a: "no (independent of amplitude)" }]
  },
  "phys-electrostatics": {
    conceptEn: "<p>Coulomb force F=kQ₁Q₂/r², field E=F/q=kQ/r². Potential φ=kQ/r, potential energy Ep=qφ.</p>\n<p><b>Core thinking:</b> field strength is a vector (superpose by the parallelogram rule), potential is a scalar (add algebraically). A positive charge's field points outward, a negative charge's inward.</p>",
    exampleEn: { problem: "Two charges each +1×10⁻⁶ C, 0.1 m apart; find Coulomb force (k=9×10⁹).", steps: ["F=kQ₁Q₂/r²", "F=9e9×1e-12/0.01=9e-1=0.9 N", "like charges repel"], answer: "0.9 N (repulsive)", tip: "Unify units to SI before substituting." },
    practiceEn: [{ q: "Definition of field-strength direction?", a: "direction of force on a positive charge" }, { q: "Field at midpoint between equal like charges?", a: "0" }, { q: "Unit of capacitance?", a: "F (farad)" }]
  },
  "phys-dc": {
    conceptEn: "<p>Ohm's law I=U/R. Series R=R₁+R₂, parallel 1/R=1/R₁+1/R₂. Electric power P=UI.</p>\n<p><b>Core thinking:</b> simplify complex circuits to equivalent resistance first; voltage/current division is proportional; for a real source with internal resistance, terminal voltage U=E−Ir.</p>",
    exampleEn: { problem: "R₁=4Ω, R₂=6Ω in series across 10 V; find current.", steps: ["R=4+6=10 Ω", "I=U/R=10/10=1 A"], answer: "1 A", tip: "Series: equal current; parallel: equal voltage." },
    practiceEn: [{ q: "Equivalent resistance of two 10Ω in parallel?", a: "5Ω" }, { q: "If R doubles (U fixed), how does I change?", a: "halves" }, { q: "What does a source's internal resistance consume?", a: "power" }]
  },
  "phys-magnetism": {
    conceptEn: "<p>A current in a magnetic field feels Ampere force F=BIL·sinθ; a moving charge feels Lorentz force F=qvB. The Lorentz force does no work, only changing the velocity direction.</p>\n<p><b>Core thinking:</b> use the left-hand rule to judge force direction. A charged particle in a perpendicular field moves in uniform circular motion, radius r=mv/qB.</p>",
    exampleEn: { problem: "q=1.6×10⁻¹⁹ C, v=10⁶ m/s entering perpendicularly B=0.1 T; find Lorentz force.", steps: ["F=qvB", "F=1.6e-19×1e6×0.1=1.6e-14 N"], answer: "1.6×10⁻¹⁴ N", tip: "Force is maximal when velocity is perpendicular to the field and acts as centripetal force." },
    practiceEn: [{ q: "Does the Lorentz force do work?", a: "no work" }, { q: "What direction does the left-hand rule give?", a: "force direction" }, { q: "Unit of B?", a: "T (tesla)" }]
  },
  "phys-induction": {
    conceptEn: "<p>A changing magnetic flux induces an emf ε=−dΦ/dt (the minus sign is Lenz's law: oppose the change).</p>\n<p><b>Core thinking:</b> first judge how the flux changes, then use Lenz's law to set the induced-current direction (opposing the change). A conductor cutting field lines gives ε=BLv.</p>",
    exampleEn: { problem: "B=0.5 T, L=0.4 m conductor moving perpendicularly at v=2 m/s; find ε.", steps: ["ε=BLv", "ε=0.5×0.4×2=0.4 V"], answer: "0.4 V", tip: "Induced emf is maximal when velocity is perpendicular to both field and conductor." },
    practiceEn: [{ q: "Core of Lenz's law?", a: "oppose the flux change" }, { q: "Unit of magnetic flux?", a: "Wb (weber)" }, { q: "Mutual inductance belongs to?", a: "electromagnetic induction" }]
  },
  "phys-kinetic": {
    conceptEn: "<p>A gas consists of many randomly moving molecules; pressure comes from molecular collisions with the walls. Temperature reflects average molecular kinetic energy.</p>\n<p><b>Core thinking:</b> temperature is a sign of average molecular kinetic energy; at absolute zero molecular thermal motion stops (ideally).</p>",
    exampleEn: { problem: "How does average molecular kinetic energy change when temperature rises?", steps: ["average KE ∝ T", "rises → increases"], answer: "increases", tip: "At the same temperature, different gases have the same average molecular KE." },
    practiceEn: [{ q: "What does temperature signify?", a: "average molecular kinetic energy" }, { q: "Microscopic source of pressure?", a: "molecular collisions with walls" }, { q: "As T→0, molecular motion?", a: "stops (ideal)" }]
  },
  "phys-ideal-gas": {
    conceptEn: "<p>Ideal gas law pV=nRT. For a fixed mass of gas, pV/T = constant.</p>\n<p><b>Core thinking:</b> analyze gas changes by fixing the invariant: isothermal (pV=const), isobaric (V/T=const), isochoric (p/T=const).</p>",
    exampleEn: { problem: "A fixed-mass gas is compressed isothermally to half volume; how does pressure change?", steps: ["isothermal: pV=const", "V halves → p doubles"], answer: "doubles", tip: "In an isothermal process temperature is constant, p and V are inversely related." },
    practiceEn: [{ q: "What is R?", a: "gas constant" }, { q: "Unit of n?", a: "mol" }, { q: "Isobaric heating — volume?", a: "increases" }]
  },
  "phys-thermo1": {
    conceptEn: "<p>The first law of thermodynamics ΔU=Q+W (Q positive when heat is absorbed, W positive when work is done on the gas). It is energy conservation in thermodynamics.</p>\n<p><b>Core thinking:</b> when a gas expands it does work on the outside, W is negative; isochoric W=0 (all Q becomes internal energy); adiabatic Q=0.</p>",
    exampleEn: { problem: "A gas absorbs 100 J of heat while doing 40 J of work on the outside; change in internal energy?", steps: ["work done by gas is negative: W=−40", "ΔU=Q+W=100−40=60 J"], answer: "+60 J", tip: "Fix the sign convention: heat absorbed positive, work done on gas positive." },
    practiceEn: [{ q: "In an adiabatic process Q?", a: "0" }, { q: "In an isochoric process W?", a: "0" }, { q: "Meaning of ΔU?", a: "change in internal energy" }]
  },
  "phys-geom-optics": {
    conceptEn: "<p>Refraction n₁sinθ₁=n₂sinθ₂. Thin-lens imaging 1/u+1/v=1/f, magnification m=v/u.</p>\n<p><b>Core thinking:</b> real objects/images use solid lines, virtual images dashed. Convex lens focal length positive, concave negative; remember the two regimes u>2f and f<u<2f.</p>",
    exampleEn: { problem: "u=30 cm, f=10 cm convex lens; find image distance.", steps: ["1/v=1/f−1/u=1/10−1/30=2/30", "v=15 cm"], answer: "15 cm", tip: "Real image v positive, virtual v negative; |m|>1 means magnified." },
    practiceEn: [{ q: "Sign of convex-lens f?", a: "positive" }, { q: "Condition for total internal reflection?", a: "dense→rare medium with large angle" }, { q: "m>1 means?", a: "magnified" }]
  },
  "phys-wave-optics": {
    conceptEn: "<p>Double-slit fringe spacing Δx=Lλ/d. Light's wave nature shows in interference and diffraction.</p>\n<p><b>Core thinking:</b> constructive interference when path difference kλ, destructive (k+½)λ. Longer wavelength or smaller slit spacing → wider fringes.</p>",
    exampleEn: { problem: "Double slit L=1 m, d=1 mm, λ=500 nm; find fringe spacing.", steps: ["Δx=Lλ/d=1×5e-7/1e-3=5e-4 m=0.5 mm"], answer: "0.5 mm", tip: "Unify units to meters before calculating." },
    practiceEn: [{ q: "Interference reflects which wave property?", a: "superposition" }, { q: "Longer wavelength → fringe spacing?", a: "increases" }, { q: "Condition for noticeable diffraction?", a: "obstacle ≈ wavelength" }]
  },
  "phys-photoelectric": {
    conceptEn: "<p>Photon energy E=hν. Photoelectric equation hν=W+E_k; electrons are emitted only if ν>ν₀ (threshold frequency).</p>\n<p><b>Core thinking:</b> intensity only increases the number of photoelectrons, not their max initial kinetic energy; the initial KE is set by frequency. This is evidence of light's particle nature.</p>",
    exampleEn: { problem: "ν=8×10¹⁴ Hz, W=2 eV (hν≈3.3 eV); find E_k.", steps: ["hν=3.3 eV", "E_k=hν−W=3.3−2=1.3 eV"], answer: "1.3 eV", tip: "E_k cannot be negative; if ν<ν₀ no electron is emitted." },
    practiceEn: [{ q: "Increasing intensity affects?", a: "more photoelectrons" }, { q: "Meaning of threshold frequency?", a: "lower limit for the effect to occur" }, { q: "h is?", a: "Planck constant" }]
  },
  "phys-atom": {
    conceptEn: "<p>Bohr model: hydrogen energy level Eₙ=−13.6/n² eV; transition emits/absorbs a photon hν=ΔE.</p>\n<p><b>Core thinking:</b> larger n → higher level (less negative) and larger orbit radius; light is emitted going from high to low level. Ground state n=1 is most stable.</p>",
    exampleEn: { problem: "Hydrogen atom transitions from n=2 to n=1; find emitted photon energy.", steps: ["E₁=−13.6, E₂=−3.4", "ΔE=10.2 eV"], answer: "10.2 eV", tip: "Watch the negative sign in the higher level; emission takes the positive value." },
    practiceEn: [{ q: "Ground-state n?", a: "1" }, { q: "As n increases, radius?", a: "increases" }, { q: "Approx. ionization energy?", a: "13.6 eV" }]
  },
  "phys-nuclear": {
    conceptEn: "<p>Mass-energy equation E=mc²; mass defect converts to nuclear energy. Radioactive decay N=N₀(½)^{t/T}; half-life T depends on the nuclide.</p>\n<p><b>Core thinking:</b> decay is probabilistic; half-life is unaffected by temperature or pressure; α, β, γ have different penetrating abilities.</p>",
    exampleEn: { problem: "A nuclide with half-life 2 h, initial 8 g; remaining after 6 h?", steps: ["t/T=6/2=3 half-lives", "m=8×(½)³=1 g"], answer: "1 g", tip: "Each half-life halves the mass." },
    practiceEn: [{ q: "Is half-life affected by temperature?", a: "no" }, { q: "Penetrating power of γ rays?", a: "strongest" }, { q: "An α particle is?", a: "helium nucleus" }]
  },
  "phys-relativity": {
    conceptEn: "<p>Special relativity: light speed is constant; in a moving frame time slows and length contracts, and mass equals energy E=mc².</p>\n<p><b>Core thinking:</b> relativistic effects are significant only near c; the mass-energy equation says mass is energy.</p>",
    exampleEn: { problem: "At v=0.8c, observed time in the moving frame for proper time t=1 s?", steps: ["√(1−0.64)=0.6", "t′=1/0.6≈1.67 s"], answer: "≈ 1.67 s", tip: "The greater the speed, the more pronounced time dilation." },
    practiceEn: [{ q: "Light speed in any frame?", a: "constant" }, { q: "For v≪c, relativistic effects?", a: "negligible" }, { q: "E=mc² means?", a: "mass-energy equivalence" }]
  },
  "phys-measurement": {
    conceptEn: "<p>Measurements have systematic and random errors; repeated averaging reduces random error. Significant figures reflect measurement precision.</p>\n<p><b>Core thinking:</b> a result's precision should not exceed the raw data; relative error = absolute error / true value. The graphing method can find a slope.</p>",
    exampleEn: { problem: "Three measurements 9.8, 10.0, 10.2; find the average.", steps: ["average=(9.8+10.0+10.2)/3=10.0"], answer: "10.0", tip: "Keep the same number of significant figures as the measurements." },
    practiceEn: [{ q: "Way to reduce random error?", a: "repeated measurement and average" }, { q: "Can averaging eliminate systematic error?", a: "no" }, { q: "What do significant figures reflect?", a: "measurement precision" }]
  },
  "chem-mole": {
    conceptEn: "<p>The amount of substance is the bridge linking microscopic particles to macroscopic mass and volume. n=m/M=N/Nₐ=cV=V/Vₘ.</p>\n<p><b>Core thinking:</b> in chemical calculations first unify to 'amount of substance' then convert. At STP gas Vₘ≈22.4 L/mol. After balancing, compute by the stoichiometric ratio.</p>",
    exampleEn: { problem: "Find the amount of substance of 18 g water (M=18 g/mol).", steps: ["n=m/M=18/18=1 mol"], answer: "1 mol", tip: "Find molar mass first, then convert; STP means 0℃, 101 kPa." },
    practiceEn: [{ q: "Approx. value of Nₐ?", a: "6.02×10²³" }, { q: "At STP, 22.4 L of any gas = ?", a: "1 mol" }, { q: "In c=n/V, unit of V?", a: "L" }]
  },
  "chem-matter": {
    conceptEn: "<p>Matter divides into pure substances (elements, compounds) and mixtures. Changes divide into physical (no new substance) and chemical (new substance formed).</p>\n<p><b>Core thinking:</b> the only criterion for a chemical change is 'whether a new substance is formed.' Glowing, heating, color change are merely phenomena.</p>",
    exampleEn: { problem: "Classify: ① ice melting ② iron rusting ③ alcohol evaporating", steps: ["① no new substance → physical", "② new substance → chemical", "③ molecules unchanged → physical"], answer: "①③ physical, ② chemical", tip: "Phase changes, dissolution, evaporation are all physical changes." },
    practiceEn: [{ q: "Water freezing is?", a: "physical change" }, { q: "Is H₂O an element or compound?", a: "compound" }, { q: "What is air?", a: "mixture" }]
  },
  "chem-nomenclature": {
    conceptEn: "<p>Chemical notation is chemistry's 'language': element symbols, formulas, equations. Write formulas from valence, balance from mass conservation.</p>\n<p><b>Core thinking:</b> use the 'cross method' for formulas: cross the positive/negative valence numbers to the opposite subscript, then reduce. Start balancing from the most complex element, finish with H and O.</p>",
    exampleEn: { problem: "Balance: Al + O₂ → Al₂O₃", steps: ["right side O=3, take 2Al₂O₃→6 O", "need 3 O₂; Al needs 4", "4Al+3O₂→2Al₂O₃"], answer: "4Al + 3O₂ → 2Al₂O₃", tip: "First balance the least frequent and most complex element." },
    practiceEn: [{ q: "Valence of H in H₂O?", a: "+1" }, { q: "Basis for balancing?", a: "mass conservation" }, { q: "Name of SO₄²⁻?", a: "sulfate" }]
  },
  "chem-solution": {
    conceptEn: "<p>A solution is a homogeneous, stable mixture. Mass fraction w=mass solute/mass solution; molarity c=n/V.</p>\n<p><b>Core thinking:</b> on dilution the amount of solute is unchanged (c₁V₁=c₂V₂). Colloid particles are 1–100 nm and show the Tyndall effect.</p>",
    exampleEn: { problem: "Dilute 100 mL of 1 mol/L HCl to 500 mL; find c.", steps: ["c₁V₁=c₂V₂", "1×100=c₂×500", "c₂=0.2 mol/L"], answer: "0.2 mol/L", tip: "Dilution only adds solvent; the amount of solute stays the same." },
    practiceEn: [{ q: "Colloid particle diameter?", a: "1–100 nm" }, { q: "What does the Tyndall effect indicate?", a: "colloid particles scatter light" }, { q: "Solution with pH<7?", a: "acidic" }]
  },
  "chem-inorganic": {
    conceptEn: "<p>Inorganic chemistry studies properties by element group: metals like Na, Al, Fe, and non-metals like Cl, S, N and their compounds.</p>\n<p><b>Core thinking:</b> use the 'valence–property' thread: metals mostly show positive valence and reducing character; non-metals in high/low valence show both redox behavior. Memorize typical reactions by category.</p>",
    exampleEn: { problem: "Products of Al₂O₃ reacting with HCl?", steps: ["amphoteric oxide + acid gives salt and water", "Al₂O₃+6HCl→2AlCl₃+3H₂O"], answer: "AlCl₃ and H₂O", tip: "Amphoteric oxides react with both acids and bases." },
    practiceEn: [{ q: "Gas from Na reacting with water?", a: "H₂" }, { q: "Common valences of Fe?", a: "+2, +3" }, { q: "Color of Cl₂?", a: "yellow-green" }]
  },
  "chem-reactions": {
    conceptEn: "<p>Electrolytes react in solution as ions; in ionic equations keep insoluble substances, weak electrolytes, and gases as formulas.</p>\n<p><b>Core thinking:</b> to judge coexistence, see whether a precipitate, gas, weak electrolyte forms, or redox occurs. Double decomposition proceeds toward the less soluble/less ionized product.</p>",
    exampleEn: { problem: "Ionic equation for NaCl + AgNO₃?", steps: ["actual reaction Ag⁺+Cl⁻→AgCl↓", "Na⁺, NO₃⁻ are spectator ions"], answer: "Ag⁺ + Cl⁻ → AgCl↓", tip: "Delete the unchanged spectator ions." },
    practiceEn: [{ q: "What is deleted when writing ionic equations?", a: "spectator ions" }, { q: "Ba²⁺ + SO₄²⁻ gives?", a: "BaSO₄ precipitate" }, { q: "Strong acids fully?", a: "ionize" }]
  },
  "chem-acidbase": {
    conceptEn: "<p>Acid-base neutralization gives salt and water. Strong acids fully ionize, weak acids partially. Titration measures unknown concentration.</p>\n<p><b>Core thinking:</b> the key in neutralization titration is endpoint judgment (indicator color change). pH=−lg[H⁺]; diluting a strong acid raises pH slowly, a weak acid quickly.</p>",
    exampleEn: { problem: "pH of 0.1 mol/L strong acid (fully ionized)?", steps: ["[H⁺]=0.1", "pH=−lg(0.1)=1"], answer: "1", tip: "For strong acid take concentration directly; weak acid needs Ka." },
    practiceEn: [{ q: "pH=7 is?", a: "neutral (25℃)" }, { q: "Role of titration indicator?", a: "indicate endpoint" }, { q: "Weak acid partially?", a: "ionizes" }]
  },
  "chem-redox": {
    conceptEn: "<p>The essence of redox is electron transfer: rising valence loses electrons (oxidation), falling gains (reduction).</p>\n<p><b>Core thinking:</b> mark valences to find rises/falls, balance by 'equal electrons gained and lost.' Oxidizing strength: oxidant > oxidation product.</p>",
    exampleEn: { problem: "In Zn + Cu²⁺→Zn²⁺ + Cu, who is oxidized?", steps: ["Zn valence 0→+2 loses electrons", "Zn is oxidized"], answer: "Zn", tip: "Rise=oxidation, fall=reduction; remember 'reduction falls, gains'." },
    practiceEn: [{ q: "What happens to the oxidizing agent?", a: "reduced (valence drops)" }, { q: "Losing electrons is called?", a: "oxidation" }, { q: "Essence of redox?", a: "electron transfer" }]
  },
  "chem-organic": {
    conceptEn: "<p>Organic compounds use carbon as a skeleton, classified by functional group: alkanes, alkenes, alkynes, alcohols, aldehydes, carboxylic acids, etc.</p>\n<p><b>Core thinking:</b> the functional group determines properties: double bonds add, hydroxyl groups esterify, carboxyl groups are acidic. Isomerism focuses on carbon chain and functional-group position.</p>",
    exampleEn: { problem: "Type of reaction between ethylene and bromine water?", steps: ["C=C double bond opens to add Br₂", "addition reaction"], answer: "addition reaction", tip: "Double/triple bonds and benzene rings can add; hydroxyl groups esterify with dehydration." },
    practiceEn: [{ q: "General formula of methane/alkanes?", a: "CnH2n+2" }, { q: "Functional group of alcohols?", a: "−OH" }, { q: "Example of substitution reaction?", a: "alkane halogenation" }]
  },
  "chem-electrochem": {
    conceptEn: "<p>A galvanic cell turns chemical energy into electricity (spontaneous redox); an electrolytic cell consumes electricity to drive non-spontaneous reactions.</p>\n<p><b>Core thinking:</b> in a galvanic cell the negative electrode is oxidized, positive reduced; in an electrolytic cell the anode is oxidized, cathode reduced. Cations move toward the cathode.</p>",
    exampleEn: { problem: "In a Cu-Zn galvanic cell, what electrode is Zn?", steps: ["Zn is active, easily loses electrons", "Zn is the negative electrode (oxidation)"], answer: "negative electrode", tip: "The more active metal is the negative electrode." },
    practiceEn: [{ q: "Galvanic cell energy conversion?", a: "chemical → electrical" }, { q: "At the electrolytic anode occurs?", a: "oxidation" }, { q: "Cations move toward?", a: "cathode" }]
  },
  "chem-atom": {
    conceptEn: "<p>An atom consists of a nucleus (protons+neutrons) and orbital electrons. Electrons are arranged in shells; the nth shell holds at most 2n².</p>\n<p><b>Core thinking:</b> atomic number = proton count = electron count. Isotopes share protons but differ in neutrons, with nearly identical chemical properties.</p>",
    exampleEn: { problem: "Proton and neutron counts of ¹⁶O?", steps: ["Z=8 (oxygen)", "N=A−Z=16−8=8"], answer: "protons 8, neutrons 8", tip: "Upper-left is mass number A, lower-left is proton number Z." },
    practiceEn: [{ q: "Atomic number = ?", a: "proton count" }, { q: "Isotopes differ in?", a: "neutron count" }, { q: "Max electrons in the 2nd shell?", a: "8" }]
  },
  "chem-periodic": {
    conceptEn: "<p>Element properties change periodically with increasing atomic number. Across a period left→right metallicity weakens, non-metallicity strengthens; down a group metallicity strengthens.</p>\n<p><b>Core thinking:</b> explain trends with 'shell count' and 'nuclear charge': more shells → larger radius → easier to lose electrons; larger charge → stronger pull → smaller radius.</p>",
    exampleEn: { problem: "Compare atomic radii of Na, Mg, Al.", steps: ["same period, nuclear charge Na<Mg<Al", "stronger pull → smaller radius", "Na>Mg>Al"], answer: "Na > Mg > Al", tip: "Same period: compare nuclear charge; same group: compare shell count." },
    practiceEn: [{ q: "Down a group, radius?", a: "increases" }, { q: "Region of strongest non-metallicity?", a: "upper right" }, { q: "Period number = ?", a: "shell count" }]
  },
  "chem-bonding": {
    conceptEn: "<p>Chemical bonds divide into ionic (electron transfer), covalent (shared pairs), and metallic.</p>\n<p><b>Core thinking:</b> active metal + active non-metal → ionic bond; between non-metals → covalent. VSEPR: count total electron pairs around the central atom to set geometry; lone pairs compress bond angles.</p>",
    exampleEn: { problem: "Geometry and bond angle of NH₃?", steps: ["N has 5e, bonds with 3H leaving 1 lone pair", "4 electron pairs → tetrahedral electron geometry", "molecule is trigonal pyramidal, angle ≈107°"], answer: "trigonal pyramidal, ≈107°", tip: "More lone pairs → smaller bond angle." },
    practiceEn: [{ q: "Bond type of NaCl?", a: "ionic bond" }, { q: "Geometry of CH₄?", a: "regular tetrahedron" }, { q: "Bond angle of CO₂?", a: "180°" }]
  },
  "chem-kinetics": {
    conceptEn: "<p>Reaction rate v=Δc/Δt. Raising temperature, concentration/pressure, using a positive catalyst, or increasing solid surface area all speed up a reaction.</p>\n<p><b>Core thinking:</b> a catalyst lowers activation energy but does not change the equilibrium position. This is a frequently tested trap.</p>",
    exampleEn: { problem: "A's concentration drops from 2.0 to 0.5 mol/L in 10 s; find average rate.", steps: ["Δc=1.5", "v=1.5/10=0.15"], answer: "0.15 mol/(L·s)", tip: "Rate is the absolute value, always positive." },
    practiceEn: [{ q: "Raising temperature — rate?", a: "increases" }, { q: "Does a catalyst change equilibrium?", a: "no" }, { q: "Adding more solid speeds the reaction?", a: "no" }]
  },
  "chem-equilibrium": {
    conceptEn: "<p>At equilibrium of a reversible reaction forward and reverse rates are equal and component concentrations are constant. Equilibrium constant K quantitatively describes the position.</p>\n<p><b>Core thinking:</b> Le Chatelier's principle: on a change, equilibrium shifts to 'counter the change.' Heating favors the endothermic direction; raising pressure favors fewer gas molecules; a catalyst does not shift equilibrium.</p>",
    exampleEn: { problem: "After N₂+3H₂⇌2NH₃ reaches equilibrium, raise pressure; which way does it shift?", steps: ["left has 4 gas molecules, right has 2", "raising pressure favors fewer gas molecules", "shifts right"], answer: "right (toward NH₃)", tip: "Compare only gaseous molecule counts." },
    practiceEn: [{ q: "Heating — effect on endothermic direction?", a: "promotes" }, { q: "Does a catalyst change equilibrium?", a: "no" }, { q: "K increasing means shift toward?", a: "forward" }]
  }
};

// order of topic ids as they appear in the file (used only to validate coverage)
const ORDER = ["math-sets","math-inequalities","math-conics","math-func","math-elemfn","math-trig","math-seq","math-calc","math-vectors","math-complex","math-solid","math-prob","math-stats","phys-kinematics","phys-newton","phys-momentum","phys-energy","phys-circular","phys-shm","phys-electrostatics","phys-dc","phys-magnetism","phys-induction","phys-kinetic","phys-ideal-gas","phys-thermo1","phys-geom-optics","phys-wave-optics","phys-photoelectric","phys-atom","phys-nuclear","phys-relativity","phys-measurement","chem-mole","chem-matter","chem-nomenclature","chem-solution","chem-inorganic","chem-reactions","chem-acidbase","chem-redox","chem-organic","chem-electrochem","chem-atom","chem-periodic","chem-bonding","chem-kinetics","chem-equilibrium"];

// find matching close brace/bracket at depth 0, ignoring braces inside strings
function findMatch(t, openIdx) {
  let depth = 0;
  let inStr = false;
  for (let i = openIdx; i < t.length; i++) {
    const c = t[i];
    if (c === '"') { inStr = !inStr; continue; }
    if (inStr) continue;
    if (c === '{' || c === '[') depth++;
    else if (c === '}' || c === ']') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function serializeExample(ex) {
  let s = ',\n' + BASE + 'exampleEn: {';
  s += '\n' + BASE + '  problem: ' + JSON.stringify(ex.problem) + ',';
  s += '\n' + BASE + '  steps: [';
  ex.steps.forEach((st, i) => {
    s += '\n' + BASE + '    ' + JSON.stringify(st) + (i < ex.steps.length - 1 ? ',' : '');
  });
  s += '\n' + BASE + '  ],';
  s += '\n' + BASE + '  answer: ' + JSON.stringify(ex.answer) + ',';
  s += '\n' + BASE + '  tip: ' + JSON.stringify(ex.tip);
  s += '\n' + BASE + '}';
  return s;
}

function serializePractice(arr) {
  let s = ',\n' + BASE + 'practiceEn: [';
  arr.forEach((it, i) => {
    s += '\n' + BASE + '  { q: ' + JSON.stringify(it.q) + ', a: ' + JSON.stringify(it.a) + ' }' + (i < arr.length - 1 ? ',' : '');
  });
  s += '\n' + BASE + ']';
  return s;
}

// process topics right-to-left so earlier offsets stay valid
const ids = Object.keys(EN);
for (let k = ids.length - 1; k >= 0; k--) {
  const id = ids[k];
  const en = EN[id];
  const topicStart = text.indexOf('id: "' + id + '"');
  if (topicStart < 0) { console.error("NOT FOUND: " + id); process.exit(1); }

  // gather three insertion points on the CURRENT text, then apply descending
  const points = [];

  // conceptEn: after closing quote of concept string
  const cp = text.indexOf('concept: "', topicStart);
  if (cp < 0) { console.error("no concept for " + id); process.exit(1); }
  const cOpen = cp + 'concept: '.length;
  const cClose = text.indexOf('"', cOpen);
  points.push({ idx: cClose + 1, text: ',\n' + BASE + 'conceptEn: ' + JSON.stringify(en.conceptEn) });

  // exampleEn: after example object's closing brace
  const ep = text.indexOf('example: {', topicStart);
  if (ep < 0) { console.error("no example for " + id); process.exit(1); }
  const eOpen = ep + 'example: '.length;
  const eClose = findMatch(text, eOpen);
  points.push({ idx: eClose + 1, text: serializeExample(en.exampleEn) });

  // practiceEn: after practice array's closing bracket
  const pp = text.indexOf('practice: [', topicStart);
  if (pp < 0) { console.error("no practice for " + id); process.exit(1); }
  const pOpen = pp + 'practice: '.length;
  const pClose = findMatch(text, pOpen);
  points.push({ idx: pClose + 1, text: serializePractice(en.practiceEn) });

  // apply descending by idx
  points.sort((a, b) => b.idx - a.idx);
  for (const p of points) {
    text = text.slice(0, p.idx) + p.text + text.slice(p.idx);
  }
}

fs.writeFileSync(file, text, "utf8");
console.log("Inserted English for " + ids.length + " topics.");
