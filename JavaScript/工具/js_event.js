//事件专用操作函数
var EventUtil = {
     addHandler : function(element, type, handler){     //添加事件处理
	      if (element.addEventListener){
		      element.addEventListener(type, handler, false);
	      }else if (element.attachEvent){
		      element.attachEvent("on" + type, handler);
	      }else {
		      element["on" + type] = handler;
		  }
	 },
	 getEvent : function(event){                         //取得事件对象
	      return event ? event : window.event;
	 },
	 getTarget : function(event){                        //取得事件目标
	      return event.target || event.srcElement;
	 },
	 preventDefault : function(event){                   //取消默认动作
	      if (event.preventDefault){
		     event.preventDefault();
	      }else{
		     event.returnValue = false;
		  }
	 },
	 removeHandler : function(element, type, handler){   //移除事件处理
	      if (element.removeEventListener){
		      element.removeEventListener(type, handler, false);
	      }else if (element.detachEvent){
		      element.detachEvent("on" + type, handler);
	      }else{
		      element["on" + type] = null;
		  }
	},
	stopPropagation : function(event){                   // 取消事件冒泡
	      if (event.stopPropagation){
		      event.stopPropagation();
		  }else{
		      event.cancelBubble = true;
		  }
	 },
	getRelatedTarget : function(event){               //
		 if (event.relatedTarget){
			 return event.relatedTarget;
		 }else if (event.toElement){
			 return event.toElement;
		 }else if (event.fromElement){
			 return event.fromElement;
		 }else{
			 return null;
		 }
	 }	 
};

