// from data.js
var tableData = data;

// YOUR CODE HERE!

// getting table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear anything existing
    tbody.html("");

    //loop and append
    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        //looping and adding as table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
            }
        );
    });
}

function handleClick() {

    //getting datetime value
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if date was entered, filtering to keep matching values
    if (date) {
        filteredData = filteredData.filter(row => row.datetime == date);
    }

    //rebuild using filtered values where if no date entered just original value
    buildTable(filteredData);
}