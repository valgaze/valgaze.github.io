var array = [{"name":"t shirt","type":"shirt"},{"name":"t shirt","type":"shirt"},{"name":"fancy shirt","type":"shirt"},{"name":"Collared Shirt","type":"shirt"},{"name":"Leather jacket","type":"jacket"},{"name":"Sandals","type":"footwear"},{"name":"Leather jacket","type":"jacket"},{"name":"Sunglasses","type":"gear"}];


function countFunc (array){
    var result = [];
    var keeper = {};

    for (var i = 0; i < array.length; i++){
      keeper[array[i].name] = {count: 0, name:array[i].name, type: array[i].type};
    }

    for (var i = 0; i < array.length; i++){
      keeper[array[i].name].count++;
    }

    for (var key in keeper){
      result.push(keeper[key]);
    }
    return result;
}

console.log("hmm", countFunc(array));

function groupByType (array){
    var keeper = {};

    for (var i = 0; i < array.length; i++){
      keeper[array[i].type] = [];
    }

    for (var key in keeper){
      for (var i = 0; i < array.length; i++){
        if (array[i].type === key){
          keeper[key].push(array[i])
        }
      }
    }

    return keeper;
}
console.log(groupByType(countFunc(array)));


groupByType(countFunc(array));

function finalCleanUp (obj){
    var keeper = {};
    var result = [];

    for (var key in obj){
        var ref = key;
        var prep = {ref: key}
        console.log(prep)
    }

    return result;
}

function lifeEasy (array){
  var output = [];

  for (var i = 0; i < array.length; i++){


  }

}

console.log("done", finalCleanUp(groupByType(countFunc(array))));