package com.election.management.dao;

import org.springframework.data.repository.CrudRepository;

import com.election.management.dto.PresidentCandidate;

public interface PresidentCandidateRepository extends CrudRepository<PresidentCandidate, Long>{
	
	public PresidentCandidate findByMembershipId(String membershipId);

}
