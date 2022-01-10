package com.skilldistillery.fitness.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="daily_log_entries")
public class DailyLogEntries {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name="time_recorded")
	private LocalDateTime date;
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	
	public DailyLogEntries() {
		super();
	}
	public DailyLogEntries(int id, LocalDateTime date) {
		super();
		this.id = id;
		this.date = date;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
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
		DailyLogEntries other = (DailyLogEntries) obj;
		return id == other.id;
	}
	@Override
	public String toString() {
		return "DailyLogEntries [id=" + id + ", date=" + date + "]";
	}
	
	
}
