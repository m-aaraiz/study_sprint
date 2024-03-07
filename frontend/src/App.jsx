import "./App.css";
import Footer from "./components/Footer.jsx";

function App() {

	return (
		<main>
			<h1>StudySprint</h1>

			{/* Need to split into components */}
			<div className="main-box">
				<div className="timer-card">Timer card</div>
				<div className="tasks-card">
					Tasks card
					<input type="text" placeholder="Enter task" />
				</div>
				<div className="goals-card">Goals card</div>
			</div>

			<Footer />
		</main>
	);
}

export default App;
