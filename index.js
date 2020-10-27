var name;
var gender;
var year;
var altitude;
var fate;

// Set the dimensions of the canvas / graph

const margin = {top: 10, right: 20, bottom: 50, left: 50};
const width = 700 - margin.left - margin.right;
const height = 570 - margin.top - margin.bottom;

var svg = d3.select(".main").append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                           .append("g")
                           .attr("transform", `translate(${margin.left},${margin.top})`);    

var svg = d3.select(".face").append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                           .append("g")
                           .attr("transform", `translate(${margin.left},${margin.top})`);

// Get the data
var data = d3.csv("data/cleanData.csv").then(data => {

    // format the data such that strings are converted to their appropriate types
    data.forEach(function(d) {
        name = d.Name;
        gender = d.Gender;
        year = +d.Year
        altitude = +d.Altitude;
        fate = d.Fate
    })})
    
console.log(data.name);