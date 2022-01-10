package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.WeightTraining;

public interface WeightTrainingService {
	List<WeightTraining> getAllWeightTraining();
	WeightTraining getWeightTrainingById(int weightTrainId);
	WeightTraining updateWeightTraining(WeightTraining weightTrain);
	WeightTraining createWeightTraining(WeightTraining weightTrain);
	void deleteWeightTraining(WeightTraining weightTrain);
}
