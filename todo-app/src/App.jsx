import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import A from './pages/login';
import B from './pages/home';
import C from './pages/create';
import Create from './pages/signup'
import Card from "./pages/card";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<A/>}/>
          <Route path="/home-page" element={<B/>}/>
          <Route path="/create-todos" element={<C/>}/>
          <Route path="/create-Login-credentials" element={<Create/>}/>
          <Route path="/card" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
