---
Categories: Content, Heading, Text
Related: section
---

# &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;, &lt;hgroup&gt;

## Description

### h1 - h6

Represent six levels of section headings. `<h1>` is the highest section level and `<h6>` is the lowest.

### hgroup

Represents a heading grouped with any secondary content, such as subheadings, an alternative title, or a tagline.

## Recommendations

-  Only one `<h1>` in a document.
-  Must respect the hierarchy.
-  Usually identify the document or a section.

## Example

```html
<h1>Main Heading of the Document</h1>

<section>
   <hgroup>
      <h2>Section 1 Heading</h2>
      <p>Tagline</p>
   </hgroup>

   <h3>Subheading 1.1</h3>
   <h4>Sub-subheading 1.1.1</h4>
   <h5>Sub-sub-subheading 1.1.1.1</h5>
   <h6>Sub-sub-sub-subheading 1.1.1.1.1</h6>
</section>
```
