import "./App.css";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import Geolocation from "./components/Geolocation";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
      <FetchData />
      <Geolocation />
      <Footer />
    </div>
  );
}

export default App;
