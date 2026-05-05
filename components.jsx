/* ============================================================
   daoinsight — Shared Components & SVG Illustrations
   ============================================================ */

const { useState, useEffect, useRef, useMemo } = React;

/* ----------------------------------------------------------
   PhotoPlaceholder — abstract atmospheric SVG art
   Acts as photography placeholder, with calm, sacred mood.
   ---------------------------------------------------------- */
function PhotoPlaceholder({ kind = "morning", aspect = "4/5", className = "", overlay = false }) {
  const id = useMemo(() => "ph-" + Math.random().toString(36).slice(2, 8), []);

  const scenes = {
    morning: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0E6D2" />
            <stop offset="55%" stopColor="#E4D4B5" />
            <stop offset="100%" stopColor="#A89373" />
          </linearGradient>
          <radialGradient id={id + "-sun"} cx="0.7" cy="0.32" r="0.35">
            <stop offset="0%" stopColor="#FFF4DA" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FFF4DA" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        <rect width="800" height="1000" fill={`url(#${id}-sun)`} />
        {/* horizon */}
        <path d="M0 720 Q 200 680 400 700 T 800 690 L 800 1000 L 0 1000 Z" fill="#5C5037" opacity="0.55" />
        <path d="M0 800 Q 250 760 500 790 T 800 780 L 800 1000 L 0 1000 Z" fill="#3D3424" opacity="0.7" />
        {/* tree silhouette */}
        <g opacity="0.85">
          <rect x="120" y="540" width="3" height="180" fill="#2D2618" />
          <ellipse cx="121" cy="540" rx="55" ry="38" fill="#2D2618" />
        </g>
        <circle cx="560" cy="320" r="60" fill="#FFF6E2" opacity="0.85" />
      </>
    ),
    calm: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E5E8E3" />
            <stop offset="50%" stopColor="#D2D9D1" />
            <stop offset="100%" stopColor="#9FA89E" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* water ripples */}
        <g stroke="#FFFFFF" strokeOpacity="0.35" fill="none" strokeWidth="1">
          <ellipse cx="400" cy="700" rx="380" ry="22" />
          <ellipse cx="400" cy="730" rx="320" ry="18" />
          <ellipse cx="400" cy="760" rx="260" ry="14" />
          <ellipse cx="400" cy="790" rx="200" ry="10" />
        </g>
        {/* mist mountains */}
        <path d="M0 600 L 180 460 L 320 540 L 480 420 L 640 510 L 800 470 L 800 700 L 0 700 Z" fill="#7A857B" opacity="0.5" />
        <path d="M0 660 L 200 580 L 380 620 L 560 560 L 720 600 L 800 590 L 800 720 L 0 720 Z" fill="#5D6960" opacity="0.55" />
      </>
    ),
    window: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5EFE3" />
            <stop offset="100%" stopColor="#D9CFB8" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* window frame */}
        <rect x="120" y="160" width="560" height="700" fill="#FFFAEF" stroke="#C2B393" strokeWidth="2" />
        <line x1="400" y1="160" x2="400" y2="860" stroke="#C2B393" strokeWidth="2" />
        <line x1="120" y1="510" x2="680" y2="510" stroke="#C2B393" strokeWidth="2" />
        {/* light beams */}
        <path d="M120 160 L 680 160 L 800 1000 L 0 1000 Z" fill="#FFF6E2" opacity="0.25" />
        {/* outside */}
        <rect x="125" y="165" width="270" height="340" fill="#B8C7B0" opacity="0.6" />
        <rect x="405" y="165" width="270" height="340" fill="#B8C7B0" opacity="0.6" />
        <rect x="125" y="515" width="270" height="340" fill="#9DAE94" opacity="0.55" />
        <rect x="405" y="515" width="270" height="340" fill="#9DAE94" opacity="0.55" />
        {/* plant on sill */}
        <ellipse cx="200" cy="870" rx="35" ry="8" fill="#7A6748" />
        <path d="M180 870 Q 175 820 200 800 Q 225 820 220 870 Z" fill="#5C7050" />
      </>
    ),
    candle: (
      <>
        <defs>
          <radialGradient id={id + "-bg"} cx="0.5" cy="0.35" r="0.7">
            <stop offset="0%" stopColor="#3A2E1F" />
            <stop offset="100%" stopColor="#0E0A05" />
          </radialGradient>
          <radialGradient id={id + "-glow"} cx="0.5" cy="0.4" r="0.25">
            <stop offset="0%" stopColor="#FFD888" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFD888" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        <rect width="800" height="1000" fill={`url(#${id}-glow)`} />
        {/* candle */}
        <rect x="380" y="500" width="40" height="240" fill="#F0E6D0" />
        <ellipse cx="400" cy="500" rx="20" ry="6" fill="#D9C9A8" />
        <ellipse cx="400" cy="740" rx="20" ry="6" fill="#7A6A4A" />
        {/* flame */}
        <ellipse cx="400" cy="465" rx="12" ry="28" fill="#FFC85A" />
        <ellipse cx="400" cy="470" rx="6" ry="18" fill="#FFF5C4" />
        <line x1="400" y1="490" x2="400" y2="500" stroke="#3A2E1F" strokeWidth="2" />
      </>
    ),
    evening: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3D4A6B" />
            <stop offset="50%" stopColor="#7A6280" />
            <stop offset="100%" stopColor="#D89978" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        <circle cx="400" cy="780" r="80" fill="#FFD58A" opacity="0.95" />
        <path d="M0 820 L 800 820 L 800 1000 L 0 1000 Z" fill="#2A2438" opacity="0.7" />
        <path d="M0 850 Q 100 820 200 845 L 200 1000 L 0 1000 Z" fill="#1F1A2A" />
      </>
    ),
    weariness: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9D2C4" />
            <stop offset="100%" stopColor="#8C8475" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* lone bench */}
        <rect x="200" y="620" width="400" height="14" fill="#5C4A36" />
        <rect x="220" y="634" width="10" height="120" fill="#5C4A36" />
        <rect x="570" y="634" width="10" height="120" fill="#5C4A36" />
        <rect x="200" y="600" width="400" height="14" fill="#6B5740" />
        {/* long shadow */}
        <ellipse cx="400" cy="810" rx="280" ry="20" fill="#3A3328" opacity="0.4" />
      </>
    ),
    prayer: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1F2A38" />
            <stop offset="100%" stopColor="#070B12" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* stars */}
        <g fill="#FFFFFF">
          <circle cx="120" cy="180" r="1.5" opacity="0.8" />
          <circle cx="240" cy="120" r="1" opacity="0.6" />
          <circle cx="380" cy="200" r="2" opacity="0.9" />
          <circle cx="500" cy="140" r="1.2" opacity="0.7" />
          <circle cx="640" cy="180" r="1.5" opacity="0.8" />
          <circle cx="700" cy="280" r="1" opacity="0.5" />
          <circle cx="180" cy="260" r="1" opacity="0.5" />
          <circle cx="450" cy="280" r="1.5" opacity="0.7" />
        </g>
        {/* moon */}
        <circle cx="600" cy="220" r="55" fill="#F2EAD3" opacity="0.95" />
        <circle cx="585" cy="210" r="55" fill="#1F2A38" />
        {/* mountain horizon */}
        <path d="M0 720 L 200 600 L 380 680 L 560 580 L 800 660 L 800 1000 L 0 1000 Z" fill="#0A0E15" />
      </>
    ),
    doubt: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E8E2D2" />
            <stop offset="100%" stopColor="#B8AE94" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* fog layers */}
        <path d="M0 480 Q 200 440 400 470 T 800 450 L 800 1000 L 0 1000 Z" fill="#FFFFFF" opacity="0.3" />
        <path d="M0 600 Q 200 560 400 590 T 800 570 L 800 1000 L 0 1000 Z" fill="#FFFFFF" opacity="0.25" />
        {/* path */}
        <path d="M380 1000 Q 400 800 420 700 Q 410 620 400 560" stroke="#7A6F55" strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="6 8" />
      </>
    ),
    sabbath: (
      <>
        <defs>
          <linearGradient id={id + "-bg"} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7F1E1" />
            <stop offset="100%" stopColor="#D9C9A8" />
          </linearGradient>
        </defs>
        <rect width="800" height="1000" fill={`url(#${id}-bg)`} />
        {/* book */}
        <g transform="translate(180, 480)">
          <path d="M0 80 L 220 60 L 220 240 L 0 260 Z" fill="#FFFAEC" stroke="#A8987A" strokeWidth="1" />
          <path d="M220 60 L 440 80 L 440 260 L 220 240 Z" fill="#FFFAEC" stroke="#A8987A" strokeWidth="1" />
          <path d="M220 60 L 220 240" stroke="#A8987A" strokeWidth="1" />
          {/* lines */}
          <g stroke="#C8B89A" strokeWidth="1">
            <line x1="20" y1="110" x2="200" y2="95" />
            <line x1="20" y1="135" x2="200" y2="120" />
            <line x1="20" y1="160" x2="180" y2="145" />
            <line x1="240" y1="100" x2="420" y2="115" />
            <line x1="240" y1="125" x2="420" y2="140" />
            <line x1="240" y1="150" x2="400" y2="165" />
          </g>
        </g>
      </>
    ),
  };

  return (
    <div className={"photo " + className} style={{ aspectRatio: aspect, position: "relative", overflow: "hidden", borderRadius: "var(--radius)" }}>
      <svg viewBox="0 0 800 1000" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" style={{ display: "block" }}>
        {scenes[kind] || scenes.morning}
      </svg>
      {overlay && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,17,22,0.55), rgba(14,17,22,0.05) 60%)" }} />}
    </div>
  );
}

