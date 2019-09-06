package com.election.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.election.management.dao.ExecutiveCandidateRepository;
import com.election.management.dao.PresidentCandidateRepository;
import com.election.management.dto.ExecutiveCandidate;
import com.election.management.dto.PresidentCandidate;
import com.election.management.encryption.encryptor;

@Service
public class VoteCountService {

	@Autowired
	ExecutiveCandidateRepository executiveCandidateRepository;
	@Autowired
	PresidentCandidateRepository presidentCandidateRepository;

	public void countForPresident(String membershipId) {
		PresidentCandidate presidentForUpdate = presidentCandidateRepository.findByMembershipId(membershipId);
		
		int newCount = presidentForUpdate.getCount();
		newCount++;
		presidentForUpdate.setCount(newCount);
		System.out.println("hello");
		presidentCandidateRepository.save(presidentForUpdate);
	}

	public void countForExecutive(List<String> list) {
		for (int i = 0; i < list.size(); i++) {
			System.err.println(list.get(i));
			ExecutiveCandidate exeForUp = executiveCandidateRepository.findByMembershipId(list.get(i));
			int newCount = exeForUp.getCount();
			newCount++;
			exeForUp.setCount(newCount);
			executiveCandidateRepository.save(exeForUp);
		}
	}

}
