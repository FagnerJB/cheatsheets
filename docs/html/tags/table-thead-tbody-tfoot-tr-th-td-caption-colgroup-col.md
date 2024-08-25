---
Categories: Content, Structured data, Table
---

# &lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;, &lt;caption&gt;, &lt;colgroup&gt;, &lt;col&gt;

## Description

### table

Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

### thead

Encapsulates a set of table rows, <**tr**> elements, indicating that they comprise the head of a table with information about the table's columns. This is usually in the form of column headers, <**th**> elements.

### tbody

Encapsulates a set of table rows, <**tr**> elements, indicating that they comprise the body of a table's main data.

### tfoot

Encapsulates a set of table rows, <**tr**> elements, indicating that they comprise the foot of a table with information about the table's columns. This is usually a summary of the columns, e.g., a sum of the given numbers in a column.

### tr

Defines a row of cells in a table. The row's cells can then be established using a mix of <**td**> (data cell) and <**th**> (header cell) elements.

### th

A child of the <**tr**> element, it defines a cell as the header of a group of table cells. The nature of this group can be explicitly defined by the scope and headers attributes.

### td

A child of the <**tr**> element, it defines a cell of a table that contains data.

### caption

Specifies the caption or title of a table.

### colgroup

Defines a group of columns within a table, mainly to style the indicated cells.

### col

Defines one or more columns in a column group represented by its implicit or explicit parent **colgroup** element. The **col** element is only valid as a child of a **colgroup** element that has no span attribute defined.

## Recommendations

-  <**table**> must be used for table related data.
-  Using <**thead**>, <**tbody**> and <**tfoot**> is not required, but highly recommended.
-  <**colgroup**> must be between <**caption**> and <**thead**>, <**tbody**>, <**tfoot**> or <**tr**>, what of those is used first.

## Example

```html
<table>
   <caption>
      Personal finances
   </caption>
   <colgroup>
      <col />
      <col span="3" class="months" />
   </colgroup>
   <thead>
      <tr>
         <td></td>
         <th>May</th>
         <th>June</th>
         <th>July</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th>Earnings</th>
         <td>$ 666</td>
         <td>$ 2000</td>
         <td>$ 1000</td>
      </tr>
      <tr>
         <th>Expenses</th>
         <td>$ -666</td>
         <td>$ -1000</td>
         <td>$ -1761</td>
      </tr>
   </tbody>
   <tfoot>
      <tr>
         <th>Total</th>
         <td>$ 0</td>
         <td>$ 1200</td>
         <td>$ -761</td>
      </tr>
   </tfoot>
</table>
```
