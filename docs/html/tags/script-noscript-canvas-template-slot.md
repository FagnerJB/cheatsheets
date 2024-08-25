---
Categories: Scripting
---

# &lt;script&gt;, &lt;noscript&gt;, &lt;canvas&gt;, &lt;template&gt;, &lt;slot&gt;

## Description

To create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.

Create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.

### script

Used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <**script**> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON. [Various JavaScripts APIs are available](https://developer.mozilla.org/en-US/docs/Web/API).

### noscript

Defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.

### canvas

Container element to use with either the canvas scripting API or the WebGL API to draw graphics and animations. [See more details about canvas](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API).

### template

A mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

### slot

Part of the Web Components technology suite, this element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

## Recommendations

-  If needed, inside a <**noscript**>, insert a warning about turn on JavaScript and/or update the browser.

## Example

```html
<canvas id="draw" width="400" height="200">Canvas not supported.</canvas>
```
