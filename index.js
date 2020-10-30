//import { select, arc} from d3;
var Name;
var Gender;
var year;
var altitude;
var fate;
var data;
var X;
var Y;
var div;
var points;
var tempX=[];
var tempY=[];

var cord=[];

// Set the dimensions of the canvas / graph

const margin = {top: 10, right: 20, bottom: 90, left: 50};
const width = 700 - margin.left - margin.right;
const height = 570 - margin.top - margin.bottom;

//tooltip
div = d3.select("body").append("div")
     .attr("class", "tooltip-map")
     .style("opacity", 0);

//Defining the Canvas

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

// Basic Structure of the main Svg

var rectangle_pink = svg.append("rect")
                    .attr("class","rectDead")
                    .attr("x", -50)
                    .attr("y", -10)
                    .attr("width", 350)
                    .attr("height", 500);

var rectangle_green = svg_face.append("rect")
                    .attr("class","rectFate")
                    .attr("x", -50)
                    .attr("y", -10)
                    .attr("width", 700)
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
                    .style("opacity",0.2)
                    .attr("x1", 235)
                    .attr("y1", 120)
                    .attr("x2", 300)
                    .attr("y2", 20); 

var line2 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.2)
                    .attr("x1", 300)
                    .attr("y1", 20)
                    .attr("x2", 365)
                    .attr("y2", 120); 

var line3 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.2)
                    .attr("x1", 235)
                    .attr("y1", 370)
                    .attr("x2", 180)
                    .attr("y2", 450);

var line4 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.2)
                    .attr("x1", 365)
                    .attr("y1", 370)
                    .attr("x2", 420)
                    .attr("y2", 450);

var line5 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.2)
                    .attr("x1", 180)
                    .attr("y1", 450)
                    .attr("x2", 420)
                    .attr("y2", 450);



//Labels 

//Fate description

svg_face.append("text")
        .attr("y", 50)
        .attr("x", 85)
        .text("*Hover over the points on the rocket (left) to reveal the fate of the dog")
        .style("color","black")
        .style("font-size","14px")
        .style("font-weight","300");

//FATE Label

svg_face.append("text")
        .attr("y", 20)
        .attr("x", 245)
        .text("DOG'S FATE")
        .style("color","black")
        .style("font-size","24px")
        .style("font-weight","600")
        .style("text-decoration","underline");

//GENDER LABEL - Female
svg.append("text")
        .attr("y", 20)
        .attr("x", 75)
        .text("FEMALE")
        .style("color","black")
        .style("font-size","24px")
        .style("font-weight","600")
        .style("text-decoration","underline");
        
//GENDER LABEL - Male
svg.append("text")
        .attr("y", 20)
        .attr("x", 445)
        .text("MALE")
        .style("color","black")
        .style("font-size","24px")
        .style("font-weight","600")
        .style("text-decoration","underline"); 

//Atltitude label

svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 295)
        .attr("x", -285)
        .text("A L T I T U D E")
        .style("z-index", "100")
        .style("color","black")
        .style("font-size","14px")
        .style("font-weight","400"); 


    //100 label

    svg.append("text")
            .attr("transform", "rotate(90)")
            .attr("y", -305)
            .attr("x", 378)
            .text("<--100-->")
            .style("z-index", "100")
            .style("color","black")
            .style("font-size","14px")
            .style("font-weight","400"); 

    //212 label

    svg.append("text")
            .attr("transform", "rotate(90)")
            .attr("y", -305)
            .attr("x", 245)
            .text("<------212------>")
            .style("z-index", "100")
            .style("color","black")
            .style("font-size","14px")
            .style("font-weight","400"); 

    //451 label

    svg.append("text")
            .attr("transform", "rotate(90)")
            .attr("y", -305)
            .attr("x", 120)
            .text("<------451------>")
            .style("z-index", "100")
            .style("color","black")
            .style("font-size","14px")
            .style("font-weight","400"); 

    //Orbital label

    svg.append("text")
            .attr("transform", "rotate(90)")
            .attr("y", -305)
            .attr("x", 30)
            .text("<--orbital-->")
            .style("z-index", "100")
            .style("color","black")
            .style("font-size","14px")
            .style("font-weight","400"); 



