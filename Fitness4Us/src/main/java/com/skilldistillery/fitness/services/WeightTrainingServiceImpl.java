package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.WeightTraining;
import com.skilldistillery.fitness.repositories.WeightTrainingRepository;

@Service
public class WeightTrainingServiceImpl implements WeightTrainingService {
	
	@Autowired
	private WeightTrainingRepository weightRepo;
	@Override
	public List<WeightTraining> getAllWeightTraining() {
		return weightRepo.findAll();
	}

	@Override
	public WeightTraining getWeightTrainingById(int weightTrainId) {
		return weightRepo.findById(weightTrainId).get();
	}

	@Override
	public WeightTraining updateWeightTraining(WeightTraining weightTrain) {
		return weightRepo.saveAndFlush(weightTrain);
	}

	@Override
	public WeightTraining createWeightTraining(WeightTraining weightTrain) {
		return weightRepo.saveAndFlush(weightTrain);
	}

	@Override
	public void deleteWeightTraining(WeightTraining weightTrain) {
		weightRepo.delete(weightTrain);

	}

}
