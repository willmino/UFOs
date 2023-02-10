// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value as a table cell (td).
    //The Object represents the data type of objects (pythonic equivalent of dictionaries. We are creating a dataRow for each object)
    // In the below first line, the values() function passes in a dataRow and it creates an array (pythonic equivalent of a list) of
    // values. 
    // Then, when the array (list of values for each row) is created, the forEach function is chained to it. This fuction
    // passes val through it, meaning that for each iteration variable in the array per row, aka each list element,
    // we will let the variable 'cell' be equal to the act of appending a 'td' element to the row variable we created earlier.

    // Short and sweet explanation: for each dataRow being each Object, and for each val in that dataRow ("tr" element), we are
    // going to append a "td" element to the "tr" element. In other words, we are making a "td" element for every list element created
    // by the values(dataRow) function and append that element to each "tr" element. Also, we are going to create a text attibute
    // in each cell we created, and make that text attribute equal to each val in each Object.values(dataRow)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
