import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const Card = ({ project }) => {
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
						{isHover1 && <S.HoverImg>{project.front}</S.HoverImg>}
						<img
							src={project.img}
							width={'80%'}
							// height={'80%'}
							style={{ borderRadius: '10px' }}
						/>
					</S.Front>
					<S.Back>
						<span>
							<FontAwesomeIcon
								onClick={() => setIsFlipped(prev => !prev)}
								icon={faXmark}
								size="xl"
							/>
						</span>
						<div>{project.front}</div>
						<div>{project.back.about}</div>
						<div>개발기간 : {project.back.period}</div>
						<div>
							<FontAwesomeIcon
								onClick={() => window.open(project.back.giturl)}
								icon={faGithub}
							/>
						</div>
					</S.Back>
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
	border-radius: 20px;
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
	/* ${flexAllCenter} */
	font-family: 'Nanum-regular';
	font-weight: bold;
	flex-direction: column;
	& > div {
		margin: 20px;
	}
	& > div:nth-child(2) {
		font-size: 1.2rem;
	}
	& > div:nth-child(3) {
		font-weight: lighter;
		line-height: 20px;
	}
	& > div:nth-child(5) {
		font-size: 30px;
		${flexAllCenter}
		justify-content: right;
		margin: 30px;
	}
	& > div:nth-child(5) > *:hover {
		opacity: 0.5;
		cursor: pointer;
	}
	& > span {
		cursor: pointer;
		${flexAllCenter}
		justify-content: right;
		margin: 20px;
	}
	& > span:hover {
		opacity: 0.5;
	}
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
