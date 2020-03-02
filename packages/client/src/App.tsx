import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global-styles";
import AddBookmark from "./containers/AddBookmark";
import List from "./containers/List";

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Route exact path="/" component={List} />
      <Route path="/new" component={AddBookmark} />
    </BrowserRouter>
  </>
);

export default App;
