window.addEventListener('wheel', e => {
	console.log(e.deltaY);
});

window.addEventListener('resize', () => {
	setWindowSize(window.innerHeight);
});
