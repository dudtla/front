package com.kh.app.home.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/home") //어노테이션이 붙어있어서 톰캣이 서블릿으로 인식함 
//=> new HomeConteroller();객체를 생성해줌 
//=> 톰캣이 만들어진 객체를 바구니에 보관(키값:밸류값으로) 
public class HomeController extends HttpServlet{


	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		//데이터 내보내기
		String name = req.getParameter("name");
		
		//문자열 내보내기
//		resp.setContentType("text/html; charset=UTF-8");
//		PrintWriter out = resp.getWriter();
//		out.write("<h1>홈페이지</h1>");
//		if(name != null) {
//			out.write("<h2>" + name + "님 환영합니다</h2>");
//		}else {
//			out.write("<h2>게스트님 환영합니다.</h2>");
//		}
		//위의 문자열 내보내기를 한줄로 바꿔보기
		req.getRequestDispatcher("/WEB-INF/views/test.jsp").forward(req, resp);
	}
}
