if(localStorage.getItem('object') && sessionStorage.getItem('login')) {
	var parseObj = JSON.parse(localStorage.getItem('object'));
	var savedName = parseObj.login;
} else {
	savedName = undefined;
	sessionStorage.setItem('login', "unknow");
}

var quit = document.getElementById("quit");
var reg = document.getElementById("reg");
var log = document.getElementById("log");

quit.style.display = 'none';
if(savedName == sessionStorage.getItem('login')) {
	alert("Hello, " + savedName);
	reg.style.display = 'none';
	log.style.display = 'none';
	quit.style.display = 'block';
} else {
	alert("You are not logged in.");
}

function clear () {
	quit.style.display = 'none';
	sessionStorage.clear();
	return window.location.href = 'login.html';
}

quit.addEventListener('click', clear);