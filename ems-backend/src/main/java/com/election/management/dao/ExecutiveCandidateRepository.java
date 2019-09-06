package com.election.management.dao;

import org.springframework.data.repository.CrudRepository;

import com.election.management.dto.ExecutiveCandidate;

public interface ExecutiveCandidateRepository extends CrudRepository<ExecutiveCandidate, Long>{
	
	public ExecutiveCandidate findByMembershipId(String membershipId);


}
