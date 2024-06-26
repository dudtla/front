package com.kh.app.home.controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(value = "/home")
public class HomeController extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		resp.setContentType("text/html; charset=UTF-8");
		String name = req.getParameter("name");
		PrintWriter out = resp.getWriter();
		out.write("<h1>홈페이지</h1>");
		if (name != null) {
			out.write("<h2>" + name + "님 환영합니다</h2>");
		} else {
			out.write("<h2>게스트님 환영합니다.</h2>");
		}

	}
}