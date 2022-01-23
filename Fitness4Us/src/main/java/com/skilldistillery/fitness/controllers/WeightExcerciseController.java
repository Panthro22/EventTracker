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

import com.skilldistillery.fitness.entities.WeightExcercise;
import com.skilldistillery.fitness.services.WeightExcerciseService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4203" })
public class WeightExcerciseController {
	@Autowired
	private WeightExcerciseService weightExSvc;
	
	@GetMapping("weightExcercises")
	public List<WeightExcercise> index(){
		return weightExSvc.getAllWeightExcercise();
	}
	@GetMapping("weightExcercises/{weightExId}")
	public WeightExcercise getLogById(@PathVariable int weightExId){
		return weightExSvc.getWeightExcerciseById(weightExId);
	}
	@PutMapping("weightExcercises")
	public WeightExcercise updateLog(@RequestBody WeightExcercise weightEx){
		return weightExSvc.updateWeightExcercise(weightEx);
	}
	@PostMapping("weightExcercises")
	public WeightExcercise createLog(@RequestBody WeightExcercise weightEx) {
		return weightExSvc.createWeightExcercise(weightEx);
	}
	@DeleteMapping("weightExcercises")
	public void deleteLog(@RequestBody WeightExcercise weightEx) {
		weightExSvc.deleteWeightExcercise(weightEx);
	}
}
