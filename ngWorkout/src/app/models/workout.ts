export class Workout {

  id: number;
  workouts: string;
  primaryLifts: string;
  sets: number;
  repetitions: number;
  implementsUsed: string;
  accessoryWork: string;
  lengthOfSession: number;

constructor(
  id: number = 0,
  workouts: string ="",
  primaryLifts: string ="",
  sets: number = 0,
  repetitions: number = 0,
  implementsUsed: string ="",
  accessoryWork: string ="",
  lengthOfSession: number=0
){
  this.id = id;
  this.workouts = workouts;
  this.primaryLifts = primaryLifts;
  this.sets = sets;
  this.repetitions = repetitions;
  this.implementsUsed = implementsUsed;
  this.accessoryWork = accessoryWork;
  this.lengthOfSession = lengthOfSession;
}

}
