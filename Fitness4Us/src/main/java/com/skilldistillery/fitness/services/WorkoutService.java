package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.Workout;

public interface WorkoutService {
	List<Workout> getAllWorkouts();
	Workout getWorkoutById(int workoutId);
	Workout updateWorkout(Workout workout);
	Workout createWorkout(Workout workout);
	void deleteWorkout(Workout workout);
}
