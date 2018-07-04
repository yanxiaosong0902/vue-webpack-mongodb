Array.prototype.arrayEqual = function(arr){
	if(!arr){
		return false
	}
	if(this.length!=arr.length){
		return false
	}
	for(var  i = 0,len = arr.length; i < len ; i++){
		if(this[i] instanceof Array && arr[i] instanceof Array){
			if(!this[i].arrayEqual(arr[i])){
				return false
			}
		}
		else if(this[i]!=arr[i]){
			return false
		}
	}
	return true;
}
exports.dateFormat = (date, format) => {
	console.log(date+'shijian');
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
exports.upperOrLowerCase = function(str,type){
	if(typeof str != 'string'){
		return;
	}
	if(type == 'upper'){
		str.toLocaleUpperCase();
	}
	else{
		str.toLocaleLowerCase();
	}
};