# UFOs

Javscript, HTML, and CSS code to display table data and dynamic filtering of the table on an HTML webpage.

## Overview
I was tasked with creating an HTML webpage to display UFO sighting data in an HTML data table. I constructed the HTML table using javascript code. The HTML script elements referenced the javascript app.js file and data.js files (data.js file contained a list of objects for each UFO sighting). I also created a filtered data function that relied on an event listener to detect the changes of the user inputs into table filtering criteria. The user input filter data was stored and was used to extract matching data from the initial container of all data. The resulting filtered data was then displayed on the HTML webpage.

### Analysis

### Organization of Visual HTML Elements
To construct the webpage in visual studio code, the basic elements of the HTML webpage were inserted by default by typing "!" and then pressing enter. 

A navbar was created at the top of the webpage because it was the first nested element in the `<body />` element of the page. Among other referenced stylings, this navbar used the boostrap referenced class `navbar-expand-lg` so that it would fit the whole width of the page whenever the page was resized. Also, the page would reset to the original `index.html` code, or default state of the website, whenver the link, "UFO Sightings" at the top of the page was clicked. The below code allowed for these capabilities:

`<nav class="navbar navbar-dark bg-dark navbar-expand-lg">`

&nbsp;&nbsp;&nbsp;&nbsp;`<a class="navbar-brand" href="index.html">UFO Sightings</a>`

Linked elements to the CSS style sheets were placed in the HTML code head element.

`<link rel="stylesheet"`

`href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"`

`integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"`

`crossorigin="anonymous"/>`

`<link rel="stylesheet" href="static/css/style.css" />`

Next, a jumbotron element was inserted beneath the navbar with the "UFO Sightings" link. This jumbotron element read "The Truth is out There" because it had the text attribute with this string value.

 `<div class="jumbotron">`

&nbsp;&nbsp;&nbsp;&nbsp;`<h1 class="display-4">The Truth is Out There</h1>`

&nbsp;&nbsp;`</div>`

There are CSS and bootstrap stylings referenced throughout the webpage. More commonly, boostrap stylings are referenced using classes such as `container-fluid`, `col-md`, and `bg-dark`. The general structure of the organization of the HTML elements on the webpage made use of the `col-md` layout which, when nested in a row element, split the row of the webpage into twelve equal units of space. When incorporating the classes `cold-md-4` in one division with a `col-md-8` class in the other division, I allocated 4 of these columns to the first division element and 8 of these columns to the second division element. Within each of these division elements, for this example I included the header element:

`<h3>UFO Sightings: Fact or Fancy? <small>Ufologists weigh in</small></h3>` 

In the division with the `col-md-8` class, I included a paragraph body of text.

`<div class="container-fluid">`

&nbsp;&nbsp;&nbsp;&nbsp;`<div class="row">`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="col-md-4 article-title">`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="col-md-8 article-p">`

This `col-md` organization allowed for the `<h3 />` section of the webpage taking up four columns (`col-md-4`), with text `UFO Sightings: Fact or Fancy? Ufologists weigh in` to appear smaller than the element next to it in the same row. This neighboring paragraph `<p />` element took up 8 columns of space and thus appeared larger since it was nested in the `div` tag with a `col-md-8` class. Notice the spacing of the visual elements on the website in the image below:

