import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { SwiperSlide } from 'swiper/react';
import Card from './Card/card';

const Project = () => {
	const project = [
		{
			img: '/zoopzoop.PNG',
			front: 'ZoopZoop Market',
			back: {
				about:
					'중고거래 서비스를 제공하는 사이트입니다. 채팅기능도 구현되어 있으며 백엔드를 제공받아 프로젝트를 진행하였습니다.',
				period: '2023.04.17 ~ 2023.06.01',
				giturl: 'https://github.com/Frontend-TEAM1/ZoopzoopMarket',
			},
		},
		{
			img: '/movie.PNG',
			front: 'Movie찾냥?!(Movie Open API)',
			back: {
				about:
					'영화 검색 사이트입니다. OPEN API를 활용하여 구현하였으며 무한스크롤링이 구현되어있습니다.',
				period: '2023.03.21 ~ 2023.03.28',
				giturl: 'https://github.com/Frontend-TEAM1/React_Movie_Trailer_project',
			},
		},
		{
			img: '/search.PNG',
			front: '검색기능 사이트',
			back: {
				about:
					'JSON-SERVER API를 활용한 검색을 만들었습니다 최근검색 기록까지 가능하도록 구현하였습니다.',
				period: '2023.03.30~2023.04.03',
				giturl: 'https://github.com/YoungSeungJang/searchApi',
			},
		},
		{
			front: '4',
			back: {
				about: 'About.',
				period: 'Period',
				giturl: 'git URL',
			},
		},
		{
			front: '5',
			back: {
				about: 'About.',
				period: 'Period',
				giturl: 'git URL',
			},
		},
		{
			front: '6',
			back: {
				about: 'About.',
				period: 'Period',
				giturl: 'git URL',
			},
		},
	];
	return (
		<S.Wrapper id="4">
			<S.ContentWrapper>
				<Card project={project[0]} />
				<Card project={project[1]} />
				<Card project={project[2]} />
			</S.ContentWrapper>
			<S.ContentWrapper>
				<Card project={project[3]} />
				<Card project={project[4]} />
				<Card project={project[5]} />
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
