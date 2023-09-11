import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
