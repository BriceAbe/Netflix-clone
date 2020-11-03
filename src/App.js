import "./App.css";
import logo from "../src/logoNetflix.png";
import Header from "./Header";
import Section from "./Section";
import data from "./movies.json";

function App() {
  return (
    <div className="App">
      <Header image={logo} />
      {data.map((item) => {
        return <Section elements={item} />;
      })}
    </div>
  );
}

export default App;
