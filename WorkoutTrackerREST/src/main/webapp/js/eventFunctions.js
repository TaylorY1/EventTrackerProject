window.addEventListener('load', function(e) {
	console.log('Kick the tires and light the fires.');
	init();


});

function init() {
	document.workoutForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let workoutId = document.workoutForm.workoutId.value;
		if (!isNaN(workoutId) && workoutId > 0) {
			getWorkout(workoutId);
		}
	});
	document.createWorkoutForm.submit.addEventListener('click', addWorkout);

	document.numberOfWorkouts.submit.addEventListener('click', (e) => {
		e.preventDefault();
		let div =  document.getElementById('workoutData');
		div.textContent = '';
		
		showNumberOfWorkouts();

	});
	document.findAll.findAll.addEventListener('click', (e) => {
		let dataDiv = document.getElementById('workoutData');
		dataDiv.textContent = '';
		e.preventDefault();
		findAllWorkouts();

	});
	document.updateWorkoutForm.submit.addEventListener('click', updateWorkout);

	document.deleteById.delete.addEventListener('click', (e) => {
		e.preventDefault();
		let workoutId = document.deleteById.workoutId.value;
		deleteById(workoutId);

	})
	function updateWorkout(e) {
		e.preventDefault();
		let workout = {
			workouts: document.updateWorkoutForm.workout.value,
			primaryLifts: document.updateWorkoutForm.primaryLift.value,
			sets: document.updateWorkoutForm.sets.value,
			repetitions: document.updateWorkoutForm.repetitions.value,
			implementsUsed: document.updateWorkoutForm.implementUsed.value,
			accessoryWork: document.updateWorkoutForm.accessoryWork.value,
			lengthOfSession: document.updateWorkoutForm.lengthOfSession.value,
		};
		console.log(workout)
		let xhr = new XMLHttpRequest();
		xhr.open('PUT', 'api/workout/' + document.updateWorkoutForm.workoutId.value, true);

		xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
					let workout = JSON.parse(xhr.responseText);
					console.log(workout);
					displayWorkout(workout);
				}
				else {
					console.error("POST request failed.");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		};
		xhr.send(JSON.stringify(workout));

	}

	function addWorkout(e) {
		e.preventDefault();

		let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/workout', true);

		xhr.setRequestHeader("Content-type", "application/json");

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status == 200 || xhr.status == 201) {
					let data = JSON.parse(xhr.responseText);
					displayWorkout(data);
				}
				else {
					console.error("POST request failed.");
					console.error(xhr.status + ': ' + xhr.responseText);
				}
			}
		}

		let workout = {
			workouts: document.createWorkoutForm.workout.value,
			primaryLifts: document.createWorkoutForm.primaryLift.value,
			sets: document.createWorkoutForm.sets.value,
			repetitions: document.createWorkoutForm.repetitions.value,
			implementsUsed: document.createWorkoutForm.implementUsed.value,
			accessoryWork: document.createWorkoutForm.accessoryWork.value,
			lengthOfSession: document.createWorkoutForm.lengthOfSession.value
		};
		xhr.send(JSON.stringify(workout));
	};

	function displayWorkout(workout) {
		let dataDiv = document.getElementById('workoutData');


		let h1 = document.createElement('h1');
		h1.textContent = workout.workoutName;
		dataDiv.appendChild(h1);

		let bq = document.createElement('blockquote');
		bq.textContent = workout.primaryLift;
		dataDiv.appendChild(bq);

		let ul = document.createElement('ul');
		let workoutName = document.createElement('li');
		let primaryLift = document.createElement('li');
		let sets = document.createElement('li');
		let repetitions = document.createElement('li');
		let implementUsed = document.createElement('li');
		let accessoryWork = document.createElement('li');
		let lengthOfSession = document.createElement('li');

		workoutName.textContent = workout.workouts;
		primaryLift.textContent = workout.primaryLifts;
		sets.textContent = workout.sets;
		repetitions.textContent = workout.repetitions;
		implementUsed.textContent = workout.implementsUsed;
		accessoryWork.textContent = workout.accessoryWork;
		lengthOfSession.textContent = workout.lengthOfSession;

		ul.appendChild(workoutName);
		ul.appendChild(primaryLift);
		ul.appendChild(sets);
		ul.appendChild(repetitions);
		ul.appendChild(implementUsed);
		ul.appendChild(accessoryWork);
		ul.appendChild(lengthOfSession);

		dataDiv.appendChild(ul);

	}
	function getWorkout(workoutId) {

		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/workoutId/' + workoutId);
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {

					let workouts = JSON.parse(xhr.responseText);
					console.log(workouts);
					displayWorkout(workouts);
				}
				else {
					notFoundDiv.textContent = "Workout was not found. . ."
					dataDiv.appendChild(notFoundDiv);
					console.log('Workout not found.')
				}
			}
		};

		xhr.send();
	}


	function findAllWorkouts() {
		console.log("index function hit")
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/index')
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let workouts = JSON.parse(xhr.responseText);
					console.log(workouts)
					displayAllWorkouts(workouts);

				} else {
					console.log("Workouts Not Found")
					let dataDiv = document.getElementById('workoutData');
					dataDiv.textContent = '';
					let notFoundDiv = document.createElement('div');
					notFoundDiv.textContent = "Workout not found. . ."
					dataDiv.appendChild(notFoundDiv);
				}
			};
		}
		xhr.send();
	}
	function displayAllWorkouts(workouts) {

		let dataDiv = document.getElementById('workoutData');
		dataDiv.textContent = '';
		if (workouts.length > 0) {
			let h1 = document.createElement('h1');
			h1.textContent = "Workouts"
			for (let workout of workouts) {
				displayWorkout(workout);
			}
		}
		else {
			dataDiv.textContent = '';
			let h1 = document.createElement('div');
			h1.textContent = "Workouts not found . . .";
			allWorkouts.appendChild(h1);
		}
	}
}


function deleteById(workoutId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/workout/' + workoutId)
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dataDiv = document.getElementById('workoutData');
				dataDiv.textContent = 'That workout has now been deleted';

			} else {
				console.log("That workout was not found")
				let dataDiv = document.getElementById('workoutData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				//		notFoundDiv.textContent = "Workout was not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();
}

function showNumberOfWorkouts() {
	console.log("Total Number Of Workouts Hit")
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/index')
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				let numWorkouts = workouts.length;
				let numberOfWorkouts = document.getElementById('numWorkouts');
				let h4 = document.createElement('h4');

				h4.textContent = numWorkouts;
				numberOfWorkouts.appendChild(h4);

			} else {
				console.log("No workouts were found")
				let dataDiv = document.getElementById('workoutData');
				dataDiv.textContent = '';
				let notFoundDiv = document.createElement('div');
				notFoundDiv.textContent = "Workouts were not found. . ."
				dataDiv.appendChild(notFoundDiv);
			}
		};
	}
	xhr.send();


}