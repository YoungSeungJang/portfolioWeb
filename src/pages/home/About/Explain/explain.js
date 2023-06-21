import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const Explain = ({ detail }) => {
	return <S.Wrapper>{detail}</S.Wrapper>;
};

export default Explain;

const Wrapper = styled.div`
	position: absolute;
	width: 60px;
	height: 60px;
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
	${flexAllCenter}
	border-radius: 20px;
	font-size: 0.8rem;
`;

const S = {
	Wrapper,
};
