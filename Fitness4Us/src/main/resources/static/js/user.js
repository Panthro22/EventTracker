*
 *
 */
console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	getUsers();
});

function init() {
	
	findAccount();
	registerAccount();
	let registerUser = document.getElementById('userAdd');
	registerUser.addEventListener('click', function(event) {
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
	
	let findUser = document.getElementById('findAccButton');
	findUser.addEventListener('click', function(event) {
		event.preventDefault();
		let userId = document.accountForm.accountId.value;
		if (!isNaN(userId) && userId > 0) {
			getUser(userId);
		}

	});



}
function getUser(userId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users/' + userId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let user = JSON.parse(xhr.responseText);
				displayUser(user);
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

function updateUser(user) {
	let updateForm = document.createElement('form');
	updateForm.name = 'updateForm';
	let id = document.createElement('input');
	id.value = user.id;
	id.name = 'id';
	id.type = 'number';
	id.required;
	let fname = document.createElement('input');
	fname.value = user.firstName;
	fname.name = 'fname';
	fname.type = 'text';
	fname.required;
	let lname = document.createElement('input');
	lname.value = user.lastName;
	lname.name = 'lname';
	lname.type = 'text';
	lname.required;
	let username = document.createElement('input');
	username.value = user.username;
	username.name = 'username';
	username.type = 'text';
	username.required;
	let password = document.createElement('input');
	password.value = user.password;
	password.name = 'password';
	password.type = 'text';
	password.required;
	let role = document.createElement('input');
	role.value = 'basic'
	role.name = 'role';
	role.type = 'hidden';
	let dailyLogEntries = document.createElement('input');
	dailyLogEntries.value = [];
	dailyLogEntries.name = 'dailyLogEntries';
	dailyLogEntries.type = 'hidden';
	let email = document.createElement('input');
	email.value = user.email;
	email.name = 'email';
	email.type = 'text';
	email.required;
	let enabled = document.createElement('input');
	enabled.value = 1;
	enabled.name = 'enabled';
	enabled.type = 'number';
	enabled.required;
	enabled.min = 0;
	enabled.max = 1;
	let button = document.createElement('button');
	button.type = 'submit';
	button.name = 'updateButton';
	button.textContent = 'Update';
	let mainTag = document.getElementById('main');

	updateForm.appendChild(id);
	updateForm.appendChild(fname);
	updateForm.appendChild(lname);
	updateForm.appendChild(username);
	updateForm.appendChild(password);
	updateForm.appendChild(role);
	updateForm.appendChild(email);
	updateForm.appendChild(enabled);
	updateForm.appendChild(button);

	mainTag.appendChild(updateForm);


}

function updateUserData(newUser) {
	console.log(newUser);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let user = JSON.parse(xhr.responseText);
				displayUser(user);
			} else if (xhr.status === 304) {
				displayError('User update failed with status: ' + xhr.status);
			}
		} else {
			displayError('User update failed with status code: ' + xhr.status)
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newUser));
}


function registerAccount() {
	let registerForm = document.createElement('form');
	registerForm.name = 'registerForm';
	let fname = document.createElement('input');
	fname.placeholder = 'First name';
	fname.name = 'fname';
	fname.type = 'text';
	fname.required;
	let lname = document.createElement('input');
	lname.placeholder = 'Last name';
	lname.name = 'lname';
	lname.type = 'text';
	lname.required;
	let username = document.createElement('input');
	username.placeholder = 'user name';
	username.name = 'username';
	username.type = 'text';
	username.required;
	let password = document.createElement('input');
	password.placeholder = 'password';
	password.name = 'password';
	password.type = 'text';
	password.required;
	let role = document.createElement('input');
	role.value = 'basic'
	role.name = 'role';
	role.type = 'hidden';
	let email = document.createElement('input');
	email.placeholder = 'email';
	email.name = 'email';
	email.type = 'text';
	email.required;
	let enabled = document.createElement('input');
	enabled.placeholder = '1';
	enabled.name = 'enabled';
	enabled.type = 'number';
	enabled.required;
	enabled.min = 0;
	enabled.max = 1;
	let button = document.createElement('input');
	button.type = 'submit';
	button.name = 'registerButton';
	button.textContent = 'Submit';
	

	registerForm.appendChild(fname);
	registerForm.appendChild(lname);
	registerForm.appendChild(username);
	registerForm.appendChild(password);
	registerForm.appendChild(role);
	registerForm.appendChild(email);
	registerForm.appendChild(enabled);
	registerForm.appendChild(button);

	userDiv.appendChild(registerForm);

};

