(function(){
  function scriptBase(){
    var script = document.currentScript || document.querySelector('script[src$="js/news.js"]');
    if(!script) return "/";
    var path = new URL(script.getAttribute("src"), location.href).pathname;
    var parts = path.split("/").filter(Boolean);
    var jsIndex = parts.lastIndexOf("js");
    if(jsIndex >= 0) parts = parts.slice(0, jsIndex);
    if(parts.length && /^(kr|ko|en)$/i.test(parts[parts.length - 1])) parts.pop();
    return "/" + (parts.length ? parts.join("/") + "/" : "");
  }
  var BASE = scriptBase();
  function asset(path){
    if(window.DW && window.DW.assetHref) return window.DW.assetHref(path);
    return BASE + String(path || "").replace(/^\.\//, "").replace(/^\/+/, "");
  }
  function page(path){
    if(window.DW && window.DW.localizeHref) return window.DW.localizeHref(path);
    return path;
  }
  var DATA_URL = asset("data/news.json");
  var FALLBACK_IMAGE = asset("assets/news/no-image.jpg");

  function lang(){
    return window.DW && window.DW.getLang ? window.DW.getLang() : "ko";
  }

  function t(key, fallback){
    if(window.DW && window.DW.t){
      var value = window.DW.t(key);
      if(value !== null) return value;
    }
    return fallback || key;
  }

  function localize(value){
    if(!value) return "";
    if(typeof value === "string") return value;
    return value[lang()] || value.en || value.ko || "";
  }

  function textFor(item){
    var bundle = item.i18n || {};
    return bundle[lang()] || bundle.en || bundle.ko || {};
  }

  function escapeHtml(value){
    return String(value == null ? "" : value).replace(/[&<>"']/g, function(ch){
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch];
    });
  }

  function linkedText(value){
    var text = String(value == null ? "" : value);
    var urlPattern = /(https?:\/\/[^\s<>"']+)/g;
    var html = "";
    var lastIndex = 0;
    var match;
    while((match = urlPattern.exec(text))){
      var url = match[0].replace(/[),.;!?]+$/, "");
      var trailing = match[0].slice(url.length);
      html += escapeHtml(text.slice(lastIndex, match.index));
      html += '<a href="'+escapeHtml(url)+'" target="_blank" rel="noopener">'+escapeHtml(url)+'</a>';
      html += escapeHtml(trailing);
      lastIndex = match.index + match[0].length;
    }
    html += escapeHtml(text.slice(lastIndex));
    return html;
  }

  function normalizePath(src){
    if(!src) return FALLBACK_IMAGE;
    return asset(src);
  }

  function mediaMap(item){
    var map = {};
    (item.media || []).forEach(function(media){
      if(media && media.id) map[media.id] = media;
    });
    return map;
  }

  function resolveMedia(item, ref){
    if(!ref) return null;
    if(ref.mediaId) return mediaMap(item)[ref.mediaId] || null;
    return ref;
  }

  function thumbnailFor(item){
    return resolveMedia(item, item.thumbnail) || item.thumbnail || {};
  }

  function sortedItems(data){
    return data.filter(function(item){ return item.published !== false; })
      .sort(function(a,b){ return Number(b.order || 0) - Number(a.order || 0); });
  }

  function countLabel(items){
    var count = items.length;
    return lang() === "ko" ? "총 " + count + "개" : count + " posts";
  }

  function categoryLabel(category){
    if(!category) return "";
    return String(category).replace(/[-_]+/g, " ").replace(/\b\w/g, function(ch){ return ch.toUpperCase(); });
  }

  function renderList(data){
    var root = document.getElementById("news-list");
    if(!root) return;
    var items = sortedItems(data);
    var countRoot = document.getElementById("news-count");
    if(countRoot) countRoot.innerHTML = '<span>'+escapeHtml(countLabel(items))+'</span>';
    if(!items.length){
      root.innerHTML = '<p class="news-empty">'+escapeHtml(t("news.empty","No news posts yet."))+'</p>';
      return;
    }
    root.innerHTML = items.map(function(item){
      var copy = textFor(item);
      var thumb = thumbnailFor(item);
      var src = normalizePath(thumb.src);
      var alt = localize(thumb.alt) || copy.title || "News thumbnail";
      return [
        '<a class="news-card news-list-card reveal" href="', escapeHtml(page("news-detail?slug=" + encodeURIComponent(item.slug))), '">',
          '<span class="news-thumb"><img src="', escapeHtml(src), '" alt="', escapeHtml(alt), '" loading="lazy"></span>',
          '<span class="news-body">',
            '<span class="news-card-meta">',
              '<span class="date">', escapeHtml(localize(item.dateLabel) || item.date || ""), '</span>',
              item.category ? '<span class="news-category">'+escapeHtml(categoryLabel(item.category))+'</span>' : '',
            '</span>',
            '<strong>', escapeHtml(copy.title || ""), '</strong>',
          '</span>',
        '</a>'
      ].join("");
    }).join("");
    if(window.DW && window.DW.observeReveals) window.DW.observeReveals();
  }

  function youtubeSrc(media){
    var src = "https://www.youtube.com/embed/" + encodeURIComponent(media.youtubeId || "");
    if(media.startAt) src += "?start=" + encodeURIComponent(media.startAt);
    return src;
  }

  function renderMedia(item, media){
    if(!media) return "";
    if(media.type === "youtube"){
      return '<figure class="news-detail-media"><div class="news-video"><iframe src="'+escapeHtml(youtubeSrc(media))+'" title="'+escapeHtml(localize(media.title) || "YouTube video")+'" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div></figure>';
    }
    if(media.type === "image"){
      return '<figure class="news-detail-media"><img src="'+escapeHtml(normalizePath(media.src))+'" alt="'+escapeHtml(localize(media.alt) || "")+'" loading="lazy"></figure>';
    }
    return "";
  }

  function renderBlock(item, block){
    if(!block) return "";
    if(block.type === "paragraph") return '<p>'+linkedText(block.text || "")+'</p>';
    if(block.type === "media") return renderMedia(item, mediaMap(item)[block.mediaId]);
    if(block.type === "gallery"){
      return '<div class="news-gallery">' + (block.mediaIds || []).map(function(id){
        return renderMedia(item, mediaMap(item)[id]);
      }).join("") + '</div>';
    }
    if(block.type === "youtube") return renderMedia(item, block);
    if(block.type === "image") return renderMedia(item, block);
    return "";
  }

  function isMediaBlock(block){
    return block && (block.type === "media" || block.type === "gallery" || block.type === "youtube" || block.type === "image");
  }

  function renderDetail(data){
    var root = document.getElementById("news-detail");
    if(!root) return;
    var slug = new URLSearchParams(location.search).get("slug");
    var item = data.find(function(entry){ return entry.slug === slug && entry.published !== false; });
    if(!item){
      root.innerHTML = '<div class="news-detail-empty"><h2>'+escapeHtml(t("news.notfound","News post not found."))+'</h2><a class="btn" href="'+escapeHtml(page("news"))+'">'+escapeHtml(t("news.back","Back to News"))+'</a></div>';
      return;
    }
    var copy = textFor(item);
    document.title = (copy.title ? copy.title + " | " : "") + "DogWoodAI";
    var bodyBlocks = copy.body || [];
    var mediaBlocks = bodyBlocks.filter(isMediaBlock);
    var textBlocks = bodyBlocks.filter(function(block){ return !isMediaBlock(block); });
    root.innerHTML = [
      '<header class="news-detail-head reveal">',
        '<div class="news-detail-meta">',
          '<span class="date">', escapeHtml(localize(item.dateLabel) || item.date || ""), '</span>',
          item.category ? '<span class="news-category">'+escapeHtml(categoryLabel(item.category))+'</span>' : '',
        '</div>',
        '<h2>', escapeHtml(copy.title || ""), '</h2>',
      '</header>',
      '<div class="news-detail-body reveal d1">',
        mediaBlocks.concat(textBlocks).map(function(block){ return renderBlock(item, block); }).join(""),
      '</div>'
    ].join("");
    if(window.DW && window.DW.observeReveals) window.DW.observeReveals();
  }

  function load(){
    fetch(DATA_URL, {cache:"no-store"})
      .then(function(res){
        if(!res.ok) throw new Error("Failed to load news data");
        return res.json();
      })
      .then(function(data){
        renderList(data);
        renderDetail(data);
      })
      .catch(function(){
        var list = document.getElementById("news-list");
        var detail = document.getElementById("news-detail");
        var msg = escapeHtml(t("news.loadError","Unable to load news data."));
        if(list) list.innerHTML = '<p class="news-empty">'+msg+'</p>';
        if(detail) detail.innerHTML = '<div class="news-detail-empty"><h2>'+msg+'</h2></div>';
      });
  }

  document.addEventListener("DOMContentLoaded", load);
  document.addEventListener("langchange", load);
})();
