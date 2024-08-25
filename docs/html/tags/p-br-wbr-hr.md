---
Categories: Content, Text, Formatting
---

# &lt;p&gt;, &lt;br&gt;, &lt;wbr&gt;, &lt;hr&gt;

## Description

### p

Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

### br

Produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

### wbr

Represents a word break opportunity — a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.

### hr

Represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.

## Recommendations

-

## Example

```html
<p>
   Lorem ipsum dolor sit amet.<br />
   Phasellus aliquet, libero vel porta rhoncus.
</p>
<hr />
<p>
   Pellentesque lacinia bibendum aliquam.<wbr />
   Maecenas venenatis placerat elit.
</p>
```
