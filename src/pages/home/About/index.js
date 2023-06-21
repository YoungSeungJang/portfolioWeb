import { useState } from 'react';
import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { motion } from 'framer-motion';
import Explain from './Explain/explain';

const About = () => {
	const [isHover1, setIsHover1] = useState(false);
	const [isHover2, setIsHover2] = useState(false);
	const [isHover3, setIsHover3] = useState(false);
	const [isHover4, setIsHover4] = useState(false);
	const [isHover5, setIsHover5] = useState(false);
	const [isHover6, setIsHover6] = useState(false);
	const [isHover7, setIsHover7] = useState(false);
	const [isHover8, setIsHover8] = useState(false);
	const skill = [
		{
			name: 'JAVASCRIPT',
			per: '70%',
		},
		{
			name: 'HTML',
			per: '70%',
		},
		{
			name: 'CSS',
			per: '70%',
		},
		{
			name: 'REACT',
			per: '60%',
		},
		{
			name: 'REACT_QUERY',
			per: '30%',
		},
		{
			name: 'RECOIL',
			per: '30%',
		},
		{
			name: 'REDUX',
			per: '30%',
		},
	];
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
									<img
										src="https://i.namu.wiki/i/GFgxq3pF-Jm-R5HzfAazD10byqZcPfso7XcQJTZDBxrMi_IwO1xgB3zH7d86IC0_-kAsI7AweS-ZRbJPutd30TWMqshppm4_AUmPvGJ70FV5zfMhwioPBX-3ZDHBo5d66dc_PY4FOV4BAP3woF3gPw.svg"
										width={50}
									/>
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
									<img
										src="https://i.namu.wiki/i/S854VYKF1uSlSeRE52JYbppMwaVm7yU3Ev-hsaRbR6Un6foxVfZevwBRyWJli73ZotqunOEmajvhJTJcOlu7TBTxfRMGK7-4mTg8T_re-UOa6ESYjD4RtfaISwWFq4I_0H3ZExej1uee2sOa_8ZZMQ.svg"
										width={50}
									/>
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
									<img
										src="https://i.namu.wiki/i/2WNY6CmWKE2Ygyj6YmUJNSs0I-fcf0gmDz-fc4byWRqjMyyC9SOHd0PWI2dI61RMyV6t3UbVlydTkkj7Ea_z81C0SH16waMzlLNE2j79ulS9kTurl5H8Gah7Mj7qGHgWKnpIjeqEmvWltUv6SDKScg.svg"
										width={40}
									/>
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
									<img
										src="https://i.namu.wiki/i/hIvF8sd9cGZGkHWB0HZg9S-yvN7Kcy4V_fNWF4ygZLKQb3ilN72OE2c_9SxFIrU4s9gkN51cKr0nEyDvb6pgf_Aro8pO_ew8l-XYRdsaiSCqTfHcXGQZuVB-dzFn4ldgV3ROVRlixJZX9Swd-Ga6EQ.svg"
										width={70}
									/>
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
							{skill.map(el => (
								<>
									<h3>{el.name}</h3>
									<div>
										<div style={{ width: el.per }}>{el.per}</div>
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
							width={300}
						/>
						<div>
							<img src="/github.png" width={70} />
							<img src="/tistory.png" width={70} />
							<img
								src="https://i.namu.wiki/i/8K8pVTSYdLwQ9J36HGLhwF67zOrCMC_ec4HzaFJcHzupVGakQBKXlzxiEy_7FoBhXjmFUX9ZVi0AaOlKOi3kYw.svg"
								width={70}
							/>
						</div>
						<h3>소개글 ....</h3>
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
	background-color: #01105d;
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
	width: 120px;
	height: 120px;
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
		}
	}
`;

const RightBox = styled.div`
	color: black;
	font-size: 1.5rem;
	& > div {
		${flexAllCenter}
		margin: 20px 0;
		& > img {
			margin: 0 10px;
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
};
