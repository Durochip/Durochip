import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Navbar from './components/Navbar'
import Button2 from './ui/Button';
import { Button, TomatoButton } from './mUI'




function App() {
  return (
    <>
      <Router>
        <Button2 />


        <Link to="/nav">2 is me</Link>
        <Link to="/about">2 is me</Link>
        <Link to="/contact">2 is me</Link>

        <TomatoButton>Hello its Shreyas</TomatoButton>
        <p>only this paragraph will get the style :)</p>


        <Switch>
          <Route path="/nav" exact component={() => <Navbar />} />
          <Route path="/about" exact component={() => (
            <h1>About</h1>
          )} />
          <Route path="/contact" exact component={() => (
            <h1>Contact</h1>
          )} />
        </Switch>
      </Router>

      <style jsx>{`
      p {
        color: red;
        background-color:black;

      }
      p:hover{
        color:white;
      }
    `}</style>
    </>
  );
}





export default App;
