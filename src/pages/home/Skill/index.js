import styled from 'styled-components';
import { sliderContent } from 'styles/common';

const Skill = () => {
	return (
		<S.Wrapper id="3">
			<div>Skill</div>
		</S.Wrapper>
	);
};

export default Skill;

const Wrapper = styled.div`
	${sliderContent}
	background:linear-gradient(#F8E8EE,#FDCEDF)
`;

const S = {
	Wrapper,
};
