package com.election.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.election.management.controller.UserPassReciever;
import com.election.management.dao.VoterRepository;
import com.election.management.dto.Voter;
import com.election.management.encryption.encryptor;

@Service
public class VerificationService {
	
	@Autowired
	private VoterRepository voterRepository;
	
	public Object[] loginVerification(UserPassReciever userPass) {
		String password=userPass.getPassword();
		Object[] res=new Object[3];
		if(password == null || password=="") {
			res[0]="denied";
			res[1]="please enter passowrd";
			return res;
		}
		
		Voter voter = voterRepository.findByPassword(password);
		
		if (voter == null) {
			res[0]="denied";
			res[1]="Wrong Password";
			return res;
		}
				
		if(password.equals(userPass.getPassword())
				&& !userPass.getPassword().equals("") 
				&& !userPass.getPassword().equals(null) 
				&& !voter.isVoteGiven()
				&& voter.isEnable()) {
			voter.setEnable(false);
			voter.setVoteGiven(true);
			voterRepository.save(voter);
			res[0]="access";
			res[1]=voter.getMembershipId()+"";
			res[2]=voter;
			return res;
		}else if(voter.isVoteGiven()){
			res[0]="denied";
			res[1]="You have already voted";
			return res;
		}
		else if(!voter.isEnable()){
			res[0]="denied";
			res[1]="Your Voting is not enabled yet";
			return res;
		}else{
			res[0]="denied";
			res[1]="Wrong Password";
			return res;
		}
	}
}
