package com.skilldistillery.fitness.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.Images;
import com.skilldistillery.fitness.repositories.ImagesRepository;

@Service
public class ImagesServiceImpl implements ImagesService {
	@Autowired
	private ImagesRepository imageRepo;
	@Override
	public List<Images> getAllImages() {
		return imageRepo.findAll();
	}

	@Override
	public Images getImageById(int imagesId) {
		return imageRepo.findById(imagesId).get();
	}

	@Override
	public Images updateImage(Images image) {
		return imageRepo.saveAndFlush(image);
	}

	@Override
	public Images createImage(Images image) {
		return imageRepo.saveAndFlush(image);
	}

	@Override
	public void deleteImage(Images image) {
		imageRepo.delete(image);

	}

}
