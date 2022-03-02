import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { LWTemplate } from "./templates/ListWorkTemplate/ListWorkTemplate";
import ListWorkPage from "./pages/ListWorkPage";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      {/* <Header /> */}
      <Switch>
        <HomeTemplate path="/" exact Component={HomePage} />
        <HomeTemplate path="/home" exact Component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <LWTemplate path="/listwork" exact Component={ListWorkPage} />
        <Route path="/join" exact component={SignIn} />
        <Route path="/sign" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
