import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-36 pb-10 pt-7">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
