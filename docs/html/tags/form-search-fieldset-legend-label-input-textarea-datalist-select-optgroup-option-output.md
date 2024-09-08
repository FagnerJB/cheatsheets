---
Categories: Collecting, Interactive
Related: button, progress, meter
---

# &lt;form&gt;, &lt;search&gt;, &lt;fieldset&gt;, &lt;legend&gt;, &lt;label&gt;, &lt;input&gt;, &lt;textarea&gt;, &lt;datalist&gt;, &lt;select&gt;, &lt;optgroup&gt;, &lt;option&gt;, &lt;output&gt;

## Description

HTML provides several elements that can be used together to create forms that the user can fill out and submit to the website server or application.

### form

Represents a document section containing interactive controls (**input**, **textarea** or **select**) for submitting information.

### search

Represents a part that contains a set of form controls or other content related to performing a search or filtering operation.

### fieldset

Used to group several controls as well as **label**s within a web form.

### legend

Represents a caption for the content of its parent **fieldset**.

### label

Represents a caption for a control item in a user interface.

### input

Used to create interactive controls for web-based forms to accept data from the user.

### textarea

Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, like a comment.

### datalist

Contains a set of **option** elements that represent the permissible or recommended options available to choose from within other **input**s.

### select

Represents a control that provides a menu of **option**s.

### optgroup

Creates a grouping of options within a **select** element.

### option

Used to define an item contained in a **select**, an **optgroup**, or a **datalist** element. As such, **option** can represent menu items in popups and other lists of items in an HTML document.

### output

Container element into which a site or app can inject the results of a calculation or the outcome of a user action.

## Recommendations

-

## Example

```html
<search>
   <form>
      <input type="search" />

      <button type="submit">Submit</button>
   </form>
</search>

<form>
   <fieldset>
      <legend>Caption or Title of this step</legend>
      <label>
         Label
         <textarea></textarea>
      </label>

      <input list="browsers" placeholder="Select or type your browser" />
      <datalist id="browsers">
         <option value="Chrome"></option>
         <option value="Firefox"></option>
         <option value="Safari"></option>
         <option value="Edge"></option>
         <option value="Opera"></option>
      </datalist>

      <button type="button">Next</button>
   </fieldset>
   <fieldset>
      <legend>Caption or Title of this step</legend>

      <label for="name">Label</label>
      <input id="name" type="text" value="Starting value" />

      <label for="fruit">Choose your favorite fruit:</label>
      <select id="fruit" name="fruit">
         <optgroup label="Citrus Fruits">
            <option value="orange">Orange</option>
            <option value="lemon">Lemon</option>
            <option value="lime">Lime</option>
         </optgroup>
         <optgroup label="Berries">
            <option value="strawberry">Strawberry</option>
            <option value="blueberry">Blueberry</option>
            <option value="raspberry">Raspberry</option>
         </optgroup>
         <optgroup label="Tropical Fruits">
            <option value="mango">Mango</option>
            <option value="pineapple">Pineapple</option>
            <option value="banana">Banana</option>
         </optgroup>
      </select>

      <button type="submit">Submit</button>
   </fieldset>
</form>
<output></output>
```
