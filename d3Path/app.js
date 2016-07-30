
var w = 1000;
var h = 600;
var data = [
    {x:10, y:20},
    {x:40, y:60},
    {x:50, y:70},
]
var canvas = d3.select("body")
    .append("svg")
    .attr('class','chart')
    .attr('width',w)
    .attr('height',h);
var group = canvas.append('g')
    .attr('transform','translate(100,100)')

var line = d3.line()
    .x(function(d){ return d.x })
    .y(function(d){ return d.y })

group.selectAll('path')
    .data([data])
    .enter()
    .append('path')
    .attr('d',line)
    .attr('fill','none')
    .attr('stroke','#000')
    .attr('stroke-width','10')