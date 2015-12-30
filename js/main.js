var myApp = angular.module('myApp', ['ngRoute']);

// 重置angular的数据输出符号，双层花括号变成双层反斜杠
myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('//');
});
// 路由设置
myApp.config(function($routeProvider) {
$routeProvider
    .when('/', {
      templateUrl: 'views/index.html',
      controller: 'index'
    })
    .when('/ww', {
      templateUrl: '/views/2.html',
      controller: 'Ctrl2'
    })
});

// "首页"控制器
myApp.controller('index',function($scope){
    $scope.aArticle = aArticle;
    $scope.click = function(o){
    	console.log(o.x);
    }
});
// 定义控制器Ctrl2
myApp.controller('Ctrl2',function($scope){
	console.log("Ctrl2");
});

