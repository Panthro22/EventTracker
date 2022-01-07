package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.User;

public interface UserService {
	List<User> getAllUser();
	User getUserById(int userId);
	User updateUserById(int userId);
}
