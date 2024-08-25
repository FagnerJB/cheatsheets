---
Categories: Content, Interactive
Related: form, ul, ol
---

# &lt;a&gt;, &lt;button&gt;, &lt;nav&gt;

## Description

Interactive elements.

### a

Together with its `href` attribute, creates a hyperlink to web pages, files, email addresses, locations within the current page, or anything else a URL can address.

### button

An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it performs an action, such as submitting a form or opening a dialog.

### nav

Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

## Recommendations

-  Usually, an `<a>` links to another page, jumps to a section or start a download; and a `<button>` triggers an action within the same page.

## Example

```html
<p>
   Visit <a href="https://www.example.com" target="_blank">Example.com</a> for
   more information.
</p>

<button type="button">Submit</button>

<nav>
   <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="contact.html">Contact</a></li>
   </ul>
</nav>
```
