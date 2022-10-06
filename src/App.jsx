import NavBar from "./components/Navbar";
import "./index.css";
import "./assets/images/bg/main.jpg";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import UseScrollToTop from "./hooks/UseScrollToTop";

function App() {
  return (
    <div>
      <div className="h-screen w-screen bg-[url('./assets/images/bg/main.jpg')] bg-cover">
        <NavBar />
        <Intro />
      </div>
      <div className="bg-black/95">
        <Trending />
      </div>
      <UseScrollToTop />
    </div>
  );
}

export default App;
