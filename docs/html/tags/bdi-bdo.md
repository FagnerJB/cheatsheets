---
Categories: Content, Language
---

# &lt;bdi&gt;, &lt;bdo&gt;

## Description

### bdi

Tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts text and doesn't know the directionality of the text being inserted.

### bdo

Overrides the current directionality of text, the text within is rendered in a different direction.

## Recommendations

-

## Example

```html
<p>Usernames in different languages:</p>
<ul>
   <li>English: <bdi>john_doe</bdi></li>
   <li>Arabic: <bdi>أحمد</bdi></li>
   <li>Hebrew: <bdi>יוסי</bdi></li>
</ul>

<p>Normal text: This is a left-to-right text example.</p>
<p>Reversed text: <bdo dir="rtl">This is a left-to-right text example.</bdo></p>
```
