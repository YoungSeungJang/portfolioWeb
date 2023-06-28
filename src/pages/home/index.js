import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import Introduce from './Introduce';

import { FullPage, Slide } from 'react-full-page';
import About from './About';
import Project from './Project';
import SideBar from './Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';
import Back from './Back/back';

const skill = [
	{
		name: 'JAVASCRIPT',
		per: '70%',
	},
	{
		name: 'HTML',
		per: '70%',
	},
	{
		name: 'CSS',
		per: '70%',
	},
	{
		name: 'REACT',
		per: '60%',
	},
	{
		name: 'REACT_QUERY',
		per: '30%',
	},
	{
		name: 'RECOIL',
		per: '30%',
	},
	{
		name: 'REDUX',
		per: '30%',
	},
];
const HomePage = () => {
	// const wrapper = useRef();
	// // const [backgroundColor, setBackgroundColor] = useState('#DEFCF9');
	const [color, setColor] = useState('white');
	const [widthState, setWidthState] = useState();
	useEffect(() => {
		window.onbeforeunload = () => {
			window.scrollTo(0, 0);
		};
		window.addEventListener('scroll', () => {
			const scrollPosition = window.scrollY;
			console.log(scrollPosition);
			if (scrollPosition > 400 && scrollPosition < 1700) {
				setWidthState(skill);
			}
			if (scrollPosition > 800 && scrollPosition < 1600) {
				setColor('black');
			} else {
				setColor('white');
			}
		});
	}, []);
	// 	// const handleScroll = () => {
	// 	// console.log(window.scrollY);
	// 	// const scrollPosition = window.scrollY;
	// 	// 	if (scrollPosition === 0) {
	// 	// 		setBackgroundColor('#DEFCF9');
	// 	// 	} else if (scrollPosition > 800 && scrollPosition < 1600) {
	// 	// 		setBackgroundColor('#CADEFC');
	// 	// 	} else if (scrollPosition > 1600 && scrollPosition < 2400) {
	// 	// 		setBackgroundColor('#C3BEF0');
	// 	// 	} else if (scrollPosition > 2400) {
	// 	// 		setBackgroundColor('#CCA8E9');
	// 	// 	}
	// 	// };
	// 	// window.addEventListener('scroll', handleScroll);
	// 	window.addEventListener(
	// 		'wheel',
	// 		e => {
	// 			const article = wrapper.current.children;
	// 			const clientHeight = window.innerHeight;
	// 			const baseElementTop =
	// 				article[article.length - 1].getBoundingClientRect().top;
	// 			if (e.deltaY > 0) {
	// 				console.log(1);
	// 				wheelDown(article, baseElementTop, clientHeight);
	// 			}
	// 			if (e.deltaY < 0) {
	// 				console.log(2);
	// 				wheelUp(article, baseElementTop, clientHeight);
	// 			}
	// 		},
	// 		{ passive: false },
	// 	);
	// 	// return () => {
	// 	// 	window.removeEventListener('scroll', handleScroll);
	// 	// };
	// }, []);

	// window.addEventListener('resize', () => {
	// 	// setWindowSize(window.innerHeight);
	// 	console.log(1);
	// });

	return (
		// <>
		// 	{/* <Stars /> */}
		// 	<SideBar color={color} />
		// 	{/* <PageList /> */}
		// 	<Back />
		// 	<S.Wrapper ref={wrapper}>
		// 		<Introduce />
		// 		<About />
		// 		{/* <Skill /> */}
		// 		<Project />
		// 		{/* <Career /> */}
		// 		<Contact />
		// 	</S.Wrapper>
		// </>
		<>
			<SideBar color={color} />
			<Back />
			<S.Wrapper>
				<Slide>
					<Introduce />
				</Slide>
				<Slide>
					<About widthState={widthState} />
				</Slide>
				<Slide>
					<Project />
				</Slide>
			</S.Wrapper>
		</>
	);
};

export default HomePage;

const Wrapper = styled(FullPage)`
	width: 100%;
	/* transition: background-color 0.8s; */
`;

const S = {
	Wrapper,
};
