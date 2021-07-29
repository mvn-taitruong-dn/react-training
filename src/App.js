import "./App.css";
import Header from "./components /Header";
import Footer from "./components /Footer";
import Features from "./pages/Features";
import Account from "./pages/Account";
import Auth from "./pages/Auth";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PrivateRoute from "./core/guards/PrivateRoute";

function App() {
  const match = useRouteMatch("/products");
  return (
    <>
      <Header />
      <div className="page-main">
        <Switch>
          <PrivateRoute path="/account">
            <Account />
          </PrivateRoute>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Features />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
