//�¼�ר�ò�������
var EventUtil = {
     addHandler : function(element, type, handler){     //����¼�����
	      if (element.addEventListener){
		      element.addEventListener(type, handler, false);
	      }else if (element.attachEvent){
		      element.attachEvent("on" + type, handler);
	      }else {
		      element["on" + type] = handler;
		  }
	 },
	 getEvent : function(event){                         //ȡ���¼�����
	      return event ? event : window.event;
	 },
	 getTarget : function(event){                        //ȡ���¼�Ŀ��
	      return event.target || event.srcElement;
	 },
	 preventDefault : function(event){                   //ȡ��Ĭ�϶���
	      if (event.preventDefault){
		     event.preventDefault();
	      }else{
		     event.returnValue = false;
		  }
	 },
	 removeHandler : function(element, type, handler){   //�Ƴ��¼�����
	      if (element.removeEventListener){
		      element.removeEventListener(type, handler, false);
	      }else if (element.detachEvent){
		      element.detachEvent("on" + type, handler);
	      }else{
		      element["on" + type] = null;
		  }
	},
	stopPropagation : function(event){                   // ȡ���¼�ð��
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

