package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.CardioTraining;

public interface CardioTrainingRepository extends JpaRepository<CardioTraining,Integer>{

}
