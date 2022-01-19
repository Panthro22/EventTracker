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

	let registerUser = document.getElementById('userAdd');
	registerUser.addEventListener('click', function(event) {
		event.preventDefault();

		let user = document.getElementById('userAddForm');

		console.log(user.role.value);
		let newUser = {
			firstName: user.fname.value,
			lastName: user.lname.value,
			username: user.username.value,
			password: user.password.value,
			email: user.email.value,
			role: user.role.value,
			enabled: user.enabled.value
		}

		createNewUser(newUser);
	});

	let addLog = document.getElementById('logAdd');
	addLog.addEventListener('click', function(event) {
		event.preventDefault();

		let log = document.getElementById('logAddForm');
		let user = getUserIdNoDisplay(log.userId.value);
		let newLog = {
			date: log.timeRecorded.value,
			user: user
		}

		createNewLog(newLog);
	});


	let addWorkout = document.getElementById('workoutAdd');
	addWorkout.addEventListener('click', function(event) {
		event.preventDefault();

		let workout = document.getElementById('workoutAdd');
		let log = getLogIdNoDisplay(log.logId.value);
		let newWorkout = {
			startTime: workout.startTime.value,
			endTime: workout.endTime.value,
			log: log
		}

		createNewWorkout(newWorkout);
	});

	let addWeightTrain = document.getElementById('weightTrainingAdd');
	addWeightTrain.addEventListener('click', function(event) {
		event.preventDefault();

		let weightTrain = document.getElementById('weightTrainAddForm');
		let workout = getWorkoutbyIdNoDisplay(weightTrain.wWorkoutId.value);
		let weightExercise = getWeightExerciseByIdNoDisplay(weightTrain.weightExercise.value);
		let newWeightTrain = {
			name: weightTrain.wname.value,
			repetitions: weightTrain.repetitions.value,
			sets: weightTrain.sets.value,
			weight: weightTrain.weight.value,
			workout: workout,
			weightExercise: weightExercise
		}

		createNewWeightTrain(newWeightTrain);
	});

	let addCardio = document.getElementById('cardioTrainingAdd');
	addCardio.addEventListener('click', function(event) {
		event.preventDefault();

		let cardioTrain = document.getElementById('cardioExerciseAddForm');
		let workout = getWorkoutbyIdNoDisplay(cardioTrain.cWorkoutId.value);
		let cardioExercise = getCardioExerciseByIdNoDisplay(weightTrain.weightExercise.value);
		let newCardioTrain = {
			name: cardioTrain.cname.value,
			distance: cardioTrain.distance.value,
			scale: cardioTrain.scale.value,
			workout: workout,
			weightExercise: cardioExercise
		}

		createNewCardioTrain(newCardioTrain);
	});

	
	
	findUser = document.getElementById('userFind');
	findUser.addEventListener('click', function(e){
		e.preventDefault();
		var target = e.target;
		var parent = target.parentElement;
		var user = getUserIdNoDisplay(parent.userId.value);
		console.log("value: " + parent.userId.value);
		console.log(user.firstName);
		  
		
	});

}
	deleteUser = document.getElementById("deleteUser");
	deleteUser.addEventListener('click', function(e) {
		e.preventDefault();
		var deleteU = deleteUser.value;
		console.log("event delete user: " + deleteU);
		if (deleteU != null) {
		
			deleteUserInDB(deleteU);
		} else {
			console.log("No user Id entered");
		}
	});

