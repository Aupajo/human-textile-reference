h1. Human Textile Reference

The Human Textile Reference is a set of short, easy to understand HTML pages you can include in any project that uses Textile.

*Important:* This is not designed to be a complete reference. Just a quick guide for the layman.

You can view a demo on the "labs page":http://labs.metanation.com/human-textile-reference/.

It's perfect for including as a pop-up help window next to your textarea.

h2. Notes

h3. Size

It's extremely lightweight; one HTML file, one minified CSS file, two images. If your web server has GZip compression switched on it should total 2.2KB.

h3. JavaScript

The guide uses JavaScript to toggle the different categories. If the browser's JavaScript is disabled, every category will be shown expanded, which is fine.

It uses jQuery 1.4.4 from the Google's AJAX CDN (the request should be a cache hit, so you'll incur no extra wait time).

h3. Sass

Included stylesheet is compiled using "Sass":http://sass-lang.com/. If you want to make modifications, alter @sass/textile-reference.css@. You can output the compressed version with:

<pre>
<code>
sass sass/textile-reference.scss textile-reference/stylesheets/textile-reference.css -t compressed
</code>
</pre>

If you're developing, you can use Sass' @--watch@ option.

h2. How To Use

Clone the repository or "download":http://github.com/Aupajo/human-textile-reference/downloads.

Copy the @textile-reference/@ directory to your project.

Add a help link to the reference:

h3. HTML Snippet

<pre>
<code>
You can format your text using 
<a href="textile-reference/index.html"
   onclick="window.open(this.href,'textile_reference','height=400,width=600,scrollbars=1'); return false;">Textile</a>.
</code>
</pre>

h3. Rails Snippet

<pre>
<code>
  You can format your text using
  <%= link_to 'Textile', 'textile-reference/index.html', :popup => ['textile_reference', 'height=400,width=600,scrollbars=1'] %>
</code>
</pre>
