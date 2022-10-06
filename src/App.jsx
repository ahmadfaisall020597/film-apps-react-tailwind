import NavBar from "./components/Navbar";
import "./index.css";
import "./assets/images/bg/main.jpg";

function App() {
  return (
    <div>
      <div className="h-screen w-screen bg-[url('./assets/images/bg/main.jpg')] bg-cover">
        <NavBar />
        <div className="h-[30%] flex justify-end items-end">
          <div className="container mx-auto text-white flex justify-center items-center">
            <div className="grid-rows-none">
                <div className="grid-cols-none">
                    <h1 className="text-4xl font-bold hover:font-bold leading-none">NONTON GRATIS</h1>
                    <h1 className="text-4xl font-bold hover:font-bold leading-none">GAK PAKE KARCIS</h1>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
