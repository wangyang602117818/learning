<script language="javascript">
//������������ ���ڸ�ʽ�� 2009-01-06
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
//������������ ���ڸ�ʽ��2009-03-24 16:11:23
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
//�������ķ����� ���ڸ�ʽ��2009-03-24 16:11:00
//�����parseIntΪjs������ת�������������е����⣬parseInt(08)ת���Ľ��Ϊ0���������Ǹĳ�parseInt(08,10)��08ת����ʮ���Ƶ�����ȷ�ġ�
function computeDate(start_date,end_date)
{
  if (start_date!=""&&end_date!="")
  {
   var begin1=start_date.substr(0,10).split("-");
   var end1=end_date.substr(0,10).split("-");    
   var m=(Date.parse(end1[0]+'/'+end1[1]+'/'+end1[2])-Date.parse(begin1[0]+'/'+begin1[1]+'/'+begin1[2]))/60000;   //Сʱ����ķ�
   var min1=parseInt(start_date.substr(11,2))*60+parseInt(start_date.substr(14,2));
   var min2=parseInt(end_date.substr(11,2))*60+parseInt(end_date.substr(14,2));
   var n=min2-min1;   //������ķ�
   if (m<0 || m==0&&n<0)
     {alert("��ʼʱ�䲻�ܴ��ڽ���ʱ�䣡");
      return false;}
   var minutes=m+n;
   document.overtime.minute_num.value=minutes;
  }
}
</script>
