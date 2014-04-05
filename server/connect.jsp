<!-dispStudent.jsp-->
<!-显示学生名单的JSP页面-->
<!--设置中文输出-->
<%@ page language="java" contentType="text/html;charset=gb2312" %>
<!-导入JAVA.SQL包-->
<%@ page import="java.sql.*"%>
<!--设置需要调用的JavaBean，即编写的Java类-->
<jsp:useBean id="sqlBean" scope="page" class="com.teach.mysql"/>
<%
	ResultSet rs;
	//增加新记录
	sqlBean.executeUpdate("INSERT INTO student VALUES ('040001','王海','男','计算机应用','04112')");
	//查询记录
	rs = sqlBean.query("select * from student");
	//输出查询结果
	out.println("<table border=1 width=400>");
	while (rs.next())
	{
		String sno = rs.getString(1);
		String sname = rs.getString(2);
		String ssex = rs.getString(3);
		String special = rs.getString(4);
		String sclass = rs.getString(5);
		//打印所显示的数据
		out.println("<tr><td>"+sno+"</td><td>"+sname+"</td><td>"+ssex+"</td><td>"+special+"</td><td>"+sclass+"</td></tr>");
	}
	out.println("</table>");
	//关闭数据库连结
	sqlBean.close();
%>
