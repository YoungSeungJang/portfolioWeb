import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';

const Introduce = () => {
	return (
		<S.Wrapper id="1">
			<img src="/profile.png" width={400} />
			<S.Intro>
				<div>안녕하세요</div>
				<div>Frontend 개발자</div>
				<div>장영승 입니다 :)</div>
			</S.Intro>
		</S.Wrapper>
	);
};

export default Introduce;

const Wrapper = styled.div`
	${sliderContent}
	background-color: #F9F5F6;
	${flexAllCenter}
`;

const Intro = styled.div`
	font-size: 2rem;
`;

const S = {
	Wrapper,
	Intro,
};
