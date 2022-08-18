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

	background-image: 
		radial-gradient(circle at 1.5px 1.5px, #acafef, 1.5px, transparent 0);
		/* linear-gradient(to bottom, transparent, transparent 10%,#fff 10%),
		linear-gradient(to right, #acafef, #acafef 10%, #fff 10%); */
	background-size: 28px 28px;
`;

export default App;
