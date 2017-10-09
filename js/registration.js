if(localStorage.getItem('object')) {
	var parseObj = JSON.parse(localStorage.getItem('object'));
	var savedName = parseObj.login;
	var savedPassword = parseObj.password;
}

while(true) {
	var login = prompt('Please, enter your login');
	

	if(login === null) {
		login = savedName;
		password = savedPassword;
		window.location.href = 'index.html';
		break;
	} else if(login === '') {
		alert("You forgot to enter something");
		continue;
	} else if(login === savedName) {
		alert("User with " + parseObj.login + " already exists");
	} else {
		var password = prompt('Please, enter your password');
		if(password === null) {
			alert("You do not enter your password")
			continue;
		} else {
			var obj = {
				 login: login,
				 password: password
				}
			var sObj = JSON.stringify(obj);

			localStorage.setItem('object', sObj);
			sessionStorage.setItem('login', login);
			sessionStorage.setItem('password', password);
			window.location.href = 'content.html';
			break;
		}
	}
}

