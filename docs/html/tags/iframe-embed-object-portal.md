---
Categories: Content, Media, External resources
Related: img
---

# &lt;iframe&gt;, &lt;embed&gt;, &lt;object&gt;, &lt;portal&gt;

## Description

In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.

### iframe

Represents a nested browsing context, embedding another HTML page into the current one.

### embed

Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.

### object

Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.

### portal

Enables the embedding of another HTML page into the current one to enable smoother navigation into new pages.

## Recommendations

-  <**portal**> is not current available. See support in [Can I Use](https://caniuse.com/mdn-html_elements_portal).

## Example

```html
<iframe
   src="https://www.example.com"
   width="600"
   height="400"
   title="Example Iframe"
></iframe>

<embed
   src="https://www.example.com/document.pdf"
   width="600"
   height="400"
   type="application/pdf"
/>

<object
   data="https://www.example.com/document.pdf"
   width="600"
   height="400"
   type="application/pdf"
>
   <p>
      Your browser does not support embedded PDFs. Please download the PDF to
      view it: <a href="https://www.example.com/document.pdf">Download PDF</a>.
   </p>
</object>

<portal id="myPortal" src="https://www.example.com"></portal>
<script>
   const portal = document.getElementById('myPortal')

   portal.addEventListener('click', () => {
      portal.activate()
   })
</script>
```
