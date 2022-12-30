import { Route, BrowserRouter as Router } from "react-router-dom";

import Feed from "./Feed";
import LandingPage from "./LandingPage";
import React from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/profile/:userId" component={UserProfile} />
      <Route path="/feed" component={Feed} />
    </Router>
  );
}

export default App;
