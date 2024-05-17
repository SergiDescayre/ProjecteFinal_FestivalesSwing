import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store";
import MainLayout from "./layouts/MainLayout";
import ContexProvider from "./context/FestivalContext";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./translations/es/global.json";
import global_ca from "./translations/ca/global.json";
import global_en from "./translations/en/global.json";

i18next.init({
  interpolation: { escapeVaue: false },
  lng: "ca",
  resources: {
    es: {
      global: global_es,
    },
    ca: {
      global: global_ca,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <ContexProvider>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </ContexProvider>
    </Provider>
  </I18nextProvider>
);
