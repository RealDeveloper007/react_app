import React, { useEffect } from 'react';
import { Footer, Header } from './components';
import { Router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import { useLocation,useParams } from "react-router-dom";
import { Loader } from './components/Loader';
import { useDispatch } from 'react-redux';
import { storeUserData } from './redux/actions';

function App() {
  const params = useLocation();
  const path = params.pathname.split('/')[1];
  const dispatch = useDispatch();
  // const {id} = useParams();

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const user: string = sessionStorage.getItem('user') || '{}';
      dispatch(storeUserData(JSON.parse(user)));
    }
  },[])
  return (
    <div className={path==='' ? 'home' : path }>
      <Loader/>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
