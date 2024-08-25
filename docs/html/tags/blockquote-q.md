---
Categories: Content, Quotation
Related: cite
---

# &lt;blockquote&gt;, &lt;q&gt;

## Description

### blockquote

Indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the `<cite>` element.

### q

Indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the `<blockquote>` element.

## Recommendations

-  For extended quotations, consider using `<cite>` within or alongside `<blockquote>` to provide context or attribution for the quoted material.

## Example

```html
<blockquote cite="https://www.source.com">
   "The only limit to our realization of tomorrow is our doubts of today." -
   Franklin D. Roosevelt, <cite>Book name</cite>
</blockquote>

<p>
   Albert Einstein once said,
   <q>Imagination is more important than knowledge</q>.
</p>
```
