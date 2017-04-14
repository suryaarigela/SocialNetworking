package com.social.networking.controller;

import java.net.UnknownHostException;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.social.networking.service.SocialNetworkingService;
import com.socialnetworking.dto.User;

@RestController
@RequestMapping("/login")
public class SocialNetworkingController {

	private SocialNetworkingService socialNetworkingService;

	private Logger logger = LoggerFactory
			.getLogger(SocialNetworkingController.class);

	// Note: The @Named("bookService") is not required in this example (as there
	// only instance of BookService around)
	@Inject
	public SocialNetworkingController(
			@Named("socialNetworkingService") SocialNetworkingService socialNetworkingService) {
		this.socialNetworkingService = socialNetworkingService;
	}

	@RequestMapping(value = "verify/{username}/{password}", method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<HttpStatus> getUser(
			@PathVariable("username") String username,
			@PathVariable("password") String password)
			throws UnknownHostException {
		logger.debug("Provider has received request to get person with username: "
				+ username);
		logger.debug("Provider has received request to get person with password: "
				+ password);
		int user = socialNetworkingService.getUser(username, password);
		if (user != 0) {
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.NOT_FOUND);
		}

	}

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity addUser(@RequestBody User user) {
		System.out.println("we are here");
		int result=socialNetworkingService.addUser(user);
		if(result==1){
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}else{
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}

}
