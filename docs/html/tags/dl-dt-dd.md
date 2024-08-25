---
Categories: Content, Structured data, Listing
---

# &lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;

## Description

### dl

Represents a description list. The element encloses a list of groups of terms (<**dt**> element) and descriptions (<**dd**> elements). Common uses for this element are to implement a glossary or to display metadata, a list of key-value pairs.

### dt

Specifies a term in a description or definition list, and as such must be used inside a <**dl**> element. It is usually followed by a <**dd**> element; however, multiple <**dt**> elements in a row indicate several terms that are all defined by the immediate next <**dd**> element.

### dd

Provides the description, definition, or value for the preceding term(s) (<**dt**>), inside a description list (<**dl**>).

## Recommendations

-

## Example

```html
<dl>
   <dt>Term</dt>
   <dd>Description</dd>
</dl>
```
