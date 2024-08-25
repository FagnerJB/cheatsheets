---
Categories: Content, Listing
Related: a, nav
---

# &lt;menu&gt;, &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;

## Description

### menu

A semantic alternative to <**ul**>, but treated by browsers (and exposed through the accessibility tree) as no different than <**ul**>. It represents an unordered list of items (which are represented by <**li**> elements).

### ul

Represents an unordered list of items, typically rendered as a bulleted list.

### ol

Represents an ordered list of items, typically rendered as a numbered list.

### li

Represents an item in a list. It must be contained in a parent element: an ordered list (<**ol**>), an unordered list (<**ul**>), or a **menu**. In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.

## Recommendations

-

## Example

```html
<menu>
   <li></li>
   <li></li>
</menu>
<ul>
   <li></li>
   <li></li>
</ul>
<ol>
   <li></li>
   <li></li>
</ol>
```
