import { useState } from 'react';
import styled from 'styled-components';

class CalculatorPage {
	render = () => {
		const [theme, setTheme] = useState('dark');
		return (
			<Background theme={theme}>
				<h1>Ola</h1>
			</Background>
		);
	};
}

const Background = styled.div`
	background-color: ${(props) => (props.theme === 'dark' ? '#000' : '#fff')};
`;

export default CalculatorPage;
