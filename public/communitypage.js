// communitypage.js

document.addEventListener('DOMContentLoaded', () => {
	if(window.location.pathname == '/') {
		document.querySelector('.notion-page-icon-hero').style.display = 'none';
			
		const container = document.getElementsByTagName('main')[0];
		container.style.setProperty('align-items', 'center');

		const title = document.querySelector('.notion-title');
		console.log(title);
		title.classList.add('community_notion-title');

		for (var i = 0; i < 6; i++) {
			document.querySelectorAll(".notion-column")[i].style.setProperty('text-align', 'center');
		}

		for (var i = 0; i < 2; i++) {
			document.querySelectorAll(".notion-page-link")[i].style.setProperty('justify-content', 'center');
		}
	}
});
