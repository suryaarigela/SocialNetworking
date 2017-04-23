package com.social.networking.service;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.socialnetworking.dto.ExpenseVO;

public class ExpenseService {
    //Note: The @Named("bookService") is not required in this example (as there only instance of BookService around)
   
   

	public static final String HOST_NAME="192.168.2.8";
	//public static final Sting HOST_NAME="Deleep-PC";

	static DB db = null;
	/* @Inject
	public ExpenseService(@Named("mongoTemplate") MongoTemplate mongoTemplate ) throws UnknownHostException {
		 this.mongoTemplate=mongoTemplate;
		if (db == null) {
			MongoClient mongo = new MongoClient(HOST_NAME, 27017);
			db = mongo.getDB("Ionic");
		}
	}*/
	
	public ExpenseService() throws UnknownHostException {
		// this.mongoTemplate=mongoTemplate;
		if (db == null) {
			MongoClient mongo = new MongoClient(HOST_NAME, 27017);
			db = mongo.getDB("Ionic");
		}
	}

	public DBObject getExpense(Long id) {
		DBObject query = new BasicDBObject("id", id);
		DBCollection collection = db.getCollection("Expense");

		DBCursor cursor = collection.find(query);
		while(cursor.hasNext()){
			return cursor.next();
		}
		return null;
	}

	public long addExpense(ExpenseVO expense) {
		DBObject expenseVO = new BasicDBObject("id",
				expense.getId()).append("name", expense.getName())
				.append("category", expense.getCategory())
				.append("amount", expense.getAmount())
				.append("date", expense.getDate())
				;
		db.getCollection("Expense").insert(expenseVO);
		return 1;
	}

	public long updateExpense(Long id) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<DBObject> getAllExpenses() {
		DBCursor cursor = db.getCollection("Expense").find();
		
		List<ExpenseVO> expenseList = new ArrayList<ExpenseVO>();

   /*     while(cursor.hasNext()) {
        //	ExpenseVO foo = mongoTemplate.getConverter().read(ExpenseVO.class, cursor.next());  
           // this is where I want to convert cur.next() into a <User> POJO
        	expenseList.add(foo);
        }*/
		return cursor.toArray();
	}

}
