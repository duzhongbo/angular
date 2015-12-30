var myApp = angular.module('myApp', ['ngRoute']);

// 重置angular的数据输出符号，双层花括号变成双层反斜杠
myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('//');
});
myApp
  .config(function($routeProvider) {

$routeProvider
        .when('/', {
          templateUrl: 'views/1.html',
          controller: 'Ctrl1'
        })
        .when('/ww', {
          templateUrl: '/views/2.html',
          controller: 'Ctrl2'
        })

  });
// 定义一个控制器
myApp.controller('aArticleCtrl', function($scope) {
    $scope.aArticle = aArticle;
    $scope.click = function(o){
    	console.log(o.x);
    }
});
// 定义控制器Ctrl1
myApp.controller('Ctrl1',function($scope){
	console.log("Ctrl1");
});
// 定义控制器Ctrl2
myApp.controller('Ctrl2',function($scope){
	console.log("Ctrl2");
});

