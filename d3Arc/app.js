var w = 1500;
var h = 1500;
var data = [10,50,80];

var color = d3.scaleOrdinal()
    .range(['red','orange','blue'])
var canvas = d3.select("body")
    .append("svg")
    .attr('class','chart')
    .attr('width',w)
    .attr('height',h);

var group = canvas.append('g')
    .attr('transform','translate(300,300)');
//to increase the size of cicle, increase radius
var r = 300;
var p = Math.PI * 2;

var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(r);

var pie = d3.pie()
    .value(function (d) { return d; });

var arcs = group.selectAll('.arc')
    .data(pie(data))
    .enter()
    .append('g')
    .attr('class','arc');
arcs.append('path')
    .attr('d',arc)
    .attr('fill',function(d){ return color(d.data)})
arcs.append('text')
    .attr('transform',function(d){ return 'translate('+ arc.centroid(d) + ')';})
    .attr('text-anchor','middle')
    .attr('font-size','1.5em')
    .attr('fill','#fff')
    .text(function(d){return d.data;});