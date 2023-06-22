import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const Card = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const [isHover1, setIsHover1] = useState(false);
	return (
		<S.Wrapper>
			{/* <img
				src="/zoopzoop.PNG"
				width={400}
				onClick={() => window.open('https://zoopzoop-market.vercel.app/')}
			/>
			<S.Content>
				<S.Title>ZoopZoop Market</S.Title>
				<div>개발기간 : 2023.04.17 ~ 2023.06.01</div>
				<S.About>줍줍마켓 은 중고 거래 .</S.About>
			</S.Content> */}
			{/* <S.Flip>
				<div>
					<div></div>
					<div></div>
				</div>
			</S.Flip> */}
			<S.Box>
				<ReactCardFlip isFlipped={isFlipped}>
					<S.Front
						onClick={() => setIsFlipped(prev => !prev)}
						onMouseOver={() => setIsHover1(true)}
						onMouseOut={() => setIsHover1(false)}
					>
						{isHover1 && <S.HoverImg>ZoopZoop Market</S.HoverImg>}
						<img
							src="/zoopzoop.PNG"
							width={'80%'}
							style={{ borderRadius: '10px' }}
						/>
					</S.Front>
					<S.Back onClick={() => setIsFlipped(prev => !prev)}>back</S.Back>
				</ReactCardFlip>
			</S.Box>
		</S.Wrapper>
	);
};

export default Card;

const Wrapper = styled.div``;

const Title = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;
const Box = styled.div`
	${flexAllCenter}

	& > div {
		margin: 20px;
	}
`;

const Content = styled.div`
	width: 500px;
`;

const HoverImg = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.4);
	font-weight: bold;
	${flexAllCenter}
	/* color: black; */
	font-size: 1.2rem;
`;
const Front = styled.div`
	border: 1px solid white;
	border-radius: 20px;
	width: 400px;
	height: 300px;
	color: white;
	${flexAllCenter}
	cursor: pointer;
`;

const Back = styled.div`
	border: 1px solid white;
	border-radius: 20px;
	width: 400px;
	height: 300px;
	color: white;
	${flexAllCenter}
`;

const S = {
	Wrapper,
	Title,
	Box,
	Content,
	Front,
	Back,
	HoverImg,
};
