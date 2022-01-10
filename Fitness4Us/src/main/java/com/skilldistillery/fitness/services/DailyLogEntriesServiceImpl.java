package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.DailyLogEntries;
import com.skilldistillery.fitness.repositories.DailyLogEntriesRepository;

@Service
public class DailyLogEntriesServiceImpl implements DailyLogEntriesService {
	@Autowired
	private DailyLogEntriesRepository logRepo;
	@Override
	public List<DailyLogEntries> getAllDailyLogEntries() {
		
		return logRepo.findAll();
	}

	@Override
	public DailyLogEntries getDailyLogEntriesById(int logId) {
		return logRepo.findById(logId).get();
	}

	@Override
	public DailyLogEntries updateDailyLogEntriesById(DailyLogEntries dailyLogUpdate) {
		
		return logRepo.saveAndFlush(dailyLogUpdate);
	}

	@Override
	public DailyLogEntries createDailyLogEntries(DailyLogEntries dailyLogUpdate) {
		return logRepo.saveAndFlush(dailyLogUpdate);
	}

	@Override
	public void deleteDailyLogEntries(DailyLogEntries dailyLogCreate) {
		 logRepo.delete(dailyLogCreate);;
	}

}
