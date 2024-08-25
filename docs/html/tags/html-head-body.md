---
Categories: Structure, Content
---

# &lt;html&gt;, &lt;head&gt;, &lt;body&gt;

The main structure of a HTML document.

## Description

### html

Represents the root (top-level element) of an HTML document .

### head

Contains machine-readable information ({Category:Metadata}) about the document, like its title, scripts, and style sheets.

### body

Represents the content of an HTML document.

## Recommendations

-  Although is highly recommend always includes the full structure, if none of those tags is presented, all elements is considered inside the **body**.
-  Only one **html**, **head** and **body** must exists per document.
-  All elements must be descendants of **html**.
-  All metadata, some **script**s and **style**s must be descendants of **head**.
-  All content elements must be descendants of **body**.

## Example

```html
<html>
   <head>
      *
   </head>
   <body>
      *
   </body>
</html>
```
