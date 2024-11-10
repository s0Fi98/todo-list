import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import A from './pages/login';
import B from './pages/home';
import C from './pages/create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<A/>}/>
          <Route path="/home-page" element={<B/>}/>
          <Route path="/create-todos" element={<C/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
