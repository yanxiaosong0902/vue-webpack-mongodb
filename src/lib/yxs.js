;(function(root,factory){
	if(typeof define === 'function' && define.amd){
		define([],factory);
	}else if(typeof exports === 'object'){
		module.exports = factory();
	}else{
		root.$yxs = factory();
	}
})(window,function(){
	//类型判断
	var isType = type =>{
		return function(obj){
			return Object.prototype.toString.call(obj) === '[object '+type+']'
		}
	}
    console.log("123");
	var isObject = isType('Object');
	var isArray = isType('Array');
	var isString = function(obj){
		return isType('String')(obj) || obj instanceof String
	};
	var isNull = isType('Null');
	var isNumber = isType('Number');
	var isFunction = isType('Function');
	var isUndefined = isType('Undefined');
	var isElement = obj =>{
        return /^\[object HTML\w*Element]$/.test({}.toString.call(obj));
    }
    var isElementArray = function (obj) {
        return {}.toString.call(obj) == '[object HTMLCollection]' || {}.toString.call(obj) == '[object NodeList]';
    };
     var isTableElement = function (obj) {
        return /^\[object HTMLTable\w*Element]$/.test({}.toString.call(obj));
    };

    var $yxs = {};
    //url参数格式化
    var parseUrl = ()=>{
    	var url = window.location.search.replace(/^\?/,'');
    	var urlObj = {};
    	url = url.split('&');
    	url.forEach(e=>{
    		const obj = e.split('=');
    		const key = obj[0];
    		const value = obj[1];
    		urlObj[key] = value;
    	})
    	return urlObj
    }
    //时间格式化
    var dateFormat = (date,fmt) =>{
		var o = {   
		    "M+" : date.getMonth()+1,                 //月份   
		    "d+" : date.getDate(),                    //日   
		    "h+" : date.getHours(),                   //小时   
		    "m+" : date.getMinutes(),                 //分   
		    "s+" : date.getSeconds(),                 //秒   
		    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
		    "S"  : date.getMilliseconds()             //毫秒   
		 };   
		if(/(y+)/.test(fmt)){ 
		    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
		}   
		for(var k in o){   
		 	if(new RegExp("("+ k +")").test(fmt)){   
		  		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
			}
		}   
		return fmt;   
    }
    //数组操作
    /*var array_devare = (arr,index_arr) => {
    	var newArr = [];
    	arr.forEach(e=>{
    		if(e indexOf(index_arr) == -1){
    			
    		}
    	})
    }*/

    $yxs.parseUrl = parseUrl;
    $yxs.dateFormat = dateFormat;
    window.$yxs = $yxs;
    window.isArray = isArray;
    window.isNumber = isNumber;
    window.isObject = isObject;
    window.isString = isString;
    window.isElement = isElement;
    window.isFunction = isFunction;
    window.isUndefined = isUndefined;
    window.isElementArray = isElementArray;
    window.isTableElement = isTableElement;

    $yxs.isArray = isArray;
     $yxs.isNumber = isNumber;
     $yxs.isObject = isObject;
     $yxs.isString = isString;
     $yxs.isElement = isElement;
     $yxs.isFunction = isFunction;
     $yxs.isUndefined = isUndefined;
     $yxs.isElementArray = isElementArray;
     $yxs.isTableElement = isTableElement;


    return $yxs
})