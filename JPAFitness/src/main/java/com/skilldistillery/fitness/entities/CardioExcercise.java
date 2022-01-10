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
@Table(name="cardio_excercise")
public class CardioExcercise {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	@JsonIgnore
	@OneToOne(mappedBy="cardioExcercise")
	private CardioTraining cardioTraining;
	@OneToMany(mappedBy="cardioExcercise")
	private List<Images> images;
	@OneToMany(mappedBy="cardioExcercise")
	private List<Video> video;
	
	public CardioExcercise() {
		super();
	}
	public CardioExcercise(int id, String name) {
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
	
	public CardioTraining getCardioTraining() {
		return cardioTraining;
	}
	public void setCardioTraining(CardioTraining cardioTraining) {
		this.cardioTraining = cardioTraining;
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
		CardioExcercise other = (CardioExcercise) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "CardioExcercise [id=" + id + ", name=" + name + "]";
	}
	
	

}
