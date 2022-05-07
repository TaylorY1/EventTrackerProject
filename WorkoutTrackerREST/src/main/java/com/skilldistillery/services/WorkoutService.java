package com.skilldistillery.services;

import java.util.List;

import com.skilldistillery.entities.Workout;


public interface WorkoutService {
	List<Workout> index();

	Workout findById(int workoutId);
	boolean deleteById(int workoutId);
	Workout createWorkout(Workout workout);
}