function createNewUser(newUser) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				let user = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				displayUser(user);
			} else {
				console.error('User create failed with status: ' + xhr.status);
			}
		}
	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newUser));

}
function deleteUser(deleteUser) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {


			}
			else if (xhr.status === 404) {
				displayError("User: " + user.id + " was not deleted");
			}
			else {
				displayError("Error deleting user: " + xhr.status);
			}
		}

	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(deleteUser));
}

function displayUser(user) {
	var main = document.createElement('main');
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

	let editUserForm = document.createElement('form');
	editUserForm.name = 'editUserForm';
	let deleteUserForm = document.createElement('form');
	deleteUserForm.name = 'deleteUserForm';
	let editButton = document.createElement('button');
	editButton.type = 'submit';
	editButton.name = 'userEdit';
	editButton.textContent = 'Update';

	let deleteButton = document.createElement('button');
	deleteButton.type = 'submit';
	deleteButton.name = 'deleteButton';
	deleteButton.textContent = 'Delete';
	editUserForm.appendChild(editButton);
	deleteUserForm.appendChild(deleteButton);
	body.appendChild(bodyRow)

	table.appendChild(body);
	main.appendChild(table);

	main.appendChild(editUserForm);
	main.appendChild(deleteUserForm);

	document.body.appendChild(main);


	document.deleteUserForm.deleteButton.addEventListener('click', function(event) {
		event.preventDefault();
		deleteUser(user);
	});

	document.editUserForm.userEdit.addEventListener('click', function(event) {
		event.preventDefault();
		updateUser(user);
	});

}

function findAccount() {
	let findAccountForm = document.createElement('form');
	findAccountForm.name = 'accountForm';
	findAccountForm.textContent = 'Search for Account by Id: ';
	let accId = document.createElement('input');
	accId.placeholder = 'account Id';
	accId.name = 'accountId';
	accId.type = 'number';
	let button = document.createElement('input');
	button.type = 'submit';
	button.id = 'findAccButton'
	button.name = 'findAccountButton';
	button.textContent = 'Submit';

	findAccountForm.appendChild(accId);
	findAccountForm.appendChild(button);
	main.appendChild(findAccountForm);

};

function displayError(msg) {
	var main = document.getElementById('main');
	main.textContent = msg;
}

function getUsers() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/users');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let users = JSON.parse(xhr.responseText);
				if(users.length>0){
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
	var main = document.createElement('main');
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

		let editUserForm = document.createElement('form');
		editUserForm.name = 'editUserForm';
		let deleteUserForm = document.createElement('form');
		deleteUserForm.name = 'deleteUserForm';
		let editButton = document.createElement('button');
		editButton.type = 'submit';
		editButton.name = 'userEdit';
		editButton.textContent = 'Update';

		let deleteButton = document.createElement('button');
		deleteButton.type = 'submit';
		deleteButton.name = 'deleteButton';
		deleteButton.textContent = 'Delete';
		editUserForm.appendChild(editButton);
		deleteUserForm.appendChild(deleteButton);
		bodyRow.appendChild(editUserForm);
		bodyRow.appendChild(deleteUserForm);
		body.appendChild(bodyRow)
	}
		table.appendChild(body);
		main.appendChild(table);


		document.body.appendChild(main);


		document.deleteUserForm.deleteButton.addEventListener('click', function(event) {
			event.preventDefault();
			deleteUser(user);
		});

		document.editUserForm.userEdit.addEventListener('click', function(event) {
			event.preventDefault();
			updateUser(user);
		});
	
}
