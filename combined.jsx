/* ============================================================
   daoinsight — Content (bilingual data)
   ============================================================ */

const CONTENT = {
  // Daily verse rotation — 7 entries cycle by day
  dailyVerses: [
    {
      ref_zh: "詩篇 46:10",
      ref_en: "Psalm 46:10",
      verse_zh: "你們要休息，要知道我是　神。",
      verse_en: "Be still, and know that I am God.",
      reflection_zh: "在無止境的提示音與待辦清單之間，神並不要求我們做更多——祂邀請我們先停下。今天，給自己一刻不被打擾的安靜。",
      reflection_en: "Between endless notifications and to-do lists, God does not ask us to do more—He invites us to first stop. Give yourself one undisturbed quiet moment today.",
      img: "calm",
    },
    {
      ref_zh: "馬太福音 11:28",
      ref_en: "Matthew 11:28",
      verse_zh: "凡勞苦擔重擔的人都到我這裏來，我要使你們得安息。",
      verse_en: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reflection_zh: "重擔不是失敗的證據，而是邀請的入口。耶穌沒有先問你的擔子有多重，祂只說：來。",
      reflection_en: "Burdens are not proof of failure—they are the doorway of invitation. Jesus does not ask how heavy your load is. He simply says: come.",
      img: "morning",
    },
    {
      ref_zh: "腓立比書 4:6-7",
      ref_en: "Philippians 4:6-7",
      verse_zh: "應當一無掛慮，只要凡事藉着禱告、祈求和感謝，將你們所要的告訴　神。",
      verse_en: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      reflection_zh: "焦慮是當代人最熟悉的呼吸節奏。保羅給的處方並不複雜：把你心裡那塊石頭，一塊一塊地，告訴神。",
      reflection_en: "Anxiety has become the rhythm of modern breath. Paul's prescription is simple: take the stone in your heart, piece by piece, and tell it to God.",
      img: "window",
    },
  ],

  reading_plans: [
    { id: "psalms-30", title_zh: "詩篇三十日", title_en: "Psalms in 30 Days", days: 30, accent: "morning",
      desc_zh: "在最人性的詩歌裡，重新學習與神對話。", desc_en: "Relearn dialogue with God through the most human songs." },
    { id: "john-21", title_zh: "走進約翰福音", title_en: "Into the Gospel of John", days: 21, accent: "evening",
      desc_zh: "二十一日，跟著一位老使徒回望耶穌。", desc_en: "Twenty-one days following an old apostle looking back at Jesus." },
    { id: "lectio-7", title_zh: "聖言誦讀入門", title_en: "Lectio Divina: A Beginner's Path", days: 7, accent: "candle",
      desc_zh: "七天練習：慢讀、默想、禱告、靜息。", desc_en: "Seven days of slow reading, meditation, prayer, and rest." },
  ],

  articles: [
    {
      id: "weariness",
      cat_zh: "牧者話語", cat_en: "Pastoral",
      title_zh: "當你疲倦的時候，神在哪裡？",
      title_en: "Where Is God When You Are Tired?",
      excerpt_zh: "疲倦不一定是你信心不夠，有時，它是身體誠實的禱告。",
      excerpt_en: "Tiredness is not always a lack of faith. Sometimes, it is the body's most honest prayer.",
      author_zh: "陳道明牧師", author_en: "Pastor Chan",
      date: "2026.04.20",
      readtime: 6,
      img: "weariness",
    },
    {
      id: "prayer",
      cat_zh: "靈修", cat_en: "Devotion",
      title_zh: "禱告不是說對話，是學習聆聽",
      title_en: "Prayer Is Not Speaking the Right Words",
      excerpt_zh: "我們花太多力氣想說對話，卻忘了禱告其實是兩個人的事。",
      excerpt_en: "We spend so much energy crafting the right words, forgetting prayer is a conversation between two.",
      author_zh: "李恩慈傳道", author_en: "Min. Lee",
      date: "2026.04.15",
      readtime: 8,
      img: "prayer",
    },
    {
      id: "doubt",
      cat_zh: "信仰問答", cat_en: "Q&A",
      title_zh: "懷疑會讓我失去信仰嗎？",
      title_en: "Will Doubt Cost Me My Faith?",
      excerpt_zh: "聖經裡最深的信心，常常是從一個誠實的問題開始。",
      excerpt_en: "The deepest faith in scripture often begins with one honest question.",
      author_zh: "編輯部", author_en: "Editorial",
      date: "2026.04.08",
      readtime: 5,
      img: "doubt",
    },
    {
      id: "sabbath",
      cat_zh: "生活神學", cat_en: "Theology of Life",
      title_zh: "安息日，是神給疲倦的人的禮物",
      title_en: "Sabbath: A Gift for the Weary",
      excerpt_zh: "在效率主義的世界裡，停下來，本身就是一種抵抗。",
      excerpt_en: "In a world ruled by efficiency, stopping is itself an act of resistance.",
      author_zh: "陳道明牧師", author_en: "Pastor Chan",
      date: "2026.03.30",
      readtime: 10,
      img: "sabbath",
    },
  ],

  testimonies: [
    {
      name_zh: "靜怡", name_en: "Jing-Yi",
      role_zh: "設計師，台北", role_en: "Designer, Taipei",
      quote_zh: "在地鐵上讀完今日的經文，那一刻我才意識到——原來我已經很久沒有真正深呼吸了。",
      quote_en: "I finished today's verse on the subway, and only then realized—I had not truly taken a deep breath in a long time.",
    },
    {
      name_zh: "建宏", name_en: "Jian-Hong",
      role_zh: "工程師，新加坡", role_en: "Engineer, Singapore",
      quote_zh: "我不屬於任何教會，但每天早上來這裡讀一段話，像是在城市裡找到一個可以坐下來的地方。",
      quote_en: "I don't belong to any church, but reading a passage here each morning is like finding a place to sit in a noisy city.",
    },
    {
      name_zh: "Mei", name_en: "Mei",
      role_zh: "母親、教師，香港", role_en: "Mother & teacher, Hong Kong",
      quote_zh: "我把每日經文設成桌布，讓自己一打開電腦，先看到一句不是工作的話。",
      quote_en: "I set the daily verse as my wallpaper—so the first thing I see when opening my laptop isn't work.",
    },
  ],

  topics: [
    { zh: "焦慮", en: "Anxiety" },
    { zh: "盼望", en: "Hope" },
    { zh: "饒恕", en: "Forgiveness" },
    { zh: "苦難", en: "Suffering" },
    { zh: "孤單", en: "Loneliness" },
    { zh: "感恩", en: "Gratitude" },
    { zh: "信任", en: "Trust" },
    { zh: "呼召", en: "Calling" },
  ],

  ui: {
    today: { zh: "今日經文", en: "Today's Verse" },
    reflect: { zh: "默想", en: "Reflection" },
    readMore: { zh: "繼續閱讀", en: "Read more" },
    explore: { zh: "開始探索", en: "Begin exploring" },
    listen: { zh: "聆聽", en: "Listen" },
    save: { zh: "收藏", en: "Save" },
    share: { zh: "分享", en: "Share" },
    subscribe: { zh: "訂閱每日來信", en: "Subscribe to daily letter" },
    enterEmail: { zh: "輸入你的電郵地址", en: "Enter your email" },
    join: { zh: "加入", en: "Join" },
    minutes: { zh: "分鐘", en: "min read" },
    days: { zh: "日", en: "days" },
    by: { zh: "作者", en: "by" },
    allArticles: { zh: "全部文章", en: "All articles" },
    readingPlans: { zh: "讀經計劃", en: "Reading plans" },
    bibleSearch: { zh: "搜尋經文", en: "Search scripture" },
    new: { zh: "新", en: "New" },
  },
};

