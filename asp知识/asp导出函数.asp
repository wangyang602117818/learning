<%
function get_hr_name(id)'����Ա����Ŷ�ȡԱ������
	dim rs,tstr
	if id="" or isnull(id) then id=0
	Set rs=server.CreateObject("adodb.recordset")
	rs.open"select h_name from hr where h_id="&id,mconn
	if not rs.eof then
		tstr=rs("h_name")
	else
		tstr="δ֪����"
	end if
	rs.close
	set rs=nothing
	get_hr_name=tstr
end Function
set mconn=server.createobject("adodb.connection")
mserver="(local)"
muid="rd"
mpwd="rdinfomation"
mdatabase="oa_fsd"
mconnstring="driver={sql server};server="&mserver&";uid="&muid&";pwd="&mpwd&";database="&mdatabase&""
mconn.open mconnstring
'���յ���sql
sql_str=request("sql_str")
sql_str="select top 100 aid ���,afid ��������,proposer ������,assessor �����,is_auditing �Ƿ����,auditing_date ���ʱ��,idea ������,logindate ¼��ʱ��,flow ���� from auditing order by logindate desc"
'�����ļ���
filename=request("filename")
'������Ҫת���Ĳ���
par=request("par")   
par="������,�����"

'Response.Expires = 0
'Response.Buffer = True
'Response.ContentType = "application/vnd.ms-excel"
'Response.ContentType = "application/msword" 
'Response.AddHeader "Content-Disposition", "attachment; filename=�ļ���.xls"
'Response.AddHeader "Content-Disposition", "inline; filename=�ļ���.doc"
function change_dis(obj,parameters)
    p_arr=split(parameters,",")
    p_u=ubound(p_arr)
    change_dis=obj
    for p_k=0 to p_u
	   if p_arr(p_k)=obj.name then
	      if p_k=0 then change_dis=get_hr_name(obj)
		  if p_k=1 then change_dis=get_hr_name(obj)
	   end if
	next
end function

set rs_excel=server.createobject("adodb.recordset")
    rs_excel.open sql_str,mconn,1,3
%>    
<table width="100%" border="1">
<tr height="50" style="background-color:#cccccc"> 
  <%for k=0 to rs_excel.fields.count-1%>
    <td><%=rs_excel.fields(k).name%></td>
  <%next%>
</tr>
<%for k=1 to rs_excel.recordcount%>
 <%if rs_excel.eof then exit for%>
<tr>
  <%for j=0 to rs_excel.fields.count-1%>
   <td><%=change_dis(rs_excel(j),par)%></td>
  <%next%>
</tr>
<%
rs_excel.movenext
next
rs_excel.close
set rs_excel=nothing
set mconn=nothing
%>
</table>

