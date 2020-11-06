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
const height = 530 - margin.top - margin.bottom;

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

var svg_face = d3.select(".main").append("svg")
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
                    .attr("height", 500)
                    .style("stroke","black");

var rectangle_green = svg_face.append("rect")
                    .attr("class","rectFate")
                    .attr("x", -50)
                    .attr("y", -10)
                    .attr("width", 700)
                    .attr("height", 500)
                    .style("stroke","black");

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
                    .style("opacity",0.5)
                    .attr("x1", 235)
                    .attr("y1", 120)
                    .attr("x2", 300)
                    .attr("y2", 20); 

var line2 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 300)
                    .attr("y1", 20)
                    .attr("x2", 365)
                    .attr("y2", 120); 

var line3 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 235)
                    .attr("y1", 370)
                    .attr("x2", 180)
                    .attr("y2", 450);

var line4 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 365)
                    .attr("y1", 370)
                    .attr("x2", 420)
                    .attr("y2", 450);

var line5 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 180)
                    .attr("y1", 450)
                    .attr("x2", 420)
                    .attr("y2", 450);



//Labels 

var line6 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 20)
                    .attr("x2", 210)
                    .attr("y2", 126);

var line7 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 20)
                    .attr("x2", 220)
                    .attr("y2", 20);

var line8 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 126)
                    .attr("x2", 220)
                    .attr("y2", 126);

var line9 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 73)
                    .attr("x2", 200)
                    .attr("y2", 73);

svg.append("text")
        .attr("y", 78)
        .attr("x", 150)
        .text("Orbital")
        .style("z-index", "100")
        .style("color","black")
        .style("font-size","16px")
        .style("font-weight","400"); 


var line10 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 410)
        .attr("y1", 125)
        .attr("x2", 410)
        .attr("y2", 246);

var line11 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 410)
        .attr("y1", 125)
        .attr("x2", 400)
        .attr("y2", 125);

var line12 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 410)
        .attr("y1", 246)
        .attr("x2", 400)
        .attr("y2", 246);

var line13 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 410)
        .attr("y1", 185)
        .attr("x2", 420)
        .attr("y2", 185);

svg.append("text")
//.attr("transform", "rotate(90)")
.attr("y", 190)
.attr("x", 430)
.text("451 KM")
.style("z-index", "100")
.style("color","black")
.style("font-size","16px")
.style("font-weight","400"); 


var line14 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 250)
                    .attr("x2", 210)
                    .attr("y2", 366);

var line15 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 250)
                    .attr("x2", 220)
                    .attr("y2", 250);

var line16 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 366)
                    .attr("x2", 220)
                    .attr("y2", 366);

var line17 = svg.append('line')
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .style("opacity",0.5)
                    .attr("x1", 210)
                    .attr("y1", 308)
                    .attr("x2", 200)
                    .attr("y2", 308);

svg.append("text")
        .attr("y", 313)
        .attr("x", 140)
        .text("212 KM")
        .style("z-index", "100")
        .style("color","black")
        .style("font-size","16px")
        .style("font-weight","400");
        
var line18 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 460)
        .attr("y1", 365)
        .attr("x2", 460)
        .attr("y2", 456);

var line19 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 460)
        .attr("y1", 365)
        .attr("x2", 450)
        .attr("y2", 365);

var line20 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 460)
        .attr("y1", 456)
        .attr("x2", 450)
        .attr("y2", 456);

var line21 = svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .style("opacity",0.5)
        .attr("x1", 460)
        .attr("y1", 410)
        .attr("x2", 470)
        .attr("y2", 410);

svg.append("text")
.attr("y", 415)
.attr("x", 480)
.text("100 KM")
.style("z-index", "100")
.style("color","black")
.style("font-size","16px")
.style("font-weight","400"); 

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
        .style("font-weight","600");

//GENDER LABEL - Female
svg.append("text")
        .attr("y", 20)
        .attr("x", 75)
        .text("FEMALE")
        .style("color","black")
        .style("font-size","24px")
        .style("font-weight","600");
        
//GENDER LABEL - Male
svg.append("text")
        .attr("y", 20)
        .attr("x", 445)
        .text("MALE")
        .style("color","black")
        .style("font-size","24px")
        .style("font-weight","600"); 

//Atltitude label

svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 295)
        .attr("x", -335)
        .text("< - - - A L T I T U D E - - - >")
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
                                        .style("opacity",1)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                
                                svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 82)
                                        .text("Name :"+" "+d.Name)
                                        .style("color","black")
                                        .style("opacity",1)
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
                                        .style("opacity",1)
                                        .style("font-size","20px")
                                        .style("font-weight","500");
                                
                                svg_face.append("text")
                                        .attr("class","fatelabel")
                                        .attr("y", 470)
                                        .attr("x", 82)
                                        .text("Name :"+" "+d.Name)
                                        .style("color","black")
                                        .style("opacity",1)
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
                                .attr("x", 276)
                                .text("SURVIVED")
                                .style("color","black")
                                .style("opacity",1)
                                .style("font-size","20px")
                                .style("font-weight","500");
                
                
                svg_face.append("circle")
                        .attr("class","smiley")
                        .attr("r",100)
                        .attr("cx",320)
                        .attr("cy",200)
                        .style("fill","rgb(236, 224, 92)")
                        .style("stroke",'black')
                        .style("stroke-width",2);
                
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
                        .style("opacity",1)
                        .style("font-size","20px")
                        .style("font-weight","500");
                
                svg_face.append("circle")
                .attr("class","smiley")
                        .attr("r",100)
                        .attr("cx",320)
                        .attr("cy",200)
                        .style("fill","rgb(236, 224, 92)")
                        .style("stroke",'black')
                        .style("stroke-width",2);
                
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




