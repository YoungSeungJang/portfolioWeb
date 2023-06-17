import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { motion } from 'framer-motion';

const Introduce = () => {
	return (
		<S.Wrapper id="1">
			<motion.div
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
			</motion.div>
		</S.Wrapper>
	);
};

export default Introduce;

const Wrapper = styled.div`
	${sliderContent}
	background-color: #F9F5F6;
	${flexAllCenter}
	&>* {
		margin: 0 50px;
	}
`;

const Intro = styled.div`
	font-size: 3rem;
	& > div {
		margin: 50px 0;
	}
`;

const S = {
	Wrapper,
	Intro,
};
