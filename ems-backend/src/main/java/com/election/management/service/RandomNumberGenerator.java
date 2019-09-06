package com.election.management.service;

import java.util.Random;

import org.springframework.stereotype.Component;

@Component
public class RandomNumberGenerator {

	public String getRandomNumberString() {
	    // It will generate 6 digit random Number.
	    // from 0 to 999999
	    Random rnd = new Random();
	    int number = rnd.nextInt(9999);
	    // this will convert any number sequence into 6 character.
	    return String.format("%04d", number);
	}
}
