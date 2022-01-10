package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.DailyLogEntries;

public interface DailyLogEntriesRepository  extends JpaRepository<DailyLogEntries,Integer> {

}
