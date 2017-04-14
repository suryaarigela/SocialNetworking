package com.socialnetworking.dto;

public class User {

	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private long mobileNr;
	
	private String aliasName;
	
	private String password;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getMobileNr() {
		return mobileNr;
	}

	public void setMobileNr(long mobileNr) {
		this.mobileNr = mobileNr;
	}

	public String getAliasName() {
		return aliasName;
	}

	public void setAliasName(String aliasName) {
		this.aliasName = aliasName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
