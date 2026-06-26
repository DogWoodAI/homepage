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

  function load(url, render){
    fetch(url, {cache:"no-store"})
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

  window.PageData = {load:load, mergeI18n:mergeI18n};
})();
