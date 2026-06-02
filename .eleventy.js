export default function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/photos/img");
  eleventyConfig.addPassthroughCopy({ "src/static": "/" });

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
