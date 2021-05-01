import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <Route component={MainPage} path={'/'} exact />
      <Route component={AboutPage} path={'/about'} exact />
    </>
  );
}

export default App;
