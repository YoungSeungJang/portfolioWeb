import styled from 'styled-components';
import { sliderContent } from 'styles/common';

const About = () => {
	return (
		<S.Wrapper id="2">
			<div>About</div>
		</S.Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	${sliderContent}
	background: linear-gradient(#F9F5F6,#F8E8EE);
`;

const S = {
	Wrapper,
};
