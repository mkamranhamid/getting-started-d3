
var arr = [44,84,65,44,52,55,55,78,81,36,46,95];
var arrMaxValue = d3.max(arr); //max/min for getting maximun/minimum number from an array
var arrMinValue = d3.min(arr);
var arrloHiValue = d3.extent(arr);
//console.log(arrMinValue,arrMaxValue,arrloHiValue);

//for getting min/max from array of objects
var arrObjs = [
    {name:'kakaA',id:5},
    {name:'kakaB',id:45},
    {name:'kakaC',id:15},
    {name:'kakaD',id:54},
    {name:'kakaE',id:35},
    {name:'kakaF',id:175},
    {name:'kakaG',id:57},
    {name:'kakaH',id:751},
    {name:'kakaI',id:25}
];

var arrObjMinValue = d3.min(arrObjs, function (val) {
    return val.id;
});
var arrObjMaxValue = d3.max(arrObjs, function (val) {
    return val.id;
});
var arrObjLoHiValue = d3.extent(arrObjs, function (val) {
    return val.id;
});
console.log(arrObjMinValue,arrObjMaxValue,arrObjLoHiValue);