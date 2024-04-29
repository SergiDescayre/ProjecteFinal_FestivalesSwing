import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Provider } from "react-redux";
import store from "./features/store";
import MainLayout from './layouts/MainLayout'
import ContexProvider from './context/FestivalContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <ContexProvider>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </ContexProvider>
  </Provider>
)
