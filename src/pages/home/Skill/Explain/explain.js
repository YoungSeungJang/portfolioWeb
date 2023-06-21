import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const Explain = ({ detail }) => {
	return <S.Wrapper>{detail}</S.Wrapper>;
};

export default Explain;

const Wrapper = styled.div`
	position: absolute;
	width: 100px;
	height: 100px;
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
	${flexAllCenter}
	border-radius: 20px;
`;

const S = {
	Wrapper,
};
