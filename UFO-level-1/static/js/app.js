// from data.js
var tableData = data;

// Use D3 to select the table 
var table = d3.select("ufo-tables");

// use d3 to create a bootstrap 
var tbody = d3.select("tbody");

// Function to initialize 
// Loop through data and fill up values in table, Using arrow Function
function initialize(){
    tbody.html("");
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

// Call funciton
initialize();

// get reference to the button on the page with id propetry
var button = d3.select("#filter-btn");

// get reference to the input elment 
var inputField = d3.select("#datetime");


button.on("click",function() {
    
    //Get filtered data base on input value
    var inputValue = inputField.property("value")
    
    // Conditional if empty then show starting data else filter base on input
    if (inputValue === "") {
        initialize()
    } else {
        // remove any children from the list to
        tbody.html("");
        var filteredData = tableData.filter(report => report.datetime === inputValue);
        // Loop through filtered data and fill up values in table, Using arrow Function
         filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
            Object.entries(ufoReport).forEach(([key,value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })
    }

    
})