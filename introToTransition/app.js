
console.log('file is working')
var w = 1000;
var h = 600;
var margin = {
    left:20,
    right:20,
    top:20,
    bottom:20
}
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;
var arr = [10];
var canvas = d3.select("body")
    .append("svg")
    .attr('class','chart')
    .attr('width',w)
    .attr('height',h);
var circle = canvas.append('circle')
                .attr('cx',50)
                .attr('cy',100)
                .attr('r',25);
var circle1 = canvas.append('circle')
                .attr('cx',550)
                .attr('cy',100)
                .attr('r',25);
 var circles = canvas.selectAll("circle")
    .data(arr)
     .attr('fill',"red")
     .exit()
        .attr('fill',"green")
    /*.enter()
    .append("circle")
    .attr('cx',150)
    .attr('cy',50)
    .attr('fill',"green")
    .attr('r',25)*/
circle.transition()
    .duration(3000)
    .attr('cx',550)
    .on('end', function () {
        d3.select(this).attr('fill','brown')
    })
circle1.transition()
    .duration(1000)
    .attr('cy',250)
    .on('end', function () {
        d3.select(this).attr('fill','yellow')
    })