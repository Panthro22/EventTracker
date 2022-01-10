package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.fitness.entities.Video;

public interface VideoRepository extends JpaRepository<Video,Integer>{

}
