<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

  <div class="TodoApp">
    <div class="container">
            <div>
                <table class="table">
                    <thead>
                            <tr>
                                <th>전체삭제
                                    &nbsp;
                                    <input type="checkbox" name="allCheck" id="allCheck"></th>
                                <th>번호</th>
                                <th>상품이미지</th>
                                <th>상품정보</th>
                                <th>상품가격</th>
                                <th>상품수량</th>
                                <th>합계</th>
                                <th>날짜</th>
                                <th>Delete</th>
                            </tr>
                    </thead>
                    <tbody>
                 
						 <tr>
						            <td><input type="checkbox" name="check"  class="check"></td> 
					                <td>21</td> 
                                    <td><img src="images/items/top1.gif" width="50" height="50" ></td>
                                    <td>T01&nbsp;/&nbsp;L&nbsp;/&nbsp;grey</td>
                                    <td>1400</td>
                                    <td>3</td>
                                    <td>4200</td>
                                    <td>2023/05/23</td>
                                    <td> <a href="#" class="btn btn-warning" >Delete</a> </td>
						</tr>
					
					    <tr>
					      <td></td>
					      <td></td>
					      <td></td>
					      <td></td>
					      <td></td>
					      <td colspan="3">총합: &nbsp; 4200</td>
					    </tr>
                    </tbody>

                  </table>
              </div>
             <div class="btn btn-success m-5">전체삭제</div>
        </div>
    </div>
