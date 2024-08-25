---
Categories: Content, Structured data
Related: dl
---

# &lt;details&gt;, &lt;summary&gt;

## Description

### details

Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <**summary**> element.

### summary

Specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <**summary**> element toggles the state of the parent <**details**> element open and closed.

## Recommendations

-

## Example

```html
<details>
   <summary>What is HTML?</summary>
   <p>
      HTML stands for HyperText Markup Language. It is the standard language for
      creating web pages and web applications. HTML describes the structure of a
      web page semantically and originally included cues for the appearance of
      the document.
   </p>
</details>

<details>
   <summary>What is CSS?</summary>
   <p>
      CSS stands for Cascading Style Sheets. It is used to describe the
      presentation of a document written in HTML or XML. CSS describes how
      elements should be rendered on screen, on paper, in speech, or on other
      media.
   </p>
</details>

<details>
   <summary>What is JavaScript?</summary>
   <p>
      JavaScript is a programming language that conforms to the ECMAScript
      specification. It is high-level, often just-in-time compiled, and
      multi-paradigm. JavaScript has curly-bracket syntax, dynamic typing,
      prototype-based object-orientation, and first-class functions.
   </p>
</details>
```
