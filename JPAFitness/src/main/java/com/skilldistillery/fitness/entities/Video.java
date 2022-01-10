package com.skilldistillery.fitness.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Video {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String title;
	private String description;
	private String url;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="weight_excercise_id")
	private WeightExcercise weightExcercise;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="cardio_excercise_id")
	private CardioExcercise cardioExcercise;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	public WeightExcercise getWeightExcercise() {
		return weightExcercise;
	}
	public void setWeightExcercise(WeightExcercise weightExcercise) {
		this.weightExcercise = weightExcercise;
	}
	public CardioExcercise getCardioExcercise() {
		return cardioExcercise;
	}
	public void setCardioExcercise(CardioExcercise cardioExcercise) {
		this.cardioExcercise = cardioExcercise;
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
		Video other = (Video) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "Video [id=" + id + ", title=" + title + ", description=" + description + ", url=" + url + "]";
	}
	
	
	
}
