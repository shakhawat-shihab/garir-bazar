import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import NavigationBar from './pages/Shared/NavigationBar/NavigationBar';
import AuthProvider from './context/AuthProvider/AuthProvider';
import LogIn from './pages/LogIn/LogIn/LogIn';
import Register from './pages/LogIn/Register/Register';
import NotFound from './pages/Shared/NotFound/NotFound';
import PrivateRoute from './pages/LogIn/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
// import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/services'>
            <h2 className='mt-5 pt-5'>Services</h2>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
