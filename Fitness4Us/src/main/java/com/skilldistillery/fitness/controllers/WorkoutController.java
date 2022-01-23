package com.skilldistillery.fitness.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.fitness.entities.Workout;
import com.skilldistillery.fitness.services.WorkoutService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4203" })
public class WorkoutController {
	
	@Autowired
	private WorkoutService workSvc;
	
	@GetMapping("workouts")
	public List<Workout> index(){
		return workSvc.getAllWorkouts();
	}
	@GetMapping("workouts/{workId}")
	public Workout getWorkoutById(@PathVariable int workId){
		return workSvc.getWorkoutById(workId);
	}
	@PutMapping("workouts")
	public Workout updateWorkout(@RequestBody Workout workout) {
		return workSvc.updateWorkout(workout);			
	}
	@PostMapping("workouts")
	public Workout createWorkout(@RequestBody Workout workout) {
		return workSvc.updateWorkout(workout);			
	}
	@DeleteMapping("workouts")
	public void deleteWorkout(@RequestBody Workout workout){
		workSvc.deleteWorkout(workout);
	}
}
