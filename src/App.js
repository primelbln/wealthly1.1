import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
