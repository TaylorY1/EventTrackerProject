package com.skilldistillery.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.entities.Workout;
import com.skilldistillery.services.WorkoutService;

@RestController
@RequestMapping("api")
public class WorkoutController {

	@Autowired
	WorkoutService woServ;

	@GetMapping("index")
	public List<Workout> index() {
		return woServ.index();
	}
	@GetMapping("workoutId/{workoutId}")
	public Workout findById(@PathVariable int workoutId) {
		return woServ.findById(workoutId);
	}
	@DeleteMapping("workout/{workoutId}")
	public void deleteComment(@PathVariable Integer workoutId,
			
			HttpServletResponse res) {
		
		if (woServ.deleteById(workoutId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
	}
	
	@PostMapping("workout/{workout}")
	public Workout addWorkout(@RequestBody Workout workout) {
//			HttpServletResponse res){
		 workout = woServ.createWorkout(workout);
//		if (comments == null) {
//			res.setStatus(404);
//		}
		return workout;
	}
}
