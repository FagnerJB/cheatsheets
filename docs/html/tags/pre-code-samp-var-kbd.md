---
Categories: Content
Related: output
---

# &lt;pre&gt;, &lt;code&gt;, &lt;samp&gt;, &lt;var&gt;, &lt;kbd&gt;

## Description

### pre

Represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.

### code

Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using a monospace font.

### samp

Used to enclose inline text which represents sample (or quoted) output from a computer program.

### var

Represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface.

### kbd

Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.

## Recommendations

-

## Example

```html
<p>
   To run <code>calcSum(x, y)</code>, press
   <kbd> <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> </kbd>.
</p>
<p>
   Then enter values to <var>x</var> and <var>y</var>, so the program should
   answer:
</p>
<pre>
	<samp>The sum of 4 (x) plus 6 (y) is 10.</samp>
</pre>
```
