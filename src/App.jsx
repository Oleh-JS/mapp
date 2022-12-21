import "./App.css";
import Header from "./Components/Main/Header/Header";
import Offer from "./Components/Main/Offer/Offer";
import Info from "./Components/About/Info/Info";

function App() {
  return (
    <div className="container">
      <Header />
      <Offer />
      <Info />
    </div>
  );
}

export default App;
