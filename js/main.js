$(document).ready(() => {
	for(var i = 0 ; i < 200 ; i++) {
	  var x = Math.random() * screen.width;
	  var y = Math.random() * screen.height;
	  var star = document.createElement('div');
	  star.className = 'star';
	  star.style.left = x +'px';
	  star.style.top = y +'px';
	  document.body.appendChild(star);
	}
});