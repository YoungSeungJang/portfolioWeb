import styled from 'styled-components';
import { sliderContent } from 'styles/common';

const Contact = () => {
	return (
		<S.Wrapper id="6">
			<div>Contact</div>
		</S.Wrapper>
	);
};

export default Contact;

const Wrapper = styled.div`
	${sliderContent}/* background: linear-gradient(#fdcedf,#F8E8EE); */
`;

const S = {
	Wrapper,
};
