package com.election.management.controller;

import java.util.LinkedList;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.election.management.dto.PresidentCandidate;
import com.election.management.dto.ExecutiveCandidate;
import com.election.management.service.CandidateService;
/**
 * this class performs routing. 
 * 
 * 
 * @author zaman
 *
 *
 */

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/list")
public class CandidateController {
	
	@Autowired
	CandidateService candidateService;
	
	@RequestMapping("/president")
	public LinkedList<PresidentCandidate> getAllPresidentCandidate(HttpServletRequest request){
		
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.toUriString();
		return candidateService.getListOfAllPresidentCandidate(fileDownloadUri);
	}
	
	@RequestMapping("/executive")
	public LinkedList<ExecutiveCandidate> getAllExecutiveCandidate(HttpServletRequest request){
		String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/downloadFile/")
				.toUriString();
		System.err.println(fileDownloadUri);
		return candidateService.getListOfAllExecutiveCandidate(fileDownloadUri);
	}
	
	@DeleteMapping("/president/delete/{id}")
	public void deleteByMembershipIDPresident(@PathVariable(required = true) String id) {
		candidateService.deletePresident(id);
		
	}
	@DeleteMapping("/executive/delete/{id}")
	public void deleteByMembershipIDexecutive(@PathVariable(required = true) String id) {
		candidateService.deleteExecutive(id);
		
	}
}
