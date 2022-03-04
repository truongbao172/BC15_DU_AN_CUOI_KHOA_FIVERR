import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./components/Header/Header";
import "antd/dist/antd.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { LWTemplate } from "./templates/ListWorkTemplate/ListWorkTemplate";
import ListWorkPage from "./pages/ListWorkPage";
import { LWTJTemplate } from "./templates/ListWorkTemplate/ListWorlTypeJobTemplate";
import ListWorkTypeJobPage from "./pages/ListWorkTypeJobPage";
import { BackTop } from "antd";
export const history = createBrowserHistory();
function App() {
  const styleBTT = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1dbf73",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };
  return (
    <Router history={history}>
      {/* <Header /> */}
      <Switch>
        <HomeTemplate path="/" exact Component={HomePage} />
        <HomeTemplate path="/home" exact Component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <LWTemplate path="/listwork" exact Component={ListWorkPage} />
        <LWTJTemplate
          path="/listworktypejob"
          exact
          Component={ListWorkTypeJobPage}
        />
        <Route path="/join" exact component={SignIn} />
        <Route path="/sign" exact component={SignUp} />
      </Switch>
      <BackTop>
        <div style={styleBTT}>
          <i class="fas fa-arrow-up"></i>
        </div>
      </BackTop>
    </Router>
  );
}

export default App;
