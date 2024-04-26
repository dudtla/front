<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>작성</title>
</head>
<body>

	<h1>게시글 작성</h1>

	<hr>
	
	<a href="http://127.0.0.1:8888/app09/home">홈으로</a>
	
	<hr>
	
	<form action="http://127.0.0.1:8888/app09/board/insert" method="post">
	<input type="text" placeholder="제목을 작성하세요">
	<br>
	<textarea name="content" placeholder="내용을 작성하세요"></textarea>
	<br>
	<input type="submit" value="작성하기">
	</form>
</body>
</html>