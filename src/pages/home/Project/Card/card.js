import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const Card = () => {
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
			<S.Flip>
				<div>
					<div></div>
					<div></div>
				</div>
			</S.Flip>
		</S.Wrapper>
	);
};

export default Card;

const Wrapper = styled.div`
	width: 900px;
	border: 1px solid;
	height: 300px;
	& > img {
		margin: 20px 0;
	}
	${flexAllCenter}
`;

const Title = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;
const About = styled.div``;

const Content = styled.div`
	width: 500px;
`;

const Flip = styled.div`
	width: 200px;
	height: 250px;
	perspective: 1100px;
	& > div {
		width: 100%;
		height: 100%;
		position: relative;
		transition: 0.4s;
		transform-style: preserve-3d;
	}
	&:hover > div {
		transform: rotateY(180deg);
	}
`;

const Front = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	background: red;
`;

const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	background: royalblue;
	transform: rotateY(180deg);
`;

const S = {
	Wrapper,
	Title,
	About,
	Content,
	Flip,
	Front,
	Back,
};
