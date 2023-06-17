import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';

const About = () => {
	return (
		<S.Wrapper id="2">
			<div>저는 ... 개발자입니다</div>
		</S.Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	${sliderContent}
	background: linear-gradient(#F9F5F6,#F8E8EE);
	${flexAllCenter}
`;

const S = {
	Wrapper,
};
