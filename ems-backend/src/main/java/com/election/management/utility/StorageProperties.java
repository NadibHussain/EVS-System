package com.election.management.utility;

import java.io.File;

import org.springframework.boot.context.properties.ConfigurationProperties;



@ConfigurationProperties(prefix="storage")
public class StorageProperties {

    /**
     * Folder location for storing files
     * 
     */
	String unixUser  = System.getProperty("user.name");
	
    private String location = "D:\\code\\election\\election_management_system_backend\\voter_list_images";
    private String locationpresident = "D:\\code\\election\\election_management_system_backend\\president_list_images";
    
    public StorageProperties() {
    	if(!new File(this.location).exists()) {
			new File(this.location).mkdirs();
		}
    	if(!new File(this.locationpresident).exists()) {
			new File(this.locationpresident).mkdirs();
		}
    }
    
    public String getLocation() {
        return location;
    }
    
    public String getPresidentLocation() {
        return locationpresident;
    }

    public void setLocation(String location) {
        this.location = location;
    }

}
