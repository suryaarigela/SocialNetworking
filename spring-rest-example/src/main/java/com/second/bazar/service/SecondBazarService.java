package com.second.bazar.service;

import java.net.UnknownHostException;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import com.second.bazar.model.User;
import com.second.bazar.model.ValidUser;

public class SecondBazarService {

	static Connection con = null;

	public int addUser(User user) {
		PreparedStatement stmt = null;
		try {
			// Create connection to RDS DB instance
			// conn = DriverManager.getConnection(jdbcUrl);

			// Create a table and write two rows
			String sql = "INSERT INTO USER VALUES (?, ?, ?, ?)";
			stmt = (PreparedStatement) con.prepareStatement(sql);
			// String createTable = "CREATE TABLE Beanstalk (Resource
			// char(50));";
			stmt.setString(1, user.getEmail());
			stmt.setString(2, user.getUserName());
			stmt.setString(3, user.getPassword());
			stmt.setString(4, user.getEmail());
			stmt.executeUpdate();
            return 1;
		} catch (SQLException ex) {
        ex.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.out.println("Closing the connection.");
			if (stmt != null)
				try {
					stmt.close();
				} catch (SQLException ignore) {
				}
		}
		return 0;
	}
	
	public void deleteUser(String email){

		PreparedStatement stmt = null;
		try {
			// Create connection to RDS DB instance
			// conn = DriverManager.getConnection(jdbcUrl);

			// Create a table and write two rows
			String sql = "delete  from USER where email=?";
			stmt = (PreparedStatement) con.prepareStatement(sql);
			// String createTable = "CREATE TABLE Beanstalk (Resource
			// char(50));";
			stmt.setString(1, email);
			
			stmt.executeUpdate();
		} catch (SQLException ex) {
        ex.printStackTrace();
		}catch (Exception e) {
			e.printStackTrace();
		} finally {
			System.out.println("Closing the connection.");
			if (stmt != null)
				try {
					stmt.close();
				} catch (SQLException ignore) {
				}
		}
	
	}

	public SecondBazarService() throws UnknownHostException {
		// this.mongoTemplate=mongoTemplate;
		if (con == null) {
			// MongoClient mongo = new MongoClient(HOST_NAME, 27017);
			con = getRemoteConnection();
		}
	}

	private static Connection getRemoteConnection() {

		try {
			Class.forName("com.mysql.jdbc.Driver");
			String dbName = "ebdb";
			String userName = "surya243";
			String password = "padma243";
			String hostname = "aahm4ofm14uhf8.cgjcyfhryeix.us-west-2.rds.amazonaws.com";
			String port = "3306";
			String jdbcUrl = "jdbc:mysql://" + hostname + ":" + port + "/" + dbName + "?user=" + userName
					+ "&password=" + password;
			con = (Connection) DriverManager.getConnection(jdbcUrl);
			return con;
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}catch (Exception e) {
		e.printStackTrace();
		}

		return null;
	}
	
	public static void main(String[] args) throws UnknownHostException {
		SecondBazarService ser=new SecondBazarService();
		User user=new User();
		user.setUserName("Surya Arigela");
		user.setPassword("surya243");
		user.setEmail("suri243@gmail.com");
		//ser.addUser(user);
		ser.deleteUser(user.getEmail());
	}

	public ValidUser verify(String email, String password) {
		PreparedStatement stmt = null;
		try
	    {
	      // create our mysql database connection
	     
	      
	      // our SQL SELECT query. 
	      // if you only need a few columns, specify them by name instead of using "*"
	      String query = "SELECT * FROM USER where email=? and password=?";

	      // create the java statement
	      stmt = (PreparedStatement) con.prepareStatement(query);
	      stmt.setString(1, email);
	      stmt.setString(2, password);
	      // execute the query, and get a java resultset
	      ResultSet rs = stmt.executeQuery();
	      
	      // iterate through the java resultset
	      while (rs.next())
	      {
	        String uid = rs.getString("uid");
	        String name = rs.getString("userName");
	        ValidUser user=new ValidUser();
	        user.setId(uid);user.setuName(name);user.setValidUser("true");
	        return user;
	      }
	     
	    }
		catch (SQLException ex) {
	        ex.printStackTrace();
			}catch (Exception e) {
				e.printStackTrace();
			} finally {
				System.out.println("Closing the connection.");
				if (stmt != null)
					try {
						stmt.close();
					} catch (SQLException ignore) {
					}
			}
		ValidUser user=new ValidUser();
		user.setValidUser("false");
		return user;
	}

}
