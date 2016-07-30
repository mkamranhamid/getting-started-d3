
console.log('file is working')
var w = 600;
var h = 600;
var margin = {
    left:20,
    right:20,
    top:20,
    bottom:20
}
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;
//var arr = [44,84,65,44,52,55,55,78,81,36,46,95];
var arrObjs = [
    {name:'kakaA',id:115},
    {name:'kakaB',id:355},
    {name:'kakaC',id:135},
    {name:'kakaD',id:320},
    {name:'kakaE',id:305},
    {name:'kakaF',id:175},
    {name:'kakaG',id:157},
    {name:'kakaH',id:260},
    {name:'kakaI',id:205}
];
var x = d3.scaleLinear()
    .domain([0, d3.max(arrObjs, function (val) {
        return val.id;
    })])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0,arrObjs.length])
    .range([0,height]);
var svg = d3.select("body").append("svg")
            .attr('class','chart')
            .attr('width',w)
            .attr('height',h);
var chart = svg.append('g')
    .classed('display',true)
    .attr('transform',"translate("+ margin.left +","+ margin.top +")")

function plot(params){
    this.selectAll('.bar')
        .data(params.data)
        .enter()
        .append('rect')
        .classed('bar',true)    //.attr('class','bar')
        .attr('x',0)
        .attr('y',function(val,i){
            return y(i);
        })
        .attr('width',function(val,i){
            return x(val.id);
        })
        .attr('height', function (val, i) {
            return y(1)-1
        })
    this.selectAll('bar-label')
        .data(params.data)
        .enter()
        .append('text')
        .classed('bar-label',true)
        .attr('x',function(val,i){
            return x(val.id);
        })
        .attr('y',function(val,i){
            return y(i);
        })
        .attr('dy',function(val,i){
            return y(1)/1.5+2;
        })
        .attr('dx',-30)
        .text(function(val,i){
            return val.name;
        })
}
plot.call(chart,{data:arrObjs})