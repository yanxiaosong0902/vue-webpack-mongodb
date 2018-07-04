;(function(root,factory){
	if(typeof define === 'function' && define.amd){
		define([],factory);
	}else if(typeof exports === 'object'){
		module.exports = factory();
	}else{
		root.$yxs = factory();
	}
})(this,undefined,function(){
	let $yxs = {};
	//=========================================================
    //  类型检查
    //=========================================================
	function isType(type) {
		console.log(type);
        return function (obj) {
            return {}.toString.call(obj) === "[object " + type + "]";
        }
    }
    /**
     * 类型检查 Undefined
     * @function
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isUndefined = isType("Undefined");
    /**
     * 类型检查 Object
     * @function
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isObject = isType("Object");
    /**
     * 类型检查 Number
     * @function
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isNumber = isType("Number");
    /**
     * 类型检查 Array
     * @function
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isArray = Array.isArray || isType("Array");
    /**
     * 类型检查 Function
     * @function
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isFunction = isType("Function");
    /**
     * 类型检查 String 验证 字符串字面量 和 new String()
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isString = function (obj) {
        return isType("String")(obj) || obj instanceof String;
    };
    /**
     * 类型检查 Element
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isElement = function (obj) {
        return /^\[object HTML\w*Element]$/.test({}.toString.call(obj));
    };
    /**
     * 类型检查 HTMLCollection NodeList
     * @param  {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isElementArray = function (obj) {
        return {}.toString.call(obj) == '[object HTMLCollection]' || {}.toString.call(obj) == '[object NodeList]';
    };
    /**
     * 类型检查 TableElement {thead|tbody|tr|td|th...}
     * @param {*} obj 检查目标
     * @global
     * @returns {boolean}
     * */
    var isTableElement = function (obj) {
        return /^\[object HTMLTable\w*Element]$/.test({}.toString.call(obj));
    };
    /**
	 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
	 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
	 *   例子：
	 *   "yyyy-MM-dd hh:mm:ss.S" ==> 2006-07-02 08:09:04.423
	 *   "yyyy-M-d h:m:s.S"      ==> 2006-7-2 8:9:4.18
	 */
	$yxs.dateFormat = (date,format)=>{
		date = Number(date);
	    date = new Date(date);
	    var map = {
	        "M": date.getMonth() + 1, //月份 
	        "d": date.getDate(), //日 
	        "h": date.getHours(), //小时 
	        "m": date.getMinutes(), //分 
	        "s": date.getSeconds(), //秒 
	        "q": Math.floor((date.getMonth() + 3) / 3), //季度 
	        "S": date.getMilliseconds() //毫秒 
	    };
	    if (!format)format = "yyyy年MM月dd日 hh:mm:ss";
	    var curDate = new Date();
	    if (format === 'smart') {
	        if ((curDate.getDate() - map['d']) === 0) {
	            return map['h'] + ':' + map['m'];
	        }
	        return map['M'] + '月' + map['d'] + '日';
	    }
	    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	            if (all.length > 1) {
	                v = '0' + v;
	                v = v.substr(v.length - 2);
	            }
	            return v;
	        }
	        else if (t === 'y') {
	            return (date.getFullYear() + '').substr(4 - all.length);
	        }
	        return all;
	    });

	    return format;
	};
	$yxs.prototype.isNumber = isNumber;
	window.$yxs = $yxs;
	return $yxs;
})