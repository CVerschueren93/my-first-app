import viteLogo from "/vite.svg";
import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Welcome and enjoy!";

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <DrinkButtons />
    </div>
  );
};
