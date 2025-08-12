// Pays/régions où afficher FR par défaut (liste courte et pratique)
const FRANCOPHONE_REGIONS = new Set([
    "FR","BE","CH","LU","MC", // Europe
    "CA","HT",                // Amériques (Canada, Haïti)
    "MA","TN","DZ","SN","CI","CM","BF","BJ","ML","NE","TG","GN","RW","CD","CG","GA","DJ","CF","KM","SC" // Afrique + IO
  ]);
  
  function parseRegion(locale?: string): string | null {
    if (!locale) return null;
    // ex: "fr-FR", "en-BE", "fr_CA"
    const m = locale.replace("_","-").split("-");
    return m.length >= 2 ? m[1].toUpperCase() : null;
  }
  
  export function detectInitialLang(): "fr" | "en" {
    // 1) Choix utilisateur (persisté)
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "fr" || stored === "en") return stored;
  
    // 2) Langues du navigateur
    const langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]).filter(Boolean) as string[];
  
    // a) si une langue commence par fr → FR direct
    if (langs.some(l => l.toLowerCase().startsWith("fr"))) return "fr";
  
    // b) sinon, on regarde la région (ex: en-BE doit passer en FR)
    for (const l of langs) {
      const region = parseRegion(l);
      if (region && FRANCOPHONE_REGIONS.has(region)) return "fr";
    }
  
    // 3) Dernière chance via Intl (parfois + précis)
    const intlLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    const region = parseRegion(intlLocale);
    if (region && FRANCOPHONE_REGIONS.has(region)) return "fr";
  
    // 4) fallback
    return "en";
  }
  
  export function setUserLang(lang: "fr" | "en") {
    try { localStorage.setItem("lang", lang); } catch {}
  }
  