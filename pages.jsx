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
                  zh: "daoinsight 是 Pastor Gary 為你預備的慢讀空間。每天一段經文、一段默想，陪你在忙碌的城市生活裡，重新打開聖經。",
                  en: "daoinsight is a slow reading space, started by Pastor Gary. One verse, one reflection each day — opening scripture again, in the middle of busy city life.",
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
          <div className="eyebrow" style={{marginBottom: 16}}>{t(lang, { zh: "牧者的話", en: "From the pastor" })}</div>
          <h1>{t(lang, {
            zh: <>嗨，我是<br/><em>Pastor Gary</em>。</>,
            en: <>Hi, I'm<br/><em>Pastor Gary</em>.</>,
          })}</h1>
          <p style={{maxWidth:600, margin:"32px auto 0", fontFamily:"var(--serif)", fontSize:21, lineHeight:1.6, color:"var(--ink-soft)"}}>
            {t(lang, {
              zh: "daoinsight 是我私人開設的一個慢讀空間。不屬於任何宗派，不為任何門牆代言——只想陪你，在忙碌的日子裡，重新打開聖經。",
              en: "daoinsight is a slow reading space I started on my own. It belongs to no denomination and speaks for no walled garden—I simply want to walk with you, opening scripture again, in the middle of busy days.",
            })}
          </p>
        </header>

        <div style={{margin: "64px 0"}}>
          <PhotoPlaceholder kind="window" aspect="16/8" />
        </div>

        <section className="about-section">
          <div><div className="label">01</div></div>
          <div>
            <h2 className="serif">{t(lang, { zh: "為什麼是「道」？", en: "Why dao?" })}</h2>
            <p>{t(lang, {
              zh: "約翰福音第一章說，太初有道，道與神同在，道就是神。在中文裡，「道」既是言語、是真理、也是路。我相信，聖經不只是文字，而是一條可以走進去的路。",
              en: "The first chapter of John says, In the beginning was the Word, and the Word was with God, and the Word was God. In Chinese, dao means speech, truth, and a path. I believe scripture is not merely text, but a road one can walk into.",
            })}</p>
            <p>{t(lang, {
              zh: "「insight」是看見裡面的東西。我希望這個網站做的事，不是給你更多資訊——而是讓你在某一句話裡停下來，然後看見一些原本就在那裡，只是被忙碌遮住的事物。",
              en: "Insight is to see what is inside. I hope this site does not give you more information—but lets you pause at one sentence, and notice what was always there, only hidden behind busyness.",
            })}</p>
          </div>
        </section>

        <section className="about-section">
          <div><div className="label">02</div></div>
          <div>
            <h2 className="serif">{t(lang, { zh: "這個網站給誰？", en: "Who is this for?" })}</h2>
            <p>{t(lang, {
              zh: "給對聖經和神學有興趣的所有人——無論你是受洗多年的弟兄姊妹、還沒進過教會的慕道朋友、或是曾經受過傷而離開的人。我相信，誠實的問題，比急著給的答案，更接近神。",
              en: "For anyone curious about scripture and theology—whether you have been baptized for years, have never set foot in a church, or have been hurt and walked away. I believe an honest question is closer to God than a hurried answer.",
            })}</p>
            <p>{t(lang, {
              zh: "我不替你回答所有問題。我陪你帶著問題，一段一段地讀下去。",
              en: "I will not answer every question for you. I will walk with you, with your questions, passage by passage.",
            })}</p>
          </div>
        </section>

        <section className="about-section">
          <div><div className="label">03</div></div>
          <div>
            <h2 className="serif">{t(lang, { zh: "在哪裡找到我", en: "Where to find me" })}</h2>
            <p>{t(lang, {
              zh: "我在 Instagram 上每天更新短語與默想。這個網站是更深一點的閱讀空間。歡迎寫信給我聊聊：hello@daoinsight.com",
              en: "I post short reflections daily on Instagram. This site is for slightly deeper reading. Drop me a line anytime: hello@daoinsight.com",
            })}</p>
            <div style={{marginTop: 24, display:"flex", gap:12, flexWrap:"wrap"}}>
              <a href="https://www.instagram.com/dao.insight.pastorgary" target="_blank" rel="noopener" className="btn">@dao.insight.pastorgary →</a>
              <a href="mailto:hello@daoinsight.com" className="btn btn-ghost">{t(lang, { zh: "寫信給我", en: "Email me" })}</a>
            </div>
          </div>
        </section>
      </div>

      <Newsletter lang={lang} />
    </div>
  );
}

Object.assign(window, { HomePage, TodayPage, ReadPage, LibraryPage, ArticlePage, AboutPage });
