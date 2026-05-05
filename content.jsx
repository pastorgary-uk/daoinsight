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
