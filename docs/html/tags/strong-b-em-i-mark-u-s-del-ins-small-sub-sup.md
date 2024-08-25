---
Categories: Content, Demarcating
Related: blockquote, q, cite, math
---

# &lt;strong&gt;, &lt;b&gt;, &lt;em&gt;, &lt;i&gt;, &lt;mark&gt;, &lt;u&gt;, &lt;s&gt;, &lt;del&gt;, &lt;ins&gt;, &lt;small&gt;, &lt;sub&gt;, &lt;sup&gt;

## Description

For applying meaning and context to the content.

### strong

Indicates that its contents have strong importance, seriousness, or urgency.

### b

Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.

### em

Marks text that has stress emphasis. The <**em**> element can be nested, with each nesting level indicating a greater degree of emphasis.

### i

Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, and taxonomical designations, among others.

### mark

Represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.

### u

Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation, like spelling errors.

### s

Renders text with a strikethrough, or a line through it. Used to represent things that are no longer relevant or no longer accurate.

### del

Represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example.

### ins

Represents a range of text that has been added to a document.

### small

Represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font size smaller, such as from small to x-small.

### sub

Specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.

### sup

Specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.

## Recommendations

-  Typically, browsers render <**strong**> and <**b**> in bold type, but either must not be use for that purpose. For only apply bold type with CSS `font-weight` property, usually with <**span**>. <**strong**> is for importance. <**b**> is for attention.

-  Typically, browsers render <**em**> and <**i**> in italic type, but either must not be use for that purpose. For only apply italic type with CSS `font-style` property, usually with <**span**>. <**em**> is for stress emphasis. <**i**> is for set off from the context.

-  Avoid using the <**u**> element with its default styling (of underlined text) in such a way as to be confused with a hyperlink, which is also underlined by default.

-  Both <**s**> and <**del**> renders text with a strikethrough. <**s**> is for information no longer accurate, and <**del**> is for document remove edits.

-  <**sub**> and <**sup**> are frequently use for mathematical variable numbers, but <**math**> such be considered for that.

## Example

```html
<strong>Important</strong>
<b>Attention</b>
<em>Emphasis</em>
<i>Foreigner terms</i>
<mark>Highlighted</mark>
<u>Typo</u>
<s>Rescheduled</s>
<del>Toronto 2028</del>
<ins>Los Angeles 2028</ins>
<small>Copyright</small>
C<sub>8</sub>H Footnote<sup>2</sup>
```
