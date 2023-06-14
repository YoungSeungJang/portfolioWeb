import styled from 'styled-components';

const HomePage = () => {
	return (
		<S.Wrapper>
			<S.Slider>
				<S.First>1</S.First>
			</S.Slider>
			<S.Slider>
				<div>2</div>
			</S.Slider>
			<S.Slider>
				<div>3</div>
			</S.Slider>
		</S.Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
`;

const Slider = styled.div`
	width: 100%;
	height: 100vh;
`;

const First = styled(Slider)`
	background-color: lightcoral;
`;

const S = {
	Wrapper,
	Slider,
	First,
};
