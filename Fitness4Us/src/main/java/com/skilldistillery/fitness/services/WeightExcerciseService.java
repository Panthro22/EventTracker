package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.WeightExcercise;

public interface WeightExcerciseService {
	List<WeightExcercise> getAllWeightExcercise();
	WeightExcercise getWeightExcerciseById(int weightExcerId);
	WeightExcercise updateWeightExcercise(WeightExcercise weightExcer);
	WeightExcercise createWeightExcercise(WeightExcercise weightExcer);
	void deleteWeightExcercise(WeightExcercise weightExcer);
}
