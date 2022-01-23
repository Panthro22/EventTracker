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

import com.skilldistillery.fitness.entities.WeightTraining;
import com.skilldistillery.fitness.services.WeightTrainingService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4203" })
public class WeightTrainingController {
	
	@Autowired
	private WeightTrainingService weightSvc;
	
	@GetMapping("weighttrainings")
	public List<WeightTraining> index(){
		return weightSvc.getAllWeightTraining();
	}
	@GetMapping("weighttrainings/{weightTrainId}")
	public WeightTraining getWeightTraining(@PathVariable int weightTrainId){
		return weightSvc.getWeightTrainingById(weightTrainId);
	}
	@PutMapping("weighttrainings")
	public WeightTraining updateWeightTraining(@RequestBody WeightTraining weightTrain) {
		return weightSvc.updateWeightTraining(weightTrain);			
	}
	@PostMapping("weighttrainings")
	public WeightTraining createWeightTraining(@RequestBody WeightTraining weightTrain) {
		return weightSvc.createWeightTraining(weightTrain);			
	}
	@DeleteMapping("weighttrainings")
	public void deleteWeightTraining(@RequestBody WeightTraining weightTrain){
		weightSvc.deleteWeightTraining(weightTrain);
	}
}
