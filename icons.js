// CSCA Basics — shared SVG icon set (Lucide-style, 24x24, stroke=currentColor).
// Used to replace emoji so the UI reads as a deliberate, designed product.
// `icon(name)` returns the SVG for a known key, or the raw text (e.g. math
// glyphs like ℝ, ∑) when the key is unknown, so academic symbols stay intact.
(function () {
  function _svg(inner) {
    return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
  }

  const ICONS = {
    layers: _svg('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>'),
    book: _svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>'),
    building: _svg('<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>'),
    languages: _svg('<rect x="3" y="11" width="18" height="10" rx="1"/><path d="m13 3-2 8h4l-2-8Z"/><path d="M5 11h14"/><path d="M7 19h10"/>'),
    calculator: _svg('<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>'),
    target: _svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>'),
    flask: _svg('<path d="M10 2v7L4.5 19a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L14 9V2"/><path d="M8 2h8"/>'),
    route: _svg('<circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M6 16.5V11a3 3 0 0 1 3-3h6.5"/><path d="M15 6.5V11a3 3 0 0 0 3 3h.5"/>'),
    search: _svg('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
    chart: _svg('<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="8"/><rect x="12" y="6" width="3" height="12"/><rect x="17" y="13" width="3" height="5"/>'),
    arrowLeft: _svg('<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>'),
    user: _svg('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    calendar: _svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 2v4M16 2v4"/>'),
    volume: _svg('<path d="M11 5 6 9H2v6h4l5 4Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/>'),
    notebook: _svg('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"/><path d="m9 2 3 3 3-3"/>'),
    printer: _svg('<path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/>'),
    x: _svg('<path d="M18 6 6 18M6 6l12 12"/>'),
    atom: _svg('<circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4.6"/><ellipse cx="12" cy="12" rx="10" ry="4.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.6" transform="rotate(120 12 12)"/>'),
    ruler: _svg('<path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-5.6-5.6a1 1 0 0 1 0-1.4L14.3 2.7a1 1 0 0 1 1.4 0l5.6 5.6a1 1 0 0 1 0 1.4Z"/><path d="m7.5 10.5 2 2M10.5 7.5l2 2M13.5 4.5l2 2M4.5 13.5l2 2"/>'),
    chartLine: _svg('<path d="M3 3v18h18"/><path d="m7 14 3-3 3 3 4-5"/>'),
    news: _svg('<path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18l-3-2-3 2-3-2-3 2-3-2-1 2Z"/><path d="M8 6h8M8 10h8M8 14h5"/>'),
    doc: _svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>'),
    check: _svg('<path d="M20 6 9 17l-5-5"/>'),
    cross: _svg('<path d="M18 6 6 18M6 6l12 12"/>'),
    warn: _svg('<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/>'),
    bulb: _svg('<path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/>'),
    trophy: _svg('<path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 4H4v2a3 3 0 0 0 3 3M17 4h3v2a3 3 0 0 1-3 3"/>'),
    fire: _svg('<path d="M12 22c4 0 7-2.7 7-7 0-4-3-6-3-9-2 1-3 2.5-3 4.5 0-2-1-3.5-2.5-4.5C7 6 5 9 5 13c0 4.3 3 9 7 9Z"/>'),
    pin: _svg('<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z"/><circle cx="12" cy="11" r="2.5"/>'),
    bridge: _svg('<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 8.5 15.5 15.5"/>'),
    plus: _svg('<path d="M12 5v14M5 12h14"/>'),
    refresh: _svg('<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/>'),
    play: _svg('<path d="M6 4l14 8-14 8V4Z"/>'),
    clock: _svg('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    download: _svg('<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/>'),
    balance: _svg('<path d="M12 3v18"/><path d="M4 7h16"/><path d="M4 7 1 13h6L4 7Z"/><path d="M20 7l-3 6h6l-3-6Z"/><path d="M8 21h8"/>'),
    table: _svg('<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>'),
    paragraph: _svg('<path d="M4 6h16M4 10h16M4 14h12M4 18h14"/>')
  };

  window.ICONS = ICONS;
  window.icon = function (name) {
    if (!name) return "";
    return ICONS[name] || name;
  };
})();
