
//随机数
function selectFrom(lowerValue,upperValue){
   var choices=upperValue-lowerValue+1;
   return Math.floor(Math.random()*choices+lowerValue);
}
//拖动层
function drag(dv){
  dv.onmousedown=function(e){
      var d=document;
      e = e || window.event;    
      var x= e.layerX || e.offsetX;
      var y= e.layerY || e.offsetY;
      //设置捕获范围
      if(dv.setCapture){
          dv.setCapture();
      }else if(window.captureEvents){
          window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
      }
      d.onmousemove=function(e){
           e= e || window.event;
		   var scrollY=d.documentElement.scrollTop || d.body.scrollTop;
		   var scrollX=d.documentElement.scrollLeft || d.body.scrollLeft;
           if(!e.pageX)e.pageX=e.clientX+scrollX;
           if(!e.pageY)e.pageY=e.clientY+scrollY;
           var tx=e.pageX-x;
           var ty=e.pageY-y;
           dv.style.left=tx+"px";
           dv.style.top=ty+"px";
      };
      d.onmouseup=function(){
           //取消捕获范围
           if(dv.releaseCapture){
              dv.releaseCapture();
           }else if(window.captureEvents){
              window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
           }         
          //清除事件
          d.onmousemove=null;
          d.onmouseup=null;
		  //dv.onmousedown=null;
      };
   };
}
//确定元素位置
function getBoundingClientRect(element){
	var scrollTop=document.documentElement.scrollTop;
	var scrollLeft=document.documentElement.scrollLeft;
	if (element.getBoundingClientRect){	
	    if (typeof arguments.callee.offset != "number"){ 
		   var temp=document.createElement("div");
		   temp.style.cssText="position:absolute;left:0;top:0;";		   
		   document.body.appendChild(temp);
		   arguments.callee.offset=-temp.getBoundingClientRect().top-scrollTop;
		   document.body.removeChild(temp);
		   temp=null;
	    }
	    var rect=element.getBoundingClientRect();
	    var offset=arguments.callee.offset;
	    return {
		     left : rect.left + offset,
		     right : rect.right + offset,
		     top : rect.top + offset,
		     bottom : rect.bottom + offset
	    };
	}else{
		var actualLeft=getElementLeft(element);
		var actualTop=getElementTop(element);
		return {
			 left : actualLeft - scrollLeft,
			 right : actualLeft + element.offsetWidth - scrollLeft,
			 top : actualTop - scrollTop,
			 bottom : actualTop + element.offsetHeight -scrollTop
	    }
	 }
}
function getElementLeft(element){
      var actualLeft=element.offsetLeft;
	  var current=element.offsetParent;
	  while (current !== null)
	  { actualLeft+=current.offsetLeft;
	    current=current.offsetParent;
	  }
	  return actualLeft;
}
function getElementTop(element){
      var actualTop=element.offsetTop;
	  var current=element.offsetParent;
	  while (current !== null)
	  { actualTop+=current.offsetTop;
	    current=current.offsetParent;
	  }
	  return actualTop;
}
