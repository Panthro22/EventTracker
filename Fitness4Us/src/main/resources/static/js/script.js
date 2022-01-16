/**
 * 
 */
console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	registerAccount();
	document.registerForm.registerButton.addEventListener('click', function(event) {
		event.preventDefault();
		let user = document.registerForm;
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


	/*		document.filmForm.lookup.addEventListener('click', function(event) {
				event.preventDefault();
				var filmId = document.filmForm.filmId.value;
				if (!isNaN(filmId) && filmId > 0) {
					getFilm(filmId);
				}
			})
		document.addFilmForm.addFilm.addEventListener('click', function(event) {
			event.preventDefault();
	
			let addFilm = document.addFilmForm;
			let newFilm = {
				title: addFilm.title.value,
				description: addFilm.description.value,
				releaseYear: addFilm.releaseYear.value,
				rating: addFilm.rating.value,
				length: addFilm.length.value
			};
			//let f = event.target.parentElement;;
			createFilm(newFilm);
		});*/
}

function registerAccount() {
	let registerForm = document.createElement('form');
	registerForm.name = 'registerForm';
	let fname = document.createElement('input');
	fname.placeholder = 'First name';
	fname.name = 'fname';
	fname.type = 'text';
	let lname = document.createElement('input');
	lname.placeholder = 'Last name';
	lname.name = 'lname';
	lname.type = 'text';
	let username = document.createElement('input');
	username.placeholder = 'user name';
	username.name = 'username';
	username.type = 'text';
	let password = document.createElement('input');
	password.placeholder = 'password';
	password.name = 'password';
	password.type = 'text';
	let role = document.createElement('input');
	role.value = 'basic'
	role.name = 'role';
	role.type = 'hidden';
	let email = document.createElement('input');
	email.placeholder = 'email';
	email.name = 'email';
	email.type = 'text';
	let enabled = document.createElement('input');
	enabled.placeholder = '1';
	enabled.name = 'enabled';
	enabled.type = 'number';
	enabled.min = 0;
	enabled.max = 1;
	let button = document.createElement('input');
	button.type = 'submit';
	button.name = 'registerButton';
	button.textContent = 'Submit';
	let mainTag = document.getElementById('main');
	
	registerForm.appendChild(fname);
	registerForm.appendChild(lname);
	registerForm.appendChild(username);
	registerForm.appendChild(password);
	registerForm.appendChild(role);
	registerForm.appendChild(email);
	registerForm.appendChild(enabled);
	registerForm.appendChild(button);

	mainTag.appendChild(registerForm);

};
function createNewUser(newUser) {
	console.log(newUser);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let user = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(user);
				displayUser(user);
			} else {
				console.error('User create failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newUser));

}
function displayUser(user) {
	var userDiv = document.createElement('div');

	let table = document.createElement('table');
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


	var bodyRow = document.createElement('tr');
	var bodyCol = document.createElement('td');
	var bodyCol2 = document.createElement('td');
	var bodyCol3 = document.createElement('td');
	var bodyCol4 = document.createElement('td');

	bodyCol.textContent = user.firstName +' '+ user.lastName;
	bodyCol2.textContent = user.username;
	bodyCol3.textContent = user.email;
	bodyCol4.textContent = user.role;
	bodyRow.appendChild(bodyCol);
	bodyRow.appendChild(bodyCol2);
	bodyRow.appendChild(bodyCol3);
	bodyRow.appendChild(bodyCol4);
	body.appendChild(bodyRow)

	table.appendChild(body);

	userDiv.appendChild(table);
	document.body.appendChild(userDiv);

}
function getActorsByFilmId(filmId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/films/' + filmId + '/actors');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				//Do stuff here with server data!!!
				let actors = JSON.parse(xhr.responseText);
				displayActors(actors);
			}
			// * On failure, or if no response text was received, put "Film not found" 
			//   in the filmData div.
			else if (xhr.status === 404) {
				displayError("Actors for film: " + filmId + " was not found");
			}
			else {
				displayError("Error retrieving film: " + xhr.status);
			}
		}

	}
	xhr.send();
}
function getFilm(filmId) {
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	//   with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/films/' + filmId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				//Do stuff here with server data!!!
				let film = JSON.parse(xhr.responseText);
				displayFilm(film);
			}
			// * On failure, or if no response text was received, put "Film not found" 
			//   in the filmData div.
			else if (xhr.status === 404) {
				displayError("Film: " + filmId + " was not found");
			}
			else {
				displayError("Error retrieving film: " + xhr.status);
			}
		}

	}
	xhr.send();
}
function displayError(msg) {
	var dataDiv = document.getElementById('filmData');
	dataDiv.textContent = msg;
}
function displayFilm(film) {
	var dataDiv = document.getElementById('filmData');
	dataDiv.textContent = '';
	let actorDiv = document.getElementById('actorData');
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	let h1 = document.createElement('h1');
	h1.textContent = film.title;
	dataDiv.appendChild(h1);
	let desc = document.createElement('blockquote');
	desc.textContent = film.description;
	dataDiv.appendChild(desc);

	// * Rating, release year, and length as an unordered list.
	//TODO 
	let ul = document.createElement('ul');
	let li = document.createElement('li');
	li.textContent = "Rating: " + film.rating;
	let li2 = document.createElement('li');
	li2.textContent = "Release Year: " + film.releaseYear;
	let li3 = document.createElement('li');
	li3.textContent = "Length: " + film.length;
	ul.appendChild(li);
	ul.appendChild(li2);
	ul.appendChild(li3);
	dataDiv.appendChild(ul);
	getActorsByFilmId(film.id);

}
function displayActors(actors) {
	var actorDiv = document.getElementById('actorData');
	actorDiv.textContent = '';
	// TODO:
	// * Create and append elements to the data div to display:
	// * Film title (h1) and description (blockquote).
	let h1 = document.createElement('h1');
	h1.textContent = 'Actors: ';
	actorDiv.appendChild(h1);
	// * First Name, Last Name, and Id as an unordered list.
	//TODO 
	let ul = document.createElement('ul');
	for (let actor of actors) {
		let li = document.createElement('li');
		li.textContent = "Full name: " + actor.firstName + ' ' + actor.lastName + ", Id number: " + actor.id;
		ul.appendChild(li);
	}

	actorDiv.appendChild(ul);

}

function createFilm(newFilm) {
	console.log(newFilm);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/films');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let film = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(film);
				displayFilm(film);
			} else {
				console.error('Film create failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newFilm));

}