package com.skilldistillery.fitness.entities;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Workout {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="start_time")
	private LocalDateTime startTime;
	
	@Column(name="end_time")
	private LocalDateTime endTime;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name="daily_log_entries_id")
	private DailyLogEntries logEntry;
	
	@OneToMany(mappedBy="workout")
	private List<WeightTraining> weightTraining;
	
	@OneToMany(mappedBy="workout")
	private List<CardioTraining> cardioTraining;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDateTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalDateTime startTime) {
		this.startTime = startTime;
	}

	public LocalDateTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalDateTime endTime) {
		this.endTime = endTime;
	}

	
	
	public List<CardioTraining> getCardioTraining() {
		return cardioTraining;
	}

	public void setCardioTraining(List<CardioTraining> cardioTraining) {
		this.cardioTraining = cardioTraining;
	}

	public DailyLogEntries getLogEntry() {
		return logEntry;
	}

	public void setLogEntry(DailyLogEntries logEntry) {
		this.logEntry = logEntry;
	}
	
	public List<WeightTraining> getWeightTraining() {
		return weightTraining;
	}

	public void setWeightTraining(List<WeightTraining> weightTraining) {
		this.weightTraining = weightTraining;
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
		Workout other = (Workout) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "Workout [id=" + id + ", startTime=" + startTime + ", endTime=" + endTime + "]";
	}
	
	
}
