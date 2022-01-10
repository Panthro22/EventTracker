package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout,Integer>{

}
