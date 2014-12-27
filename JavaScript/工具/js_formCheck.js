/* isNull=1 验证表单空值不能打空格， null=1验证空值可以打空格，isNull=1验证整数型，
   isNumber=1验证数值 isDate验证日期型 isDateTime验证日期时间型 isEmail验证电子邮箱
*/
//表单验证
function form_check_nnde(obj){
   var i,nonceObj;
   var element_list=obj.elements;
   for (i=0;i<element_list.length;i++ ){
	  nonceObj=element_list[i];
      if (nonceObj.getAttribute("isNull")==1){   ////验证空值不能打空格
		 if (checkNull(nonceObj)==false){
			 return false;
		 }
	  }
      if (nonceObj.getAttribute("null")==1){  //验证空值可以打空格
	     if (checknull(nonceObj)==false){
			 return false;
	     }
      }
	  if (nonceObj.getAttribute("isInt")==1){   //验证整数型
         if (checkInt(nonceObj)==false){
            return false;
         }
      }
	  if (nonceObj.getAttribute("isNumber")==1){  //验证数值
	     if (checkNumber(nonceObj)==false){
		    return false;
	     }
	  }
	  if (nonceObj.getAttribute("isDate")==1){   //验证日期
	     if (checkDate(nonceObj)==false){
            return false;
	     }
	  }
	  if (nonceObj.getAttribute("isDateTime")==1){   //验证日期时间型
	     if (checkDateTime(nonceObj)==false){
            return false;
	     }
	  }
	  if (nonceObj.getAttribute("isEmail")==1){     //验证Email
	     if (checkEmail(nonceObj)==false){
            return false;
	     }
	  }
   }
}
////////////////////////////////////////////////////////////////////////////////////////
//验证空值，不能打空格
function checkNull(obj){
   var objName=obj.getAttribute("objName");
   if (trim(obj.value)==""){
	  alert("【"+objName+"】项不能为空！");
      obj.focus();
	  return false;
   }
   return true;
}
//验证空值，可以打空格   
function checknull(obj){
	 var objName=obj.getAttribute("objName");
   if (obj.value==""){
	  alert("【"+objName+"】项不能为空！");
      obj.focus();
	  return false;
   }
   return true;
}  
//验证整数（包括正负）
function checkInt(obj){
   if (!isInt(obj.value)){
      alert("【"+obj.getAttribute("objName")+"】项必须为整数！");
      obj.focus();
	  return false;
   }
   return true;
}
//验证数值
function checkNumber(obj){
   if (!isNumber(obj.value)){
	  alert("【"+obj.getAttribute("objName")+"】项必须为数值！");
	  obj.focus();
	  return false; 
   }
   return true; 
}
//验证日期
function checkDate(obj){
   if (!isDate(obj.value)){
	  alert("【"+obj.getAttribute("objName")+"】项必须为日期！"); 
      obj.focus();
	  return false; 
   }
   return true;
}
//验证日期时间
function checkDateTime(obj){
   if (!isDateTime(obj.value)){
	   alert("【"+obj.getAttribute("objName")+"】项必须为日期时间型！");
	   obj.focus();
	   return false; 
   }
}
//验证Email
function checkEmail(obj){
	if (!isEmail(obj.value)){
	   alert("【"+obj.getAttribute("objName")+"】项必须为Email！");
       obj.focus();
	   return false; 
	}
}
////////////////////////////////////////////////////////////////////////////////////////
function isInt(s){              //整数
    var exp=/^[+-]{0,1}[0-9]{1,}$/;
    if (!exp.test(s)){
		return false;
    }
    return true;
}
function isNumber(s){           //数值
    var exp=/^[+-]{0,1}[0-9]{1,}(\.{0,1}[0-9]{1,}){0,1}$/;
	if (!exp.test(s)){
		return false;
	}
	return true;
}
function isDate(s){            //日期
    var exp=/^\d{4}(-|\/)\d{1,2}\1\d{1,2}$/;
	if (!exp.test(s)){
		return false;
	}
	return true;
}
function isDateTime(s){       //日期时间
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
function trim(str){  //首尾去空格
    return str.replace(/(^\s*)|(\s*$)/g , ""); 
} 






