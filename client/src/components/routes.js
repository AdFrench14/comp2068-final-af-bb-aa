import React from "react";
import { Route, Switch } from "react-router-dom";

import CountryIndex from "./countries/index";
import CountryShow from "./countries/show";
import CountryNew from "./countries/new";
import CountryEdit from "./countries/edit";
import CountryDestroy from "./countries/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={CountryIndex} />
      <Route exact path="/new" component={CountryNew} />
      <Route exact path="/:id" component={CountryShow} />
      <Route exact path="/:id/edit" component={CountryEdit} />
      <Route exact path="/:id/destroy" component={CountryDestroy} />
    </Switch>
  );
}

export default Routes;