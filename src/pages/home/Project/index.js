import styled from 'styled-components';
import { sliderContent } from 'styles/common';

const Project = () => {
	return (
		<S.Wrapper id="4">
			<div>Project</div>
		</S.Wrapper>
	);
};

export default Project;

const Wrapper = styled.div`
	${sliderContent};
	background: linear-gradient(#fdcedf, #f2bed1);
`;

const S = {
	Wrapper,
};
