---
Categories: Content, Media
---

# &lt;svg&gt;, &lt;math&gt;

## Description

You can embed SVG and MathML content directly into HTML documents, using the <**svg**> and <**math**> elements. Those are a new type of XML document and have specific tags and attributes

### svg

Container defining a new coordinate system (vector graphics) and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.

[See all specific tags and attributes of <**svg**>](https://developer.mozilla.org/en-US/docs/Web/SVG/Element).

### math

The top-level element in MathML. Every valid MathML instance must be wrapped in it. In addition, you must not nest a second <**math**> element in another, but you can have an arbitrary number of other child elements in it.

[See all specific tags and attributes of <**math**>](https://developer.mozilla.org/en-US/docs/Web/MathML/Element).

## Recommendations

-  The required _xmlns_ for a <**svg**> is `"http://www.w3.org/2000/svg"`. This is optional if the <**svg**> is already inside a <**svg**> with this attribute.
-  The _xmlns_ for a <**math**> is `"http://www.w3.org/1998/Math/MathML"`. This is required on another XML documents.

## Example

```html
<svg viewbox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
   <rect x="0" y="0" width="50%" height="50%" fill="tomato" opacity="0.75" />
   <rect x="50%" y="50%" width="50%" height="50%" fill="olive" opacity="0.75" />
</svg>

<math display="block">
   <mfrac>
      <mn>1</mn>
      <msqrt>
         <mn>2</mn>
      </msqrt>
   </mfrac>
</math>
```
