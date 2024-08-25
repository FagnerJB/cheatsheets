---
Categories: Content, Text
---

# &lt;div&gt;, &lt;span&gt;

## Description

Generics elements.

### div

The generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like flexbox is applied to its parent element).

### span

A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.

## Recommendations

-  This generics elements should be used only when no other semantic element is appropriate.

## Example

```html
<div><span>First</span> <span>Other</span></div>
```
