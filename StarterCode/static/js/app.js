// from data.js
//Get reference to the table body
var tableData = d3.select("tbody");

//Print the data from data.js
//console.log(data);

//Loop through the data and print each object
// data.forEach(function(ufoReport){
// 	console.log(ufoReport);
// })

//Loop through the data and print each object
data.forEach(function(ufoReport) {
	console.log(ufoReport);
	
	//Use d3 to append row for each object
	var row = tableData.append("tr");

	//Use Object.entries to print keys and values from the data
	Object.entries(ufoReport).forEach(function([key,value]){
	console.log(key,value);

	//Append a cell to the row for each value
	var cell = tableData.append("td");
	cell.text(value);
	});
});
//====================================================================================



