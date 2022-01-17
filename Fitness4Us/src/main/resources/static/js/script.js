/*
 *
 */
console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('document loaded');
	getUsers();
	getLogs();
	getWorkouts();
	getWeightTrainings();
	getCardioTrainings()
	getWeightExercises();
	getCardioExercise();
	init();
});

function init() {


}



function getUsers() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let users = JSON.parse(xhr.responseText);
				if (users.length > 0) {
					displayUsers(users);

				}
				console.log('Did not retrieve a list of users.')
			}
			else if (xhr.status === 500) {
				displayError("User: " + userId + " was not found");
			}
			else {
				displayError("Error retrieving user: " + xhr.status);
			}
		}

	}
	xhr.send();

};

function displayUsers(users) {
	var userDiv = document.getElementById('userDiv');
	main.name = 'userDivDisplay';
	let table = document.createElement('table');
	table.name = 'userDisplay';
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Fullname';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Username';
	var titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'Email';
	var titleHeader4 = document.createElement('th');
	titleHeader4.textContent = 'Subscription';
	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);
	titleRow.appendChild(titleHeader4);
	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (user of users) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');
		var bodyCol3 = document.createElement('td');
		var bodyCol4 = document.createElement('td');

		bodyCol.textContent = user.firstName + ' ' + user.lastName;
		bodyCol2.textContent = user.username;
		bodyCol3.textContent = user.email;
		bodyCol4.textContent = user.role;
		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);
		bodyRow.appendChild(bodyCol3);
		bodyRow.appendChild(bodyCol4);


		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	userDiv.appendChild(table);



}

function getLogs() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/logs');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let logs = JSON.parse(xhr.responseText);
				if (logs.length > 0) {
					displayLogs(logs);

				} else {
					console.log('Did not retrieve a list of logs.')
				}
			}
			else if (xhr.status === 500) {
				displayError("logs were not found");
			}
			else {
				displayError("Error retrieving logs: " + xhr.status);
			}
		}

	}
	xhr.send();

};
function displayLogs(logs) {
	var logDiv = document.getElementById('logDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Log Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Date';





	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);

	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (log of logs) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');


		bodyCol.textContent = log.id;
		bodyCol2.textContent = log.date;
		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);



		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	logDiv.appendChild(table);

}
function getWorkouts() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/workouts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				if (workouts.length > 0) {
					displayWorkouts(workouts);

				} else {
					console.log('Did not retrieve a list of logs.')
				}
			}
			else if (xhr.status === 500) {
				displayError("logs were not found");
			}
			else {
				displayError("Error retrieving logs: " + xhr.status);
			}
		}

	}
	xhr.send();

};
function displayWorkouts(workouts) {
	var workDiv = document.getElementById('workoutDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Log Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'start date time';
	var titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'end date time';





	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);

	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (workout of workouts) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');
		var bodyCol3 = document.createElement('td');


		bodyCol.textContent = workout.id;
		bodyCol2.textContent = workout.startTime;
		bodyCol3.textContent = workout.endTime;
		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);
		bodyRow.appendChild(bodyCol3);



		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	workDiv.appendChild(table);

}

function getWeightExercises() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/weightExcercises');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let exercises = JSON.parse(xhr.responseText);
				if (exercises.length > 0) {
					displayExcercises(exercises);

				}
				console.log('Did not retrieve a list of exercises.')
			}
			else if (xhr.status === 500) {
				displayError("exercises: " + exercises + " was not found");
			}
			else {
				displayError("Error retrieving user: " + xhr.status);
			}
		}

	}
	xhr.send();
};

function displayExcercises(exercises) {
	var weightDiv = document.getElementById('weightLifingExerciseDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Weight Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';






	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);


	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (exercise of exercises) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');



		bodyCol.textContent = exercise.id;
		bodyCol2.textContent = exercise.name;

		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);




		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	weightDiv.appendChild(table);
}
function getCardioExercise() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cardioexcercises');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let exercises = JSON.parse(xhr.responseText);
				if (exercises.length > 0) {
					displayCardioExcercises(exercises);

				}
				console.log('Did not retrieve a list of exercises.')
			}
			else if (xhr.status === 500) {
				displayError("Cardio exercises: " + exercises + " was not found");
			}
			else {
				displayError("Error retrieving cardio: " + xhr.status);
			}
		}

	}
	xhr.send();
};

