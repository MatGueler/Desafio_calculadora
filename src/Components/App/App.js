import GlobalStyle from '../../Assets/CSS/GlobalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculatorPage from '../Calculator_page/Calculator_page';

function App() {
	const Calculator_page = new CalculatorPage();
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path={'/'} element={Calculator_page.render()} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
