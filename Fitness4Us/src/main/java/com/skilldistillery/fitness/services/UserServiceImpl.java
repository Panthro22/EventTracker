package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.User;
import com.skilldistillery.fitness.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}

	@Override
	public User getUserById(int userId) {
		
		return userRepo.findById(userId).get();
	}

	@Override
	public User updateUserById(User user) {
		return userRepo.saveAndFlush(user);
	}

	@Override
	public User createUser(User user) {
		return userRepo.saveAndFlush(user);
	}

	@Override
	public void deleteUser(User user) {
		userRepo.delete(user);
	}

}
