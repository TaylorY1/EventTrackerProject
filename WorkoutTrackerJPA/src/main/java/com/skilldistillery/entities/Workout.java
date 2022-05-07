package com.skilldistillery.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Workout {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	String workouts;

	@Column(name = "primary_lift")
	String primaryLifts;

	Integer sets;

	Integer repetitions;

	@Column(name = "implements_used")
	String implementsUsed;
	
	@Column(name = "accessory_work")
	String accessoryWork;
	
	@Column(name = "length_of_session")
	Integer lengthOfSession;

	public String getPrimaryLifts() {
		return primaryLifts;
	}

	public void setPrimaryLifts(String primaryLifts) {
		this.primaryLifts = primaryLifts;
	}

	public Integer getSets() {
		return sets;
	}

	public void setSets(Integer sets) {
		this.sets = sets;
	}

	public Integer getRepetitions() {
		return repetitions;
	}

	public void setRepetitions(Integer repetitions) {
		this.repetitions = repetitions;
	}

	public String getImplementsUsed() {
		return implementsUsed;
	}

	public void setImplementsUsed(String implementsUsed) {
		this.implementsUsed = implementsUsed;
	}

	public String getAccessoryWork() {
		return accessoryWork;
	}

	public void setAccessoryWork(String accessoryWork) {
		this.accessoryWork = accessoryWork;
	}

	public Integer getLengthOfSession() {
		return lengthOfSession;
	}

	public void setLengthOfSession(Integer lengthOfSession) {
		this.lengthOfSession = lengthOfSession;
	}

	public Workout() {

	}

	@Override
	public int hashCode() {
		return Objects.hash(id, workouts);
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
		return id == other.id && Objects.equals(workouts, other.workouts);
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getWorkouts() {
		return workouts;
	}

	public void setWorkouts(String name) {
		this.workouts = name;
	}

	@Override
	public String toString() {
		return "Workout [id=" + id + ", workouts=" + workouts + ", primaryLifts=" + primaryLifts + ", sets=" + sets
				+ ", repetitions=" + repetitions + ", implementsUsed=" + implementsUsed + ", accessoryWork="
				+ accessoryWork + ", lengthOfSession=" + lengthOfSession + "]";
	}

}
