// StudyChina Navigator — procedural school-crest (校徽) generator.
// Refined editorial crest: a soft brand-tinted disc, a clean double ring,
// a confident centre monogram, and two small "keystone" dots at 3 & 9 o'clock.
// Derived entirely from data.js fields, so it auto-applies to all schools
// (including any added later) with no per-school art assets.
// NOTE: these are stylised seals, NOT official trademarked logos. To use a
// school's REAL crest/logo, drop the image in assets/icons/ and register it
// below. When a school id is listed here, schoolCrest() returns that image
// instead of the generated seal (the seal remains the automatic fallback).
//
//   const SCHOOL_LOGOS = { thu: "thu.svg", pku: "pku.png", fudan: "fudan.svg" };
//
// Files are resolved relative to the page: assets/icons/<filename>.

(function (global) {
  // Map of school id -> logo filename in assets/icons/. Empty = use seals.
  const SCHOOL_LOGOS = {};

  function chars(str) {
    return Array.from(str || "");
  }

  function schoolCrest(u, size, tag) {
    if (!u) return "";
    const logoFile = SCHOOL_LOGOS[u.id];
    if (logoFile) {
      const s = size || 48;
      const alt = (u.nameEn || u.nameZh || "").replace(/"/g, "&quot;");
      return `<img class="crest" src="assets/icons/${logoFile}" alt="${alt}" width="${s}" height="${s}">`;
    }
    const id = (u.id || "x") + (tag || "");
    const color = u.color || "#002147";
    const zh = u.nameZh || "";
    const badge = u.badge || chars(zh)[0] || "?";

    const bLen = chars(badge).length;
    const badgeFs = bLen <= 1 ? 34 : bLen === 2 ? 24 : bLen === 3 ? 17 : 14;

    return (
      `<svg class="crest-svg" viewBox="0 0 120 120" width="${size || 48}" height="${size || 48}" ` +
      `role="img" aria-label="${zh}" xmlns="http://www.w3.org/2000/svg">` +
        `<circle cx="60" cy="60" r="59" fill="${color}" fill-opacity="0.08"/>` +
        `<circle cx="60" cy="60" r="57" fill="none" stroke="${color}" stroke-width="2.5"/>` +
        `<circle cx="60" cy="60" r="49" fill="none" stroke="${color}" stroke-width="1" stroke-opacity="0.5"/>` +
        `<circle cx="11" cy="60" r="1.8" fill="${color}"/>` +
        `<circle cx="109" cy="60" r="1.8" fill="${color}"/>` +
        `<text x="60" y="61" font-family="'PingFang SC','Microsoft YaHei',sans-serif" ` +
          `font-weight="800" fill="${color}" font-size="${badgeFs}" text-anchor="middle" ` +
          `dominant-baseline="central">${badge}</text>` +
      `</svg>`
    );
  }

  global.schoolCrest = schoolCrest;
})(window);
