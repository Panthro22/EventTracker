package com.skilldistillery.fitness.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.fitness.entities.User;
import com.skilldistillery.fitness.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	private UserService userSvc;
	
	@GetMapping("users")
	public List<User> index(){
		return userSvc.getAllUser();
	}
	@GetMapping("users/{userId}")
	public User getUserById(@PathVariable int userId){
		return userSvc.getUserById(userId);
	}
	@PutMapping("users")
	public User updateUser(@RequestBody User user) {
		return userSvc.updateUserById(user);			
	}
	@PostMapping("users")
	public User createUser(@RequestBody User user) {
		return userSvc.createUser(user);			
	}
	@DeleteMapping("users")
	public void deleteUser(@RequestBody User user){
		userSvc.deleteUser(user);
	}

}
