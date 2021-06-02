import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Product } from "./pages/Product.js";
import { Reports, ReportsOne, ReportsTwo } from "./pages/Reports";
import { SidebarTwo } from './components/SidebarTwo';

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <SidebarTwo/>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/products' component={Product} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/reports/report1' component={ReportsOne} />
        <Route exact path='/reports/report2' component={ReportsTwo} />
      </Switch>
    </Router>
  );
}

export default App;