/* ----------------------------------------------------------
   Logo
   ---------------------------------------------------------- */
function Logo() {
  return (
    <a href="#/" className="logo" data-route="home" style={{display:"flex", alignItems:"center", gap:10, textDecoration:"none"}}>
      <img src="assets/logo.png" alt="daoinsight" style={{width:36, height:36, objectFit:"contain"}} />
      <span style={{fontFamily:"var(--serif-display)", fontSize:22, letterSpacing:"-0.01em", color:"var(--ink)"}}>
        dao<em style={{fontStyle:"italic", color:"var(--accent)"}}>insight</em>
      </span>
    </a>
  );
}

/* ----------------------------------------------------------
   Nav
   ---------------------------------------------------------- */
function Nav({ route, lang, setLang, navigate }) {
  const items = [
    { id: "home",    zh: "首頁",     en: "Home" },
    { id: "today",   zh: "今日靈修", en: "Today" },
    { id: "read",    zh: "讀經",     en: "Read" },
    { id: "library", zh: "文章",     en: "Library" },
    { id: "about",   zh: "關於",     en: "About" },
  ];
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <ul className="nav-links">
          {items.map(it => (
            <li key={it.id}>
              <a
                href={"#/" + it.id}
                className={route === it.id ? "active" : ""}
                onClick={(e) => { e.preventDefault(); navigate(it.id); }}
              >{lang === "en" ? it.en : it.zh}</a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")}>中</button>
            <span className="sep">·</span>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <a href="#/today" onClick={(e)=>{e.preventDefault();navigate("today");}} className="btn btn-solid">
            {t(lang, { zh: "今日經文", en: "Today's Verse" })}
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ----------------------------------------------------------
   Footer
   ---------------------------------------------------------- */
function Footer({ lang, navigate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-tagline serif">
            {t(lang, {
              zh: "陪你慢慢讀聖經。\n— Pastor Gary",
              en: "Reading scripture with you, slowly.\n— Pastor Gary",
            })}
          </div>
          <div style={{ marginTop: 24, color: "var(--ink-mute)", fontSize: 13 }}>
            <a href="https://www.instagram.com/dao.insight.pastorgary" target="_blank" rel="noopener">@dao.insight.pastorgary</a>
            <span style={{ margin: "0 12px" }}>·</span>
            <a href="#">Email</a>
            <span style={{ margin: "0 12px" }}>·</span>
            <a href="#">RSS</a>
          </div>
        </div>
        <div>
          <h5>{t(lang, { zh: "探索", en: "Explore" })}</h5>
          <ul>
            <li><a href="#/today" onClick={(e)=>{e.preventDefault();navigate("today");}}>{t(lang, { zh: "今日靈修", en: "Today" })}</a></li>
            <li><a href="#/read"  onClick={(e)=>{e.preventDefault();navigate("read");}}>{t(lang, { zh: "讀經", en: "Read scripture" })}</a></li>
            <li><a href="#/library" onClick={(e)=>{e.preventDefault();navigate("library");}}>{t(lang, { zh: "文章", en: "Articles" })}</a></li>
          </ul>
        </div>
        <div>
          <h5>{t(lang, { zh: "主題", en: "Topics" })}</h5>
          <ul>
            {CONTENT.topics.slice(0, 5).map((t, i) => (
              <li key={i}><a href="#">{lang === "en" ? t.en : t.zh}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5>{t(lang, { zh: "關於", en: "About" })}</h5>
          <ul>
            <li><a href="#/about" onClick={(e)=>{e.preventDefault();navigate("about");}}>{t(lang, { zh: "我們的故事", en: "Our story" })}</a></li>
            <li><a href="#">{t(lang, { zh: "聯絡我們", en: "Contact" })}</a></li>
            <li><a href="#">{t(lang, { zh: "支持事工", en: "Support" })}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 daoinsight</span>
        <span>{t(lang, { zh: "願恩典與你同在。", en: "Grace be with you." })}</span>
      </div>
    </footer>
  );
}

/* ----------------------------------------------------------
   ArticleCard
   ---------------------------------------------------------- */
function ArticleCard({ article, lang, navigate, size = "m" }) {
  const title = bi(article, lang, "title");
  const excerpt = bi(article, lang, "excerpt");
  const cat = bi(article, lang, "cat");
  const author = bi(article, lang, "author");

  return (
    <a className={"article-card " + size} href={"#/article/" + article.id}
       onClick={(e)=>{e.preventDefault();navigate("article", article.id);}}>
      <PhotoPlaceholder kind={article.img} aspect={size === "l" ? "16/10" : "4/5"} />
      <div className="article-meta">
        <span className="eyebrow">{cat}</span>
        <span className="dot">·</span>
        <span className="caption tnum">{article.date}</span>
      </div>
      <h3 className={"article-title serif " + (size === "l" ? "display-m" : "")}>{title}</h3>
      <p className="article-excerpt body">{excerpt}</p>
      <div className="article-footer">
        <span className="caption">{t(lang, CONTENT.ui.by)} · {author}</span>
        <span className="caption tnum">{article.readtime} {t(lang, CONTENT.ui.minutes)}</span>
      </div>
    </a>
  );
}

/* ----------------------------------------------------------
   Newsletter Block
   ---------------------------------------------------------- */
function Newsletter({ lang }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="newsletter">
      <div className="container-narrow newsletter-inner">
        <div className="eyebrow">{t(lang, { zh: "每日來信", en: "Daily letter" })}</div>
        <h2 className="display-l serif" style={{ marginTop: 16 }}>
          {t(lang, {
            zh: "讓一句經文，先於你的待辦清單。",
            en: "Let one verse arrive before your to-do list.",
          })}
        </h2>
        <p className="body-l" style={{ marginTop: 20, color: "var(--ink-mute)" }}>
          {t(lang, {
            zh: "每天清晨六點，一段經文、一段默想，輕輕地，送到你的信箱。",
            en: "Each morning at six: one verse, one reflection — quietly, in your inbox.",
          })}
        </p>
        {!submitted ? (
          <form className="newsletter-form" onSubmit={(e)=>{e.preventDefault();if(email) setSubmitted(true);}}>
            <input
              type="email"
              placeholder={t(lang, CONTENT.ui.enterEmail)}
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
            <button className="btn btn-solid" type="submit">{t(lang, CONTENT.ui.join)}</button>
          </form>
        ) : (
          <div className="newsletter-thanks serif">
            {t(lang, { zh: "謝謝你。明早六點，信會抵達。", en: "Thank you. The letter will arrive tomorrow at six." })}
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { PhotoPlaceholder, Logo, Nav, Footer, ArticleCard, Newsletter });
