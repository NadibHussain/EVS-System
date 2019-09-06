package com.election.management.controller;

import java.io.IOException;
import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.election.management.encryption.encryptor;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(maxAge = 3600)
@RestController
public class HelloController {
	
	@RequestMapping(path="/")
	public String sayHello() {	

		return "Welcome to Election Management System";
		
	}
	

	@PostMapping("/test")
	public void testReq(@RequestBody String ids) throws IOException{
		
		List<String> listCar = new ObjectMapper().readValue(ids, LinkedList.class);
		/*
		 * System.out.println(ids.size()); for(String s:ids) { System.out.println(s); }
		 */
		for(int i=0; i<listCar.size(); i++) {
			System.out.println(listCar.get(i));
		}
		System.out.println(listCar.getClass().getName());
		
	}

}
