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

import com.skilldistillery.fitness.entities.Video;
import com.skilldistillery.fitness.services.VideoService;

@RestController
@RequestMapping("api")
public class VideoController {
	@Autowired
	private VideoService videoSvc;
	
	@GetMapping("videos")
	public List<Video> index(){
		return videoSvc.getAllVideos();
	}
	@GetMapping("videos/{videoId}")
	public Video getVideoById(@PathVariable int videoId){
		return videoSvc.getVideoById(videoId);
	}
	@PutMapping("videos")
	public Video updateVideo(@RequestBody Video video){
		return videoSvc.updateVideot(video);
	}
	@PostMapping("videos")
	public Video createVideo(@RequestBody Video video) {
		return videoSvc.createVideo(video);
	}
	@DeleteMapping("videos")
	public void deleteVideo(@RequestBody Video video) {
		videoSvc.deleteVideo(video);
	}
}
