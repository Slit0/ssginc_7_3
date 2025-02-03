package com.exam.security;

// token 저장 기능
public class JwtTokenResponse {

	String token;
	String userid;

	public JwtTokenResponse() {}

	public JwtTokenResponse(String token, String userid) {
		super();
		this.token = token;
		this.userid = userid;
	}

	public String getToken() {
		return token;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public void setToken(String token) {
		this.token = token;
	}

	@Override
	public String toString() {
		return "JwtTokenResponse [token=" + token + ", userid=" + userid + "]";
	}

}
