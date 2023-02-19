import "./App.css";
import Banner from "./components/Banner/Banner";
import Benefit from "./components/Benefit/Benefit";
import Destination from "./components/Destination/Destination";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Remember from "./components/Remember/Remember";
import Selected from "./components/Selected/Selected";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Benefit></Benefit>
      <Destination></Destination>
      <Remember></Remember>
      <Selected></Selected>
      <Explore></Explore>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
