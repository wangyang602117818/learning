<%
function get_hr_name(id)'根据员工编号读取员工姓名
	dim rs,tstr
	if id="" or isnull(id) then id=0
	Set rs=server.CreateObject("adodb.recordset")
	rs.open"select h_name from hr where h_id="&id,mconn
	if not rs.eof then
		tstr=rs("h_name")
	else
		tstr="未知姓名"
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
'接收导出sql
sql_str=request("sql_str")
sql_str="select top 100 aid 编号,afid 申请类型,proposer 申请人,assessor 审核人,is_auditing 是否审核,auditing_date 审核时间,idea 审核意见,logindate 录入时间,flow 流程 from auditing order by logindate desc"
'接收文件名
filename=request("filename")
'接收需要转换的参数
par=request("par")   
par="申请人,审核人"

'Response.Expires = 0
'Response.Buffer = True
'Response.ContentType = "application/vnd.ms-excel"
'Response.ContentType = "application/msword" 
'Response.AddHeader "Content-Disposition", "attachment; filename=文件名.xls"
'Response.AddHeader "Content-Disposition", "inline; filename=文件名.doc"
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

