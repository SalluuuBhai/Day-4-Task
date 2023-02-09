// 1.How to compare two JSON have the same properties without order?
//  a. let obj1 = { name: "person 1", age:5 };
//  b. let obj2 = { age:5, name: "person 1" };

let obj1 = { name: "person 1", age:5 };
let obj2 = { age:5, name: "person 1" };

let same =true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            same=false;
            break;
        }
    }
}
else {
    same=false;
}
console.log("is object equal "+ same);


//2.Use the rest countries API

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result = JSON.parse(request.response);
    console.log(result);
   for(let i of result){
    console.log(i.name.common,);
    console.log(i.region);
    console.log(i.subregion);
    console.log(i.population);
   
}
}


