package com.election.management.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.election.management.dao.VoterRepository;
import com.election.management.dto.Voter;
import com.election.management.service.VoteCountService;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/count")
public class VoteCountController {
	
	@Autowired
	private VoteCountService voteCountService;
	
	@Autowired
	private VoterRepository voterRepository;
	
	@PostMapping("/president")
	public void countForPresidentCandidates(@RequestBody String membershipId) throws IOException{
		String parsedId = new ObjectMapper().readValue(membershipId, String.class);
		voteCountService.countForPresident(parsedId);
	}
	
	@PostMapping("/executive")
	public void countForExecutiveCandidates(@RequestBody String jsonList) throws IOException{
		System.err.println(jsonList);
		List<String> list= Arrays.asList(jsonList.split(","));
		voteCountService.countForExecutive(list);
	}
	
	@PostMapping("/confirm")
	public void confirm(@RequestBody String id) {
		Voter voter = voterRepository.findByMembershipId(id);
		voter.setVoteGiven(true);
		voterRepository.save(voter);
	}
}


















