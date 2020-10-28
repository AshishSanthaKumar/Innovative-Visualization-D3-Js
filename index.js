var name;
var gender;
var year;
var altitude;
var fate;
var data;


// Set the dimensions of the canvas / graph

const margin = {top: 10, right: 20, bottom: 50, left: 50};
const width = 700 - margin.left - margin.right;
const height = 570 - margin.top - margin.bottom;

var svg = d3.select(".main").append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                           .append("g")
                           .attr("transform", `translate(${margin.left},${margin.top})`);    

var svg_face = d3.select(".face").append("svg")
                           .attr("width", width + margin.left + margin.right)
                           .attr("height", height + margin.top + margin.bottom)
                           .append("g")
                           .attr("transform", `translate(${margin.left},${margin.top})`);

// Get the data
document.addEventListener('DOMContentLoaded', function() {
   
    // Load both files before doing anything else
    Promise.all([d3.csv('data/cleanData.csv')])
            .then(function(values){
      
      data = values[0];
      console.log(data);
    })
  
  });

var rectangle_pink = svg.append("rect")
                    .attr("class","rectDead")
                    .attr("x", -50)
                    .attr("y", -10)
                    .attr("width", 350)
                    .attr("height", 500);

var rectangle_blue = svg.append("rect")
                    .attr("class","rectAlive")
                    .attr("x", 300)
                    .attr("y", -10)
                    .attr("width", 350)
                    .attr("height", 500);



var rectangle_rocket = svg.append("rect")
                    .attr("class","rocket")
                    .attr("x", 235)
                    .attr("y", 120)
                    .attr("width", 130)
                    .attr("height", 250);

 var line1 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.1)
                    .attr("x1", 235)
                    .attr("y1", 120)
                    .attr("x2", 300)
                    .attr("y2", 20); 

var line2 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.1)
                    .attr("x1", 300)
                    .attr("y1", 20)
                    .attr("x2", 365)
                    .attr("y2", 120); 

var line3 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.1)
                    .attr("x1", 235)
                    .attr("y1", 370)
                    .attr("x2", 180)
                    .attr("y2", 450);

var line4 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.1)
                    .attr("x1", 365)
                    .attr("y1", 370)
                    .attr("x2", 420)
                    .attr("y2", 450);

var line5 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.1)
                    .attr("x1", 180)
                    .attr("y1", 450)
                    .attr("x2", 420)
                    .attr("y2", 450);



                
 






