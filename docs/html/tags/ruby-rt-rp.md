---
Categories: Content, Language, Text
Related: math
---

# &lt;ruby&gt; &lt;rt&gt;, &lt;rp&gt;

## Description

### ruby

Represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.

### rt

Specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <**rt**> element must always be contained within a <**ruby**> element.

### rp

Used to provide fall-back parentheses for browsers that do not support the display of ruby annotations using the <**ruby**> element. One <**rp**> element should enclose each of the opening and closing parentheses that wrap the <**rt**> element that contains the annotation's text.

## Recommendations

-

## Example

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```
