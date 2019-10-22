import React from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Dashboard from './dashboard';
import ErrorPage from './error';
import Color from './gallery/color';

const Home = () => (<h1>Home</h1>);
const Gallery = () => (<h1><Link to="/gallery/color">跳转</Link></h1>);

const routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'gallery',
    component: Gallery,
    routes: [
      {
        path: 'color',
        component: Color
      }
    ]
  }
];

// 基于 react-router v4及以上版本的嵌套式写法
// Switch 用于处理404等错误页面
const RouteWithSubRoutes = ({ routes, match }) => {
  if (routes.length > 0) {
    return (
      <Switch>
        {
          routes.map((r, i) => {
            let path = match.path === '/' ? `/${r.path}` : `${match.path}/${r.path}`;
            let rs = [<Route exact key={i} path={path} component={r.component} />];

            if (r.routes && r.routes.length > 0) {
              rs.push(<Route key={`${i}_ws`} path={path} render={(props) => (<RouteWithSubRoutes {...props} routes={r.routes} />)} />)
            }

            return rs;
          })
        }
        <Redirect to="/error/not_found_page" />
      </Switch>
    );
  } else {
    return null;
  }
}

const App = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/index" />
      <Route path="/index" component={Home} />
      <Route path="/error/:page" component={ErrorPage} />
      <Route path="/" render={(props) => (<RouteWithSubRoutes {...props} routes={routes} />)} />
    </Switch>
  </Router>
);

export default App;
