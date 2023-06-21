// window.addEventListener('wheel', e => {
// 	console.log(e.deltaY);
// });

// window.addEventListener('resize', () => {
// 	setWindowSize(window.innerHeight);
// });

export function wheelDown(article, baseElementTop, clientHeight) {
	for (let i = 1; i < article.length; i++) {
		if (baseElementTop === clientHeight * (article.length - i)) {
			scrollTo({
				top: clientHeight * i,
				behavior: 'smooth',
			});
		}
	}
}
export function wheelUp(article, baseElementTop, clientHeight) {
	for (let i = 0; i < article.length - 1; i++) {
		if (baseElementTop === clientHeight * i) {
			scrollTo({
				top: clientHeight * (article.length - 2 - i),
				behavior: 'smooth',
			});
		}
	}
}
