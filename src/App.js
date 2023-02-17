import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import About from  "./pages/about/About";
import Write from "./pages/write/Write";
import Reports from "./pages/reports/Reports";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
         <About/>
        </Route>
        <Route path="/addcost">{<Write /> }</Route>
        <Route path="/reports">{<Reports /> }</Route>
        <Route path="/cost/:costId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;