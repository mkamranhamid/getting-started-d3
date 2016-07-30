var w = 1000;
var h = 600;
var canvas = d3.select("body")
    .append("svg")
    .attr('class','chart')
    .attr('width',w)
    .attr('height',h);

var group = canvas.append('g')
    .attr('transform','translate(500,300)');
//to increase the size of cicle, increase radius
var r = 200;
var p = Math.PI * 2;

var arc = d3.arc()
    .innerRadius(r - 20)
    .outerRadius(r)
    .startAngle(0)
    .endAngle(p)

group.append('path')
    .attr('d',arc)