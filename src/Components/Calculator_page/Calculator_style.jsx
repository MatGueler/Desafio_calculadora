import styled from 'styled-components';

export const Calculator = styled.div`
	--light: #564aff;
	--dark: #15123e;

	width: 420px;
	height: 580px;

	position: relative;

	border-radius: 30px;

	transition: background-color 0.25s;

	box-sizing: border-box;

	padding: 15px;

	z-index: 2;

	background-color: ${(props) =>
		props.color !== 'dark' ? '#15123e' : '#564aff'};

	box-shadow: 2px 0px 20px #2b2828, 2px 0px 20px #2b2828 inset;

	* {
		box-sizing: border-box;
	}

	.display {
		width: 100%;
		height: 20%;

		padding: 0 30px;
	}

	.display p {
		font-weight: bold;
	}

	.history {
		width: 100%;
		height: 50%;

		font-size: 15px;

		display: flex;
		align-items: center;
		justify-content: end;
	}

	.history p {
		color: ${(props) => (props.color === 'dark' ? '#2D2A37' : '#6b6b6b')};
	}

	.current {
		width: 100%;
		height: 50%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		font-size: 30px;

		p:first-child {
			color: ${(props) => (props.color === 'dark' ? '#2D2A37' : '#6b6b6b')};
			transition: color, 0.25s;
		}

		p:nth-child(2) {
			color: ${(props) => (props.color === 'dark' ? '#000000' : '#ffffff')};
			transition: color, 0.25s;
		}
	}

	/* Keyboard styles */

	.keyboard-box {
		width: 100%;
		height: 80%;

		display: flex;

		padding-top: 20px;
	}

	.keyboard {
		width: 100%;
		height: 100%;

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.keyboard-actions {
		width: 100px;
		height: 100%;

		display: flex;
		flex-wrap: wrap;
	}

	.button {
		width: 70px;
		height: 70px;

		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 50%;

		margin: 5px 10px;
		background: linear-gradient(
				180deg,
				${(props) => (props.color === 'dark' ? '#15123e' : '#564aff')} 0%,
				rgba(255, 255, 255, 0.05) 100%
			),
			#2d2a37;
		box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01),
			0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1),
			0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29),
			inset 0px 2px 3px rgba(255, 255, 255, 0.06);
		border-radius: 50%;

		cursor: pointer;

		transition: background-color 0.25s;
	}

	.button svg {
		font-size: 30px;
		color: #ffffff;
	}

	.button p {
		font-size: 20px;
		font-weight: bold;

		color: #ffffff;
	}

	.button:hover {
		transform: translateY(-2px);
		background-color: red;
	}

	.keyboard-actions .button {
		background: linear-gradient(
				180deg,
				${(props) => (props.color === 'dark' ? '#430945' : '#fdcaff')} 0%,
				rgba(255, 255, 255, 0.05) 100%
			),
			#2d2a37;
	}

	.keyboard-actions .button:hover {
		transform: translateY(-2px);
		background-color: red;
	}
`;

export const Container = styled.div`
	height: 100vh;
	width: 100%;

	box-sizing: border-box;

	transition: background-color 0.25s;

	position: relative;

	--light: #fdcaff;
	--dark: #430945;

	* {
		box-sizing: border-box;
	}

	/* Top */

	.top-bar {
		width: 100%;
		height: 60px;

		display: flex;
		align-items: center;

		padding: 10px;

		position: absolute;

		top: 0;
		left: 0;
	}

	/* Main */

	.main-content {
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;

		/* Border */

		padding-top: 70px;
	}

	/* Toogle switch */

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--dark);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: var(--light);
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}

	input:checked + .slider:before {
		background-color: var(--dark);
	}

	input:checked + .slider {
		background-color: var(--light);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--light);
	}

	input:checked + .slider:before {
		/* Use webkit to ensure browser compatibility (Crhome and Safari) */
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
`;
