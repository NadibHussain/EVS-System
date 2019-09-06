package com.election.management.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.ColumnDefault;

import com.election.management.encryption.encryptor;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "president_candidate")
public class PresidentCandidate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonIgnore
	private Long id;
	private String name;
	
	@Column(unique=true, nullable=false)
	private String membershipId;

	@Column(name = "count", nullable = false)
	@ColumnDefault("0")
	private String count;
	
	@JsonIgnore
	private String imageName;

	@Transient
	private String url;
	

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

	public String getMembershipId() {
		return membershipId;
	}

	public void setMembershipId(String membershipId) {
		this.membershipId = membershipId;
	}

	public int getCount() {
		encryptor e=new encryptor();
		int countnumber=Integer.parseInt(e.decryptnow(count));
		return countnumber;
	}

	public void setCount(int count) {
		encryptor e=new encryptor();
		String countstring=count+"";
		countstring=e.encryptnow(countstring);
		this.count = countstring;
	}

	public String getImageName() {
		return imageName;
	}

	public void setImageName(String imageName) {
		this.imageName = imageName;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}
