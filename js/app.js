/* ===================================================================
   DogWoodAI — App: components, i18n, interactions
   =================================================================== */
(function () {
  "use strict";

  /* ---------- SVG icon set ---------- */
  var IC = {
    logo:'<svg class="logo-mark" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" fill="url(#lg)"/><path d="M20 9c2.5 3 6 4.2 6 8a6 6 0 0 1-12 0c0-3.8 3.5-5 6-8Z" fill="#fff"/><circle cx="20" cy="27.5" r="2.4" fill="#38bdf8"/><defs><linearGradient id="lg" x1="0" y1="0" x2="40" y2="40"><stop stop-color="#0a1f44"/><stop offset="1" stop-color="#1f6feb"/></linearGradient></defs></svg>',
    chev:'<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m6 9 6 6 6-6"/></svg>',
    arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowL:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
    target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
    bulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2h6c0-.8.4-1.5 1-2A7 7 0 0 0 12 2Z"/></svg>',
    chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>',
    chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>',
    cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    flask:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2h6M10 2v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V2"/><path d="M7 15h10"/></svg>',
    atom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1.6" fill="currentColor"/><ellipse cx="12" cy="12" rx="10" ry="4.2"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)"/></svg>',
    gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 14a6 6 0 1 1 6-6"/><path d="M12 14l4-4"/><path d="M4 20a9 9 0 0 1 16 0"/></svg>',
    layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
    sliders:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg>',
    sim:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M12 18v3"/><circle cx="7" cy="6.5" r=".6" fill="currentColor"/></svg>',
    shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="9" cy="13" r="1.3" fill="currentColor"/><circle cx="15" cy="13" r="1.3" fill="currentColor"/></svg>',
    refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-2.6-6.3M21 3v6h-6"/></svg>',
    handshake:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2 4-4M3 11l4-4 5 5 3-3 6 6-4 4-5-5"/></svg>',
    doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
    award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/></svg>',
    map:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2H7a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.1Z"/></svg>',
    mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>',
    play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    factory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20V9l-6 4V9l-6 4V4H4v16Z"/><path d="M6 16h2M11 16h2M16 16h2"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.3 8.5h3.3V21H3.3V8.5Zm5.4 0h3.16v1.7h.05c.44-.83 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5V21h-3.3v-5.8c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V21H8.7V8.5Z"/></svg>',
    crunch:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm6.5 7.6a3 3 0 1 0 0 4.8l1.2 1.2a4.7 4.7 0 1 1 0-7.2l-1.2 1.2Zm6 0a3 3 0 1 0 0 4.8l1.2 1.2a4.7 4.7 0 1 1 0-7.2l-1.2 1.2Z"/></svg>'
  };

  /* ---------- nav model ---------- */
  var nav = {
    about:[
      ["about#company","nav.company","",IC.factory],
      ["about#industries","nav.industries","",IC.layers],
      ["about#customers","nav.customers","",IC.handshake],
      ["news","nav.news","",IC.doc]
    ],
    approach:[
      ["approach#tailor-made","nav.ap1","",IC.target],
      ["approach#real-data","nav.ap2","",IC.gauge],
      ["approach#model-based","nav.ap3","",IC.flask],
      ["approach#physics-based","nav.ap4","",IC.atom]
    ],
    solution:[
      ["solution#dogwoodpro","nav.sol0","",IC.layers],
      ["solution#predipro","nav.sol1","",IC.gauge],
      ["solution#analypro","nav.sol2","",IC.chart],
      ["solution#optpro","nav.sol3","",IC.sliders],
      ["solution#simpro","nav.sol4","",IC.sim],
      ["solution#safepro","nav.sol5","",IC.shield],
      ["solution#plantagentpro","nav.sol6","",IC.bot],
      ["solution#mlops","nav.sol7","",IC.refresh],
      ["solution#consulting","nav.sol8","",IC.handshake]
    ],
    rndd:[
      ["rndd#rdd-1","nav.rdd.1","nav.rdd.1.d",IC.doc],
      ["rndd#rdd-2","nav.rdd.2","nav.rdd.2.d",IC.doc],
      ["rndd#rdd-3","nav.rdd.3","nav.rdd.3.d",IC.doc],
      ["rndd#rdd-4","nav.rdd.4","nav.rdd.4.d",IC.doc],
      ["rndd#rdd-5","nav.rdd.5","nav.rdd.5.d",IC.doc],
      ["rndd#rdd-6","nav.rdd.6","nav.rdd.6.d",IC.doc],
      ["rndd#rdd-7","nav.rdd.7","nav.rdd.7.d",IC.doc],
      ["rndd#rdd-8","nav.rdd.8","nav.rdd.8.d",IC.doc],
      ["rndd#rdd-9","nav.rdd.9","nav.rdd.9.d",IC.doc],
      ["rndd#rdd-10","nav.rdd.10","nav.rdd.10.d",IC.doc],
      ["rndd#rdd-11","nav.rdd.11","nav.rdd.11.d",IC.doc],
      ["rndd#rdd-12","nav.rdd.12","nav.rdd.12.d",IC.doc],
      ["rndd#rdd-13","nav.rdd.13","nav.rdd.13.d",IC.doc],
      ["rndd#rdd-14","nav.rdd.14","nav.rdd.14.d",IC.doc],
      ["rndd#rdd-15","nav.rdd.15","nav.rdd.15.d",IC.doc],
      ["rndd#rdd-16","nav.rdd.16","nav.rdd.16.d",IC.doc],
      ["rndd#rdd-17","nav.rdd.17","nav.rdd.17.d",IC.doc],
      ["rndd#rdd-18","nav.rdd.18","nav.rdd.18.d",IC.doc],
      ["rndd#rdd-19","nav.rdd.19","nav.rdd.19.d",IC.doc]
    ],
    projects:[
      ["projects#project-1","nav.project.1","",IC.factory],
      ["projects#project-2","nav.project.2","",IC.sim],
      ["projects#project-3","nav.project.3","",IC.play],
      ["projects#project-4","nav.project.4","",IC.atom],
      ["projects#project-5","nav.project.5","",IC.flask],
      ["projects#project-6","nav.project.6","",IC.layers],
      ["projects#project-7","nav.project.7","",IC.cpu],
      ["projects#project-8","nav.project.8","",IC.target],
      ["projects#project-9","nav.project.9","",IC.chart]
    ],
    ip:[
      ["ip-papers#patent","nav.patents","",IC.award],
      ["ip-papers#publications","nav.publications","",IC.doc]
    ]
  };

  function normalizeNavList(list){
    return (list || []).map(function(i){
      if(Array.isArray(i)) return i;
      return [i.href || "#", i.label || "", i.desc || ""];
    });
  }
  function normalizeNav(data){
    ["about","approach","solution","rndd","projects","ip"].forEach(function(key){
      if(data && data[key]) nav[key] = normalizeNavList(data[key]);
    });
  }
  function mergeI18n(bundle){
    if(!bundle) return;
    ["en","ko"].forEach(function(langKey){
      if(bundle[langKey]){
        window.I18N[langKey] = Object.assign(window.I18N[langKey] || {}, bundle[langKey]);
      }
    });
  }
  function fetchJson(url){
    return fetch(url, {cache:"no-store"}).then(function(res){
      if(!res.ok) throw new Error("Failed to load " + url);
      return res.json();
    });
  }
  function navFromPageData(data){
    if(data.approach && data.approach.sections){
      nav.approach = data.approach.sections.map(function(s){
        return ["approach#" + s.id, s.h, s.navDesc || ""];
      });
    }
    if(data.solution && data.solution.modules){
      nav.solution = [["solution#dogwoodpro", "nav.sol0", "", IC.layers]].concat(data.solution.modules.map(function(m){
        return ["solution#" + m.id, m.h, ""];
      }));
    }
    if(data.rndd && data.rndd.sizes){
      nav.rndd = Object.keys(data.rndd.sizes).sort().map(function(_, idx){
        var n = idx + 1;
        return ["rndd#rdd-" + n, "nav.rdd." + n, "nav.rdd." + n + ".d", IC.doc];
      });
    }
    if(data.projects && data.projects.projects){
      nav.projects = data.projects.projects.map(function(p){
        return ["projects#project-" + p.n, p.navLabel || ("nav.project." + p.n), p.navDesc || ""];
      });
    }
  }
  function normalizeLang(value){
    return value === "en" ? "en" : "ko";
  }
  function langSegment(value){
    return normalizeLang(value) === "en" ? "en" : "kr";
  }
  function hashLangParts(hash){
    var raw = String(hash || "").replace(/^#/, "");
    if(raw.charAt(0) !== "/") return null;
    var parts = raw.split("/").filter(Boolean);
    var seg = parts[0] ? parts[0].toLowerCase() : "";
    if(seg !== "en" && seg !== "kr" && seg !== "ko") return null;
    return {lang:seg === "en" ? "en" : "ko", anchor:parts.slice(1).join("/")};
  }
  function currentAnchorId(){
    if(!location.hash) return "";
    var hashRoute = usesHashRoutes() ? hashLangParts(location.hash) : null;
    if(hashRoute) return hashRoute.anchor || "";
    return location.hash.slice(1);
  }
  function scrollToCurrentAnchor(){
    var anchorId = currentAnchorId();
    if(!anchorId) return;
    var tgt = document.getElementById(anchorId);
    if(tgt) tgt.scrollIntoView({behavior:"auto", block:"start"});
  }
  function routeMode(){
    var queryMode = new URLSearchParams(location.search).get("dw-route");
    var storedMode = "";
    try { storedMode = localStorage.getItem("dw_route_mode") || ""; } catch(e) {}
    var configuredMode = String(window.DW_ROUTE_MODE || queryMode || storedMode || "auto").toLowerCase();
    if(configuredMode === "hash" || configuredMode === "path") return configuredMode;
    if(hashLangParts(location.hash)) return "hash";
    return /\.github\.io$/i.test(location.hostname) ? "hash" : "path";
  }
  function usesHashRoutes(){
    return routeMode() === "hash";
  }
  function scriptBase(){
    var script = document.currentScript || document.querySelector('script[src$="js/app.js"]');
    if(!script) return "/";
    var path = new URL(script.getAttribute("src"), location.href).pathname;
    var parts = path.split("/").filter(Boolean);
    var jsIndex = parts.lastIndexOf("js");
    if(jsIndex >= 0) parts = parts.slice(0, jsIndex);
    if(parts.length && /^(kr|ko|en)$/i.test(parts[parts.length - 1])) parts.pop();
    return "/" + (parts.length ? parts.join("/") + "/" : "");
  }
  var basePath = scriptBase();
  function stripBase(path){
    if(basePath !== "/" && path.indexOf(basePath) === 0) return "/" + path.slice(basePath.length);
    return path;
  }
  function pageFromPath(path){
    var parts = stripBase(path || location.pathname).split("/").filter(Boolean);
    var seg = parts[0] ? parts[0].toLowerCase() : "";
    if(seg === "en" || seg === "kr" || seg === "ko") parts.shift();
    var page = parts.join("/").replace(/\.html$/i, "");
    return page === "index" ? "" : page;
  }
  function routeParts(path){
    var hashRoute = usesHashRoutes() ? hashLangParts(location.hash) : null;
    var parts = stripBase(path || location.pathname).split("/").filter(Boolean);
    var seg = parts[0] ? parts[0].toLowerCase() : "";
    var routeLang = null;
    if(seg === "en") routeLang = "en";
    else if(seg === "kr" || seg === "ko") routeLang = "ko";
    if(routeLang) parts.shift();
    var page = pageFromPath(path || location.pathname);
    return {lang:(hashRoute && hashRoute.lang) || routeLang, page:page};
  }
  function pageHref(page, targetLang){
    var clean = String(page || "").replace(/^\.\//, "").replace(/^\/+/, "");
    var hash = "";
    var query = "";
    var hashAt = clean.indexOf("#");
    if(hashAt >= 0){ hash = clean.slice(hashAt); clean = clean.slice(0, hashAt); }
    var queryAt = clean.indexOf("?");
    if(queryAt >= 0){ query = clean.slice(queryAt); clean = clean.slice(0, queryAt); }
    clean = clean.replace(/\.html$/i, "");
    if(clean === "index") clean = "";
    var langPath = langSegment(targetLang || lang);
    if(usesHashRoutes()){
      var pagePath = clean;
      var hashRoute = hashLangParts(hash);
      var anchor = hashRoute ? hashRoute.anchor : (hash ? hash.slice(1) : "");
      return basePath + pagePath + query + "#/" + langPath + "/" + (anchor ? anchor : "");
    }
    return basePath + langPath + "/" + clean + query + hash;
  }
  function assetHref(path){
    var clean = String(path || "").replace(/^\.\//, "").replace(/^\/+/, "");
    return basePath + clean;
  }
  function shouldLocalizeHref(href){
    if(!href || href.charAt(0) === "#") return false;
    if(/^(https?:|mailto:|tel:|javascript:)/i.test(href)) return false;
    if(/^(assets|data|css|js|favicon)\//i.test(href.replace(/^\.\//, ""))) return false;
    return true;
  }
  function localizeHref(href, targetLang){
    if(!shouldLocalizeHref(href)) return href;
    var raw = String(href).replace(/^\.\//, "");
    if(raw.charAt(0) === "/") raw = stripBase(raw).replace(/^\/+/, "");
    raw = raw.replace(/^(kr|ko|en)(\/|$)/i, "");
    return pageHref(raw, targetLang);
  }
  function localizeStaticLinks(root){
    (root || document).querySelectorAll("a[href]").forEach(function(a){
      var href = a.getAttribute("href");
      if(shouldLocalizeHref(href)) a.setAttribute("href", localizeHref(href));
    });
  }
  function loadNavigation(done){
    Promise.all([
      fetchJson(assetHref("data/approach.json")),
      fetchJson(assetHref("data/solution.json")),
      fetchJson(assetHref("data/rndd.json")),
      fetchJson(assetHref("data/projects.json"))
    ])
      .then(function(items){
        var data = {approach:items[0], solution:items[1], rndd:items[2], projects:items[3]};
        items.forEach(function(item){ mergeI18n(item.i18n); });
        navFromPageData(data);
        done();
      })
      .catch(function(){ done(); });
  }

  function dropItems(list, reserveSub){
    return list.map(function(i){
      var sub = "";
      if(i[2]){
        sub = '<span class="drop-sub" data-i18n-html="'+i[2]+'"></span>';
      }else if(reserveSub){
        sub = '<span class="drop-sub" aria-hidden="true"></span>';
      }
      return '<a class="drop-link" href="'+localizeHref(i[0])+'"><b data-i18n-html="'+i[1]+'"></b>'+sub+'</a>';
    }).join("");
  }

  /* ---------- header ---------- */
  function buildHeader(){
    return '<header class="site-header"><div class="container"><nav class="nav">'+
      '<div class="nav-left">'+
        '<a class="brand" href="'+pageHref("")+'"><img class="brand-logo" src="'+assetHref("assets/main/visual-logo.png")+'" alt="DogWoodAI"></a>'+
        '<div class="lang-toggle"><button data-lang="ko">KOR</button><button data-lang="en">ENG</button></div>'+
      '</div>'+
      '<ul class="nav-menu">'+
        navItem("nav.about", nav.about, false, "about")+
        navItem("nav.approach", nav.approach, false, "approach")+
        navItem("nav.solution", nav.solution, true, "solution")+
        navItem("nav.rndd", nav.rndd, true, "rndd")+
        navItem("nav.projects", nav.projects, true, "projects")+
        navItem("nav.ip", nav.ip, false, "ip-papers")+
      '</ul>'+
      '<div class="nav-right">'+
        '<a class="btn nav-cta" href="'+pageHref("contact")+'" data-i18n="nav.contact"></a>'+
        '<button class="hamburger" aria-label="menu"><span></span></button>'+
      '</div>'+
    '</nav></div></header>'+ buildMobile();
  }
  function buildQuick(){
    return '<div class="quick">'+
      '<a class="q-contact" href="'+pageHref("contact")+'">'+
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>'+
        '<span data-i18n="quick.contact"></span></a>'+
      '<button class="q-top" type="button">'+
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'+
        '<span data-i18n="quick.top"></span></button>'+
    '</div>';
  }
  function navItem(label, list, wide, href){
    var cls = "nav-item nav-" + href.replace(/[^a-z0-9_-]/gi, "-");
    return '<li class="'+cls+'"><a class="nav-link" href="'+pageHref(href)+'" data-i18n="'+label+'"></a>'+
      '<div class="dropdown'+(wide?' wide':'')+'"><div class="dropdown-grid">'+dropItems(list, href==="rndd")+'</div></div></li>';
  }
  function buildMobile(){
    function grp(label, list){
      return '<div class="m-group"><div class="m-head"><span data-i18n="'+label+'"></span>'+IC.chev+'</div>'+
        '<div class="m-sub">'+list.map(function(i){return '<a href="'+localizeHref(i[0])+'" data-i18n-html="'+i[1]+'"></a>';}).join("")+'</div></div>';
    }
    return '<div class="mobile-nav">'+
      grp("nav.about",nav.about)+grp("nav.approach",nav.approach)+grp("nav.solution",nav.solution)+
      grp("nav.rndd",nav.rndd)+grp("nav.projects",nav.projects)+
      grp("nav.ip",nav.ip)+
      '<div class="m-cta"><a class="btn btn-primary" href="'+pageHref("contact")+'" data-i18n="nav.contact"></a></div>'+
    '</div>';
  }

  /* ---------- footer ---------- */
  function buildFooter(){
    return '<footer class="site-footer"><div class="container">'+
      '<div class="footer-simple">'+
        '<div class="footer-info">'+
          '<p class="footer-contact"><b data-i18n="contact.email.l"></b><span>dogwoodai@dogwoodai.com</span></p>'+
          '<p class="footer-contact"><b data-i18n="contact.addr.l"></b><span data-i18n="contact.addr.v"></span></p>'+
          '<p class="footer-copy" data-i18n="footer.rights"></p>'+
        '</div>'+
        '<div class="social">'+
          '<a href="https://kr.linkedin.com/company/dogwoodai" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="'+assetHref("assets/main/LinkedIn_icon.png")+'" alt="LinkedIn"></a>'+
          '<a href="https://www.crunchbase.com/organization/dogwoodai" target="_blank" rel="noopener" aria-label="Crunchbase"><img src="'+assetHref("assets/main/cb.png")+'" alt="Crunchbase"></a>'+
        '</div>'+
      '</div>'+
    '</div></footer>';
  }

  /* ---------- CES popup ---------- */
  function buildPopup(){
    return '<div class="ces-popup" id="cesPopup">'+
      '<button class="ces-close" id="cesClose" aria-label="close">&times;</button>'+
      '<div class="ces-banner"><img src="'+assetHref("assets/main/popup01.jpg")+'" alt="CES 2026"></div>'+
      '<div class="ces-body"><p data-i18n="ces.body"></p>'+
        '<a class="btn btn-primary" href="https://www.linkedin.com/company/dogwoodai" target="_blank" rel="noopener" data-i18n="ces.btn"></a>'+
      '</div></div>';
  }

  /* ---------- i18n ---------- */
  var route = routeParts(location.pathname);
  var lang = normalizeLang(route.lang || "ko");
  function t(key){
    var d = window.I18N[lang] || {};
    if(key in d) return d[key];
    if(key in window.I18N.en) return window.I18N.en[key];
    return null; // key not defined anywhere
  }
  function applyLang(){
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n"));
      if(v !== null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n-html"));
      if(v !== null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function(el){
      var v = t(el.getAttribute("data-i18n-ph"));
      if(v !== null) el.setAttribute("placeholder", v);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function(b){
      b.classList.toggle("active", b.getAttribute("data-lang")===lang);
    });
    localizeStaticLinks();
    document.dispatchEvent(new CustomEvent("langchange",{detail:{lang:lang}}));
  }
  window.addEventListener("hashchange", function(){
    if(!usesHashRoutes()) return;
    var hashRoute = hashLangParts(location.hash);
    if(hashRoute && hashRoute.lang !== lang){
      lang = hashRoute.lang;
      applyLang();
    }
    setTimeout(scrollToCurrentAnchor, 0);
  });
  function currentLocalizedUrl(l){
    var current = routeParts(location.pathname);
    var page = current.page || "";
    var hashRoute = usesHashRoutes() ? hashLangParts(location.hash) : null;
    var anchor = hashRoute && hashRoute.anchor ? "#" + hashRoute.anchor : (!usesHashRoutes() ? location.hash : "");
    return pageHref(page + location.search + anchor, l);
  }
  function setLang(l){
    l = normalizeLang(l);
    if(l === lang && routeParts(location.pathname).lang) return;
    var nextUrl = currentLocalizedUrl(l);
    if(usesHashRoutes()){
      var target = new URL(nextUrl, location.href);
      if(target.pathname === location.pathname && target.search === location.search){
        history.pushState(null, "", target.href);
        lang = l;
        applyLang();
        return;
      }
    }
    location.href = nextUrl;
  }

  var _revealIO = null;
  function observeReveals(){
    if(!_revealIO){
      _revealIO = new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); _revealIO.unobserve(en.target); } });
      },{threshold:.12});
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function(el){ _revealIO.observe(el); });
  }
  window.DW = {
    t:t,
    getLang:function(){return lang;},
    setLang:setLang,
    applyLang:applyLang,
    observeReveals:observeReveals,
    localizeHref:localizeHref,
    localizeLinks:localizeStaticLinks,
    assetHref:assetHref,
    pageHref:pageHref
  };

  /* ---------- interactions ---------- */
  function wire(){
    // language toggle
    document.querySelectorAll(".lang-toggle button").forEach(function(b){
      b.addEventListener("click", function(){ setLang(b.getAttribute("data-lang")); });
    });
    // index panels are dark, so keep the header transparent with white text there.
    var header = document.querySelector(".site-header");
    var heroEl = document.querySelector(".hero");
    var isIndex = document.body.getAttribute("data-page")==="index.html";
    function updateHero(){
      if(!header) return;
      if(isIndex){
        header.classList.toggle("over-hero", !document.body.classList.contains("menu-open"));
        return;
      }
      if(heroEl){
        var r = heroEl.getBoundingClientRect();
        header.classList.toggle("over-hero", r.bottom > 80);
      } else {
        header.classList.remove("over-hero");
      }
    }
    window.DW._updateHero = updateHero;
    window.addEventListener("scroll", updateHero, {passive:true}); updateHero();

    // mobile menu
    var burger = document.querySelector(".hamburger");
    var mnav = document.querySelector(".mobile-nav");
    if(burger){
      burger.addEventListener("click", function(){
        var open = document.body.classList.toggle("menu-open");
        mnav.classList.toggle("open");
        if(open){ header.classList.remove("over-hero"); } else { updateHero(); }
      });
      mnav.querySelectorAll(".m-head").forEach(function(h){
        var link = h.querySelector("a");
        if(link) return; // direct links don't toggle
        h.addEventListener("click", function(){ h.parentElement.classList.toggle("open"); });
      });
      mnav.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){ document.body.classList.remove("menu-open"); mnav.classList.remove("open"); });
      });
    }

    // active nav highlight
    var page = document.body.getAttribute("data-page");
    if(page){
      document.querySelectorAll('.nav-menu a[href="'+page+'"], .nav-menu .nav-link').forEach(function(){});
    }

    // CES popup
    var pop = document.getElementById("cesPopup");
    if(pop && !sessionStorage.getItem("ces_closed")){
      setTimeout(function(){ pop.classList.add("show"); }, 1400);
    }
    var cesClose = document.getElementById("cesClose");
    if(cesClose) cesClose.addEventListener("click", function(){
      pop.classList.remove("show"); sessionStorage.setItem("ces_closed","1");
    });

    // carousel
    document.querySelectorAll(".carousel").forEach(function(c){
      var track = c.querySelector(".carousel-track");
      var prev = c.querySelector('[data-dir="prev"]');
      var next = c.querySelector('[data-dir="next"]');
      function step(){ var card = track.querySelector(".p-card"); return card ? card.offsetWidth+24 : 380; }
      if(next) next.addEventListener("click", function(){ track.scrollBy({left:step(),behavior:"smooth"}); });
      if(prev) prev.addEventListener("click", function(){ track.scrollBy({left:-step(),behavior:"smooth"}); });
    });

    // contact form
    var form = document.getElementById("contactForm");
    if(form){
      var ta = form.querySelector("textarea");
      var cc = form.querySelector(".char-count");
      if(ta && cc){
        function upd(){ cc.textContent = (ta.value.length)+" / 500"; }
        ta.addEventListener("input", function(){
          if(ta.value.length>500) ta.value = ta.value.slice(0,500);
          upd();
        });
        upd();
      }
      form.addEventListener("submit", function(e){
        e.preventDefault();
        showToast(t("contact.toast"));
        form.reset();
        if(ta && cc) cc.textContent = "0 / 500";
      });
    }

    // hash anchor: keep the first landing accurate while images/fonts finish settling.
    function scrollToHashAnchor(){
      scrollToCurrentAnchor();
    }
    if(currentAnchorId()){
      var hashScrollUntil = Date.now() + 6000;
      function scrollToHashAnchorWhileSettling(){
        if(Date.now() <= hashScrollUntil) scrollToHashAnchor();
      }
      [0, 120, 360, 900, 1600, 2600, 4000].forEach(function(delay){
        setTimeout(scrollToHashAnchor, delay);
      });
      window.addEventListener("load", scrollToHashAnchor, {once:true});
      document.querySelectorAll("img").forEach(function(img){
        if(img.complete) return;
        img.addEventListener("load", scrollToHashAnchorWhileSettling, {once:true});
        img.addEventListener("error", scrollToHashAnchorWhileSettling, {once:true});
      });
      if(document.fonts && document.fonts.ready){
        document.fonts.ready.then(scrollToHashAnchor);
      }
    }

    // floating TOP button
    var topBtn = document.querySelector(".q-top");
    if(topBtn) topBtn.addEventListener("click", function(){
      var w = document.getElementById("fpWrap");
      if(w && document.body.classList.contains("fp")) w.scrollTo({top:0, behavior:"smooth"});
      else window.scrollTo({top:0, behavior:"smooth"});
    });

    // reveal on scroll
    window.DW.observeReveals();

    // animated counters
    var counters = document.querySelectorAll("[data-count]");
    if(counters.length){
      var cio = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(!en.isIntersecting) return;
          var el = en.target, target = parseFloat(el.getAttribute("data-count")), suf = el.getAttribute("data-suffix")||"";
          var start = 0, dur = 1400, t0 = null;
          function tick(ts){ if(!t0) t0=ts; var p=Math.min((ts-t0)/dur,1);
            el.textContent = Math.floor(start+(target-start)*(1-Math.pow(1-p,3)))+suf;
            if(p<1) requestAnimationFrame(tick); else el.textContent = target+suf; }
          requestAnimationFrame(tick); cio.unobserve(el);
        });
      },{threshold:.5});
      counters.forEach(function(el){ cio.observe(el); });
    }
  }

  function showToast(msg){
    var t = document.createElement("div");
    t.className = "toast"; t.innerHTML = IC.check+"<span>"+msg+"</span>";
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add("show"); });
    setTimeout(function(){ t.classList.remove("show"); setTimeout(function(){ t.remove(); },400); }, 3200);
  }

  /* ---------- boot ---------- */
  function inject(id, html){ var el = document.getElementById(id); if(el) el.outerHTML = html; }
  function setBanner(){
    var p = (routeParts(location.pathname).page || "").split("/").pop().toLowerCase();
    var b = "0"; // About + default -> s_visual00
    if(p.indexOf("approach")===0 || p==="solution.html" || p==="solution" || p==="rndd.html" || p==="rndd") b = "2"; // purple waves
    else if(p==="projects.html" || p==="projects") b = "3";                          // teal mesh
    else if(p.indexOf("ip-papers")===0) b = "1";                                     // blue rays
    document.body.setAttribute("data-banner", b);
  }
  document.addEventListener("DOMContentLoaded", function(){
    setBanner();
    loadNavigation(function(){
      inject("site-header", buildHeader());
      inject("site-footer", buildFooter());
      document.body.insertAdjacentHTML("beforeend", buildQuick());
      if(document.body.getAttribute("data-popup")!=="off"){
        document.body.insertAdjacentHTML("beforeend", buildPopup());
      }
      applyLang();
      wire();
      window.DW.IC = IC; // expose icons for pages
    });
  });
})();
