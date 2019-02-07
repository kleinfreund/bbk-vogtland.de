const htmlMinifier = require('html-minifier');

// https://github.com/kangax/html-minifier#options-quick-reference
const htmlMinifierOptions = {
  useShortDoctype: true,
  removeComments: true,
  collapseWhitespace: true
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  // Copies static files as they are to the output directory
  eleventyConfig
    .addPassthroughCopy('static')
    .addPassthroughCopy('img')
    .addPassthroughCopy('css')
    .addPassthroughCopy('js')
    .addPassthroughCopy('.htaccess');

  // Defines shortcode for generating post excerpts
  eleventyConfig.addShortcode('excerpt', post => extractExcerpt(post));

  // Filter for compressing CSS
  // eleventyConfig.addFilter('cssmin', code => new CleanCSS().minify(code).styles);

  // Compresses output HTML
  eleventyConfig.addTransform('htmlmin', minifyHtml);

  return {
    templateFormats: ['md', 'html', 'liquid']
  };
};

/**
 * Minifies HTML content.
 *
 * @param {String} content
 * @param {String} outputPath
 * @returns {String} the minified HTML content
 */
function minifyHtml(content, outputPath) {
  if (outputPath.endsWith('.html')) {
    return htmlMinifier.minify(content, htmlMinifierOptions);
  }

  return content;
}

/**
 * Extracts the excerpt from a document.
 *
 * @param {*} doc A real big object full of all sorts of information about a document.
 * @returns {String} the excerpt.
 */
function extractExcerpt(doc) {
  if (!doc.hasOwnProperty('templateContent')) {
    console.warn('❌ Failed to extract excerpt: Document has no property `templateContent`.');
    return;
  }

  const excerptSeparator = '<!--more-->';
  const content = doc.templateContent;

  if (content.includes(excerptSeparator)) {
    return content.substring(0, content.indexOf(excerptSeparator)).trim();
  }

  if (content.includes('</p>')) {
    return content.substring(0, content.indexOf('</p>') + 4);
  }

  return content;
}
