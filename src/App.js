import React, { Suspense, lazy } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const Login = lazy(() => import('./Assets/Components/Login'));
const Home = lazy(() => import('./Assets/Components/Home'));
const Launches = lazy(() => import('./Assets/Components/Launches'));
const Rockets = lazy(() => import('./Assets/Components/Rockets'));
const Dragons = lazy(() => import('./Assets/Components/Dragons'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
