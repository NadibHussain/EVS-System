package com.election.management.controller;

import com.election.management.dto.ExecutiveCandidate;
import com.election.management.dto.PresidentCandidate;
import com.election.management.dto.Voter;
import com.election.management.service.CandidateService;
import com.election.management.service.VoterListService;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(maxAge = 3600)
@RestController
public class VoterListController {

	private static final Logger logger = LoggerFactory.getLogger(VoterListController.class);

	@Autowired
	private VoterListService voterListService;
	
	@Autowired
	private CandidateService candidateListService;
	
	@Autowired
	private ResponseMessage responseMessage;


	@GetMapping("/get")
	public List<Voter> getVoterList(HttpServletRequest request) {
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.toUriString();
		List<Voter> voterList = voterListService.getVoterList(fileDownloadUri);
		return voterList;
	}
	
	
	@GetMapping("/get/{id}")
	public Voter getByMemebershipId(@PathVariable(required = true) String id, HttpServletRequest request) {
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.toUriString();
		return voterListService.getVoterByMembershipId(id, fileDownloadUri);
	}

	@PostMapping("/add")
	public ResponseMessage addFIle(@RequestPart("voter") String voterProperties, @RequestPart("file") MultipartFile file)
			throws IOException {

		Voter voter = new ObjectMapper().readValue(voterProperties, Voter.class);
		String message = voterListService.addVoter(voter, file);
		responseMessage.setMessage(message);
		return responseMessage;
	}
	
	@PostMapping("/addPresident")
	public ResponseMessage addFIlePresident(@RequestPart("president") String presidentProperties, @RequestPart("file") MultipartFile file)
			throws IOException {

		PresidentCandidate president = new ObjectMapper().readValue(presidentProperties, PresidentCandidate.class);
		String message = candidateListService.addPresident(president, file);
		responseMessage.setMessage(message);
		return responseMessage;
	}
	
	@PostMapping("/addExecutive")
	public ResponseMessage addFIleExecutive(@RequestPart("executive") String presidentProperties, @RequestPart("file") MultipartFile file)
			throws IOException {

		ExecutiveCandidate Executive = new ObjectMapper().readValue(presidentProperties, ExecutiveCandidate.class);
		String message = candidateListService.addExecutive(Executive, file);
		responseMessage.setMessage(message);
		return responseMessage;
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteByMembershipID(@PathVariable(required = true) String id) {
		voterListService.deleteVoter(id);
		
	}
	
	
	

}
