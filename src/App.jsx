import { useState } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

function Header(props) {
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  );
}

//Destructuring the name and year properties in the function parameters
// is a shorthand syntax that allows you to directly access these properties
// without the props. prefix.
// This makes the code cleaner and more readable.
function Shmeader({ name, year }) {
  return (
    <header>
      <h4>
        {name} date: {year}
      </h4>
    </header>
  );
}

const items = [
  "Mac and Cheese",
  "Salmon w Potatoes",
  "Tofy w Veg",
  "Minestro soup",
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));

function Main({ dishes }) {
  return (
    // This is a Fragment  <>...</>  , this is sort of like an enclosing tag that doesn't get recorded in the DOM
    <>
      <div>
        <h2>Welcome to this restaurant</h2>
      </div>
      <main>
        <img src={chef} height={200} alt="A photo of a smiling chef owner" />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  //Example of destructuring array:
  const [, , third] = ["giraffe", "zebra", "bear"];
  console.log(third);

  // Recommendation: create your state within, say, the App component
  // or whatewer the root component is in your application.
  // And then you can pass these values down as properties to child components.
  const [status, setStatus] = useState(true);

  return (
    //By wrapping both Header and Main and Shmeader in a single parent div or other tag,
    // we ensure that adjacent JSX elements are enclosed in a single parent,
    // which is a requirement in JSX.
    <div>
      <Header name="Mike's restaurant" />
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={() => setStatus(!status)}>
        {status ? "Close" : "Open"} restaurant
      </button>
      <Main dishes={dishObjects} />

      <Shmeader name="Shmeader" year={new Date().getFullYear()} />
      <main>
        <h5>We serve delicious food</h5>
      </main>
    </div>
  );
}

export default App;
