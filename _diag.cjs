const fs = require("fs");
const t = fs.readFileSync("data.js", "utf8");
const lines = t.split("\n");
let mangled = 0, conceptEnCount = 0, conceptCount = 0;
const reMangled = /^\s*concept:\s*",\s*$/;
const reConceptEn = /^\s*conceptEn:/;
const reConcept = /^\s*concept:/;
for (let i = 0; i < lines.length; i++) {
  if (reMangled.test(lines[i])) mangled++;
  if (reConceptEn.test(lines[i])) conceptEnCount++;
  if (reConcept.test(lines[i])) conceptCount++;
}
console.log("concept lines:", conceptCount, "conceptEn lines:", conceptEnCount, "mangled concept:\", lines:", mangled);
let bad = 0;
for (let i = 0; i < lines.length; i++) {
  if (reMangled.test(lines[i])) {
    if (!reConceptEn.test(lines[i + 1])) { console.log("NOT followed by conceptEn at", i + 1); bad++; }
  }
}
console.log("mangled not followed by conceptEn:", bad);
// For each mangled line, examine conceptEn line for stray second string literal
let strayWithQuote = 0;
for (let i = 0; i < lines.length; i++) {
  if (reMangled.test(lines[i])) {
    const b = lines[i + 1];
    // parse first string literal after "conceptEn: "
    const idx = b.indexOf('conceptEn: ');
    const rest = b.slice(idx + "conceptEn: ".length);
    // find first " then balanced end
    let p = 0, start = -1;
    while (p < rest.length) {
      if (rest[p] === '"' && start === -1) { start = p; p++; continue; }
      if (rest[p] === '\\') { p += 2; continue; }
      if (rest[p] === '"' && start !== -1) { start = -2; break; }
      p++;
    }
    // start=-2 means we found closing quote at index p; everything after p up to final '",' is ORIG
    if (start === -2) {
      const after = rest.slice(p + 1);
      // after should be ORIG + '",'
      if (after.endsWith('",')) {
        const orig = after.slice(0, -2);
        if (orig.includes('"')) strayWithQuote++;
      } else {
        console.log("UNEXPECTED trailing at", i + 2, JSON.stringify(after.slice(0, 40)));
      }
    } else {
      console.log("could not parse at", i + 2);
    }
  }
}
console.log("ORIG fragments containing a raw double-quote:", strayWithQuote);
