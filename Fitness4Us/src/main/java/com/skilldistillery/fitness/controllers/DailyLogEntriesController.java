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

import com.skilldistillery.fitness.entities.DailyLogEntries;
import com.skilldistillery.fitness.services.DailyLogEntriesService;

@RestController
@RequestMapping("api")
public class DailyLogEntriesController {
	@Autowired
	private DailyLogEntriesService logSvc;
	
	@GetMapping("logs")
	public List<DailyLogEntries> index(){
		return logSvc.getAllDailyLogEntries();
	}
	@GetMapping("logs/{logId}")
	public DailyLogEntries getLogById(@PathVariable int logId){
		return logSvc.getDailyLogEntriesById(logId);
	}
	@PutMapping("logs")
	public DailyLogEntries updateLog(@RequestBody DailyLogEntries log){
		return logSvc.updateDailyLogEntriesById(log);
	}
	@PostMapping("logs")
	public DailyLogEntries createLog(@RequestBody DailyLogEntries log) {
		return logSvc.createDailyLogEntries(log);
	}
	@DeleteMapping("logs")
	public void deleteLog(@RequestBody DailyLogEntries log) {
		logSvc.deleteDailyLogEntries(log);
	}
	
}
