// //Assign the  data from data.js to a variable
var sightings = data;


//======filter data by date===============================================================
//Select the submit button
var submit = d3.select("#filter-btn");

//Complete the click handler for the form
submit.on("click", function(){
    
    //Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
    //Get the value property of the input element
	var inputValue = inputElement.property("value")
	console.log(inputValue);
	console.log(sightings);

    //Use the form input to filter the data by date
	var filterData = sightings.filter(sightings=>sightings.datetime == inputValue);
	console.log(filterData);


});


//var sightings = data;


//======filter data by multiple search criteria===============================================================
//Select the submit button
// var submit = d3.select("#filter-btn");

// //Complete the click handler for the form
// submit.on("click", function(){
    
//     //Prevent the page from refreshing
//     d3.event.preventDefault();
    
//     // Select the input element and get the raw HTML node
//     var date_inputElement = d3.select("#datetime");
//     var city_inputElement = d3.select("#city");
//     var state_inputElement = d3.select("#state");
//     var shape_inputElement = d3.select("#shape");

//     //Get the value property of the input element
//     var date_inputValue = date_inputElement.property("value")
//     var city_inputValue = city_inputElement.property("value")
//     var state_inputValue = state_inputElement.property("value")
//     var shape_inputValue = shape_inputElement.property("value")

//     console.log(date_inputValue);
//     console.log(city_inputValue);
//     console.log(state_inputValue);
//     console.log(shape_inputValue);
//     console.log(sightings);

//     //Use the form input to filter the data by date
//     var date_filterData = sightings.filter(sightings=>sightings.datetime == date_inputValue);
//     var city_filterData = sightings.filter(sightings=>sightings.city == city_inputValue);
//     var state_filterData = sightings.filter(sightings=>sightings.state == state_inputValue);
//     var shape_filterData = sightings.filter(sightings=>sightings.shape == shape_inputValue);
    
//     console.log(date_filterData);
//     console.log(city_filterData);
//     console.log(state_filterData);
//     console.log(shape_filterData);


// });