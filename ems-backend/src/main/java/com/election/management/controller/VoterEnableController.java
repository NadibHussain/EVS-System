package com.election.management.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.election.management.dao.VoterRepository;
import com.election.management.dto.EnableDTO;
import com.election.management.dto.Voter;
import com.fasterxml.jackson.databind.ObjectMapper;

import net.bytebuddy.description.modifier.MethodArguments;

@CrossOrigin(maxAge = 3600)
@RestController
public class VoterEnableController {
	@Autowired
	private VoterRepository voterRepository;
	

	@RequestMapping(method = RequestMethod.POST,value="/enable")
	public String enable(@RequestBody EnableDTO e ) {
		Voter voter;
		
		voter = voterRepository.findByMembershipId(e.getId());
		
		
		if(!voter.isVoteGiven())
		{
			voter.setEnable(e.isEnable());
			voterRepository.save(voter);
			return "Success";
		}
		return "Already Vote given";
		
	}

}
