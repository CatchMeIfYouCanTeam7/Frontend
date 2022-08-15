
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Posting from "./pages/posting/Posting";
import styled from "styled-components";

function App() {
  return (
    <AppContainer className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Posting" element={<Posting />} />
        <Route path="/Posting/:id" element={<Posting />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  /* background-repeat: repeat; */
  background-image: linear-gradient(
      to bottom,
      transparent,
      transparent 10%,
      #fff 10%
    ),
    linear-gradient(to right, #5357f6, #5357f6 10%, #fff 10%);
  background-size: 30px 30px;
`;

export default App;
