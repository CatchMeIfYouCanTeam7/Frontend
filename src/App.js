import { Route, Routes } from "react-router-dom";
import { Main, Posting, Detail, Login, SignUp } from "./pages";

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
