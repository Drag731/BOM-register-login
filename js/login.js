if(localStorage.getItem('object')) {
	var parseObj = JSON.parse(localStorage.getItem('object'));
	var savedName = parseObj.login;
	var savedPassword = parseObj.password;
} else {
	savedName = undefined;
	savedPassword = undefined;
}

sessionStorage.clear();

while (true) {
	var login2 = prompt('Please, enter your login');

	if(login2 === null) {
		window.location.href = 'content.html';
		break;
	} else if(login2 !== savedName) {
		alert("User with " + login2 + " doesn’t exist");
		var question = confirm("Do you want to register?");
		
		if (question) {
			window.location.href = 'registration.html';
			break;
		} else {
			continue;
		}
	} else if  (login2 === savedName) {
		sessionStorage.setItem('login', login2);
		var password2 = prompt('Please, enter your password');

		if (password2 !== savedPassword) {
			alert("The password is incorrect");
			continue;
		} else {
			sessionStorage.setItem('password', password2);
			window.location.href = 'content.html';
			break;
		}
	}
}