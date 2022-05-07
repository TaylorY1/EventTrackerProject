package com.skilldistillery.entities;

import java.util.Objects;

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
		return "Workout [id=" + id + ", name=" + workouts + "]";
	}
	
	
}
