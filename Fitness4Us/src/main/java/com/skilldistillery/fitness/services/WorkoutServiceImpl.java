package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.Workout;
import com.skilldistillery.fitness.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {
	
	@Autowired
	private WorkoutRepository workRepo;
	
	@Override
	public List<Workout> getAllWorkouts() {
		return workRepo.findAll();
	}

	@Override
	public Workout getWorkoutById(int workoutId) {
		return workRepo.findById(workoutId).get();
	}

	@Override
	public Workout updateWorkout(Workout workout) {
		return workRepo.saveAndFlush(workout);
	}

	@Override
	public Workout createWorkout(Workout workout) {
		
		return workRepo.saveAndFlush(workout);
	}

	@Override
	public void deleteWorkout(Workout workout) {
		workRepo.delete(workout);

	}

}
