package com.skilldistillery.fitness.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.fitness.entities.CardioTraining;
import com.skilldistillery.fitness.services.CardioTrainingService;

@RestController
@RequestMapping("api")
public class CardioTrainingController {
	@Autowired
	private CardioTrainingService cardioTSvc;
	
	@GetMapping("cardiotrainings")
	public List<CardioTraining> index(){
		return cardioTSvc.getAllCardioTrainings();
	}
	@GetMapping("cardiotrainings/{cardioT}")
	public CardioTraining getLogById(@PathVariable int cardioTId){
		return cardioTSvc.getCardioTrainingById(cardioTId);
	}
	@PutMapping("cardiotrainings")
	public CardioTraining updateLog(@RequestBody CardioTraining cardioT){
		return cardioTSvc.updateCardioTraining(cardioT);
	}
	@PostMapping("cardiotrainings")
	public CardioTraining createLog(@RequestBody CardioTraining cardioT) {
		return cardioTSvc.createCardioTraining(cardioT);
	}
	@DeleteMapping("cardiotrainings")
	public void deleteLog(@RequestBody CardioTraining cardioT) {
		 cardioTSvc.deleteCardioTraining(cardioT);
	}
}
