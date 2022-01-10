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

import com.skilldistillery.fitness.entities.Images;
import com.skilldistillery.fitness.services.ImagesService;

@RestController
@RequestMapping("api")
public class ImagesController {
	@Autowired
	private ImagesService imageSvc;
	
	@GetMapping("images")
	public List<Images> index(){
		return imageSvc.getAllImages();
	}
	@GetMapping("images/{imageId}")
	public Images getLogById(@PathVariable int imageId){
		return imageSvc.getImageById(imageId);
	}
	@PutMapping("images")
	public Images updateLog(@RequestBody Images image){
		return imageSvc.updateImage(image);
	}
	@PostMapping("images")
	public Images createLog(@RequestBody Images image) {
		return imageSvc.createImage(image);
	}
	@DeleteMapping("images")
	public void deleteLog(@RequestBody Images image) {
		imageSvc.deleteImage(image);
	}
}
