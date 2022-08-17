import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Posting from './pages/posting/Posting';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posting" element={<Posting />} />
        <Route path="/posting/:id" element={<Posting />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
	font-family: 'Jua', sans-serif;

	/* background-repeat: repeat; */
	background-image: linear-gradient(
			to bottom,
			transparent,
			transparent 10%,
			#fff 10%
		),
		linear-gradient(to right, #acafef, #acafef 10%, #fff 10%);
	background-size: 30px 30px;
`;

export default App;
