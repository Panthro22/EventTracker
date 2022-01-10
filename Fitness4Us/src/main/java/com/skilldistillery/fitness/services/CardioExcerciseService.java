package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.CardioExcercise;

public interface CardioExcerciseService {
	List<CardioExcercise> getAllCardioExcercises();
	CardioExcercise getCardioExcerciseById(int cardioExId);
	CardioExcercise updateCardioExcercise(CardioExcercise cardioEx);
	CardioExcercise createCardioExcercise(CardioExcercise cardioEx);
	void deleteCardioExcercise(CardioExcercise cardioEx);
}
