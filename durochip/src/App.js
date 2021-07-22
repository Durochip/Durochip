//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landingpage.component";
import ContactUsPage from "./pages/contactus-page/contactuspage.component";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={LandingPage} />
          {/* <Route exact={false} path="/quiz/:authToken" component={QuizPage} /> */}
          <Route exact={false} path="/contactus" component={ContactUsPage} />
          {/* <Route exact={false} path="/loader" component={Loader} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
