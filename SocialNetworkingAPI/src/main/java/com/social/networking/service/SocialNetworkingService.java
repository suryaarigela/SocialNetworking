package com.social.networking.service;

import java.net.UnknownHostException;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.socialnetworking.dto.User;

public class SocialNetworkingService {
	
	//public static final String HOST_NAME="DESKTOP-CT2M5LA";
	public static final String HOST_NAME="192.168.178.23";
	//public static final Sting HOST_NAME="Deleep-PC";

	static DB db = null;

	public SocialNetworkingService() throws UnknownHostException {
		if (db == null) {
			MongoClient mongo = new MongoClient(HOST_NAME, 27017);
			db = mongo.getDB("social_network");
		}
	}

	public int getUser(String username, String password)
			throws UnknownHostException {

		DBObject query = new BasicDBObject("alias", username).append("password", password);
		DBCollection collection = db.getCollection("USER_DATA");

		long cursor = collection.count(query);

		System.out.println(cursor);
		return 0;
	}

	public int addUser(User user) {

		if (checkIfUserExists(user)) {

			DBObject person = new BasicDBObject("firstName",
					user.getFirstName()).append("lastName", user.getLastName())
					.append("email", user.getEmail())
					.append("aliasName", user.getAliasName())
					.append("password", user.getPassword())
					.append("mobileNr", user.getMobileNr());

			try {
				db.getCollection("USER_DATA").insert(person);
				return 1;
			} catch (Exception e) {
				return 0;
			}
		} else {
			return 0;
		}

	}

	private boolean checkIfUserExists(User user) {
		DBCollection collection = db.getCollection("USER_DATA");
		DBObject query1 = new BasicDBObject("alias", "arya");
		long cursor1 = collection.count(query1);
		if (cursor1 > 0) {
			return false;
		}
		DBObject query2 = new BasicDBObject("email", "arya");
		long cursor2 = collection.count(query2);
		if (cursor2 > 0) {
			return false;
		}
		DBObject query3 = new BasicDBObject("alias", "arya").append("email",
				"arya");
		long cursor3 = collection.count(query3);
		if (cursor3 > 0) {
			return false;
		}
		return true;
		

	}

	public static void main(String[] args) throws UnknownHostException {
		SocialNetworkingService s1 = new SocialNetworkingService();

		User user = new User();
		user.setAliasName("madhav");
		user.setFirstName("Madhav");
		user.setLastName("Beddavalou");
		user.setEmail("b.madhavreddy1@gmail.com");
		user.setMobileNr(Long.valueOf("0659423466"));
        user.setPassword("madhav");
		//int result= s1.addUser(user);
		//System.out.println(result);
        //s1.getUser(1, 2);
	}
}
