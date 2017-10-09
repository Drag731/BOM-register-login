sessionStorage.clear();

var questionToUser = confirm('Do you want to create new user?');

if(questionToUser) {
	window.location.href = 'registration.html';
} else {
	window.location.href = 'login.html'
}