package com.kh.app.member.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/member/join2")
public class MemberJoinController2 extends HttpServlet{

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		//데이터 꺼내기
		String memberId = req.getParameter("memberId");
		String memberPwd = req.getParameter("memberPwd");
		String memberPwdCheck = req.getParameter("memberPwdCheck");
		String memberNick = req.getParameter("memberNick");
		
		//꺼낸 데이터를 뭉쳐서 디비에 전달
		MemberVo vo = new MemberVo(memberId, memberPwdCheck, memberNick);
		
		
//		//복잡한 작업
//		if(!memberPwd.equals(memberPwdCheck)) {
//			회원가입 실패 => 디비에 저장안함
//					화면에 실패 띄우기
//		}else {
//			회원가입 성공 => 디비에 저장
//					화면에 성공 띄우기
//		}
		
		String pwd1 = req.getParameter("memberPwd");
		String pwd2 = req.getParameter("memberPwdCheck");
		String msg = "";
		if(pwd1.equals(pwd2)){
			msg = "성공!";
		}else{
			msg = "실패!";		
		}
		req.setAttribute("x", msg);
		//결과처리 == 문자열 내보내기
		req.getRequestDispatcher("/WEB-INF/views/common/result.jsp").forward(req, resp);
	}
	
}
