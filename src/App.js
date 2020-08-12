import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import Output from "./pages/output/output.component";
import SimpleReactLightbox from "simple-react-lightbox";
export default class App extends Component {
  render() {
    return (
      <div>
        <SimpleReactLightbox>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/rezume" component={Homepage} />
            <Route exact path="/9860124286" component={Output} />
          </Switch>
        </SimpleReactLightbox>
      </div>
    );
  }
}
