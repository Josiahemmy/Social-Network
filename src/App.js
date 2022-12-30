import { Route, BrowserRouter as Router } from "react-router-dom";

import Feed from "./component/Feed";
import Footer from "./component/Footer";
import Header from "./component/Header";
import LandingPage from "./component/LandingPage";
import React from "react";
import UserProfile from "./component/UserProfile";

function App() {
  return (
    <Router>
      <Route path="/header" component={Header} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/profile/:userId" component={UserProfile} />
      <Route path="/feed" component={Feed} />
      <Route path="/footer" component={Footer} />
    </Router>
  );
}

export default App;