function getUsers() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let users = JSON.parse(xhr.responseText);
				if (users.length > 0) {

					displayUsers(users);

				} else {
					console.log('Did not retrieve a list of users.')
				}
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
	let body = document.getElementById('userTableBody');
		
	for (user of users) {
		let bodyRow = document.createElement('tr');
		bodyRow.className = 'userRow';
		let bodyCol = document.createElement('td');
		let bodyCol1 = document.createElement('td');
		let bodyCol2 = document.createElement('td');
		let bodyCol3 = document.createElement('td');
		let bodyCol4 = document.createElement('td');
		let bodyCol5 = document.createElement('td');
		let bodyCol6 = document.createElement('td');
		let bodyCol7 = document.createElement('td');

		bodyCol.textContent = user.id;
		bodyCol1.textContent = user.firstName;
		bodyCol2.textContent = user.lastName;
		bodyCol3.textContent = user.username;
		bodyCol4.textContent = user.password;
		bodyCol5.textContent = user.email;
		bodyCol6.textContent = user.role;
		bodyCol7.textContent = user.enabled;


		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol1);
		bodyRow.appendChild(bodyCol2);
		bodyRow.appendChild(bodyCol3);
		bodyRow.appendChild(bodyCol4);
		bodyRow.appendChild(bodyCol5);
		bodyRow.appendChild(bodyCol6);
		bodyRow.appendChild(bodyCol7);


		body.appendChild(bodyRow);
	

	}
	var userTbodyRows = document.getElementById('userTableBody').getElementsByTagName("tr");
	console.log("How many rows of user in table: " + userTbodyRows.length)
	var userColData = userTbodyRows[0].childNodes;
	console.log("row 0 information: " + userColData[0].textContent);
	for(let i = 0; i < userTbodyRows.length;i++){
		userTbodyRows[i].addEventListener('click',clickedOn);
	}
	

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
function clickedOn(e) {
	let updateForm = document.getElementById('updateUserForm');
	let target = e.target;
	let parent = target.parentElement;
	let childs = parent.getElementsByTagName('td');
	console.log(childs[0].textContent);
	updateForm.userId.value = childs[0].textContent;
	updateForm.fname.value = childs[1].textContent;
	updateForm.lname.value = childs[2].textContent;
	updateForm.email.value = childs[3].textContent;
	updateForm.username.value = childs[4].textContent;
	updateForm.password.value = childs[5].textContent;
	updateForm.role.value = childs[6].textContent;
	updateForm.enabled.value = childs[7].textContent;
	let user = {
			id: childs[0].textContent,
			firstName: childs[1].textContent,
			lastName: childs[2].textContent,
			username: childs[4].textContent,
			password: childs[5].textContent,
			email: childs[3].textContent,
			role: childs[6].textContent,
			enabled: childs[7].textContent,
			dailyLogEntries: []
		}
	let deleteUserButton = document.getElementById('deleteUser');
	deleteUserButton.value = user;
	console.log("delete user: "+ deleteUserButton.value);

};
function displayLogs(logs) {
	let logDiv = document.getElementById('logDiv');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Log Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Date';





	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);

	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (log of logs) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');


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
	let workDiv = document.getElementById('workoutAddForm');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Log Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'start date time';
	let titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'end date time';





	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);

	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (workout of workouts) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');
		let bodyCol3 = document.createElement('td');


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

				} else {
					console.log('Did not retrieve a list of exercises.')
				}
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
	let weightDiv = document.getElementById('weightLifingExerciseDiv');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Weight Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';






	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);


	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (exercise of exercises) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');



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

				} else {
					console.log('Did not retrieve a list of exercises.')
				}
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
	let cardioDiv = document.getElementById('cardioExerciseDiv');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Cardio Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';






	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);


	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (exercise of exercises) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');



		bodyCol.textContent = exercise.id;
		bodyCol2.textContent = exercise.name;

		bodyRow.appendChild(bodyCol);
		bodyRow.appendChild(bodyCol2);




		body.appendChild(bodyRow)
	}
	table.appendChild(body);
	cardioDiv.appendChild(table);
}

function getWeightTrainings() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/weighttrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trainings = JSON.parse(xhr.responseText);
				if (trainings.length > 0) {
					displayWeightTrainings(trainings);

				} else {
					console.log('Did not retrieve a list of weight trainings.')
				}
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
	let weightTrainingDiv = document.getElementById('WeightTrainingDiv');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';
	let titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'Reps';
	let titleHeader4 = document.createElement('th');
	titleHeader4.textContent = 'Sets';
	let titleHeader5 = document.createElement('th');
	titleHeader5.textContent = 'Weight';
	let titleHeader6 = document.createElement('th');
	titleHeader6.textContent = 'Scale';

	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);
	titleRow.appendChild(titleHeader4);
	titleRow.appendChild(titleHeader5);
	titleRow.appendChild(titleHeader6);


	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (training of trainings) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');
		let bodyCol3 = document.createElement('td');
		let bodyCol4 = document.createElement('td');
		let bodyCol5 = document.createElement('td');
		let bodyCol6 = document.createElement('td');



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

