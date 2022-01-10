package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.Video;

public interface VideoService {
	List<Video> getAllVideos();
	Video getVideoById(int videoId);
	Video updateVideot(Video video);
	Video createVideo(Video video);
	void deleteVideo(Video video);
}
