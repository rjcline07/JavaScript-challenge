// from data.js
var tableData = data;

// getting table references
var tbody = d3.select("tbody");


// putting into webpage
tableData.forEach(function(sighting) {
    var content = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]) {
        var block = content.append("td");
        block.text(value);
    });
});

// button for webpage
var click = d3.select('#filter-btn');

//prompts search when activated
click.on('click', function() {
    
    //user entry obtained
    var entry = d3.select('.form-control');
    
    //makes it readable for data
    var date = entry.property('value');
    
    //filter according to entry
    var filter = tableData.filter(sighting => sighting.datetime == date);

    var tbody = d3.select('tbody');

    //reset webpage
    tbody.html("");

    //append data back to webpage
    filter.forEach(function(sighting){
        var content = tbody.append("tr");

        Object.entries(sighting).forEach(function([key,value]){
            var block = content.append("td");
            block.text(value);
        });
    })
});