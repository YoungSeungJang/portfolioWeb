import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { SwiperSlide } from 'swiper/react';
import Card from './Card/card';

const Project = () => {
	return (
		<S.Wrapper id="4">
			<S.ContentWrapper>
				<Card />
				<Card />
				<Card />
			</S.ContentWrapper>
			<S.ContentWrapper>
				<Card />
				<Card />
				<Card />
			</S.ContentWrapper>
		</S.Wrapper>
		// <Card />
	);
};

export default Project;

const Wrapper = styled.div`
	${sliderContent};
	${flexAllCenter}
	flex-direction: column;
	/* background: linear-gradient(#fdcedf, #f2bed1); */
	background-color: #1e39c6;
`;

const ContentWrapper = styled.div`
	${flexAllCenter}
`;

const Content = styled(SwiperSlide)`
	border-radius: 20px;
`;

const S = {
	Wrapper,
	ContentWrapper,
	Content,
};
