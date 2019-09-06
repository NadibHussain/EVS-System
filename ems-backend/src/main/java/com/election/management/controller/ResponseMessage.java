package com.election.management.controller;

import org.springframework.stereotype.Component;

import com.election.management.dto.Voter;

@Component
public class ResponseMessage {
	
	private String message;
	private String status;
	private Voter profile;

	public Voter getProfile() {
		return profile;
	}

	public void setProfile(Voter profile) {
		this.profile = profile;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
