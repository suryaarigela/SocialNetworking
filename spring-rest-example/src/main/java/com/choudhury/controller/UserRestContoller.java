package com.choudhury.controller;

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

import com.second.bazar.model.User;
import com.second.bazar.model.ValidUser;
import com.second.bazar.service.SecondBazarService;



@RestController
@RequestMapping("/bazar")
public class UserRestContoller {
	
	private SecondBazarService secondBazarService;

    private Logger logger=LoggerFactory.getLogger(UserRestContoller.class);


    //Note: The @Named("bookService") is not required in this example (as there only instance of BookService around)
    @Inject
    public UserRestContoller(@Named("secondBazarService") SecondBazarService secondBazarService )
    {
        this.secondBazarService=secondBazarService;
    }
	
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity addUser(@RequestBody User user) {
		System.out.println("we are here");
		int result=secondBazarService.addUser(user);
		if(result==1){
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}else{
			return new ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST);
		}
	}
	
	  @RequestMapping(value = "/auth/{uname}/{pwd}",method = RequestMethod.GET)
	    @ResponseStatus(HttpStatus.OK)
	    public ValidUser verify(@PathVariable("uname") String username,@PathVariable("pwd") String password) {
	        logger.debug("Provider has received request to get person with id: ");
	        return  secondBazarService.verify(username,password);
	    }
	     

}
