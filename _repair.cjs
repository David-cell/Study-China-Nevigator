const fs = require("fs");
const t = fs.readFileSync("data.js", "utf8");
const lines = t.split("\n");
const reMangled = /^\s*concept:\s*",\s*$/;
const prefix = "conceptEn: ";
const out = [];
let fixed = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (reMangled.test(line)) {
    const next = lines[i + 1];
    const idx = next.indexOf(prefix);
    if (idx === -1) throw new Error("conceptEn not found after mangled concept at line " + (i + 1));
    const rest = next.slice(idx + prefix.length);
    // rest begins with a double-quoted, JSON-escaped EN string
    if (rest[0] !== '"') throw new Error("EN string did not start with quote at line " + (i + 2));
    let p = 1, close = -1;
    while (p < rest.length) {
      if (rest[p] === "\\") { p += 2; continue; }
      if (rest[p] === '"') { close = p; break; }
      p++;
    }
    if (close === -1) throw new Error("unterminated EN string at line " + (i + 2));
    const enStr = rest.slice(0, close + 1); // includes wrapping quotes
    let after = rest.slice(close + 1);
    if (!after.endsWith('",')) throw new Error("unexpected trailing at line " + (i + 2) + ": " + JSON.stringify(after.slice(0, 30)));
    const orig = after.slice(0, -2); // the relocated Chinese concept value
    const indent = line.match(/^\s*/)[0];
    out.push(indent + 'concept: "' + orig + '",');
    out.push(indent + 'conceptEn: ' + enStr + ',');
    i++; // consume the conceptEn line (already re-emitted)
    fixed++;
  } else {
    out.push(line);
  }
}
fs.writeFileSync("data.js", out.join("\n"));
console.log("Repaired mangled concept fields:", fixed);
