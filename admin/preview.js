(function () {
  var h = window.h;
  var createClass = window.createClass;

  function getYouTubeId(url) {
    if (!url) return null;
    var match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/))([A-Za-z0-9_-]{6,})/i);
    return match ? match[1] : null;
  }

  function getAssetUrl(getAsset, path) {
    var asset = path ? getAsset(path) : null;
    return asset && asset.toString ? asset.toString() : asset;
  }

  var DancePostPreview = createClass({
    render: function () {
      var entry = this.props.entry;
      var title = entry.getIn(["data", "title"]) || "Your post title";
      var cover = entry.getIn(["data", "cover"]);
      var imagePaths = cover ? [cover] : [];
      var imageUrls = imagePaths.map(getAssetUrl.bind(null, this.props.getAsset));
      var rawDate = entry.getIn(["data", "date"]);
      var date = rawDate ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }) : "Just now";
      var link = entry.getIn(["data", "external_url"]);
      var youtubeId = getYouTubeId(link);
      var slides = [];

      imageUrls.forEach(function (url, index) {
        slides.push(h("div", { className: "social-preview-slide", key: "image-" + index },
          h("img", { src: url, alt: "" }),
          youtubeId && index === 0 ? h("span", { className: "social-preview-play" }, "▶") : null
        ));
      });
      if (!imageUrls.length && youtubeId) {
        slides.push(h("div", { className: "social-preview-slide", key: "video-thumbnail" },
          h("img", { src: "https://i.ytimg.com/vi/" + youtubeId + "/hqdefault.jpg", alt: "" }),
          h("span", { className: "social-preview-play" }, "▶")
        ));
      }

      return h("main", { className: "social-preview-shell" },
        h("article", { className: "social-preview-card" },
          h("header", { className: "social-preview-header" },
            h("span", { className: "social-preview-avatar" }, "J"),
            h("span", { className: "social-preview-person" },
              h("strong", null, "Jing Jin"),
              h("time", null, date)
            ),
            h("span", { className: "social-preview-menu" }, "•••")
          ),
          slides.length
            ? h("div", { className: "social-preview-gallery" },
                h("div", { className: "social-preview-track" }, slides),
                slides.length > 1 ? h("span", { className: "social-preview-count" }, "1 / " + slides.length) : null
              )
            : h("div", { className: "social-preview-placeholder" },
                h("span", null, "＋"),
                h("small", null, "Your photo will appear here")
              ),
          h("div", { className: "social-preview-copy" },
            h("h1", null, title),
            h("div", { className: "social-preview-caption" }, this.props.widgetFor("body")),
            link ? h("a", { href: link, target: "_blank", rel: "noopener" }, "Watch or view more ↗") : null
          )
        )
      );
    }
  });

  window.CMS.registerPreviewStyle("/admin/preview.css");
  window.CMS.registerPreviewTemplate("dance_posts", DancePostPreview);
})();
