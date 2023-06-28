import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';

const Introduce = () => {
	const typing = useRef();

	useEffect(() => {
		const letters = ['소통하는', '노력하는', '배려하는'];
		const speed = 100;
		let i = 0;

		const typingText = async () => {
			const letter = letters[i].split('');

			while (letter.length) {
				await wait(speed);
				typing.current.innerText += letter.shift();
			}

			await wait(1500);

			remove();
		};

		const remove = async () => {
			const letter = letters[i].split('');

			while (letter.length) {
				await wait(speed);

				letter.pop();
				typing.current.innerText = letter.join('');
			}

			i++;
			if (i > letters.length - 1) i = 0;
			typingText();
		};

		function wait(ms) {
			return new Promise(res => setTimeout(res, ms));
		}

		setTimeout(typingText, 1500);
	}, []);
	return (
		<>
			<S.Wrapper id="1">
				{/* <motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<img src="/profile.png" width={400} />
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 1,
					ease: [0, 0.71, 0.2, 1.01],
				}}
			>
				<S.Intro>
					<div>안녕하세요</div>
					<div>Frontend 개발자</div>
					<div>장영승 입니다</div>
				</S.Intro>
			</motion.div> */}
				<S.MainBox>
					<span>안녕하세요</span>
					<S.Intro style={{ color: '#1DB8F5' }} ref={typing}></S.Intro>
					<span>프론트엔드 개발자 입니다.</span>
					<S.ArrowDown>
						<div>SCROLL</div>
						<FontAwesomeIcon icon={faArrowDown} />
					</S.ArrowDown>
				</S.MainBox>
			</S.Wrapper>
		</>
	);
};

export default Introduce;

const Wrapper = styled.div`
	${sliderContent}
	/* background-color: #F9F5F6; */
	background: linear-gradient(#000623,#1E39C6);
	${flexAllCenter}
	color: white;
	font-size: 3rem;
`;

const MainBox = styled.div`
	${flexAllCenter}
`;

const Intro = styled.span`
	margin: 0 20px;
	height: 50px;
	border-bottom: 3px solid white;
	width: 200px;
	&::after {
		content: '';
		border-right: 2px solid white;
		margin-left: 0.6rem;
		animation: cursor 0.9s infinite steps(2);
	}
	@keyframes cursor {
		from {
			border-right: none;
		}
		to {
			border-right: 2px solid white;
		}
	}
`;

const ArrowDown = styled.div`
	position: absolute;
	bottom: 50px;
	animation: scroll 0.35s ease-in alternate infinite;
	${flexAllCenter}
	flex-direction: column;
	@keyframes scroll {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(20px);
		}
	}
	& > div {
		margin-bottom: 10px;
		font-size: 1.2rem;
	}
`;

const S = {
	Wrapper,
	Intro,
	ArrowDown,
	MainBox,
};
