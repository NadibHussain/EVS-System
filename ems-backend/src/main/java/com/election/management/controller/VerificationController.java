package com.election.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.election.management.dto.Voter;
import com.election.management.service.VerificationService;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/verify")
public class VerificationController {
	
	@Autowired
	private VerificationService verificationService;
	
	@Autowired
	private ResponseMessage responseMessage;
	
	@PostMapping("/login")
	public ResponseMessage verifyLogin(@RequestBody UserPassReciever userPass) {
		Object[] message =  verificationService.loginVerification(userPass);
		responseMessage.setStatus(message[0].toString());
		responseMessage.setMessage(message[1].toString());
		responseMessage.setProfile((Voter)message[2]);
		return responseMessage;
	}
}
