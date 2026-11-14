(function () {
  var h = window.h;
  var createClass = window.createClass;

  var DancePostPreview = createClass({
    render: function () {
      var entry = this.props.entry;
      var title = entry.getIn(["data", "title"]) || "Your post title";
      var cover = entry.getIn(["data", "cover"]);
      var asset = cover ? this.props.getAsset(cover) : null;
      var imageUrl = asset && asset.toString ? asset.toString() : asset;
      var rawDate = entry.getIn(["data", "date"]);
      var date = rawDate ? new Date(rawDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }) : "Just now";
      var link = entry.getIn(["data", "external_url"]);

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
          imageUrl
            ? h("img", { className: "social-preview-image", src: imageUrl, alt: "" })
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
