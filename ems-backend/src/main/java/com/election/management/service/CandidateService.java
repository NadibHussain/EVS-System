package com.election.management.service;

import java.util.LinkedList;
import java.util.UUID;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.election.management.dao.ExecutiveCandidateRepository;
import com.election.management.dao.PresidentCandidateRepository;
import com.election.management.dto.PresidentCandidate;
import com.election.management.dto.Voter;
import com.election.management.encryption.encryptor;
import com.election.management.utility.StorageService;
import com.election.management.dto.ExecutiveCandidate;

@Service
public class CandidateService {

	@Autowired
	PresidentCandidateRepository presidentCandidateRepository;
	@Autowired
	ExecutiveCandidateRepository executiveCandidateRepository;

	@Autowired
	private StorageService storageService;
	
	@Autowired
	private RandomNumberGenerator random;
	
	public LinkedList<PresidentCandidate> getListOfAllPresidentCandidate(String fileDownloadUri) {
		Iterable<PresidentCandidate> iter = presidentCandidateRepository.findAll();
		LinkedList<PresidentCandidate> list = new LinkedList<>();
		for (PresidentCandidate i : iter) {
			i.setUrl(fileDownloadUri+i.getImageName());
			i.setCount(i.getCount());
			list.add(i);
		}

		return list;
	}
	
	public LinkedList<ExecutiveCandidate> getListOfAllExecutiveCandidate(String fileDownloadUri) {
		Iterable<ExecutiveCandidate> iter = executiveCandidateRepository.findAll();
		LinkedList<ExecutiveCandidate> list = new LinkedList<>();
		for (ExecutiveCandidate i : iter) {
			i.setUrl(fileDownloadUri+i.getImageName());
			encryptor e=new encryptor();
			i.setCount(i.getCount());
			list.add(i);
		}

		return list;
	}
	public String addPresident(PresidentCandidate president, MultipartFile file) {
		String code = "President_" + UUID.randomUUID().toString().substring(26).toUpperCase();
		String extention = "." + FilenameUtils.getExtension(file.getOriginalFilename());
		president.setImageName(code + extention);
		
		if(presidentCandidateRepository.findByMembershipId(president.getMembershipId()) ==  null) {
			storageService.storePresident(file, code, extention);
			president.setCount(0);
			presidentCandidateRepository.save(president);
			return "successfull";
		}else {
			return "denied";
		}
		
	}
	
	
	public String addExecutive(ExecutiveCandidate executive, MultipartFile file) {
		String code = "Executive_" + UUID.randomUUID().toString().substring(26).toUpperCase();
		String extention = "." + FilenameUtils.getExtension(file.getOriginalFilename());
		executive.setImageName(code + extention);
		
		if(executiveCandidateRepository.findByMembershipId(executive.getMembershipId()) ==  null) {
			storageService.storePresident(file, code, extention);
			executive.setCount(0);
			executiveCandidateRepository.save(executive);
			return "successfull";
		}else {
			return "denied";
		}
		
		

	}
	
	public void deletePresident(String id) {
		PresidentCandidate v = presidentCandidateRepository.findByMembershipId(id);
		presidentCandidateRepository.delete(v);
	}
	
	public void deleteExecutive(String id) {
		ExecutiveCandidate v = executiveCandidateRepository.findByMembershipId(id);
		executiveCandidateRepository.delete(v);
	}
}
