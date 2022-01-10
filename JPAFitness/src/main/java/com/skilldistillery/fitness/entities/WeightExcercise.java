package com.skilldistillery.fitness.entities;

import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="weight_excercise")
public class WeightExcercise {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@JsonIgnore
	@OneToOne(mappedBy="weightExcercise")
	private WeightTraining weightTraining;
	@OneToMany(mappedBy="weightExcercise")
	private List<Images> images;
	@OneToMany(mappedBy="weightExcercise")
	private List<Video> video;
	
	public WeightExcercise() {
		super();
	}
	public WeightExcercise(int id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public WeightTraining getWeightTraining() {
		return weightTraining;
	}
	public void setWeightTraining(WeightTraining weightTraining) {
		this.weightTraining = weightTraining;
	}
	
	public List<Images> getImages() {
		return images;
	}
	public void setImages(List<Images> images) {
		this.images = images;
	}
	
	public List<Video> getVideo() {
		return video;
	}
	public void setVideo(List<Video> video) {
		this.video = video;
	}
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WeightExcercise other = (WeightExcercise) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "WeightExcercise [id=" + id + ", name=" + name + "]";
	}
	
	
	
}