function getCardioTrainings() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/cardiotrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let trainings = JSON.parse(xhr.responseText);
				if (trainings.length > 0) {
					displayCardioTrainings(trainings);

				} else {
					console.log('Did not retrieve a list of weight trainings.')
				}
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
	let cardioTrainingDiv = document.getElementById('CardioTrainingDiv');
	let table = document.createElement('table');
	let title = document.createElement('thead');
	let titleRow = document.createElement('tr');
	let titleHeader = document.createElement('th');
	titleHeader.textContent = 'Id';
	let titleHeader2 = document.createElement('th');
	titleHeader2.textContent = 'Name';
	let titleHeader3 = document.createElement('th');
	titleHeader3.textContent = 'Distance';
	let titleHeader4 = document.createElement('th');
	titleHeader4.textContent = 'Scale';


	titleRow.appendChild(titleHeader);
	titleRow.appendChild(titleHeader2);
	titleRow.appendChild(titleHeader3);
	titleRow.appendChild(titleHeader4);



	title.appendChild(titleRow);
	table.appendChild(title);
	let body = document.createElement('tbody');
	body.name = 'userTableBody';

	for (training of trainings) {
		let bodyRow = document.createElement('tr');
		let bodyCol = document.createElement('td');
		let bodyCol2 = document.createElement('td');
		let bodyCol3 = document.createElement('td');
		let bodyCol4 = document.createElement('td');




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

function createNewUser(newUser) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let user = JSON.parse(xhr.responseText);
				console.log(user);
				getUsers();

			} else {
				console.error('User create failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newUser));

}
function createNewLog(newLog) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/logs');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let log = JSON.parse(xhr.responseText);
				console.log(log);
				getLogs();

			} else {
				console.error('Log failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newLog));

}
function getUserIdNoDisplay(userId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users/' + userId);
	xhr.onreadystatechange = function() {
		
		if (xhr.readyState === 4) {
			
			if (xhr.status === 200 || xhr.status === 201) {
				let user = JSON.parse(xhr.responseText);
				return user;
			}else{
			console.log('Did not retrieve a of user.')
			}
		}
		else if (xhr.status === 500) {
			console.log("User: " + userId + " was not found");
		}
	}
	xhr.send();

};

function createNewWorkout(newWorkout) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/workouts');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let workout = JSON.parse(xhr.responseText);
				console.log(workout);
				getWorkouts();

			} else {
				console.error('Log failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newWorkout));

}

function getLogIdNoDisplay(logId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/logs/' + logId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let log = JSON.parse(xhr.responseText);
				return log;
			}
			console.log('Did not retrieve a list of users.')
		}
		else if (xhr.status === 500) {
			console.log("User: " + logId + " was not found");
		}
		else {
			console.log("Error retrieving user: " + xhr.status);
		}
	}
	xhr.send();
}

function createNewWeightTrain(newWeightTrain) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/weighttrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let weightTrain = JSON.parse(xhr.responseText);
				console.log(weightTrain);
				getWeightTrainings();

			} else {
				console.error('Log failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newWeightTrain));

}

function getWorkoutbyIdNoDisplay(workoutId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/logs/' + workoutId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workout = JSON.parse(xhr.responseText);
				return workout;
			}
			console.log('Did not retrieve a list of users.')
		}
		else if (xhr.status === 500) {
			console.log("User: " + workoutId + " was not found");
		}
		else {
			console.log("Error retrieving user: " + xhr.status);
		}
	}
	xhr.send();
}

function getWeightExerciseByIdNoDisplay(weightExId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/weightexcercises/' + weightExId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let weightEx = JSON.parse(xhr.responseText);
				return weightEx;
			}
			console.log('Did not retrieve a list of users.')
		}
		else if (xhr.status === 500) {
			console.log("weightexcercises: " + weightExId + " was not found");
		}
		else {
			console.log("Error retrieving user: " + xhr.status);
		}
	}
	xhr.send();
}


function createNewCardioTrain(newCardioTrain) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/cardiotrainings');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let cardioTrain = JSON.parse(xhr.responseText);
				console.log(cardioTrain);
				getCardioTrainings();

			} else {
				console.error('Cardio training failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newCardioTrain));
}

function getCardioExerciseByIdNoDisplay(cardioExId) {
	xhr.open('GET', 'api/weightexcercises/' + cardioExId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let cardioEx = JSON.parse(xhr.responseText);
				return cardioEx;
			}
			console.log('Did not retrieve a list of users.')
		}
		else if (xhr.status === 500) {
			console.log("cardio excercises: " + cardioExId + " was not found");
		}
		else {
			console.log("Error retrieving cardio exercises: " + xhr.status);
		}
	}
	xhr.send();
}

function deleteUserInDB(deleteUser) {
	console.log(deleteUser);
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/users');
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			if(xhr.status === 201 || xhr.status === 200){
				let film = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(film);
				displayFilm(film);
			} else{
				console.error('user delete failed with status: '+ xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type','application/json');
	xhr.send(JSON.stringify(deleteUser));
}
function displayError(msg){
	var p = document.createElement('p');
	p.textContent = msg;
	var main = document.getElementById('main');
	main.appendChild(p);
}