(function(){
  "use strict";

  function mergeI18n(bundle){
    if(!bundle) return;
    window.I18N = window.I18N || {en:{}, ko:{}};
    ["en","ko"].forEach(function(lang){
      if(bundle[lang]){
        window.I18N[lang] = Object.assign(window.I18N[lang] || {}, bundle[lang]);
      }
    });
  }

  function applyPageLang(){
    if(window.DW && window.DW.applyLang) window.DW.applyLang();
    if(window.DW && window.DW.observeReveals) window.DW.observeReveals();
  }
  function scriptBase(){
    var script = document.currentScript || document.querySelector('script[src$="js/page-data.js"]');
    if(!script) return "/";
    var path = new URL(script.getAttribute("src"), location.href).pathname;
    var parts = path.split("/").filter(Boolean);
    var jsIndex = parts.lastIndexOf("js");
    if(jsIndex >= 0) parts = parts.slice(0, jsIndex);
    if(parts.length && /^(kr|ko|en)$/i.test(parts[parts.length - 1])) parts.pop();
    return "/" + (parts.length ? parts.join("/") + "/" : "");
  }
  var basePath = scriptBase();
  function assetHref(path){
    if(window.DW && window.DW.assetHref) return window.DW.assetHref(path);
    return basePath + String(path || "").replace(/^\.\//, "").replace(/^\/+/, "");
  }

  function load(url, render){
    fetch(assetHref(url), {cache:"no-store"})
      .then(function(res){
        if(!res.ok) throw new Error("Failed to load page data: " + url);
        return res.json();
      })
      .then(function(data){
        mergeI18n(data.i18n);
        render(data);
        applyPageLang();
      })
      .catch(function(err){
        console.error(err);
      });
  }

  window.PageData = {load:load, mergeI18n:mergeI18n, assetHref:assetHref};
})();