window.CONTENT = CONTENT;

// helper getters
window.bi = function (obj, lang, base) {
  // returns obj[base + '_' + (lang==='en'?'en':'zh')]
  const key = base + "_" + (lang === "en" ? "en" : "zh");
  return obj[key];
};

window.t = function (lang, dict) {
  return lang === "en" ? dict.en : dict.zh;
};


/* ===== next file ===== */

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
    <a href="#/" className="logo" data-route="home">
      <span className="logo-mark"></span>
      <span>dao<em>insight</em></span>
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
              zh: "在忙碌生活中，遇見神。",
              en: "Meeting God in a busy life.",
            })}
          </div>
          <div style={{ marginTop: 24, color: "var(--ink-mute)", fontSize: 13 }}>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
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


/* ===== next file ===== */

/* ============================================================
   daoinsight — Pages
   ============================================================ */

const { useState: _us, useEffect: _ue, useRef: _ur } = React;

/* ----------------------------------------------------------
   HOME
   ---------------------------------------------------------- */
function HomePage({ lang, navigate }) {
  const verse = CONTENT.dailyVerses[0];
  const featured = CONTENT.articles[0];
  const others = CONTENT.articles.slice(1, 3);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-stamp">
            {t(lang, {
              zh: <>April<br/>MMXXVI</>,
              en: <>April<br/>MMXXVI</>,
            })}
          </div>
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow eyebrow">
                {t(lang, { zh: "日日靈光 · 慢讀聖經", en: "Daily light · Slow scripture" })}
              </div>
              <h1>
                {t(lang, {
                  zh: <>在忙碌的<br/><em>生活之間</em>，<br/>遇見神。</>,
                  en: <>Meeting God<br/><em>between</em><br/>busy days.</>,
                })}
              </h1>
              <p className="hero-sub">
                {t(lang, {
                  zh: "daoinsight 是一個為現代人預備的慢讀空間。每天一段經文、一段默想，讓信仰在你的城市生活裡，悄悄重新發芽。",
                  en: "daoinsight is a quiet reading space for the modern soul. One verse, one reflection each day — letting faith take root again in your city life.",
                })}
              </p>
              <div className="hero-cta">
                <a href="#/today" onClick={(e)=>{e.preventDefault();navigate("today");}} className="btn btn-solid">
                  {t(lang, { zh: "開始今天的閱讀", en: "Start today's reading" })}
                  <span style={{marginLeft:4}}>→</span>
                </a>
                <a href="#/about" onClick={(e)=>{e.preventDefault();navigate("about");}} className="btn">
                  {t(lang, { zh: "我們的故事", en: "Our story" })}
                </a>
              </div>
            </div>
            <PhotoPlaceholder kind="morning" aspect="4/5" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* DAILY VERSE FEATURE */}
      <section className="verse-feature">
        <div className="container">
          <div className="verse-feature-grid">
            <PhotoPlaceholder kind={verse.img} aspect="1/1.1" className="verse-img" />
            <div>
              <div className="eyebrow" style={{marginBottom:24}}>
                {t(lang, CONTENT.ui.today)} · 28 April 2026
              </div>
              <div className="quote-mark">"</div>
              <blockquote>
                {bi(verse, lang, "verse")}
              </blockquote>
              <cite>— {bi(verse, lang, "ref")} · {t(lang, { zh: "和合本修訂版", en: "RCUV" })}</cite>
              <p style={{marginTop: 32, fontFamily:"var(--serif)", fontSize:18, lineHeight:1.6, color:"var(--ink-soft)"}}>
                {bi(verse, lang, "reflection")}
              </p>
              <div style={{marginTop: 32}}>
                <a href="#/today" onClick={(e)=>{e.preventDefault();navigate("today");}} className="btn">
                  {t(lang, { zh: "進入今天的默想", en: "Enter today's reflection" })} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 12}}>
                {t(lang, { zh: "牧者話語", en: "From the pastor" })}
              </div>
              <h2 className="display-l serif">
                {t(lang, {
                  zh: "對你的生活，說一句真話。",
                  en: "A true word, into your life.",
                })}
              </h2>
            </div>
            <a href="#/library" onClick={(e)=>{e.preventDefault();navigate("library");}} className="btn btn-ghost">
              {t(lang, CONTENT.ui.allArticles)} →
            </a>
          </div>

          <div className="article-grid-feature">
            <ArticleCard article={featured} lang={lang} navigate={navigate} size="l" />
            <div className="secondary">
              {others.map(a => <ArticleCard key={a.id} article={a} lang={lang} navigate={navigate} size="s" />)}
            </div>
          </div>
        </div>
      </section>

      {/* READING PLANS */}
      <section className="section" style={{background: "var(--paper-2)"}}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{marginBottom: 12}}>
                {t(lang, CONTENT.ui.readingPlans)}
              </div>
              <h2 className="display-l serif">
                {t(lang, {
                  zh: "陪你走一段，慢慢讀。",
                  en: "Walk with you, slowly read.",
                })}
              </h2>
            </div>
          </div>
          <div className="plan-grid">
            {CONTENT.reading_plans.map((p, i) => (
              <div className="plan-card" key={p.id} onClick={()=>navigate("read")}>
                <div className="plan-num">{String(i+1).padStart(2,"0")}</div>
                <div className="caption" style={{letterSpacing:"0.08em", textTransform:"uppercase", color:"var(--ink-mute)"}}>
                  {p.days} {t(lang, CONTENT.ui.days)}
                </div>
                <h3>{bi(p, lang, "title")}</h3>
                <p>{bi(p, lang, "desc")}</p>
                <div className="plan-cta">
                  <span>{t(lang, { zh: "開始計劃", en: "Begin plan" })}</span>
                  <span className="arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="section">
        <div className="container-narrow" style={{textAlign:"center"}}>
          <div className="eyebrow" style={{marginBottom: 16}}>
            {t(lang, { zh: "從你正在經歷的開始", en: "Start where you are" })}
          </div>
          <h2 className="display-l serif" style={{marginBottom: 40}}>
            {t(lang, {
              zh: "今天，你心裡裝著什麼？",
              en: "What is in your heart today?",
            })}
          </h2>
          <div className="topic-cloud">
            {CONTENT.topics.map((tp, i) => (
              <a href="#/library" onClick={(e)=>{e.preventDefault();navigate("library");}} key={i} className="topic-chip">
                {lang === "en" ? tp.en : tp.zh}
                <span className="num">{String(12 + i*7).padStart(2,"0")}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIES */}
      <section className="testimony-section">
        <div className="container">
          <div style={{textAlign:"center", marginBottom: 24}}>
            <div className="eyebrow">{t(lang, { zh: "讀者來信", en: "From our readers" })}</div>
          </div>
          <div className="testimony-grid">
            {CONTENT.testimonies.map((tm, i) => (
              <div key={i} className={"testimony-card " + (lang==="en"?"en":"")}>
                <blockquote>{bi(tm, lang, "quote")}</blockquote>
                <div className="who">
                  <span className="avatar">{(bi(tm, lang, "name"))[0]}</span>
                  <span>
                    <strong style={{color:"var(--ink)", fontWeight:500}}>{bi(tm, lang, "name")}</strong>
                    <span style={{margin:"0 8px", color:"var(--ink-faint)"}}>·</span>
                    {bi(tm, lang, "role")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter lang={lang} />
    </div>
  );
}

/* ----------------------------------------------------------
   TODAY (Daily Devotion)
   ---------------------------------------------------------- */
function TodayPage({ lang, navigate }) {
  const [activeIdx, setActiveIdx] = _us(0);
  const verse = CONTENT.dailyVerses[activeIdx];
  const today = new Date(2026, 3, 28); // April 28, 2026 - Tue

  const weekDays = [
    { num: 26, name_zh: "日", name_en: "Sun", off: -2 },
    { num: 27, name_zh: "一", name_en: "Mon", off: -1 },
    { num: 28, name_zh: "二", name_en: "Tue", off: 0, today: true },
    { num: 29, name_zh: "三", name_en: "Wed", off: 1 },
    { num: 30, name_zh: "四", name_en: "Thu", off: 2 },
    { num: 1,  name_zh: "五", name_en: "Fri", off: 3 },
    { num: 2,  name_zh: "六", name_en: "Sat", off: 4 },
  ];

  const prompts_zh = [
    "今天的這節經文，最先觸動你的是哪個字？為什麼？",
    "如果你誠實地告訴神你今天的狀態，會說什麼？",
    "在接下來的二十四小時裡，你願意嘗試把這節經文活出來嗎？以哪個小行動？",
  ];
  const prompts_en = [
    "Which word in today's verse touched you first—and why?",
    "If you honestly told God how you are today, what would you say?",
    "In the next twenty-four hours, what one small act might let this verse become flesh?",
  ];

  return (
    <div className="page today-page">
      <div className="container">
        <div className="today-hero">
          <div className="image-side">
            <PhotoPlaceholder kind={verse.img} aspect="auto" />
          </div>
          <div className="text-side">
            <div className="today-date">
              <span className="day">28</span>
              <div>
                <div className="month-year">April · 2026</div>
                <div style={{fontFamily:"var(--serif)", fontStyle:"italic", color:"var(--ink-mute)", fontSize:15, marginTop:4}}>
                  {t(lang, { zh: "星期二 · 復活期第三週", en: "Tuesday · 3rd week of Easter" })}
                </div>
              </div>
            </div>
            <div className="today-verse-ref">
              {bi(verse, lang, "ref")} · {t(lang, { zh: "和修版", en: "RCUV" })}
            </div>
            <div className="today-verse">
              <span className="verse-num">10</span>
              {bi(verse, lang, "verse")}
            </div>
            <div className="today-actions">
              <button className="today-action-btn" title="Listen">▷</button>
              <button className="today-action-btn" title="Save">♡</button>
              <button className="today-action-btn" title="Share">↗</button>
              <button className="today-action-btn" title="Copy">⎘</button>
            </div>
          </div>
        </div>

        <div className="today-reflection">
          <div className="label">{t(lang, { zh: "默想", en: "Reflection" })}</div>
          <div className="text">
            <p>{bi(verse, lang, "reflection")}</p>
            <p>
              {t(lang, {
                zh: "「休息」這個詞，在希伯來文裡有「鬆手」的意思。鬆開你緊握的計劃，鬆開你想證明的事，鬆開你以為自己必須背負的世界。然後，才有空間讓神成為神。",
                en: "The Hebrew word for \"be still\" carries the sense of letting go—loosening your grip on plans, on what you must prove, on the world you think you have to carry. Only then is there room for God to be God.",
              })}
            </p>
          </div>
        </div>

        <div className="today-prompts">
          <h3>{t(lang, { zh: "今日默想題", en: "Prompts for today" })}</h3>
          <ol>
            {(lang === "en" ? prompts_en : prompts_zh).map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ol>
        </div>

        <div style={{marginTop: 64}}>
          <div className="eyebrow" style={{marginBottom:16}}>{t(lang, { zh: "本週靈修", en: "This week" })}</div>
          <div className="today-week-strip">
            {weekDays.map((d, i) => (
              <div key={i} className={"day-cell" + (d.today?" today":"")}>
                <div className="num">{d.num}</div>
                <div className="name">{lang==="en" ? d.name_en : d.name_zh}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{marginTop: 64, display:"flex", gap:16, justifyContent:"center"}}>
          {CONTENT.dailyVerses.map((_, i) => (
            <button key={i} onClick={()=>setActiveIdx(i)} style={{
              width: i===activeIdx?32:8, height: 8, borderRadius: 4,
              background: i===activeIdx?"var(--ink)":"var(--line)",
              transition: "all 0.3s"
            }} aria-label={"Sample verse " + (i+1)} />
          ))}
        </div>
      </div>

      <Newsletter lang={lang} />
    </div>
  );
}

/* ----------------------------------------------------------
   READ (Bible)
   ---------------------------------------------------------- */
function ReadPage({ lang, navigate }) {
  const psalm46_zh = [
    {n:1, text:"神是我們的避難所，是我們的力量，是我們在患難中隨時的幫助。"},
    {n:2, text:"所以，地雖改變，山雖搖動到海心，"},
    {n:3, text:"其中的水雖澎湃翻騰，山雖因海漲而戰抖，我們也不害怕。"},
    {n:4, text:"有一道河，這河的分汊使神的城歡喜，這城就是至高者居住的聖所。"},
    {n:5, text:"神在其中，城必不動搖；到天一亮，神必幫助這城。"},
    {n:6, text:"萬邦喧嚷，國度動搖；神出聲，地便熔化。"},
    {n:7, text:"萬軍之耶和華與我們同在，雅各的神是我們的避難所。"},
    {n:8, text:"你們來看耶和華的作為，看他使地荒涼的事。"},
    {n:9, text:"他止息戰爭，直到地極；他折弓、斷槍，把戰車焚燒在火中。"},
    {n:10, text:"你們要休息，要知道我是神！我必在列國中受尊崇，在全地也受尊崇。", highlight: true},
    {n:11, text:"萬軍之耶和華與我們同在，雅各的神是我們的避難所。"},
  ];
  const psalm46_en = [
    {n:1, text:"God is our refuge and strength, an ever-present help in trouble."},
    {n:2, text:"Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea,"},
    {n:3, text:"though its waters roar and foam and the mountains quake with their surging."},
    {n:4, text:"There is a river whose streams make glad the city of God, the holy place where the Most High dwells."},
    {n:5, text:"God is within her, she will not fall; God will help her at break of day."},
    {n:6, text:"Nations are in uproar, kingdoms fall; he lifts his voice, the earth melts."},
    {n:7, text:"The LORD Almighty is with us; the God of Jacob is our fortress."},
    {n:8, text:"Come and see what the LORD has done, the desolations he has brought on the earth."},
    {n:9, text:"He makes wars cease to the ends of the earth. He breaks the bow and shatters the spear; he burns the shields with fire."},
    {n:10, text:"He says, \"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.\"", highlight: true},
    {n:11, text:"The LORD Almighty is with us; the God of Jacob is our fortress."},
  ];
  const verses = lang === "en" ? psalm46_en : psalm46_zh;

  const books_zh = ["創世記", "出埃及記", "詩篇", "箴言", "以賽亞書", "馬太福音", "馬可福音", "路加福音", "約翰福音", "羅馬書"];
  const books_en = ["Genesis", "Exodus", "Psalms", "Proverbs", "Isaiah", "Matthew", "Mark", "Luke", "John", "Romans"];
  const books = lang === "en" ? books_en : books_zh;

  return (
    <div className="page read-page">
      <div className="container">
        <div className="read-layout">
          {/* sidebar */}
          <aside className="read-sidebar">
            <input className="read-search" placeholder={t(lang, { zh: "搜尋經卷或關鍵字", en: "Search book or word" })} />
            <h4>{t(lang, { zh: "舊約", en: "Old Testament" })}</h4>
            <ul>
              {books.slice(0,5).map((b,i) => (
                <li key={i} className={i===2?"active":""}>{b}</li>
              ))}
            </ul>
            <h4>{t(lang, { zh: "新約", en: "New Testament" })}</h4>
            <ul>
              {books.slice(5).map((b,i) => <li key={i}>{b}</li>)}
            </ul>
          </aside>

          {/* main */}
          <main className="read-content">
            <div className="read-chapter-head">
              <h1>{t(lang, { zh: "詩篇", en: "Psalms" })} <em>46</em></h1>
              <span className="version">{t(lang, { zh: "和合本修訂版", en: "RCUV" })}</span>
            </div>

            <p style={{fontFamily:"var(--serif)", fontStyle:"italic", color:"var(--ink-mute)", marginBottom: "var(--s4)", fontSize:15}}>
              {t(lang, {
                zh: "可拉後裔的詩歌，交給聖詠團長，調用「女音」。",
                en: "For the director of music. Of the Sons of Korah. According to alamoth. A song.",
              })}
            </p>

            {verses.map(v => (
              <p key={v.n} className={"read-verse" + (v.highlight ? " highlighted" : "")}>
                <span className="vnum">{v.n}</span>
                {v.text}
              </p>
            ))}

            <div className="chapter-nav">
              <a href="#">← {t(lang, { zh: "詩篇 45", en: "Psalm 45" })}</a>
              <a href="#">{t(lang, { zh: "詩篇 47", en: "Psalm 47" })} →</a>
            </div>
          </main>

          {/* aside */}
          <aside className="read-aside">
            <h4>{t(lang, { zh: "今日重點", en: "Today's focus" })}</h4>
            <div className="read-aside-card">
              <div className="ref">v.10</div>
              <p>{t(lang, {
                zh: "「休息」原文有「鬆手」之意——不是怠惰，而是把世界交還給神的姿態。",
                en: "\"Be still\" carries the sense of letting go—not idleness, but the posture of returning the world to God.",
              })}</p>
            </div>
            <div className="read-aside-card">
              <div className="ref">{t(lang, { zh: "對照", en: "Cross-ref" })}</div>
              <p>{t(lang, {
                zh: "出 14:14；賽 30:15；可 4:39。當神說「靜了吧」，風浪聽從。",
                en: "Ex 14:14; Isa 30:15; Mk 4:39. When God says \"peace,\" the storm listens.",
              })}</p>
            </div>
            <div className="read-aside-card">
              <div className="ref">{t(lang, { zh: "歷史背景", en: "Context" })}</div>
              <p>{t(lang, {
                zh: "傳統認為此詩寫於希西家王時期亞述軍兵臨城下之際——一首在恐懼中唱出的安息之歌。",
                en: "Traditionally placed in Hezekiah's day, with Assyrian armies at the gate—a song of rest sung in the throat of fear.",
              })}</p>
            </div>
            <button className="btn" style={{width:"100%", marginTop:24, justifyContent:"center"}}>
              {t(lang, { zh: "加入讀經計劃", en: "Add to reading plan" })}
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   LIBRARY
   ---------------------------------------------------------- */
function LibraryPage({ lang, navigate }) {
  const filters_zh = ["全部", "牧者話語", "靈修", "信仰問答", "生活神學", "見證"];
  const filters_en = ["All", "Pastoral", "Devotion", "Q&A", "Theology of Life", "Testimony"];
  const filters = lang === "en" ? filters_en : filters_zh;
  const [active, setActive] = _us(0);

  return (
    <div className="page library-page">
      <div className="container">
        <header className="library-hero">
          <div className="eyebrow" style={{marginBottom: 16}}>{t(lang, { zh: "文字 · 慢讀 · 牧者", en: "Words · Slow read · Pastoral" })}</div>
          <h1>
            {t(lang, {
              zh: <>慢慢讀，<br/>讓<em>一段話</em>留下來。</>,
              en: <>Read slowly,<br/>let <em>one sentence</em> stay.</>,
            })}
          </h1>
          <p>{t(lang, {
            zh: "這裡收藏的，不是答案，而是同行者寫下的句子——關於信仰、生活、軟弱與恩典。",
            en: "What lives here are not answers, but sentences from fellow travelers—on faith, life, weakness, and grace.",
          })}</p>
        </header>

        <div className="library-filters">
          {filters.map((f, i) => (
            <button key={i} className={"library-filter" + (i===active?" active":"")} onClick={()=>setActive(i)}>{f}</button>
          ))}
        </div>

        <div className="article-grid-3">
          {CONTENT.articles.map(a => (
            <ArticleCard key={a.id} article={a} lang={lang} navigate={navigate} />
          ))}
          {CONTENT.articles.slice(0,2).map(a => (
            <ArticleCard key={a.id+"-b"} article={{...a, id: a.id+"-b"}} lang={lang} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   ARTICLE (single)
   ---------------------------------------------------------- */
function ArticlePage({ lang, navigate, articleId }) {
  const article = CONTENT.articles.find(a => articleId && articleId.startsWith(a.id)) || CONTENT.articles[0];

  const body_zh = (
    <>
      <p className="lead">那天晚上你回到家，鞋子還沒脫，就坐在玄關的地板上。手機在口袋裡震，孩子在房間裡叫，有一封信還沒回。你閉上眼睛，問了一個沒有對誰問的問題：神，你在哪裡？</p>
      <p>我們時常以為，疲倦是信心軟弱的證據。如果我夠相信，就不會這麼累。如果我禱告夠多，就不會這麼空。於是疲倦本身，變成了我們的羞愧。</p>
      <p>但聖經並不這樣說話。</p>
      <p className="pull">疲倦不是信心的反義詞，疲倦是身體最誠實的禱告。</p>
      <h2>以利亞坐在羅騰樹下</h2>
      <p>列王紀上十九章，先知以利亞在剛剛打了一場大勝仗之後——那是他職業生涯的高峰，他在迦密山叫火從天降下——他逃到曠野，坐在一棵羅騰樹下，向神求死。</p>
      <p>神沒有責備他。神沒有說，你怎麼這麼沒信心？神做了一件很安靜的事：祂讓他睡覺，叫天使送來餅和水，讓他再睡一覺。然後才在微小的聲音裡與他說話。</p>
      <blockquote>有時候，最屬靈的回應，是先睡一覺。</blockquote>
      <h2>耶穌也累過</h2>
      <p>馬可福音記載，耶穌曾在船尾枕著枕頭睡著。風暴來了，門徒慌了，祂還在睡。神成為人的時候，祂也讓自己疲倦——這是道成肉身一個常被忽略的細節。</p>
      <p>所以，今晚，如果你坐在玄關的地板上太久了，請容我把這句話放在你手心：</p>
      <p style={{fontFamily:"var(--serif-display)", fontStyle:"italic", fontSize:28, color:"var(--accent)", textAlign:"center", marginTop:48}}>
        神不在你撐住的地方，<br/>祂在你終於放下的地方等你。
      </p>
    </>
  );

  const body_en = (
    <>
      <p className="lead">You came home that night and didn't even take off your shoes—just sat on the floor by the door. Your phone buzzed in your pocket, your child called from the next room, an email still unanswered. You closed your eyes and asked, to no one in particular: God, where are you?</p>
      <p>We often assume tiredness is evidence of weak faith. If I believed enough, I wouldn't be this exhausted. If I prayed enough, I wouldn't feel this hollow. And so the tiredness itself becomes a source of shame.</p>
      <p>But scripture does not speak this way.</p>
      <p className="pull">Tiredness is not the opposite of faith. Tiredness is the body's most honest prayer.</p>
      <h2>Elijah Under the Broom Tree</h2>
      <p>In 1 Kings 19, Elijah—right after the greatest victory of his career, after calling fire down on Mount Carmel—flees into the desert, sits beneath a broom tree, and asks God to let him die.</p>
      <p>God does not rebuke him. God does not say, "Where is your faith?" God does something very quiet: He lets him sleep. Sends an angel with bread and water. Lets him sleep again. And only then, in a small voice, does He speak.</p>
      <blockquote>Sometimes the most spiritual response is to sleep first.</blockquote>
      <h2>Jesus Was Tired Too</h2>
      <p>Mark records that Jesus once slept on a cushion at the back of the boat. The storm came, the disciples panicked, and He kept sleeping. When God became human, He let Himself grow tired too—an often-overlooked detail of the incarnation.</p>
      <p>So tonight, if you have been sitting on the floor by your door too long, let me place this sentence in your palm:</p>
      <p style={{fontFamily:"var(--serif-display)", fontStyle:"italic", fontSize:28, color:"var(--accent)", textAlign:"center", marginTop:48}}>
        God is not where you keep holding on.<br/>He waits where you finally let go.
      </p>
    </>
  );

  return (
    <div className="page article-page">
      <div className="container">
        <header className="article-hero">
          <div className="crumb">{bi(article, lang, "cat")}</div>
          <h1 className="serif">{bi(article, lang, "title")}</h1>
          <div className="deck">{bi(article, lang, "excerpt")}</div>
          <div className="meta">
            <span>{t(lang, CONTENT.ui.by)} · {bi(article, lang, "author")}</span>
            <span className="sep">·</span>
            <span className="tnum">{article.date}</span>
            <span className="sep">·</span>
            <span>{article.readtime} {t(lang, CONTENT.ui.minutes)}</span>
          </div>
        </header>

        <div className="article-feature-image">
          <PhotoPlaceholder kind={article.img} aspect="16/9" />
        </div>

        <article className="article-body">
          {lang === "en" ? body_en : body_zh}
        </article>

        <div style={{maxWidth:660, margin:"64px auto 0", paddingTop:32, borderTop:"1px solid var(--line)", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontSize:13, color:"var(--ink-mute)", letterSpacing:"0.04em"}}>
            {t(lang, { zh: "若這篇文章對你有幫助", en: "If this helped you" })}
          </div>
          <div style={{display:"flex", gap:8}}>
            <button className="today-action-btn" title="Save">♡</button>
            <button className="today-action-btn" title="Share">↗</button>
          </div>
        </div>

        <section style={{marginTop: 96}}>
          <div className="eyebrow" style={{marginBottom: 24}}>
            {t(lang, { zh: "繼續閱讀", en: "Continue reading" })}
          </div>
          <div className="article-grid-3">
            {CONTENT.articles.filter(a => a.id !== article.id).slice(0,3).map(a => (
              <ArticleCard key={a.id} article={a} lang={lang} navigate={navigate} />
            ))}
          </div>
        </section>
      </div>

      <Newsletter lang={lang} />
    </div>
  );
}

/* ----------------------------------------------------------
   ABOUT
   ---------------------------------------------------------- */
function AboutPage({ lang, navigate }) {
  return (
    <div className="page">
      <div className="container">
        <header className="about-hero">
          <div className="eyebrow" style={{marginBottom: 16}}>{t(lang, { zh: "我們的故事", en: "Our story" })}</div>
          <h1>{t(lang, {
            zh: <>一個給<em>所有人</em>的<br/>慢讀空間。</>,
            en: <>A slow reading space<br/>for <em>everyone</em>.</>,
          })}</h1>
          <p style={{maxWidth:600, margin:"32px auto 0", fontFamily:"var(--serif)", fontSize:21, lineHeight:1.6, color:"var(--ink-soft)"}}>
            {t(lang, {
              zh: "daoinsight 不屬於任何宗派，也不為任何門牆代言。我們只想為一件事預備空間——讓現代人，能在生活的縫隙中，重新與神相遇。",
              en: "daoinsight belongs to no denomination and speaks for no walled garden. We only want to make space for one thing—that modern souls might meet God again, in the cracks of daily life.",
            })}
          </p>
        </header>

        <div style={{margin: "64px 0"}}>
          <PhotoPlaceholder kind="window" aspect="16/8" />
        </div>

        <section className="about-section">
          <div>
            <div className="label">01</div>
          </div>
          <div>
            <h2 className="serif">{t(lang, { zh: "為什麼是「道」？", en: "Why \"dao\"?" })}</h2>
            <p>{t(lang, {
              zh: "約翰福音第一章說，太初有道，道與神同在，道就是神。在中文裡，「道」既是言語、是真理、也是路。我們相信，聖經不只是文字，而是一條可以走進去的路。",
              en: "The first chapter of John says, In the beginning was the Word, and the Word was with God, and the Word was God. In Chinese, \"dao\" means speech, truth, and a path. We believe scripture is not merely text, but a road one can walk into.",
            })}</p>
            <p>{t(lang, {
              zh: "「insight」則是看見裡面的東西。我們希望這個網站做的事，不是給你更多資訊，而是讓你在某一句話裡停下來——然後看見一些原本就在那裡，只是被忙碌遮住的事物。",
              en: "\"Insight\" is to see what is inside. We hope this site does not give you more information, but lets you pause at one sentence—and notice what was always there, only hidden behind busyness.",
            })}</p>
          </div>
        </section>

        <section className="about-section">
          <div>
            <div className="label">02</div>
          </div>
          <div>
            <h2 className="serif">{t(lang, { zh: "我們相信什麼？", en: "What we believe" })}</h2>
            <p>{t(lang, {
              zh: "我們相信，無論你是受洗多年的弟兄姊妹、還沒進過教會的慕道朋友、或是曾經受傷而離開的人——你都被一份比你大的愛溫柔地等著。",
              en: "We believe that whether you have been baptized for years, have never set foot in a church, or have been hurt and walked away—you are gently awaited by a love larger than yourself.",
            })}</p>
            <p>{t(lang, {
              zh: "我們不替你回答所有問題。我們陪你帶著問題，一段一段地讀下去。",
              en: "We will not answer every question for you. We will walk with you, with your questions, passage by passage.",
            })}</p>
          </div>
        </section>

        <section className="about-section">
          <div>
            <div className="label">03</div>
          </div>
          <div>
            <h2 className="serif">{t(lang, { zh: "在哪裡找到我們", en: "Where to find us" })}</h2>
            <p>{t(lang, {
              zh: "我們在 Instagram 上每日更新短語，在這個網站上做更深一點的閱讀。寫信給我們：hello@daoinsight.com",
              en: "We post daily on Instagram, and do longer reading here. Write to us: hello@daoinsight.com",
            })}</p>
            <div style={{marginTop: 24, display:"flex", gap:12}}>
              <a href="#" className="btn">@daoinsight on Instagram →</a>
              <a href="#" className="btn btn-ghost">{t(lang, { zh: "聯絡我們", en: "Contact" })}</a>
            </div>
          </div>
        </section>
      </div>

      <Newsletter lang={lang} />
    </div>
  );
}

Object.assign(window, { HomePage, TodayPage, ReadPage, LibraryPage, ArticlePage, AboutPage });


/* ===== next file ===== */

/* ============================================================
   daoinsight — App router & shell
   ============================================================ */

const { useState: us, useEffect: ue } = React;

function parseHash() {
  const h = window.location.hash || "#/";
  const m = h.replace(/^#\//, "").split("/");
  return { route: m[0] || "home", param: m[1] || null };
}

function App() {
  const [lang, setLang] = us(() => localStorage.getItem("daoinsight.lang") || "zh");
  const [{ route, param }, setLoc] = us(parseHash());

  ue(() => {
    const onHash = () => {
      setLoc(parseHash());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  ue(() => {
    localStorage.setItem("daoinsight.lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "zh-Hant";
  }, [lang]);

  const navigate = (r, p) => {
    window.location.hash = "#/" + r + (p ? "/" + p : "");
  };

  let page;
  switch (route) {
    case "today":   page = <TodayPage lang={lang} navigate={navigate} />; break;
    case "read":    page = <ReadPage lang={lang} navigate={navigate} />; break;
    case "library": page = <LibraryPage lang={lang} navigate={navigate} />; break;
    case "article": page = <ArticlePage lang={lang} navigate={navigate} articleId={param} />; break;
    case "about":   page = <AboutPage lang={lang} navigate={navigate} />; break;
    case "home":
    default:        page = <HomePage lang={lang} navigate={navigate} />; break;
  }

  // Map article→library for active nav state
  const navRoute = route === "article" ? "library" : route;

  return (
    <div className={lang === "en" ? "lang-en" : "lang-zh"}>
      <Nav route={navRoute} lang={lang} setLang={setLang} navigate={navigate} />
      <main key={route + (param || "")}>{page}</main>
      <Footer lang={lang} navigate={navigate} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
