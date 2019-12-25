menu.onclick = function showMenu(){
	let x = document.getElementById('navTop');

	if (x.className === 'nav_top'){
		x.className += ' responsive';
		header.className += " responsive__header";
	} else {
		x.className = 'nav_top';
		header.className = "main";
	}
}