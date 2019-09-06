package com.election.management.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.election.management.encryption.encryptor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "voter_list")
public class Voter {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	
	@Column(unique=true, nullable=false)
	private String membershipId;
	
	

	private String password;
	
	private boolean enable;
	
	private boolean voteGiven;
	
	@JsonIgnore
	private String occupation;
	
	@JsonIgnore
	private String imageName;

	@Transient
	private String url;

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getMembershipId() {
		return membershipId;
	}

	public void setMembershipId(String membershipId) {
		this.membershipId = membershipId;
	}

	public String getPassword() {
		encryptor e=new encryptor();
		String s=e.decryptnow(password);
		return s;
	}

	public void setPassword(String password) {
		encryptor e=new encryptor();
		String s=e.encryptnow(password);
		this.password = s;
	}

	public boolean isVoteGiven() {
		return voteGiven;
	}

	public void setVoteGiven(boolean voteGiven) {
		this.voteGiven = voteGiven;
	}

	public String toString() {
		return "Name: " + this.name + "Occupation: " + this.occupation;
	}
	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}
}
