---
Categories: Metadata, Styling
---

# &lt;style&gt;

## Description

Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element.

## Recommendations

-  For performance matters, is recommended that the important and required styling of a page be include inline, with a <**style**> element. The not important styling could be include later with a <**link**>.

## Example

```html
<style>
   p {
      color: #26b72b;
   }
   code {
      font-weight: bold;
   }
</style>
```
