import { useState } from 'react';

import { FaDivide } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import { TbEqual } from 'react-icons/tb';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Calculator, Container } from './Calculator_style';

class CalculatorPage {
	calculate(firstNum, secondNum, operation) {
		switch (operation) {
			case '+':
				return Number(firstNum) + Number(secondNum);
			case '-':
				return Number(firstNum) - Number(secondNum);
			case '*':
				return Number(firstNum) * Number(secondNum);
			case '/':
				return Number(firstNum) / Number(secondNum);
			case '%':
				return Number(firstNum) / 100;
			default:
				console.log(`Sorry, we are out of ${operation}.`);
		}
	}

	render = () => {
		const numbersArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
		const [darkTheme, setDarkTheme] = useState(true);
		const [current, setCurrent] = useState('');
		const [history, setHistory] = useState('');

		const [num, setNum] = useState('');
		const [olderNum, setOlderNum] = useState('');
		const [operator, setOperator] = useState('');

		const makeOperation = () => {
			if (olderNum === '') {
				setOlderNum(num);
				setNum('');
			} else {
				setNum('');
				setOlderNum(this.calculate(olderNum, num, operator));
			}
		};
		return (
			<Container style={{ backgroundColor: darkTheme ? '#430945' : '#fdcaff' }}>
				<div className='top-bar'>
					<label className='switch'>
						<input
							type='checkbox'
							checked={darkTheme}
							onChange={(e) => {
								setDarkTheme(!darkTheme);
							}}
						/>
						<span className='slider round'></span>
					</label>
				</div>

				<div className='main-content'>
					<Calculator color={darkTheme ? 'dark' : 'light'}>
						<div className='display'>
							<div className='history'>
								<p>{history}</p>
							</div>
							<div className='current'>
								<p>=</p>
								<p>{String(current).replace('.', ',') ?? current}</p>
							</div>
						</div>
						<div className='keyboard-box'>
							<div className='keyboard'>
								<div
									className='button'
									onClick={() => {
										setNum('');
										setOlderNum('');
										setCurrent('');
									}}>
									<p>CE</p>
								</div>
								<div
									className='button'
									onClick={() => {
										setNum('');
										setOlderNum('');
										setCurrent('');
										setHistory('');
									}}>
									<p>C</p>
								</div>
								<div
									className='button'
									onClick={() => {
										setOperator('%');
										makeOperation();
										setCurrent((prev) => (prev += '%'));
									}}>
									<p>%</p>
								</div>
								{numbersArray.map((item, index) => (
									<div
										className='button'
										key={index}
										onClick={() => {
											setNum((prev) => (prev += String(item)));
											setCurrent((prev) => (prev += String(item)));
										}}>
										<p>{item}</p>
									</div>
								))}
								<div
									className='button'
									onClick={() => {
										if (olderNum !== '') {
											const isPositive = this.calculate(
												num,
												olderNum,
												operator
											);
											if (isPositive > 0) {
												setOlderNum(-isPositive);
												setNum('');
												setCurrent(-isPositive);
											} else {
												setOlderNum(Math.abs(isPositive));
												setCurrent(Math.abs(isPositive));
											}
										} else {
											if (num > 0) {
												setNum(-num);
												setOlderNum('');
												setCurrent(-num);
											} else {
												setNum(Math.abs(num));
												setCurrent(Math.abs(num));
											}
										}
									}}>
									<p>+/-</p>
								</div>
								<div
									className='button'
									onClick={() => {
										setNum((prev) => (prev += String('.')));
										setCurrent((prev) => (prev += String(',')));
									}}>
									<p>,</p>
								</div>
							</div>
							<div className='keyboard-actions'>
								<div
									className='button'
									onClick={() => {
										setOperator('/');
										makeOperation();
										setCurrent((prev) => (prev += '/'));
									}}>
									<FaDivide></FaDivide>
								</div>
								<div
									className='button'
									onClick={() => {
										setOperator('*');
										makeOperation();
										setCurrent((prev) => (prev += 'x'));
									}}>
									<VscChromeClose color='#ffffff'></VscChromeClose>
								</div>
								<div
									className='button'
									onClick={() => {
										setOperator('-');
										makeOperation();
										setCurrent((prev) => (prev += '-'));
									}}>
									<AiOutlineMinus></AiOutlineMinus>
								</div>
								<div
									className='button'
									onClick={() => {
										setOperator('+');
										makeOperation();
										setCurrent((prev) => (prev += '+'));
									}}>
									<AiOutlinePlus></AiOutlinePlus>
								</div>
								<div
									className='button'
									onClick={() => {
										setHistory(current);
										setCurrent(this.calculate(olderNum, num, operator));
									}}>
									<TbEqual></TbEqual>
								</div>
							</div>
						</div>
					</Calculator>
				</div>
			</Container>
		);
	};
}

export default CalculatorPage;
