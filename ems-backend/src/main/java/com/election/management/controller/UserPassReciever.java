package com.election.management.controller;

import org.springframework.stereotype.Component;

import com.election.management.encryption.encryptor;

@Component
public class UserPassReciever {
	private String userName;
	private String password;
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		encryptor e = new encryptor();
		password=e.encryptnow(password);
		this.password = password;
	}
}
