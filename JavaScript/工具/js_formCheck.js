/* isNull=1 ��֤����ֵ���ܴ�ո� null=1��֤��ֵ���Դ�ո�isNull=1��֤�����ͣ�
   isNumber=1��֤��ֵ isDate��֤������ isDateTime��֤����ʱ���� isEmail��֤��������
*/
//����֤
function form_check_nnde(obj){
   var i,nonceObj;
   var element_list=obj.elements;
   for (i=0;i<element_list.length;i++ ){
	  nonceObj=element_list[i];
      if (nonceObj.getAttribute("isNull")==1){   ////��֤��ֵ���ܴ�ո�
		 if (checkNull(nonceObj)==false){
			 return false;
		 }
	  }
      if (nonceObj.getAttribute("null")==1){  //��֤��ֵ���Դ�ո�
	     if (checknull(nonceObj)==false){
			 return false;
	     }
      }
	  if (nonceObj.getAttribute("isInt")==1){   //��֤������
         if (checkInt(nonceObj)==false){
            return false;
         }
      }
	  if (nonceObj.getAttribute("isNumber")==1){  //��֤��ֵ
	     if (checkNumber(nonceObj)==false){
		    return false;
	     }
	  }
	  if (nonceObj.getAttribute("isDate")==1){   //��֤����
	     if (checkDate(nonceObj)==false){
            return false;
	     }
	  }
	  if (nonceObj.getAttribute("isDateTime")==1){   //��֤����ʱ����
	     if (checkDateTime(nonceObj)==false){
            return false;
	     }
	  }
	  if (nonceObj.getAttribute("isEmail")==1){     //��֤Email
	     if (checkEmail(nonceObj)==false){
            return false;
	     }
	  }
   }
}
////////////////////////////////////////////////////////////////////////////////////////
//��֤��ֵ�����ܴ�ո�
function checkNull(obj){
   var objName=obj.getAttribute("objName");
   if (trim(obj.value)==""){
	  alert("��"+objName+"�����Ϊ�գ�");
      obj.focus();
	  return false;
   }
   return true;
}
//��֤��ֵ�����Դ�ո�   
function checknull(obj){
	 var objName=obj.getAttribute("objName");
   if (obj.value==""){
	  alert("��"+objName+"�����Ϊ�գ�");
      obj.focus();
	  return false;
   }
   return true;
}  
//��֤����������������
function checkInt(obj){
   if (!isInt(obj.value)){
      alert("��"+obj.getAttribute("objName")+"�������Ϊ������");
      obj.focus();
	  return false;
   }
   return true;
}
//��֤��ֵ
function checkNumber(obj){
   if (!isNumber(obj.value)){
	  alert("��"+obj.getAttribute("objName")+"�������Ϊ��ֵ��");
	  obj.focus();
	  return false; 
   }
   return true; 
}
//��֤����
function checkDate(obj){
   if (!isDate(obj.value)){
	  alert("��"+obj.getAttribute("objName")+"�������Ϊ���ڣ�"); 
      obj.focus();
	  return false; 
   }
   return true;
}
//��֤����ʱ��
function checkDateTime(obj){
   if (!isDateTime(obj.value)){
	   alert("��"+obj.getAttribute("objName")+"�������Ϊ����ʱ���ͣ�");
	   obj.focus();
	   return false; 
   }
}
//��֤Email
function checkEmail(obj){
	if (!isEmail(obj.value)){
	   alert("��"+obj.getAttribute("objName")+"�������ΪEmail��");
       obj.focus();
	   return false; 
	}
}
////////////////////////////////////////////////////////////////////////////////////////
function isInt(s){              //����
    var exp=/^[+-]{0,1}[0-9]{1,}$/;
    if (!exp.test(s)){
		return false;
    }
    return true;
}
function isNumber(s){           //��ֵ
    var exp=/^[+-]{0,1}[0-9]{1,}(\.{0,1}[0-9]{1,}){0,1}$/;
	if (!exp.test(s)){
		return false;
	}
	return true;
}
function isDate(s){            //����
    var exp=/^\d{4}(-|\/)\d{1,2}\1\d{1,2}$/;
	if (!exp.test(s)){
		return false;
	}
	return true;
}
function isDateTime(s){       //����ʱ��
    var exp=/^\d{4}(-|\/)\d{1,2}\1\d{1,2} \d{1,2}:\d{1,2}:\d{1,2}$/;
	if (!exp.test(s)){
		return false;
	}
    return true;
}
function isEmail(s){          //Email
    var exp=/^[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+(\.[a-zA-Z0-9-_]+)+$/;
	if (!exp.test(s)){
		return false;
	}
    return true;
}
function trim(str){  //��βȥ�ո�
    return str.replace(/(^\s*)|(\s*$)/g , ""); 
} 






