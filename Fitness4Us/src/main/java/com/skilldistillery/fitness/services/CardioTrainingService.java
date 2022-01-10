package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.CardioTraining;

public interface CardioTrainingService {
	List<CardioTraining> getAllCardioTrainings();
	CardioTraining getCardioTrainingById(int cardioTId);
	CardioTraining updateCardioTraining(CardioTraining cardioT);
	CardioTraining createCardioTraining(CardioTraining cardioT);
	void deleteCardioTraining(CardioTraining cardioT);
}
