package com.election.management.encryption;

public class encryptor {

	//constructor
	public encryptor() {
		
	}
	
	
	public String encryptnow(String str){
		byte[] b = str.getBytes();
		byte[] enc =new byte[b.length];
		for(int i=0;i<b.length;i++) {
			enc[i]=(byte)((i%2==0)?b[i]+20:b[i]-25);
		}
		String encrypted =new String(enc);
		System.err.println(encrypted);
		return encrypted;
	}
	
	public String decryptnow(String str){
		byte[] b = str.getBytes();
		byte[] enc =new byte[b.length];
		for(int i=0;i<b.length;i++) {
			enc[i]=(byte)((i%2==0)?b[i]-20:b[i]+25);
		}
		String decrypted =new String(enc);
		return decrypted;
	}
}