function displayCardioExcercises(exercises) {
	var cardioDiv = document.getElementById('cardioExerciseDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Cardio Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';






	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);


	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (exercise of exercises) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');



		bodyCol.textContent = exercise.id;
		bodyCol2.textContent = exercise.name;

		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);




		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	cardioDiv.appendChild(table);
}

function getWeightTrainings(){
		let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/weighttrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trainings = JSON.parse(xhr.responseText);
				if (trainings.length > 0) {
					displayWeightTrainings(trainings);

				}
				console.log('Did not retrieve a list of weight trainings.')
			}
			else if (xhr.status === 500) {
				displayError("Weight trainings: " + trainings + " was not found");
			}
			else {
				displayError("Error retrieving weight trainings: " + xhr.status);
			}
		}

	}
	xhr.send();
};

function displayWeightTrainings(trainings) {
	var weightTrainingDiv = document.getElementById('WeightTrainingDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';
	var titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'Reps';
	var titleHeader4 = document.createElement('th');
	titleHeader4.textContent = 'Sets';
	var titleHeader5 = document.createElement('th');
	titleHeader5.textContent = 'Weight';
	var titleHeader6 = document.createElement('th');
	titleHeader6.textContent = 'Scale';

	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);
	titleRow.appendChild(titleHeader4);
	titleRow.appendChild(titleHeader5);
	titleRow.appendChild(titleHeader6);


	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (training of trainings) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');
		var bodyCol3 = document.createElement('td');
		var bodyCol4 = document.createElement('td');
		var bodyCol5 = document.createElement('td');
		var bodyCol6 = document.createElement('td');



		bodyCol.textContent = training.id;
		bodyCol2.textContent = training.name;
		bodyCol3.textContent = training.repetitions;
		bodyCol4.textContent = training.sets;
		bodyCol5.textContent = training.weight;
		bodyCol6.textContent = training.scale;

		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);
		bodyRow.appendChild(bodyCol3);
		bodyRow.appendChild(bodyCol4);
		bodyRow.appendChild(bodyCol5);
		bodyRow.appendChild(bodyCol6);




		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	weightTrainingDiv.appendChild(table);
}

function getCardioTrainings(){
		let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cardiotrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trainings = JSON.parse(xhr.responseText);
				if (trainings.length > 0) {
					displayCardioTrainings(trainings);

				}
				console.log('Did not retrieve a list of weight trainings.')
			}
			else if (xhr.status === 500) {
				displayError("Weight trainings: " + trainings + " was not found");
			}
			else {
				displayError("Error retrieving weight trainings: " + xhr.status);
			}
		}

	}
	xhr.send();
};

function displayCardioTrainings(trainings) {
	var cardioTrainingDiv = document.getElementById('CardioTrainingDiv');
	let table = document.createElement('table');
	var title = document.createElement('thead');
	var titleRow = document.createElement('tr');
	var titleHeader = document.createElement('th');
	titleHeader.textContent = 'Id';
	var titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';
	var titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'Distance';
	var titleHeader4 = document.createElement('th');
	titleHeader4.textContent = 'Scale';


	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);
	titleRow.appendChild(titleHeader4);



	title.appendChild(titleRow);
	table.appendChild(title);
	var body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (training of trainings) {
		var bodyRow = document.createElement('tr');
		var bodyCol = document.createElement('td');
		var bodyCol2 = document.createElement('td');
		var bodyCol3 = document.createElement('td');
		var bodyCol4 = document.createElement('td');




		bodyCol.textContent = training.id;
		bodyCol2.textContent = training.name;
		bodyCol3.textContent = training.distance;
		bodyCol4.textContent = training.scale;

		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);
		bodyRow.appendChild(bodyCol3);
		bodyRow.appendChild(bodyCol4);





		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	cardioTrainingDiv.appendChild(table);
}