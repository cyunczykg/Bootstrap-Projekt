const n = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
	//add menu shadow on scroll
	function addshadow() {
		if (window.scrollY >= 100) {
			n.classList.add('shadow-bg');
		} else {
			n.classList.remove('shadow-bg');
		}
	}

	window.addEventListener('scroll', addshadow);
});

//toggle burger shadow on burger click
const b = document.querySelector('.navbar-toggler');

// function toggleshadow() {
// 	n.classList.toggle('shadow-bg-bar');
// }
// b.addEventListener('click', toggleshadow);

//alternate way using arrow function
b.addEventListener('click', () => n.classList.toggle('shadow-bg-bar'));

//collapse menu on menu link click
const allNavLinks = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.navbar-collapse');
// nl.addEventListener('click', collapsenavigation);

//function and for list method
// function collapsenavigation() {
// 	navList.classList.remove('show');
// 	toggleshadow();
// }

// for (let i = 0; i < allNavLinks.length; i += 1) {
// 	allNavLinks[i].addEventListener('click', collapsenavigation);
// }

//alternative way -> function and foreach metchod
// allNavLinks.forEach((item) =>
// 	item.addEventListener('click', collapsenavigation)
// );

//alternative way -> foreach metchod with inside function
allNavLinks.forEach((item) => {
	item.addEventListener('click', () => navList.classList.remove('show'));
	// item.addEventListener('click', toggleshadow);
	// alternate way using arrow function
	item.addEventListener('click', () => n.classList.toggle('shadow-bg-bar'));
});
