import React from 'react';
import './index.css';


function Header(props) {
  return(
    <header style={{border: "dotted"}}>
      <div>
        <h1>**{props.name}**<br></br>{props.description}</h1>
      </div>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <ul style={{textAlign: "left"}}>
        {props.drinks.map((drink) => (
          <li key={drink.id}>{drink.title}</li>
      ))}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer style={{borderTop: "solid", fontFamily: "monospace", fontSize: "small", textAlign: "right"}}>
      <p>Creator/Owner: {props.name} -- Copyright: {props.year} </p>
    </footer>
  )
}

const drinks = [
  "Liquor",
  "Wine",
  "Beer",
  "Mocktails"
];

const drinkObjects = drinks.map((drink, i) => (
  { id: i, title: drink}));

function App() {
  return(
    <div className="App">
      <Header name="Booze Travelers" description="A customizable travel bar"/>
      <Main drinks={drinkObjects}/>
      <Footer year={new Date().getFullYear()} name="Erin Cola" />
    </div>
  );
}

export default App;
