;(function(root,factory){
	if(typeof define === 'function' && define.amd){
		define(['./EventUtil.js'],factory);
	}else if(typeof exports === 'object'){
		module.exports = factory(
			require('./EventUtil.js')
		)
	}else{
		root.webLayout = factory(root.EventUtil)
	}
})(this,function(EventUtil){
	var webLayout = {};
	var startY;
	var preventLouDi = function(idName){
		var el = document.getElementById(idName);
		EventUtil.addHandler(el,'touchstart',function(e){
			var event = EventUtil.getEvent(e);
			var target = EventUtil.getTarget(e);
			startY = event.touches[0].clientY;
			
		})
		EventUtil.addHandler(el,'touchmove',function(e){
			var status = '11';
			var event = EventUtil.getEvent(e);
			var target = EventUtil.getTarget(e);
			var elm = this;
			var currentY = event.touches[0].clientY;

			if(elm.scrollTop == 0){
				// 如果内容小于容器则同时禁止向下滚动
				status = elm.offsetHeight >= elm.scrollHeight ? '00':'01';
			}else if(elm.scrollTop + elm.offsetHeight >= elm.scrollHeight){
				// 已经滚到底部了只能向上滚动
				status = '10';
			}
			if(status!='11'){
				var direction = currentY - startY > 0 ? '10' : '01';
			 	if (!(parseInt(status, 2) & parseInt(direction, 2))) {
			 		EventUtil.preventDefault(event);
			 	}
			}

		})
	}

	window.webLayout = {
		preventLouDi:preventLouDi
	}
	return webLayout
})