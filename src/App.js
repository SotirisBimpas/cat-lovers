import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "./pages/Home";
import Breeds from "./pages/Breeds";
import Favourites from "./pages/Favourites";
import "semantic-ui-css/semantic.min.css";

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  a {
    color: black;
  }
  a:hover {
    background: black;
    color: white;
    transition: all 150ms ease;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="breeds">Breeds</Link>
          <Link to="favourites">Favourites</Link>
        </Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/breeds" component={Breeds} />
          <Route path="/favourites" component={Favourites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;