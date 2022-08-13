import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Posting from './pages/Posting';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/Posting" element={<Posting />} />
				<Route path="/Detail" element={<Detail />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
