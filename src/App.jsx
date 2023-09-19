import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Another from "./NewComponent";

function App() {
	const [count, setCount] = useState(0);
	function decrement() {
		setCount((prevCount) => prevCount - 1);
	}

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<Another name='Will' />
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<div className='text-2xl font-bold'>
					<span>{count}</span>
					<button
						className='border bg-white text-black mx-3 px-3 py-1 rounded-xl'
						onClick={decrement}>
						-
					</button>
					<button
						className='border bg-white text-black mx-3 px-3 py-1 rounded-xl'
						onClick={increment}>
						+
					</button>
				</div>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
