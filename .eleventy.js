export default function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/photos/img");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

  // Enveloppe uploads post attachments to src/static/img (served at /img/) but
  // writes the markdown links as bare, page-relative filenames. Rewrite those
  // relative <img> srcs to /img/ so they resolve to where the files actually are.
  eleventyConfig.addTransform("fixEmbedImagePaths", (content, outputPath) => {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(
      /(<img\b[^>]*?\bsrc=")(?!\/|https?:|data:|#)([^"]+)(")/gi,
      (match, pre, src, post) => `${pre}/img/${src}${post}`
    );
  });

  // Filters
  eleventyConfig.addFilter("dateFormat", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );
  eleventyConfig.addFilter("dateYear", (date) =>
    new Date(date).getUTCFullYear()
  );
  eleventyConfig.addFilter("startsWith", (str, prefix) =>
    str.startsWith(prefix)
  );

  // Collections
  eleventyConfig.addCollection("posts", (api) =>
    api
      .getFilteredByGlob("src/feed/**/*.md")
      .sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("projects", (api) =>
    api
      .getFilteredByGlob("src/projects/**/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );
  eleventyConfig.addCollection("photos", (api) =>
    api
      .getFilteredByGlob("src/photos/**/*.md")
      .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
