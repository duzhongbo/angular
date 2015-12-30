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
    .when('/article/:year/:month/:date/:title', {
      templateUrl: '/views/article.html',
      controller: 'article'
    })
});

// "首页"控制器
myApp.controller('index',function($scope){
    $scope.aArticle = aArticle;
    $scope.click = function(o){
    	console.log(o.x);
    }
});
// "文章页"控制器
myApp.controller('article',function($scope){
	var hash = location.hash;
	hash = hash.split('#/article')[1];
	console.log("article",hash);
	for(var i=0,len=aArticle.length;i<len;i++){
		if(aArticle[i].url==hash){
			$scope.article = aArticle[i];
			break;
		}
	}
});

