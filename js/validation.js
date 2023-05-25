//contact form validation
function validateForm() {
	var name = document.getElementById('name').value;
	if (name == '') {
		document.querySelector('.status').innerHTML =
			'Pole Twoje imię nie może być puste';
		return false;
	}
	var email = document.getElementById('email').value;
	if (email == '') {
		document.querySelector('.status').innerHTML =
			'Pole E-mail kontaktowy nie może być puste';
		return false;
	} else {
		var re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(email)) {
			document.querySelector('.status').innerHTML =
				'Nieprawidłowy format kontaktowego adresu e-mail';
			return false;
		}
	}
	var subject = document.getElementById('subject').value;
	if (subject == '') {
		document.querySelector('.status').innerHTML =
			'Temat wiadomości nie może być pusty';
		return false;
	}
	var message = document.getElementById('message').value;
	if (message == '') {
		document.querySelector('.status').innerHTML =
			'Pole Treść wiadomości nie może być puste';
		return false;
	}
	document.querySelector('.status').innerHTML = 'Wysyłam...';
	var link =
		'mailto:someone@example.com?cc=' +
		email +
		'&' +
		'subject=' +
		subject +
		'&body=' +
		message +
		'%0D%0A%0D%0A' +
		name;
	window.location.href = link;
}
