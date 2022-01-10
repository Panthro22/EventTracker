package com.skilldistillery.fitness.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.skilldistillery.fitness.entities.Video;
import com.skilldistillery.fitness.services.VideoService;

public class VideoController {
	@Autowired
	private VideoService videoSvc;
	
	@GetMapping("videos")
	public List<Video> index(){
		return videoSvc.getAllVideos();
	}
	@GetMapping("videos/{imageId}")
	public Video getLogById(@PathVariable int videoId){
		return videoSvc.getVideoById(videoId);
	}
	@PutMapping("videos")
	public Video updateLog(@RequestBody Video video){
		return videoSvc.updateVideot(video);
	}
	@PostMapping("videos")
	public Video createLog(@RequestBody Video video) {
		return videoSvc.createVideo(video);
	}
	@DeleteMapping("videos")
	public void deleteLog(@RequestBody Video video) {
		videoSvc.deleteVideo(video);
	}
}
