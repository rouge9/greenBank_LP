import Hero from "./components/sections/Hero";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="w-full p-8 bg-custom-background bg-cover bg-neutral-800 font-mplus">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
