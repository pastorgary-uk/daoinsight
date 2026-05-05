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
