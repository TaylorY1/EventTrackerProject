package com.skilldistillery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {

	
	
	
}
