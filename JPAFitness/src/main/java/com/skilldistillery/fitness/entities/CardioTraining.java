package com.skilldistillery.fitness.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="cardio_training")
public class CardioTraining {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private double distance;
	private String scale;
	@ManyToOne
	@JoinColumn(name="workout_id")
	private Workout workout;
	@OneToOne
	@JoinColumn(name="cardio_excercise_id")
	private CardioExcercise cardioExcercise;
	
	
	
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
	public double getDistance() {
		return distance;
	}
	public void setDistance(double distance) {
		this.distance = distance;
	}
	public String getScale() {
		return scale;
	}
	public void setScale(String scale) {
		this.scale = scale;
	}
	
	public Workout getWorkout() {
		return workout;
	}
	public void setWorkout(Workout workout) {
		this.workout = workout;
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
		CardioTraining other = (CardioTraining) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "CardioTraining [id=" + id + ", name=" + name + ", distance=" + distance + ", scale=" + scale + "]";
	}
	
	
	
}
