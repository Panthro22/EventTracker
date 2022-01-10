package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.WeightExcercise;
import com.skilldistillery.fitness.repositories.WeightExcerciseRepository;

@Service
public class WeightExcerciseServiceImpl implements WeightExcerciseService {
	
	@Autowired
	WeightExcerciseRepository weightExRepo;
	
	@Override
	public List<WeightExcercise> getAllWeightExcercise() {
		return weightExRepo.findAll();
	}

	@Override
	public WeightExcercise getWeightExcerciseById(int weightExcerId) {
		return weightExRepo.findById(weightExcerId).get();
	}

	@Override
	public WeightExcercise updateWeightExcercise(WeightExcercise weightExcer) {
		return weightExRepo.saveAndFlush(weightExcer);
	}

	@Override
	public WeightExcercise createWeightExcercise(WeightExcercise weightExcer) {
		return weightExRepo.saveAndFlush(weightExcer);
	}

	@Override
	public void deleteWeightExcercise(WeightExcercise weightExcer) {
		weightExRepo.delete(weightExcer);

	}

}
