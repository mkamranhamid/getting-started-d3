
console.log('file is working');
var newData = [];
d3.json('users.json', function (data) {
    console.log(data);
    for(var i in data){
        newData.push(data[i])
    }
    var canvas = d3.select('body').append('svg')
        .classed('chart',true)
        .attr('width',600)
        .attr('height',600)
    canvas.selectAll('rect')
        .data(newData)
        .enter()
            .append('rect')
            .attr('width',function(d){return d.age})
            .attr('height', 48)
            .attr('y',function(d,i){return i*50;})
            .attr('fill', '#3c5d73')
    canvas.selectAll('text')
        .data(newData)
        .enter()
            .append('text')
            .attr('fill','#fff')
            .attr('y', function (d,i) { return i*50 + 27})
            .text(function (d,i) { return d.name})
})
