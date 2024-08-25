---
Categories: Content, Interactive
---

# &lt;dialog&gt;

## Description

Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.

## Recommendations

-

## Example

```html
<button id="showDialog">Open Dialog</button>

<dialog id="myDialog">
   <h2>Dialog Title</h2>
   <p>This is a simple dialog example.</p>
   <button id="closeDialog">Close</button>
</dialog>

<script>
   const dialog = document.getElementById('myDialog')
   const showDialogButton = document.getElementById('showDialog')
   const closeDialogButton = document.getElementById('closeDialog')

   showDialogButton.addEventListener('click', () => {
      dialog.showModal()
   })

   closeDialogButton.addEventListener('click', () => {
      dialog.close()
   })
</script>
```
