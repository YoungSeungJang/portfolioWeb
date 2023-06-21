import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Explain from './Explain/explain';

const Skill = () => {
	const [isHover1, setIsHover1] = useState(false);
	const [isHover2, setIsHover2] = useState(false);
	const [isHover3, setIsHover3] = useState(false);
	const [isHover4, setIsHover4] = useState(false);
	const [isHover5, setIsHover5] = useState(false);
	const [isHover6, setIsHover6] = useState(false);
	const [isHover7, setIsHover7] = useState(false);
	const [isHover8, setIsHover8] = useState(false);
	const arr1 = [
		{
			img: 'https://i.namu.wiki/i/GFgxq3pF-Jm-R5HzfAazD10byqZcPfso7XcQJTZDBxrMi_IwO1xgB3zH7d86IC0_-kAsI7AweS-ZRbJPutd30TWMqshppm4_AUmPvGJ70FV5zfMhwioPBX-3ZDHBo5d66dc_PY4FOV4BAP3woF3gPw.svg',
			name: 'JavaScript',
			detail: 'familiar',
		},
		{
			img: 'https://i.namu.wiki/i/S854VYKF1uSlSeRE52JYbppMwaVm7yU3Ev-hsaRbR6Un6foxVfZevwBRyWJli73ZotqunOEmajvhJTJcOlu7TBTxfRMGK7-4mTg8T_re-UOa6ESYjD4RtfaISwWFq4I_0H3ZExej1uee2sOa_8ZZMQ.svg',
			name: 'HTML',
			detail: 'familiar',
		},
		{
			img: 'https://i.namu.wiki/i/2WNY6CmWKE2Ygyj6YmUJNSs0I-fcf0gmDz-fc4byWRqjMyyC9SOHd0PWI2dI61RMyV6t3UbVlydTkkj7Ea_z81C0SH16waMzlLNE2j79ulS9kTurl5H8Gah7Mj7qGHgWKnpIjeqEmvWltUv6SDKScg.svg',
			name: 'CSS',
			detail: 'familiar',
		},
		{
			img: 'https://i.namu.wiki/i/hIvF8sd9cGZGkHWB0HZg9S-yvN7Kcy4V_fNWF4ygZLKQb3ilN72OE2c_9SxFIrU4s9gkN51cKr0nEyDvb6pgf_Aro8pO_ew8l-XYRdsaiSCqTfHcXGQZuVB-dzFn4ldgV3ROVRlixJZX9Swd-Ga6EQ.svg',
			name: 'React',
			detail: 'familiar',
		},
	];
	const arr2 = [
		{
			img: 'https://i.namu.wiki/i/GFgxq3pF-Jm-R5HzfAazD10byqZcPfso7XcQJTZDBxrMi_IwO1xgB3zH7d86IC0_-kAsI7AweS-ZRbJPutd30TWMqshppm4_AUmPvGJ70FV5zfMhwioPBX-3ZDHBo5d66dc_PY4FOV4BAP3woF3gPw.svg',
			name: 'JavaScript',
			detail: 'used',
		},
		{
			img: 'https://i.namu.wiki/i/S854VYKF1uSlSeRE52JYbppMwaVm7yU3Ev-hsaRbR6Un6foxVfZevwBRyWJli73ZotqunOEmajvhJTJcOlu7TBTxfRMGK7-4mTg8T_re-UOa6ESYjD4RtfaISwWFq4I_0H3ZExej1uee2sOa_8ZZMQ.svg',
			name: 'HTML',
			detail: 'used',
		},
		{
			img: 'https://i.namu.wiki/i/2WNY6CmWKE2Ygyj6YmUJNSs0I-fcf0gmDz-fc4byWRqjMyyC9SOHd0PWI2dI61RMyV6t3UbVlydTkkj7Ea_z81C0SH16waMzlLNE2j79ulS9kTurl5H8Gah7Mj7qGHgWKnpIjeqEmvWltUv6SDKScg.svg',
			name: 'CSS',
			detail: 'used',
		},
		{
			img: 'https://i.namu.wiki/i/hIvF8sd9cGZGkHWB0HZg9S-yvN7Kcy4V_fNWF4ygZLKQb3ilN72OE2c_9SxFIrU4s9gkN51cKr0nEyDvb6pgf_Aro8pO_ew8l-XYRdsaiSCqTfHcXGQZuVB-dzFn4ldgV3ROVRlixJZX9Swd-Ga6EQ.svg',
			name: 'React',
			detail: 'used',
		},
	];

	const ref = useRef();
	// console.log(ref.current.innerText);
	return (
		<>
			<S.Wrapper id="3">
				{/* <S.BoxWrapper>
					{arr1.map(el => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							{isHover && el.name === ref.current.innerText && (
								<Explain detail={el.detail} />
							)}
							<S.ImgBox>
								<img src={el.img} width={100} />
								<div ref={ref}>{el.name}</div>
							</S.ImgBox>
						</motion.div>
					))}
				</S.BoxWrapper>
				<S.BoxWrapper>
					{arr2.map(el => (
						<motion.div
							whileHover={{ scale: 1.1 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							<S.ImgBox onMouseOver={() => setIsHover(true)}>
								<img src={el.img} width={100} />
								<div>{el.name}</div>
							</S.ImgBox>
						</motion.div>
					))}
				</S.BoxWrapper> */}
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
								width={100}
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
								width={100}
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
								width={70}
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
								width={140}
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
							{isHover5 && <Explain detail={'familiar'} />}
							<img
								src="https://i.namu.wiki/i/GFgxq3pF-Jm-R5HzfAazD10byqZcPfso7XcQJTZDBxrMi_IwO1xgB3zH7d86IC0_-kAsI7AweS-ZRbJPutd30TWMqshppm4_AUmPvGJ70FV5zfMhwioPBX-3ZDHBo5d66dc_PY4FOV4BAP3woF3gPw.svg"
								width={100}
							/>
							<div>JavaScript</div>
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
								src="https://i.namu.wiki/i/S854VYKF1uSlSeRE52JYbppMwaVm7yU3Ev-hsaRbR6Un6foxVfZevwBRyWJli73ZotqunOEmajvhJTJcOlu7TBTxfRMGK7-4mTg8T_re-UOa6ESYjD4RtfaISwWFq4I_0H3ZExej1uee2sOa_8ZZMQ.svg"
								width={100}
							/>
							<div>HTML</div>
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
							{isHover7 && <Explain detail={'familiar'} />}
							<img
								src="https://i.namu.wiki/i/2WNY6CmWKE2Ygyj6YmUJNSs0I-fcf0gmDz-fc4byWRqjMyyC9SOHd0PWI2dI61RMyV6t3UbVlydTkkj7Ea_z81C0SH16waMzlLNE2j79ulS9kTurl5H8Gah7Mj7qGHgWKnpIjeqEmvWltUv6SDKScg.svg"
								width={70}
							/>
							<div>CSS</div>
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
							{isHover8 && <Explain detail={'familiar'} />}
							<img
								src="https://i.namu.wiki/i/hIvF8sd9cGZGkHWB0HZg9S-yvN7Kcy4V_fNWF4ygZLKQb3ilN72OE2c_9SxFIrU4s9gkN51cKr0nEyDvb6pgf_Aro8pO_ew8l-XYRdsaiSCqTfHcXGQZuVB-dzFn4ldgV3ROVRlixJZX9Swd-Ga6EQ.svg"
								width={140}
							/>
							<div>React</div>
						</S.ImgBox>
					</motion.div>
				</S.BoxWrapper>
			</S.Wrapper>
		</>
	);
};

export default Skill;

const Wrapper = styled.div`
	${sliderContent};
	/* background: linear-gradient(#f8e8ee, #fdcedf); */
	${flexAllCenter}
	flex-direction: column;
`;

const ImgBox = styled.div`
	width: 150px;
	height: 150px;
	background-color: #f9f9f9;
	${flexAllCenter}
	flex-direction:column;
	margin: 20px;
	border-radius: 20px;
	& > div {
		margin-top: 10px;
	}
	font-weight: bold;
`;

const BoxWrapper = styled.div`
	${flexAllCenter};
`;

const Title = styled.div`
	font-size: 3rem;
	font-weight: bold;
`;
const S = {
	Wrapper,
	ImgBox,
	BoxWrapper,
	Title,
};
