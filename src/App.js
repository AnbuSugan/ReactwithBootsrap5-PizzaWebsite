import logo from "./logo.svg";
import "./App.css";
import AppBar from "./Components/Header";
import Banner from "./Components/Banner";
import Menu from "./Components/Menu";
import Pickoftheweek from "./Components/Pickoftheweek";
import Comments from "./Components/Comments";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu />
      <Pickoftheweek />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
