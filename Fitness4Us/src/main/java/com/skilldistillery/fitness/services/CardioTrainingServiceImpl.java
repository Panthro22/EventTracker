package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.CardioTraining;
import com.skilldistillery.fitness.repositories.CardioTrainingRepository;

@Service
public class CardioTrainingServiceImpl implements CardioTrainingService {
	@Autowired
	CardioTrainingRepository cardioTRepo;
	@Override
	public List<CardioTraining> getAllCardioTrainings() {
		return cardioTRepo.findAll();
	}

	@Override
	public CardioTraining getCardioTrainingById(int cardioTId) {
		return cardioTRepo.findById(cardioTId).get();
	}

	@Override
	public CardioTraining updateCardioTraining(CardioTraining cardioT) {
		return cardioTRepo.saveAndFlush(cardioT);
	}

	@Override
	public CardioTraining createCardioTraining(CardioTraining cardioT) {
		return cardioTRepo.saveAndFlush(cardioT);
	}

	@Override
	public void deleteCardioTraining(CardioTraining cardioT) {
		cardioTRepo.delete(cardioT);

	}

}
