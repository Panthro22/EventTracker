package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.CardioExcercise;
import com.skilldistillery.fitness.repositories.CardioExcerciseRepository;

@Service
public class CardioExcerciseServiceImpl implements CardioExcerciseService {
	@Autowired
	private CardioExcerciseRepository cardioExRepo;
	@Override
	public List<CardioExcercise> getAllCardioExcercises() {
		return cardioExRepo.findAll();
	}

	@Override
	public CardioExcercise getCardioExcerciseById(int cardioExId) {
		return cardioExRepo.findById(cardioExId).get();
	}

	@Override
	public CardioExcercise updateCardioExcercise(CardioExcercise cardioEx) {
		return cardioExRepo.saveAndFlush(cardioEx);
	}

	@Override
	public CardioExcercise createCardioExcercise(CardioExcercise cardioEx) {
		return cardioExRepo.saveAndFlush(cardioEx);
	}

	@Override
	public void deleteCardioExcercise(CardioExcercise cardioEx) {
		cardioExRepo.delete(cardioEx);

	}

}
