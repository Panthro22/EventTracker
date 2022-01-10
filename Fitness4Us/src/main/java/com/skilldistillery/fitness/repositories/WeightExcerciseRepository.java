package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.WeightExcercise;

public interface WeightExcerciseRepository extends JpaRepository<WeightExcercise,Integer>{

}
