package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.DailyLogEntries;

public interface DailyLogEntriesService {
	List<DailyLogEntries> getAllDailyLogEntries();
	DailyLogEntries getDailyLogEntriesById(int logId);
	DailyLogEntries updateDailyLogEntriesById(DailyLogEntries dailyLogUpdate);
	DailyLogEntries createDailyLogEntries(DailyLogEntries dailyLogCreate);
	void deleteDailyLogEntries(DailyLogEntries dailyLogCreate);
	
}
