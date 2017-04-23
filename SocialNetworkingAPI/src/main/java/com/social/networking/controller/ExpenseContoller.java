package com.social.networking.controller;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mongodb.DBObject;
import com.social.networking.service.ExpenseService;
import com.socialnetworking.dto.ExpenseVO;


@RestController
@RequestMapping("/expenses")
public class ExpenseContoller {



    private ExpenseService expenseService;

    private Logger logger=LoggerFactory.getLogger(ExpenseContoller.class);


    //Note: The @Named("bookService") is not required in this example (as there only instance of BookService around)
    @Inject
    public ExpenseContoller(@Named("expenseService") ExpenseService expenseService )
    {
        this.expenseService=expenseService;
    }


    @RequestMapping(value = "/{id}",method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public DBObject getExpense(@PathVariable("id") Long id) {
        logger.debug("Provider has received request to get person with id: " + id);
        return expenseService.getExpense(id);
    }
    
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List getExpense() {
        logger.debug("Provider has received request to get person with id: ");
        return (List) expenseService.getAllExpenses();
    }

    @RequestMapping(value = "/add",  method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public long addExpense(@RequestBody ExpenseVO expense)
    {
        return expenseService.addExpense(expense);
    }

    @RequestMapping(value = "/update/{id}",  method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    public long addExpense(@PathVariable("id") Long id)
    {
        return expenseService.updateExpense(id);
    }
}
