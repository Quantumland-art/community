// communitypage.js

document.addEventListener('DOMContentLoaded', () => {
	if(window.location.pathname == '/') {
		document.querySelector('.notion-page-icon-hero').style.display = 'none';
			
		const container = document.getElementsByTagName('main')[0];
		container.style.setProperty('align-items', 'center');

		const title = document.querySelector('.notion-title');
		console.log(title);
		title.classList.add('community_notion-title');

	}
});
