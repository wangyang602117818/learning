<script language="javascript">
//计算相差的天数 日期格式： 2009-01-06
function jsrq(start,end){
   if (start!=""&&end!="")
   {
   //alert(start+","+end);
   var startY = start.substring(0,start.indexOf('-'));
   var startM = start.substring(start.indexOf('-')+1,start.lastIndexOf('-'));
   var startD = start.substring(start.lastIndexOf('-')+1,start.length);
  
   var endY = end.substring(0,end.indexOf('-'));
   var endM = end.substring(end.indexOf('-')+1,end.lastIndexOf('-'));
   var endD = end.substring(end.lastIndexOf('-')+1,end.length);
  
   var val = (Date.parse(endY+'/'+endM+'/'+endD)-Date.parse(startY+'/'+startM+'/'+startD))/86400000;
   var t=Math.abs(val)+1;
   document.form1.rq.value=t;
   }
}
//计算相差的天数 日期格式：2009-03-24 16:11:23
function daysBetween(start, end){
    var startY = start.substring(0, start.indexOf('-'));
    var startM = start.substring(start.indexOf('-')+1, start.lastIndexOf('-'));
    var startD = start.substring(start.lastIndexOf('-')+1, start.indexOf(' '));
    var startArray = start.substring(start.indexOf(' '), start.length);
    var startTime = startArray.split(':');
    var startH = startTime[0];
    var startMI = startTime[1];
    var startS = startTime[2];

    var endY = end.substring(0, end.indexOf('-'));
    var endM = end.substring(end.indexOf('-')+1, end.lastIndexOf('-'));
    var endD = end.substring(end.lastIndexOf('-')+1, end.indexOf(' '));
    var endArray = end.substring(end.indexOf(' '), end.length);
    var endTime = endArray.split(':');
    var endH = endTime[0];
    var endMI = endTime[1];
    var endS = endTime[2];

    var startDate = new Date(startY, startM, startD, startH, startMI, startS);
    var endDate = new Date(endY, endM, endD, endH, endMI, endS);
    var between = (endDate-startDate)/86400000;
    var t=Math.abs(between)+1;
    document.form1.rq.value=t;
}
//计算相差的分钟数 日期格式：2009-03-24 16:11:00
//里面的parseInt为js的数据转换函数，但是有点问题，parseInt(08)转换的结果为0，所以我们改成parseInt(08,10)把08转换成十进制的是正确的。
function computeDate(start_date,end_date)
{
  if (start_date!=""&&end_date!="")
  {
   var begin1=start_date.substr(0,10).split("-");
   var end1=end_date.substr(0,10).split("-");    
   var m=(Date.parse(end1[0]+'/'+end1[1]+'/'+end1[2])-Date.parse(begin1[0]+'/'+begin1[1]+'/'+begin1[2]))/60000;   //小时里面的分
   var min1=parseInt(start_date.substr(11,2))*60+parseInt(start_date.substr(14,2));
   var min2=parseInt(end_date.substr(11,2))*60+parseInt(end_date.substr(14,2));
   var n=min2-min1;   //分里面的分
   if (m<0 || m==0&&n<0)
     {alert("开始时间不能大于结束时间！");
      return false;}
   var minutes=m+n;
   document.overtime.minute_num.value=minutes;
  }
}
</script>
