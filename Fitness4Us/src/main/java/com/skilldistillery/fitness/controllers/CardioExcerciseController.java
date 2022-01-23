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

import com.skilldistillery.fitness.entities.CardioExcercise;
import com.skilldistillery.fitness.services.CardioExcerciseService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4203" })
public class CardioExcerciseController {
	@Autowired
	private CardioExcerciseService cardioExSvc;
	
	@GetMapping("cardioexcercises")
	public List<CardioExcercise> index(){
		return cardioExSvc.getAllCardioExcercises();
	}
	@GetMapping("cardioexcercises/{cardioExId}")
	public CardioExcercise getCardioExcerciseById(@PathVariable int cardioExId){
		return cardioExSvc.getCardioExcerciseById(cardioExId);
	}
	@PutMapping("cardioexcercises")
	public CardioExcercise updateCardioExcercise(@RequestBody CardioExcercise cardioEx){
		return cardioExSvc.updateCardioExcercise(cardioEx);
	}
	@PostMapping("cardioexcercises")
	public CardioExcercise createCardioExcercise(@RequestBody CardioExcercise cardioEx) {
		return cardioExSvc.createCardioExcercise(cardioEx);
	}
	@DeleteMapping("cardioexcercises")
	public void deleteCardioExcercise(@RequestBody CardioExcercise cardioEx) {
		cardioExSvc.deleteCardioExcercise(cardioEx);
	}
}
