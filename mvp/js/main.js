var app = angular.module('packpro', ['underscore']);

app.controller('dayLabelController', ['$scope', '$location', function($scope, $location) {
    var getQueryVariable = function(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
     };

     $scope.today = new Date(decodeURIComponent(getQueryVariable("date")));

}]);


app.directive("addbuttons", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
      console.log("ref", element[0].previousElementSibling)
      angular.element(element[0].previousElementSibling).append($compile("<select-tool></select-tool>")(scope));
    });
  };
});


app.directive("daycreatorbutton", function($compile){
  return function(scope, element, attrs){
    element.bind("click", function(){
       console.log("meww");
      angular.element(".newDays").append($compile("<day-tool></day-tool>")(scope));
    });
  };
});

app.controller('clothesController', ['$scope', 'myService', 'dataSource', function($scope, myService, dataSource) {
   $scope.items = dataSource.populateItems();

    $scope.update = function(previousValue){
       var ref = previousValue;
       if (previousValue){
         myService.sendData($scope.currentItem, previousValue);
       }else{
          myService.sendData($scope.currentItem);
       }

    };

    $scope.currentItem = "";

}]);

app.service('myService', function($rootScope) {
    var gatheredData = [];
    var organizedData = [];
    return {
      gatheredData: gatheredData,
      sendData: function(data, previousValue) {
        if (previousValue){

          for (var i = 0; i < gatheredData.length; i++){
            if (gatheredData[i].name === previousValue.name){
              gatheredData.splice(i, 1);
              break;
            }
          }
        }
        gatheredData.push(data); //This isn't good b/c it's not a live reference
          $rootScope.$broadcast("item.updated", gatheredData);
      },
      getData: function() {
        return gatheredData;
      },
      cleanData: function(array){
         var keeper = {};

          for (var i = 0; i < array.length; i++){
            keeper[array[i].type] = [];
          }

          for (var key in keeper){
            for (var i = 0; i < array.length; i++){
              if (array[i].type === key){
                keeper[key].push(array[i]);
              }
            }
          }
          return keeper;
      },
      showData: function(){
        return gatheredData;
      },
      countData:  function(){
        return gatheredData;
      }
    }
});

app.controller('displayController', ['$scope', 'myService', function($scope, myService) {
  $scope.everything = myService.gatheredData;

}]);


var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});


app.controller('summaryController', ['$scope', 'myService', '_', function($scope, myService, _) {

  $scope.$on("item.updated", function(e, data){
    var raw = data;
    var grouped = _.groupBy(data,"type");
      console.log("grouped", grouped);

    var indexed = _.indexBy(data,"type");
      console.log("indexed", indexed);
    var counted = _.countBy(data, "name");
      console.log("counted", counted);
    console.log("*******");
    $scope.theData = (_.countBy(data, "name"));
    $scope.raw = raw;
  });

}]);

app.service("dataSource", function(){
      return {
      populateItems: function(){
          return  [
              {name:'--Shirts--',  notAnOption: true},
                {name:'t shirt', type:'shirt'},
                {name:'fancy shirt', type:'shirt'},
                {name:'Collared Shirt', type:'shirt'},
              {name:'--Pants--', type:'pant', notAnOption: true},
                {name:'Jean', type:'pant'},
                {name:'Fancy pants', type:'pant'},
              {name:'--Jackets-', type:'jacket', notAnOption: true},
                {name:'Leather jacket', type:'jacket'},
                {name:'Dinner jacket', type:'jacket'},
                {name:'Fancy jacket', type:'jacket'},
              {name:'--Footwear-', type:'footwear', notAnOption: true},
                {name:'Sneakers', type:'footwear'},
                {name:'Sandals', type:'footwear'},
                {name:'Fancy shoe', type:'footwear'},
              {name:'--Gear (various)---', type:'gear', notAnOption: true},
                {name:'Toothbrush + toothpaste', type:'gear'},
                {name:'Phone + charger', type:'gear'},
                {name:'Sunglasses', type:'gear'},
                {name:'Sunblock', type:'gear'}];
      }
    }
});

app.directive("selectTool", function(){
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "./js/templates/packselector.html";

    return directive;

});


app.directive("dayTool", function(){
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "./js/templates/dayTemplate.html";

    return directive;


});
