import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card/card';

const Project = () => {
	return (
		<S.Wrapper id="4">
			<Card />
		</S.Wrapper>
		// <Card />
	);
};

export default Project;

const Wrapper = styled.div`
	${sliderContent};
	${flexAllCenter}
	/* background: linear-gradient(#fdcedf, #f2bed1); */
	background-color: #01105D;
`;

const ContentWrapper = styled(Swiper)`
	width: 1200px;
	height: 700px;
`;

const Content = styled(SwiperSlide)`
	border-radius: 20px;
`;

const S = {
	Wrapper,
	ContentWrapper,
	Content,
};
