---
Categories: Metadata, External resources, Machine-readable
Related: head, script, style
---

# &lt;title&gt;, &lt;meta&gt;, &lt;link&gt;, &lt;base&gt;

## Description

### title

Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.

### meta

Represents metadata that cannot be represented by other HTML meta-related
elements, like <**base**>, <**link**>, <**script**>, <**style**> and
<**title**>.

### link

Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.

### base

Specifies the base URL to use for all relative URLs in a document.

## Recommendations

-  There can be only one <**base**> in a document.

## Example

```html
<head>
   <title>*</title>
   <meta />
   <link />
   <base href="" />
</head>
```
