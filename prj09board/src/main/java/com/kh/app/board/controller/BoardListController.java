package com.kh.app.board.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/board/list")
public class BoardListController extends HttpServlet{

	
	//목록조회
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		//디비에서 데이터 가져오기
//		List<BoardVo> BoardVoList = new BoardDao().selectBoardList();
		
		//결과처리 == 문자열 내보내기
//		req.setAttribute(, resp);
		req.getRequestDispatcher("/WEB-INF/views/board/list.jsp").forward(req, resp);	
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
	}
	
	
	
	
	
	
}
