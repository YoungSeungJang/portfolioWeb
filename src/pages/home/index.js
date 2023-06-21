import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import Introduce from './Introduce';
import SideBar from './Sidebar';
import Project from './Project';
import Contact from './Contact';
import { useRef } from 'react';
import { useEffect } from 'react';

import { useState } from 'react';
import About from './About';
import { wheelDown, wheelUp } from 'utils/wheelEvent';

const HomePage = () => {
	const wrapper = useRef();
	// const [backgroundColor, setBackgroundColor] = useState('#DEFCF9');
	const [color, setColor] = useState('white');
	useEffect(() => {
		window.onbeforeunload = () => {
			window.scrollTo(0, 0);
		};
		// const handleScroll = () => {
		// console.log(window.scrollY);
		// const scrollPosition = window.scrollY;
		// 	if (scrollPosition === 0) {
		// 		setBackgroundColor('#DEFCF9');
		// 	} else if (scrollPosition > 800 && scrollPosition < 1600) {
		// 		setBackgroundColor('#CADEFC');
		// 	} else if (scrollPosition > 1600 && scrollPosition < 2400) {
		// 		setBackgroundColor('#C3BEF0');
		// 	} else if (scrollPosition > 2400) {
		// 		setBackgroundColor('#CCA8E9');
		// 	}
		// };
		// window.addEventListener('scroll', handleScroll);
		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			if (scrollPosition > 800 && scrollPosition < 1600) {
				setColor('black');
			} else {
				setColor('white');
			}
		});
		window.addEventListener(
			'wheel',
			e => {
				const article = wrapper.current.children;
				const clientHeight = window.innerHeight;
				const baseElementTop =
					article[article.length - 1].getBoundingClientRect().top;

				if (e.deltaY > 0) {
					console.log(1);
					wheelDown(article, baseElementTop, clientHeight);
				}
				if (e.deltaY < 0) {
					console.log(2);
					wheelUp(article, baseElementTop, clientHeight);
				}
			},
			{ passive: false },
		);
		// return () => {
		// 	window.removeEventListener('scroll', handleScroll);
		// };
	}, []);

	window.addEventListener('resize', () => {
		// setWindowSize(window.innerHeight);
		console.log(1);
	});

	return (
		<>
			{/* <Stars /> */}
			<SideBar color={color} />
			{/* <PageList /> */}
			<S.Wrapper ref={wrapper}>
				<Introduce />
				<About />
				{/* <Skill /> */}
				<Project />
				{/* <Career /> */}
				<Contact />
			</S.Wrapper>
		</>
	);
};

export default HomePage;

const Wrapper = styled.div`
	width: 100%;
	/* transition: background-color 0.8s; */
`;

const S = {
	Wrapper,
};
