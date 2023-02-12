# UFOs

Javscript, HTML, and CSS code to display table data and dynamic filtering of the table on an HTML webpage.

## Overview
We were tasked with creating an HTML webpage to display UFO sighting data in an HTML data table. We constructed the HTML table using javascript code. The HTML script elements referenced the javascript app.js file and data.js using script elements (data.js file contained a list of objects for each UFO sighting). We also created a filtered data function that relies on an event listener to detect the changes of the user inputs into table filtering criteria. The user input filter data was stored and used to exact matching data from the initial container of all data. The resulting filtered data was then displayed on the HTML webpage.

### Analysis

#### Organization of Visual Elements
To construct the webpage in visual studio code, the basic elements of the HTML webpage were inserted by default by typing "!" and then pressing enter. 

A navbar was created at the top of the webpage because it was the first nested element in the `<body />` element of the page. Among other referenced stylings, this navbar used the boostrap referenced class `navbar-expand-lg` so that it would fit the whole width of the page whenever the page was resized. Also, the page would reset to the original `index.html` code, or default state of the website, whenver the link, "UFO Sightings" at the top of the page was clicked. The below code allowed for these capabilities:

`<nav class="navbar navbar-dark bg-dark navbar-expand-lg">`

&nbsp;&nbsp;&nbsp;&nbsp;`<a class="navbar-brand" href="index.html">UFO Sightings</a>`

Link elements to the CSS style sheets were placed in the HTML code head element.

`<link rel="stylesheet"`

`href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"`

`integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"`

`crossorigin="anonymous"/>`

`<link rel="stylesheet" href="static/css/style.css" />`

Next, a jumbotron element was inserted beneath the navbar with the "UFO Sightings" link. This jumbotron element read "The Truth is out There" because it had the text attribute with this string value.

 `<div class="jumbotron">`

&nbsp;&nbsp;&nbsp;&nbsp;`<h1 class="display-4">The Truth is Out There</h1>`

&nbsp;&nbsp;`</div>`

There are CSS and bootstrap styling referenced through the webpage. More commonly, boostrap stylings are referenced using classes such as `container-fluid`, `col-md`, and `bg-dark`. The general structure of the organization of the HTML elements on the webpage made use of the `col-md` layout which when nested in a row element will split the row of the webpage into twelve equal units of space. When incorporating the classes `cold-md-4` in one division with a `col-md-8` class in the other division, we allocate 4 of these columns to the division element and 8 of these columns to the second division element. Within each of these division elements, for this example we included the header element:

`<h3>UFO Sightings: Fact or Fancy? <small>Ufologists weigh in</small></h3>` 

In the division with the `col-md-8` class, we included a paragraph body of text.

`<div class="container-fluid">`

&nbsp;&nbsp;&nbsp;&nbsp;`<div class="row">`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="col-md-4 article-title">`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<div class="col-md-8 article-p">`

Another use of the `col-md` organization of the webpage elements was to include the filter search criteria for user inputs in a division with a `col-md-3` class. The actual table itself was included in a division with class `col-md-9` in the same division with a row class as the first element.

This was the essentially the organization of all the visual elements on the website.

#### Breakdown of the Data Table and Dynamic Filtering with Javascript




### Results

