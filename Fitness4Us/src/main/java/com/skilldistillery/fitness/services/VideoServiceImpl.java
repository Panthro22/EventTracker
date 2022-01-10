package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.Video;
import com.skilldistillery.fitness.repositories.VideoRepository;

@Service
public class VideoServiceImpl implements VideoService {
	@Autowired
	private VideoRepository vidRepo;
	@Override
	public List<Video> getAllVideos() {
		return vidRepo.findAll();
	}

	@Override
	public Video getVideoById(int videoId) {

		return vidRepo.findById(videoId).get();
	}

	@Override
	public Video updateVideot(Video video) {
		return vidRepo.saveAndFlush(video);
	}

	@Override
	public Video createVideo(Video video) {
		return vidRepo.saveAndFlush(video);
	}

	@Override
	public void deleteVideo(Video video) {
		vidRepo.delete(video);

	}

}
