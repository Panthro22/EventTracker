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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="weight_training")
public class WeightTraining {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String name;
	private int repetitions;
	private int sets;
	private double weight;
	private String scale;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="workout_id")
	private Workout workout;
	@OneToOne
	@JoinColumn(name="weight_excercise_id")
	private WeightExcercise weightExcercise;
	
	
	public WeightTraining() {
		super();
	}
	public WeightTraining(int id, String name, int repetitions, int sets, double weight, String scale) {
		super();
		this.id = id;
		this.name = name;
		this.repetitions = repetitions;
		this.sets = sets;
		this.weight = weight;
		this.scale = scale;
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
	public int getRepetitions() {
		return repetitions;
	}
	public void setRepetitions(int repetitions) {
		this.repetitions = repetitions;
	}
	public int getSets() {
		return sets;
	}
	public void setSets(int sets) {
		this.sets = sets;
	}
	public double getWeight() {
		return weight;
	}
	public void setWeight(double weight) {
		this.weight = weight;
	}
	public String getScale() {
		return scale;
	}
	public void setScale(String scale) {
		this.scale = scale;
	}
	
	
	public WeightExcercise getWeightExcercise() {
		return weightExcercise;
	}
	public void setWeightExcercise(WeightExcercise weightExcercise) {
		this.weightExcercise = weightExcercise;
	}
	public Workout getWorkout() {
		return workout;
	}
	public void setWorkout(Workout workout) {
		this.workout = workout;
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
		WeightTraining other = (WeightTraining) obj;
		return id == other.id;
	}
	
	@Override
	public String toString() {
		return "WeightTraining [id=" + id + ", name=" + name + ", repetitions=" + repetitions + ", sets=" + sets
				+ ", weight=" + weight + ", scale=" + scale + "]";
	}
	
	
	
	
}
