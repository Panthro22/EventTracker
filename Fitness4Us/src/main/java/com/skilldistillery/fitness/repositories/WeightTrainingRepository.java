package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.WeightTraining;

public interface WeightTrainingRepository extends JpaRepository<WeightTraining,Integer> {

}
