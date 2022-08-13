
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Posting from "./pages/posting/Posting";

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