import styled from 'styled-components';

const PageList = () => {
	return (
		<S.Wrapper>
			<button></button>
			<button></button>
			<button></button>
			<button></button>
			<button></button>
			<button></button>
		</S.Wrapper>
	);
};

export default PageList;

const Wrapper = styled.aside`
	display: grid;
	width: 15px;
	position: fixed;
	top: 30%;
	right: 8%;
	& > button {
		width: 15px;
		height: 15px;
		margin-bottom: 5px;
		display: block;
		outline: none;
		border: none;
		border-radius: 100%;
		background-color: rgba(200, 200, 200, 0.7);
		cursor: pointer;
	}
	& > button:first-child {
		background-color: rgba(216, 191, 216, 1);
	}
`;

const S = {
	Wrapper,
};
