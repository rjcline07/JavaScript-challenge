// from data.js
var tableData = data;

// getting table references
var tbody = d3.select("tbody");

tableData.forEach(function(UFOReport) {
    var content = tbody.append("tr");

    Object.values(UFOReport).forEach(function([key,value]) {
        var block = content.append("td");
        block.text(value);
    });
});

function onbutton() {

    //getting datetime value
    var entry = d3.select("#datetime").property("value");
    var filtered = tableData;

    //check to see if date was entered, filtering to keep matching values
    if (entry) {filtered = filtered.filter(row => row.datetime == entry)}

    //rebuild using filtered values where if no date entered just original value
    buildTable(filtered);
};

//activates event for filter button
d3.selectAll("#filter-btn").on("click", onbutton);

//builds on page launch
buildTable(tableData);