import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header/Index';
import News from './News/Index';
import { useSelector } from 'react-redux';
import Home from './Home/Index';
import Authorization from './Authorization/Index';

function App() {
  const modal = useSelector((state) => state.users.modal);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route exact path={'/news'}>
          <News />
        </Route>
        <Redirect to={'/'} />
      </Switch>
      {modal ? <Authorization /> : null}
    </div>
  );
}

export default App;
