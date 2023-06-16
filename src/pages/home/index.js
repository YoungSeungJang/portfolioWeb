import styled from 'styled-components';
import SideBar from './Sidebar';
import Introduce from './Introduce';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Career from './Career';
import Contact from './Contact';

const HomePage = () => {
	const wholePage = window.addEventListener('wheel', e => {
		console.log(e.deltaY);
	});

	window.addEventListener('resize', () => {
		// setWindowSize(window.innerHeight);
		console.log(1);
	});

	return (
		<>
			<SideBar />
			<S.Wrapper>
				<Introduce />
				<About />
				<Skill />
				<Project />
				<Career />
				<Contact />
			</S.Wrapper>
		</>
	);
};

export default HomePage;

const Wrapper = styled.div`
	width: 100%;
	/* height: 100vh; */
`;

const S = {
	Wrapper,
};
