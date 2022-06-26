// from data.js
var tableData = data;

// YOUR CODE HERE!
// console.log(tableData)

//Get info from data.js 

// Use D3 to select the table 
var table = d3.select("ufo-tables");

// use d3 to create a bootrap 
var tbody = d3.select("tbody");

 /*
// Use 'Object.entries' to console.log each weater report value
tableData.forEach(function(ufoReport){
    //console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        //console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    })
});
*/

// Using arrow Function 
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    })
})

// get reference to the button on the page with id propetry
var button = d3.select("#filter-btn");

// get reference to the input elment 
var inputField = d3.select("#datetime");

function handleClick() {
    console.log("test 123");
    
    // use d3 to see the object that dispatched the event 
    console.log(d3.event.target)
}

button.on("click",function() {
    console.log("test")
})