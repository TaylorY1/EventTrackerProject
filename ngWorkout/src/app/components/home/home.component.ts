import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workout } from 'src/app/models/workout';
import { WorkoutsService } from 'src/app/services/workouts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  workouts: Workout[] = [];

  selected: Workout | null = null;

  newWorkout: Workout = new Workout();

  editWorkout: Workout | null = null;

  constructor(private workoutServ: WorkoutsService,  private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadWorkout();

  }
  setWorkout(workout: Workout){
    this.selected = workout;
  }
  loadWorkout(){
    this.workoutServ.index().subscribe(
      success => this.workouts = success,
      err => console.log("Observable got an error " + err)
    );
  }
  createWorkout(workout: Workout){
    this.workoutServ.create(workout).subscribe(
      data => {
        this.loadWorkout();
        this.newWorkout = new Workout();
      },
      err => console.log("Observable got an error " + err)
      );

  }

  deleteWorkout(id: number) {
    this.workoutServ.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  }
  reload() {
    this.workoutServ.index().subscribe(
      data => this.workouts = data,
      err => console.log(err)
    );
  }
  updateWorkout(workout: Workout){
    this.workoutServ.update(workout).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editWorkout = null;
      }
    );
  }
  setEditWorkout(workout: Workout) {
    this.selected = workout;
    this.editWorkout = Object.assign({}, this.selected);
  }
  displayWorkout(workout: Workout) {
    this.selected = workout;
  }

  displayTable(){
    this.selected = null;
  }


}
