import styled from 'styled-components';
import { sliderContent } from 'styles/common';

const Career = () => {
	return (
		<S.Wrapper id="5">
			<div>Career</div>
		</S.Wrapper>
	);
};

export default Career;

const Wrapper = styled.div`
	${sliderContent}
	background: linear-gradient(#f2bed1,#fdcedf);
`;

const S = {
	Wrapper,
};
