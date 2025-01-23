<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
  <div class="TodoApp">
    <div class="container">
            <div class="Login">
            <h1>로그인 화면</h1>
            <div class="LoginForm">
              <form action="auth" method="post">
<%--                 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> --%>
                <div>
                    <label for="userid">userid:</label>
                    <input type="text" name="userid"  />
                </div>
                <div>
                    <label for="passwd">passwd:</label>
                    <input type="password" name="passwd"  />
                    
                </div>
                <div>
                    <button name="login" class="btn btn-success m-5" >login</button>
                </div>
               </form> 
            </div>
        </div>
        </div>
    </div>
