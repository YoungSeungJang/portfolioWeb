import {
	faBolt,
	faEnvelope,
	faHouse,
	faStar,
	faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { flexAllCenter } from 'styles/common';

const menu = [
	{
		text: 'HOME',
		shape: <FontAwesomeIcon icon={faHouse} style={{ marginRight: '10px' }} />,
	},
	{
		text: 'ABOUT',
		shape: <FontAwesomeIcon icon={faUserAlt} style={{ marginRight: '10px' }} />,
	},
	{
		text: 'SKILL',
		shape: <FontAwesomeIcon icon={faBolt} style={{ marginRight: '10px' }} />,
	},
	{
		text: 'PROJECT',
		shape: <FontAwesomeIcon icon={faBolt} style={{ marginRight: '10px' }} />,
	},
	{
		text: 'CAREER',
		shape: <FontAwesomeIcon icon={faStar} style={{ marginRight: '10px' }} />,
	},
	{
		text: 'CONTACT',
		shape: (
			<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
		),
	},
];

const SideBar = ({ color }) => {
	const [selectMenu, setSelectMenu] = useState('HOME');
	return (
		<>
			<S.Wrapper style={{ color }}>
				<S.StyledLink
					onClick={() => {
						setSelectMenu('HOME');
					}}
					to="1"
					smooth="true"
					duration={750}
				>
					<FontAwesomeIcon icon={faHouse} style={{ marginRight: '10px' }} />
					HOME
				</S.StyledLink>
				<S.StyledLink
					onClick={() => {
						setSelectMenu('ABOUT');
					}}
					to="2"
					smooth="true"
					duration={750}
				>
					<FontAwesomeIcon icon={faUserAlt} style={{ marginRight: '10px' }} />
					ABOUT
				</S.StyledLink>
				{/* <S.StyledLink
					onClick={() => {
						setSelectMenu('SKILL');
					}}
					to="3"
					smooth="true"
					duration={750}
				>
					<FontAwesomeIcon icon={faBook} style={{ marginRight: '10px' }} />
					SKILL
				</S.StyledLink> */}
				<S.StyledLink
					onClick={() => {
						setSelectMenu('PROJECT');
					}}
					to="4"
					smooth="true"
					duration={750}
				>
					<FontAwesomeIcon icon={faBolt} style={{ marginRight: '10px' }} />
					PROJECT
				</S.StyledLink>
				{/* <S.StyledLink to="5" smooth="true" duration={750}>
					<FontAwesomeIcon
						onClick={() => {
							setSelectMenu('CAREER');
						}}
						icon={faStar}
						style={{ marginRight: '10px' }}
					/>
					CAREER
				</S.StyledLink> */}
				{/* <S.StyledLink
					onClick={() => {
						setSelectMenu('CONTACT');
					}}
					to="6"
					smooth="true"
					duration={750}
				>
					<FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
					CONTACT
				</S.StyledLink> */}
			</S.Wrapper>
		</>
	);
};

export default SideBar;

const Wrapper = styled.div`
	position: fixed;
	right: 100px;
	top: 50px;
	${flexAllCenter}
	z-index: 999;
	color: white;
`;

const StyledLink = styled(Link)`
	font-weight: bold;
	margin: 0 10px;
	cursor: pointer;
	&::after {
		display: block;
		content: '';
		border-bottom: solid 3px ${({ color }) => color};
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
		margin-top: 10px;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`;

const S = {
	Wrapper,
	StyledLink,
};
