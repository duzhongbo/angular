var myApp = angular.module('myApp', []);

// 重置angular的数据输出符号，双层花括号变成双层反斜杠
myApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('//');
  $interpolateProvider.endSymbol('//');
});

// 定义一个控制器
myApp.controller('aArticleCtrl', function($scope) {
    $scope.aArticle = aArticle;
});


