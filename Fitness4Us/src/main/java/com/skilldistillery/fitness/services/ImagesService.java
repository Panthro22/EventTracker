package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.Images;

public interface ImagesService {
	List<Images> getAllImages();
	Images getImageById(int imagesId);
	Images updateImage(Images image);
	Images createImage(Images image);
	void deleteImage(Images image);
}
