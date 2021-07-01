import React from 'react';
import './index.css';


function Header(props) {
  return(
    <header style={{border: "dotted"}}>
      <div>
        <h1>{props.name}</h1>
        <h3>{props.description}</h3>
      </div>
    </header>
  )
}

function Main(){
  return(
    <section>
      <ul></ul>
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
const drinkTypes = [
  "Liquor",
  "Wine",
  "Beer",
  "Mocktails"
]




function App() {
  return(
    <div className="App">
      <Header name="Booze Travelers" description="A customizable travel bar"/>
      <Main  />
      <Footer year={new Date().getFullYear()} name="Erin Cola" />
    </div>
  );
}

export default App;
