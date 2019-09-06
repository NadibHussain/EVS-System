package com.election.management.service;

import com.election.management.dao.VoterRepository;
import com.election.management.dto.Voter;
import com.election.management.encryption.encryptor;
import com.election.management.utility.StorageProperties;
import com.election.management.utility.StorageService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
import org.apache.commons.io.FilenameUtils;

@Service
public class VoterListService {

	private static final Logger logger = LoggerFactory.getLogger(VoterListService.class);

	@Autowired
	private VoterRepository voterRepository;

	@Autowired
	private StorageService storageService;
	
	@Autowired
	private RandomNumberGenerator random;

	

	/**
	 * add voter along with Photo to the database. 
	 * 
	 * @param voter Accept a Voter type object as a first parameter
	 * @param file Accept a MultipartFile type file to store in database
	 */
	public String addVoter(Voter voter, MultipartFile file) {
		String code = "VOTER_" + UUID.randomUUID().toString().substring(26).toUpperCase();
		String extention = "." + FilenameUtils.getExtension(file.getOriginalFilename());
		
		
		voter.setImageName(code + extention);
		
		if(voterRepository.findByMembershipId(voter.getMembershipId()) ==  null) {
			storageService.store(file, code, extention);
			voter.setPassword("");
			voterRepository.save(voter);
			return "Voter Added Successfully";
		}else {
			return "Could not Add voter";
		}

	}

	/**
	 * 
	 * @return list of voters
	 */
	public List<Voter> getVoterList(String fileDownloadUri) {
		Iterable<Voter> iter = voterRepository.findAll();
		List<Voter> list = new LinkedList<>();
		for (Voter i : iter) {
			i.setUrl(fileDownloadUri+i.getImageName());
			list.add(i);
		}
		return list;
	}

	/**
	 * 
	 * @param membershipId
	 * @param fileDownloadUri
	 * @return a Voter object 
	 */
	public Voter getVoterByMembershipId(String membershipId, String fileDownloadUri) {
		Voter fetchedVoter = voterRepository.findByMembershipId(membershipId);
		
		fetchedVoter.setUrl(fileDownloadUri+fetchedVoter.getImageName());
		if(fetchedVoter.getPassword() == null || fetchedVoter.getPassword().contentEquals("")) {
			int count=0;
			while(true)
			{	
				String password=random.getRandomNumberString();
				encryptor e=new encryptor();
				String p=e.encryptnow(password);
				Voter voter = voterRepository.findByPassword(p);
				System.err.println(count+"--count");
				System.err.println(voter+"--voter");
				if(voter==null || voter.isVoteGiven())
				{
					fetchedVoter.setPassword(password);
					voterRepository.save(fetchedVoter);
					break;
				}
				count++;
			}			
			
		}
		return fetchedVoter;
	}
	
	public void deleteVoter(String id) {
		Voter v = voterRepository.findByMembershipId(id);
		voterRepository.delete(v);
	}
	
	public void update(String id) {
		Voter v = voterRepository.findByMembershipId(id);
		voterRepository.save(v);
	}
}

















