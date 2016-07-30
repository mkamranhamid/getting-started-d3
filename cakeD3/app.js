var flow_shapes = function(height, width) {
        var points = [ [0,height*2.05], [width*0,-15], [width,9], [width,height*2.5], [0,height*2] ];
        return d3.line()(points);
    }
var r = 300;
var color = d3.scaleOrdinal()
    .range(['red','orange','blue'])
var nodes = [
    //{NodeType: "prep", x:50, y:50,  height:40, width: 160},
    {x:20, y:125, height:60, width: 260, text: 'hello 01'},
    {x:20, y:220, height:60, width: 260, text: 'hello 02'},
    {x:20, y:325, height:60, width: 260, text: 'hello 03'}
    //{NodeType: "io",   x:20, y:225, height:20, width: 260},
    //{NodeType: "io",   x:20, y:325, height:10, width: 260},
]
var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(r);
svg = d3.select("body").append("svg:svg").attr("width", 600).attr("height", 600)

var chart = svg.selectAll("path")
    .data(nodes)
    .enter()
    .append("svg:path")
    .attr("d", function(d) { return flow_shapes(d.height, d.width);})
    .attr("stroke", "black")
    .attr("stroke-width", '10')
    .attr("stroke-linejoin", 'round')
    .attr("fill", function(d){ return color(d.data)})
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")"
    });
chart.append('text')
    .attr('text-anchor','middle')
    .attr('font-size','1.5em')
    .attr('fill','#fff')
    .text(function(d){return d.text;});