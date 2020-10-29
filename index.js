//import { select, arc} from d3;
var Name;
var Gender;
var year;
var altitude;
var fate;
var data;
var X;
var Y;
var points;
var tempX=[];
var tempY=[];

var cord=[];

// Set the dimensions of the canvas / graph

const margin = {top: 10, right: 20, bottom: 50, left: 50};
const width = 700 - margin.left - margin.right;
const height = 570 - margin.top - margin.bottom;

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



//Labels in the main SVG

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
                                "Gender":d.Gender
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
                        .style("stroke","black");

                        
                })
});



smile();

function smile(){
        console.log(data);
    svg_face.append("circle")
            .attr("r",100)
            .attr("cx",320)
            .attr("cy",200)
            .style("fill","yellow");

    svg_face.append("circle")
            .attr("r",10)
            .attr("cx",290)
            .attr("cy",170)
            .style("fill","black");
    
    svg_face.append("circle")
            .attr("r",10)
            .attr("cx",360)
            .attr("cy",170)
            .style("fill","black");

    svg_face.append('line')
            .style("stroke", "black")
            .style("stroke-width", 7)
            .style("opacity",1)
            .attr("x1", 320)
            .attr("y1", 190)
            .attr("x2", 320)
            .attr("y2", 230);

    svg_face.append('line')
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
            .attr("d", arc)
            .attr("transform", "translate(320,215)");

}

function cry(){
    svg_face.append("circle")
            .attr("r",100)
            .attr("cx",320)
            .attr("cy",200)
            .style("fill","grey");

    svg_face.append("circle")
            .attr("r",10)
            .attr("cx",290)
            .attr("cy",170)
            .style("fill","black");
    
    svg_face.append("circle")
            .attr("r",10)
            .attr("cx",360)
            .attr("cy",170)
            .style("fill","black");

    svg_face.append('line')
            .style("stroke", "black")
            .style("stroke-width", 7)
            .style("opacity",1)
            .attr("x1", 320)
            .attr("y1", 190)
            .attr("x2", 320)
            .attr("y2", 230);

    svg_face.append('line')
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
            .attr("d", arc)
            .attr("transform", "translate(325,300)");

}




// //Male - 100

//         //Dezik
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",340)
//                     .attr("cy",450)
//                     .style("fill","blue");
            
//         //Gypsy
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",355)
//                     .attr("cy",450)
//                     .style("fill","blue");

//         //siskin
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",370)
//                     .attr("cy",450)
//                     .style("fill","blue");

//         //Little bear
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",385)
//                     .attr("cy",450)
//                     .style("fill","blue");

//         //Ginger
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",400)
//                     .attr("cy",450)
//                     .style("fill","blue");

//         //Courageous
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",418)
//                     .attr("cy",450)
//                     .style("fill","blue");

//         //Scamp
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",406)
//                     .attr("cy",429)
//                     .style("fill","blue");

//         //Bobik
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",394)
//                     .attr("cy",413)
//                     .style("fill","blue");

//         //Ginger II
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",381)
//                     .attr("cy",394)
//                     .style("fill","blue");


//         //Little bear II
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",372)
//                     .attr("cy",380)
//                     .style("fill","blue");
                
//  //Male - 212

//         //Small fry
//         svg.append("circle")
//                 .attr("r",4)
//                 .attr("cx",366)
//                 .attr("cy",305)
//                 .style("fill","blue");

// // Male 451

//         //Fluffy
//         svg.append("circle")
//                 .attr("r",4)
//                 .attr("cx",366)
//                 .attr("cy",180)
//                 .style("fill","blue");

// // Male Orbital

//         //Little Piece of Coal
//         svg.append("circle")
//                 .attr("r",4)
//                 .attr("cx",353)
//                 .attr("cy",100)
//                 .style("fill","blue");

//         //Little Wind
//         svg.append("circle")
//                 .attr("r",4)
//                 .attr("cx",339)
//                 .attr("cy",80)
//                 .style("fill","blue");


// //Female - 100

//         //fox
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",228)
//                     .attr("cy",380)
//                     .style("fill","red");

//         //fox II
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",218)
//                     .attr("cy",394)
//                     .style("fill","red");

//         //Little lady
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",206)
//                     .attr("cy",413)
//                     .style("fill","red");

//         //Rita
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",195)
//                     .attr("cy",429)
//                     .style("fill","red");
        
//         //Linda
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",181)
//                     .attr("cy",450)
//                     .style("fill","red");

//         //Bulba
//         svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",200)
//                     .attr("cy",450)
//                     .style("fill","red");

//          //Little one
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",215)
//                     .attr("cy",450)
//                     .style("fill","red");

//          //Whitey
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",230)
//                     .attr("cy",450)
//                     .style("fill","red");    

// //Female 212

//          //Dzhoyna
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",360)
//                     .style("fill","red");    

//          //Redhead
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",340)
//                     .style("fill","red"); 

//          //Fashionable
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",320)
//                     .style("fill","red"); 

//          //Bitter
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",300)
//                     .style("fill","red");

//          //Palm II
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",280)
//                     .style("fill","red");

//          //Snowflake
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",260)
//                     .style("fill","red");

// //Female 451

//          //Button
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",220)
//                     .style("fill","red");

//          //Palm
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",200)
//                     .style("fill","red");

//          //Little Whitey
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",180)
//                     .style("fill","red");

//          //Spotted
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",160)
//                     .style("fill","red");

//          //Zhulba
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",140)
//                     .style("fill","red");


// //Female Orbital

//          //Squirrel
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",287)
//                     .attr("cy",40)
//                     .style("fill","red");

//          //Barker
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",277)
//                     .attr("cy",55)
//                     .style("fill","red");

//          //Little Fox
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",267)
//                     .attr("cy",70)
//                     .style("fill","red");

//          //Panther
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",257)
//                     .attr("cy",85)
//                     .style("fill","red");

//          //Little Arrow
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",247)
//                     .attr("cy",100)
//                     .style("fill","red");

//          //Little Fly
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",235)
//                     .attr("cy",118)
//                     .style("fill","red");

//          //Little Bee
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",247)
//                     .attr("cy",118)
//                     .style("fill","red");

//          //Joke
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",262)
//                     .attr("cy",118)
//                     .style("fill","red");

//          //Blackie
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",277)
//                     .attr("cy",118)
//                     .style("fill","red");

//          //Comet
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",292)
//                     .attr("cy",118)
//                     .style("fill","red");

//          //Little star
//          svg.append("circle")
//                     .attr("r",4)
//                     .attr("cx",295)
//                     .attr("cy",27)
//                     .style("fill","transparent")
//                     .style("opacity","1")
//                     .style("stroke","black");