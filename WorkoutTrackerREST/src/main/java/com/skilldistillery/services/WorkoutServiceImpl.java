package com.skilldistillery.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.entities.Workout;
import com.skilldistillery.repositories.WorkoutRepository;


@Service
public class WorkoutServiceImpl implements WorkoutService {

	@Autowired
	WorkoutRepository workoutRepo;
	
	@Override
	public List<Workout> index() {
		return workoutRepo.findAll();
	}
	@Override
	public Workout findById(int workoutId) {
		Workout workout = new Workout();
		
		Optional<Workout>workoutOpt= workoutRepo.findById(workoutId);
		
		workout = workoutOpt.get();
		
		return workout;
		}
	public boolean deleteById(int workoutId){
		boolean deleted = false;
		Optional<Workout> workoutOpt = workoutRepo.findById(workoutId);
		if (workoutOpt.isPresent()) {
			workoutRepo.deleteById(workoutId);
			deleted = true;
		}
		
		return deleted;
	}
	@Override
	public Workout createWorkout(Workout workout) {
		workoutRepo.saveAndFlush(workout);
		return workout;
	}
	public Workout updateWorkout(int id, Workout workout) {
		Workout managedWorkout = new Workout();
		Optional<Workout> workoutOpt = workoutRepo.findById(id);
		
		managedWorkout = workoutOpt.get();
		
		managedWorkout.setWorkouts(workout.getWorkouts());
		workoutRepo.saveAndFlush(managedWorkout);
		return managedWorkout;
	}

}