// Get the data
document.addEventListener('DOMContentLoaded', function() {
   
                Promise.all([d3.csv('data/cleanData.csv')])
                        .then(function(values){
                
                data = values[0];


                data.map(function(d)
                {

                        cord.push({
                                "X":d.X,
                                "Y":d.Y,
                                "Name":d.Name,
                                "Fate":d.Fate,
                                "Altitude":d.Altitude,
                                "Year":d.Year
                        });

                })


                //Plotting the points                
                svg.append('g')
                        .selectAll("dot")
                        .data(cord)
                        .enter()
                        .append("circle")
                        .attr("cx", function (d) { return d.X} )
                        .attr("cy", function (d) { return d.Y } )
                        .attr("r", 4)
                        .style("fill","black")
                        .style("opacity",0.5)
                        .style("stroke","black")
                        .on('mouseover', function(d,i) {
                                //Setting Cyan Border and making the tooltip visible
                                d3.select(this).style("stroke", 'green').style("stroke-width", 4);
                                div.html("Dog's Name: "+d.Name+"<br> Altitude: "+d.Altitude)
                                .style("left", (d3.event.pageX + 10) + "px")
                                .style("top", (d3.event.pageY - 15) + "px")
                                .style("visibility", "visible")
                                .attr("data-html", "true");
                                if(d.Fate=='Died'){ 
                                  cry();
                                  svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 362)
                                        .text("Last Mission was in :"+" "+d.Year)
                                        .style("color","black")
                                        .style("opacity",0.5)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                
                                svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 82)
                                        .text("Name :"+" "+d.Name)
                                        .style("color","black")
                                        .style("opacity",0.5)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                }

                                else{
                                  smile();
                                

                                  svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 362)
                                        .text("Last Mission was in :"+" "+d.Year)
                                        .style("color","black")
                                        .style("opacity",0.5)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                
                                svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 82)
                                        .text("Name :"+" "+d.Name)
                                        .style("color","black")
                                        .style("opacity",0.5)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                }
                        })
                        .on('mousemove',function(d,i) {
                                d3.select(this).transition()
                                .duration('50')
                                .attr('opacity', '.85');
                          div.transition()
                                .duration(50)
                                .style("opacity", 1);
                
                                div.html("Dog's Name: "+d.Name+"<br> Altitude: "+d.Altitude)
                                     .style("left", (d3.event.pageX + 10) + "px")
                                     .style("top", (d3.event.pageY - 15) + "px");

                                
                          })
                          .on('mouseout', function(d,i) {
                                d3.select(this).style("stroke", 'black').style("stroke-width", 1);
                                div.style("visibility", "hidden");
                                svg_face.selectAll('.smiley').remove();
                                svg_face.selectAll('.fatelabel').remove();
                        });
        function smile(){
                
                svg_face.append("text")
                                .attr("class","fatelabel")
                                .attr("y", 350)
                                .attr("x", 272)
                                .text("SURVIVED")
                                .style("color","black")
                                .style("opacity",0.5)
                                .style("font-size","20px")
                                .style("font-weight","500");
                
                
                svg_face.append("circle")
                        .attr("class","smiley")
                        .attr("r",100)
                        .attr("cx",320)
                        .attr("cy",200)
                        .style("fill","rgb(224, 236, 92)");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",10)
                        .attr("cx",290)
                        .attr("cy",170)
                        .style("fill","black");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",10)
                        .attr("cx",360)
                        .attr("cy",170)
                        .style("fill","black");
                
                svg_face.append('line')
                .attr("class","smiley")
                        .style("stroke", "black")
                        .style("stroke-width", 7)
                        .style("opacity",1)
                        .attr("x1", 320)
                        .attr("y1", 190)
                        .attr("x2", 320)
                        .attr("y2", 230);
                
                svg_face.append('line')
                .attr("class","smiley")
                        .style("stroke", "black")
                        .style("stroke-width", 7)
                        .style("opacity",1)
                        .attr("x1", 320)
                        .attr("y1", 230)
                        .attr("x2", 330)
                        .attr("y2", 220);
                
                var arc = d3.arc()
                        .innerRadius(50)
                        .outerRadius(60)
                        .startAngle(Math.PI/2) //converting from degs to radians
                        .endAngle(Math.PI * 3/2); //just radians
                        
                svg_face.append("path")
                .attr("class","smiley")
                        .attr("d", arc)
                        .attr("transform", "translate(320,215)");
                
                }
                
                function cry(){
                
                svg_face.append("text")
                        .attr("class","fatelabel")
                        .attr("y", 350)
                        .attr("x", 305)
                        .text("DIED")
                        .style("color","black")
                        .style("opacity",0.5)
                        .style("font-size","20px")
                        .style("font-weight","500");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",100)
                        .attr("cx",320)
                        .attr("cy",200)
                        .style("fill","grey");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",10)
                        .attr("cx",290)
                        .attr("cy",170)
                        .style("fill","black");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",10)
                        .attr("cx",360)
                        .attr("cy",170)
                        .style("fill","black");
                
                svg_face.append('line')
                .attr("class","smiley")
                        .style("stroke", "black")
                        .style("stroke-width", 7)
                        .style("opacity",1)
                        .attr("x1", 320)
                        .attr("y1", 190)
                        .attr("x2", 320)
                        .attr("y2", 230);
                
                svg_face.append('line')
                .attr("class","smiley")
                        .style("stroke", "black")
                        .style("stroke-width", 7)
                        .style("opacity",1)
                        .attr("x1", 320)
                        .attr("y1", 230)
                        .attr("x2", 330)
                        .attr("y2", 220);
                
                var arc = d3.arc()
                        .innerRadius(50)
                        .outerRadius(60)
                        .startAngle(5.3) //converting from degs to radians
                        .endAngle(7.2); //just radians Math.PI * 3/2
                        
                svg_face.append("path")
                .attr("class","smiley")
                        .attr("d", arc)
                        .attr("transform", "translate(325,300)");
                
                }
                
                        
                })
});




