package com.election.management.dao;

import com.election.management.dto.Voter;
import org.springframework.data.repository.CrudRepository;


public interface VoterRepository extends CrudRepository<Voter, Long> {
	public Voter findByMembershipId(String membershipId);
	public Voter findByPassword(String password);
	
}
