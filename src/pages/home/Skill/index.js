import styled from 'styled-components';
import { flexAllCenter, sliderContent } from 'styles/common';

const Skill = () => {
	return (
		<S.Wrapper id="3">
			<div>Skill</div>

			<img
				src="https://i.namu.wiki/i/GFgxq3pF-Jm-R5HzfAazD10byqZcPfso7XcQJTZDBxrMi_IwO1xgB3zH7d86IC0_-kAsI7AweS-ZRbJPutd30TWMqshppm4_AUmPvGJ70FV5zfMhwioPBX-3ZDHBo5d66dc_PY4FOV4BAP3woF3gPw.svg"
				width={100}
			/>

			<img
				src="https://i.namu.wiki/i/S854VYKF1uSlSeRE52JYbppMwaVm7yU3Ev-hsaRbR6Un6foxVfZevwBRyWJli73ZotqunOEmajvhJTJcOlu7TBTxfRMGK7-4mTg8T_re-UOa6ESYjD4RtfaISwWFq4I_0H3ZExej1uee2sOa_8ZZMQ.svg"
				width={100}
			/>

			<img
				src="https://i.namu.wiki/i/2WNY6CmWKE2Ygyj6YmUJNSs0I-fcf0gmDz-fc4byWRqjMyyC9SOHd0PWI2dI61RMyV6t3UbVlydTkkj7Ea_z81C0SH16waMzlLNE2j79ulS9kTurl5H8Gah7Mj7qGHgWKnpIjeqEmvWltUv6SDKScg.svg"
				width={70}
			/>
			<img
				src="https://i.namu.wiki/i/hIvF8sd9cGZGkHWB0HZg9S-yvN7Kcy4V_fNWF4ygZLKQb3ilN72OE2c_9SxFIrU4s9gkN51cKr0nEyDvb6pgf_Aro8pO_ew8l-XYRdsaiSCqTfHcXGQZuVB-dzFn4ldgV3ROVRlixJZX9Swd-Ga6EQ.svg"
				width={160}
			/>
		</S.Wrapper>
	);
};

export default Skill;

const Wrapper = styled.div`
	${sliderContent};
	background: linear-gradient(#f8e8ee, #fdcedf);
	${flexAllCenter};
`;

const ImgBox = styled.div`
	width: 100px;
	height: 100px;
`;
const S = {
	Wrapper,
	ImgBox,
};
