// 文章数据,数组类型全量数据
var aArticle = '['+
	{% for post in site.posts] %}
		{% if post != site.posts[0] %}','+{% endif %}
		'{'+
			'"url":"{{post.url}}",'+
			'"title":"{{post.title}}",'+
			'"content":"{{post.content | strip_newlines |escape}}",'+// 过滤换行符,内容字符串化
			'"date":"{{post.date | date:"%Y/%m/%d"}}",'+
			'"img":"{{post.customer.img}}",'+
			'"tags":'+
			'['+
			{% for tag in post.tags %}
			{% if tag != post.tags[0] %}','+{% endif %}
			'"{{tag}}"'+
			{% endfor %}
			'],'+
			'"comment":""'+
		'}'+
	{% endfor %}
']';
aArticle=aArticle.replace(/\s*/g,'');// 过滤空白字符
aArticle = JSON.parse(aArticle);// 字符串格式化

// 文章数据,以标签为键值组织的文章json,文章只包含主要的信息，非全量
var oArticle = '{'+
	{% for tag in site.tags %}
		{% if tag[0] != site.tags.first[0] %}','+{% endif %}
		'"{{ tag[0] }}":'+
		'['+
		{% for post in tag[1] %}
		{% if post != tag[1].first %}','+{% endif %}
		'{'+
			'"url":"{{post.url}}",'+
			'"title":"{{post.title}}",'+
			'"date":"{{post.date | date:"%d/%m/%Y"}}"'+
		'}'+
		{% endfor %}
		']'+
	{% endfor %}
'}';
var oArticle = JSON.parse(oArticle);

// 标签数据
var aTags = '['+
	{% for tag in site.tags %}
		{% if tag[0] != site.tags.first[0] %}','+{% endif %}
		'"{{ tag[0] }}"'+
	{% endfor %}
']';
var aTags = JSON.parse(aTags);

// 导航数据
var aNav = [
{
	href:'#index',
	text:'首页'
},
{
	href:'#list',
	text:'列表页'
},
{
	href:'#tags',
	text:'标签页'
},
];

// 欢迎页数据
var aWelcome = [
	{
		cls:'welcome-bg-img0',
		txt:'对于世界而言，你是一个人；但是对于某个人，你是他的整个世界。《水晶之恋》'
	},
	{
		cls:'welcome-bg-img1',
		txt:'只有在卡拉面前，我才觉得自己有点人样”《卡拉是条狗》'
	},
	{
		cls:'welcome-bg-img2',
		txt:'俄罗斯虽大，但已无路可退；因为我们的身后就是莫斯科——无名氏'
	}
];
console.log(aArticle,aTags,aNav);