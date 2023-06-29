import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { motion } from 'framer-motion';
import Explain from './Explain/explain';
import { useRef } from 'react';
import { usePopper } from 'react-popper';

const About = ({ widthState }) => {
	const [isHover1, setIsHover1] = useState(false);
	const [isHover2, setIsHover2] = useState(false);
	const [isHover3, setIsHover3] = useState(false);
	const [isHover4, setIsHover4] = useState(false);
	const [isHover5, setIsHover5] = useState(false);
	const [isHover6, setIsHover6] = useState(false);
	const [isHover7, setIsHover7] = useState(false);
	const [isHover8, setIsHover8] = useState(false);
	const [stateWidth, setStateWidth] = useState([]);
	const widthRef = useRef();
	console.log(widthRef.current?.clientWidth);

	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
	});

	return (
		<S.Wrapper id="2">
			<S.Container>
				<S.Left>
					<div>
						<S.BoxWrapper>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover1(true)}
									onMouseLeave={() => setIsHover1(false)}
								>
									{isHover1 && <Explain detail={'familiar'} />}
									<img src="/js.png" width={50} />
									<div>JavaScript</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover2(true)}
									onMouseLeave={() => setIsHover2(false)}
								>
									{isHover2 && <Explain detail={'familiar'} />}
									<img src="/html.png" width={50} />
									<div>HTML</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover3(true)}
									onMouseLeave={() => setIsHover3(false)}
								>
									{isHover3 && <Explain detail={'familiar'} />}
									<img src="/css.png" width={40} />
									<div>CSS</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover4(true)}
									onMouseLeave={() => setIsHover4(false)}
								>
									{isHover4 && <Explain detail={'familiar'} />}
									<img src="/react.png" width={70} />
									<div>React</div>
								</S.ImgBox>
							</motion.div>
						</S.BoxWrapper>
						<S.BoxWrapper>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover5(true)}
									onMouseLeave={() => setIsHover5(false)}
								>
									{isHover5 && <Explain detail={'used'} />}
									<img
										src="https://images.velog.io/images/woohm402/post/f50d9e7b-910a-4db8-963b-ba19fff6bc78/emblem-light-628080660fddb35787ff6c77e97ca43e.svg"
										width={50}
									/>
									<div>React-query</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover6(true)}
									onMouseLeave={() => setIsHover6(false)}
								>
									{isHover6 && <Explain detail={'familiar'} />}
									<img
										src="https://velog.velcdn.com/images/real-bird/post/f3246b32-1697-41a0-8084-6775d15be816/image.png"
										width={50}
									/>
									<div>styled-component</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover7(true)}
									onMouseLeave={() => setIsHover7(false)}
								>
									{isHover7 && <Explain detail={'used'} />}
									<img
										src="https://blog.kakaocdn.net/dn/A4ANT/btrHoMUAw6C/ikblOMCARWgVNDONK1My3k/img.png"
										width={90}
									/>
									<div>Recoil</div>
								</S.ImgBox>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								transition={{ type: 'spring', stiffness: 400, damping: 10 }}
							>
								<S.ImgBox
									onMouseOver={() => setIsHover8(true)}
									onMouseLeave={() => setIsHover8(false)}
								>
									{isHover8 && <Explain detail={'used'} />}
									<img
										src="https://d1lt1197ee592e.cloudfront.net/redux1659529105614.jpeg"
										width={90}
									/>
									<div>Redux</div>
								</S.ImgBox>
							</motion.div>
						</S.BoxWrapper>
						<S.Bar>
							{widthState?.map(el => (
								<>
									<h3>{el.name}</h3>
									<div>
										<S.Percent ref={widthRef} width={el.per}>
											{el.per}
										</S.Percent>
									</div>
								</>
							))}
						</S.Bar>
					</div>
				</S.Left>
				<S.Right>
					<S.RightBox>
						<img
							style={{ borderRadius: '50%' }}
							src="/profile.png"
							width={230}
						/>
						<div>
							<img
								onClick={() => window.open('https://github.com/YoungSeungJang')}
								src="/github.png"
								width={70}
							/>
							<img
								onClick={() => window.open('https://seungsnote.tistory.com/')}
								src="/tistory.png"
								width={70}
							/>
							<img
								onClick={() =>
									window.open(
										'https://www.notion.so/a754235525134cbf9ccb2339ee1b4fa7',
									)
								}
								src="/notion.png"
								width={70}
							/>
						</div>
						<h3>
							안녕하세요 FrontEnd 신입개발자 <span>장영승</span>이라고 합니다.
							<br />
							저는 이러한 가치관을 추구하는 개발자입니다.
							<br />
							1. 모르는것을 두려워하지 않고 천천히 <span>성장</span>하는 개발자
							<br />
							2. 수동적이지 않고 <span>능동</span>적인 개발자
							<br />
							3. 팀 혹은 동료와 <span>소통</span>하는 개발자
						</h3>
					</S.RightBox>
				</S.Right>
			</S.Container>
		</S.Wrapper>
	);
};

export default About;

const Wrapper = styled.div`
	${sliderContent}/* background: linear-gradient(#F9F5F6,#F8E8EE); */
	/* ${flexAllCenter} */
`;

const Container = styled.div`
	${flexAllCenter}
	width: 100%;
	height: 100%;
	color: white;
`;

const Left = styled.div`
	background-color: #1e39c6;
	${flexAllCenter}
	width: 50%;
	height: 100%;
`;

const Right = styled.div`
	width: 50%;
	height: 100%;
	${flexAllCenter}
	flex-direction: column;
`;

const ImgBox = styled.div`
	width: 130px;
	height: 130px;
	background-color: #f9f9f9;
	${flexAllCenter}
	flex-direction: column;
	margin: 20px;
	border-radius: 20px;
	& > div {
		margin-top: 10px;
	}
	font-weight: bold;
	color: black;
	font-size: 0.8rem;
`;

const BoxWrapper = styled.div`
	${flexAllCenter};
`;

const Bar = styled.div`
	border-radius: 10px;
	margin-top: 20px;
	${flexAllCenter}
	align-items: start;
	flex-direction: column;
	font-weight: bold;
	& > div {
		margin: 10px 0;
		width: 600px;
		border: 1px solid white;
		height: 25px;
		border-radius: 20px;
		& > div {
			/* width: 70%; */
			background-color: white;
			height: 100%;
			border-radius: 20px;
			color: black;
			${flexAllCenter}
			justify-content: right;
			padding-right: 20px;
			font-size: 0.75rem;
		}
	}
`;

const progress = keyframes`
	0%{
		width: 0;
	}
`;

const Percent = styled.div`
	width: ${({ width }) => width};
	animation: ${progress} ease-in-out 1.5s;
`;

const RightBox = styled.div`
	${flexAllCenter}
	flex-direction: column;
	color: black;
	font-size: 1.5rem;
	& > div {
		${flexAllCenter}
		margin: 20px 0;
		& > img {
			margin: 0 10px;
		}
		cursor: pointer;
	}
	& > h3 {
		font-family: 'Nanum_pen';
		line-height: 30px;
		margin-top: 20px;
		& > span {
			font-weight: bold;
			font-size: 2rem;
		}
	}
`;

const S = {
	Wrapper,
	Container,
	Left,
	Right,
	BoxWrapper,
	ImgBox,
	Bar,
	RightBox,
	Percent,
};
