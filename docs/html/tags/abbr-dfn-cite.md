---
Categories: Content, Definition
Related: blockquote, q
---

# &lt;abbr&gt;, &lt;dfn&gt;, &lt;cite&gt;

## Description

Provides semantic context to explain or characterize elements.

### abbr

Represents an abbreviation or acronym.

### dfn

Used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor `<p>` element, the `<dt>`/`<dd>` pairing, or the nearest section ancestor of the `<dfn>` element, is considered to be the definition of the term.

### cite

Used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.

## Example

```html
<p>
   <abbr title="HyperText Markup Language">HTML</abbr> is the standard language
   used to create and design web pages.
</p>

<p>
   In this context, <dfn>algorithm</dfn> means a set of rules or instructions
   designed to perform a specific task or solve a problem.
</p>

<p>
   For more information, refer to <cite>The New York Times</cite> article on
   current events.
</p>
```
