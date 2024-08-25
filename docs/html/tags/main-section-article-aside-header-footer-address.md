---
Categories: Content, Sectioning
Related: h2
---

# &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;address&gt;

## Description

### main

Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

### section

Represents a generic standalone section of a document, which doesn't have a more specific semantic element in {type:Sectioning} to represent it.

### article

Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include a forum post, a magazine or newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

### aside

Represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.

### header

Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

### footer

Represents a footer for its nearest ancestor sectioning content or sectioning root element. A **footer** typically contains information about the author of the section, copyright data, or links to related documents.

### address

Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.

## Recommendations

-  Only one **main** per document.
-  **section**s should always have a {type:Heading}, with very few exceptions.

## Example

```html
<main>
   <header>
      <h1>Main Title</h1>
   </header>
   <section>
      <h2>Session Title</h2>
      <p></p>
   </section>
   <aside>
      <h2>Aside Title</h2>
   </aside>
   <footer>
      <address>*</address>
   </footer>
</main>
```