![h3_p_col_md](https://github.com/willmino/UFOs/blob/main/images/h3_p_col_md.png)



Another use of the `col-md` organization of the webpage elements was to include the filter search criteria for user inputs in a division with a `col-md-3` class. The actual table itself was included in a division with class `col-md-9` , all within the same row element as the filter search criteria. Again, this caused the filter search criteria fields to appear smaller than the initial data table itself, since I allocated 3 columns of space to the filter criteria and 9 columns of space to the data table webpage element. An image is included below to visually demonstrate the amount of space each element with differing `col-md` classes will take up in the same row on the webpage:

![filter_tabledata_col-md](https://github.com/willmino/UFOs/blob/main/images/filter_tabledata_col-md.png)

### Construction of the Data Table and Dynamic Filtering with Javascript

In order to construct the HTML data table that featured all of our UFO sightings, I first needed to write javascript code to reference our instance of data as a javascript object and iterate through each element of the table as I created it. To import the data (list of javascript objects) into the HTML code, I set the src attribute of a script element equal to the filepath of the initial data in the HTML code. I also imported the javascript code into the HTML code using a script element as well. These lines of code were included at the bottom of the HTML body element. Lastly, the D3 library was referenced as well using the src attribute linkage in another script element. The code below accomplished this:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.11.0/d3.js"></script>`

`<script src="static/js/data.js"></script>`

`<script src="static/js/app.js"></script>`

Once all of the appropriate javascript files were linked to the HTML code, I began to import the javascript list of objects (UFO sightings). This was accomplished by declaring a variable and setting it equal to the object data.

`const tableData = data`

I used the d3 library to select the `tbody` table body element where I appended each table division element. 

This allowed for the beginning of the table construction. To construct the table, I began constructing the function `buildTable(data)`. I first declared this function and inside the `{}` of the function I set the `html` attribute of the `tbody` element equal to an empty string, to initialize an empty table everytime the webpage was loaded. This cleared prefiltered data so that when a user began entering new filter information, their filtered results would not be determined by previous instances of filtering the table. Then, I iterated through the `data` list of javascript objects using a `forEach` function. I created the variable `dataRow` and passed it through this `forEach` function. An arrow function was implemented inside the `forEach` function and this new function would set the variable `row` equal to the act of appending a `tr` table row element to the `tbody` element, for every `tableRow` iteration variable which represented each object in the list of objects. Then, another `forEach` function was implemented to add a `td` element to each table row element. This would serve to create all of the columns within each row of the table. To iterate through each object in the list of objects and append `td` elements to each `tr` I needed to use the `Object` datatype and chain the `values()` function to it. By doing so, I allowed the `dataRow` variable to now represent each iterable object in the list of objects. The second `forEach` function could now iterate with the `val` variable. The purpose of this was to create code to finally implement the act of appending a `td` element to each `tr` element. Declaring the `cell` variable equal to `row.append('td')` allowed for this. Finally, the `cell.text(val)` line of code drilled down into the HTML element for each cell of the table I created and set the `text` attribute equal to the `val` variable. The `val` variable represented each actual data value from each set of `[key, value]` pairs within each object that was a part of our list of objects. This was performed so that I could fill our data table with the values from each object, value by value, for each row of data. Alas, the HTML table was created using javascript.

`function buildTable(data) {`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`tbody.html("");`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`data.forEach((dataRow) => {`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`let row = tbody.append("tr");`

&nbsp;&nbsp;&nbsp;&nbsp;`Object.values(dataRow).forEach((val) => {`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`let cell = row.append("td");`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cell.text(val);`

&nbsp;&nbsp;&nbsp;&nbsp;`});`

&nbsp;`});`

At this point the website displayed all of the HTML elements required and the filtering parameters for each table and the table itself. Now, I needed to create the dynamic table filtering experience for the user.

To accomplish this, I first declared the variable `filters` and set it equal to an empty object to hold all of the user input filters. The filters from the users would exist as keys. The keys and values in the raw data set that matched with the user input keys would be retained (filtered), eliminating all remaining data that did not match the user criteria.
I needed to establish javascript code that would store the user input filters in a variable that could later be used to actually filter the table.

To store the updated filters, I declared the `updateFilters()` function. Inside this function, i set the `changedElement` variable equal to the `D3` library selecting `this`.  The `this` object in javascript represents the current object that is executing the current piece of code. In this case, D3 will select the HTML element that the user is changing when they input information into a field for filtering the table. At this moment of changing the HTML code, I created the variable `elementValue` to store the value of the changed element. I then created the variable `filterId` to store the `id` of the `changedElement`. Then, an if else statement was executed. Whenever a `changedElement` occurred, the script would store the `[key, value]` pair, key representing the`filterId` and value representing the `elementValue`, as a new entry in the `filters` object I created earlier. Each object entry was stored by the line of code: `filters[filterId] = elementValue;`. 
If `changedElement` was not entered, I then set the `else` parameter of this function to delete that `filterId` from the `filters` object. This was necessary because if a user typed something into the field but did not press enter, then the script should not respond to this change in the field. This is because changing the filter criteria and actually pressing enter is the act of filtering that I wanted the D3 library to listen to.

Finally, at the end of the `updateFilters` function, the `filterTable()` function was called so that the code could execute and take the new user input information as filters and apply those filters to the table.


`function updateFilters() {`


&nbsp;&nbsp;&nbsp;&nbsp;`let changedElement = d3.select(this);`

&nbsp;&nbsp;&nbsp;&nbsp;`let elementValue = changedElement.property("value");`


&nbsp;&nbsp;&nbsp;&nbsp;`let filterId = changedElement.attr("id");`


&nbsp;&nbsp;&nbsp;&nbsp;`if (elementValue) {`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`filters[filterId] = elementValue;`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`

&nbsp;&nbsp;&nbsp;&nbsp;`else {`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`delete filters[filterId];`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`}`
  
 
&nbsp;&nbsp;&nbsp;&nbsp;`filterTable();`
  
&nbsp;&nbsp;&nbsp;`}`

Lastly, to allow for the `filterTable()` function to be executed, I needed to declare this function. Within this function, I declared a new variable `filteredData` and set it equal to the variable `tableData`. This variable was created because I now needed to iterate through every object of data from the `data.js` file and only store the entries in this list of objects (only store the UFO sightings) that the user had input on the website. To iterate through each entry, a `for of` loop was executed. This `for of` loop declared the new iteration variable `[key, value]` which would iterate through all of the object entries in the new `filters` variable. Now, the code would look at every entry in the `filters` variable and check to see if it matched with the object instances representing the entries in the `data.js` file (all of the raw data). To spefically match the keys and values from the `data.js` file, the code set the variable `filteredData` equal to `filteredData.filter(function(row) {return row[key] ===value;})`. This was the actual javascript act of filtering the whole raw dataset and only returning the key value pairs (object entries) that matched the exact user input. Only exact matches were returned because the `===` javascript strict equality operator was used. An anonymous function was declared within the `filter()` function and assigned the new variable `row` to pass through the function and represent the raw data (`data.js file`) `[key, value]` pairs which I was looking for that served as exact matches to the object entries in the user-input`filters` variable. To finish this `filterTable()` function the `buildTable(filteredData)` line was executed to build the filtered data table that resulted from the user input on the website. 

Two major elements remained at the very end of the entire javascript code. The D3 `selectAll()` code listened for all `"change"` events commited by the user on the website which occurred in any HTML `"input"` elements. These elements were only associated with the filters on the website, so it ensured that D3 was only listening to the user typing into the filters, and nothing else. The below line of code accomplished this:

`d3.selectAll("input").on("change", updateFilters);`

Finally, the `buildTable(tableData);` line of code was executed to build the unfiltered table of data. I included this line of code so that every time a user visited the website, they could look at the table and see all of the information within it. They could then get a good idea of what filter criteria they needed to use in order to view their most relevant UFO Sightings. The `tableData` variable was declared as the very first line of javascript code in the `app.js` file and it was set equal to all data (which came from the `data` object instance created from the `data.js` file). The `tableData` variable passed through the `buildTable` function would then load all of the data into the website's HTML data table on their initial, unfiltered, visit to the website.



## Results

To perform a search on this webpage, a user must enter information into one of the search fields. Below is an image of the filters on the website. Upon their initial visit, a user is recommended to observe the exact text of the input fields in the unfiltered data table. If they want to perform a successful search they must enter matching text criteria in the correct format in any of the search criteria fields.

![filters](https://github.com/willmino/UFOs/blob/main/images/all_filters.png)

For example, if a user wants to find all of the UFO Sightings listed on the website that occurred in the city of El Cajon, CA, they must enter "el cajon" into the "Enter City" filter field. Below is an image which shows the correct input into the city filter field.

![filter_example](https://github.com/willmino/UFOs/blob/main/images/filter_input.png).

This specific search will yield the resulting UFO Sightings:

![el_cajon_ufo_sightings](https://github.com/willmino/UFOs/blob/main/images/el_cajon_search_results.png)

If a user wants to find all of the UFO Sightings that occurred on a specific data like 1/1/2010 (a very active UFO day), the user must enter the exact data as the string `1/1/2010`. Otherwise, the wrong date will appear in the returned results, or no UFO Sightings may be returned if the wrong format is input for the date. For example, if a user enters `1-1-2010` into the field, the website will yield zero UFO Sighting search results.

Below is an example of the wrong input a user submitted for the "Enter Date" filter criteria. Notice that zero UFO Sightings were returned because the user used dash `-` characters instead of slash `/` characters in their search query.

![wrong_date_format](https://github.com/willmino/UFOs/blob/main/images/wrong_format_search.png)

Below is an example of a successful search performed by a user because they entered the correct date format. Notice that many search results were returned. This user has plenty of information to start fortifying their conspiracy theories regarding the infamous UFO day `1/10/2010`!

![correct_date_format](https://github.com/willmino/UFOs/blob/main/images/correct_format_search.png)

## Summary

The website was successfully constructed. The `app.js` javascript file was linked in the website's HTML code. This file contained all of the javascript code necessary to generate the table I needed and display the UFO Sighting data in this table. The `data.js` source file containing a list of objects was successfully input into the HTML code of the data table on the UFO website.

### One Drawback:

One thing to note about website functionality was the way the filters appeared in relation to the description text next to each filter. Since each description of the filter had a different text length, the filters appeared offset from eachother. This was not visually appealing for the website.

### Additional Recommendations for Further Development

1. One change I already implemented for this website was to create subcolumns of space using the `col-md` layout to set an equal space to store both the description of the data table filters and the filter entry fields themselves. In this way, the appearance of the filters would be clean and more visually appealing to users.

The appearance of the original filters layout is offset and not appealing. Here's a look at the first instance of the filter description next to each filter input field:

![filters_offeset](https://github.com/willmino/UFOs/blob/main/images/all_filters.png)

I changed the appearance of the input filters section by creating a `<div class="row" />` element that wrapped around each `<li />` within the `<ul />` element that contained all of the search filters and their descriptions. Since each filter and description was now contained in its own `<div class="row">` element, I could use the `col-md` grid system from Bootstrap to separate each element from each other by equal lenth. Within every `<li />` element representing each filter, I wrapped each `<label />` element in a `<div class="col-md-8">` element and I wrapped each `<input />` element in a `<div class="col-md-4">` element. In this way, the text filter description text appeared above each filter instead of to the left of each filter. This allowed for a cleaner look for the filter input on the website. I incorporated this change into the final display for this website.

Below is a visualization of the cleaner appearance of the filters on the website.

![clean_filters](https://github.com/willmino/UFOs/blob/main/images/clean_filters.png)

2. A second change I would implement to further develop this website would be to modify the HTML code so that 





